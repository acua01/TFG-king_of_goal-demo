<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
  protected function getErrorMessage($e){
      if(env('APP_ENV') === 'local'){
          return $e->getMessage();
      }else{
          return 'There was an internal error';
      }
  }
}
