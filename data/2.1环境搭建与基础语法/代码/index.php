<?php
//开始标签
header('Content-Type:text/html;charset=utf-8');
echo 66666666;
// sublimt 快捷方式
// 双击单词 可以选中单词
// Ctrl + c 复制 复制选中 复制光标所在行
// Ctrl + v 黏贴 黏贴选中 在光标所在行的下一行黏贴
// Ctrl + d 找到选中的下一个一样的 批量查找 批量修改
// Ctrl + s 保存
// Ctrl + g 输入数字 跳转到所在行
// Ctrl + f 查找
// Ctrl + h 替换
// Ctrl + / 快捷注释
//echo '我是注释';
#echo '我是注释';
// echo '我是注释';

// css 注释 /* */  html注释<!-- 头部样式--> 不能写在css里面 后果很严重 浏览器不解析下面的样式
//document.write('dddd'); 
//语言结构体
echo(888888888);
echo 999999999,123123;//习惯用这种  语言结构体 除了输出单个变量还可以输出多个变量（用,隔开）无返回值
print(111111111);
print 222222222222;//习惯用这种  语言结构体 输出单个变量 有返回值
var_dump(print 222222222222);//1

echo '<hr />';

echo 'gg';
echo "gg";


echo '<hr />';

// 什么是变量 变化的值  盒子 装着数据
// js 变量定义 var 变量名 = 变量值;
// php $变量名 = 变量值;//定义输出变量必须以$开头
$a = 'gg123';
$A = 'gg1234';
$a = 'oooooooooooo';
$name = 'ggg';
$age = '18';
$_name = 'oo';
$name_123 = 'oo';
$if = 'PPPP';
$one1 = 'adsdad';

// $12313name_123 = 'oo';
echo $a;
echo $if;
echo $A;
echo '<hr />';
// 变量拼接
$b = 'oo';
$bb = 'rrr';
$ccc = $b.$bb;
echo $ccc;
echo $b,$bb;//输出多个字符串 建议使用
echo '<hr />';
// 值的动态声明
$c = 'v';
$v = 'VVV';
echo $$c;//VVV
// $c()
$c = True;
$c = true;
$c = TRUE;
if($c){
	echo 'ccccccc';
}
echo '<hr />';

echo floor(( 0.1 + 0.7 )*10);//floor 向下取整
echo ceil(( 0.1 + 0.7 )*10);//ceil 向上取整
echo (float)( 0.1 + 0.7 )*10;
echo '<hr />';
//数组

$a = ['ddddd',324,2,5,5,'dad',345,3,5];//只能定义下标
$shukai = array(
		'身高'=>'140m',
		'体重'=>'80kg',
		'爱好'=>array(
			'开车'=>'用手开',
			'跑步'=>'用脚跑'
			)
	);
print_r($a);
//书凯的身高
print_r($shukai['身高']);
print_r($shukai['体重']);
//书凯的爱好
print_r($shukai['爱好']);
//书凯的爱好-开车
print_r($shukai['爱好']['开车']);
var_dump($shukai);
var_dump($shukai['爱好']['开车']);
echo $shukai['爱好']['开车'];
echo $shukai['爱好']['跑步'];//用脚跑
echo '<hr />';

//结束标签  可不写默认到文本最后面结束
?>


<a href=""><?php 
echo 5555;
?></a>
<a>
	<a>
		<a>
			
		</a>
	</a>
</a>