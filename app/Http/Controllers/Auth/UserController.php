<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(Request $request): Response
    {
        
        if ($request->role === 'student') {
            return Inertia::render('Auth/LoginStudent');
        }
        return Inertia::render('Auth/LoginTeacher');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function login(Request $request): RedirectResponse
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // return dd('hello');
            // Check if the user is a teacher or a student
            $user = Auth::user();
            if ($user->role == 'teacher') {
                return redirect()->intended('/exams');
            } else if ($user->role == 'student') {
                return redirect()->intended('/dashboard-student');
            } else {
                Auth::logout();
            }
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
