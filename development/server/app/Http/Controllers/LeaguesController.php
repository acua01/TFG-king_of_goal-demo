<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

class LeaguesController extends Controller{

  public function getAll(){
    try{
      $leagues = DB::select(DB::raw(
        "SELECT * FROM leagues ORDER BY name ASC"
      ));

      return response()->json(['leagues'=>$leagues], 200);
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
      $league = DB::select(DB::raw(
        "SELECT * FROM leagues WHERE id=:id"
      ), ['id'=>$id])[0];

      return response()->json(['league'=>$league], 200);
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

    ];

    $this->validate($request, [
      'name'=>'required|string|max:50',
    ], $messages);

    $name = $request['name'];
    $image = $request['image'];

    try{
      if($image){
        $url = '/leagues';

        $response = $this->storeFile($image, $url, 'png');

        if($response['success']){
          $file_name = $response['file'];
          $url = '/storage/leagues/' . $file_name;
        }else{
          return response()->json(['message'=>$response['message']], 500);
        }
      }else{
        $url = null;
      }

      DB::statement("INSERT INTO leagues VALUES(NULL, :name, :image)", [
        'name'=>$name,
        'image'=>$url,
      ]);

      $leagues = Controller::getAllLeagues();

      return response()->json(['message'=>'Liga insertada correctamente', 'leagues'=>$leagues], 200);
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
      DB::statement("DELETE FROM leagues WHERE id = :id", [
        'id'=>$id,
      ]);

      $leagues = Controller::getAllLeagues();

      return response()->json(['message'=>'Liga eliminada correctamente', 'leagues'=>$leagues], 200);
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

    ];

    $this->validate($request, [
      'name'=>'required|string|max:50',
    ], $messages);

    $id = $request['id'];
    $name = $request['name'];
    $image = $request['image'];

    try{
      if($image){
        if(substr($image,0,8) === '/storage'){
          $url = $image;
        }else{
          $url = '/leagues';

          $response = $this->storeFile($image, $url, 'png');

          if($response['success']){
            $file_name = $response['file'];
            $url = '/storage/leagues/' . $file_name;
          }else{
            return response()->json(['message'=>$response['message']], 500);
          }
        }
      }else{
        $url = null;
      }

      DB::statement("UPDATE leagues SET name=:name, image=:image WHERE id=:id", [
        'name'=>$name,
        'image'=>$url,
        'id'=>$id,
      ]);

      $leagues = Controller::getAllLeagues();

      return response()->json(['message'=>'Liga actualizada correctamente', 'leagues'=>$leagues], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
