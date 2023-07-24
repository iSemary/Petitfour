<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Spatie\Sitemap\Contracts\Sitemapable;
use Spatie\Sitemap\Tags\Url;

class Skill extends Model implements Sitemapable {
    /**
     * Type
     * 0 -> Additional Skill
     * 1 -> Main Skill
     * 2 -> Side Skill
     * @var array
     */
    protected $fillable = ['name', 'category_id', 'type', 'priority', 'color_code', 'highlight', 'icon', 'theme_icon', 'start_date'];
    protected $appends = ['icon', 'theme_icon'];
    protected $dates = ['start_date'];
    
    public function toSitemapTag(): Url | string | array {
        return Url::create(env('APP_URL') . 'skills/' . strtolower(str_replace(' ', '-', $this->name)))
            ->setLastModificationDate(Carbon::create($this->updated_at))
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_ALWAYS)
            ->setPriority(0.6);
    }

    public function getIconAttribute() {
        return asset("storage/skills/" . $this->attributes['icon']);
    }

    public function getThemeIconAttribute() {
        return asset("storage/skills/" . $this->attributes['theme_icon']);
    }

    public function category() {
        return $this->belongsTo(Category::class, 'category_id');
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
