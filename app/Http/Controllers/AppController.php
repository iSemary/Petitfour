<?php

namespace App\Http\Controllers;

use App\Jobs\SaveViewJob;
use Illuminate\Http\Request;

class AppController extends Controller {
    public function index(Request $request) {

        $data = [
            'type' => $request->type ?? 0,
            'ip' => $request->ip(),
            'agent' => $request->userAgent(),
        ];
        SaveViewJob::dispatchAfterResponse($data);

        return view('welcome');
    }
}
