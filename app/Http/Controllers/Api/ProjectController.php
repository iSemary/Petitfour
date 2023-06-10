<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\ProjectImage;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller {

    protected $mockedImagePath;

    public function __construct() {
        $this->mockedImagePath = asset('storage/projects/mocked/');
    }
    /**
     * It returns all the projects in the database to json array with status and success type
     * 
     * @return an array of objects.
     */
    public function index(): JsonResponse {

        $mockedImagePath = asset('storage/projects/mocked/');
        $projects = Project::leftJoin('project_images', 'project_images.project_id', 'projects.id')->select([
            'projects.id',
            'projects.name',
            'projects.description',
            DB::raw("CONCAT('$mockedImagePath/', project_images.project_image) AS project_mocked_image"),
        ])
            ->where('project_images.highlight', 1)
            ->orderBy("projects.priority")
            ->with(['skills' => function ($query) {
                $query->select(['skills.id', 'skills.name', 'skills.icon', 'skills.theme_icon']);
            }])->paginate(6);

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
