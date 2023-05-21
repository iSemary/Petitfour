<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Blog;
use App\Models\Skill;
use Illuminate\Http\Request;
use \DataTables;
use Illuminate\Support\Facades\Validator;
use \Image;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller {
    protected $type;
    public function __construct() {
        $this->type = [];
    }
    public function index() {
        if (request()->ajax()) {
            $blogs = Blog::orderBy("id", "DESC")->get();
            return DataTables::of($blogs)
                ->editColumn('type', function ($row) {
                    return $this->type[$row->type];
                })
                ->addColumn('icon', function ($row) {
                    return "<img src='$row->icon' width='45px' />";
                })
                ->addColumn('action', function ($row) {
                    $btn = '';
                    $btn .= '<button type="button" data-url="' . route('blogs.edit', $row->id) . '" class="btn btn-info btn-sm edit-btn text-white mr-1"><i class="far fa-edit"></i> Edit</button>';
                    $btn .= '<button type="button" data-delete-type="Blog" data-url="' . route('blogs.destroy', $row->id) . '" class="btn btn-danger btn-sm delete-btn text-white mr-1"><i class="fa fa-trash"></i> Delete</button>';
                    return $btn;
                })
                ->rawColumns(['icon', 'action'])
                ->make(true);
        }

        return view("panel.blogs.index");
    }


    public function create() {
        $skills = Skill::all();
        return view('panel.blogs.editor', compact("skills"));
    }

    public function store(Request $request) {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:blogs',
            'category_id' => 'required',
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
        Storage::disk('public')->put('blogs/' . $filename, $image);


        $blog = Blog::create([
            'name' => $request->input('name'),
            'category_id' => $request->input('category_id'),
            'type' => $request->input('type'),
            'priority' => $request->input('priority'),
            'icon' => $filename,
            'start_date' => $request->input('start_date'),
        ]);

        if ($blog) {
            return response()->json(['message' => "Blog added successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }

    public function edit($id) {
        $blog = Blog::findOrFail($id);
        $skills = Skill::all();
        return view('panel.blogs.editor', compact('blog', 'skills'));
    }

    public function update(Request $request, $id) {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:blogs,name,' . $id,
            'category_id' => 'required',
            'type' => 'required',
            'priority' => 'required',
            'start_date' => 'required',
        ]);

        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get the blog by ID
        $blog = Blog::findOrFail($id);

        // Get the icon image file from the request
        $iconImage = $request->file('icon');

        if ($iconImage) {
            // Generate a unique file name for the image
            $filename = uniqid() . '.webp';
            // Convert and save the image as WebP
            $image = Image::make($iconImage)->encode('webp');
            // Save the image to the storage directory
            Storage::disk('public')->put('blogs/' . $filename, $image);

            // Delete the previous icon image if it exists
            if ($blog->icon && Storage::disk('public')->exists('blogs/' . $blog->icon)) {
                Storage::disk('public')->delete('blogs/' . $blog->icon);
            }

            // Update the blog with the new icon filename
            $blog->icon = $filename;
        }

        // Update other blog properties
        $blog->name = $request->input('name');
        $blog->category_id = $request->input('category_id');
        $blog->type = $request->input('type');
        $blog->priority = $request->input('priority');
        $blog->start_date = $request->input('start_date');
        $blog->save();

        if ($blog) {
            return response()->json(['message' => "Blog updated successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }

    public function destroy($id) {
        $blog = Blog::findOrFail($id);
        // Delete the image file if exists
        if (Storage::disk('public')->exists('blogs/' . $blog->icon)) {
            Storage::disk('public')->delete('blogs/' . $blog->icon);
        }
        $blog->delete();
        return response()->json(['message' => "Blog deleted successfully"], 200);
    }
}
