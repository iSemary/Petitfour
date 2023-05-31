<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Skill;
use App\Models\Category;
use App\Models\Experience;
use App\Models\Project;
use Illuminate\Http\JsonResponse;
use stdClass;

class SkillController extends Controller {

    /**
     * It returns all the skills in the database to json array with status and success type
     * 
     * @return an array of objects.
     */
    public function index(): JsonResponse {
        $categories = Category::select(['id', 'name', 'title', 'description'])->orderBy('priority', 'DESC')->get();

        $data = [];
        /* Looping through the types and adding the skills to the data array. */
        foreach ($categories as $key => $category) {
            $data[$key] = $category;
            $data[$key]['skills'] = Skill::select(['id', 'name', 'icon', 'theme_icon', 'type'])->where('category_id', $category['id'])->where('type', 1)->orderBy('priority', 'DESC')->get();
            $data[$key]['sides'] = Skill::select(['id', 'name', 'icon', 'theme_icon'])->where('category_id', $category['id'])->where('type', 0)->orderBy('priority', 'DESC')->get();
        }

        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $data
        ]);
    }

    /**
        Retrieves and returns skill information, associated projects, experiences, and blogs as JSON response.
        @param string|null $skill The name of the skill to retrieve information for (optional).
        @return \Illuminate\Http\JsonResponse The JSON response containing skill information, projects, experiences, and blogs.
     */

    public function show($skill = null): JsonResponse {
        // Create a new stdClass object to store the data.
        $data = new stdClass();
        // Retrieve the skill information based on the given name.
        $skill = Skill::select(['id', 'name', 'theme_icon', 'icon', 'start_date'])->where('name', $skill)->first();
        if (!$skill) {
            // If no skill is found, return an error JSON response.
            return response()->json([
                'success' => false,
                'status' => 400,
                'message' => 'No skill found with this name'
            ]);
        }

        $data->skill = $skill;

        // Retrieve projects associated with the skill.
        $data->projects = Project::leftJoin('project_skills', 'project_skills.project_id', 'projects.id')
            ->select([
                'projects.name',
                'projects.description',
                'projects.type',
                'projects.start_date',
                'projects.end_date',
            ])
            ->where('project_skills.skill_id', $skill->id)
            ->orderBy('projects.priority', 'DESC')
            ->get();

        // Retrieve experiences associated with the skill.
        $data->experiences = Experience::leftJoin('experience_skills', 'experience_skills.experience_id', 'experiences.id')
            ->select([
                'experiences.company_name',
                'experiences.company_logo',
                'experiences.company_location',
                'experiences.position_title',
                'experiences.start_date',
                'experiences.end_date',
            ])
            ->where('experience_skills.skill_id', $skill->id)
            ->orderBy('experiences.end_date', 'DESC')
            ->get();

        // Retrieve blogs associated with the skill.
        $data->blogs = Blog::leftJoin('blog_skills', 'blog_skills.blog_id', 'blogs.id')
            ->select([
                'blogs.title',
                'blogs.slug',
                'blogs.description',
                'blogs.image',
                'blogs.published_at',
            ])
            ->where('blog_skills.skill_id', $skill->id)
            ->get();


        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $data
        ]);
    }
}
