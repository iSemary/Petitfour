<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectImage extends Model {
    protected $fillable = ['project_id', 'image'];

    public $timestamps = false;
}
