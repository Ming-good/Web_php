@extends('layout/layout')
@section('content')
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db316ffdfc1b88f64685de057f89dc94"></script>
<div class='container'>
    <div style="width:1200px;height:800px;">
	<form>
	    <div style="float:left;width:200px;border-right:1px solid #e3e3e3;margin-top:60px;">
	  @foreach($item as $row) 
		<div class="checks" style="margin-bottom:15px;">
                      <input type="radio" id="area{{$row -> code}}" name="area" value="{{$row -> code}}">
                      <label for="area{{$row -> code}}">{{$row -> name}}</label>
                </div>
	  @endforeach
	    </div>
	    <div style="float:left;width:800px;margin-left:20px;">
	        <select id="sigunguCode" name="sigunguCode" style="float:left;">
		    <option value="0">시/군/구 선택</option>;
	        </select>

	        <select id="cat1" name="cat1" style="float:left;">
		    <option value="0">중분류 선택</option>;
		</select>
	        <select id="cat2" name="cat2" style="float:left;">
		    <option value="0">소분류 선택</option>;
		</select>
		<button type="button" id='search' style="margin-left:20px;">Search !</button>
	    </div>
	</form>
	<div id='content' style="float:left;width:800px;margin-left:20px;padding-top:20px;">
	   <div id="map" style="width:750px;height:700px;">
	   </div>
	</div>

	<div id='basket_wrap' style="height:800px;width:250px;position:absolute;left:50%;top:0;margin-left:450px;">
	  <h2 style='color:#80b85c;text-align:center;width:200px;'>여행 바구니</h2>
	    <div id ='basket' style='width:200px;'>
		@foreach($tourBasket as $row)
		<div style='width:200px;border-bottom:1px solid #5cb85c;padding:5px 20px 15px 5px;'>
		    <button name='del' style='position:relative;right:-165px;margin-bottom:5px;width:10px;text-align:center;height:15px;padding:0px 14px 20px 5px;' type='button' class='btn btn-success' value='{{$row ->contentid}}'>X</button>
		    <div style='width:200px;height:20px;color:#5cb85c;font-weight:bold;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;'>{{$row -> title}}</div>
	        </div>
		@endforeach
	    </div>
	    <div>
		<a style="text-decoration:none;width:150px;text-align:center;" class='btn2 green' href='#'>다음</a>
	    </div>
	</div>
	
    </div>
    <div style="width:1300px;text-align:right;">
    </div>
    <div id='detail' style="width:1200px;text-align:center;">
    </div>

    <a style="display:scroll;position:fixed;bottom:120px;right:50px;text-decoration: none;" href="#" title="맨 위로"><img src='assets/image/top.gif'  /><div style='text-align:center;color:#000000'>위로</div></a>
</div>
<br>

