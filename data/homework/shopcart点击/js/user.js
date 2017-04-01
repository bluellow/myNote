$(function(){
	var liLen = $(".pro-collection ul li").length,
		liWidth = $(".pro-collection ul li").outerWidth(true),
		current = 0,
		bool = true;
		ulWid = liLen * liWidth;
	$(".pro-collection ul").css({'width':ulWid+"px"});
	$(".sleft").click(function(){
		if(bool){
			bool = false;
			if(current >=5){
				current = 0
			}else{
				++current;
			}
			$(".pro-collection ul").animate({'marginLeft':-current*liWidth+'px'},function(){
				bool = true;
			});
		}
	})
	$(".sright").click(function(){
		if(bool){
			bool = false;
			if(current <=0){
				current = 0
			}else{
				--current;
			}
			$(".pro-collection ul").animate({'marginLeft':-current*liWidth+'px'},function(){
				bool = true;
			});
		}
	})
})
