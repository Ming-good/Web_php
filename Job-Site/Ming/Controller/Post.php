<?php
namespace Ming\Controller;
use Ming\DB\DBController as DB;
use duncan3dc\Laravel\BladeInstance;
class Post extends Controll
{
	public function index()
	{

		$db = DB::PDO();

		return view('index');
	}
	public function store()
	{
		return view('Login/Sign-up');
	}
}
