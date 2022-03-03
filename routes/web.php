<?php

// use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::view('/{any}', 'app')->where('any', '.*');

// Route::post('/login', [AuthController::class, 'logIn']);
// Route::post('/logout', [AuthController::class, 'logOut']);
