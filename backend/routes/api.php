<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;


Route::get('/user', [userController::class , "index"]);
Route::post('/user', [userController::class , "store"]);
