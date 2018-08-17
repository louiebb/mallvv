<?php
    class MYDB{
        function __construct($sn,$un,$pw,$db){
            //配置参数
            $this->sn = $sn;
            $this->un = $un;
            $this->pw = $pw;
            $this->db = $db;
            $this->conn = array();
        }
        //连接
        function conn(){
            //创建连接
            $conn = new mysqli($this->sn,$this->un,$this->pw,$this->db);
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
        function getdata($result){
            $data = array();
            while ($row = mysql_fetch_array($result)) {
                $data[] = $row;
            }
            return $data;
        }
    }
    $mydb = new MYDB('localhost','root','','mallvv');
?>