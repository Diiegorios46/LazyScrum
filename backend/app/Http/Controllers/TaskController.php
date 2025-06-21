<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    // Método auxiliar privado para formatear respuestas
    private function data($message, $status, $errors = [])
    {
        return [
            'message' => $message,
            'status' => $status,
            'errors' => $errors
        ];
    }

    public function index()
    {
        $tasks = Task::all();

        if ($tasks->isEmpty()) {
            return response()->json($this->data('No hay tareas registradas', 200), 200);
        }

        return response()->json($tasks, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $task = Task::create($request->only(['title', 'description', 'status']));

        if (!$task) {
            return response()->json($this->data('Error al crear la tarea', 500), 500);
        }

        return response()->json(['task' => $task, 'status' => 201], 201);
    }

    public function show($id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json($this->data('Tarea no encontrada', 404), 404);
        }

        return response()->json($task, 200);
    }

    public function destroy($id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json($this->data('Tarea no encontrada', 404), 404);
        }

        $task->delete();

        return response()->json($this->data('Tarea eliminada', 200), 200);
    }

    public function update(Request $request, $id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json($this->data('Tarea no encontrada', 404), 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $task->title = $request->title;
        $task->save();

        return response()->json(['message' => "Tarea modificada", 'task' => $task], 200);
    }
}