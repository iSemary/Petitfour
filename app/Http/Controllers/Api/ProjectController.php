<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\ProjectImage;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;

class ProjectController extends Controller {

    /**
     * It returns all the projects in the database to json array with status and success type
     * 
     * @return an array of objects.
     */
    public function index(): JsonResponse {
        $projects = Project::select([
            'id',
            'name',
            'description',
        ])->orderBy("priority")->paginate(10);


        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $projects
        ]);
    }

    public function show($name = null): JsonResponse {
        if (!$name) {
            return response()->json([
                'success' => false,
                'status' => 400,
                'data' => []
            ]);
        }
        $project = Project::select([
            'id',
            'name',
            'description',
            'content',
            'repository_link',
            'tags',
            'type',
            'priority',
            'start_date',
            'end_date',
        ])->where('name', $name)->first();

        if (!$project) {
            return response()->json([
                'success' => false,
                'status' => 400,
                'data' => []
            ]);
        }
        $project->start_date = Carbon::parse($project->start_date)->format('d M Y');
        $project->end_date = Carbon::parse($project->end_date)->format('d M Y');
        $project->images = ProjectImage::select('project_image')->where('project_id', $project->id)->get();
        
        $project->skills = $project->skills()->select(['skills.id', 'skills.icon', 'skills.theme_icon', 'skills.name'])->orderBy('skills.priority')->get();
        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $project
        ]);
    }
}
