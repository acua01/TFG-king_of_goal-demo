<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

/**
 * @authenticated
 * 
 * @group Club Management
 *
 * APIs for managing clubs
 */
class ClubsController extends Controller{

  /**
	 * Insert club
	 *
   * @bodyParam  name string required Name of the club. Example: España
   * @bodyParam  image string image of the club. Example: image_name
   * @bodyParam  username string required Username of the club. Example: acua
	 */
  public function insert(Request $request){
    $messages = [
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 30 caracteres.',
    ];

    $this->validate($request, [
      'name'=>'string|max:30',
    ], $messages);

    $name = $request['name'];
    $image = $request['image'];
    $username = $request['username'];

    try{
      $user = DB::select(DB::raw(
        "SELECT id FROM users WHERE username=:username"
      ), ['username'=>$username])[0];

      DB::statement("INSERT INTO clubs VALUES(NULL, :name, :image, 0, :id_user)", [
        'name'=>$name,
        'image'=>$image,
        'id_user'=>$user->id
      ]);

      $club = DB::select(DB::raw(
        "SELECT * FROM clubs WHERE id_user=:id_user"
      ), ['id_user'=>$user->id])[0];

      DB::statement("UPDATE users SET id_club=:id_club WHERE id=:id", [
        'id_club'=>$club->id,
        'id'=>$user->id,
      ]);

      return response()->json(['message'=>'Club creado correctamente', 'club'=>$club], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }

  }

  /**
	 * Update club
	 *
   * @bodyParam  name string required Name of the club. Example: España
   * @bodyParam  image string image of the club. Example: image_name
   * @bodyParam  username string required Username of the club. Example: acua
	 */
  public function update(Request $request){
    $messages = [
      'name.string'=>'El nombre debe ser una cadena.',
      'name.max'=>'El nombre debe tener un máximo de 30 caracteres.',
    ];

    $this->validate($request, [
      'name'=>'string|max:30',
    ], $messages);

    $name = $request['name'];
    $image = $request['image'];
    $username = $request['username'];

    try{

      $user = DB::select(DB::raw(
        "SELECT id FROM users WHERE username=:username"
      ), ['username'=>$username])[0];

      DB::statement("UPDATE clubs SET name = :name, image = :image WHERE id_user = :id_user", [
        'name'=>$name,
        'image'=>$image,
        'id_user'=>$user->id
      ]);

      $club = DB::select(DB::raw(
        "SELECT * FROM clubs WHERE id_user=:id_user"
      ), ['id_user'=>$user->id])[0];

      return response()->json(['message'=>'Club actualizado correctamente', 'club'=>$club], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Delete club
	 *
   * @bodyParam  id int required Id of the club. Example: 1
	 */
  public function delete(Request $request){
    $id = $request['id'];

    try{

      DB::statement("DELETE FROM clubs WHERE id = :id", [
        'id'=>$id
      ]);

      return response()->json(['message'=>'Club borrado correctamente'], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Sell Card
	 *
   * @bodyParam  idClub int required Id of the club. Example: 1
   * @bodyParam  idClubCard int required Id of the club card. Example: 1
   * @bodyParam  cardValue int required Value of the club card. Example: 500
	 */
  public function sellCard(Request $request){
    $idClub = $request['idClub'];
    $idClubCard = $request['idClubCard'];
    $cardValue = $request['cardValue'];

    try{

      DB::statement("DELETE FROM clubs_cards WHERE id = :id", [
        'id'=>$idClubCard
      ]);

      DB::statement("UPDATE clubs SET coins = (coins + :coins) WHERE id = :id", [
        'coins'=>$cardValue,
        'id'=>$idClub
      ]);

      $club = DB::select(DB::raw(
        "SELECT * FROM clubs WHERE id=:id"
      ), ['id'=>$idClub])[0];

      $club_cards = Controller::getClubCards($idClub);

      return response()->json(['message'=>'Jugador vendido correctamente', 'club'=>$club, 'club_cards'=>$club_cards], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Save Cards
	 *
   * @bodyParam  idClub int required Id of the club. Example: 1
   * @bodyParam  idCards int required Array of id of club cards. Example: 1
	 */
  public function saveCards(Request $request){
    $idClub = $request['idClub'];
    $idCards = $request['idCards'];

    try{

      foreach ($idCards as $idCard) {
        DB::statement("INSERT INTO clubs_cards VALUES(NULL, :id_club, :id_card)", [
          'id_club'=>$idClub,
          'id_card'=>$idCard
        ]);
      }

      $club = DB::select(DB::raw(
        "SELECT * FROM clubs WHERE id=:id"
      ), ['id'=>$idClub])[0];

      $club_cards = Controller::getClubCards($idClub);

      return response()->json(['message'=>'Jugadores guardados correctamente', 'club'=>$club, 'club_cards'=>$club_cards], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

  /**
	 * Save Cards
	 *
   * @bodyParam  idClub int required Id of the club. Example: 1
   * @bodyParam  coins int required Coins. Example: 500
	 */
  public function updateCoins(Request $request){
    $idClub = $request['idClub'];
    $coins = $request['coins'];

    try{

      DB::statement("UPDATE clubs SET coins = (coins + :coins) WHERE id = :id", [
        'coins'=>$coins,
        'id'=>$idClub
      ]);

      $club = DB::select(DB::raw(
        "SELECT * FROM clubs WHERE id=:id"
      ), ['id'=>$idClub])[0];

      return response()->json(['message'=>'Monedas actualizadas correctamente', 'club'=>$club], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }
}
