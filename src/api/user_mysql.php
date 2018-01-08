<?php
	//查询结果集
	$result = $conn->query('select * from goodlist');
	//得到结果集的数量
	$row = $result->fetch_all(MYSQLI_ASSOC);
	//转成字符串防止乱码
	echo json_encode($row,JSON_UNESCAPED_UNICODE)

?>