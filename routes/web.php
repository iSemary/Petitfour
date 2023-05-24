<?php

use App\Http\Controllers\{
    BlogController,
    SkillController,
    UserController,
    ContactController,
    ProjectController,
    DashboardController,
    ExperienceController,
    ConfigController
};

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::middleware(['guest'])->group(function () {
    Route::get('login', [UserController::class, 'login'])->name("login");
    Route::post('login', [UserController::class, 'submitLogin'])->name("login.submit");
});


Route::middleware(['auth'])->group(function () {
    Route::get('/', [DashboardController::class, 'home'])->name('dashboard.index');

    Route::get("logout", [UserController::class, 'logout'])->name('logout');
    Route::resources(['skills' => SkillController::class]);
    Route::resources(['projects' => ProjectController::class]);
    Route::resources(['experiences' => ExperienceController::class]);
    Route::resources(['blogs' => BlogController::class]);

    Route::get('config/user', [ConfigController::class, 'user'])->name("config.user");
    Route::get('config/system', [ConfigController::class, 'system'])->name("config.system");
    Route::get('contacts', [ContactController::class, 'index'])->name("contacts.index");
    Route::post('contacts/reply/{id}', [ContactController::class, 'reply'])->name("contacts.reply");
});
