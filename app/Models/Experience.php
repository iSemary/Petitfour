<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model {
    protected $fillable = ['company_name', 'company_logo', 'company_location', 'position_title', 'summary', 'start_date', 'end_date'];
    protected $appends = ['company_logo'];

    public function getCompanyLogoAttribute() {
        return asset("storage/experiences/" . $this->attributes['company_logo']);
    }

    public function skills() {
        return $this->belongsToMany(Skill::class, 'experience_skills');
    }
}
