<?php

use App\Http\Controllers\ExamController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::middleware('student')->group(function () {
        Route::get('/dashboard-student', function () {
            return Inertia::render('Student/StudentDashboard');
        })
            ->name('student.dashboard');
        Route::get('/future-exams', [ExamController::class, 'futureExams'])->name('future.exams');
        Route::get('/passed-exams', [ExamController::class, 'passedExams'])->name('passed.exams');
    });

    Route::middleware('teacher')->group(function () {
        Route::resource('groups', GroupController::class);
        Route::resource('exams', ExamController::class)->names(['index' => 'list.exams']);
        Route::patch('/exams/{id}/updateState', [ExamController::class, 'updateState'])->name('update.state');
        // Route::post("")
    });
});



// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
