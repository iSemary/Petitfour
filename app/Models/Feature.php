<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model {
    protected $fillable = ['title', 'description', 'image'];
    protected $appends = ['image'];
    public function getImageAttribute() {
        return asset("storage/config/" . $this->attributes['image']);
    }
}
