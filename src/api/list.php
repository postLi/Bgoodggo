<?php
	
	
	// $page_no = isset($_POST['pageNo']) ? $_POST['pageNo'] : 1;
	// $qty = isset($_POST['qty']) ? $_POST['qty'] : 10;

	// $file_url = './data/goodlist.json';

	// // 打开文件
	// $myfile = fopen($file_url, 'r');

	// // 读取打开的文件
	// $content = fread($myfile, filesize($file_url));

	// //{data:[],total:100}

	// // 输出json字符串
	// echo json_encode($res,JSON_UNESCAPED_UNICODE);

	// fclose($myfile);





	include 'connect.php';
	$page_no = isset($_POST['pageNo']) ? $_POST['pageNo'] : 1;
	$qty = isset($_POST['qty']) ? $_POST['qty'] : 10;

	//sql语句
	$sql = "select * from goodlist";
	//查询
	$result = $conn->query($sql);
	$row = $result->fetch_all(MYSQLI_ASSOC);
	// // 把读取到的内容转成数组
	// $arr_data = json_decode($res);
	// var_dump($arr_data);

	// // 根据分页截取数据
	$res = array(
		'data'=>array_slice($row, ($page_no-1)*$qty,$qty),
		'total'=>count($row),
		'qty'=>$qty
	);
	//释放结果集
	$result->close();
	//关闭数据
	$conn->close();
	// var_dump($res)
	echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>