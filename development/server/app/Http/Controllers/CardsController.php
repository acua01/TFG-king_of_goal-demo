<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

/**
 * @authenticated
 * 
 * @group Card Management
 *
 * APIs for managing cards
 */
class CardsController extends Controller{

  /**
	 * Get all cards
	 */
  public function getAll(){
    try{
      $cards = Controller::getAllCards();

      return response()->json(['cards'=>$cards], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Get card by id
	 *
   * @bodyParam  id int required Id of the card. Example: 1
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
      $team = DB::select(DB::raw(
        "SELECT * FROM cards WHERE id=:id"
      ), ['id'=>$id])[0];

      return response()->json(['team'=>$team], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Insert card
	 *
   * @bodyParam  rating int required Rating of the card. Example: 99
   * @bodyParam  value int required Value of the card. Example: 500
   * @bodyParam  pace int required Pace of the card. Example: 99
   * @bodyParam  shooting int required Shooting of the card. Example: 99
   * @bodyParam  passing int required Pasing of the card. Example: 99
   * @bodyParam  dribbling int required Dribbling of the card. Example: 99
   * @bodyParam  defending int required Defending of the card. Example: 99
   * @bodyParam  physicality int required Physicality of the card. Example: 99
   * @bodyParam  goodLeg string required Good leg of the card. Example: Derecha
   * @bodyParam  skills int required Skills of the card. Example: 5
   * @bodyParam  badLeg int required Bad leg of the card. Example: 5
   * @bodyParam  idType int required Id type of the card. Example: 1
   * @bodyParam  idPlayer int required Id player of the card. Example: 1
   * @bodyParam  idTeam int required Id team of the card. Example: 1
   * @bodyParam  idCountry int required Id country of the card. Example: 1
   * @bodyParam  idPosition int required Id position of the card. Example: 1
	 */
  public function insert(Request $request){
    $messages = [

      'rating.required'=>'Introduce la valoración.',
      'rating.integer'=>'La valoración debe ser un integer.',
      'rating.min'=>'La valoración debe ser mínima 1.',
      'rating.max'=>'La valoración debe ser máxima 99.',

      'value.required'=>'Introduce el valor.',
      'value.integer'=>'El valor debe ser un integer.',
      'value.min'=>'El valor debe ser mínimo 0.',

      'pace.required'=>'Introduce el ritmo.',
      'pace.integer'=>'El ritmo debe ser un integer.',
      'pace.min'=>'El ritmo debe ser mínimo 1.',
      'pace.max'=>'El ritmo debe ser máximo 99.',

      'shooting.required'=>'Introduce el tiro.',
      'shooting.integer'=>'El tiro debe ser un integer.',
      'shooting.min'=>'El tiro debe ser mínimo 1.',
      'shooting.max'=>'El tiro debe ser máximo 99.',

      'passing.required'=>'Introduce el pase.',
      'passing.integer'=>'El pase debe ser un integer.',
      'passing.min'=>'El pase debe ser mínimo 1.',
      'passing.max'=>'El pase debe ser máximo 99.',

      'dribbling.required'=>'Introduce el regate.',
      'dribbling.integer'=>'El regate debe ser un integer.',
      'dribbling.min'=>'El regate debe ser mínimo 1.',
      'dribbling.max'=>'El regate debe ser máximo 99.',

      'defending.required'=>'Introduce la defensa.',
      'defending.integer'=>'La defensa debe ser un integer.',
      'defending.min'=>'La defensa debe ser mínima 1.',
      'defending.max'=>'La defensa debe ser máxima 99.',

      'physicality.required'=>'Introduce el físico.',
      'physicality.integer'=>'El físico debe ser un integer.',
      'physicality.min'=>'El físico debe ser mínimo 1.',
      'physicality.max'=>'El físico debe ser máximo 99.',

      'goodLeg.required'=>'Introduce la pierna buena.',
      'goodLeg.string'=>'La pierna buena debe ser una cadena.',

      'skills.required'=>'Introduce las skills.',
      'skills.integer'=>'Las skills debe ser un integer.',
      'skills.min'=>'Las skills debe ser mínimo 1.',
      'skills.max'=>'Las skills debe ser máximo 5.',

      'badLeg.required'=>'Introduce la pierna mala.',
      'badLeg.integer'=>'La pierna mala debe ser un integer.',
      'badLeg.min'=>'La pierna mala debe ser mínimo 1.',
      'badLeg.max'=>'La pierna mala debe ser máximo 5.',

      'idType.required'=>'Introduce el tipo de carta.',
      'idType.integer'=>'El tipo de carta debe ser un integer.',

      'idPlayer.required'=>'Introduce el jugador.',
      'idPlayer.integer'=>'El jugador debe ser un integer.',

      'idTeam.required'=>'Introduce el equipo.',
      'idTeam.integer'=>'El equipo debe ser un integer.',

      'idCountry.required'=>'Introduce el país.',
      'idCountry.integer'=>'El país debe ser un integer.',

      'idPosition.required'=>'Introduce la posición.',
      'idPosition.integer'=>'La posición debe ser un integer.',

    ];

    $this->validate($request, [
      'rating'=>'required|integer|min:1|max:98',
      'value'=>'required|integer|min:0',
      'pace'=>'required|integer|min:1|max:99',
      'shooting'=>'required|integer|min:1|max:99',
      'passing'=>'required|integer|min:1|max:99',
      'dribbling'=>'required|integer|min:1|max:99',
      'defending'=>'required|integer|min:1|max:99',
      'physicality'=>'required|integer|min:1|max:99',
      'goodLeg'=>'required|string',
      'skills'=>'required|integer|min:1|max:5',
      'badLeg'=>'required|integer|min:1|max:5',
      'idType'=>'required|integer',
      'idPlayer'=>'required|integer',
      'idTeam'=>'required|integer',
      'idCountry'=>'required|integer',
      'idPosition'=>'required|integer',
    ], $messages);

    $rating = $request['rating'];
    $value = $request['value'];
    $pace = $request['pace'];
    $shooting = $request['shooting'];
    $passing = $request['passing'];
    $dribbling = $request['dribbling'];
    $defending = $request['defending'];
    $physicality = $request['physicality'];
    $goodLeg = $request['goodLeg'];
    $skills = $request['skills'];
    $badLeg = $request['badLeg'];
    $idType = $request['idType'];
    $idPlayer = $request['idPlayer'];
    $idTeam = $request['idTeam'];
    $idCountry = $request['idCountry'];
    $idPosition = $request['idPosition'];

    try{
      DB::statement("INSERT INTO cards VALUES(NULL, :rating, :value, :pace, :shooting, :passing, :dribbling, :defending, :physicality, :goodLeg, :skills, :badLeg, :idType, :idPlayer, :idTeam, :idCountry, :idPosition)", [
        'rating'=>$rating,
        'value'=>$value,
        'pace'=>$pace,
        'shooting'=>$shooting,
        'passing'=>$passing,
        'dribbling'=>$dribbling,
        'defending'=>$defending,
        'physicality'=>$physicality,
        'goodLeg'=>$goodLeg,
        'skills'=>$skills,
        'badLeg'=>$badLeg,
        'idType'=>$idType,
        'idPlayer'=>$idPlayer,
        'idTeam'=>$idTeam,
        'idCountry'=>$idCountry,
        'idPosition'=>$idPosition,
      ]);

      $cards = Controller::getAllCards();

      return response()->json(['message'=>'Carta insertada correctamente', 'cards'=>$cards], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  /**
	 * Delete card
	 *
   * @bodyParam  id int required Id of the card. Example: 1
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
      DB::statement("DELETE FROM cards WHERE id = :id", [
        'id'=>$id,
      ]);

      $cards = Controller::getAllCards();

      return response()->json(['message'=>'Carta eliminada correctamente', 'cards'=>$cards], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  /**
	 * Update card
	 *
   * @bodyParam  id int required Id of the card. Example: 1
   * @bodyParam  rating int required Rating of the card. Example: 99
   * @bodyParam  value int required Value of the card. Example: 500
   * @bodyParam  pace int required Pace of the card. Example: 99
   * @bodyParam  shooting int required Shooting of the card. Example: 99
   * @bodyParam  passing int required Pasing of the card. Example: 99
   * @bodyParam  dribbling int required Dribbling of the card. Example: 99
   * @bodyParam  defending int required Defending of the card. Example: 99
   * @bodyParam  physicality int required Physicality of the card. Example: 99
   * @bodyParam  goodLeg string required Good leg of the card. Example: Derecha
   * @bodyParam  skills int required Skills of the card. Example: 5
   * @bodyParam  badLeg int required Bad leg of the card. Example: 5
   * @bodyParam  idType int required Id type of the card. Example: 1
   * @bodyParam  idPlayer int required Id player of the card. Example: 1
   * @bodyParam  idTeam int required Id team of the card. Example: 1
   * @bodyParam  idCountry int required Id country of the card. Example: 1
   * @bodyParam  idPosition int required Id position of the card. Example: 1
	 */
  public function update(Request $request){
    $messages = [
      'id.required'=>'Introduce el id.',
      'id.integer'=>'El id debe ser un integer.',

      'rating.required'=>'Introduce la valoración.',
      'rating.integer'=>'La valoración debe ser un integer.',

      'value.required'=>'Introduce el valor.',
      'value.integer'=>'El valor debe ser un integer.',

      'pace.required'=>'Introduce el ritmo.',
      'pace.integer'=>'El ritmo debe ser un integer.',

      'shooting.required'=>'Introduce el tiro.',
      'shooting.integer'=>'El tiro debe ser un integer.',

      'passing.required'=>'Introduce el pase.',
      'passing.integer'=>'El pase debe ser un integer.',

      'dribbling.required'=>'Introduce el regate.',
      'dribbling.integer'=>'El regate debe ser un integer.',

      'defending.required'=>'Introduce la defensa.',
      'defending.integer'=>'La defensa debe ser un integer.',

      'physicality.required'=>'Introduce el físico.',
      'physicality.integer'=>'El físico debe ser un integer.',

      'idType.required'=>'Introduce el tipo de carta.',
      'idType.integer'=>'El tipo de carta debe ser un integer.',

      'idPlayer.required'=>'Introduce el jugador.',
      'idPlayer.integer'=>'El jugador debe ser un integer.',

      'idTeam.required'=>'Introduce el equipo.',
      'idTeam.integer'=>'El equipo debe ser un integer.',

      'idCountry.required'=>'Introduce el país.',
      'idCountry.integer'=>'El país debe ser un integer.',

      'idPosition.required'=>'Introduce la posición.',
      'idPosition.integer'=>'La posición debe ser un integer.',

    ];

    $this->validate($request, [
      'id'=>'required|integer',
      'rating'=>'required|integer',
      'value'=>'required|integer',
      'pace'=>'required|integer',
      'shooting'=>'required|integer',
      'passing'=>'required|integer',
      'dribbling'=>'required|integer',
      'defending'=>'required|integer',
      'physicality'=>'required|integer',
      'idType'=>'required|integer',
      'idPlayer'=>'required|integer',
      'idTeam'=>'required|integer',
      'idCountry'=>'required|integer',
      'idPosition'=>'required|integer',
    ], $messages);

    $id = $request['id'];
    $rating = $request['rating'];
    $value = $request['value'];
    $pace = $request['pace'];
    $shooting = $request['shooting'];
    $passing = $request['passing'];
    $dribbling = $request['dribbling'];
    $defending = $request['defending'];
    $physicality = $request['physicality'];
    $goodLeg = $request['goodLeg'];
    $skills = $request['skills'];
    $badLeg = $request['badLeg'];
    $idType = $request['idType'];
    $idPlayer = $request['idPlayer'];
    $idTeam = $request['idTeam'];
    $idCountry = $request['idCountry'];
    $idPosition = $request['idPosition'];

    try{
      DB::statement(
        "UPDATE cards
        SET rating=:rating,
          value=:value,
          pace=:pace,
          shooting=:shooting,
          passing=:passing,
          dribbling=:dribbling,
          defending=:defending,
          physicality=:physicality,
          good_leg=:goodLeg,
          skills=:skills,
          bad_leg=:badLeg,
          id_type=:idType,
          id_player=:idPlayer,
          id_team=:idTeam,
          id_country=:idCountry,
          id_position=:idPosition
        WHERE id=:id", [
        'rating'=>$rating,
        'value'=>$value,
        'pace'=>$pace,
        'shooting'=>$shooting,
        'passing'=>$passing,
        'dribbling'=>$dribbling,
        'defending'=>$defending,
        'physicality'=>$physicality,
        'goodLeg'=>$goodLeg,
        'skills'=>$skills,
        'badLeg'=>$badLeg,
        'idType'=>$idType,
        'idPlayer'=>$idPlayer,
        'idTeam'=>$idTeam,
        'idCountry'=>$idCountry,
        'idPosition'=>$idPosition,
        'id'=>$id
      ]);

      $cards = Controller::getAllCards();

      return response()->json(['message'=>'Carta actualizada correctamente', 'cards'=>$cards], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
