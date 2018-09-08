<?php
    //注意响应头，前台想要获取字符数据dataType设置为text
    header('Content-Type:application/json;charset=utf-8');
    class MYDB{
        function __construct($sn,$un,$pw,$db){
            //配置参数
            $this->sn = $sn;
            $this->un = $un;
            $this->pw = $pw;
            $this->db = $db;
        }
        //连接
        function conn(){
            //创建连接
            $conn = new mysqli($this->sn,$this->un,$this->pw,$this->db);
            //乱码处理
            $conn->set_charset('utf8');
            //检查连接
            if($conn->connect_error){
                //输出信息并结束连接
                die("0:$conn->connect_error");
                return null;
            }
            return $conn;
        }
        //执行
        function query($sql){
            return $this->conn()->query($sql);
        }


        //以数组的形式返回数据
        function getdata($sql){
            
            // fetch_all(MYSQLI_BOTH) 抓取所有的结果行并且以关联数据，数值索引数组，或者两者皆有的方式返回结果集。
            //MYSQL_ASSOC 关联  MYSQLI_NUM 索引   MYSQLI_BOTH 关联和索引
            return $this->query($sql)->fetch_all(MYSQL_ASSOC);
        }
        
        //关闭连接
        function close(){
            $this->conn()->close();
        }
    }
    $mydb = new MYDB('localhost','root','root','mallvv');
?>