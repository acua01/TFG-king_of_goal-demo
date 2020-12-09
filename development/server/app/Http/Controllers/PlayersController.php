<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

/**
 * @authenticated
 * 
 * @group Player Management
 *
 * APIs for managing players
 */
class PlayersController extends Controller{

  /**
	 * Get all players
	 */
  public function getAll(){
    try{
      $players = Controller::getAllPlayers();

      return response()->json(['players'=>$players], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Get player by id
	 *
   * @bodyParam  id int required Id of the player. Example: 1
	 */
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

  /**
	 * Insert player
	 *
   * @bodyParam  name string required Name of the player. Example: El Choco
   * @bodyParam  full_name string required Full name of the player. Example: El Choco Lozano
   * @bodyParam  image string Base64 image of the player. Example: base64
   * @bodyParam  height int required Height of the player. Example: 175
   * @bodyParam  birth string Birth of the player. Example: 26/10/1998
	 */
  public function insert(Request $request){
    $messages = [
      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 30 caracteres.',
      'full_name.required'=>'Introduce el nombre completo.',
      'full_name.string'=>'El nombre completo debe ser una cadena.',
      'full_name.max'=>'El nombre completo debe tener un máximo de 255 caracteres.',
      'full_name.unique'=>'El nombre completo introducido ya existe.',
      'height.required'=>'Introduce la altura.',
      'height.numeric'=>'La altura debe ser numérico.',
    ];

    $this->validate($request, [
      'name'=>'required|string|max:30',
      'full_name'=>'required|string|max:255|unique:players,full_name',
      'height'=>'required|numeric',
    ], $messages);

    $name = $request['name'];
    $full_name = $request['full_name'];
    $image = $request['image'];
    $height = $request['height'];
    $birth = $request['birth'];

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

      DB::statement("INSERT INTO players VALUES(NULL, :name, :full_name, :image, :height, :birth)", [
        'name'=>$name,
        'full_name'=>$full_name,
        'image'=>$url,
        'height'=>$height,
        'birth'=>$birth,
      ]);

      $players = Controller::getAllPlayers();

      return response()->json(['message'=>'Jugador insertado correctamente', 'players'=>$players], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  /**
	 * Delete player
	 *
   * @bodyParam  id int required Id of the player. Example: 1
	 */
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

  /**
	 * Update player
	 *
   * @bodyParam  id int required Id of the player. Example: 1
   * @bodyParam  name string required Name of the player. Example: El Choco
   * @bodyParam  full_name string required Full name of the player. Example: El Choco Lozano
   * @bodyParam  image string Base64 image of the player. Example: base64
   * @bodyParam  height int required Height of the player. Example: 175
   * @bodyParam  birth string Birth of the player. Example: 26/10/1998
	 */
  public function update(Request $request){
    $messages = [
      'id.required'=>'Introduce el id.',
      'id.integer'=>'El id debe ser un integer.',
      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 30 caracteres.',
      'full_name.required'=>'Introduce el nombre completo.',
      'full_name.string'=>'El nombre completo debe ser una cadena.',
      'full_name.max'=>'El nombre completo debe tener un máximo de 255 caracteres.',
      'height.required'=>'Introduce la altura.',
      'height.numeric'=>'La altura debe ser numérico.',
    ];

    $this->validate($request, [
      'name'=>'required|string|max:30',
      'full_name'=>'required|string|max:255',
      'height'=>'required|numeric',
    ], $messages);

    $id = $request['id'];
    $name = $request['name'];
    $full_name = $request['full_name'];
    $image = $request['image'];
    $height = $request['height'];
    $birth = $request['birth'];

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

      DB::statement("UPDATE players SET name=:name, full_name=:full_name, image=:image, height=:height, birth=:birth WHERE id=:id", [
        'name'=>$name,
        'full_name'=>$full_name,
        'image'=>$url,
        'height'=>$height,
        'birth'=>$birth,
        'id'=>$id,
      ]);

      $players = Controller::getAllPlayers();

      return response()->json(['message'=>'Jugador actualizado correctamente', 'players'=>$players], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
