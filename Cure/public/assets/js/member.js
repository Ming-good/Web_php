$("document").ready(function(){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $("#id").on("keyup", function(){
        $.ajax({
        	url:"/Cure/public/member/user",
        	type:"get",
        	data:{"userID":join.id.value},
        	success:function(data){
			var spe = /[~!@#$%^&*<>()]/;
			if(data == "false") {
			    $("#warnings").empty();
			    $("#warnings").css("color", "red");
			    $("#warnings").css("text-decoration", "underline");
    			    $("#warnings").append("[중복된 아이디 입니다]"); 
			    $("#id").data("chk", "no");
			} else if(spe.test($("#id").val())){
			    $("#warnings").empty();
			    $("#warnings").css("color", "red");
			    $("#warnings").css("text-decoration", "underline");
    			    $("#warnings").append("[특수문자를 제거해 주십시오]"); 
			    $("#id").data("chk", "no");
			    
			} else if($("#id").val() == ""){
			    $("#warnings").empty();
			    $("#warnings").css("color", "red");
			    $("#warnings").css("text-decoration", "underline");
    			    $("#warnings").append("[아이디를 입력해 주십시오]"); 
			    $("#id").data("chk", "no");

			} else if(data == "success") {
			    $("#warnings").empty();
			    $("#warnings").css("color", "blue");
			    $("#warnings").css("text-decoration", "none");
    			    $("#warnings").append("[사용 가능한 아이디 입니다.]"); 
			    $("#id").data("chk", "yes");
			} 
        	}

    	});
    })


})

function validate() {


    //패스워드 정규식 검사

    var eng = /[a-zA-Z]/;
    var num = /[0-9]/;
    var spe = /[~!@#$%^&*<>]/;

    var pw = document.getElementById("pw");
    

    if(join.name.value=="") {
        alert("이름을 입력해 주세요");
        join.name.focus();
        return false;
    } else if(spe.test(join.name.value)){
        alert("특수문자를 제거해 주십시오.");
        join.name.focus();
        return false;
    }

    if(join.id.value=="") {
        alert("아이디를 입력해 주세요");
        join.id.focus();
        return false;
    } else if(spe.test(join.id.value)){
        alert("특수문자를 제거해 주십시오.");
        join.id.focus();
        return false;
    } else if($("#id").data("chk") == "no") {
	alert('중복된 아이디 입니다.');
	return false;
    }
    //패스워드
    if(join.inputPassword.value != join.inputPasswordCheck.value) {
      alert('패스워드가 다릅니다. 다시 확인해 주세요.');
      join.inputPassword.focus();
      return false;
    } else if(!eng.test(pw.value) || !num.test(pw.value) || !spe.test(pw.value)) {
      alert('패스워드 영문, 숫자, 특수문자를 혼합하여 입력해주세요');
      join.inputPassword.focus();
      return false;
    } else if(pw.value.length <=7 || pw.value.length >= 15) {
      alert('패스워드는 영문, 숫자, 특수문자를 혼합하여 최소 7자리 ~ 최대 15자리 이내로 입력해주세요.');
      join.inputPassword.focus();
      return false;
    }

    alert("회원가입이 완료되었습니다.");
}
