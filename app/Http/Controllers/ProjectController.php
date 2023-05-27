<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectImage;
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
            'name' => 'required|unique:projects',
            'description' => 'required',
            'type' => 'required',
            'priority' => 'required',
            'images' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
        ]);

        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $tags = json_decode($request->input("tags"), true);
        $tags = implode(', ', array_column($tags, 'value'));

        $project = Project::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'type' => $request->input('type'),
            'tags' => $tags,
            'priority' => $request->input('priority'),
            'repository_link' => $request->input('repository_link'),
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('end_date'),
        ]);

        if ($project) {
            $project->skills()->sync($request->input('skill_id'));
            $request->images ? $this->syncImages($project, $request->images) : null;
            return response()->json(['message' => "Project added successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }

    public function edit($id) {
        $project = Project::findOrFail($id);
        $project->images = ProjectImage::select("project_image")->where("project_id", $project->id)->get();
        $skills = Skill::all();
        return view('panel.projects.editor', compact('project', 'skills'));
    }

    public function update(Request $request, $id) {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:projects,name,' . $id,
            'description' => 'required',
            'type' => 'required',
            'priority' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
        ]);

        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $project = Project::find($id);

        if (!$project) {
            return response()->json(['message' => "Project not found"], 404);
        }

        $tags = json_decode($request->input("tags"), true);
        $tags = implode(', ', array_column($tags, 'value'));


        $project->name = $request->input('name');
        $project->description = $request->input('description');
        $project->type = $request->input('type');
        $project->tags = $tags;
        $project->priority = $request->input('priority');
        $project->repository_link = $request->input('repository_link');
        $project->start_date = $request->input('start_date');
        $project->end_date = $request->input('end_date');

        if ($project->save()) {
            $project->skills()->sync($request->input('skill_id'));
            $request->images ? $this->syncImages($project, $request->images) : null;
        }
        return response()->json(['message' => "Project updated successfully"], 200);
    }

    private function syncImages($project, $images) {
        $projectImages = ProjectImage::where('project_id', $project->id);

        foreach ($projectImages->get() as $projectImage) {
            if (Storage::disk('public')->exists('projects/' . $projectImage->project_image)) {
                Storage::disk('public')->delete('projects/' . $projectImage->project_image);
            }
        }

        $projectImages->delete();

        // Delete existing project images

        // Process each uploaded image
        foreach ($images as $image) {
            // Generate a unique filename for each image
            $filename = uniqid() . '.webp';

            // Store the image in the public disk under the 'projects' directory
            $path = $image->storeAs('projects', $filename, 'public');

            // Convert and save the image as WebP
            $path = Image::make($image)->encode('webp');
            // Save the image to the storage directory
            Storage::disk('public')->put('projects/' . $filename, $path);



            // Create a new project image record
            ProjectImage::create([
                'project_id' => $project->id,
                'project_image' => $filename,
            ]);
        }
    }

    public function destroy($id) {
        $project = Project::findOrFail($id);
        $projectImages = ProjectImage::where("project_id", $id);
        // Delete the project Images
        foreach ($projectImages->get() as $projectImage) {
            if (Storage::disk('public')->exists('projects/' . $projectImage->project_image)) {
                Storage::disk('public')->delete('projects/' . $projectImage->project_image);
            }
        }

        $project->delete();
        $projectImages->delete();
        return response()->json(['message' => "Project deleted successfully"], 200);
    }
}
