<?php

$dsn = "mysql:host=localhost;port=3306;dbname=Job_Database;charset=utf8";
$db = new PDO($dsn, "ming", "1897");

$title='Hellow';
$description = "good";

//$stmt = $db->prepare("INSERT INTO topic (title, description, created) VALUES (:title, :description, now())");

$stmt = $db->prepare("SELECT * FROM topic where id=:id");      
//$stmt->bindValue(':title',$title);
//$stmt->bindValue(':description',$description);
$stmt -> bindParam(':id',$id);
$id =1;
$stmt->execute();

$password = 'abc';
      $encrypted = base64_encode(sha1($password . $salt, true) . $salt);
echo $encrypted."////////////";
      $hash = base64_encode(sha1($password . $salt, true) . $salt);

echo $hash;

echo dirname(dirname(__FILE__));
$list = $stmt -> fetchAll();
foreach($list as $row)
{
	echo $row['title'];
}





?>


