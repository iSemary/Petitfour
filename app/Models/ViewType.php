<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ViewType extends Model {
    protected $table = 'view_types';

    protected $fillable = ['type', 'ip', 'agent'];
}
