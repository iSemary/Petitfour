<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model {
    protected $fillable = ['url', 'type', 'priority'];
}
