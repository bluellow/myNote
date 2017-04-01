
var login = JSON.parse(localStorage.getItem('userlogin')),
	enName = null,
	enPass = null;
	if(login != null){
		enName = login.username;
		enPass = login.pwd;
	}
	console.log(enName,enPass)


var checkLogin = function(){
	var userName = document.getElementById('userName'),
		password = document.getElementById('password'),
		code = document.getElementById('code');
	var userV = userName.value,
		passV = password.value,
		codeV = code.value;
		
	var userTip= document.getElementById("userTip").innerText,
		passTip = document.getElementById("passTip").innerText;
	if(userTip==''&&passTip==''&&userV !='' && passV !='' && codeV != ''){
		setLoginData(userV,passV)
		window.setTimeout("window.location='user.html'");
	}else{
		return false;
	}
	
	var isAutoLogin = document.getElementById('isAutoLogin').checked;
	setCookie(enName,enPass,isAutoLogin)
}
var setCookie = function(user,password,isAutoLogin){
	console.log(user,password,isAutoLogin)
	if(isAutoLogin){
		var now = new Date();
		now.setMinutes(now.getMinutes()+1);
		var exp = 'expires='+now.toUTCString();
		document.cookie = 'username='+ user+';'+exp+';path=/';
		document.cookie = 'password='+ password+';'+exp+';path=/';
		document.cookie = 'isAutoLogin=true;'+exp+';path=/';
	}else{
		document.cookie = 'username=';
		document.cookie = 'password=';
		document.cookie = 'isAutoLogin=';
		
	}
}
var loadCookie = function(){
	if(document.cookie.length >0){
	 	var cookies = document.cookie.split(";");
		var users = cookies[0].split('=');
		var pass = cookies[1].split('=');
		var isAutoLogin = cookies[1].split('=');
		
	 	document.getElementById("userName").value=users[1];
		document.getElementById("password").value=pass[1];
		document.getElementById("isAutoLogin").checked=isAutoLogin[1];
	}
}

var userCheck = function(v){
	var p1 = document.getElementById('userTip');
	if(v == ''){
		p1.innerHTML = '不能为空';
		p1.style.color = 'red';
	}else if(v != enName){
		p1.innerHTML = '用户不存在';
		p1.style.color = 'red';
	}else{
		p1.innerHTML = '';
	}
}

var passCheck = function(v){
	var p2 = document.getElementById('passTip');
	if(v == ''){
		p2.innerHTML = '不能为空';
		p2.style.color = 'red';
	}else if(v != enPass){
		p2.innerHTML = '密码错误';
		p2.style.color = 'red';
	}else{
		p2.innerHTML = '';
	}
	
}
var codeCheck = function(v){
	var p3 = document.getElementById('codeTip');
	if(v == ''){
		p3.innerHTML = '不能为空';
		p3.style.color = 'red';
	}
	
}
function setLoginData(username,pwd){
	var loginData = {
		user:username,
		password:pwd
	}
	localStorage.setItem("loginData",JSON.stringify(loginData))
}
$(function(){
	var i=1;
	$('#codeimg').click(function(){
		console.log(123)
		++i;
		if(i>5){
			i=1
		}
		$('#codeimg').attr('src','images/codeimg'+i+'.jpg');
	})
	
})




