<?php

namespace App\Http\Middleware;

use Closure;

class sess
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
	$sess = session() -> get('id');
	if(!isset($sess)) {
		return redirect('index');
	}
        return $next($request);
    }
}
