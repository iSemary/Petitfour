<?php

use App\Http\Controllers\{
    BlogController,
    AppController,
    SkillController,
    UserController,
    CategoryController,
    ContactController,
    ProjectController,
    DashboardController,
    ExperienceController,
    ConfigController
};
use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->group(function () {
    Route::middleware(['guest'])->group(function () {
        Route::get('login', [UserController::class, 'login'])->name("login");
        Route::post('login', [UserController::class, 'submitLogin'])->name("login.submit");
    });


    Route::middleware(['auth'])->group(function () {
        Route::get('index', [DashboardController::class, 'home'])->name('dashboard.index');
        Route::get('views', [DashboardController::class, 'views'])->name('dashboard.views');

        Route::get("logout", [UserController::class, 'logout'])->name('logout');

        Route::get('skills/sort', [SkillController::class, 'sort'])->name('skills.sort');
        Route::put('skills/update-sort', [SkillController::class, 'updateSort'])->name('skills.updateSort');
        Route::resources(['skills' => SkillController::class]);

        Route::resources(['categories' => CategoryController::class]);

        Route::get('projects/sort', [ProjectController::class, 'sort'])->name('projects.sort');
        Route::put('projects/update-sort', [ProjectController::class, 'updateSort'])->name('projects.updateSort');
        Route::post('projects/highlight-image', [ProjectController::class, 'highlightImage'])->name('projects.highlightImage');
        Route::resources(['projects' => ProjectController::class]);

        Route::resources(['experiences' => ExperienceController::class]);
        Route::resources(['blogs' => BlogController::class]);

        Route::prefix('config')->name('config.')->group(function () {
            Route::get('user', [ConfigController::class, 'userConfig'])->name('user');
            Route::get('system', [ConfigController::class, 'systemConfig'])->name('system');
            Route::match(['put', 'patch'], 'user/update', [ConfigController::class, 'updateUserConfig'])->name('user.update');
            Route::match(['put', 'patch'], 'system/update', [ConfigController::class, 'updateSystemConfig'])->name('system.update');
        });

        Route::prefix('contacts')->name('contacts.')->group(function () {
            Route::get('/', [ContactController::class, 'index'])->name("index");
            Route::post('reply/{id}', [ContactController::class, 'reply'])->name("reply");
        });
    });
});

// Website routes
Route::get('/{any}', [AppController::class, 'index'])->where('any', '^((?!app|static|css).)*$');
