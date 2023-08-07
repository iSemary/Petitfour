<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\BlogView;
use App\Models\Category;
use App\Models\Skill;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BlogController extends Controller {

    /**
     * It returns all the blogs in the database to json array with status and success type
     * 
     * @return an array of objects.
     */
    public function index(Request $request): JsonResponse {

        $blogs = Blog::select([
            'blogs.id',
            'slug',
            'title',
            'description',
            'published_at',
            'image',
        ])->leftJoin('blog_skills', 'blog_skills.blog_id', 'blogs.id')
            ->where(function ($q) use ($request) {
                if ($request->category) {
                    $categoryName = str_replace('-', ' ', $request->category);

                    $category = Category::select('id')->where('name', $categoryName)->first();
                    $categorySkills = Skill::where('category_id', $category->id)->pluck('id')->toArray();

                    $q->whereIn('blog_skills.skill_id', $categorySkills);
                }
            })
            ->with(['skills' => function ($query) {
                $query->select(['skills.id', 'skills.name', 'skills.icon', 'skills.theme_icon']);
            }])
            ->where('status', 1)
            ->groupBy('id')
            ->orderBy("published_at", 'DESC')
            ->paginate(6);

        $blogs->transform(function ($blog) {
            $blog->published_at = Carbon::parse($blog->published_at)->format('M d Y');
            return $blog;
        });

        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $blogs
        ]);
    }

    /**
     * This PHP function retrieves a blog post and its related data, including similar blog posts, and
     * returns it as a JSON response.
     * 
     * @param Request request The `` parameter is an instance of the `Illuminate\Http\Request`
     * class. It represents the current HTTP request being handled by the application and contains
     * information such as the request method, headers, and input data.
     * @param slug The "slug" parameter is a string that represents the unique identifier for a specific
     * blog post. It is used to retrieve the blog post from the database and display its details.
     * 
     * @return JsonResponse A JSON response is being returned. The response has a 'success' key with a
     * boolean value, a 'status' key with an integer value, and a 'data' key with an array value. The
     * 'data' array contains two keys: 'blog' and 'similar'. The 'blog' key contains the details of a
     * specific blog post, including its id, slug, title, description
     */
    public function show(Request $request, $slug = null): JsonResponse {
        if (!$slug) {
            return response()->json([
                'success' => false,
                'status' => 400,
                'data' => []
            ]);
        }
        $blog = Blog::select([
            'id',
            'slug',
            'title',
            'description',
            'content',
            'published_at',
            'image',
        ])->where('slug', $slug)->first();

        if (!$blog) {
            return response()->json([
                'success' => false,
                'status' => 400,
                'data' => []
            ]);
        }
        $blog->published_at = Carbon::parse($blog->published_at)->format('M d Y');
        $blog->skills = $blog->skills()->select(['skills.id', 'skills.icon', 'skills.theme_icon', 'skills.name'])->orderBy('skills.priority')->get();


        $similarBlogs = Blog::select([
            'blogs.id',
            'slug',
            'title',
            'description',
            'published_at',
            'image',
        ])->leftJoin('blog_skills', 'blog_skills.blog_id', 'blogs.id')
            ->where('status', 1)
            ->where('blogs.id', '!=', $blog->id)
            ->groupBy('blogs.id')
            ->orderBy("published_at", 'DESC')
            ->whereIn('blog_skills.skill_id', $blog->skills->pluck('id')->toArray())
            ->limit(6)
            ->get();

        $similarBlogs->transform(function ($blog) {
            $blog->published_at = Carbon::parse($blog->published_at)->format('M d Y');
            $blog->skills = $blog->skills()->select(['skills.id', 'skills.icon', 'skills.theme_icon', 'skills.name'])->orderBy('skills.priority')->get();
            return $blog;
        });


        BlogView::create([
            'blog_id' => $blog->id,
            'ip' => $request->ip(),
            'agent' => $request->userAgent(),
        ]);

        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => [
                'blog' => $blog,
                'similar' => $similarBlogs
            ]
        ]);
    }
}
