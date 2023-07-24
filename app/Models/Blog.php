<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sitemap\Contracts\Sitemapable;
use Spatie\Sitemap\Tags\Url;

class Blog extends Model implements Sitemapable {
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

    public function toSitemapTag(): Url | string | array {
        return Url::create(env('APP_URL') . 'blogs/' . $this->slug)
            ->setLastModificationDate(Carbon::create($this->updated_at))
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_ALWAYS)
            ->setPriority(0.7);
    }

    public function getImageAttribute() {
        return asset("storage/blogs/" . $this->attributes['image']);
    }

    public function skills() {
        return $this->belongsToMany(Skill::class, 'blog_skills');
    }
}
