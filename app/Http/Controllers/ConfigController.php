<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Models\Feature;
use App\Models\SocialLink;
use App\Models\SystemConfig;
use App\Models\UserConfig;
use Illuminate\Http\Request;

class ConfigController extends Controller {
    /**
     * This function retrieves user configuration data and social links and returns a view with the data.
     * 
     * @return a view called "panel.configs.user" with two variables: , which is the UserConfig
     * model instance with an ID of 1, and , which is a collection of all SocialLink model
     * instances.
     */
    public function userConfig() {
        $config = UserConfig::findOrFail(1);
        $socialLinks = SocialLink::all();
        $features = Feature::all();
        return view("panel.configs.user", compact('config', 'socialLinks', 'features'));
    }

    /**
     * The function updates the user configuration with new data and social links.
     * 
     * @param Request request  is an instance of the Request class, which contains the data sent in
     * the HTTP request. It is used to retrieve input data, such as form data or query parameters, and
     * files uploaded with the request. In this function, it is used to retrieve data for updating the user
     * configuration.
     * 
     * @return A JSON response with a message indicating that the user config has been saved successfully.
     */
    public function updateUserConfig(Request $request) {
        $config = UserConfig::findOrFail(1);

        $homeImage = Uploader::image($request->file('home_image'), $config->home_image, 'config');
        $themeHomeImage = Uploader::image($request->file('theme_home_image'), $config->theme_home_image, 'config');
        $resumeFileName = $config->first_name . '_' . $config->last_name . '_' . str_replace(' ', '_', $config->position);
        $resume = Uploader::file($request->file('resume'), $config, 'resume', 'config/resume', $resumeFileName);

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
            'resume' => $resume,
        ]);

        // Update social links
        foreach ($request->social_link_id as $socialLink) {
            if ($request->url[$socialLink] != "") {
                $data = [
                    'url' => $request->url[$socialLink],
                    'type' => $request->type[$socialLink],
                    'priority' => $request->priority[$socialLink],
                ];
                SocialLink::updateOrCreate(['id' => $socialLink], $data);
            }
        }

        // Update features
        foreach ($request->feature_id as $feature) {
            if ($request->feature_title[$feature] != "") {
                $featureRecord = Feature::where('id', $feature)->first();
                $featureImage = Uploader::image(isset($request->file('feature_image')[$feature]) ? $request->file('feature_image')[$feature] : null, $featureRecord->image, 'config');
                $data = [
                    'title' => $request->feature_title[$feature],
                    'description' => $request->feature_description[$feature],
                    'image' => $featureImage,
                ];
                Feature::updateOrCreate(['id' => $feature], $data);
            }
        }




        return response()->json(['message' => "User config saved successfully"], 200);
    }

    /**
     * The function retrieves and returns the system configuration data for display in a view.
     * 
     * @return a view called "panel.configs.system" with a variable called "config" that contains the
     * result of finding a SystemConfig model with an ID of 1.
     */
    public function systemConfig() {
        $config = SystemConfig::findOrFail(1);
        return view("panel.configs.system", compact('config'));
    }

    /**
     * The function updates the system configuration with new values and files uploaded by the user.
     * 
     * @param Request request  is an instance of the Request class, which contains the data sent in
     * the HTTP request. It is used to retrieve input data, such as form data or query parameters, and
     * files uploaded with the request. In this function, it is used to retrieve the logo, contact_image,
     * and contact_theme
     * 
     * @return A JSON response with a message indicating that the system config was saved successfully, and
     * a status code of 200.
     */
    public function updateSystemConfig(Request $request) {

        // Find the record by ID and update the columns
        $config = SystemConfig::findOrFail(1);

        $themeLogo = Uploader::file($request->file('theme_logo'), $config, 'theme_logo', 'config');
        $logo = Uploader::file($request->file('logo'), $config, 'logo', 'config');
        $contactImage = Uploader::image($request->file('contact_image'), $config->contact_image, 'config');
        $contactThemeImage = Uploader::image($request->file('contact_theme_image'), $config->contact_theme_image, 'config');
        $notFoundImage = Uploader::file($request->file('not_found_image'), $config, 'not_found_image', 'config');

        $config->update([
            'primary_color' => $request->primary_color,
            'secondary_color' => $request->secondary_color,
            'contact_email' => $request->contact_email,
            'openai_api_token' => $request->openai_api_token,
            'google_analytics_id' => $request->google_analytics_id,
            'logo' => $logo,
            'theme_logo' => $themeLogo,
            'contact_image' => $contactImage,
            'contact_theme_image' => $contactThemeImage,
            'not_found_image' => $notFoundImage,
        ]);

        return response()->json(['message' => "System config saved successfully"], 200);
    }
}
