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

      return response()->json($permissions, 200);
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

      return response()->json(['message'=>'Permiso insertado correctamente'], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }
}
