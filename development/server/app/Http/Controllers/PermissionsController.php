<?php

namespace App\Http\Controllers;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;
use DB;

/**
 * @authenticated
 * 
 * @group Permission Management
 *
 * APIs for managing permissions
 */
class PermissionsController extends Controller{

  /**
	 * Get all permissions
	 */
  public function getAll(){
    try{
      $permissions = Controller::getAllPermissions();

      return response()->json(['permissions'=>$permissions], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Get permission by id
	 *
   * @bodyParam  id int required Id of the permission. Example: 1
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
      $permission = DB::select(DB::raw(
        "SELECT * FROM permissions WHERE id=:id"
      ), ['id'=>$id])[0];

      return response()->json(['permission'=>$permission], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Insert permission
	 *
   * @bodyParam  name string required Name of the permission. Example: Permiso
	 */
  public function insert(Request $request){
    $messages = [
      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 20 caracteres.',
      'name.unique'=>'El nombre introducido ya existe.',
      'name.regex'=>'El nombre debe tener caracteres alfanuméricos.',
    ];

    $this->validate($request, [
      'name'=>'required|string|max:20|unique:permissions,name|regex:/^[a-zA-Z0-9\ ]+$/i',
    ], $messages);

    $name = $request['name'];

    try{
      $role = Role::findById(1);

      $permission = Permission::create(['name' => $name]);

      $role->givePermissionTo($permission);

      $permissions = Controller::getAllPermissions();

      return response()->json(['message'=>'Permiso insertado correctamente', 'permissions'=>$permissions], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  /**
	 * Delete permission
	 *
   * @bodyParam  id int required Id of the permission. Example: 1
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
      DB::statement("DELETE FROM permissions WHERE id = :id", [
        'id'=>$id,
      ]);

      $permissions = Controller::getAllPermissions();

      return response()->json(['message'=>'Permiso eliminado correctamente', 'permissions'=>$permissions], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  /**
	 * Update permission
	 *
   * @bodyParam  id int required Id of the permission. Example: 1
   * @bodyParam  name string required Name of the permission. Example: España
	 */
  public function update(Request $request){
    $messages = [
      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 20 caracteres.',
      'name.regex'=>'El nombre debe tener caracteres alfanuméricos.',
      'id.required'=>'Introduce el id.',
      'id.integer'=>'El id debe ser un integer.',
    ];

    $this->validate($request, [
      'name'=>'required|string|max:20|regex:/^[a-zA-Z0-9\ ]+$/i',
      'id'=>'required|integer',
    ], $messages);

    $id = $request['id'];
    $name = $request['name'];

    try{
      DB::statement("UPDATE permissions SET name=:name WHERE id=:id", [
        'name'=>$name,
        'id'=>$id,
      ]);

      $permissions = Controller::getAllPermissions();

      return response()->json(['message'=>'Permiso actualizado correctamente', 'permissions'=>$permissions], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
