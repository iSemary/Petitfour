<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model {
    protected $fillable = ['name', 'category_id', 'type', 'priority', 'icon', 'start_date'];
    protected $appends = ['icon'];

    public function getIconAttribute() {
        return asset("storage/skills/" . $this->attributes['icon']);
    }

    public function blogs() {
        return $this->belongsToMany(Blog::class, 'blog_skills');
    }

    public function experiences() {
        return $this->belongsToMany(Experience::class, 'experience_skills');
    }

    public function projects() {
        return $this->belongsToMany(Project::class, 'project_skills');
    }
}
