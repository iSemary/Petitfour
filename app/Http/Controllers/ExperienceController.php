<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use \Image;
use Illuminate\Support\Facades\Storage;
use Yajra\DataTables\Facades\DataTables;

class ExperienceController extends Controller {

    public function index() {
        if (request()->ajax()) {
            $experiences = Experience::orderBy("id", "DESC")->get();
            return DataTables::of($experiences)
                ->addColumn('action', function ($row) {
                    $btn = '';
                    $btn .= '<button type="button" data-url="' . route('experiences.edit', $row->id) . '" class="btn btn-info btn-sm edit-btn text-white mr-1"><i class="far fa-edit"></i> Edit</button>';
                    $btn .= '<button type="button" data-delete-type="Experience" data-url="' . route('experiences.destroy', $row->id) . '" class="btn btn-danger btn-sm delete-btn text-white mr-1"><i class="fa fa-trash"></i> Delete</button>';
                    return $btn;
                })
                ->rawColumns(['action'])
                ->make(true);
        }

        return view("panel.experiences.index");
    }


    public function create() {
        $skills = Skill::all();
        return view('panel.experiences.editor', compact("skills"));
    }

    public function store(Request $request) {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'company_name' => 'required|unique:experiences',
            'company_logo' => 'required',
            'company_location' => 'required',
            'position_title' => 'required',
            'summary' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
        ]);

        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get the icon image file from the request
        $Image = $request->file('company_logo');
        // Generate a unique file name for the image
        $filename = uniqid() . '.webp';
        // Convert and save the image as WebP
        $image = Image::make($Image)->encode('webp');
        // Save the image to the storage directory
        Storage::disk('public')->put('experiences/' . $filename, $image);


        $experience = Experience::create([
            'company_name' => $request->input('company_name'),
            'company_logo' => $filename,
            'company_location' => $request->input('company_location'),
            'position_title' => $request->input('position_title'),
            'summary' => $request->input('summary'),
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('end_date'),
        ]);

        if ($experience) {
            $experience->skills()->sync($request->input('skill_id'));

            return response()->json(['message' => "Experience added successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }

    public function edit($id) {
        $experience = Experience::findOrFail($id);
        $skills = Skill::all();
        return view('panel.experiences.editor', compact('experience', 'skills'));
    }

    public function update(Request $request, $id) {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'company_name' => 'required|unique:experiences,company_name,' . $id,
            'company_location' => 'required',
            'position_title' => 'required',
            'summary' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
        ]);

        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get the experience by ID
        $experience = Experience::find($id);

        if (!$experience) {
            return response()->json(['message' => 'Experience not found'], 404);
        }

        // Get the image file from the request
        $image = $request->file('company_logo');

        if ($image) {
            // Generate a unique file name for the image
            $filename = uniqid() . '.webp';
            // Convert and save the image as WebP
            $image = Image::make($image)->encode('webp');
            // Save the image to the storage directory
            Storage::disk('public')->put('experiences/' . $filename, $image);

            // Delete the previous image if it exists
            if ($experience->company_image) {
                Storage::disk('public')->delete('experiences/' . $experience->company_logo);
            }

            // Update the image filename
            $experience->company_logo = $filename;
        }

        $experience->company_name = $request->input('company_name');
        $experience->company_location = $request->input('company_location');
        $experience->position_title = $request->input('position_title');
        $experience->summary = $request->input('summary');
        $experience->start_date = $request->input('start_date');
        $experience->end_date = $request->input('end_date');

        // Save the updated experience
        if ($experience->save()) {
            $experience->skills()->sync($request->input('skill_id'));

            return response()->json(['message' => "Experience updated successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }


    public function destroy($id) {
        $experience = Experience::findOrFail($id);
        // Delete the image file if exists
        if (Storage::disk('public')->exists('experiences/' . $experience->company_image)) {
            Storage::disk('public')->delete('experiences/' . $experience->company_image);
        }
        $experience->delete();
        return response()->json(['message' => "Experience deleted successfully"], 200);
    }
}
