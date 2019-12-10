<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <script src="/Cure/public/assets/js/jquery-3.4.1.min.js"></script>
        <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0"/>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>TB</title>
	<link rel="stylesheet" href="/Cure/public/assets/bootstrap/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="/Cure/public/assets/css/style.css">
    </head>
<body style="margin:0px">
    
    <!--GNB-->
    <div class="onetop">
      <a href="/Cure/public/index"><img class="one_img" src="/Cure/public/assets/image/logo.png" width="100px" height="45px"></a>
      <img class="toggle" src="/Cure/public/assets/image/menu.png" width="50px" height="50px">
      <nav class="nav_list">
        <ul class="menu_left_ul">
          <li class="menu_left_li">
            <button style="outline:none;" id="TP" class="tbutton barbutton"> Travel Planning</button>
          </li>
          <li class="menu_left_li">
            <button style=" outline:none;" id="eventStart" class="tbutton barbutton"> Event 검색</button>
          </li>
	 @if(session() -> has('id'))
          <li class="menu_right_li">
            <a class="ri button" href="/Cure/public/member/logout"  value="Logout" style="margin-right:70px;">Logout</a>
          </li>
	 @else
          <li class="menu_right_li">
            <a class="ri button" href="/Cure/public/member/enrollment"  value="Sign Up" style="margin-right:70px;">Sign Up</a>
          </li>
          <li class="menu_right_li">
            <a class="ri trigger button" value="Sign In">Sign In</a>
          </li>
	 @endif
        </ul>
      </nav>
    </div>

    <nav class="nav_list1">
      <ul style="list-style:none;text-align:center;padding-left:0px;">
        <li style="padding-top:10px;padding-bottom:10px;border-top:2px solid #fff;">
            <a class="ri button1" href="/Cure/public/join/list" >Travel Planning</a>
        </li>
          <li style="padding-top:10px;padding-bottom:10px;border-top:2px solid #fff;">
          <a class="ri button1" href="/Cure/public/festival" >Event 검색</a>
        </li>
	 @if(session() -> has('id'))
	
        <li style="padding-top:10px;padding-bottom:10px;border-top:2px solid #fff;">
            <a class="ri button1" href="/Cure/public/member/logout">Logout</a>
        </li>
	@else
          <li style="padding-top:10px;padding-bottom:10px;border-top:2px solid #fff;">
          <a class="ri trigger1 button1" value="Sign In">Sign In</a>
        </li>
        <li style="padding-top:10px;padding-bottom:10px;border-top:2px solid #fff;">
          <a class="ri button1" href="/Cure/public/member/enrollment" value="Sign Up">Sign Up</a>
        </li>
	@endif
      </ul>
    </nav>



<!--            Login               -->

    <div class="modal1">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h1 class="title">Log in</h1>
            <form class="modal_login" id='log'>
              <label class="modal_label" for="id">ID</label>
              <input class="modal_input" type="text" name="id" placeholder="Your ID" value="test" >
              <label class="modal_label" for="password">Password</label>
              <input class="modal_input" type="password" name="password" placeholder="Your Password" value="!2zxcasd" >
              <div style='color:red;' id='warning'></div>
              <input type="submit" id='submit' class="sign_submit" value="Login">
              <input type="button" class="sign_submit"value="Sign Up" onClick="location.href='membership.html'">
            </form>
        </div>
    </div>

    <script type="text/javascript" src="/Cure/public/assets/js/sign.js"></script>
    <script type="text/javascript" src="/Cure/public/assets/js/toggle.js"></script>
@yield('content')


<script>
$('document').ready(function(){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    //유효성 검사
    $("#TP").on("click", function(){
	    if( "{{session() -> has('id') ?? ''}}" == "") {
		    alert("로그인 해주십시오.");
	    } else {
		    location.href="/Cure/public/join/list";
	    }
    })
    //유효성 검사
    $("#eventStart").on("click", function(){
            if( "{{session() -> has('id') ?? ''}}" == "") {
                    alert("로그인 해주십시오.");
            } else {
                    location.href="/Cure/public/festival";
            }
    })



    $("#log").on("submit", function(){
    	var id = $("input[name=id]").val();
 	var pw = $("input[name=password]").val();
    	$.ajax({
		url:"/Cure/public/member/ck",
   		type:"post",
    		data:{"id":id, "pw":pw},
		success:function(data){
			if(data == "noID") {
				$("#warning").empty()
				$("#warning").append("아이디를 입력해 주세요.");
			} else if (data == "noPW") {
				$("#warning").empty()
				$("#warning").append("비밀번호를 입력해 주세요.");
			} else if (data == "falseID" | data == 'falsePw') {
				$("#warning").empty()
				$("#warning").append("아이디 또는 비밀번호가 잘못되었습니다.");
			} else if(data == "success") {
				location.reload();
			}		

    		}
    	});
	return false;
    })
})
</script>
</body>
</html>