<script>
$('document').ready(function(){
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);


	$('#basket').on("click", "button[name=del]", function(){
		var item  = $(this).closest('div');
		$.ajax({
		    url:"basket/destroy",
		    type:"post",
		    data:{"contentid":$(this).val()},
		    success:function(data){
			item.remove();

		    }
		});
	});


	$("#search").click(function(){
	    var radioId = $("input:radio[name=area]:checked").attr("id");
	    var areaName = $("label[for='"+radioId+"']").text();
	    var area = $("input:radio[name=area]:checked").val();
	    var sigunguCode = $("#sigunguCode").val();
	    var cat1 = $("#cat1").val();
	    var cat2 = $("#cat2").val();
	    $.ajax({
	        url:"tourism/map",
	        type:"get",
	        data:{"area":area, "areaName":areaName, "sigunguCode":sigunguCode, "cat1":cat1, "cat2":cat2},
	        success:function(data){
			$("#map").empty();
			var obj = JSON.parse(data);
			var item = obj.event.response.body.items.item;

			var markers = [];
			var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    			mapOption = { 
        			center: new kakao.maps.LatLng(obj.y, obj.x), // 지도의 중심좌표
        			level: 10 // 지도의 확대 레벨
    			};
			var map = new kakao.maps.Map(mapContainer, mapOption);
			$("#map").append("<div class='map_wrap' id ='map_wrap'><ul id='placesList'></ul></div>");

			var positions = [];
			var content;
			for(var i in item) {
				content = "<div style='width:230px;text-align:center;'><img onerror='this.style.display='none'' alt='' src='"+item[i].firstimage+"' style='width:200px;height:200px'/><div style='font-weight:bold;font-size:13px;width:230px;'>[ 제목 ]<br>"+item[i].title+"</div><div style='font-weight:bold;font-size:13px;width:230px;'>[ 주소 ]<br>"+item[i].addr1+"</div></div>";	
				positions.push({content: content,latlng: new kakao.maps.LatLng(item[i].mapy, item[i].mapx)});	
			}
			for (var i = 0; i < positions.length; i ++) {
			    if((!item[i].mapy || !item[i].mapx)) {
				continue;
			    }
    			    // 마커를 생성합니다
    			    var marker = new kakao.maps.Marker({
        		    map: map, // 마커를 표시할 지도
        		    position: positions[i].latlng // 마커의 위치
    			    });

    			    // 마커에 표시할 인포윈도우를 생성합니다 
    			    var infowindow = new kakao.maps.InfoWindow({
        		    	content: positions[i].content // 인포윈도우에 표시할 내용
    			    });
			        var el = document.createElement('li');
			    	el.className = 'item';
				el.id = 'el'+i;
			    	var title = "<div style='width:60px;float:left;font-weight:bold;font-size:14px;padding-left:10px;margin-top:10px;'>["+i+"]</div><button name='detail' type='button' class='btn btn-primary' style='width:80px;height:30px;float:left;margin-top:10px;margin-right:10px;'>상세정보</button><button name='baguny' type='button' class='btn btn-primary' style='width:40px;height:30px;float:left;margin-top:10px;'>담기</button></div><h5 style='width:200px;font-weight:bold;padding:10px 10px 5px 10px;'>"+item[i].title+"</h5>";

				var arr = "<div class='info'>"+item[i].addr1+"</div>";
				el.innerHTML = title+arr;



    				kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    				kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

				(function(marker, infowindow, moveLatLon, item){
					el.onmouseover = function(){
					    map.setCenter(moveLatLon);
					    infowindow.open(map, marker);
					};
					el.onmouseout = function(){
					    infowindow.close();
					};
					$(el).on("click", "button[name=baguny]", function(){
					    $.ajax({
						url:'basket/resource',
						type:'post',
						data:{"ymap":item.mapy, "xmap":item.mapx, "contentid":item.contentid, "contenttypeid":item.contenttypeid,"title":item.title},
						success:function(data){
							if(data == 'false') {
							    alert('이미 존재하는 정보 입니다');
							} else if(data == 'limit') {
							    alert('바구니가 가득찼습니다.');
							} else {
var str = "<div style='width:200px;border-bottom:1px solid #5cb85c;padding:5px 20px 15px 5px;'><button name='del' style='position:relative;right:-165px;margin-bottom:5px;width:10px;text-align:center;height:15px;padding:0px 14px 20px 5px;' type='button' class='btn btn-success' value='"+item.contentid+"'>X</button><div style='width:200px;height:20px;color:#5cb85c;font-weight:bold;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;'>"+item.title+"</div></div>";
							    $("#basket").append(str);
							}
							
						}	
					
					    });
							
					})
					$(el).children("button[name=detail]").click(function(){
					    $.ajax({
					        url:'tourism/introduction',
						type:'get',
						data:{"contentid":item.contentid, "contenttypeid":item.contenttypeid},
						success:function(data){
							$("#detail").empty();
							var obj = JSON.parse(data);
							var intro = obj.introduction.response.body.items.item;
							var subIntro = obj.subIntroduction.response.body.items.item;
							var image = obj.image.response.body.items.item;

							if(intro.eventstartdate || intro.eventenddate) {
								    var startdate = String(intro.eventstartdate);
								    var enddate = String(intro.eventenddate);

								    var year = startdate.substring(0,4);
								    var month = startdate.substring(4,6);
								    var day = startdate.substring(6,8);
								    var startDate = year+"년"+month+"월"+day+"일";


								    var year = enddate.substring(0,4);
								    var month = enddate.substring(4,6);
								    var day = enddate.substring(6,8);
								    var endDate = year+"년"+month+"월"+day+"일";

								    var joinDate = startDate +" ~ "+ endDate;

							} else {
								var joinDate = 'undefined';
							}

							if(intro.playtime || intro.opentime || intro.opentimefood || intro.usetimeculture || intro.usetime) {
								var playtime = intro.opentime || intro.opentimefood || intro.playtime || intro.usetimeculture || intro.usetime;
							} else {
								var playtime = 'undefined';
							}

							if(intro.usefee || intro.usetimefestival) {
								var fee = intro.usefee || intro.usetimefestival;
							} else {
								var fee = 'undefined';
							}

							if(intro.parking || intro.packing || intro.parkingfood) {
								var parking = intro.parking || intro.packing || intro.parkingfood;
							} else {
								var parking = 'undefined';
							}


							var title = "<h2 style='margin-bottom:0;padding:20px;background-color:#5fcec0;color:#fff;font-weight:bold'>"+subIntro.title+"</h2>";

							var content = "<div id='contInfom' class='strStart'><p style='margin-top:30px;'><strong>|</strong> 상세정보</p></div>";

							var detail_inform = "<table class='table table-bordered' style='border:none;'><tbody><tr><td class='tableTD1'>위치</td'><td style='border:none;'>"+subIntro.addr1+"</td></tr><tr><td class='tableTD1'>홈페이지</td><td style='border:none;'>"+subIntro.homepage+"</td></tr><tr><td class='tableTD1'>나이제한</td><td style='border:none;'>"+intro.agelimit+"</td></tr><tr><td class='tableTD1'>오픈시간</td><td style='border:none;'>"+playtime+"</td></tr><tr><td class='tableTD1'>비용</td><td style='border:none;'>"+fee+"</td></tr><tr><td class='tableTD1'>행사기간</td><td style='border:none;'>"+joinDate+"</td></tr><tr><td class='tableTD1'>주차</td><td style='border:none;'>"+parking+"</td></tr></tbody></table>";

							var content2 = "<p style='margin-top:50px;'><strong>|</strong> 소개</p>"; 
							var overView = "<p style='font-size:16px;'>"+subIntro.overview+"</p>";
							var content3 = "<p  style='margin-top:50px;'><strong>|</strong> 이미지</p>";
							var imageWrap = "<div style='text-align:center;' id='image'></div>";
							var view = "";


							for(var i in image) {

							    view = view + "<img style='width:500px;height:500px;' src='"+image[i].originimgurl+"'/>";

							}


							$("#detail").append(title);
							$("#detail").append(content);
							$("#contInfom").append(detail_inform);
							$("#contInfom").append(content2);
							$("#contInfom").append(overView);
							$("#contInfom").append(content3);
							$("#contInfom").append(imageWrap);
							$("#image").append(view);

							location.href='#detail';


						}

					    });
					});

				})(marker,infowindow, positions[i].latlng, item[i])
			
				$("#placesList").append(el);

			}
	        }
	    })
	})
	$("input:radio[name='area']").change(function(){
		$("#cat1").empty();
		var option = "<option value='0'>중분류 선택</option>";
		$("#cat1").append(option);
		$("#cat2").empty();
		var option = "<option value='0'>소분류 선택</option>";
		$("#cat2").append(option);

		if($(this).val() != 0){
		    var option = "<option value='A01'>자연</option><option value='A02'>인문(문화/예술/역사)</option><option value='C01'>추천코스</option><option value='A03'>레포츠</option><option value='A04'>쇼핑</option>"
		    $("#cat1").append(option);
		} 

		
	})

	$("#cat1").change(function(){
		$("#cat2").empty();
		var option = "<option value='0'>소분류 선택</option>";
		$("#cat2").append(option);
		if($(this).val() == 'A01'){
			var option  = "<option value='A0101'>자연관광지</option><option value='A0102'>관광자원</option>";
			$("#cat2").append(option);
		} else if($(this).val() == 'A02'){
			var option  = "<option value='A0201'>역사관광지</option><option value='A0202'>휴양관광지</option><option value='A0203'>체험관광지</option><option value='A0204'>산업관광지</option><option value='A0205'>건축/조형물</option><option value='A0206'>문화시설</option><option value='A0207'>축제</option><option value='A0208'>공연/행사</option>";
			$("#cat2").append(option);
		} else if($(this).val() == 'C01'){
			var option = "<option value='C0112'>가족코스</option><option value='C0113'>나홀로코스</option><option value='C0114'>힐링코스</option><option value='C0115'>도보코스</option><option value='C0115'>캠핑코스</option><option value='C0116'>캠핑코스</option><option value='C0117'>맛코스</option>";
			$("#cat2").append(option);
		}else if($(this).val() == 'A03'){
			var option = "<option value='A0301'>레포츠소개</option><option value='A0302'>육상 레포츠</option><option value='A0303'>수상 레포츠</option><option value='A0304'>항공 레포츠</option><option value='A0305'>복합 레포츠</option>";
			$("#cat2").append(option);
		}else if($(this).val() == 'A04') {
			var option = "<option value='A0401'>쇼핑</option>";
			$("#cat2").append(option);
		}
		
	})


	$("input:radio[name='area']").click(function(){
		var arr = [];
		if($(this).is(":checked")){
		    $.ajax({
			url:"tourism/area",
			type:"get",
			data:{"area":$(this).val()},
			success:function(data) {
				$("#sigunguCode").empty();
				$("#sigunguCode").append(data);
			}
		    });
		}
	})
});



// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}
</script>
@stop

