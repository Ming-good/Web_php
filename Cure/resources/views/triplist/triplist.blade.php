@extends("layout/layout")
@section('content')
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db316ffdfc1b88f64685de057f89dc94"></script>
    <link rel="stylesheet" href="/Cure/public/assets/css/triplist.css">
    <link rel="stylesheet" href="/Cure/public/assets/css/join.css" />
    <link rel="stylesheet" href="/Cure/public/assets/css/tour.css" />
       <!--               중간    내용     이다               -->
    <div class="list_center">
      <table class="trip">
	<thead>
            <tr>
              <th>순번</th>
              <th>제목</th>
              <th class='block'>생성일</th>
              <th>종류</th>
            </tr>
	</thead>
	<tbody>
	@foreach($joinData as $row)
            <tr>
              <td>{{$row['rank']}}</td>
              <td><strong style='cursor:pointer;' data-kind='{{$row["kinds"]}}'  data-cid='{{$row["contentID"]}}' data-ctid='{{$row["contentTypeID"]}}' data-map='{"x":{{$row["xmap"]}},"y":{{$row["ymap"]}}}'>{{$row['title']}}</strong></td>
              <td class='block'>{{$row['created_at']}}</td>
              <td>{{$row['kinds'] == 'room' ? '하우스' : '여행지'}}</td>
            </tr>
	@endforeach
	</tbody>
      </table>
      <div class="map" id='map'>

      </div>
      <button class="revise revise_2" type="button" name="button">수정</button>

    </div>
    <div class='container'>
      <div id='detail' style='margin-bottom:50px;text-align:center;'>
      </div>
    </div>


<script>
$("document").ready(function(){
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
      level: 13 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    $('tbody').on("mouseover", "strong", function(){
	    var ymap = $(this).data('map').y;
	    var xmap = $(this).data('map').x;
	    //지도 레벨 설정
	    var level = map.getLevel();
	    map.setLevel(level - 8);

	    //지도 중심 이동
	    var moveLatLon = new kakao.maps.LatLng(ymap, xmap);
	    map.setCenter(moveLatLon);
	
    })
    $('tbody').on("click", "strong", function(){
          var ymap = $(this).data('map').y;
          var xmap = $(this).data('map').x;
	  var title = $(this).text();

	  var kind = $(this).data('kind');
	  var contentID  = $(this).data('cid');
	  var contentTypeID  = $(this).data('ctid');
	  if(kind == 'room') {
	    $.ajax({
		url:'/Cure/public/rooms/first',
		type:'get',
		data:{"title":title, "ymap":ymap, "xmap":xmap},
		success:function(data){
		     var obj = JSON.parse(data);
		     var obj = obj.documents[0];
		     console.log(obj);
		     $("#detail").empty();
                     var title = "<h2 style='margin-bottom:0;padding:20px;background-color:#5fcec0;color:#fff;font-weight:bold'>"+obj.place_name+"</h2>";
                     var content = "<div id='contInfom' class='strStart'><p style='margin-top:30px;'><strong>|</strong> 상세정보</p></div>";
                     var detail_inform = "<table class='table table-bordered' style='width:300px;border:none;word-break:break-all;'><tbody><tr><td class='tableTD1'>위치</td'><td style='border:none;' class='tableTD2''>"+obj.address_name+"</td></tr><tr><td class='tableTD1'>전화번호</td'><td style='border:none;' class='tableTD2'>"+obj.phone+"</td></tr><tr><td class='tableTD1'>홈페이지</td><td style='border:none;' class='tableTD2'><a href='"+obj.place_url+"' target='_blank'>"+obj.place_url+"</a></td></tr></tbody></table>";

                     $("#detail").append(title);
                     $("#detail").append(content);
                     $("#contInfom").append(detail_inform);
                     location.href='#detail';

		}
	    });

	  } else{
            $.ajax({
                url:'/Cure/public/tourism/introduction',
                type:'get',
                data:{"contentid":contentID, "contenttypeid":contentTypeID},
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

                            view = view + "<img class='info_img' src='"+image[i].originimgurl+"'/>";

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
	}
    });

//유효성 검사를 위한 배열
var arr = [];

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
