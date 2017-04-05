<?php
header('Content-Type:text/html;charset=utf-8');
$p = $_GET['p'];
$g1 = array(
		'img' => 'images/png/pro.png',
		'price' => '599',
		'title' => '吉蒂可爱水晶手链'.$p,
	);

$goods = array();
for ($i=0; $i < 5; $i++) { 
	// echo $i;
	$v = $g1;
	$v['title'] = $v['title'].'_'.$i;
	$goods[] = $v;
}


//{'img':'images/png/pro.png','price':'599','title':'吉蒂可爱水晶手链6'} 这种格式的 字符串 称之为 json
//php提交方式
// get 提交会把参数拼接到url路径中 第一个参数?拼接 第二个参数往后 用& http://localhost/shop/index.php?gg=6666&yy=9999 
// 获取数据 $_GET 在php中使用超级变量
// post 提交不会参数拼接到url路径中
// 获取数据 $_POST 在php中使用超级变量
// echo 123;
// var_dump($a);
// var_dump($_GET);
// var_dump($_POST);
// var_dump($goods);
// var_dump($goods[4]['title']);

// json_decode(json,true) 数组转对象 第二参数为true 转为数组
// json_encode(array) 数组转json
// var_dump($goods[$p]);
echo(json_encode($goods));

?>