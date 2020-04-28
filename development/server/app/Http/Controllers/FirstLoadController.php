<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;

class FirstLoadController extends Controller{

  public function getAll(){
    try{
      $players = Controller::getAllPlayers();
      $countries = Controller::getAllCountries();
      $cardsTypes = Controller::getAllCardsTypes();
      $leagues = Controller::getAllLeagues();
      $teams = Controller::getAllTeams();
      $positions = Controller::getAllPositions();
      $cards = Controller::getAllCards();

      return response()->json([
        'players'=>$players,
        'countries'=>$countries,
        'cardsTypes'=>$cardsTypes,
        'leagues'=>$leagues,
        'teams'=>$teams,
        'positions'=>$positions,
        'cards'=>$cards
      ], 200);
    }catch(\Exception $e){
      return response()->json(['message'=>$this->getErrorMessage($e)], 500);
    }
  }

}
