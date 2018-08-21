<?php
    include 'connect.php';
    $navid = isset($_GET['id'])?$_GET['id']:0;
    //数据库脚本
    $sql = "SELECT navid,value from t_nav_value where `enable` = true and navid = $navid";
    $res = $mydb->getdata($sql);
    $data =  json_encode($res,JSON_UNESCAPED_UNICODE);
    echo $data;  
    //关闭连接
    $mydb->close();
?>