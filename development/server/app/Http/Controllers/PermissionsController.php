<?php

namespace App\Http\Controllers;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;
use DB;

class PermissionsController extends Controller{

  public function getAll(){
    try{
      $permissions = DB::select(DB::raw(
        "SELECT id, name FROM permissions"
      ));

      return response()->json(['permissions'=>$permissions], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  public function getById(Request $request){
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

  public function insert(Request $request){
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

  public function delete(Request $request){
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

  public function update(Request $request){
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
