angular.module('myApp',[])
	.controller('cartController',function($scope){
		$scope.proList = JSON.parse(localStorage.getItem('Shop_Cart'))
		$scope.inputValue = []
		if($scope.proList){
			for(var i=0; i<$scope.proList.length;i++){
				$scope.inputValue.push(parseInt($scope.proList[i].number))
			}
		}
})
$(function(){
	var proList = JSON.parse(localStorage.getItem('Shop_Cart'))
	var cont = function(){
		var len1 = $('.shop ul li input[type=checkbox]').length;
		var len2 = $('.shop ul li input[type=checkbox]:checked').length;
		return len1-len2;
	}
	var total = function(){
		var check = $('.shop ul li input[type=checkbox]:checked');
		var a = 0;
		for(var i=0; i<check.length; i++){
			a+=parseInt(check.eq(i).parents().siblings('.total-div').find('.total').text());
		}
		$('.bottom-right .span .maxtotal').text(a.toFixed(2))
	}
	//加减
	$('.number-div .add').click(function(){
		var num = parseInt($(this).parent().find('input').val());
		if(num >= 525){
			num = 525
		}else{
			++num;
		}
		$(this).siblings('.num').val(num)
		var div4 = parseInt($(this).parent().siblings('.price-div').find('.price').text());
		$(this).parent().siblings('.total-div').find('.total').text(div4*num)
		updata(this);
		total();
	})
	$('.number-div .reduce').click(function(){
		var num = parseInt($(this).parent().find('input').val());
		if(num <= 1){
			num = 1
		}else{
			--num;
		}
		$(this).siblings('.num').val(num)
		var div4 = parseInt($(this).parent().siblings('.price-div').find('.price').text());
		$(this).parent().siblings('.total-div').find('.total').text(div4*num)
		updata(this);
		total();
	})
	//输入框验证
	$('.number-div .num').change(function(){
		var num = $(this).parent().find('input').val();
		if(isNaN(num)){
			num = 1;
		}else if(num >=525){
			num = 525;
		}else if(num <=1){
			num = 1
		}
		num = Math.round(num);
		$(this).siblings('.num').val(num)
		var div4 = parseInt($(this).parent().siblings('.price-div').find('.price').text());
		$(this).parent().siblings('.total-div').find('.total').text(div4*num)
		redata(this)
		total();
	})
	
	$('.icheck #check-all').click(function(){
		if($(this).is(':checked')){
			$('.shop .check-div input[type=checkbox]').prop("checked","checked");
			$('.shop-name .shop-check').prop("checked","checked");
			$('.icheck #all-check').prop("checked","checked")
			checklen();
			total();
		}else{
			$('.shop .check-div input[type=checkbox]').removeAttr("checked");
			$('.shop-name .shop-check').removeAttr("checked");
			$('.icheck #all-check').removeAttr("checked")
			checklen();
			total();
		}
	})
	$('.icheck #all-check').click(function(){
		if($(this).is(':checked')){
			$('.shop .check-div input[type=checkbox]').prop("checked","checked");
			$('.shop-name .shop-check').prop("checked","checked");
			$('.icheck #check-all').prop("checked","checked")
			checklen();
			total();
		}else{
			$('.shop .check-div input[type=checkbox]').removeAttr("checked");
			$('.shop-name .shop-check').removeAttr("checked");
			$('.icheck #check-all').removeAttr("checked")
			checklen();
			total();
		}
	})
	
	$('.shop .check-div input[type=checkbox]').bind("click",function(){
		if(!cont()){
			$('.icheck #check-all').prop("checked","checked");
			$('.shop-name .shop-check').prop("checked","checked");
			$('.icheck #all-check').prop("checked","checked")
			checklen();
		}else{
			$('.icheck #check-all').removeAttr("checked");
			$('.shop-name .shop-check').removeAttr("checked");
			$('.icheck #all-check').removeAttr("checked")
			checklen();
		}
		total();
	})
	$('.shop-name .shop-check').click(function(){
		if($(this).is(':checked')){
			$('.shop .check-div input[type=checkbox]').prop("checked","checked");
			if(!cont()){
				$('.icheck #check-all').prop("checked","checked");
				$('.icheck #all-check').prop("checked","checked")
			}else{
				$('.icheck #check-all').removeAttr("checked");
				$('.icheck #all-check').removeAttr("checked")
			}
			checklen();
			total();
		}else{
			$('.shop .check-div input[type=checkbox]').removeAttr("checked");
			if(!cont()){
				$('.icheck #check-all').prop("checked","checked");
				$('.icheck #all-check').prop("checked","checked")
			}else{
				$('.icheck #check-all').removeAttr("checked");
				$('.icheck #all-check').removeAttr("checked")
			}
			checklen();
			total();
		}
	})
	var checklen = function(){
		var len = $('.shop ul li input[type=checkbox]:checked').length;
		$('.bottom-right .span .check-num').text(len)
	}
	
	$('.operation-div .delete').click(function(){
		var en = confirm('确认删除吗')
		var index = $(this).parent().parent().index();
		if(en){
			$(this).parent().parent().remove(); 
			proList.splice(index,1);
			localStorage.setItem("Shop_Cart",JSON.stringify(proList));
		}
		if(!cont()){
			$('.icheck #check-all').prop("checked","checked");
			$('.shop-name .shop-check').prop("checked","checked");
			$('.icheck #all-check').prop("checked","checked")
		}else{
			$('.icheck #check-all').removeAttr("checked");
			$('.shop-name .shop-check').removeAttr("checked");
			$('.icheck #all-check').removeAttr("checked")
		}
		checklen();
		total()
		
	})
	$('.bottom-left .deleteCheck').click(function(){
		var deleteC = $('.shop ul li input[type=checkbox]:checked');
		var delen = deleteC.length;
		if(delen){
			var en = confirm('确认删除吗')
			if(en){
				var index = deleteC.parent().parent().index();
				deleteC.parent().parent().parent().remove(); 
				proList.splice(index,delen);
				localStorage.setItem("Shop_Cart",JSON.stringify(proList));
			}
		}
		if(!cont()){
			$('.icheck #check-all').prop("checked","checked");
			$('.icheck #all-check').prop("checked","checked")
			$('.shop-name .shop-check').prop("checked","checked");
		}else{
			$('.icheck #check-all').removeAttr("checked");
			$('.shop-name .shop-check').removeAttr("checked");
			$('.icheck #all-check').removeAttr("checked")
		}
		checklen();
		total()
	})
	var calc = function(){
		var shopV = $('.shop li');
			for(var i=0; i<shopV.length; i++){
				var price = 0,
					number = 0;
				price = shopV.eq(i).find('.price').text();
				number = shopV.eq(i).find('.num').val();
				shopV.eq(i).find('.total').text(price*number)
			}
			
	}
	calc();
	var updata = function(ele){
		var upNum = parseInt($(ele).parent().find('input').val()),
			index = $(ele).parent().parent().index();
			for(var i=0; i<proList.length; i++){
				if(index == i){
					proList[i].number = upNum
					localStorage.setItem('Shop_Cart', JSON.stringify(proList));
				}
			}
	}
	var redata = function(ele){
		var upNum = $(ele).val(),
			index = $(ele).parent().parent().index();
			if(isNaN(upNum)){
				upNum = 1;
			}else if(upNum>=525){
				upNum = 525;
			}else if(upNum <=1){
				upNum = 1
			}
			upNum = Math.round(upNum);
			$(ele).val(upNum)
			console.log(upNum,index)
			for(var i=0; i<proList.length; i++){
				if(index == i){
					proList[i].number = upNum
					localStorage.setItem('Shop_Cart', JSON.stringify(proList));
				}
			}
	}
	
	
})