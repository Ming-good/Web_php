<?php
namespace Ming\Route;
use Ming\DB\DBController as DB;
class Routing
{

	public function Route($url, $Controller)
	{	
		$separation = explode('@',$Controller);
		$ControllName =new \Ming\Controller\Controll();
		$ControllName -> Command($url, $separation);
	}

	
}
new DB();
require_once 'wep.php';
