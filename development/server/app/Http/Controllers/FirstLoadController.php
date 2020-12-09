<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

/**
 * @authenticated
 * 
 * @group First Load
 *
 * APIs for first load
 */
class FirstLoadController extends Controller{

  /**
	 * Get all info of first load
   * 
   * @bodyParam  idClub int required Id of the club. Example: 1
	 */
  public function getAll(Request $request){
    $idClub = $request['idClub'];
    try{
      $players = Controller::getAllPlayers();
      $countries = Controller::getAllCountries();
      $cardsTypes = Controller::getAllCardsTypes();
      $leagues = Controller::getAllLeagues();
      $teams = Controller::getAllTeams();
      $positions = Controller::getAllPositions();
      $cards = Controller::getAllCards();
      $club_cards = Controller::getClubCards($idClub);
      $packs = Controller::getAllPacks();
      $squads = Controller::getAllSquads($idClub);

      return response()->json([
        'players'=>$players,
        'countries'=>$countries,
        'cardsTypes'=>$cardsTypes,
        'leagues'=>$leagues,
        'teams'=>$teams,
        'positions'=>$positions,
        'cards'=>$cards,
        'club_cards'=>$club_cards,
        'packs'=>$packs,
        'squads'=>$squads,
      ], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

}
