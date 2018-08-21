<?php
    // 接口功能：邮箱验证是否已经注册

    // 引入connect.php
    include 'connect.php';
    $regname = isset($_POST['regname'])?$_POST['regname']:null;
    $regpwd = isset($_POST['regpwd'])?$_POST['regpwd']:null;

    //数据库脚本
    $sql = "insert into tuser(username,password) values('$regname','$regpwd')";
    //执行
    $result = $mydb->query($sql);

    echo $result?'success':'fail';
     //关闭连接
     $mydb->close();
?>                                                     