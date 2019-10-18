<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
	<script src="assets/js/jquery-3.4.1.min.js"></script>
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db316ffdfc1b88f64685de057f89dc94"></script>
        <title>Laravel</title>
	<link rel="stylesheet" href="assets/css/main.css" />
    </head>
    <body>
<div class='cont'>
    <div style="width:1200px;">
	<form>
	    <div style="float:left;width:200px;border-right:1px solid #e3e3e3">
	  @foreach($item as $row) 
		<div class="checks" style="margin-bottom:10px;">
                      <input type="radio" id="area{{$row -> code}}" name="area" value="{{$row -> code}}">
                      <label for="area{{$row -> code}}">{{$row -> name}}</label>
                </div>
	  @endforeach
	    </div>
	    <div style="float:left;width:800px;margin-left:20px;">
	        <select id="sigunguCode" name="sigunguCode" style="float:left;">
		    <option value="0">시/군/구 선택</option>;
	        </select>

	        <select id="cat2" name="cat2" style="float:left;">
		    <option value="0">중분류 선택</option>;
		</select>
	        <select id="cat3" name="cat3" style="float:left;">
		    <option value="0">소분류 선택</option>;
		</select>
		<button type="button" id='search' style="margin-left:20px;">Search !</button>
	    </div>
	</form>
	<div id='content' style="float:left;width:800px;margin-left:20px;">
	</div>
    </div>
</div>
<br>
    </body>
</html>
<script>
$('document').ready(function(){
	$("#search").click(function(){
	    $.ajax({
	        url:"tourism",
	        type:"get",
	        data:$('form').serialize(),
	        success:function(data){
			var obj = JSON.parse(data);
			var item = obj.response.body.items.item;
			for(var i in item){
			    var list = "";

			}
	        }
	    })
	})
	$("input:radio[name='area']").change(function(){
		$("#cat2").empty();
		var option = "<option value='0'>중분류 선택</option>";
		$("#cat2").append(option);
		$("#cat3").empty();
		var option = "<option value='0'>소분류 선택</option>";
		$("#cat3").append(option);

		if($(this).val() != 0){
		    var option = "<option value='A01'>자연</option><option value='A02'>인문(문화/예술/역사)</option><option value='C01'>추천코스</option><option value='A03'>레포츠</option><option value='A04'>쇼핑</option>"
		    $("#cat2").append(option);
		} 

		
	})

	$("#cat2").change(function(){
		$("#cat3").empty();
		var option = "<option value='0'>소분류 선택</option>";
		$("#cat3").append(option);
		if($(this).val() == 'A01'){
			var option  = "<option value='A0101'>자연관광지</option><option value='A0102'>관광자원</option>";
			$("#cat3").append(option);
		} else if($(this).val() == 'A02'){
			var option  = "<option value='A0201'>역사관광지</option><option value='A0202'>휴양관광지</option><option value='A0203'>체험관광지</option><option value='A0204'>산업관광지</option><option value='A0205'>건축/조형물</option><option value='A0206'>문화시설</option><option value='A0207'>축제</option><option value='A0208'>공연/행사</option>";
			$("#cat3").append(option);
		} else if($(this).val() == 'C01'){
			var option = "<option value='C0112'>가족코스</option><option value='C0113'>나홀로코스</option><option value='C0114'>힐링코스</option><option value='C0115'>도보코스</option><option value='C0115'>캠핑코스</option><option value='C0116'>캠핑코스</option><option value='C0117'>맛코스</option>";
			$("#cat3").append(option);
		}else if($(this).val() == 'A03'){
			var option = "<option value='A0301'>레포츠소개</option><option value='A0302'>육상 레포츠</option><option value='A0303'>수상 레포츠</option><option value='A0304'>항공 레포츠</option><option value='A0305'>복합 레포츠</option>";
			$("#cat3").append(option);
		}else if($(this).val() == 'A04') {
			var option = "<option value='A0401'>쇼핑</option>";
			$("#cat3").append(option);
		}
		
	})


	$("input:radio[name='area']").click(function(){
		var arr = [];
		if($(this).is(":checked")){
		    $.ajax({
			url:"area",
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
</script>
