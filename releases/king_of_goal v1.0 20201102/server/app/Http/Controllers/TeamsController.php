<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

class TeamsController extends Controller{

  public function getAll(){
    try{
      $teams = Controller::getAllTeams();

      return response()->json(['teams'=>$teams], 200);
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
      $team = DB::select(DB::raw(
        "SELECT * FROM teams WHERE id=:id"
      ), ['id'=>$id])[0];

      return response()->json(['team'=>$team], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  public function insert(Request $request){
    $messages = [
      // name

      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 50 caracteres.',

      // league

      'idLeague.required'=>'Introduce la liga.',
      'idLeague.integer'=>'El id debe ser un integer.',

    ];

    $this->validate($request, [
      'name'=>'required|string|max:50',
      'idLeague'=>'required|integer',
    ], $messages);

    $name = $request['name'];
    $image = $request['image'];
    $idLeague = $request['idLeague'];

    try{
      if($image){
        $url = '/teams';

        $response = $this->storeFile($image, $url, 'png');

        if($response['success']){
          $file_name = $response['file'];
          $url = '/storage/teams/' . $file_name;
        }else{
          return response()->json(['message'=>$response['message']], 500);
        }
      }else{
        $url = null;
      }

      DB::statement("INSERT INTO teams VALUES(NULL, :name, :image, :id_league)", [
        'name'=>$name,
        'image'=>$url,
        'id_league'=>$idLeague,
      ]);

      $teams = Controller::getAllTeams();

      return response()->json(['message'=>'Equipo insertado correctamente', 'teams'=>$teams], 200);
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
      DB::statement("DELETE FROM teams WHERE id = :id", [
        'id'=>$id,
      ]);

      $teams = Controller::getAllTeams();

      return response()->json(['message'=>'Equipo eliminado correctamente', 'teams'=>$teams], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  public function update(Request $request){
    $messages = [
      // name

      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 50 caracteres.',

      'idLeague.required'=>'Introduce la liga.',
      'idLeague.integer'=>'El id debe ser un integer.',

    ];

    $this->validate($request, [
      'name'=>'required|string|max:50',
      'idLeague'=>'required|integer',
    ], $messages);

    $id = $request['id'];
    $name = $request['name'];
    $image = $request['image'];
    $idLeague = $request['idLeague'];

    try{
      if($image){
        if(substr($image,0,8) === '/storage'){
          $url = $image;
        }else{
          $url = '/teams';

          $response = $this->storeFile($image, $url, 'png');

          if($response['success']){
            $file_name = $response['file'];
            $url = '/storage/teams/' . $file_name;
          }else{
            return response()->json(['message'=>$response['message']], 500);
          }
        }
      }else{
        $url = null;
      }

      DB::statement("UPDATE teams SET name=:name, image=:image, id_league=:id_league WHERE id=:id", [
        'name'=>$name,
        'image'=>$url,
        'id'=>$id,
        'id_league'=>$idLeague,
      ]);

      $teams = Controller::getAllTeams();

      return response()->json(['message'=>'Equipo actualizado correctamente', 'teams'=>$teams], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
