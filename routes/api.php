<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\PostController;

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'logIn']);

Route::get('posts', [PostController::class, 'index']);
Route::get('post/{id}', [PostController::class, 'show']);


Route::group( ['middleware' => ['auth:sanctum']], function() {
	Route::get('user-profile', [UserController::class, 'userProfile']);
	Route::get('logout', [UserController::class, 'logOut']);

	Route::post('create-post', [PostController::class, 'store']);
} );

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
