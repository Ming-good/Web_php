<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class test1 extends Controller
{
	public function index()
	{
		$url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?serviceKey=NLK0f3%2Fl8O1lBfUuZ%2FNekbZg9uSXFAVmT9UBnBJXfy96YsdbcQFzQX1avklkLXI4445GKEHwNPrQFnmpIATxTQ%3D%3D&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=MingGood&_type=json";
		$response = file_get_contents($url);
		$result = json_decode($response);
		$item = $result -> response -> body -> items -> item;



		echo "<br>-------------------------------------------------------------<br>";

		$url3 = "http://dapi.kakao.com/v2/local/search/keyword.json?y=37.514322572335935&x=127.06283102249932&radius=20000";
		$url3 .= "&query=".urlencode('피자');
		$services = curl_init();
		curl_setopt($services, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($services, CURLOPT_URL, $url3);
		curl_setopt($services, CURLOPT_HTTPHEADER, array("Accept:application/json","Content-Type:application/json","Authorization: KakaoAK 30c42d5129855999d5126479baa86e44"));
		$response = curl_exec($services);
		$result = json_decode($response, true);
		foreach($result["documents"] as $row) {
			echo var_dump($row)."<br><br>";
		}


		$x = $result["documents"][0]['x'];
		$y = $result["documents"][0]['y'];

		curl_close($services);

		return view('/layout/welcome', compact('x','y', 'item'));
	}

	public function areaCode()
	{
		
                $url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?serviceKey=NLK0f3%2Fl8O1lBfUuZ%2FNekbZg9uSXFAVmT9UBnBJXfy96YsdbcQFzQX1avklkLXI4445GKEHwNPrQFnmpIATxTQ%3D%3D&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=MingGood&areaCode=".$_GET['area']."&_type=json";
                $response = file_get_contents($url);
                $result = json_decode($response);
                $item = $result -> response -> body -> items -> item;
		echo "<option value='0'>시/군/구 선택</option>";
		foreach($item as $row){
       			echo "<option value='".$row->code."'>".$row->name."</option>";


		}

	}

	public function tourism()
	{
		$pageNo = "&pageNo=1";

		!empty($_GET['area']) ? $area = "&areaCode=".$_GET['area'] : $area = NULL;
		($_GET['sigunguCode'] != 0) ? $sigungu = "&sigunguCode=".$_GET['sigunguCode'] : $sigungu = NULL;;
		($_GET['cat2'] != 0) ?  $cat1 = "&cat1=".$_GET['cat2'] : $cat1 = NULL;
		($_GET['cat3'] != 0) ?  $cat2 = "&cat2=".$_GET['cat3'] : $cat2 = NULL;

		if($area == NULL) {
			echo "false";
		} else {

			$url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?serviceKey=NLK0f3%2Fl8O1lBfUuZ%2FNekbZg9uSXFAVmT9UBnBJXfy96YsdbcQFzQX1avklkLXI4445GKEHwNPrQFnmpIATxTQ%3D%3D".$pageNo."&numOfRows=10&MobileApp=MingGood&MobileOS=ETC&arrange=R".$area.$sigungu.$cat1.$cat2."&_type=json";
                	$response = file_get_contents($url);
			echo $response;
		}

	}

}
