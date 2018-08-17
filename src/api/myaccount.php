<?php
    //引入连接
    include 'connect.php';
    //数据库脚本
    $sql = "select account from myaccount";
    $result = $mydb->query($sql);
    var_dump($result);

?>