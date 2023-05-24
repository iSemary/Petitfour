<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use \Image;
use Illuminate\Support\Facades\Storage;
use Yajra\DataTables\Facades\DataTables;

class ProjectController extends Controller {

    public function index() {
        if (request()->ajax()) {
            $projects = Project::orderBy("id", "DESC")->get();
            return DataTables::of($projects)
                ->addColumn('action', function ($row) {
                    $btn = '';
                    $btn .= '<button type="button" data-url="' . route('projects.edit', $row->id) . '" class="btn btn-info btn-sm edit-btn text-white mr-1"><i class="far fa-edit"></i> Edit</button>';
                    $btn .= '<button type="button" data-delete-type="Project" data-url="' . route('projects.destroy', $row->id) . '" class="btn btn-danger btn-sm delete-btn text-white mr-1"><i class="fa fa-trash"></i> Delete</button>';
                    return $btn;
                })
                ->rawColumns(['action'])
                ->make(true);
        }

        return view("panel.projects.index");
    }


    public function create() {
        $skills = Skill::all();
        return view('panel.projects.editor', compact("skills"));
    }

    public function store(Request $request) {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'company_name' => 'required|unique:projects',
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
        Storage::disk('public')->put('projects/' . $filename, $image);


        $project = Project::create([
            'company_name' => $request->input('company_name'),
            'company_logo' => $filename,
            'company_location' => $request->input('company_location'),
            'position_title' => $request->input('position_title'),
            'summary' => $request->input('summary'),
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('end_date'),
        ]);

        if ($project) {
            $project->skills()->sync($request->input('skill_id'));

            return response()->json(['message' => "Project added successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }

    public function edit($id) {
        $project = Project::findOrFail($id);
        $skills = Skill::all();
        return view('panel.projects.editor', compact('project', 'skills'));
    }

    public function update(Request $request, $id) {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'company_name' => 'required|unique:projects,company_name,' . $id,
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

        // Get the project by ID
        $project = Project::find($id);

        if (!$project) {
            return response()->json(['message' => 'Project not found'], 404);
        }

        // Get the image file from the request
        $image = $request->file('company_logo');

        if ($image) {
            // Generate a unique file name for the image
            $filename = uniqid() . '.webp';
            // Convert and save the image as WebP
            $image = Image::make($image)->encode('webp');
            // Save the image to the storage directory
            Storage::disk('public')->put('projects/' . $filename, $image);

            // Delete the previous image if it exists
            if ($project->company_image) {
                Storage::disk('public')->delete('projects/' . $project->company_logo);
            }

            // Update the image filename
            $project->company_logo = $filename;
        }

        $project->company_name = $request->input('company_name');
        $project->company_location = $request->input('company_location');
        $project->position_title = $request->input('position_title');
        $project->summary = $request->input('summary');
        $project->start_date = $request->input('start_date');
        $project->end_date = $request->input('end_date');

        // Save the updated project
        if ($project->save()) {
            $project->skills()->sync($request->input('skill_id'));

            return response()->json(['message' => "Project updated successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }


    public function destroy($id) {
        $project = Project::findOrFail($id);
        // Delete the image file if exists
        if (Storage::disk('public')->exists('projects/' . $project->company_image)) {
            Storage::disk('public')->delete('projects/' . $project->company_image);
        }
        $project->delete();
        return response()->json(['message' => "Project deleted successfully"], 200);
    }
}
