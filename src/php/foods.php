<?php
     header("Content-type:text/html;charset=utf-8");
     error_reporting(E_ALL ^ E_DEPRECATED);
     $db = mysql_connect("localhost","root","1292"); //连接数据库   (地址 用户名 密码)
     mysql_select_db("wangyiyanxuan",$db); //选择数据库 数据库名称 连接
     mysql_query("set names utf8");//设置编码格式

    $key = $_REQUEST["key"];//接受前面输入的数据
    $q="SELECT * from `foods` WHERE (`f_class`='$key')  ORDER BY `f_price` ASC"  ;//设置查询指令

    $data=mysql_query($q);//执行查询语句
    $res = array();
    while($arr=mysql_fetch_assoc($data))  //循环读出每一条数据
    {   
        array_push($res,$arr);        
    }
    // 将数据转换成json格式
    $result=json_encode($res);
    echo $result; 
?>