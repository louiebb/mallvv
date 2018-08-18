<?php
    // 接口功能：邮箱验证是否已经注册

    // 引入connect.php
    include 'connect.php';
    $regemail = isset($_GET['regemail'])?$_GET['regemail']:null;
    
    //数据库脚本
    $sql = "select id,useremail,password,regtime from tuser where useremail='$regemail'";

    //执行
    $result = $mydb->query($sql);

    echo $result->num_rows>0?'fail':'success';
?>