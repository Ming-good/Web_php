<!DOCTYPE html>
<html>
<head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<link rel="stylesheet" href="assets/css/main.css" />
<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
</head>
<link rel=" shortcut icon" href="assets/image/favicon.ico">
<link rel="icon" href="assets/image/favicon.ico">
<body>
	<!-- 네비게이션 -->
	<nav id="nav">
          <ul class="container">
	 <div class="logo">
	  <a href="" target="_blank"><img src="assets/image/Ming_logo_blue.png" class="logo" alt="logo" border="3px" width="200px" height="75px" align="left"></a>
 	 </div>
           <li><a class="link" href="#top">Top</a></li>
           <li><a class="link" href="#work">Work</a></li>
           <li><a class="link" href="#portfolio">Portfolio</a></li>
           <li><a class="link" href="#contact">Contact</a></li>
          </ul>
        </nav>

	<!-- 로그인 -->
	<div class = "cont_top">
	 <form method="POST" action="">
	  <div class="wrap_my">
	   <div >
	    <a class="user_login" href="Sign-up">회원가입</a>
	    <a class="user_finding"  href="">아이디/비밀번호 찾기</a>
	   </div>		
	   <div class ="login_input">
	    <span class ="box_inp">	
	 	 <input type="text" name="id" id="login_person_id"  class="inp_login" placeholder="아이디" >
	    </span>
	    <span class ="box_inp">	
		 <input type="text" name="passwd" id="login_person_id"  class="inp_login" placeholder="비밀번호" >
	    </span>
	    <span>
	      <input type="submit" class="btn_login" value="로그인">
	     </span>
	    </div>
	  </div>
	 </form>
	</div>
@yield('Content')

	
</body>
</html>
