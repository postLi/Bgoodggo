<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "Bgoodggo";
	//创建连接 
	$conn = new mysqli($servername,$username,$password,$dbname);
	//检查连接
	if($conn->connect_error){
		die("连接失败".$connect_error);
	}
	//查询之前设置编码,防止乱码
	$conn->set_charset('utf8');
?>