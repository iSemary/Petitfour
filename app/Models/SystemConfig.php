<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SystemConfig extends Model {
    protected $fillable = ['primary_color', 'secondary_color', 'contact_email', 'openai_api_token', 'google_analytics_id', 'logo', 'contact_image', 'contact_theme_image', 'not_found_image', 'sitemap_updated_at'];

    protected $appends = [
        'logo',
        'contact_image',
        'contact_theme_image',
        'not_found_image'
    ];

    public function getLogoAttribute() {
        return asset("storage/config/" . $this->attributes['logo']);
    }
    public function getContactImageAttribute() {
        return asset("storage/config/" . $this->attributes['contact_image']);
    }
    public function getContactThemeImageAttribute() {
        return asset("storage/config/" . $this->attributes['contact_theme_image']);
    }
    public function getNotFoundImageAttribute() {
        return asset("storage/config/" . $this->attributes['not_found_image']);
    }
}
