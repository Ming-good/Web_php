@extends("layout/layout")
@section('content')

       <!--             Header               -->
      <div class="center">
        <div class="TB_image" style="display: inline-block;width:400px;">
          <img src="/Cure/public/assets/image/TB.png" width="400px" height="400px">
        </div>
       <div class="TB_content">
         <span class="span_color" >TourBank</span>는 여행을 가고자 할 때 지역마다 아름다운 볼거리와 재미있는 행사를 제공함으로써 많은 사람들이 편하게 정보를 얻을 수 있도록 만들었습니다.<br><br>
	여행 계획을 세우는데 머리가 복잡해지고 피로해지나요?<br> 그렇다면 <span  class="span_color">TourBank</span>를 사용해서 문제를 해결해보세요!
        </div>
      </div>
    <!--  다음 페이지로 이동하는 곳-->
    <div>
        <button id='start' style=" outline:none;" onclick="location.href='/Cure/public/tourism'" class="tbutton tripbutton nextPage" type="button" >Trip Start</button>
    </div>

<script>
 $("#start").on('click', function(){
    if("{{session()->has('id') ?? ''}}" == "") {
	alert('로그인을 해주십시오');
    } else {
        location.href='/Cure/public/festival';
    }
 })
</script>

@stop
