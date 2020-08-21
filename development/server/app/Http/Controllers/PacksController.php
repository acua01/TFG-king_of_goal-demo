<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

class PacksController extends Controller{

  public function getAll(){
    try{
      $packs = Controller::getAllPacks();

      return response()->json(['packs'=>$packs], 200);
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
      $pack = DB::select(DB::raw(
        "SELECT * FROM packs WHERE id=:id"
      ), ['id'=>$id])[0];

      return response()->json(['pack'=>$pack], 200);
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
    $description = $request['description'];
    $numberPlayers = $request['numberPlayers'];
    $price = $request['price'];
    $image = $request['image'];

    try{
      if($image){
        $url = '/packs';

        $response = $this->storeFile($image, $url, 'png');

        if($response['success']){
          $file_name = $response['file'];
          $url = '/storage/packs/' . $file_name;
        }else{
          return response()->json(['message'=>$response['message']], 500);
        }
      }else{
        $url = null;
      }

      DB::statement("INSERT INTO packs VALUES(NULL, :name, :description, :number_players, :price, :image)", [
        'name'=>$name,
        'description'=>$description,
        'number_players'=>$numberPlayers,
        'price'=>$price,
        'image'=>$url,
      ]);

      $packs = Controller::getAllPacks();

      return response()->json(['message'=>'Sobre insertado correctamente', 'packs'=>$packs], 200);
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
      DB::statement("DELETE FROM packs WHERE id = :id", [
        'id'=>$id,
      ]);

      $packs = Controller::getAllPacks();

      return response()->json(['message'=>'Sobre eliminado correctamente', 'packs'=>$packs], 200);
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
    $description = $request['description'];
    $numberPlayers = $request['numberPlayers'];
    $price = $request['price'];
    $image = $request['image'];

    try{
      if($image){
        if(substr($image,0,8) === '/storage'){
          $url = $image;
        }else{
          $url = '/packs';

          $response = $this->storeFile($image, $url, 'png');

          if($response['success']){
            $file_name = $response['file'];
            $url = '/storage/packs/' . $file_name;
          }else{
            return response()->json(['message'=>$response['message']], 500);
          }
        }
      }else{
        $url = null;
      }

      DB::statement("UPDATE packs SET name=:name, description=:description, number_players=:number_players, price=:price, image=:image WHERE id=:id", [
        'name'=>$name,
        'description'=>$description,
        'number_players'=>$numberPlayers,
        'price'=>$price,
        'image'=>$url,
        'id'=>$id,
      ]);

      $packs = Controller::getAllPacks();

      return response()->json(['message'=>'Sobre actualizado correctamente', 'packs'=>$packs], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
