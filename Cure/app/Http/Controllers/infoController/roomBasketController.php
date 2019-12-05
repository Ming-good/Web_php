<?php

namespace App\Http\Controllers\infoController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\room;


class roomBasketController extends Controller
{

	#해당 숙소의 정보를 가져옵니다.
	public function getID()
	{
		$userID = session() -> get('id');

		$roomID = $_GET['roomID'];
		$room = new room;
		$roomData = $room -> where([
				['userID', $userID],
				['room_id', $roomID],
			]) -> first();
		echo json_encode($roomData);
	}

	#숙박업소 정보를 저장합니다
	public function store(Request $request)
	{
		$id = $request -> input('id');
		$title = $request -> input('title');
		$road_addr = $request -> input('road_addr');
		$addr = $request -> input('addr');
		$tel = $request -> input('tel');
		$url = $request -> input('url');
		$xmap = $request -> input('xmap');
		$ymap = $request -> input('ymap');
		
		$userID = session() -> get('id');
		
		$room = new room;
		$count = $room -> where('userID', $userID) -> count();
		$result = $room -> where([
			['room_id', $id],
			['userID', $userID],
		]) -> first();

		if($count < 10 && $result == NULL) {
		    $room -> room_id = $id;
		    $room -> title = $title;
		    $room -> userID = $userID;
		    $room -> road_addr = $road_addr;
		    $room -> addr = $addr;
		    $room -> tel = $tel;
		    $room -> url = $url;
		    $room -> xmap = $xmap;
		    $room -> ymap = $ymap;
		    $room -> save();

		    $result = 'success';
		} else if($result != NULL) {
		    $result = 'false';
		} else {
		    $result = 'limit';
		}

		echo $result;

	}

	#숙소 정보를 삭제합니다
	public function destroy(Request $request)
	{
		$room_id = $request -> input('room_id');
		$userID = session() -> get('id');
		$room = new room;
		$room -> where([['userID', $userID],
				['room_id', $room_id],
			]) -> delete();


	}
}
