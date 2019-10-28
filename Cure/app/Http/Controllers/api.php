<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\basket;

class api extends Controller
{
	#지역 정보를 가져옵니다. 
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

		$basket = new basket;
		$totalPage = $basket -> count();

		return view('/layout/welcome', compact( 'item', 'totalPage'));
	}

	#해당 도의 시/군/구의 정보를 가져옵니다.	
	public function areaCode()
	{
                $url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?serviceKey=NLK0f3%2Fl8O1lBfUuZ%2FNekbZg9uSXFAVmT9UBnBJXfy96YsdbcQFzQX1avklkLXI4445GKEHwNPrQFnmpIATxTQ%3D%3D&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=MingGood&areaCode=".$_GET['area']."&_type=json";
		$services = curl_init();
		curl_setopt($services, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($services, CURLOPT_URL, $url);
		curl_setopt($services, CURLOPT_HTTPHEADER, array("Accept:application/json","Content-Type:application/json"));
		$response = curl_exec($services);

                $result = json_decode($response);
                $item = $result -> response -> body -> items -> item;
		echo "<option value='0'>시/군/구 선택</option>";
		if($_GET['area'] == 8) {
			echo "<option value='".$item->code."'>".$item->name."</option>";
		}else {
			foreach($item as $row){
       				echo "<option value='".$row->code."'>".$row->name."</option>";
			}
		}

	}

	#여행 정보를 가져옵니다.
	public function tourism()
	{
		$areaName = $_GET['areaName'];

		!empty($_GET['area']) ? $area = "&areaCode=".$_GET['area'] : $area = NULL;
		($_GET['sigunguCode'] != '0') ? $sigungu = "&sigunguCode=".$_GET['sigunguCode'] : $sigungu = NULL;;
		($_GET['cat1'] != '0') ?  $cat1 = "&cat1=".$_GET['cat1'] : $cat1 = NULL;
		($_GET['cat2'] != '0') ?  $cat2 = "&cat2=".$_GET['cat2'] : $cat2 = NULL;

		if($area == NULL) {
			echo "false";
		} else {
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

			curl_close($services);


			#지역기반 관광정보조회 api
			$url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?serviceKey=NLK0f3%2Fl8O1lBfUuZ%2FNekbZg9uSXFAVmT9UBnBJXfy96YsdbcQFzQX1avklkLXI4445GKEHwNPrQFnmpIATxTQ%3D%3D&pageNo=1&numOfRows=220&MobileApp=MingGood&MobileOS=ETC&arrange=R".$area.$sigungu.$cat1.$cat2."&_type=json";
			$services = curl_init();
			curl_setopt($services, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($services, CURLOPT_URL, $url);
			curl_setopt($services, CURLOPT_HTTPHEADER, array("Accept:application/json","Content-Type:application/json"));
			$response = curl_exec($services);

			$event = json_decode($response);


			$arr = array('x' => $x,'y' => $y, 'event' => $event);
			echo json_encode($arr);
		}

	}

	public function content()
	{
		$contentid = $_GET['contentid'];
		$contenttypeid = $_GET['contenttypeid'];

		#해당 관광소개정정보조회 api
		$url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailIntro?serviceKey=NLK0f3%2Fl8O1lBfUuZ%2FNekbZg9uSXFAVmT9UBnBJXfy96YsdbcQFzQX1avklkLXI4445GKEHwNPrQFnmpIATxTQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=MingGood&contentId=".$contentid."&contentTypeId=".$contenttypeid."&_type=json";
		$services = curl_init();
		curl_setopt($services, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($services, CURLOPT_URL, $url);
		curl_setopt($services, CURLOPT_HTTPHEADER, array("Accept:application/json","Content-Type:application/json"));
		$response = curl_exec($services);
		$introduction = json_decode($response);

		#해당 광광공통정보조회 api
		$url ="http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?serviceKey=NLK0f3%2Fl8O1lBfUuZ%2FNekbZg9uSXFAVmT9UBnBJXfy96YsdbcQFzQX1avklkLXI4445GKEHwNPrQFnmpIATxTQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=".$contentid."&contentTypeId=".$contenttypeid."&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json";
		$services = curl_init();
		curl_setopt($services, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($services, CURLOPT_URL, $url);
		curl_setopt($services, CURLOPT_HTTPHEADER, array("Accept:application/json","Content-Type:application/json"));
		$response = curl_exec($services);
		$subIntroduction = json_decode($response);

		$url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailImage?serviceKey=NLK0f3%2Fl8O1lBfUuZ%2FNekbZg9uSXFAVmT9UBnBJXfy96YsdbcQFzQX1avklkLXI4445GKEHwNPrQFnmpIATxTQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=MingGood&contentId=".$contentid."&imageYN=Y&subImageYN=Y&_type=json";
		$services = curl_init();
		curl_setopt($services, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($services, CURLOPT_URL, $url);
		curl_setopt($services, CURLOPT_HTTPHEADER, array("Accept:application/json","Content-Type:application/json"));
		$response = curl_exec($services);
		$image = json_decode($response);

		$arr = array('introduction' => $introduction, 'subIntroduction' => $subIntroduction, 'image' => $image);

		echo json_encode($arr);


	}

}
