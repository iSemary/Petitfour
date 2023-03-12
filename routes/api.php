<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\SkillController;

Route::get('skills', [SkillController::class, 'index']);
