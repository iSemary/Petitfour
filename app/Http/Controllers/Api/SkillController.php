<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Models\Type;
use Illuminate\Http\JsonResponse;

class SkillController extends Controller {

    /**
     * It returns all the skills in the database to json array with status and success type
     * 
     * @return an array of objects.
     */
    public function index(): JsonResponse {
        $types = Type::select(['id', 'name', 'title', 'description'])->orderBy('priority', 'DESC')->get();

        $data = [];
        /* Looping through the types and adding the skills to the data array. */
        foreach ($types as $key => $type) {
            $data[$key] = $type;
            $data[$key]['skills'] = Skill::select(['id', 'name', 'icon'])->where('type_id', $type['id'])->orderBy('priority', 'DESC')->get();
        }

        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $data
        ]);
    }
}
