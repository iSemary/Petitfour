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
            'content' => $request->input('content'),
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
        $project->images = ProjectImage::select("project_image", 'id', 'highlight')->where("project_id", $project->id)->get();
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
        $project->content = $request->input('content');
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
            if (Storage::disk('public')->exists('projects/' . $projectImage->project_image['image'])) {
                Storage::disk('public')->delete('projects/' . $projectImage->project_image['image']);
            }
            if (Storage::disk('public')->exists('projects/mocked/' . $projectImage->project_image['mocked'])) {
                Storage::disk('public')->delete('projects/mocked/' . $projectImage->project_image['mocked']);
            }
        }

        $projectImages->delete();

        // Delete existing project images

        // Process each uploaded image
        foreach ($images as $key => $image) {
            $highlight = 0;
            if ($key == 0) $highlight = 1;

            // Generate a unique filename for each image
            $filename = uniqid() . '.webp';

            // Store the image in the public disk under the 'projects' directory
            $uploadedImage = $image->storeAs('projects', $filename, 'public');
            // Convert and save the image as WebP
            $uploadedImage = Image::make($image)->encode('webp');
            // Save the image to the storage directory
            Storage::disk('public')->put('projects/' . $filename, $uploadedImage);

            /*
                 create mockup image from the uploaded image
            */
            // Load the mockup image
            $mockupImage = Image::make(public_path('images/mockup/laptop-mockup.png'));

            // Load the uploaded image
            $uploadedImage = Image::make(public_path('storage/projects/' . $filename));

            // Resize the uploaded image if needed
            $uploadedImage->resize(768, 476);

            // Composite the uploaded image on the mockup image
            $mockupImage->insert($uploadedImage, 'center', 5, -18);

            // Save the final image
            $mockupImage->save(public_path('storage/projects/mocked/' . $filename));

            // Create a new project image record
            ProjectImage::create([
                'project_id' => $project->id,
                'project_image' => $filename,
                'highlight' => $highlight,
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
                Storage::disk('public')->delete('projects/mocked/' . $projectImage->project_image);
            }
        }

        $project->delete();
        $projectImages->delete();
        return response()->json(['message' => "Project deleted successfully"], 200);
    }

    public function sort() {
        $projects = Project::select(['id', 'name'])->orderBy('priority')->get();
        return view('panel.projects.sortable', compact('projects'));
    }

    public function updateSort(Request $request) {

        if (isset($request->id) && is_array($request->id) && count($request->id)) {
            foreach ($request->id as $key => $id) {
                Project::where('id', $id)->update([
                    'priority' => $key + 1
                ]);
            }
        }
        return response()->json(['message' => "Projects sorted successfully"], 200);
    }

    public function highlightImage(Request $request) {
        ProjectImage::where("project_id", $request->project_id)->update(['highlight' => 0]);
        ProjectImage::where('id', $request->project_image_id)->update(['highlight' => 1]);

        return response()->json(['message' => "Project image highlighted successfully"], 200);
    }
}
