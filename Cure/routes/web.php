<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('tourism', 'api\TravelApi@index');
Route::get('tourism/area', 'api\TravelApi@areaCode');
Route::get('tourism/map', 'api\TravelApi@tourism');
Route::get('tourism/introduction', 'api\TravelApi@content');

Route::get('rooms', 'api\RoomsApi@index');
Route::get('rooms/info', 'api\RoomsApi@roomInfo');


Route::post('basket/resource', 'tourBasketController@store');
Route::post('basket/destroy', 'tourBasketController@delete');

Route::post('roomBasket/resource', 'roomBasketController@store');

