<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/{any:.*}', function () {
  return view('index');
});

$router->group(['middleware' => 'auth:api'], function () use($router) {
  $router->group(['middleware' => 'permission:manage permissions'], function () use($router) {
    $router->post('/permissions', 'PermissionsController@getAll');
    $router->post('/permission_by_id', 'PermissionsController@getById');
    $router->post('/insert_permission', 'PermissionsController@insert');
    $router->post('/delete_permission', 'PermissionsController@delete');
    $router->post('/update_permission', 'PermissionsController@update');
  });

  $router->group(['middleware' => 'permission:manage players'], function () use($router) {
    $router->post('/players', 'PlayersController@getAll');
    $router->post('/player_by_id', 'PlayersController@getById');
    $router->post('/insert_player', 'PlayersController@insert');
    $router->post('/delete_player', 'PlayersController@delete');
    $router->post('/update_player', 'PlayersController@update');
  });

  $router->group(['middleware' => 'permission:manage countries'], function () use($router) {
    $router->post('/countries', 'CountriesController@getAll');
    $router->post('/country_by_id', 'CountriesController@getById');
    $router->post('/insert_country', 'CountriesController@insert');
    $router->post('/delete_country', 'CountriesController@delete');
    $router->post('/update_country', 'CountriesController@update');
  });

  $router->group(['middleware' => 'permission:manage leagues'], function () use($router) {
    $router->post('/leagues', 'LeaguesController@getAll');
    $router->post('/league_by_id', 'LeaguesController@getById');
    $router->post('/insert_league', 'LeaguesController@insert');
    $router->post('/delete_league', 'LeaguesController@delete');
    $router->post('/update_league', 'LeaguesController@update');
  });

  $router->group(['middleware' => 'permission:manage cards types'], function () use($router) {
    $router->post('/cards_types', 'CardsTypesController@getAll');
    $router->post('/card_type_by_id', 'CardsTypesController@getById');
    $router->post('/insert_card_type', 'CardsTypesController@insert');
    $router->post('/delete_card_type', 'CardsTypesController@delete');
    $router->post('/update_card_type', 'CardsTypesController@update');
  });
});

$router->post('/register', 'AuthenticationController@register');
$router->post('/login', 'AuthenticationController@login');
