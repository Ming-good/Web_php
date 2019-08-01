<?php
namespace Ming\Controller;
use duncan3dc\Laravel\BladeInstance;
class Controll
{
	public function Command($url, $separation)
	{
		$Bool = $this -> Url_Check($url);
		if($Bool)
		{
			$func = $separation[1];
			$C_location = '\Ming\Controller\\'.$separation[0];
			$Controller = new $C_location();
			$Controller -> $func();

		}
		
	}


	public function Url_Check($url)
	{
		if($url == $_GET['url'])
		{
			return TRUE;
		}
	}
}

function View($File)
{
	$obj = new BladeInstance("/var/www/html/Job-Site/View", "/var/www/html/Job-Site/cache/View");
	echo $obj->render($File);
}
