<?php

namespace App\Http\Controllers;
use Laravel\Lumen\Routing\Controller as BaseController;
use DB;

class Controller extends BaseController
{
  protected function getErrorMessage($e){
      if(env('APP_ENV') === 'local'){
          return $e->getMessage();
      }else{
          return 'There was an internal error';
      }
  }

  protected function getAllPermissions(){
    $permissions = DB::select(DB::raw(
      "SELECT id, name FROM permissions"
    ));

    return $permissions;
  }
}
