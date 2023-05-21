<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserConfig extends Model {
    protected $fillable = ['first_name', 'last_name', 'email', 'country', 'city', 'phone_number', 'country_code', 'address', 'position', 'bio', 'slogan', 'home_image'];
}
