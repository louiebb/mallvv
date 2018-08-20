<?php
    include 'connect.php';
    $sql  = isset($_GET['sql'])?$_GET['sql']:'select * from t_test';
        switch()
    $res = $mydb->getdata($sql);
    $data =  json_encode($res,JSON_UNESCAPED_UNICODE);
    echo $data;  
?>