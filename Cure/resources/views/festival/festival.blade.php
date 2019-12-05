@extends("layout/layout")
@section('content')
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db316ffdfc1b88f64685de057f89dc94"></script>
  <link rel="stylesheet" href="/Cure/public/assets/css/calendar.css">
  <link rel="stylesheet" href="/Cure/public/assets/css/main.css">
  <link rel="stylesheet" href="/Cure/public/assets/css/tour.css">
  <link rel="stylesheet" href="/Cure/public/assets/css/festival.css">
    <div class='container'>
      <div class='festival_wrap'>
	<div class='choice_Wrap'>
            <div class="calendar" >
                <div class="month">
                    <div class="prev" onclick="moveDate('prev')">
                        <span>&#10094;</span>
                    </div>
                    <div>
                        <h2 id="month"></h2>
                        <p id="date_str"></p>
                    </div>
                    <div class="next" onclick="moveDate('next')">
                        <span>&#10095;</span>
                    </div>
                </div>
                <div class="weekdays">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div class="days">

                </div>
            </div>
	    <div>
	        <select id="area" name="area" style='width:300px;' class="select">
                    <option value="0">지역 선택</option>
          	    @foreach($item as $row)
                    <option value="{{$row -> code}}">{{$row -> name}}</option>
             	    @endforeach
                </select>
                <select id="sigunguCode" name="sigunguCode" style='width:300px;' class="select">
                    <option value="0">시/군/구 선택</option>
                </select>
	    </div>
	    <button type="button" class='button4' id='search' style="width:300px;margin-top:10px;">Search !</button>
	</div>
	<div id='content' class='map_Wrap'>
           <div id="map" class="map_size">
           </div>
	</div>
        <div id='festival_info'>
	</div>
        <div id='basket_wrap' style='margin-top:80px;margin-left:0px;' class="basket_Wrap">
          <h2 class='basket'>여행 바구니</h2>
            <div id ='basket'>
                @foreach($tourBasket as $row)
                <div class='basket_content'>
                    <button name='del' type='button' class='button2' value='{{$row ->contentid}}'>X</button>
                    <div class='basket_title'>{{$row -> title}}</div>
                </div>
                @endforeach
            </div>
            <div>
                <a style="text-decoration:none;width:150px;text-align:center;" class='btn2 green' href='/Cure/public/tourism'>다음</a>
            </div>
        </div>
      </div>
      <div id='detail' class="detail">
      </div>


    </div>
    <script>
