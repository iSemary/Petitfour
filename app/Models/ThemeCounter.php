<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ThemeCounter extends Model {
    protected $fillable = ['theme_type', 'device_type', 'device_details', 'view_type'];

    protected $table = 'theme_counter';
}
