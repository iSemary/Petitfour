<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;

class BlogController extends Controller {

    /**
     * It returns all the blogs in the database to json array with status and success type
     * 
     * @return an array of objects.
     */
    public function index(): JsonResponse {
        $blogs = Blog::select([
            'id',
            'slug',
            'title',
            'description',
            'published_at',
            'image',
        ])->where('status', 1)->orderBy("published_at", 'DESC')->paginate(10);

        $blogs->transform(function ($blog) {
            $blog->published_at = Carbon::parse($blog->published_at)->format('d M Y');
            return $blog;
        });

        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $blogs
        ]);
    }

    public function show($slug = null): JsonResponse {
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
        $blog->published_at = Carbon::parse($blog->published_at)->format('d M Y');
        $blog->skills = $blog->skills()->select(['skills.id', 'skills.icon', 'skills.theme_icon', 'skills.name'])->orderBy('skills.priority')->get();
        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $blog
        ]);
    }
}
