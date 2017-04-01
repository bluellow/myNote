$(function(){
	var bodyHei = $('body').height();
	$('.pay-success').height(bodyHei);
	$('.pay-failure').height(bodyHei);
	
	$('.pay-btn').click(function(){
		if($('.bank-details input').val() ==''){
			alert('请填写卡号')
			return false
		}
		var bool = confirm('确认支付');
		if(bool){
			$('.pay-success').css({'display':'block'})
		}else{
			$('.pay-failure').css({'display':'block'})
		}
	})
	for(var i=10; i<$('.bank-select ul li').length; i++){
		$('.bank-select ul li').eq(i).hide()
	}
	$('.bank-select .more-selete').click(function(){
		var bool;
//		if(){
//			bool = true;
//		}else{
//			bool = false;
//		}
		if($('.bank-select ul li').eq(10).is(':hidden')){
			bool = true;
		}else{
			bool = false;
		}
		if(bool){
			for(var i=10; i<$('.bank-select ul li').length; i++){
				$('.bank-select ul li').eq(i).show();
			}
		}else{
			for(var i=10; i<$('.bank-select ul li').length; i++){
				$('.bank-select ul li').eq(i).hide();
			}
		}
	})
	$('.reback').click(function(){
		$('.pay-failure').css({'display':'none'})
	})
	$('.bank-select li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
	$('.pay-way span').click(function(){
		$(this).addClass('on').siblings().removeClass('on')
		if($(this).index() == 0){
			$('.bank-select').css('display','block');
			$('.payment').css('display','none');
		}else{
			$('.payment').css('display','block');
			$('.bank-select').css('display','none');
		}
	})
})