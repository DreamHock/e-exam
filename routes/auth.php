<?php

use App\Http\Controllers\Auth\AuthStudentSessionController;
use App\Http\Controllers\Auth\AuthTeacherSessionController;
use App\Http\Controllers\Auth\Logout;
use App\Http\Controllers\Auth\UserController;
// use App\Http\Controllers\Auth\ConfirmablePasswordController;
// use App\Http\Controllers\Auth\EmailVerificationNotificationController;
// use App\Http\Controllers\Auth\EmailVerificationPromptController;
// use App\Http\Controllers\Auth\NewPasswordController;
// use App\Http\Controllers\Auth\PasswordController;
// use App\Http\Controllers\Auth\PasswordResetLinkController;
// use App\Http\Controllers\Auth\RegisteredUserController;
// use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    // Route::get('register', [RegisteredUserController::class, 'create'])
    //             ->name('register');

    // Route::post('register', [RegisteredUserController::class, 'store']);

    Route::prefix('login')->group(function () {
        Route::get('/teachers', function () {
            return Inertia::render('Auth/LoginTeacher');
        });
        Route::post('/teachers', [UserController::class, 'login'])
            ->name('login.teachers');

        Route::get('/students', function () {
            return Inertia::render('Auth/LoginStudent');
        });
        Route::post('/students', [UserController::class, 'login'])
            ->name('login.students');
    });

    // Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
    //             ->name('password.request');

    // Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
    //             ->name('password.email');

    // Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
    //             ->name('password.reset');

    // Route::post('reset-password', [NewPasswordController::class, 'store'])
    //             ->name('password.store');
});

Route::middleware('auth')->group(function () {
    //     Route::get('verify-email', EmailVerificationPromptController::class)
    //                 ->name('verification.notice');

    //     Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
    //                 ->middleware(['signed', 'throttle:6,1'])
    //                 ->name('verification.verify');

    //     Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    //                 ->middleware('throttle:6,1')
    //                 ->name('verification.send');

    //     Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
    //                 ->name('password.confirm');

    //     Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    //     Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', Logout::class)
        ->name('logout');
});
