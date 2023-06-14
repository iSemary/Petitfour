<?php

namespace App\Helpers;

class FormInput {
    public static function file($config, $name, $configKey) {
        $imageUrl = isset($config->$configKey) ? ($config->$configKey) : asset('images/default.jpg');

        $output = '<div class="col-4 form-group">
            <label for="' . $name . '">' . ucfirst($name) . ':</label>
            <input type="file" name="' . $name . '" accept="image/*" class="form-control-file mb-2" id="' . $name . '">
            <img src="' . $imageUrl . '" class="img-thumbnail img-md d-block image-preview" alt="">
        </div>';

        return $output;
    }
}
