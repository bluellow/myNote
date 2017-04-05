<?php

//变量名称一定要有$开头 变量名必须字母开头_11313AZza
$a = 12;// var a = 12;
$a_1 = 12;// var a = 12;
//$在 = 124;// var a = 12;
//

$a = 'dddd$a';// var a = 'dddd';
// echo $a;
// echo '<br />';

$a = "dddd123$a";// var a = "dddd123";//双引号 里面的变量会解析 单引号不会

// echo $在;
// echo $a;//echo 语言结构 
// echo($a);

//js var arr = [1,13,3454];//arr[1] var arr = {'width':100,'height':100};//arr.width
$arr = [444, '123', 1321, 3, 13];//数组定义简写
$arr = [444, '123', 1321,$arr, 13];//数组定义简写
//数组不能用echo 输出 print_r 和 var_dump 用来查看数组 根据数组结构输出不同数据 
// echo $arr;
var_dump($arr);
echo '<pre>';
print_r($arr);
echo '</pre>';
print_r($arr[1]);
$b = 4444;
$arr1 = array(10=>$b,1=>'123',2=>1321,3=>$arr,4=>13);//数组定义 array('下标、键名、索引'=>'值、键值','下标、键名、索引'=>'值、键值')
// 下标 可以数字，字母混合
// 键值 数字、字母、数组
print_r($arr1);
print_r($arr1[10]);

$arr2 = array('gg'=>'ghjgj',1=>'123',2=>1321,3=>$arr1,4=>13);//数组定义 array('下标、键名、索引'=>'值、键值','下标、键名、索引'=>'值、键值')

var_dump($arr2);
print_r($arr2);
print_r($arr2['gg']);

// int $a = 1123;//int $a = '1213'
// 

// 字符串拼接
// js 'rrrr'+'yyy'=>rrrryyy a+b =>rrrryyy
// php 'rrrr'.'yyy'=>rrrryyy $a.$b = rrrryyy
// 
// $a = 123;
// $b = 555;
// echo $a.$b;
// echo '<b>123</b>'
?>