<?php

namespace App\Http\Controllers;

use App\Models\Board;
use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BoardController extends Controller
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
        $boards = Board::all();

        if ($boards->isEmpty()) {
            return response()->json($this->data('No hay boards registrados', 200), 200);
        }

        return response()->json($boards, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'text' => 'required|string|max:255',
            'bgColor' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $board = Board::create([
            'text' => $request->text,
            'bgColor' => $request->bgColor
        ]);

        $board->users()->attach($request->userIds); // array de IDs

        return response()->json(['board' => $board, 'status' => 201], 201);
    }

    public function assignUser($boardId, $userId){
        try {
            $board = Board::findOrFail($boardId);
            $board->users()->attach($userId);

            return response()->json(['message' => 'Usuario asignado']);
        } catch (\Exception $e) {
            // Mostrar por pantalla
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function unassignUser($boardId, $userId)
    {
        $board = Board::findOrFail($boardId);
        $board->users()->detach($userId);

        return response()->json(['message' => 'Usuario desvinculado']);
    }


    public function show($id)
    {
        $user = Users::findOrFail($id);
        $boards = $user->boards;

        return response()->json($boards, 200);
    }

    public function destroy($id)
    {
        $board = Board::find($id);

        if (!$board) {
            return response()->json($this->data('Board no encontrado', 404), 404);
        }

        $board->delete();

        return response()->json($this->data('Board eliminado', 200), 200);
    }

    public function update(Request $request, $id)
    {
        $board = Board::find($id);

        if (!$board) {
            return response()->json($this->data('Board no encontrado', 404), 404);
        }

        $validator = Validator::make($request->all(), [
            'text' => 'required|string|max:255',
            'bgColor' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $board->text = $request->text;
        $board->bgColor = $request->bgColor;
        $board->save();

        return response()->json(['message' => "Board modificado", 'board' => $board], 200);
    }
}