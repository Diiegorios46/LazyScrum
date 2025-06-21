<?php

namespace App\Http\Controllers;

use App\Models\SubTask;
use Illuminate\Http\Request;

class SubTaskController extends Controller
{
    // Mostrar todas las subtareas
    public function index()
    {
        return SubTask::all();
    }

    // Crear una nueva subtarea
    public function store(Request $request)
    {
        $request->validate([
            'task' => 'required|string',
            'checked' => 'boolean',
            'task_id' => 'required|exists:tasks,idTask',
        ]);

        $subtask = SubTask::create($request->all());
        return response()->json($subtask, 201);
    }

    // Mostrar una subtarea específica
    public function show($id)
    {
        $subtask = SubTask::findOrFail($id);
        return response()->json($subtask);
    }

    // Actualizar una subtarea
    public function update(Request $request, $id)
    {
        $subtask = SubTask::findOrFail($id);
        $subtask->update($request->all());
        return response()->json($subtask);
    }

    // Eliminar una subtarea
    public function destroy($id)
    {
        $subtask = SubTask::findOrFail($id);
        $subtask->delete();
        return response()->json(null, 204);
    }
}
