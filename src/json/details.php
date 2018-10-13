<?php  
	
	include "conn.php";
	
	if(isset($_GET['sid'])){
		$sid=$_GET['sid'];//获取前端传入的sid
	}

	$result=mysql_query("select * from piclist where sid = '$sid'");
	
	$picarr=array();
	
	for ($i=0; $i < mysql_num_rows($result); $i++) { 
		$picarr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}

	echo json_encode($picarr);

?>