<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SystemConfig extends Model {
    protected $fillable = ['primary_color', 'secondary_color', 'contact_email', 'openai_api_token', 'google_analytics_id'];
}