$('document').ready(function(){
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

        $("#area").change(function(){
                var arr = [];
                if($(this).val() != 0){
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


var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);


	renderDate();
})
        /*   클릭시  배경 색상 바꾸기*/
        var num = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var todaynumber= [0,0];
        var count=0;
        var list = [0,32];

        var dt = new Date();
        dt.setDate(1);  //1일로 기준을 맞춘다.
        var day = dt.getDay();  //0~6반환  0:월 1:화 ~~ 6:일
 
        var endDate = new Date(  //달에 몇일까지 인지 30,31 2월에 윤달
            dt.getFullYear(),  //년도
            dt.getMonth() + 1,  //달
            0
        ).getDate();
        var prevDate = new Date(  //?
            dt.getFullYear(),
            dt.getMonth(),
            0
        ).getDate();
        function renderDate() { //날짜 생성
		
	//달력이 바뀌기 때문에 다시 정의 해준다.	
        var day = dt.getDay();  //0~6반환  0:월 1:화 ~~ 6:일
	var prevDate = new Date(  //?
            dt.getFullYear(),
            dt.getMonth(),
            0
        ).getDate();
	var endDate = new Date(  //달에 몇일까지 인지 30,31 2월에 윤달
	  dt.getFullYear(),  //년도
	  dt.getMonth() + 1,  //달
              0
	).getDate();
		
            var months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
            document.getElementById("month").innerHTML = months[dt.getMonth()]; //dt.getMonth()가 10이 들어가서 var month 배열에서 10인 NOvember가 들어가게 된다.
            document.getElementById("date_str").innerHTML = dt.toDateString(); //현재 시간이 toDateString()를 사용해서 들어간다.
            //11월을 기준으로 1일이전 10월 날짜가 나온게 만든다.
            var cells = "";
            for (x = day; x > 0; x--) {
                cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
            } //prevDate 11월 기준으로 31이 들어간다. 1일을 기준으로 day는 금요일이므로 5가 들어간다.
            // 달력 날짜가 나오는 부분이다.
            for (i = 1; i <= endDate; i++) {
                cells += "<div id='" + i + "' onclick='change("+i+")'>" + i + "</div>";
            }
            document.getElementsByClassName("days")[0].innerHTML = cells; // 숫자 출력 및 당일은 초록색으로
        }
        function moveDate(para) {
            if(para == "prev") {
                dt.setMonth(dt.getMonth() - 1);
		count=0;
        	list = [0,32];
            } else if(para == 'next') {
                dt.setMonth(dt.getMonth() + 1);
		count=0;
        	list = [0,32];
            }
            renderDate();
        }


        function change(i){
          var me = document.getElementById(i);
          num[i]=num[i]+1;
          count=count+1;

              if(count===1){ //1번째 클릭시 색상과 모양 변화
                me.setAttribute('class','radiusa');
                // 다른 날짜를 새로 시작할시 기존 색상을 다 지운다.
                  if(list[0]!=0){
                    for (var j = list[0]; j <= list[1]; j++) {
                      var me1 = document.getElementById(j);
                      me1.setAttribute('class','donechange');
                    }
                    list[1]=40;
                  }
                list[0]=i;
                me.setAttribute('class','radiusa');
              }
              else{  //2번 클릭시 색상과 모양 변화
                list[1]=i;
                if(list[0]>list[1]){ // 날짜 선택이 올바르지 않을  실행 된다.
                  var me_1 = document.getElementById(list[0]);
                  var me_2 = document.getElementById(list[1]);
                  me_1.setAttribute('class','donechange');
                  me_2.setAttribute('class','donechange');
                  list[0]=0;
                  list[1]=40;
                  count=0;
                }
                else{ //선택이 제대로 瑛만 클릭 대상과 그 사이 날짜가 변경
                  me.setAttribute('class','radiusreverse');
                  count=0;
                  list[1]=i;
                  var cells = "";
                  for (var j = list[0]+1; j <= list[1]-1; j++) {
                    me1 = document.getElementById(j);
                    me1.setAttribute('class','daychange');
                  }
                }
              }
         }
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


	$('#search').on('click', function(){
		var sDay = list[0].toString() < 10 ? '0'+list[0].toString() : list[0].toString();
		var eDay = list[1].toString() < 10 ? '0'+list[1].toString() : list[1].toString();
		var month = (dt.getMonth()+1).toString() < 10 ? '0'+(dt.getMonth()+1).toString() : (dt.getMonth()+1).toString();
		var year = dt.getFullYear().toString();

		var area = $("#area").val();
		var areaName = $("#area option:checked").text();
		var sigungu = $("#sigunguCode").val();
		var startDate = year+month+sDay;
		var endDate = list[1].toString() >= 32 ? 'null' : year+month+eDay;
		$.ajax({
		    url:'/Cure/public/festival/eventInfo',
		    type:'get',
		    data:{"sDate":startDate, "eDate":endDate, "area":area, "areaName":areaName, "sigungu":sigungu},
		    success:function(data){
                            var obj = JSON.parse(data);
                            var item = obj.event.response.body.items.item;
			    $("#map").empty();
			    $("#festival_info").empty();
                            var markers = [];
                            var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                            mapOption = {
                                    center: new kakao.maps.LatLng(obj.y, obj.x), // 지도의 중심좌표
                                    level: 10 // 지도의 확대 레벨
                            };
                            var map = new kakao.maps.Map(mapContainer, mapOption);
			    $("#festival_info").append("<div class='map_table' id ='map_table'><ul id='placesList'></ul></div>");

                        var positions = [];
                        var content;
                        for(var i in item) {
                                content = "<div class='overlay_wrap'><img onerror='this.style.display='none'' alt='' src='"+item[i].firstimage+"' class='overlay_image'/><div class='overlay_title'>[ 제목 ]<br>"+item[i].title+"</div><div class='overlay_addr'>[ 주소 ]<br>"+item[i].addr1+"</div></div>";
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
                                var title = "<div style='width:60px;float:left;font-weight:bold;font-size:14px;padding-left:10px;margin-top:10px;'>["+i+"]</div><button name='detail' type='button' class='btn btn-primary' style='width:80px;height:30px;float:left;margin-top:10px;margin-right:10px;'>상세정보</button><button name='baguny' type='button' class='btn btn-primary' style='width:40px;height:30px;float:left;margin-top:10px;'>담기</button></div><h5 style='padding:10px 10px 5px 10px;' class='map_title'>"+item[i].title+"</h5>";
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
var str = "<div class='basket_content'><button name='del'  type='button' class='button2' value='"+item.contentid+"'>X</button><div class='basket_title'>"+item.title+"</div></div>";
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


                                                        var title = "<h2 class='info_title'>"+subIntro.title+"</h2>";

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
                                        });


                                })(marker,infowindow, positions[i].latlng, item[i])

                                $("#placesList").append(el);

                        }



		    }
		});
	})

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

