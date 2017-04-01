$(function(){
	//放大镜
	
	var imgSrc = function(imgsrc){
		$("#box").html("<img />");
		$("#box").css({"display":"none"})
		$("#box img").attr("src",imgsrc).css({"position":"absolute",'width':'1122px'})
		$("#pro-left-img").mouseover(function(){
			$("#box").stop(true,true).fadeIn(300)
			$("#box1").stop(true,true).fadeIn(300)
		})
		$("#pro-left-img").mouseout(function(){
			$("#box").stop(true,true).fadeOut(300)
			$("#box1").stop(true,true).fadeOut(300)
		})
		$("#pro-left-img").mousemove(function(e){
			var imgX=e.pageX;
			var imgY=e.pageY;
			var smllLeft=$("#pro-left-img").offset().left;
			var smllTop=$("#pro-left-img").offset().top;
			var box1Left=imgX-smllLeft-$("#box1").innerWidth()/2
			var box1Top=imgY-smllTop-$("#box1").innerHeight()/2
			if(box1Left<0){
				box1Left=0;
			}else if(box1Left>($("#pro-left-img").innerWidth()-$("#box1").innerWidth())){
				box1Left=$("#pro-left-img").innerWidth()-$("#box1").innerWidth();
			}
			if(box1Top<0){
				box1Top=0;
			}else if(box1Top>($("#pro-left-img").innerHeight()-$("#box1").innerHeight())){
				box1Top=$("#pro-left-img").innerHeight()-$("#box1").innerHeight()
			}
			$("#box1").css({left:box1Left+"px",top:box1Top+"px"})
			/*var percentX=box1Left / ($("#pro-left-img").innerWidth()-$("#box1").innerWidth());
			var percentY=box1Top / ($("#pro-left-img").innerHeight()-$("#box1").innerHeight());
			$("#box img").css({left:-percentX * ($("#box img").innerWidth() - $("#box").innerWidth()) + "px",top:-percentY * ($("#box img").innerHeight() - $("#box").innerHeight()) + "px"})*/
			
			$("#box img").css({left:-box1Left*3+"px",top:-box1Top*3+"px"})
			var percent = $("#box img").innerWidth() / $("#pro-left-img img").innerWidth();
			var box1W = $("#box1").innerWidth();
			var box1H = $("#box1").innerHeight();
			$("#box").css({"width":percent*box1W+"px","height":percent*box1H+"px"})
			$("#box img").css({left:-box1Left*percent+"px",top:-box1Top*percent+"px"})
		})
	}
	
	imgSrc('images/pro_details01.jpg');
	
	
	//颜色选择
	$('.color-select li').click(function(){
		$('.color-select li').removeClass('active').find('img').removeClass('active')
		$(this).addClass('active').find('img').addClass('active')
	})
	//加减
	$('.number .add').click(function(){
		var num = $('.number .num').val();
		if(num >= 99){
			num = 99
		}else{
			++num;
		}
		$('.number .num').val(num)
	})
	$('.number .reduce').click(function(){
		var num = $('.number .num').val();
		if(num <= 1){
			num = 1
		}else{
			--num;
		}
		$('.number .num').val(num)
	})
	//输入框验证
	$('.number .num').change(function(){
		var num = $(this).val();
		if(isNaN(num)){
			num = 1;
			console.log(num)
		}else if(num >= 525){
			num = 525;
		}else if(num <=1){
			num = 1
		}
		num = Math.round(num);
		$('.number .num').val(num)
	})
	
	
	$('.main-right .top-title span').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).index() == 0){
			$('.main-details .pro_details').css('display','block');
			$('.main-details .comment_details').css('display','none');
			$('.content .page').css('display','none');
		}else{
			$('.main-details .comment_details').css('display','block');
			$('.main-details .pro_details').css('display','none');
			$('.content .page').css('display','block');
		}
	})
	//产品
	$('.list-box li').click(function(){
		var src = $(this).find('img').attr('src');
		$(".pro-left-img img").attr('src',src)
		imgSrc(src)
	})
	var liLen = $(".list-box li").length,
		liWidth = $(".list-box li").outerWidth(true),
		current = 0,
		bool = true;
		
		$(".list-box ul").css({'width':liLen * liWidth+"px"})
	$(".pro-left").click(function(){
		if(bool){
			bool = false;
			if(current >=4){
				current = 0
			}else{
				++current;
			}
			$(".list-box ul").animate({'marginLeft':-current*liWidth+'px'},function(){
				bool = true;
			});
		}
	})
	$(".pro-right").click(function(){
		if(bool){
			bool = false;
			if(current <=0){
				current = 0
			}else{
				--current;
			}
			$(".list-box ul").animate({'marginLeft':-current*liWidth+'px'},function(){
				bool = true;
			});
		}
	})
	
	
	//存储商品
	var proLocal = localStorage.getItem("Shop_Cart"),
		proList = [],
		proListJson = JSON.parse(proLocal),
		len;
		if(proListJson != null){
			len = proListJson.length
		}
		for(var i=0; i<len; i++){
			proList.push(proListJson[i])
		}
		
	var badgelen = 0;	
	$('.shop .append').click(function(){
		var pro_title = $('.pro-top-right .title').html(),
			pro_price = $('.pro-top-right .price').html(),
			pro_color = $('.pro-top-right .color-select .active img').attr('color'),
			pro_images = $('.pro-top-left .pro-left-img img').attr('src'),
			pro_number = $('.pro-top-right .num').val();
		for(var x = 0;x<proList.length;x++){ 
			if(pro_color == proList[x].color&&pro_title == proList[x].title){ 
				proList[x].number  = parseInt(proList[x].number)+parseInt(pro_number)
				if(proList[x].number>526){
					proList[x].number = 525;
				}
				localStorage.setItem('Shop_Cart', JSON.stringify(proList));
				return false;
			}
		}
		localData(pro_title,pro_price,pro_color,pro_number,pro_images)
		var badge = JSON.parse(localStorage.getItem("Shop_Cart"))
		if(badge != null){
			$('.badge').html(badge.length)
		}else{
			$('.badge').html('0')
		}
	})
	
	
	function localData(title,price,color,number,images){
		var product = {
			title:title,
			price:price,
			color:color,
			number:number,
			images:images
		}
		proList.push(product)
		localStorage.setItem('Shop_Cart', JSON.stringify(proList));
	}
	$('.list-box li').click(function(){
		$('.list-box li').removeClass('active').find('img').removeClass('active')
		$(this).addClass('active').find('img').addClass('active')
	})
	
})