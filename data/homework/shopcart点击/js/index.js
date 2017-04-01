$(function(){
	var bannerLen = $('.index-banner .banner li').length;
	$('.circle li').remove();
	for(var i=0; i<bannerLen; i++){
		$('.circle').append('<li></li>');
		$('.circle li').eq(0).addClass("active");
	}
	
	var banner = $('.circle li');
	var cursor = 0;
	banner.each(function(i,ele){
		$(this).mouseover(function(){
			$(this).addClass('active').siblings().removeClass('active');
//			banner.not(this).removeClass("active");
			$('.banner li').stop(true,true).eq(i).fadeIn(500);
			$('.banner li').stop(true,true).not($('.banner li').eq(i)).fadeOut(500);
			cursor = i;
		})
	})
	$('.banner').mouseover(function(){
		clearInterval(lun);
	})
	
	var lun = setInterval(function(){
		if(cursor>bannerLen){
			cursor = 0;
		}
		banner.eq(cursor).trigger('mouseover');
		cursor++;
	},1500)
	
//	$('.banner').mouseout(function(){
//	console.log(123);
//	setInterval(lun,1000);
//	})
})
			