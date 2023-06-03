<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;
use \Image;

class Uploader {
    /**
     * The function uploads and replaces an image file while deleting the previous image if it exists.
     * 
     * @param file The file parameter is a file object that represents the uploaded file.
     * @param config It is a variable that contains an object or an array of configuration settings. The
     * function uses this variable to access the current value of the attribute that represents the file
     * name of the image.
     * @param attribute The name of the attribute in the  object that contains the file path of the
     * previous image.
     * @param path The path where the file will be stored.
     * 
     * @return the name of the image file, which is either the basename of the `->`
     * variable (if no new file is uploaded), or a newly generated unique filename with the extension of
     * the uploaded file.
     */
    public static function file($file, $config, $attribute, $path) {
        $image = basename($config->$attribute);
        if ($file) {
            // Generate a unique file name for the image
            $imageName = uniqid() . '.' . $file->getClientOriginalExtension();

            $file->storeAs('public/' . $path, $imageName);

            // Delete the previous image if it exists
            if ($config->$attribute && Storage::disk('public')->exists($path . '/' . basename($config->$attribute))) {
                Storage::disk('public')->delete($path . '/' . basename($config->$attribute));
            }

            $image = $imageName;
        }

        return $image;
    }

    /**
     * The function takes an image file, converts it to WebP format, saves it to a storage directory, and
     * deletes the previous image if it exists.
     * 
     * @param file The new image file that is being uploaded and will replace the current image.
     * @param currentImage The name of the current image file.
     * @param path The directory path where the image will be saved.
     * 
     * @return the name of the new image file, which is either a unique ID with the .webp extension if a
     * new image was uploaded, or the basename of the current image if no new image was uploaded.
     */
    public static function image($file, $currentImage, $path) {

        $newImage = basename($currentImage);
        if ($file) {
            // Generate a unique file name for the image
            $newImage = uniqid() . '.webp';
            // Convert and save the image as WebP
            $image = Image::make($file)->encode('webp');
            // Save the image to the storage directory
            Storage::disk('public')->put($path . '/' . $newImage, $image);

            // Delete the previous image if it exists
            if ($currentImage && Storage::disk('public')->exists($path . '/' . $currentImage)) {
                Storage::disk('public')->delete($path . '/' . $currentImage);
            }
        }
        return $newImage;
    }
}
