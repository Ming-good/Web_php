@extends('layout/search')
@section('home')
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<link rel="stylesheet" href="/Job-Site/assets/css/resume.css"/>
    <div class="container">
      <div class="row">
        <div class="page-header">
          <h2 style="text-align:center;">로그인</h2>
        </div>
        <div class="col-md-offset-2 col-md-8">
          <div class="loginWrap">
        <form>
	    <div class="inputWrap">
                <input autocomplete=off name="id" style="width:250px;"   placeholder="아이디" type="text" class="form-control" />
                <input autocomplete=off name="passwd" style="width:250px;" placeholder="비밀번호" type="password" class="form-control" />
	    </div>
            <div class="form-group">
                <input type="submit" id="execute" class="loginButton" value="로그인"/>
            </div>
            <div class="form-group">
                <a href="userSign-up" class="bottomWrap">아직 회원이 아니세요? <span style="font-weight:bold">회원가입</span></a>
            </div>
	    <div class="warning" id='warning'></div>
	    <div class="form-group">
		<a  href="javascript:loginKakao()"><img  class="imageSize"  src="/Job-Site/assets/image/kakao_login.png"/></a>
	    </div>
            <hr/>
        </form>
          </div>
        </div>
      </div>
    </div>
<script>
$(document).ready(function(){
$('form').submit(function(){
	$.ajax({
		url:"Auth/login",
		type:"post",
		data:$('form').serialize(),
		success:function(data) {
			if(data == 'true') {
				history.back();
			}else if(data == 'false') {
				$('#warning').html('아이디 또는 비밀번호가 일치하지 않습니다.');
			} else {
				$('#warning').html(data);
			}
		}
	})
	return false;
})
})
</script>
<script type='text/javascript'>


        Kakao.init('db316ffdfc1b88f64685de057f89dc94');

        function logoutKakao()
        {
                Kakao.Auth.logout();
        }

        //카카오 로그인
        function loginKakao()
        {

                Kakao.Auth.cleanup();
                Kakao.Auth.loginForm({
                        persistAccessToken: true,
                        persistRefreshToken: true,
                        success: function(authObj)
                        {
                                Kakao.API.request({
                                        url: '/v1/user/me',
                                        success: function(res)
                                        {
                                                var userID = res.id;      //유저의 카카오톡 고유 id
                                                var userEmail = res.kaccount_email   //유저의 이메일
                                                var userNickName = res.properties.nickname; //유저가 등록한 별명
                                                var pw = authObj.access_token;
                                                submit(userID, userEmail, userNickName, pw);

                                        },
                                        fail: function(error)
                                        {
                                                alert(JSON.stringify(error));
                                        }
                                });
                        },
                        fail:function(err)
                        {
                                alert(JSON.stringify(err));
                        }
                });
        }

        //카카오 사용자 정보 전송
        function submit(userID, userEmail, userNickName, pw)
        {
             var form = document.createElement("form");
             form.setAttribute("charset", "UTF-8");
             form.setAttribute("method", "Post");  //Post 방식
             form.setAttribute("action", "Auth/loginKakao"); //요청 보낼 주소


             var hiddenField = document.createElement("input");
             hiddenField.setAttribute("type", "hidden");
             hiddenField.setAttribute("name", "inputID");
             hiddenField.setAttribute("value", userID);
             form.appendChild(hiddenField);


             hiddenField = document.createElement("input");
             hiddenField.setAttribute("type", "hidden");
             hiddenField.setAttribute("name", "inputEmail");
             hiddenField.setAttribute("value", userEmail);
             form.appendChild(hiddenField);


             var hiddenField = document.createElement("input");
             hiddenField.setAttribute("type", "hidden");
             hiddenField.setAttribute("name", "inputName");
             hiddenField.setAttribute("value", userNickName);
             form.appendChild(hiddenField);


             var hiddenField = document.createElement("input");
             hiddenField.setAttribute("type", "hidden");
             hiddenField.setAttribute("name", "inputPw");
             hiddenField.setAttribute("value", pw);
             form.appendChild(hiddenField);

             document.body.appendChild(form);
             form.submit();
        }


    </script>


@stop
