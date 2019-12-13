@extends('layout/layout')
@section('content')
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db316ffdfc1b88f64685de057f89dc94"></script>
<link rel="stylesheet" href="/Cure/public/assets/css/main.css" />
<link rel="stylesheet" href="/Cure/public/assets/css/join.css" />

<div class='join_contain'  style="margin-top:100px;">
    <div class='search_wrap'><h1 class='search_title'>☞숙소정보 검색</h1></div>
    <div class="con_select">
        <select id='selecting' class="selecting">
            <option>- - - - - 바구니 선택 - - - - -</option>
            <option value="A">숙소 바구니</option>
            <option value="B">여행 바구니</option>
        </select>
	<div id='infos' class="infos">
	    <div style="text-align:center;margin-top:10px;" class="basket_wrap">
		<div style="margin-top:100px;"><span data-role="del" class="RBtn">지도 정리</span></div>
		<div style="margin-top:40px;"><a href="/Cure/public/join/list" style="text-decoration:none;" class="RBtn"> 완 료 </a></div>
	    </div>
	</div>
    </div>

    <div id="map" class="map_style"></div>  
</div>

<script>

$("document").ready(function(){

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

//숙소정보와 여행정보 등을 선택합니다.
$("#selecting").on("change", function(){
	if($(this).val() == "A") {
		$("#infos").empty();
		@foreach($roomData as $row)
			var title = '<span class="title">{{$row["title"]}}</span>';
			var add = '<span data-kind="room" data-id=\'{"contentId":{{$row["room_id"]}}}\' data-role="add" data-map=\'{"x":{{$row["xmap"]}}, "y":{{$row["ymap"]}} }\' class="addBtn">추가</span>';
			var div = '<div class="basket_wrap">'+title+add+'</div>';
			$("#infos").append(div);
		@endforeach
		var del = '<div><span data-role="del" class="RBtn">지도 정리</span></div>';
		var next = '<div style="margin-top:40px;"><a href="/Cure/public/join/list" style="text-decoration:none;" class="RBtn"> 완 료 </a></div>';
		var div = '<div style="text-align:center;margin-top:10px;" class="basket_wrap">'+del+next+'</div>';
		$("#infos").append(div);
	}else if($(this).val() == "B") {
		$("#infos").empty();
		@foreach($basketData as $row)
			var title = '<span class="title">{{$row["title"]}}</span>';
			var add = '<span data-kind="tour" data-id=\'{"contentTypeId":{{$row["contenttypeid"]}}, "contentId":{{$row["contentid"]}}}\' data-role="add" data-map=\'{"x":{{$row["xmap"]}}, "y":{{$row["ymap"]}} }\' class="addBtn">추가</span>';
			var div = '<div class="basket_wrap">'+title+add+'</div>';
			$("#infos").append(div);
		@endforeach
		var del = '<div><span data-role="del" class="RBtn">지도 정리</span></div>';
		var next = '<div style="margin-top:40px;"><a  href="/Cure/public/join/list" style="text-decoration:none;" class="RBtn"> 완 료 </a></div>';
		var div = '<div style="text-align:center;margin-top:10px;" class="basket_wrap">'+del+next+'</div>';
		$("#infos").append(div);

	} else {
		$("#infos").empty();
		var del = '<div style="margin-top:100px;"><span data-role="del" class="RBtn">지도 정리</span></div>';
		var next = '<div style="margin-top:40px;"><a href="/Cure/public/join/list" style="text-decoration:none;" class="RBtn"> 완 료 </a></div>';
		var div = '<div style="text-align:center;margin-top:10px;" class="basket_wrap">'+del+next+'</div>';
		$("#infos").append(div);
	}	
})

//유효성 검사를 위한 배열
var arr = [];

$("#infos").on("click", "[data-role='add']", function(){
	var title = $(this).prev().text();
	var ymap = $(this).data('map').y;
	var xmap = $(this).data('map').x;
	var kind = $(this).data('kind');
	var contentId = $(this).data('id').contentId;
	var contentTypeId = $(this).data('id').contentTypeId;
	
	if(arr.indexOf(contentId) == -1) {
	    var location = new kakao.maps.LatLng(ymap, xmap);
	    $.ajax({
	        url:"/Cure/public/join/resource",
		type:"post",
		data:{"title":title, "ymap":ymap, "xmap":xmap, "kind":kind, "contentID":contentId ,"contentTypeID":contentTypeId},
		success:function(data){
		    if(data == "success") {
	    	        drawMap(location, title, kind);
		        arr.push(contentId);
		    } else {
	 	       alert('중복된 데이터 입니다.'); 
		    }
		}
	    })
	} else {
	    alert('중복된 데이터 입니다.');
	}
})

$("#infos").on("click", "[data-role='del']", function(){
        drawingFlag = false;
	arr = [];
        // 지도 위에 선이 표시되고 있다면 지도에서 제거합니다
        deleteClickLine();
        // 지도 위에 커스텀오버레이가 표시되고 있다면 지도에서 제거합니다
        deleteDistnce();
        // 지도 위에 선을 그리기 위해 클릭한 지점과 해당 지점의 거리정보가 표시되고 있다면 지도에서 제거합니다
        deleteCircleDot();
	$.ajax({
	    url:"/Cure/public/join/empty",
	    type:"post",
	    data:{},
	    success:function(data){
	    }
	})
})

var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
mapOption = { 
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
      level: 13 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var drawingFlag = false;
var clickLine // 마우스로 클릭한 좌표로 그려질 선 객체입니다
var distanceOverlay; // 선의 거리정보를 표시할 커스텀오버레이 입니다
var dots = {}; // 선이 그려지고 있을때 클릭할 때마다 클릭 지점과 거리를 표시하는 커스텀 오버레이 배열입니다.

//DB에 저장된 좌표를 지도에 그림
@foreach($joinData as $row)
    var ymap = "{{$row['ymap']}}";
    var xmap = "{{$row['xmap']}}";
    var contentID = "{{$row['contentID']}}";
    var title = "{{$row['title']}}";
    var kind = "{{$row['kinds']}}";
    (function(ymap,xmap, contentID, title, kind){
        var location = new kakao.maps.LatLng(ymap, xmap);
        drawMap(location, title, kind);
        arr.push(contentID);
    })(ymap,xmap, contentID, title, kind)
@endforeach


// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 선 그리기가 시작됩니다 그려진 선이 있으면 지우고 다시 그립니다
function drawMap(location, content, kind) {      

    if(!drawingFlag) {
	drawingFlag = true;
        // 지도 위에 선이 표시되고 있다면 지도에서 제거합니다
        deleteClickLine();
        // 지도 위에 커스텀오버레이가 표시되고 있다면 지도에서 제거합니다
        deleteDistnce();
        // 지도 위에 선을 그리기 위해 클릭한 지점과 해당 지점의 거리정보가 표시되고 있다면 지도에서 제거합니다
        deleteCircleDot();

        // 클릭한 위치를 기준으로 선을 생성하고 지도위에 표시합니다
        clickLine = new kakao.maps.Polyline({
            map: map, // 선을 표시할 지도입니다 
            path: [location], // 선을 구성하는 좌표 배열입니다 클릭한 위치를 넣어줍니다
            strokeWeight: 3, // 선의 두께입니다 
            strokeColor: '#db4040', // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });
        
        // 클릭한 지점에 대한 정보를 지도에 표시합니다
        displayCircleDot(location, 1, content, kind);

        map.setLevel(7);
        map.setCenter(location);
	
    } else {

        // 그려지고 있는 선의 좌표 배열을 얻어옵니다
        var path = clickLine.getPath();

        // 좌표 배열에 클릭한 위치를 추가합니다
        path.push(location);
        
        // 다시 선에 좌표 배열을 설정하여 클릭 위치까지 선을 그리도록 설정합니다
        clickLine.setPath(path);

        displayCircleDot(location, path.length, content, kind);

        map.setLevel(7);
        map.setCenter(location);
    }
}
    
         



// 클릭으로 그려진 선을 지도에서 제거하는 함수입니다
function deleteClickLine() {
    if (clickLine) {
        clickLine.setMap(null);    
        clickLine = null;        
    }
}



// 그려지고 있는 선의 총거리 정보와 
// 선 그리가 종료됐을 때 선의 정보를 표시하는 커스텀 오버레이를 삭제하는 함수입니다
function deleteDistnce () {
    if (distanceOverlay) {
        distanceOverlay.setMap(null);
        distanceOverlay = null;
    }
}

// 선이 그려지고 있는 상태일 때 지도를 클릭하면 호출하여 
// 클릭 지점에 대한 정보 (동그라미와 클릭 지점까지의 총거리)를 표출하는 함수입니다
function displayCircleDot(position, length, content, kind) {

    // 클릭 지점을 표시할 빨간 동그라미 커스텀오버레이를 생성합니다
    var circleContent = "";
    if(kind == "room") {
	    circleContent = '<div class="dot blue"><span>'+length+'</span></div>';
    } else if(kind == "tour"){
	    circleContent = '<div class="dot red"><span>'+length+'</span></div>';
    }
    var circleOverlay = new kakao.maps.CustomOverlay({
    	content: circleContent,
        position: position,
        zIndex: 1
    });

    // 지도에 표시합니다
    circleOverlay.setMap(map);


        // 클릭한 지점까지의 그려진 선의 총 거리를 표시할 커스텀 오버레이를 생성합니다
        var distanceOverlay = new kakao.maps.CustomOverlay({
            content: '<div class="dotOverlay">'+content+'</div>',
            position: position,
            yAnchor: 1,
            zIndex: 2
        });

        // 지도에 표시합니다
        distanceOverlay.setMap(map);
    

    // 배열에 추가합니다
    dots.push({circle:circleOverlay, distance: distanceOverlay});
}

// 클릭 지점에 대한 정보 (동그라미와 클릭 지점까지의 총거리)를 지도에서 모두 제거하는 함수입니다
function deleteCircleDot() {
    var i;

    for ( i = 0; i < dots.length; i++ ){
        if (dots[i].circle) { 
            dots[i].circle.setMap(null);
        }

        if (dots[i].distance) {
            dots[i].distance.setMap(null);
        }
    }

    dots = [];
}
})

</script>
@stop
