<?php

namespace App\Http\Controllers\infoController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\room;
use App\basket;
use App\join;
use Illuminate\Support\Facades\DB;

class joinController extends Controller
{

	public function index()
	{
		$room = new room;
		$basket = new basket;
		$join = new join;

		$userID = session() -> get('id');

		$roomData = $room -> where("userID", $userID) -> get();
		$basketData = $basket -> where("userID", $userID) -> get();
		$joinData = $join -> where("userID", $userID) -> get();

		return view('infoBasket/join', compact('roomData', 'basketData', 'joinData'));
	}

	public function store(Request $request)
	{
		$title = $request -> input('title');	
		$ymap = $request -> input('ymap');	
		$xmap = $request -> input('xmap');	
		$kind = $request -> input('kind');	
		$contentID = $request -> input('contentID');	
		$contentTypeID = $request -> input('contentTypeID');	

		$userID = session() -> get('id');
		
		$join = new join;
		$result = $join -> where([
			["userID", $userID],
			["contentID", $contentID],
		]) -> first();

	        if($result == NULL) {	
		    $join -> userID = $userID;
		    $join -> title = $title;
		    $join -> contentID = $contentID;
		    $join -> contentTypeID = $contentTypeID;
		    $join -> ymap = $ymap;
		    $join -> xmap = $xmap;
		    $join -> kinds = $kind;
		    $join -> save();
		    return "success";
		} else {
		    return "fail";
		}

	}

	public function destroy()
	{
		$userID = session() -> get('id');
		$join = new join;
		$join -> where("userID", $userID) -> delete();
	}

	public function show()
	{
		$userID = session() -> get('id');
		$join = new join;
		$result = DB::select( DB::raw("SELECT *, (@rank := @rank +1) as rank FROM joins, (SELECT @rank := 0) as b") );
		$joinData = json_decode(json_encode($result), True);
		for($i = 0; $i<count($joinData); $i++) {
			$split = explode(' ',$joinData[$i]['created_at']);
			$joinData[$i]['created_at'] = $split[0];
		}

		return view("triplist/triplist", compact('joinData'));
	}
}
