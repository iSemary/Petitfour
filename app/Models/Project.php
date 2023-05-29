<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model {
    protected $fillable = ['name', 'description', 'content', 'priority', 'repository_link', 'tags', 'type', 'start_date', 'end_date'];

    protected $casts = [
        'tags' => 'array',
    ];

    public function skills() {
        return $this->belongsToMany(Skill::class, 'project_skills');
    }
}
