<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Project;
use App\Models\ProjectImage;
use App\Models\Skill;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ProjectController extends Controller {

    /**
     * It returns all the projects in the database to json array with status and success type
     * 
     * @return an array of objects.
     */
    public function index(Request $request): JsonResponse {

        $projects = Project::select([
            'projects.id',
            'projects.name',
            'projects.description',
        ])
            ->leftJoin('project_skills', 'project_skills.project_id', 'projects.id')
            ->where(function ($q) use ($request) {
                if ($request->category) {
                    $categoryName = str_replace('-', ' ', $request->category);

                    $category = Category::select('id')->where('name', $categoryName)->first();
                    $categorySkills = Skill::where('category_id', $category->id)->pluck('id')->toArray();

                    $q->whereIn('project_skills.skill_id', $categorySkills);
                }
            })
            ->with(['skills' => function ($query) {
                $query->select(['skills.id', 'skills.name', 'skills.icon', 'skills.theme_icon']);
            }])
            ->groupBy('id')
            ->orderBy("projects.priority")
            ->paginate(6);

        $projects->transform(function ($project) {
            $image = ProjectImage::where('project_id', $project->id)
                ->where('highlight', 1)->first();
            $project->project_mocked_image = $image ? $image['project_image']['mocked'] : "";

            return $project;
        });


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
