<?php
namespace Ming\Controller;
class Controll
{
	public function Command($url, $separation)
	{
		$Bool = $this -> Url_Check($url);
		if($Bool)
		{
			$func = $separation[1];
			$C_location = '\Ming\Controller\\'.$separation[0];
			$ControllName = new $C_location();
			$ControllName -> $func();

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

function View($get)
{	
	if(file_exists($file=$_SERVER['DOCUMENT_ROOT'].'/Job-Site/View/'.$get.'.php'))
	{

		require_once $file;
	}
	else
	{
		echo 'Warming - Not find web site'; 
	}
}

