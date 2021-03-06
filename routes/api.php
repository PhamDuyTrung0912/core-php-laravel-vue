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

Route::prefix('articles')->group(function () {
    Route::get('/', 'App\Http\Controllers\ArticleController@index');

    Route::get('/{id}', 'App\Http\Controllers\ArticleController@show');

    Route::post('/', 'App\Http\Controllers\ArticleController@create');

    Route::post('/upload', 'App\Http\Controllers\ArticleController@upload');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
