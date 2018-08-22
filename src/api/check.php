<?php
    // 接口功能：登录验证
    // 引入connect.php
    include 'connect.php';
    $account = isset($_POST['act'])?$_POST['act']:null;
    $pwd = isset($_POST['pwd'])?$_POST['pwd']:null;
    //数据库脚本
    $sql = "select id from t_user where account='$account' and password = '$pwd'";

    //执行
    $result = $mydb->query($sql);

    echo $result->num_rows>0?'success':'fail';
     //关闭连接
     $mydb->close();
?>