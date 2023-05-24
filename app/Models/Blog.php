<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model {
    protected $fillable = [
        'title',
        'slug',
        'content',
        'description',
        'image',
        'published_at',
        'status',
    ];
    protected $appends = ['image'];

    public function getImageAttribute() {
        return asset("storage/blogs/" . $this->attributes['image']);
    }

    public function skills() {
        return $this->belongsToMany(Skill::class, 'blog_skills');
    }
}
