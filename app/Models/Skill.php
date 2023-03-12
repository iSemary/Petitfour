<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model {
    protected $fillable = ['name', 'category_id', 'type', 'priority', 'icon', 'start_date'];
}
