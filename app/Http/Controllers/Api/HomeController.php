<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SocialLink;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use stdClass;

class HomeController extends Controller {

    public function index(Request $request): JsonResponse {
        $data = new stdClass();


        $data->social_Links = SocialLink::orderBy("priority")->get();

        return response()->json([
            'success' => true,
            'status' => 200,
            'data' => $data
        ], 200);
    }
}
