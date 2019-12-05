<?php

namespace App\Http\Middleware;

use Closure;
use App\user;

class CheckId
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
            $name = $request -> name;
            $id = $request -> id;
            $pw = $request -> inputPassword;
	    $pwCk = $request -> inputPasswordCheck;

	    $speName = preg_match('/[\<\>\!\@\#\$\%\^\&\*]/u', $name);
	    $speId = preg_match('/[\<\>\!\@\#\$\%\^\&\*]/u', $id);

	    $spePw = preg_match('/[\<\>\!\@\#\$\%\^\&\*]/u', $pw);
	    $numPw = preg_match('/[0-9]/ui', $pw);
	    $engPw = preg_match('/[a-z]/ui', $pw);

	    $user = new user;
	    $result = $user -> where("userID", $id) -> first();

	    if($speName == 1 || empty($name)) {
		   return redirect('member/enrollment');
	    } else if($speId ==1 || empty($id)) {
		   return redirect('member/enrollment');
	    } else if($spePw == 0  || $numPw == 0 || $engPw == 0) {
		   return redirect('member/enrollment');
	    } else if($pw != $pwCk){
		   return redirect('member/enrollment');
	    } else if($result != NULL) {
		   return redirect('member/enrollment');
	    }

	    
            return $next($request);
    }

}
