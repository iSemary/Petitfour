<?php

use App\Http\Controllers\SkillController;
use App\Http\Controllers\UserController;
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

Route::get('/login', [UserController::class, 'login'])->name("login");
Route::post('/login', [UserController::class, 'submitLogin'])->name("login.submit");
Route::get("logout", [UserController::class, 'logout'])->name('logout');


Route::middleware(['auth'])->group(function () {
    Route::resources(['skills' => SkillController::class]);
    Route::resources(['projects' => ProjectController::class]);
    Route::resources(['experiences' => ExperienceController::class]);
    Route::resources(['blogs' => BlogController::class]);

    Route::get('config/user', [ConfigController::class, 'user'])->name("config.user");
    Route::get('config/design', [ConfigController::class, 'design'])->name("config.design");

    Route::get('contacts', [ContactController::class, 'messages'])->name("contacts.index");

});
