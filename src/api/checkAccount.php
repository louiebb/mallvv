<?php
    // 接口功能：登录验证
    // 引入connect.php
    include 'connect.php';
    $account = isset($_POST['act'])?$_POST['act']:null;
    //数据库脚本
    $sql = "select id from t_user where account='$account'";

    //执行
    $result = $mydb->query($sql);

    echo $result->num_rows>0?'fail':'success';
     //关闭连接
     $mydb->close();
?>