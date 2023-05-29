<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\ProjectImage;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;

class ExperienceController extends Controller {

    /**
     * It returns all the experiences in the database to json array with status and success type
     * 
     * @return an array of objects.
     */
    public function index(): JsonResponse {
        $experiences = [];

        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $experiences
        ]);
    }

    public function show($companyName = null): JsonResponse {
        if (!$companyName) {
            return response()->json([
                'success' => false,
                'status' => 400,
                'data' => []
            ]);
        }
        $experience = {};

        if (!$experience) {
            return response()->json([
                'success' => false,
                'status' => 400,
                'data' => []
            ]);
        }
        $experience->start_date = Carbon::parse($experience->start_date)->format('d M Y');
        $experience->end_date = Carbon::parse($experience->end_date)->format('d M Y');

        $experience->skills = $experience->skills()->select(['skills.id', 'skills.icon', 'skills.theme_icon', 'skills.name'])->orderBy('skills.priority')->get();
        /* Returning a json response with the data. */
        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $experience
        ]);
    }
}
