<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\JsonResponse;

class BlogController extends Controller {

    /**
     * It returns all the skills in the database to json array with status and success type
     * 
     * @return an array of objects.
     */
    public function index(): JsonResponse {
        $blogs = Blog::orderBy("published_at", 'DESC')->get();

        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $blogs
        ]);
    }
}
