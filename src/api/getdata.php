<?php
    include 'connect.php';
    $type  = isset($_GET['type'])?$_GET['type']:'none';
    $id = isset($_GET['id'])?$_GET['id']:null;
    $sql = 'select * from t_test';
    switch($type){
        case 'rec':
        $sql = "select id,title,url from t_recomm";
        break;
        case 'recval':
        $sql = "select  * from t_recomm_val where rec_id = $id";
        break;
        case 'bubmat':
        $sql = "select * from t_bubmat";
        break;
        case 'jjjf':
        $sql = "select * from t_jjjf";
        break;
        
        default:
        break;
    }
    $res = $mydb->getdata($sql);
    $data =  json_encode($res,JSON_UNESCAPED_UNICODE);
    echo $data;  
?>