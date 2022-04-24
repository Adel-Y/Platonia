<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [AuthenticationController::class, 'register']);

Route::post('/login', [AuthenticationController::class, 'login']);

Route::post('/newEvent',[\App\Http\Controllers\EventController::class,'createEvent']);

Route::post('/joinEvent',[\App\Http\Controllers\EventController::class,'joinEvent']);

Route::post('/editProfile',[\App\Http\Controllers\ProfileController::class,'editProfile']);

Route::get('user/{id}', [AuthenticationController::class, 'getUser']);

Route::get('/landing' ,[\App\Http\Controllers\EventController::class,'showFeed']);

Route::get('/eventView/{id}' ,[\App\Http\Controllers\EventController::class,'getEvent']);

Route::get('/userView/{user_id}' ,[\App\Http\Controllers\EventController::class,'getUserEvent']);
