<?php

namespace App\Http\Controllers;

use App\Models\Comentario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ComentarioController extends Controller
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
        $comentarios = Comentario::all();

        if ($comentarios->isEmpty()) {
            return response()->json($this->data('No hay comentarios registrados', 200), 200);
        }

        return response()->json($comentarios, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'description' => 'required|string|max:255',
            'task_id' => 'required|integer|exists:tasks,id'
        ]);

        if ($validator->fails()) {
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $comentario = Comentario::create([
            'description' => $request->description,
            'task_id' => $request->task_id
        ]);

        if (!$comentario) {
            return response()->json($this->data('Error al crear el comentario', 500), 500);
        }

        return response()->json(['comentario' => $comentario, 'status' => 201], 201);
    }

    public function show($id)
    {
        $comentario = Comentario::find($id);

        if (!$comentario) {
            return response()->json($this->data('Comentario no encontrado', 404), 404);
        }

        return response()->json($comentario, 200);
    }

    public function destroy($id)
    {
        $comentario = Comentario::find($id);

        if (!$comentario) {
            return response()->json($this->data('Comentario no encontrado', 404), 404);
        }

        $comentario->delete();

        return response()->json($this->data('Comentario eliminado', 200), 200);
    }

    public function update(Request $request, $id)
    {
        $comentario = Comentario::find($id);

        if (!$comentario) {
            return response()->json($this->data('Comentario no encontrado', 404), 404);
        }

        $validator = Validator::make($request->all(), [
            'description' => 'required|string|max:255',
            'task_id' => 'required|integer|exists:tasks,id'
        ]);

        if ($validator->fails()) {
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $comentario->description = $request->description;
        $comentario->task_id = $request->task_id;
        $comentario->save();

        return response()->json(['message' => "Comentario modificado", 'comentario' => $comentario], 200);
    }
}