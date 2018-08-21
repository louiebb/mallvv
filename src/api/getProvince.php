<?php
    include 'connect.php';

    //数据库脚本
    $sql = "select name from t_province";

    //执行
    $res = $mydb->getdata($sql);
    $data =  json_encode($res,JSON_UNESCAPED_UNICODE);
 
    echo $data;
    //关闭连接
    $mydb->close();
?>