<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Models\Blog;
use App\Models\Skill;
use Illuminate\Http\Request;
use \DataTables;
use Illuminate\Support\Facades\Validator;
use \Image;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller {
    public function index() {
        if (request()->ajax()) {
            $blogs = Blog::orderBy("id", "DESC");
            return DataTables::of($blogs)
                ->addColumn('action', function ($row) {
                    $btn = '';
                    $btn .= '<button type="button" data-url="' . route('blogs.edit', $row->id) . '" class="btn btn-info btn-sm edit-btn text-white mr-1"><i class="far fa-edit"></i> Edit</button>';
                    $btn .= '<button type="button" data-delete-type="Blog" data-url="' . route('blogs.destroy', $row->id) . '" class="btn btn-danger btn-sm delete-btn text-white mr-1"><i class="fa fa-trash"></i> Delete</button>';
                    return $btn;
                })
                ->rawColumns(['action'])
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
            'title' => 'required',
            'slug' => 'required|unique:blogs',
            'content' => 'required',
            'description' => 'required',
            'image' => 'required',
            'published_at' => 'required',
            'status' => 'required',
        ]);

        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $image = Uploader::image($request->file('image'), null, 'blogs');


        $blog = Blog::create([
            'title' => $request->input('title'),
            'slug' => $request->input('slug'),
            'content' => $request->input('content'),
            'description' => $request->input('description'),
            'image' => $image,
            'published_at' => $request->input('published_at'),
            'status' => $request->input('status'),
        ]);

        if ($blog) {
            $blog->skills()->sync($request->input('skill_id'));

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
            'title' => 'required',
            'slug' => 'required|unique:blogs,slug,' . $id,
            'content' => 'required',
            'description' => 'required',
            'published_at' => 'required',
            'status' => 'required',
        ]);

        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get the blog by ID
        $blog = Blog::find($id);

        if (!$blog) {
            return response()->json(['message' => 'Blog not found'], 404);
        }


        $image = Uploader::image($request->file('image'),$blog->image, 'blogs');


        $blog->title = $request->input('title');
        $blog->slug = $request->input('slug');
        $blog->content = $request->input('content');
        $blog->description = $request->input('description');
        $blog->published_at = $request->input('published_at');
        $blog->status = $request->input('status');
        $blog->image = $image;

        // Save the updated blog
        if ($blog->save()) {
            $blog->skills()->sync($request->input('skill_id'));

            return response()->json(['message' => "Blog updated successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }


    public function destroy($id) {
        $blog = Blog::findOrFail($id);
        $blog->skills()->sync([]);
        // Delete the image file if exists
        if (Storage::disk('public')->exists('blogs/' . $blog->icon)) {
            Storage::disk('public')->delete('blogs/' . $blog->icon);
        }
        $blog->delete();
        return response()->json(['message' => "Blog deleted successfully"], 200);
    }
}
