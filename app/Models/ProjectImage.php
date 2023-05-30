<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectImage extends Model {
    protected $fillable = ['project_id', 'project_image', 'highlight'];
    protected $appends = ['project_image'];

    public function getProjectImageAttribute() {
        return [
            'image' => asset("storage/projects/" . $this->attributes['project_image']),
            'mocked' => asset("storage/projects/mocked/" . $this->attributes['project_image'])
        ];
    }
    public $timestamps = false;
}
