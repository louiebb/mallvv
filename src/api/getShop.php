<?php
    header('Content-Type:application/json;charset=utf-8');

    include 'connect.php';
        // 获取前端传入的参数
    $type  = isset($_POST['type'])?$_POST['type']:'200';
    $order = isset($_POST['order'])?$_POST['order']:null;
    $field = isset($_POST['field'])?$_POST['field']:null;
	$pageNo = isset($_POST['pageNo'])?$_POST['pageNo']:1;//避免报错
    $qty = isset($_POST['qty'])?$_POST['qty']:3;//避免报错

    //limit 数据库分页  => limit 5,10 查询6到15行的数据 
    // $sql = "select * from t_shop where type like '$type%' limit $pageNo , $qty";
    $sql = "select * from t_shop where type like '$type%'";

    if($field){
        $sql = "select * from t_shop where type like '$type%' order by $field $order";
    }
    // var_dump($sql);
    $data = $mydb->getdata($sql);

    // var_dump($data);
    // 截取需要的数据=>以下分页会比较好
	$res = array(
        "total" => count($data),
        "data" => array_slice($data,($pageNo-1)*$qty,$qty),   
		"pageNo" => $pageNo,
		"qty" => $qty
	);

    $res =  json_encode($res,JSON_UNESCAPED_UNICODE);

    echo $res;  
     //关闭连接
     $mydb->close();
?>