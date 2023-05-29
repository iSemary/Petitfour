<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

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
}
