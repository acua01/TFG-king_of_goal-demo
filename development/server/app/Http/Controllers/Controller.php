<?php

namespace App\Http\Controllers;
use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Support\Str;
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

  protected function storeFile($base64, $path, $ext){
    try {
      $image_parts = explode(";base64,", $base64);
      $image_base64 = base64_decode($image_parts[1]);
      $generatedFileName = Str::random(30)."_".uniqid() . '.'.$ext;
      file_put_contents($this->public_path().$path.'/'.$generatedFileName, $image_base64);
      return ['success' => true, 'file' => $generatedFileName];
    } catch (\Exception $e) {
      return ['success' => false, 'message'=> $e->getMessage()];
    }
  }

  protected function public_path(){
      return base_path().'/storage/app/public';
  }

  protected function getAllPermissions(){
    $permissions = DB::select(DB::raw(
      "SELECT id, name FROM permissions ORDER BY name ASC"
    ));

    return $permissions;
  }

  protected function getAllPlayers(){
    $players = DB::select(DB::raw(
      "SELECT * FROM players ORDER BY name ASC"
    ));

    return $players;
  }

  protected function getAllCountries(){
    $countries = DB::select(DB::raw(
      "SELECT * FROM countries ORDER BY name ASC"
    ));

    return $countries;
  }

  protected function getAllLeagues(){
    $leagues = DB::select(DB::raw(
      "SELECT * FROM leagues ORDER BY name ASC"
    ));

    return $leagues;
  }
}
