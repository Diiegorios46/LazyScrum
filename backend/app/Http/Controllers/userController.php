<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
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
        $users = Users::all();

        if ($users->isEmpty()) {
            return response()->json($this->data('No hay usuarios registrados', 200), 200);
        }

        return response()->json($users, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:3',
            'language' => 'required|string|max:50'
        ]);

        if ($validator->fails()) {
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $user = Users::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'language' => $request->language
        ]);

        if (!$user) {
            return response()->json($this->data('Error al crear el usuario', 500), 500);
        }

        return response()->json(['user' => $user, 'status' => 201], 201);
    }

    public function show($id)
    {
        $user = Users::find($id);

        if (!$user) {
            return response()->json($this->data('Usuario no encontrado', 404), 404);
        }

        return response()->json($user, 200);
    }

    public function destroy($id)
    {
        $user = Users::find($id);

        if (!$user) {
            return response()->json($this->data('Usuario no encontrado', 404), 404);
        }

        $user->delete();

        return response()->json($this->data('Usuario eliminado', 200), 200);
    }

    public function update(Request $request , $id)
    {
        $user = Users::find($id);

        if(!$user){
            return response()->json($this->data('Usuario no encontrado', 404), 404);          
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,'.$id,
            'password' => 'nullable|string|min:6',
            'language' => 'required|string|max:50'
        ]);

        if($validator->fails()){
            return response()->json($this->data('Error en la validación de los datos', 400, $validator->errors()), 400);
        }

        $user->name = $request->name;
        $user->email = $request->email;
        if ($request->filled('password')) {
            $user->password = Hash::make($request->password);
        }
        $user->language = $request->language;

        $user->save();

        return response()->json(['message' => "Usuario modificado", 'user' => $user ],200);
    }
}