<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller {
    public function login() {
        return view("panel.login");
    }

    public function submitLogin(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            // Authentication successful
            return response()->json([
                'message' => "Welcome back, redirecting to home...",
                'route'=> route("dashboard.index")
            ], 200);
        } else {
            // Authentication failed
            return response()->json([
                'message' => 'Invalid credentials!'
            ], 400);
        }
    }

    public function logout() {
        Auth::logout();
        return redirect()->route("login");
    }
}
