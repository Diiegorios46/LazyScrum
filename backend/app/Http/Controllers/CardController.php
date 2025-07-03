<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CardController extends Controller
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
        $cards = Card::all();

        if ($cards->isEmpty()) {
            return response()->json($this->data('No hay cards registradas', 200), 200);
        }

        return response()->json($cards, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'text' => 'required|string|max:255',
            'task_id' => 'required|integer|exists:tasks,id'
        ]);

        if ($validator->fails()) {
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $card = Card::create([
            'text' => $request->text,
            'task_id' => $request->task_id
        ]);

        if (!$card) {
            return response()->json($this->data('Error al crear la card', 500), 500);
        }

        return response()->json(['card' => $card, 'status' => 201], 201);
    }

    public function show($id)
    {
        $card = Card::find($id);

        if (!$card) {
            return response()->json($this->data('Card no encontrada', 404), 404);
        }

        return response()->json($card, 200);
    }

    public function destroy($id)
    {
        $card = Card::find($id);

        if (!$card) {
            return response()->json($this->data('Card no encontrada', 404), 404);
        }

        $card->delete();

        return response()->json($this->data('Card eliminada', 200), 200);
    }

    public function update(Request $request, $id)
    {
        $card = Card::find($id);

        if (!$card) {
            return response()->json($this->data('Card no encontrada', 404), 404);
        }

        $validator = Validator::make($request->all(), [
            'text' => 'required|string|max:255',
            'task_id' => 'required|integer|exists:tasks,id'
        ]);

        if ($validator->fails()) {
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $card->text = $request->text;
        $card->task_id = $request->task_id;
        $card->save();

        return response()->json(['message' => "Card modificada", 'card' => $card], 200);
    }
}