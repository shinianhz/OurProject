<?php
    header("Content-type:text/html;charset=utf-8");
     error_reporting(E_ALL ^ E_DEPRECATED);
     $db = mysql_connect("localhost","root","1292"); //连接数据库   (地址 用户名 密码)
     mysql_select_db("yanxuan",$db); //选择数据库 数据库名称 连接
     mysql_query("set names utf8");//设置编码格式

    $q="SELECT * from child ";//设置查询指令
    // $result=mysql_query($q);//执行查询
    $data=mysql_query($q);
    $res = array();
    while($arr=mysql_fetch_assoc($data))  //循环读出每一条数据
    {   
        array_push($res,$arr);        
    }
    // print_r($res);
    $result=json_encode($res);
    echo $result; 
    
?>