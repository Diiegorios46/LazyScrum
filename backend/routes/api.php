<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;


Route::get('/user', [userController::class , "index"]);
Route::post('/user', [userController::class , "store"]);
Route::get('/user/{id}', [userController::class , "show"]);
Route::delete('/user/{id}', [userController::class , "destroy"]);
Route::patch('/user/{id}', [userController::class , "update"]);
Route::put('/user/{id}', [userController::class , "update"]);
