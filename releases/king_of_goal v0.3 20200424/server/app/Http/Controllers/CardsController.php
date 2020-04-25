<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

class CardsController extends Controller{

  public function getAll(){
    try{
      $cards = Controller::getAllCards();

      return response()->json(['cards'=>$cards], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

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

  public function insert(Request $request){
    $messages = [

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

    $rating = $request['rating'];
    $value = $request['value'];
    $pace = $request['pace'];
    $shooting = $request['shooting'];
    $passing = $request['passing'];
    $dribbling = $request['dribbling'];
    $defending = $request['defending'];
    $physicality = $request['physicality'];
    $idType = $request['idType'];
    $idPlayer = $request['idPlayer'];
    $idTeam = $request['idTeam'];
    $idCountry = $request['idCountry'];
    $idPosition = $request['idPosition'];

    try{
      DB::statement("INSERT INTO cards VALUES(NULL, :rating, :value, :pace, :shooting, :passing, :dribbling, :defending, :physicality, :idType, :idPlayer, :idTeam, :idCountry, :idPosition)", [
        'rating'=>$rating,
        'value'=>$value,
        'pace'=>$pace,
        'shooting'=>$shooting,
        'passing'=>$passing,
        'dribbling'=>$dribbling,
        'defending'=>$defending,
        'physicality'=>$physicality,
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
