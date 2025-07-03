<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\BoardController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\ComentarioController; 
use App\Http\Controllers\ToDoController; 

Route::apiResource('users', userController::class);
Route::apiResource('boards', BoardController::class);
Route::apiResource('cards', CardController::class);
Route::apiResource('tasks', TaskController::class);
Route::apiResource('comentarios', ComentarioController::class);
Route::apiResource('todos', ToDoController::class);

Route::post('/boards/{boardId}/assign/{userId}', [BoardController::class, 'assignUser']);
Route::delete('/boards/{boardId}/unassign/{userId}', [BoardController::class, 'unassignUser']);


