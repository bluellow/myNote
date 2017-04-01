var registerData = JSON.parse(localStorage.getItem('userlogin')),
	enName = null,
	enPass = null;
	if(registerData != null){
		enName = registerData.username;
	}
var userCheck = function(v){
	var p1 = document.getElementById('userTip'),
		reg1 = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
	if(v == ''){
		p1.innerHTML = '不能为空';
		p1.style.color = 'red';
	}else if(v == enName){
		p1.innerHTML = '已存在';
		p1.style.color = 'red';
	}else if(!reg1.test(v)){
		p1.innerHTML = '不可用';
		p1.style.color = 'red'; 
	}else{
		p1.innerHTML = '可用';
		p1.style.color = '#00a0a0'; 
	}
}

var passCheck = function(v){
	var p2 = document.getElementById('passTip'),
		reg2 = /^([a-z0-9_-]){6,20}$/;
	if(v == ''){
		p2.innerHTML = '不能为空';
		p2.style.color = 'red';
	}else if(!reg2.test(v)){
		p2.innerHTML = '6到20位';
		p2.style.color = 'red'; 
	}else{
		p2.innerHTML = '可用';
		p2.style.color = '#00a0a0'; 
	}
	
}
var phoneCheck = function(v){
	var reg3 = reg = /^0*(13|15|18)\d{9}$/ ;
	var p3 = document.getElementById('phoneTip');
	if(v == ''){
		p3.innerHTML = "不能为空"
		p3.style.color = 'red';
	}else if(!reg3.test(v)){
		p3.innerHTML = '输入有误';
		p3.style.color = 'red';
	}else{
		p3.innerHTML = ""
	}
}
var emailCheck = function(v){
	var reg4 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ 
	var p4 = document.getElementById('emailTip');
	if(v == ''){
		p4.innerHTML = "不能为空"
		p4.style.color = 'red';
	}else if(!reg4.test(v)){
		p4.innerHTML = '输入有误';
		p4.style.color = 'red';
	}else{
		p4.innerHTML = ""
	}
}
var checkPass = function(){
	var passV = document.getElementById('password').value;
	var enterV = document.getElementById('enterPass').value;
	var p5 = document.getElementById('enPassTip');
	if(enterV == ''){
		p5.innerHTML = "请填写"
		p5.style.color = 'red';
	}else if(passV != enterV){
		p5.innerHTML = "不匹配"
		p5.style.color = 'red';
	}else{
		p5.innerHTML = ""
	}
}
var codeCheck = function(v){
	var p6 = document.getElementById('codeTip');
	if(v == ''){
		p6.innerHTML = '不能为空';
		p6.style.color = 'red';
	}else{
		p6.innerHTML = ""
	}
}

   	function sureSub(){
   		var userTip= document.getElementById("userTip").innerText,
   			passTip = document.getElementById("passTip").innerText;
   			enPassTip = document.getElementById("enPassTip").innerText;
   			phoneTip = document.getElementById("phoneTip").innerText;
   			emailTip = document.getElementById("emailTip").innerText;
   		var register = document.getElementById("registerCheck").checked;
   		
   		if(userTip=="可用" && passTip=="可用"&&phoneTip=="" && emailTip=="" &&enPassTip==""&&register){
   			return true;
   		}else{
   			return false;
   		}
   	}
	
$(function(){
	var i=1;
	$('#codeimg').click(function(){
		++i;
		if(i>5){
			i=1
		}
		$('#codeimg').attr('src','images/codeimg'+i+'.jpg');
	})
	$('.changeCode').click(function(){
		++i;
		if(i>5){
			i=1
		}
		$('#codeimg').attr('src','images/codeimg'+i+'.jpg');
	})
	
	$('.input-group .sub').click(function(){
		var name = $("#userName").val();
    	var phone = $("#phone").val();
    	var email = $("#Email").val();
    	var pwd = $("#password").val();
    	console.log(name,email,phone,pwd)
    	if(sureSub()){
    		setLocal(name,email,phone,pwd);
    		return true;
    	}else{
			alert("亲！请完善正确的注册信息")
    		return false;
    	}
	})
	
	function setLocal(name,email,phone,pwd){
   		userlogin = 
   		{
   			username:name,
   			email:email,
   			phone:phone,
   			pwd:pwd
   			
   		};
   		localStorage.setItem("userlogin",JSON.stringify(userlogin));
   	}
	
	
})
