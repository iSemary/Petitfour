<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Skill;
use App\Models\Category;
use App\Models\Experience;
use App\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use stdClass;
use Carbon\Carbon;

class SkillController extends Controller {

    /**
     * It returns all the skills in the database to json array with status and success type
     * 
     * @return an array of objects.
     */
    public function index(): JsonResponse {
        $categories = Category::select(['id', 'name', 'title', 'description', 'icon'])->where('type', 1)->orderBy('priority')->get();

        $data = [];
        /* Looping through the types and adding the skills to the data array. */
        foreach ($categories as $key => $category) {
            $data['categories'][$key] = $category;
            $data['categories'][$key]['skills'] = Skill::select(['id', 'name', 'icon', 'theme_icon', 'type', 'color_code'])->where('category_id', $category['id'])->where('type', 1)->orderBy('priority')->get();
            $data['categories'][$key]['additional'] = Skill::select(['id', 'name', 'icon', 'theme_icon', 'color_code'])->where('category_id', $category['id'])->where('type', 0)->orderBy('priority')->get();
        }

        $data['side'] =  Skill::select(['id', 'name', 'icon', 'theme_icon'])->where('type', 2)->orderBy('priority')->get();
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
        if($skill) $skill = str_replace('-', ' ', $skill);
        // Create a new stdClass object to store the data.
        $data = new stdClass();
        // Retrieve the skill information based on the given name.
        $skill = Skill::select(['id', 'name', 'theme_icon', 'icon', 'color_code', 'start_date'])->where('name', $skill)->first();
        if (!$skill) {
            // If no skill is found, return an error JSON response.
            return response()->json([
                'success' => false,
                'status' => 400,
                'message' => 'No skill found with this name'
            ]);
        }
        $skill->start_date = Carbon::parse($skill->start_date)->diffForHumans();
        $data->skill = $skill;

        // Retrieve projects associated with the skill.
        $mockedImagePath = asset('storage/projects/mocked/');

        $data->projects = Project::leftJoin('project_images', 'project_images.project_id', 'projects.id')->leftJoin('project_skills', 'project_skills.project_id', 'projects.id')->select([
            'projects.id',
            'projects.name',
            'projects.slug',
            'projects.description',
            DB::raw("CONCAT('$mockedImagePath/', project_images.project_image) AS project_mocked_image"),
        ])
            ->where('project_images.highlight', 1)
            ->where('project_skills.skill_id', $skill->id)
            ->orderBy("projects.priority")
            ->orderBy('priority')
            ->with(['skills' => function ($query) {
                $query->select(['skills.id', 'skills.name', 'skills.icon', 'skills.theme_icon']);
            }])
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
                'blogs.id',
                'blogs.title',
                'blogs.slug',
                'blogs.description',
                'blogs.image',
                'blogs.published_at',
            ])
            ->where('status', 1)
            ->where('blog_skills.skill_id', $skill->id)
            ->orderBy("published_at", 'DESC')
            ->get();


        $data->blogs->transform(function ($blog) {
            $blog->published_at = Carbon::parse($blog->published_at)->format('M d Y');
            $blog->skills = $blog->skills()->select(['skills.id', 'skills.icon', 'skills.theme_icon', 'skills.name'])->orderBy('skills.priority')->get();
            return $blog;
        });


        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $data
        ]);
    }
}
