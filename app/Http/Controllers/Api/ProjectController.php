<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Project;
use App\Models\ProjectImage;
use App\Models\Skill;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ProjectController extends Controller {

    /**
     * The function retrieves projects with their associated skills and images, filters them based on a
     * category, and returns a JSON response with the data.
     * 
     * @param Request request The  parameter is an instance of the Request class, which represents
     * an HTTP request. It contains information about the current request, such as the request method,
     * request headers, request parameters, and more.
     * 
     * @return JsonResponse A JSON response is being returned. The response includes the following data:
     */

    public function index(Request $request): JsonResponse {

        $projects = Project::select([
            'projects.id',
            'projects.name',
            'projects.slug',
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

    /**
     * The function retrieves project details based on a given slug and returns a JSON response with the
     * project data.
     * 
     * @param slug The "slug" parameter is used to identify a specific project. It is a unique identifier
     * for each project and is typically generated from the project's name by removing any special
     * characters and replacing spaces with hyphens.
     * 
     * @return JsonResponse A JSON response is being returned.
     */
    public function show($slug = null): JsonResponse {
        if (!$slug) {
            return response()->json([
                'success' => false,
                'status' => 400,
                'data' => []
            ]);
        }

        $project = Project::select([
            'id',
            'name',
            'slug',
            'description',
            'content',
            'repository_link',
            'tags',
            'type',
            'priority',
            'start_date',
            'end_date',
        ])->where('slug', $slug)->first();

        if (!$project) {
            return response()->json([
                'success' => false,
                'status' => 400,
                'data' => []
            ]);
        }
        $project->start_date = Carbon::parse($project->start_date)->format('M d Y');
        $project->end_date = Carbon::parse($project->end_date)->format('M d Y');
        $project->images = ProjectImage::select('project_image')->where('project_id', $project->id)->get();

        $project->skills = $project->skills()->select(['skills.id', 'skills.icon', 'skills.theme_icon', 'skills.name'])->orderBy('skills.priority')->get();
        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $project,
            'mock_path' => asset('images/mockup/laptop-mockup.png')
        ]);
    }
}
