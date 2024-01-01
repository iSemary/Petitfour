<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sitemap\Contracts\Sitemapable;
use Spatie\Sitemap\Tags\Url;

class Project extends Model implements Sitemapable{
    protected $fillable = ['name', 'slug', 'description', 'content', 'priority', 'repository_link', 'tags', 'type', 'start_date', 'end_date'];
    protected $dates = ['start_date', 'end_date'];

    protected $casts = [
        'tags' => 'array',
    ];

    public function toSitemapTag(): Url | string | array {
        return Url::create(env('APP_URL') . '/projects/' . strtolower(str_replace(' ', '-', $this->name)))
            ->setLastModificationDate(Carbon::create($this->updated_at))
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_ALWAYS)
            ->setPriority(0.8);
    }

    public function skills() {
        return $this->belongsToMany(Skill::class, 'project_skills');
    }
}
