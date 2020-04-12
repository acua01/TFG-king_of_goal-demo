<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\User;

class AuthenticationController extends Controller{

  // Register users

  public function register(Request $request){

    $messages = [

      // username

      'username.required'=>'Introduce un nick.',
      'username.string'=>'El nick debe ser una cadena.',
      'username.min'=>'El nick debe tener un mínimo de 3 caracteres.',
      'username.max'=>'El nick debe tener un máximo de 20 caracteres.',
      'username.unique'=>'El nick introducido ya está en uso.',
      'username.regex'=>'Introduce un nick con caracteres alfanuméricos.',

      // email

      'email.required'=>'Introduce un email.',
      'email.string'=>'El email debe ser una cadena.',
      'email.unique'=>'El email introducido ya está en uso.',
      'email.email'=>'Introduce un email válido.',

      // password

      'password.required'=>'Introduce una contraseña.',
      'password.string'=>'La contraseña debe ser una cadena.',
      'password.min'=>'La contraseña debe tener un mínimo de 5 caracteres.',
      'password.max'=>'La contraseña debe tener un máximo de 20 caracteres.',

      // password 2

      'password.required'=>'Las contraseñas no coinciden.',
      'password.string'=>'Las contraseñas no coinciden.',
      'password.same'=>'Las contraseñas no coinciden.'
    ];

    $this->validate($request, [
      'username'=>'required|string|min:3|max:20|unique:users,username|regex:/^[a-zA-Z0-9]+$/i',
      'email'=>'required|string|unique:users,email|email',
      'password'=>'required|string|min:5|max:20',
      'password2'=>'required|string|same:password'
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

  // Login users

  public function login(Request $request){

    $messages = [

      // email

      'email.required'=>'Introduce el email.',
      'email.string'=>'El email debe ser una cadena.',

      // password

      'password.required'=>'Introduce la contraseña.',
      'password.string'=>'La contraseña debe ser una cadena.',
    ];

    $this->validate($request, [
      'email'=>'required|string',
      'password'=>'required|string',
    ], $messages);

    $username = $request['username'];
    $email = $request['email'];
    $password = $request['password'];

    try{
      $user = User::select('id', 'password')->where('email', $email)->first();

      if($user){
        if(Hash::check($password, $user->password)) {
          $token = Str::random(60).uniqid();

          $is_admin = $user->hasRole('super-admin');

          DB::statement("UPDATE users SET api_token = :token WHERE id = :id", ['token'=>$token ,'id'=>$user->id]);

          return response()->json(['token'=>$token, 'is_admin'=>$is_admin], 200);
        }else{
          return response()->json(['message'=>'El usuario y la contraseña no coinciden.'], 400);
        }
      }else{
        return response()->json(['message'=>'El usuario y la contraseña no coinciden.'], 400);
      }

      return response()->json(['message'=>'Has iniciado sesión correctamente.'], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
