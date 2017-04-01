$(function(){
	var userData = JSON.parse(localStorage.getItem('loginData')),
		name=null;
		

		if(userData !=null){
			name = userData.user;
			$("#userLogin").html(name)
			$("#userLogin").css({'color':'#000',"text-decoration":"none"})
			$("#userLogin").attr("href","user.html")
			$('#userRegister').html("安全退出")
			$("#userRegister").attr("href","javascript:;")
		}else{
			$("#userLogin").html("请登录")
			$("#userLogin").attr("href","login.html")
			$('#userRegister').html("免费注册")
			$("#userRegister").attr("href","register.html")
		}
	$("#userRegister").click(function(){
		console.log(123)
		if($('#userRegister').html() =="安全退出" ){
			localStorage.removeItem("loginData");
			$('#userRegister').html("免费注册")
			$("#userRegister").attr("href","#")
			$("#userLogin").html("请登录")
			$("#userLogin").attr("href","login.html")
		}else{
			$("#userRegister").attr("href","register.html")
		}
		
	})
})
