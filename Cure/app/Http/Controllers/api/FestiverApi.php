<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\basket;

class FestiverApi extends Controller
{
	public function index()
	{
                $url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?serviceKey=NLK0f3%2Fl8O1lBfUuZ%2FNekbZg9uSXFAVmT9UBnBJXfy96YsdbcQFzQX1avklkLXI4445GKEHwNPrQFnmpIATxTQ%3D%3D&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=MingGood&_type=json";
                $services = curl_init();
                curl_setopt($services, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($services, CURLOPT_URL, $url);
                curl_setopt($services, CURLOPT_HTTPHEADER, array("Accept:application/json","Content-Type:application/json"));
                $response = curl_exec($services);

                $result = json_decode($response);
		$item = $result -> response -> body -> items -> item;

                $userID = session() -> get('id');

                $basket = new basket;
                $tourBasket = $basket -> select('title','contentid') -> where('userID', $userID) -> get();


		return view('festival/festival', compact('item', 'tourBasket'));

	}

	public function event()
	{
		$area = $_GET['area'];
		$sigungu = $_GET['sigungu'] == 0 ? null : $_GET['sigungu'];
		$sDate = $_GET['sDate'];
		$eDate = $_GET['eDate'] == 'null' ? null : $_GET['eDate'];
		$areaName = $_GET['areaName'];

                $areaName == '광주' ? $areaName = '광주광역시' : $areaName;
                #해당 지역 string입력시 좌표값을 가져오는 api
                $url = "https://dapi.kakao.com/v2/local/search/address.json";
                $url .= "?query=".urlencode($areaName);

                $services = curl_init();
                curl_setopt($services, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($services, CURLOPT_URL, $url);
                curl_setopt($services, CURLOPT_HTTPHEADER, array("Accept:application/json","Content-Type:application/json","Authorization: KakaoAK 30c42d5129855999d5126479baa86e44"));
                $response = curl_exec($services);
                $result = json_decode($response, true);
                $x = $result["documents"][0]['x'];
                $y = $result["documents"][0]['y'];
	
		

		$url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?serviceKey=NLK0f3%2Fl8O1lBfUuZ%2FNekbZg9uSXFAVmT9UBnBJXfy96YsdbcQFzQX1avklkLXI4445GKEHwNPrQFnmpIATxTQ%3D%3D&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=R&listYN=Y&areaCode=".$area."&sigunguCode=".$sigungu."&eventStartDate=".$sDate."&eventEndDate=".$eDate;

                $services = curl_init();
                curl_setopt($services, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($services, CURLOPT_URL, $url);
                curl_setopt($services, CURLOPT_HTTPHEADER, array("Accept:application/json","Content-Type:application/json"));
                $response = curl_exec($services);

                curl_close($services);

                $event = json_decode($response);
                $arr = array('x' => $x,'y' => $y, 'event' => $event);
                echo json_encode($arr);




	}
}
