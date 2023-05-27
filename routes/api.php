<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\BlogController;

Route::group(['prefix' => 'v1'], function () {
    Route::get('home', [HomeController::class, 'index']);

    Route::get('skills', [SkillController::class, 'index']);

    Route::get('blogs', [BlogController::class, 'index']);

    Route::post('contact', [ContactController::class, 'store']);
});
