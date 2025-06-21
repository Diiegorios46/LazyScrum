<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\SubTaskController;


Route::get('/user', [userController::class , "index"]);
Route::post('/user', [userController::class , "store"]);
Route::get('/user/{id}', [userController::class , "show"]);
Route::delete('/user/{id}', [userController::class , "destroy"]);
Route::patch('/user/{id}', [userController::class , "update"]);
Route::put('/user/{id}', [userController::class , "update"]);

Route::get('/task', [TaskController::class , "index"]);
Route::post('/task', [TaskController::class , "store"]);
Route::get('/task/{id}', [TaskController::class , "show"]);
Route::delete('/task/{id}', [TaskController::class , "destroy"]);
Route::patch('/task/{id}', [TaskController::class , "update"]);
Route::put('/task/{id}', [TaskController::class , "update"]);

Route::get('/subtask', [SubTaskController::class , "index"]);
Route::post('/subtask', [SubTaskController::class , "store"]);
Route::get('/subtask/{id}', [SubTaskController::class , "show"]);
Route::delete('/subtask/{id}', [SubTaskController::class , "destroy"]);
Route::patch('/subtask/{id}', [SubTaskController::class , "update"]);
Route::put('/subtask/{id}', [SubTaskController::class , "update"]);

