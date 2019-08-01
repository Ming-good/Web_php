<?php
namespace Ming\Controller;
use duncan3dc\Laravel\BladeInstance;
class Controll
{


	public static $obj;

	public function Command($url, array $separation)
	{
		//블레이드 템플릿을 사용하기 위한 설정(view파일 경로, cache파일 경로)
		self::$obj = new BladeInstance("/var/www/html/Job-Site/View", "/var/www/html/Job-Site/cache/View");
		//URL검사를 한 후  해당 컨트롤러의 함수로 보내줌
		$Bool = $this -> Url_Check($url);
		if($Bool)
		{
			$func = $separation[1];
			$C_location = '\Ming\Controller\\'.$separation[0];
			$Controller = new $C_location();
			$Controller -> $func();

		}
		
	}

	//GET으로 입력받은 URL과 Route의 wep.php에서 입력한 URL간에 검사 위한 함수
	public function Url_Check($url)
	{
		if($url == $_GET['url'])
		{
			return TRUE;
		}
	}

	public static function __callstatic($method, array $args)
	{
		if($method == 'view')
		{
			
			echo self::$obj->render(...$args);
		}
		
		
	}
}

