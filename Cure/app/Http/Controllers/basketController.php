<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\basket;

class basketController extends Controller
{
	public function index()
	{
		$page = $_GET['page']-1;
		$curent = $page*8;
		$basket = new basket;
		$data = $basket -> skip($curent) -> take(8)  -> get();

		echo json_encode($data);



	}

	public function store(Request $request)
	{
		$title = $request -> input('title');
		$contentid = $request -> input('contentid');
		$contenttypeid = $request -> input('contenttypeid');


		$basket = new basket;
		$result = $basket -> where('contentid', $contentid) -> first();
		if($result == NULL) {
			$basket -> userID = 'read1516';
			$basket -> title = $title;
			$basket -> contentid = $contentid;
			$basket -> contenttypeid = $contenttypeid;
			$basket -> save();
		} else {
			$result = 'false';
		}


		echo $result;

	}
	public function delete(Request $request)
	{
		$basket = new basket;
		$basket -> where('contentid', $request -> input('contentid')) -> delete();

	}

}
