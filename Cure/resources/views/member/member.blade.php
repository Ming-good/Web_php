@extends("layout/layout")
@section("content")
       <!--               중간    내용     이다               -->

  <div class="center" style="padding-top:100px;height:800px;">
        <h1 class="title">회 원 가 입</h1>
        <form class="modal_login" action="/Cure/public/member/resource" name="join" method="post" onsubmit="return validate();">
	  @csrf
	<div>
          <label class="modal_label" for="name">Name</label>
          <input class="modal_input" type="text" name="name" id="name" placeholder="Your Name">
	</div>
	<div>
          <label class="modal_label" for="id">ID</label>
	  <p id="warnings"></p>
          <input class="modal_input" data-chk="no" type="text" name="id" id="id" placeholder="Your ID">
	</div>
	<div>
          <label class="modal_label">Password</label>
          <input class="modal_input" type="password" name="inputPassword"  id="pw" placeholder="Your Password">
	</div>
	<div>
          <label class="modal_label">Password Check</label>
          <input class="modal_input" type="password" name="inputPasswordCheck" id="pwCheck" placeholder="One More Time">
	</div>
	<div>
          <input style="postion:relative;left:50%;margin-left:-17px;" type="submit" class='sign_submit' value="확인">
	</div>
        </form>
  </div>

    <!--               하위    내용     이다               -->


      <script type="text/javascript" src="/Cure/public/assets/js/member.js"></script>

@stop
