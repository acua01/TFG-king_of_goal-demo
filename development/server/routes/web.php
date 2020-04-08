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

Route::group(['middleware' => ['auth:api']], function () {
    //
});

$router->post('/register', 'AuthenticationController@register');
$router->post('/login', 'AuthenticationController@login');
$router->post('/permissions', 'PermissionsController@getAll');
$router->post('/permission_by_id', 'PermissionsController@getById');
$router->post('/insert_permission', 'PermissionsController@insert');
$router->post('/delete_permission', 'PermissionsController@delete');
$router->post('/update_permission', 'PermissionsController@update');

//$router->post('/add', ['middleware' => 'permission:add ability', 'uses' => 'AbilitiesController@addAbility']);
