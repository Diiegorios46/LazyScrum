<?php

namespace App\Http\Controllers;

use App\Models\ToDo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ToDoController extends Controller
{
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
        $todos = ToDo::all();

        if ($todos->isEmpty()) {
            return response()->json($this->data('No hay ToDos registrados', 200), 200);
        }

        return response()->json($todos, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'check' => 'required|boolean',
            'checktext' => 'required|string|max:255',
            'task_id' => 'required|integer|exists:tasks,id'
        ]);

        if ($validator->fails()) {
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $todo = ToDo::create([
            'check' => $request->check,
            'checktext' => $request->checktext,
            'task_id' => $request->task_id
        ]);

        if (!$todo) {
            return response()->json($this->data('Error al crear el ToDo', 500), 500);
        }

        return response()->json(['todo' => $todo, 'status' => 201], 201);
    }

    public function show($id)
    {
        $todo = ToDo::find($id);

        if (!$todo) {
            return response()->json($this->data('ToDo no encontrado', 404), 404);
        }

        return response()->json($todo, 200);
    }

    public function destroy($id)
    {
        $todo = ToDo::find($id);

        if (!$todo) {
            return response()->json($this->data('ToDo no encontrado', 404), 404);
        }

        $todo->delete();

        return response()->json($this->data('ToDo eliminado', 200), 200);
    }

    public function update(Request $request, $id)
    {
        $todo = ToDo::find($id);

        if (!$todo) {
            return response()->json($this->data('ToDo no encontrado', 404), 404);
        }

        $validator = Validator::make($request->all(), [
            'check' => 'required|boolean',
            'checktext' => 'required|string|max:255',
            'task_id' => 'required|integer|exists:tasks,id'
        ]);

        if ($validator->fails()) {
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $todo->check = $request->check;
        $todo->checktext = $request->checktext;
        $todo->task_id = $request->task_id;
        $todo->save();

        return response()->json(['message' => "ToDo modificado", 'todo' => $todo], 200);
    }
}