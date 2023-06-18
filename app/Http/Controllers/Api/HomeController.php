<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Experience;
use App\Models\Feature;
use App\Models\Project;
use App\Models\ProjectImage;
use App\Models\Skill;
use App\Models\SocialLink;
use App\Models\SystemConfig;
use App\Models\UserConfig;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;

class HomeController extends Controller {

    public function index(Request $request): JsonResponse {
        $data = new stdClass();


        // Returning all categories        
        $data->categories = Category::select([
            'id',
            'name',
        ])->where('type', 1)->get();


        /* This code is selecting the `title`, `description`, and `image` columns from the `features` table in
            the database and ordering the results by the `id` column in descending order. The results are then
            stored in the `->features` variable. */
        $data->features = Feature::select(['title', 'description', 'image'])->orderBy('id')->get();

        /* This code is selecting highlighted skills from the `skills` table in the database. It selects the
        `id`, `name`, `icon`, and `theme_icon` columns from the table where the `highlight` column has a
        value of 1. The results are ordered by the `priority` column and stored in the
        `->highlighted_skills` variable. */
        $data->highlighted_skills = Skill::select([
            'id',
            'name',
            'icon',
            'theme_icon',
        ])->where('highlight', 1)->orderBy('priority')->get();

        /**
         * The code selects the top 3 highlighted projects along with their skills and mocked images. It uses a left join to combine the `project_images` and 
         * `projects` tables based on their respective columns. The selected columns from the `projects` table are `id`, `name`, and `description`.
         *  The code creates a new column called `project_mocked_image` by concatenating a variable with the `project_image` column from the `project_images` table.
         *  The results are filtered to include only projects with a highlight value of 1 and are ordered by the `priority` column. 
         * It also loads the associated skills for each project, selecting specific columns from the `skills` table using a closure function.
         */
        $mockedImagePath = asset('storage/projects/mocked/');
        $data->top_projects = Project::leftJoin('project_images', 'project_images.project_id', 'projects.id')->select([
            'projects.id',
            'projects.name',
            'projects.description',
            DB::raw("CONCAT('$mockedImagePath/', project_images.project_image) AS project_mocked_image"),
        ])
            ->where('project_images.highlight', 1)
            ->orderBy("projects.priority")
            ->limit(3)
            ->orderBy('priority')
            ->with(['skills' => function ($query) {
                $query->select(['skills.id', 'skills.name', 'skills.icon', 'skills.theme_icon']);
            }])
            ->get();


        /* This code is selecting the `url` and `type` columns from the `social_links` table in the database
            and ordering the results by the `priority` column. The results are then stored in the
            `->social_links` variable. */
        $data->social_links = SocialLink::select('url', 'type')->orderBy("priority")->get();


        /* This code is selecting the latest 4 experiences from the `experiences` table in the database and
        storing the results in the `->latest_experience` variable. It selects the `company_name`,
        `company_logo`, `company_location`, `position_title`, `start_date`, and `end_date` columns from the
        table and orders the results by the `end_date` column in descending order. */
        $data->latest_experience = Experience::select([
            'company_name',
            'company_logo',
            'company_location',
            'summary',
            'position_title',
            'start_date',
            'end_date',
        ])->with(['skills' => function ($query) {
            $query->select(['skills.id', 'skills.name', 'skills.icon', 'skills.theme_icon']);
        }])->orderBy('end_date', 'DESC')->limit(4)->get();

        $data->latest_experience->transform(function ($experience) {
            $experience->start_date = Carbon::parse($experience->start_date)->format('M Y');
            $experience->end_date = Carbon::parse($experience->end_date)->format('M Y');
            return $experience;
        });


        /* This code is selecting all categories from the `categories` table in the database where the `type`
        column has a value of 0. It selects the `id`, `name`, `title`, `description`, and `type` columns
        from the table and orders the results by the `priority` column. */
        $data->side_skills = Category::select(['id', 'name', 'title', 'description', 'type', 'icon'])->where('type', 0)->orderBy('priority')->get();
        $data->side_skills->transform(function ($category) {
            $category->skills;
            return $category;
        });


        /* This code is selecting the latest 3 published blog posts from the `blogs` table in the database
            where the `status` column has a value of 1 (indicating that the blog post is published). It selects
            the `id`, `slug`, `title`, `description`, `published_at`, and `image` columns from the table and
            orders the results by the `published_at` column in descending order. */
        $data->latest_blogs = Blog::select([
            'id',
            'slug',
            'title',
            'description',
            'published_at',
            'image',
        ])
            ->with(['skills' => function ($query) {
                $query->select(['skills.id', 'skills.name', 'skills.icon', 'skills.theme_icon']);
            }])->where('status', 1)->orderBy("published_at", 'DESC')->limit(3)->get();

        $data->latest_blogs->transform(function ($blog) {
            $blog->published_at = Carbon::parse($blog->published_at)->format('d M Y');
            return $blog;
        });


        /**
         * Collect all config object
         */
        $config = [];

        $config['user'] = UserConfig::select(['first_name', 'last_name', 'email', 'country', 'city', 'phone_number', 'country_code', 'address', 'position', 'bio', 'slogan', 'home_image', 'theme_home_image', 'resume'])->where('id', 1)->first();

        $config['system'] = SystemConfig::select(['primary_color', 'secondary_color', 'contact_email', 'logo', 'contact_image', 'contact_theme_image', 'not_found_image'])->where('id', 1)->first();

        $data->config = $config;

        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $data
        ], 200);
    }
}
