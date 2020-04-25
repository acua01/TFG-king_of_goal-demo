<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

class CountriesController extends Controller{

  public function getAll(){
    try{
      $countries = Controller::getAllCountries();

      return response()->json(['countries'=>$countries], 200);
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
      $country = DB::select(DB::raw(
        "SELECT * FROM countries WHERE id=:id"
      ), ['id'=>$id])[0];

      return response()->json(['country'=>$country], 200);
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

    ];

    $this->validate($request, [
      'name'=>'required|string|max:30',
    ], $messages);

    $name = $request['name'];
    $image = $request['image'];

    try{
      if($image){
        $url = '/countries';

        $response = $this->storeFile($image, $url, 'png');

        if($response['success']){
          $file_name = $response['file'];
          $url = '/storage/countries/' . $file_name;
        }else{
          return response()->json(['message'=>$response['message']], 500);
        }
      }else{
        $url = null;
      }

      DB::statement("INSERT INTO countries VALUES(NULL, :name, :image)", [
        'name'=>$name,
        'image'=>$url,
      ]);

      $countries = Controller::getAllCountries();

      return response()->json(['message'=>'País insertado correctamente', 'countries'=>$countries], 200);
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
      DB::statement("DELETE FROM countries WHERE id = :id", [
        'id'=>$id,
      ]);

      $countries = Controller::getAllCountries();

      return response()->json(['message'=>'País eliminado correctamente', 'countries'=>$countries], 200);
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

    ];

    $this->validate($request, [
      'name'=>'required|string|max:30',
    ], $messages);

    $id = $request['id'];
    $name = $request['name'];
    $image = $request['image'];

    try{
      if($image){
        if(substr($image,0,8) === '/storage'){
          $url = $image;
        }else{
          $url = '/countries';

          $response = $this->storeFile($image, $url, 'png');

          if($response['success']){
            $file_name = $response['file'];
            $url = '/storage/countries/' . $file_name;
          }else{
            return response()->json(['message'=>$response['message']], 500);
          }
        }
      }else{
        $url = null;
      }

      DB::statement("UPDATE countries SET name=:name, image=:image WHERE id=:id", [
        'name'=>$name,
        'image'=>$url,
        'id'=>$id,
      ]);

      $countries = Controller::getAllCountries();

      return response()->json(['message'=>'País actualizado correctamente', 'countries'=>$countries], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
