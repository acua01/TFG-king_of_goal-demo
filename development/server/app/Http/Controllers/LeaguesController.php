<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

/**
 * @authenticated
 * 
 * @group League Management
 *
 * APIs for managing leagues
 */
class LeaguesController extends Controller{

  /**
	 * Get all leagues
	 */
  public function getAll(){
    try{
      $leagues = Controller::getAllLeagues();

      return response()->json(['leagues'=>$leagues], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Get league by id
	 *
   * @bodyParam  id int required Id of the league. Example: 1
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
      $league = DB::select(DB::raw(
        "SELECT * FROM leagues WHERE id=:id"
      ), ['id'=>$id])[0];

      return response()->json(['league'=>$league], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Insert league
	 *
   * @bodyParam  name string required Name of the league. Example: La Liga
   * @bodyParam  image string Base64 image of the league. Example: base64
	 */
  public function insert(Request $request){
    $messages = [
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

  /**
	 * Delete league
	 *
   * @bodyParam  id int required Id of the league. Example: 1
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
      DB::statement("DELETE FROM leagues WHERE id = :id", [
        'id'=>$id,
      ]);

      $leagues = Controller::getAllLeagues();

      return response()->json(['message'=>'Liga eliminada correctamente', 'leagues'=>$leagues], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  /**
	 * Update league
	 *
   * @bodyParam  id int required Id of the league. Example: 1
   * @bodyParam  name string required Name of the league. Example: La Liga
   * @bodyParam  image string Base64 image of the league. Example: base64
	 */
  public function update(Request $request){
    $messages = [
      'id.required'=>'Introduce el id.',
      'id.integer'=>'El id debe ser un integer.',
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
