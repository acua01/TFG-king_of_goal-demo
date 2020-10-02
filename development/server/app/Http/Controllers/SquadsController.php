<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

class SquadsController extends Controller{

  public function getAllByClub(Request $request){

    $idClub = $request['idClub'];

    try{
      $squads = Controller::getAllSquads($idClub);

      return response()->json(['squads'=>$squads], 200);
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
      $squad = DB::select(DB::raw(
        "SELECT * FROM squads WHERE id=:id"
      ), ['id'=>$id])[0];

      return response()->json(['squad'=>$squad], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  public function insert(Request $request){
    $messages = [
      // name

      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 50 caracteres.',

    ];

    $this->validate($request, [
      'name'=>'required|string|max:50',
    ], $messages);

    $name = $request['name'];
    $idClub = $request['idClub'];
    $array_positions_names = ['por', 'li', 'dfc1', 'dfc2', 'ld', 'mc1', 'mco', 'mc2', 'ei', 'dc', 'ed',
      'alt1', 'alt2', 'alt3', 'alt4', 'alt5', 'alt6', 'alt7', 'res1', 'res2', 'res3', 'res4', 'res5'
    ];

    try{

      DB::statement("INSERT INTO squads VALUES(NULL, :name, :rating, :chemistry, :id_club)", [
        'name'=>$name,
        'rating'=>0,
        'chemistry'=>0,
        'id_club'=>$idClub
      ]);

      $squad = DB::select(DB::raw(
        "SELECT *
        FROM squads
        WHERE id_club=:id_club
        ORDER BY id DESC"
  
      ), ['id_club'=>$idClub])[0];

      foreach ($array_positions_names as $n) {
        DB::statement("INSERT INTO squads_cards VALUES(NULL, :position, :id_squad, NULL)", [
          'position'=>$n,
          'id_squad'=>$squad->id,
        ]);
      }
      
      $squads = Controller::getAllSquads($idClub);

      return response()->json(['message'=>'Plantilla creada correctamente', 'squads'=>$squads], 200);
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
    $idClub = $request['idClub'];

    try{
      DB::statement("DELETE FROM squads WHERE id = :id", [
        'id'=>$id,
      ]);

      DB::statement("DELETE FROM squads_cards WHERE id_squad = :id_squad", [
        'id_squad'=>$id,
      ]);

      $squads = Controller::getAllSquads($idClub);

      return response()->json(['message'=>'Plantilla eliminada correctamente', 'squads'=>$squads], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  public function update(Request $request){
    $messages = [
      // name

      'name.required'=>'Introduce el nombre.',
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 50 caracteres.',

    ];

    $this->validate($request, [
      'name'=>'required|string|max:50',
    ], $messages);

    $id = $request['id'];
    $name = $request['name'];
    $rating = $request['rating'];
    $chemistry = $request['chemistry'];
    $idClub = $request['idClub'];

    try{

      DB::statement("UPDATE squads SET name=:name, rating=:rating, chemistry=:chemistry WHERE id=:id", [
        'name'=>$name,
        'rating'=>$rating,
        'chemistry'=>$chemistry,
        'id'=>$id,
      ]);

      $squads = Controller::getAllSquads($idClub);

      return response()->json(['message'=>'Plantilla actualizada correctamente', 'squads'=>$squads], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  public function getAllSquadCards(Request $request){

    $idSquad = $request['idSquad'];

    try{
      $cards = DB::select(DB::raw(
        "SELECT *
        FROM squads_cards
        WHERE id_squad=:id_squad"
  
      ), ['id_squad'=>$idSquad]);

      return response()->json(['cards'=>$cards], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  public function updateSquadCard(Request $request){

    $idSquad = $request['idSquad'];
    $positions = $request['positions'];

    try{

      foreach($positions as $p){
        DB::statement("UPDATE squads_cards SET id_club_card=:id_club_card WHERE id=:id", [
          'id_club_card'=>$p['idCard'],
          'id'=>$p['idSquadCard'],
        ]);
      }

      $cards = DB::select(DB::raw(
        "SELECT *
        FROM squads_cards
        WHERE id_squad=:id_squad"
  
      ), ['id_squad'=>$idSquad]);

      return response()->json(['message'=>'Cambio realizado correctamente', 'cards'=>$cards], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
