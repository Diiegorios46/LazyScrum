<?php

namespace App\Http\Controllers;
use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class userController extends Controller
{
    public function index(){
        $user = Users::all();

        if($user->isEmpty()){
            return response()->json(["message" => "No hay estudiante registrados"],200);
        }

        return response()->json($user , 200);
    }

    public function store(Request $request){

        $validator = Validator::make($request->all(),[
            "name" => "required" ,
            "email" => "required|email" , 
            "urlUser" => "required"
        ]);

        if($validator->fails()){
            $data=[
                "message" => "Error en la validacion de los datos",
                "error" => $validator->errors(),
                "status" => 400
            ];
            return response()->json($data,400);
        }
        
        $user = Users::create([
            "name" => $request->name ,
            "email" =>  $request->email , 
            "urlUser" =>  $request->urlUser 
        ]);

        if(!$user){
            $data=[
                "message" => "Error en la validacion de los datos",
                "error" => $validator->errors(),
                "status" => 400
            ];
            return response()->json($data,500);
        }

        $data=[
            "name" => $user ,
            "status" =>  201 
        ];

        return response()->json($data,201);
        
    }
}
