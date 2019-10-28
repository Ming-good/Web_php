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

Route::get('tourism', 'api@index');
Route::get('tourism/area', 'api@areaCode');
Route::get('tourism/map', 'api@tourism');
Route::get('tourism/introduction', 'api@content');


Route::post('basket/resource', 'basketController@store');
Route::post('basket/destroy', 'basketController@delete');
Route::get('basket/page', 'basketController@index');

