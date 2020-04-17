<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

class PlayersController extends Controller{

  public function getAll(){
    try{
      $players = DB::select(DB::raw(
        "SELECT * FROM players ORDER BY name ASC"
      ));

      return response()->json(['players'=>$players], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  public function getById(Request $request){
    $messages = [
      'id.required'=>'Introduce el id.',
      'id.integer'=>'El id debe ser un integer.',
    ];

    $this->validate($request, [
      'id'=>'required|integer',
    ], $messages);

    $id = $request['id'];

    try{
      $player = DB::select(DB::raw(
        "SELECT * FROM players WHERE id=:id"
      ), ['id'=>$id])[0];

      return response()->json(['player'=>$player], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  public function insert(Request $request){
    $messages = [
      // name

      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 30 caracteres.',

      // full name

      'full_name.required'=>'Introduce el nombre completo.',
      'full_name.string'=>'El nombre completo debe ser una cadena.',
      'full_name.max'=>'El nombre completo debe tener un máximo de 255 caracteres.',
      'full_name.unique'=>'El nombre completo introducido ya existe.',

      // height

      'height.required'=>'Introduce la altura.',
      'height.numeric'=>'La altura debe ser numérico.',
      'height.max'=>'La altura debe tener un máximo de 3 dígitos.',
    ];

    $this->validate($request, [
      'name'=>'required|string|max:30',
      'full_name'=>'required|string|max:255|unique:players,full_name',
      'height'=>'required|numeric|max:3',
    ], $messages);

    $name = $request['name'];
    $full_name = $request['full_name'];
    $image = $request['image'];
    $height = $request['height'];

    try{
      if($image){
        $url = '/players';

        $response = $this->storeFile($image, $url, 'png');

        if($response['success']){
          $file_name = $response['file'];
          $url = '/storage/players/' . $file_name;
        }else{
          return response()->json(['message'=>$response['message']], 500);
        }
      }else{
        $url = null;
      }

      DB::statement("INSERT INTO players VALUES(NULL, :name, :full_name, :image, :height)", [
        'name'=>$name,
        'full_name'=>$full_name,
        'image'=>$url,
        'height'=>$height,
      ]);

      $players = Controller::getAllPlayers();

      return response()->json(['message'=>'Jugador insertado correctamente', 'players'=>$players], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  public function delete(Request $request){
    $messages = [
      'id.required'=>'Introduce el id.',
      'id.integer'=>'El id debe ser un integer.',
    ];

    $this->validate($request, [
      'id'=>'required|integer',
    ], $messages);

    $id = $request['id'];

    try{
      DB::statement("DELETE FROM players WHERE id = :id", [
        'id'=>$id,
      ]);

      $players = Controller::getAllPlayers();

      return response()->json(['message'=>'Jugador eliminado correctamente', 'players'=>$players], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  public function update(Request $request){
    $messages = [
      // name

      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 30 caracteres.',

      // full name

      'full_name.required'=>'Introduce el nombre completo.',
      'full_name.string'=>'El nombre completo debe ser una cadena.',
      'full_name.max'=>'El nombre completo debe tener un máximo de 255 caracteres.',

      // height

      'height.required'=>'Introduce la altura.',
      'height.numeric'=>'La altura debe ser numérico.',
      'height.max'=>'La altura debe tener un máximo de 3 dígitos.',
    ];

    $this->validate($request, [
      'name'=>'required|string|max:30',
      'full_name'=>'required|string|max:255',
      'height'=>'required|numeric|max:3',
    ], $messages);

    $id = $request['id'];
    $name = $request['name'];
    $full_name = $request['full_name'];
    $image = $request['image'];
    $height = $request['height'];

    try{
      if($image){
        if(substr($image,0,8) === '/storage'){
          $url = $image;
        }else{
          $url = '/players';

          $response = $this->storeFile($image, $url, 'png');

          if($response['success']){
            $file_name = $response['file'];
            $url = '/storage/players/' . $file_name;
          }else{
            return response()->json(['message'=>$response['message']], 500);
          }
        }
      }else{
        $url = null;
      }

      DB::statement("UPDATE players SET name=:name, full_name=:full_name, image=:image, height=:height WHERE id=:id", [
        'name'=>$name,
        'full_name'=>$full_name,
        'image'=>$url,
        'height'=>$height,
        'id'=>$id,
      ]);

      $players = Controller::getAllPlayers();

      return response()->json(['message'=>'Jugador actualizado correctamente', 'players'=>$players], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
