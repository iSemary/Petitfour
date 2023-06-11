<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Skill;
use Illuminate\Http\Request;
use \DataTables;
use Illuminate\Support\Facades\Validator;
use \Image;
use Illuminate\Support\Facades\Storage;

class SkillController extends Controller {
    protected $type;
    public function __construct() {
        $this->type = ["Main Skill", "Side Skill"];
    }
    public function index() {
        if (request()->ajax()) {
            $skills = Skill::leftJoin("categories", "categories.id", "skills.category_id")->select(["skills.*", "categories.name as category_name"])->orderBy("id", "DESC")->get();
            return DataTables::of($skills)
                ->editColumn('type', function ($row) {
                    return $this->type[$row->type];
                })
                ->addColumn('icon', function ($row) {
                    return "<img src='$row->icon' width='45px' />";
                })
                ->addColumn('action', function ($row) {
                    $btn = '';
                    $btn .= '<button type="button" data-url="' . route('skills.edit', $row->id) . '" class="btn btn-info btn-sm edit-btn text-white mr-1"><i class="far fa-edit"></i> Edit</button>';
                    $btn .= '<button type="button" data-delete-type="Skill" data-url="' . route('skills.destroy', $row->id) . '" class="btn btn-danger btn-sm delete-btn text-white mr-1"><i class="fa fa-trash"></i> Delete</button>';
                    return $btn;
                })
                ->rawColumns(['icon', 'action'])
                ->make(true);
        }

        return view("panel.skills.index");
    }


    public function create() {
        $categories = Category::all();
        return view('panel.skills.editor', compact("categories"));
    }

    public function store(Request $request) {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:skills',
            'type' => 'required',
            'priority' => 'required',
            'start_date' => 'required',
        ]);
        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get the icon image file from the request
        $iconImage = $request->file('icon');
        // Generate a unique file name for the image
        $filename = uniqid() . '.webp';
        // Convert and save the image as WebP
        $image = Image::make($iconImage)->encode('webp');
        // Save the image to the storage directory
        Storage::disk('public')->put('skills/' . $filename, $image);


        $skill = Skill::create([
            'name' => $request->input('name'),
            'category_id' => $request->input('category_id'),
            'type' => $request->input('type'),
            'priority' => $request->input('priority'),
            'color_code' => $request->input('color_code'),
            'highlight' => boolval($request->input('highlight')),
            'icon' => $filename,
            'start_date' => $request->input('start_date'),
        ]);

        if ($skill) {
            return response()->json(['message' => "Skill added successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }

    public function edit($id) {
        $skill = Skill::findOrFail($id);
        $categories = Category::all();
        return view('panel.skills.editor', compact('skill', 'categories'));
    }

    public function update(Request $request, $id) {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:skills,name,' . $id,
            'type' => 'required',
            'priority' => 'required',
            'start_date' => 'required',
        ]);

        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get the skill by ID
        $skill = Skill::findOrFail($id);

        // Get the icon image file from the request
        $iconImage = $request->file('icon');
        if ($iconImage) {
            // Generate a unique file name for the image
            $filename = uniqid() . '.webp';
            // Convert and save the image as WebP
            $image = Image::make($iconImage)->encode('webp');
            // Save the image to the storage directory
            Storage::disk('public')->put('skills/' . $filename, $image);

            // Delete the previous icon image if it exists
            if ($skill->icon && Storage::disk('public')->exists('skills/' . $skill->icon)) {
                Storage::disk('public')->delete('skills/' . $skill->icon);
            }

            // Update the skill with the new icon filename
            $skill->icon = $filename;
        }

        // Update other skill properties
        $skill->name = $request->input('name');
        $skill->category_id = $request->input('category_id');
        $skill->type = $request->input('type');
        $skill->priority = $request->input('priority');
        $skill->color_code = $request->input('color_code');
        $skill->highlight = boolval($request->input('highlight'));
        $skill->start_date = $request->input('start_date');
        $skill->save();

        if ($skill) {
            return response()->json(['message' => "Skill updated successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }

    public function destroy($id) {
        $skill = Skill::findOrFail($id);
        // Delete the image file if exists
        if (Storage::disk('public')->exists('skills/' . $skill->icon)) {
            Storage::disk('public')->delete('skills/' . $skill->icon);
        }
        $skill->delete();
        return response()->json(['message' => "Skill deleted successfully"], 200);
    }

    public function sort() {
        $skills = Skill::select(['id', 'name', 'priority'])->orderBy('priority')->get();
        return view('panel.skills.sortable', compact('skills'));
    }

    public function updateSort(Request $request) {

        if (isset($request->id) && is_array($request->id) && count($request->id)) {
            foreach ($request->id as $key => $id) {
                Skill::where('id', $id)->update([
                    'priority' => $key + 1
                ]);
            }
        }
        return response()->json(['message' => "Skills sorted successfully"], 200);
    }
}
