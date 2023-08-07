<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\{
    BlogController,
    SkillController,
    ContactController,
    ProjectController,
    HomeController,
    ExperienceController,
};

Route::group(['prefix' => 'v1'], function () {
    Route::middleware(['secure'])->group(function () {

        Route::get('home', [HomeController::class, 'index']);

        Route::get('skills', [SkillController::class, 'index']);
        Route::get('skills/{name}', [SkillController::class, 'show']);

        Route::get('blogs', [BlogController::class, 'index']);
        Route::get('blogs/{slug}', [BlogController::class, 'show']);

        Route::get('projects', [ProjectController::class, 'index']);
        Route::get('projects/{name}', [ProjectController::class, 'show']);

        Route::get('experiences', [ExperienceController::class, 'index']);
        Route::get('experiences/{companyName}', [ExperienceController::class, 'show']);

        Route::post('contact', [ContactController::class, 'store']);


        Route::post('count-theme', [HomeController::class, 'countTheme']);
    });
});
