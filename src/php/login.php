<?php
      ///////
     // 用户注册
    ///////
    header("Content-type:text/html;charset=utf-8");
     error_reporting(E_ALL ^ E_DEPRECATED);
     $db = mysql_connect("localhost","root","1292"); //连接数据库   (地址 用户名 密码)
     mysql_select_db("wangyiyanxuan",$db); //选择数据库 数据库名称 连接
     mysql_query("set names utf8");//设置编码格式

     $uname = $_REQUEST["username"];//用户名
     $uidcard= $_REQUEST["idcard"];//用户身份证
     $unickname = $_REQUEST["nickname"];//用户昵称
     $upwd= $_REQUEST["password"];//用户密码
     $utel = $_REQUEST["tel"];//用户手机号

     $sql1 = "SELECT * FROM `users` WHERE (`u_tel`='$utel')";  //查询前台传入的手机号
     $data = mysql_query($sql1);//执行sql语句

    $result = mysql_fetch_array($data); //将查询结果提取成数组
    if($result){
        echo '{"status":200,"msg":"用户名已存在 请直接登陆","res":false}';
    }else{
        $sql2 = "INSERT INTO `users`(`u_id`, `u_name`,`u_idcard`, `u_nickname`, `u_pwd`,`u_tel`,`u_qq`,`u_wechat`) VALUES (NULL,'$uname','$uidcard','$unickname','$upwd','$utel',NULL,NULL)";
        $count = mysql_query($sql2); // 增加 删除 修改 返回受影响的行数
        if($count==1){
            echo '{"status":200,"msg":"注册成功","res":true}';
        }
    }
?>