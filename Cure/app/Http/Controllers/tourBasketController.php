<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\basket;

class tourBasketController extends Controller
{

	public function store(Request $request)
	{
		$title = $request -> input('title');
		$contentid = $request -> input('contentid');
		$contenttypeid = $request -> input('contenttypeid');
		$xmap = $request -> input('xmap');
		$ymap = $request -> input('ymap');

		$basket = new basket;
		$count = $basket -> where('userID', 'read1516') -> count();
		$result = $basket -> where('contentid', $contentid) -> first();
		if($count<10 && $result == NULL) {
			$basket -> userID = 'read1516';
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
	public function delete(Request $request)
	{
		$basket = new basket;
		$basket -> where('contentid', $request -> input('contentid')) -> delete();

	}

}
