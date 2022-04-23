<?php

use App\Http\Controllers\AuthenticationController;
use Illuminate\Support\Facades\Route;

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
    return view('welcome');
});


Route::get('/ui', function (){
    return view('test');
});
Route::get('/test-ui', function (){
    return view('test-ui');
});

Route::post('/register', [AuthenticationController::class, 'register']);


Route::post('/login', [AuthenticationController::class, 'login']);

Route::get('user/{id}', [AuthenticationController::class, 'getUser']);

Route::get('/landing' ,[\App\Http\Controllers\EventController::class,'showFeed']);

Route::get('/eventView/{id}' ,[\App\Http\Controllers\EventController::class,'getEvent']);

Route::get('/userView/{user_id}' ,[\App\Http\Controllers\EventController::class,'getUserEvent']);

Route::post('/newEvent',[\App\Http\Controllers\EventController::class,'createEvent']);

Route::post('/joinEvent',[\App\Http\Controllers\EventController::class,'joinEvent']);
