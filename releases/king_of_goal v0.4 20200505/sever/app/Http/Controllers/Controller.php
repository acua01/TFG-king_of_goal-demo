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

  protected function getAllCardsTypes(){
    $cardsTypes = DB::select(DB::raw(
      "SELECT * FROM cards_types ORDER BY name ASC"
    ));

    return $cardsTypes;
  }

  protected function getAllTeams(){
    $teams = DB::select(DB::raw(
      "SELECT a.id AS team_id,
        b.id AS league_id,
        a.name AS team_name,
        b.name AS league_name,
        a.image AS team_image,
        b.image AS league_image
      FROM teams a INNER JOIN leagues b
      ON a.id_league=b.id
      ORDER BY a.name ASC"
    ));

    return $teams;
  }

  protected function getAllPositions(){
    $positions = DB::select(DB::raw(
      "SELECT * FROM positions ORDER BY name ASC"
    ));

    return $positions;
  }

  protected function getAllCards(){
    $cards = DB::select(DB::raw(
      "SELECT a.id AS card_id,
        a.rating AS card_rating,
        a.value AS card_value,
        a.pace AS card_pace,
        a.shooting AS card_shooting,
        a.passing AS card_passing,
        a.dribbling AS card_dribbling,
        a.defending AS card_defending,
        a.physicality AS card_physicality,
        a.good_leg AS card_good_leg,
        a.skills AS card_skills,
        a.bad_leg AS card_bad_leg,
        b.id AS type_id,
        b.name AS type_name,
        b.image AS type_image,
        b.image_mini AS type_image_mini,
        b.text_color AS type_text_color,
        b.rare AS type_rare,
        b.special AS type_special,
        c.id AS player_id,
        c.name AS player_name,
        c.full_name AS player_full_name,
        c.height AS player_height,
        c.birth AS player_birth,
        c.image AS player_image,
        d.id AS team_id,
        d.name AS team_name,
        d.image AS team_image,
        e.id AS country_id,
        e.name AS country_name,
        e.image AS country_image,
        f.id AS position_id,
        f.name AS position_name,
        f.abbreviation AS position_abbreviation,
        g.id AS league_id,
        g.name AS league_name,
        g.image AS league_image
      FROM cards a
        INNER JOIN cards_types b ON a.id_type = b.id
        INNER JOIN players c ON a.id_player = c.id
        INNER JOIN teams d ON a.id_team = d.id
        INNER JOIN countries e ON a.id_country = e.id
        INNER JOIN positions f ON a.id_position = f.id
        INNER JOIN leagues g ON d.id_league = g.id
        ORDER BY card_rating DESC"
    ));

    return $cards;
  }

  protected function getClubCards($id_club){
    $club_cards = DB::select(DB::raw(
      "SELECT a.id AS club_card_id,
        b.id AS card_id,
        b.rating AS card_rating,
        b.value AS card_value,
        b.pace AS card_pace,
        b.shooting AS card_shooting,
        b.passing AS card_passing,
        b.dribbling AS card_dribbling,
        b.defending AS card_defending,
        b.physicality AS card_physicality,
        b.good_leg AS card_good_leg,
        b.skills AS card_skills,
        b.bad_leg AS card_bad_leg,
        c.id AS type_id,
        c.name AS type_name,
        c.image AS type_image,
        c.image_mini AS type_image_mini,
        c.text_color AS type_text_color,
        c.rare AS type_rare,
        c.special AS type_special,
        d.id AS player_id,
        d.name AS player_name,
        d.full_name AS player_full_name,
        d.height AS player_height,
        d.birth AS player_birth,
        d.image AS player_image,
        e.id AS team_id,
        e.name AS team_name,
        e.image AS team_image,
        f.id AS country_id,
        f.name AS country_name,
        f.image AS country_image,
        g.id AS position_id,
        g.name AS position_name,
        g.abbreviation AS position_abbreviation,
        h.id AS league_id,
        h.name AS league_name,
        h.image AS league_image
      FROM clubs_cards a
        INNER JOIN cards b ON a.id_card = b.id
        INNER JOIN cards_types c ON b.id_type = c.id
        INNER JOIN players d ON b.id_player = d.id
        INNER JOIN teams e ON b.id_team = e.id
        INNER JOIN countries f ON b.id_country = f.id
        INNER JOIN positions g ON b.id_position = g.id
        INNER JOIN leagues h ON e.id_league = h.id
      WHERE a.id_club=:id_club
      ORDER BY card_rating DESC"

    ), ['id_club'=>$id_club]);

    return $club_cards;
  }
}
