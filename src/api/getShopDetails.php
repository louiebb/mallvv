<?php
    header('Content-Type:application/json;charset=utf-8');

    include 'connect.php';
        // 获取前端传入的参数
    $id  = isset($_GET['id'])?$_GET['id']:0;
    $sql = "select * from t_shop where id = $id";

    $data = $mydb->getdata($sql);

    $data =  json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $data;  
     //关闭连接
     $mydb->close();
?>