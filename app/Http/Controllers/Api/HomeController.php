<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HomeController extends Controller {

    public function index(Request $request): JsonResponse {
        
        return response()->json();
    }
}
