@extends('layout/layout')
@section('content')
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db316ffdfc1b88f64685de057f89dc94"></script>

<div class='container' style='width:1550px'>
    <div class='room_wrap'>
	<div style='text-align:center;'>
	    <h2 style='color:#fff;background-color:#5cb85c;margin:0px;padding:30px;'>여행 정보</h2>
	    <div id='tour'>
		<ul style='padding:0;list-style:none;'>
		@foreach($tourBasket as $row)
		    <li class='room_info'><a data-id='{{$row -> contentid}}' style='color:black;text-decoration:none;' href='#none'>{{$row -> title}}</a></li>
		@endforeach
		</ul>
	    </div>
	</div>
    </div>
    <div id='test' style='width:800px;float:left;'>
       <div id="map" style="width:100%;height:850px;"></div>
    </div>
    <div style='text-align:center;width:300px;float:left;'>
	<h2 style='color:#fff;background-color:#5cb85c;margin:0px;padding:30px;'>숙소 바구니</h2>
	<div id='basket'>
	    <ul style='padding:0;list-style:none;'>
		@foreach($roomBasket as $row)
		<li>{{$row -> title}}</li>
		@endforeach
	    </ul>
	</div>
    </div> 
</div>
<script>
$('document').ready(function(){
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});



var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.450701, 127.570667), // 지도의 중심좌표
        level: 13 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);
var before = "";
$('#tour').on('click', 'a', function(e){
	if(before != e.currentTarget) {
		$(this).css('color', "#3e7b3e");
		$(this).css('font-weight', "bold");
		$(this).closest("li").css("background-color", "#edffed");
		if(before) {
		    before.style.color = '#000';
		    before.style.fontWeight = 'normal';
		    before.parentNode.style.backgroundColor = "#fff";
		}
	} 
	before = e.currentTarget;

	

	var contentid = $(this).data('id');
	var title = $(this).text();
	$.ajax({
	    url:'rooms/info',
	    type:'get',
	    data:{'contentid':contentid},
	    success:function(data) {
		    var obj = JSON.parse(data);
		    var item = obj.event.documents;

		    $("#map").empty();
		    var map = new kakao.maps.Map(mapContainer, mapOption);


		    var tour_position = new kakao.maps.LatLng(obj.y, obj.x);
		    var positions = [];
		    var content;

		    var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
		    var imageSize = new kakao.maps.Size(24, 35);
		    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                    // 마커를 생성합니다
                    var marker = new kakao.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        position: tour_position, // 마커의 위치
			title : title,
			image : markerImage
                    });

		    for(var i in item){
			    var title = "<div data-id='"+item[i].id+"' data-x='"+item[i].x+"' data-y='"+item[i].y+"' class='room_title'>"+item[i].place_name+"</div>",
				    road_addr = "<div class='room_road'>"+item[i].road_address_name+"</div>",
				    addr = "<div class='room_addr'>(지번)"+item[i].address_name+"</div>",
				    tel = "<div class='room_tel'>"+item[i].phone+"</div>",
				    url = "<a target='_blank' href='"+item[i].place_url+"' class='room_url'>홈페이지</a>",
			    	    roomBasket = "<input type='button' name='baguny' class='btn btn-success' style='display:block;width:55px;height:28px;' value='담기'>";

			    content = "<div style='width:350px;padding:10px;'>"+title+road_addr+addr+tel+url+roomBasket+"</div>";
				   
		        positions.push({content: content,latlng: new kakao.maps.LatLng(item[i].y, item[i].x)});
		    }

		    for (var i = 0; i < positions.length; i ++) {
    			// 마커를 생성합니다
    			var marker = new kakao.maps.Marker({
        		    map: map, // 마커를 표시할 지도
        		    position: positions[i].latlng, // 마커의 위치
		        });
		    	//인포윈도우
    			var infowindow = new kakao.maps.InfoWindow({
				content: positions[i].content, // 인포윈도우에 표시할 내용
				removable: true
    			});

			kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));


		    }

		    map.setLevel(7);

		    map.setCenter(tour_position);

		    


	    }

	});
});
    //숙박업소 정보 바구니 
    $("#map").on("click", "input[name=baguny]", function(){
	    var roomTitle = $(this).siblings(".room_title").text();
	    var roomRoad = $(this).siblings(".room_road").text();
	    var addr = $(this).siblings(".room_addr").text();
	    var tel = $(this).siblings(".room_tel").text();
	    var url = $(this).siblings(".room_url").attr('href');
	    var xmap = $(this).siblings(".room_title").data('x');
	    var ymap = $(this).siblings(".room_title").data('y');
	    var id = $(this).siblings(".room_title").data('id');

	    $.ajax({
	        url:'roomBasket/resource',
		type:'post',
		data:{"id":id, "title":roomTitle, "road_addr":roomRoad, "addr":addr, "tel":tel, "url":url, "xmap":xmap, "ymap":ymap},
		success:function(data) {
			if(data == 'false') {
				alert('이미 존재하는 정보입니다.');
			} else if(data == 'limit') {
				alert('바구니가 가득찼습니다.');
			} else {
				$("#basket ul").append("<li>"+roomTitle+"</li>");
				
			}	
		}
	    });

    });
//인포윈도우 열기
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}



})
</script>
@stop
