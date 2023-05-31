<?php

namespace App\Http\Middleware;

use Illuminate\Validation\ValidationException;

class SecureApi {
    /**
     * Check if the incoming request is from react frontend.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return string|null
     */
    public function handle($request, $next) {

        if ($request->hasHeader('Spa-Token') && $request->header('Spa-Token') === env('SPA_TOKEN')) {
            return $next($request);
        }

        return response()->json([
            'success' => false,
            'status' => 500,
            'message' => 'Invalid incoming request'
        ], 500);
    }
}
