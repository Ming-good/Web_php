<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\room;


class roomBasketController extends Controller
{
	public function index()
	{
		$room = new room;
		$room -> title -> get();

		echo $room;	
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

		
		$room = new room;
		$count = $room -> where('userID', 'read1516') -> count();
		$result = $room -> where('room_id', $id) -> first();
		if($count < 10 && $result == NULL) {
		    $room -> room_id = $id;
		    $room -> title = $title;
		    $room -> userID = 'read1516';
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
}
