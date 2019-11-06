<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\basket;
use App\room;
class RoomsApi extends Controller
{
	public function index()
	{
		#여행정보 바구니
		$basket = new basket;
		$tourBasket = $basket -> select('contentid', 'contenttypeid', 'title') -> where('userID', 'read1516') -> get();

		#숙박업소 정보 바구니 
		$room = new room;
		$roomBasket = $room -> select('title') -> where('userID', 'read1516') -> get();
		return view('rooms', compact('tourBasket', 'roomBasket'));
	}	

	public function roomInfo()
	{
		$contentid = $_GET['contentid'];
		$basket = new basket;
		$result = $basket -> where('contentid', $contentid) -> first();

		$ymap =  $result -> ymap;
		$xmap =  $result -> xmap;

		$url = "https://dapi.kakao.com/v2/local/search/category.json?category_group_code=AD5&y=".$ymap."&x=".$xmap."&radius=20000";
                $services = curl_init();
                curl_setopt($services, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($services, CURLOPT_URL, $url);
                curl_setopt($services, CURLOPT_HTTPHEADER, array("Accept:application/json","Content-Type:application/json","Authorization: KakaoAK 30c42d5129855999d5126479baa86e44"));
                $response = curl_exec($services);

                $event = json_decode($response);
                $arr = array('x' => $xmap,'y' => $ymap, 'event' => $event);

		echo json_encode($arr);
		


	}
}
