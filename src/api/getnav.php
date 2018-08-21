<?php
    include 'connect.php';
    //数据库脚本
    $sql = "SELECT  id ,`value`,more,pubclass from t_nav where `enable` = true";
    // include 'connect.php';  
    $res = $mydb->getdata($sql);
    $data =  json_encode($res,JSON_UNESCAPED_UNICODE);
    echo $data;  
     //关闭连接
     $mydb->close();
?>