<?php

namespace App\Http\Controllers;

use App\Jobs\SaveViewJob;
use App\Models\SystemConfig;
use Illuminate\Http\Request;

class AppController extends Controller {
    public function index(Request $request) {
        $config = [];
        $config['system'] = SystemConfig::findOrFail(1);

        if (isset($request->t) && !empty($request->t) && $request->t != 0) {
            $data = [
                'type' => $request->t ?? 0,
                'ip' => $request->ip(),
                'agent' => $request->userAgent(),
            ];
            SaveViewJob::dispatchAfterResponse($data);
        }
        return view('welcome', compact('config'));
    }
}
