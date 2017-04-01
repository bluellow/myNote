$(function(){
	$('.header .right .index-enter li').mouseover(function(){
		$(this).children('dl').show();
	})
	$('.header .right .index-enter li').mouseout(function(){
		$(this).children('dl').hide();
	})
	$('.nav-menu .all').click(function(){
		$(".nav-menu ul").slideToggle(500);
	})
	$('.nav-menu ul li').hover(
		function(){
		$(this).find(".nav-details").show();
	},
		function(){
		$(this).find(".nav-details").hide();
		}
	)
	var badge = JSON.parse(localStorage.getItem("Shop_Cart"))
	
	if(badge != null){
		$('.badge').html(badge.length)
	}else{
		$('.badge').html(0)
	}
	$('.user-address li div').click(function(){
		$('.user-address li div').removeClass('on')
		$(this).addClass('on')
	})
	
	var bo = true;
	$('.cart .triggle').click(function(){
		if(bo){
			$('.cart .shop-down li').css({'display':"block"})
			bo = false;
		}else{
			console.log(123)
			$('.cart .shop-down li').css({'display':"none"})
			bo = true;
		}
		
	})
	var userData = JSON.parse(localStorage.getItem('loginData')),
		name=null;
		

		if(userData !=null){
			name = userData.user;
			$("#userLogin").html(name)
			$("#userLogin").css({'color':'#000',"text-decoration":"none"})
			$("#userLogin").attr("href","user.html")
			$('#userRegister').html("安全退出")
			$("#userRegister").attr("href","login.html")
		}else{
			$("#userLogin").html("请登录")
			$("#userLogin").css({'color':'#4d0398',"text-decoration":"underline"})
			$("#userLogin").attr("href","login.html")
			$('#userRegister').html("免费注册")
			$("#userRegister").attr("href","register.html")
		}
	$("#userRegister").click(function(){
		console.log(123)
		if($('#userRegister').html() =="安全退出" ){
			localStorage.removeItem("loginData");
			$('#userRegister').html("免费注册")
			$("#userRegister").attr("href","login.html")
			$("#userLogin").html("请登录")
			$("#userLogin").css({'color':'#4d0398',"text-decoration":"underline"})
			$("#userLogin").attr("href","login.html")
		}else{
			$("#userRegister").attr("href","register.html")
		}
		
	})
})