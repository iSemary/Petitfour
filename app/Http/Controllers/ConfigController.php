<?php

namespace App\Http\Controllers;

use App\Models\SystemConfig;
use App\Models\UserConfig;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use \Image;
use Illuminate\Support\Facades\Storage;

class ConfigController extends Controller {
    public function userConfig() {
        $config = UserConfig::findOrFail(1);
        return view("panel.configs.user", compact('config'));
    }
    public function updateUserConfig(Request $request) {
        $config = UserConfig::findOrFail(1);


        $homeImage = basename($config->home_image);
        if ($request->file('home_image')) {
            // Generate a unique file name for the image
            $homeImage = uniqid() . '.webp';
            // Convert and save the image as WebP
            $image = Image::make($request->home_image)->encode('webp');
            // Save the image to the storage directory
            Storage::disk('public')->put('config/' . $homeImage, $image);

            // Delete the previous icon image if it exists
            if ($config->home_image && Storage::disk('public')->exists('config/' . $config->home_image)) {
                Storage::disk('public')->delete('config/' . $config->home_image);
            }
        }


        $themeHomeImage = basename($config->theme_home_image);
        if ($request->file('theme_home_image')) {
            // Generate a unique file name for the image
            $themeHomeImage = uniqid() . '.webp';
            // Convert and save the image as WebP
            $image = Image::make($request->theme_home_image)->encode('webp');
            // Save the image to the storage directory
            Storage::disk('public')->put('config/' . $themeHomeImage, $image);

            // Delete the previous icon image if it exists
            if ($config->theme_home_image && Storage::disk('public')->exists('config/' . $config->theme_home_image)) {
                Storage::disk('public')->delete('config/' . $config->theme_home_image);
            }
        }


        $config->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'country' => $request->country,
            'city' => $request->city,
            'phone_number' => str_replace(' ', '', $request->phone_number),
            'country_code' => $request->country_code,
            'address' => $request->address,
            'position' => $request->position,
            'bio' => $request->bio,
            'slogan' => $request->slogan,
            'home_image' => $homeImage,
            'theme_home_image' => $themeHomeImage,
        ]);





        return response()->json(['message' => "User config saved successfully"], 200);
    }
    public function systemConfig() {
        $config = SystemConfig::findOrFail(1);
        return view("panel.configs.system", compact('config'));
    }
    public function updateSystemConfig(Request $request) {
        // Find the record by ID and update the columns
        $config = SystemConfig::findOrFail(1);
        $config->update([
            'primary_color' => $request->primary_color,
            'secondary_color' => $request->secondary_color,
            'contact_email' => $request->contact_email,
            'openai_api_token' => $request->openai_api_token,
            'google_analytics_id' => $request->google_analytics_id,
        ]);

        return response()->json(['message' => "System config saved successfully"], 200);
    }
}
