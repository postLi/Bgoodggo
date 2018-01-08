<?php
	include 'connect.php';
	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '123456';
	$sql = "select username from user where username='$username'";
	$result = $conn->query($sql);
	if($result->num_rows>0){
		echo "fail";
	}else{
		$password = md5($password);
		// $sql = "insert into user (username,password) values(`$username`,`$password`)";
		$sql = "insert into user (username,password) values('$username','$password')";
		//获取查询结果
		$result = $conn->query($sql);
		if($result){
			echo "ok";
		}else{
			echo "Error:" . $sql . "<br>" .$conn->error;
		}
	}
	//释放结果集
	// $result->close();
	//关闭数据
	$conn->close();

?>