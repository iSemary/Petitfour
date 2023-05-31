<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactController extends Controller {

    public function store(Request $request): JsonResponse  {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|max:255',
            'message' => 'required|max:5000',
        ]);

        if (strlen($validatedData['message']) > 5000) {
            response()->json([
                'success' => false,
                'status' => 400,
                'message' => 'Message should not exceed 1820 characters.'
            ], 400);
        }

        // Create a new contact using the create method
        $contact = ContactMessage::create($validatedData);

        return response()->json([
            'success' => true,
            'status' => 200,
            'message' => 'Your message has been sent!'
        ], 200);
    }
}
