<?php
	header('content-type:text/html;charset=utf-8');
	define('HOST','localhost');
	define('USERNAME','root');
	define('PASSWORD','');
	$conn=@mysql_connect(HOST,USERNAME,PASSWORD);
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}

	//2.选择数据库,设置字符集
	mysql_select_db('taobao');
	mysql_query('set names utf8');
?>