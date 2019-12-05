<?php

namespace App\Http\Controllers\member;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\user;

class memberController extends Controller
{
    #로그인
    public function login(Request $request)
    {
	    $id = $request -> input('id');
	    $pw = $request -> input('pw');
	    if(!isset($id)) {
		    echo 'noID';
	    } else if(!isset($pw)) {
		    echo 'noPW';
	    } else {
		    $user = new user;
		    $userData = $user -> where("userID", $id) -> first();
		    if($userData == null) { 
			    echo 'falseID';
		    }else if(password_verify($pw, $userData['password'])){
			    session(['id' => $userData['userID'], 'name' => $userData['name']]);
			    echo "success";
		    } else {
			    echo 'falsePw';
		    }
	    }
	    	    
    }
    #회원가입
    public function store(Request $request)
    {
	    $name = $request -> input('name');
	    $id = $request -> input('id');
	    $pw = $request -> input('inputPassword');

	    $pwHash = password_hash($pw, PASSWORD_DEFAULT);

	    $user = new user;
	    $user -> name = $name;
	    $user -> userID = $id;
	    $user -> password = $pwHash;
	    $user -> save();
	    return redirect('index');

    }

}
