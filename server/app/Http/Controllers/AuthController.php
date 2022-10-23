<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){

        $fields = $request -> validate([
            "first_name" => "required|string",
            "last_name" => "string",
            "email" => "required|string|unique:users,email",
            "password" => "required|string|confirmed"
        ]);

        echo $request;

        $user = User::create([
            "first_name" => $fields["first_name"],
            "last_name" => $fields["last_name"],
            "email" => $fields["email"],
            "password" => bcrypt($fields["password"])
        ]);

        $token = $user->createToken("blogToken")->plainTextToken;

        $response = [

            "user" => $user,
            "token" => $token
        ];

        return response($response, 201);
    }
    public function signin(Request $request){

        $fields = $request -> validate([
            "email" => "required|string",
            "password" => "required|string"
        ]);

        $user = User::where("email", $fields["email"])->first();

        if(!$user || !Hash::check($fields["password"], $user->password)){

            return response([

                "message" => "Wrong Credentials!"
            ], 401);
        }

        $token = $user->createToken("blogToken")->plainTextToken;

        $response = [

            "user" => $user,
            "token" => $token
        ];

        return response($response, 201);
    }

    public function logout(Request $request){

        auth()->user()->tokens()->delete();

        return[
            "message" => "Logged Out!"
        ];
    }
}
