<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

/**
 * @authenticated
 * 
 * @group Card Type Management
 *
 * APIs for managing cards types
 */
class CardsTypesController extends Controller{

  /**
	 * Get all cards types
	 */
  public function getAll(){
    try{
      $cardsTypes = Controller::getAllCardsTypes();

      return response()->json(['cardsTypes'=>$cardsTypes], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Get card type by id
	 *
   * @bodyParam  id int required Id of the card type. Example: 1
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
      $cardType = DB::select(DB::raw(
        "SELECT * FROM cards_types WHERE id=:id"
      ), ['id'=>$id])[0];

      return response()->json(['cardType'=>$cardType], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Insert card type
	 *
   * @bodyParam  name string required Name of the card type. Example: Oro
   * @bodyParam  image string Base64 image of the card type. Example: base64
   * @bodyParam  imageMini string Base64 image mini of the card type. Example: base64
   * @bodyParam  textColor string Text color of the card type. Example: #ffffff
   * @bodyParam  rare boolean If is rare the card type. Example: true
   * @bodyParam  special boolean If is special the card type. Example: true
	 */
  public function insert(Request $request){
    $messages = [
      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 50 caracteres.',
      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 7 caracteres.',
    ];

    $this->validate($request, [
      'name'=>'required|string|max:50',
      'textColor'=>'required|string|max:7',
    ], $messages);

    $name = $request['name'];
    $image = $request['image'];
    $imageMini = $request['imageMini'];
    $textColor = $request['textColor'];
    $rare = $request['rare'];
    $special = $request['special'];

    try{
      // Image

      if($image){
        $urlImage = '/cards_types';

        $response = $this->storeFile($image, $urlImage, 'png');

        if($response['success']){
          $file_name = $response['file'];
          $urlImage = '/storage/cards_types/' . $file_name;
        }else{
          return response()->json(['message'=>$response['message']], 500);
        }
      }else{
        $urlImage = null;
      }

      // Image mini

      if($imageMini){
        $urlImageMini = '/cards_types_mini';

        $response = $this->storeFile($imageMini, $urlImageMini, 'png');

        if($response['success']){
          $file_name = $response['file'];
          $urlImageMini = '/storage/cards_types_mini/' . $file_name;
        }else{
          return response()->json(['message'=>$response['message']], 500);
        }
      }else{
        $urlImageMini = null;
      }

      DB::statement("INSERT INTO cards_types VALUES(NULL, :name, :image, :image_mini, :text_color, :rare, :special)", [
        'name'=>$name,
        'image'=>$urlImage,
        'image_mini'=>$urlImageMini,
        'text_color'=>$textColor,
        'rare'=>$rare,
        'special'=>$special,
      ]);

      $cardsTypes = Controller::getAllCardsTypes();

      return response()->json(['message'=>'Tipo de carta insertado correctamente', 'cardsTypes'=>$cardsTypes], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  /**
	 * Delete card type
	 *
   * @bodyParam  id int required Id of the card type. Example: 1
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
      DB::statement("DELETE FROM cards_types WHERE id = :id", [
        'id'=>$id,
      ]);

      $cardsTypes = Controller::getAllCardsTypes();

      return response()->json(['message'=>'Tipo de carta eliminado correctamente', 'cardsTypes'=>$cardsTypes], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  /**
	 * Update card type
	 *
   * @bodyParam  id int required Id of the card type. Example: 1
   * @bodyParam  name string required Name of the card type. Example: Oro
   * @bodyParam  image string Base64 image of the card type. Example: base64
   * @bodyParam  imageMini string Base64 image mini of the card type. Example: base64
   * @bodyParam  textColor string Text color of the card type. Example: #ffffff
   * @bodyParam  rare boolean If is rare the card type. Example: true
   * @bodyParam  special boolean If is special the card type. Example: true
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
    $imageMini = $request['imageMini'];
    $textColor = $request['textColor'];
    $rare = $request['rare'];
    $special = $request['special'];

    try{
      // Image

      if($image){
        if(substr($image,0,8) === '/storage'){
          $urlImage = $image;
        }else{
          $urlImage = '/cards_types';

          $response = $this->storeFile($image, $urlImage, 'png');

          if($response['success']){
            $file_name = $response['file'];
            $urlImage = '/storage/cards_types/' . $file_name;
          }else{
            return response()->json(['message'=>$response['message']], 500);
          }
        }
      }else{
        $urlImage = null;
      }

      // Image mini

      if($imageMini){
        if(substr($imageMini,0,8) === '/storage'){
          $urlImageMini = $imageMini;
        }else{
          $urlImageMini = '/cards_types_mini';

          $response = $this->storeFile($imageMini, $urlImageMini, 'png');

          if($response['success']){
            $file_name = $response['file'];
            $urlImageMini = '/storage/cards_types_mini/' . $file_name;
          }else{
            return response()->json(['message'=>$response['message']], 500);
          }
        }
      }else{
        $urlImageMini = null;
      }

      DB::statement("UPDATE cards_types SET name=:name, image=:image, image_mini=:image_mini, text_color=:text_color, rare=:rare, special=:special WHERE id=:id", [
        'name'=>$name,
        'image'=>$urlImage,
        'image_mini'=>$urlImageMini,
        'text_color'=>$textColor,
        'rare'=>$rare,
        'special'=>$special,
        'id'=>$id,
      ]);

      $cardsTypes = Controller::getAllCardsTypes();

      return response()->json(['message'=>'Tipo de carta actualizado correctamente', 'cardsTypes'=>$cardsTypes], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
