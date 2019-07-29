<?php
function autoloader($path)
{
	$path = str_replace('\\','/',$path);
	$path = $path.'.php';
	if(!file_exists($path))
	{
		exit();
	}
	require_once $path;
}
spl_autoload_register('autoloader');




