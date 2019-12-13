<?php

namespace App\Http\Controllers\infoController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\basket;

class tourBasketController extends Controller
{

	#여행지 정보를 저장합니다
	public function store(Request $request)
	{
		$title = $request -> input('title');
		$contentid = $request -> input('contentid');
		$contenttypeid = $request -> input('contenttypeid');
		$xmap = $request -> input('xmap');
		$ymap = $request -> input('ymap');

		$userID = session() -> get('id');

		$basket = new basket;
		$count = $basket -> where('userID', $userID) -> count();
		$result = $basket -> where([
			['contentid', $contentid],
			['userID', $userID],
		]) -> first();

		if($count<10 && $result == NULL) {
			$basket -> userID = $userID;
			$basket -> title = $title;
			$basket -> contentid = $contentid;
			$basket -> contenttypeid = $contenttypeid;
			$basket -> ymap = $ymap;
			$basket -> xmap = $xmap;

			$basket -> save();
		} else if($result != NULL) {
			$result = 'false';
		} else {
			$result = 'limit';
		}
		


		echo $result;

	}
	#여행지 정보를 삭제합니다
	public function destroy(Request $request)
	{
		$contentid = $request -> input('contentid');
		$userID = session() -> get('id');

		$basket = new basket;
		$basket -> where([
			['contentid', $contentid],
			['userID', $userID],
		]) -> delete();

	}

}
