<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthenticationController extends Controller {
  public function register(Request $request){

    $messages = [
      'username.required'=>'tonto'
    ];

    $this->validate($request, [
      'username'=>'required|min:10|unique:users,username|string',
      'password'=>'required|',
      'password2'=>'required|same:password'
    ], $messages);

    $username = $request['username'];
    $email = $request['email'];
    $password = $request['password'];

    try{
      DB::statement("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)", [
        'username'=>$username,
        'email'=>$email,
        'password'=>Hash::make($password)
      ]);

      return response()->json(['message'=>'Usuario registrado correctamente'], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }
}
