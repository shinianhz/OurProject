
<?php
      ///////
     // 用户登陆
    ///////
    header("Content-type:text/html;charset=utf-8");
     error_reporting(E_ALL ^ E_DEPRECATED);
     $db = mysql_connect("localhost","root","1292"); //连接数据库   (地址 用户名 密码)
     mysql_select_db("wangyiyanxuan",$db); //选择数据库 数据库名称 连接
     mysql_query("set names utf8");//设置编码格式

     $uname = $_REQUEST["username"];
     $upwd= $_REQUEST["password"];

     $sql1 = "SELECT * FROM `users` WHERE (`u_name`='$uname' and  `u_pwd`='$upwd')";  //查询前台传入的用户名
     $data = mysql_query($sql1);

    $result = mysql_fetch_array($data); //将查询结果提取成数组
    if($result){
        echo '{"status":200,"msg":"登陆成功","res":ture}';
    }else{
        echo '{"status":200,"msg":"登陆失败，密码或用户名错误，请核对后重新登陆" ,"res":false}'
    }
?>