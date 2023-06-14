<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Category extends Model {
    protected $fillable = ['name', 'title', 'description', 'type', 'priority'];
    protected $appends = ['counters'];

    public function skills() {
        return $this->hasMany(Skill::class, 'category_id');
    }

    public function getCountersAttribute() {
        $counters = [];
        $counters['blogs'] = Blog::Join('blog_skills', 'blog_skills.blog_id', 'blogs.id')
            ->Join('skills', 'skills.id', 'blog_skills.skill_id')
            ->join('categories', 'categories.id', 'skills.category_id')
            ->where('skills.category_id', $this->id)
            ->distinct('blog_skills.blog_id')
            ->count();

        $counters['projects'] = Project::Join('project_skills', 'project_skills.project_id', 'projects.id')
            ->Join('skills', 'skills.id', 'project_skills.skill_id')
            ->join('categories', 'categories.id', 'skills.category_id')
            ->where('skills.category_id', $this->id)
            ->distinct('project_skills.project_id')
            ->count();

        return $counters;
    }
}
