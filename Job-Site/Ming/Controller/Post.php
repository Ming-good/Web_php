<?php
namespace Ming\Controller;
use Ming\DB\DBController as DB;
use duncan3dc\Laravel\BladeInstance;
class Post extends Controll
{
	public function index()
	{

		$db = DB::PDO();

		Controll:: view('index');
	}
	public function store()
	{
		$test = [20,50,60];
		Controll:: view('SignUp/SignUp', compact('test'));
	}
}
