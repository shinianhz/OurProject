<?php
   header("Content-type:text/html;charset=utf-8");
   error_reporting(E_ALL ^ E_DEPRECATED);
     $db = mysql_connect("localhost:8806","JkingCn","1234"); //连接数据库   (地址 用户名 密码)
     mysql_select_db("myele",$db); //选择数据库 数据库名称 连接
     mysql_query("set names utf8");//设置编码格式

    $q="SELECT * from myele_life ";//设置查询指令
    // $result=mysql_query($q);//执行查询
    $data=mysql_query($q);//执行sql语句
    $res = array();
    while($arr=mysql_fetch_assoc($data))  //循环读出每一条数据
    {   
        array_push($res,$arr);        
    }
    $result=json_encode($res);  
    echo $result;

    // $q1="SELECT * from myele_kit ";//设置查询指令
    // // $result=mysql_query($q);//执行查询
    // $data1=mysql_query($q1);//执行sql语句
    // $res1 = array();
    // while($arr1=mysql_fetch_assoc($data1))  //循环读出每一条数据
    // {   
    //     array_push($res1,$arr1);        
    // }
       
    // $result1=json_encode($res1);  
    // // 将php数据转换成json格式
    // $result1=json_encode($res1);  
    // echo $result1;

?>