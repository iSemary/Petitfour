<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogView extends Model {
    protected $fillable = ['type', 'ip', 'agent'];
}
