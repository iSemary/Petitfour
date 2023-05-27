<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectImage extends Model {
    protected $fillable = ['project_id', 'project_image'];
    protected $appends = ['project_image'];

    public function getProjectImageAttribute() {
        return asset("storage/projects/" . $this->attributes['project_image']);
    }
    public $timestamps = false;
}
