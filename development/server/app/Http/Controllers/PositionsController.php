<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

/**
 * @authenticated
 * 
 * @group Position Management
 *
 * APIs for managing positions
 */
class PositionsController extends Controller{

  /**
	 * Get all positions
	 */
  public function getAll(){
    try{
      $positions = Controller::getAllPositions();

      return response()->json(['positions'=>$positions], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Get position by id
	 *
   * @bodyParam  id int required Id of the position. Example: 1
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
      $position = DB::select(DB::raw(
        "SELECT * FROM positions WHERE id=:id"
      ), ['id'=>$id])[0];

      return response()->json(['position'=>$position], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
