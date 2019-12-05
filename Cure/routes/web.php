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
use App\user;

#index페이지
Route::get('index', 'indexController@index');

#회원가입
Route::view('member/enrollment', 'member/member');
Route::post('member/resource', 'member\memberController@store') -> middleware('CheckId');

#로그인
Route::post('member/ck', 'member\memberController@login');
#로그아웃
Route::get('member/logout', function(){
	session() -> flush();
	return redirect('index');
});

#ID체크 ajax
Route::get('member/user', function(){
	$userID = $_GET['userID'];
	$user = new user;
	$result = $user -> where("userID", $userID) -> first();
	if($result == NULL){
		echo "success";
	} else {
		echo "false";
	}
});

#행사 정보
Route::get('festival', 'api\FestiverApi@index')-> middleware('sess');
Route::get('festival/eventInfo', 'api\FestiverApi@event')-> middleware('sess');


#여행지 정보를 가져오는 api
Route::get('tourism', 'api\TravelApi@index')-> middleware('sess');
Route::get('tourism/area', 'api\TravelApi@areaCode');
Route::get('tourism/map', 'api\TravelApi@tourism');
Route::get('tourism/introduction', 'api\TravelApi@content');

#숙소 정보를 가져오는 api
Route::get('rooms', 'api\RoomsApi@index')-> middleware('sess');
Route::get('rooms/info', 'api\RoomsApi@roomInfo');
Route::get('rooms/first', 'api\RoomsApi@getID');

#여행 정보 바구니 
Route::post('basket/resource', 'infoController\tourBasketController@store');
Route::post('basket/destroy', 'infoController\tourBasketController@destroy')-> middleware('sess');

#숙소 정보 바구니
Route::post('roomBasket/resource', 'infoController\roomBasketController@store');
Route::post('roomBasket/destroy', 'infoController\roomBasketController@destroy') -> middleware('sess');
Route::get('roomBasket/roomInfo', 'infoController\roomBasketController@getID');

#여행과 숙소 정보 결합한 게시판
Route::get('join/enrollment', 'infoController\joinController@index') -> middleware('sess');
Route::post('join/resource', 'infoController\joinController@store');
Route::post('join/empty', 'infoController\joinController@destroy') -> middleware('sess');
Route::get('join/list', 'infoController\joinController@show') -> middleware('sess');
