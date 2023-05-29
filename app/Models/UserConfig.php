<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserConfig extends Model {
    protected $fillable = ['first_name', 'last_name', 'email', 'country', 'city', 'phone_number', 'country_code', 'address', 'position', 'bio', 'slogan', 'home_image', 'theme_home_image', 'resume'];
    protected $appends = ['home_image', 'theme_home_image', 'resume'];

    public function getHomeImageAttribute() {
        return asset("storage/config/" . $this->attributes['home_image']);
    }

    public function getThemeHomeImageAttribute() {
        return asset("storage/config/" . $this->attributes['theme_home_image']);
    }

    public function getResumeAttribute() {
        return asset("storage/config/resume/" . $this->attributes['resume']);
    }
}
