$(function(){
	$('.tab table tr td.defalut a').click(function(){
		if(!$(this).hasClass("active")){
			$('.tab table tr td.defalut a').removeClass('active').addClass('no')
			$(this).addClass('active')
		}
	})
	$('.tab table tr td.defalut').mouseover(function(){
		$(this).find('a').removeClass('no')
	})
	$('.tab table tr td.defalut').mouseout(function(){
		if(!$(this).find('a').hasClass('active')){
			$(this).find('a').addClass('no')
		}
	})
	$('.form-group textarea').focus(function(){
		
		if($(this).text() =='请如实填写详细收货地址' ){
			console.log(123)
			$(this).text('');
		}
	})
	$('.form-group textarea').blur(function(){
		console.log(456)
		if($(this).text() =='' ){
			$(this).text('请如实填写详细收货地址');
		}
	})
	$.getScript("js/sheng.js",function(respons,status,xhr){
		console.log(status)
		if(status == "success"){
			for(var i=0;i<sheng.length;i++){
				$("<option/>").val(sheng[i].ProID).text(sheng[i].name).appendTo("#sheng");
			}
			/*$.getScript("js/city.js",function(responsd,status,xhr){
				if(status == "success"){
					$("#sheng").change(function(){
						$("#city >option:gt(0)").remove();
						var val = $(this).val();
						var Array = [];
						for(var i=0;i<city.length;i++){
							if(city[i].ProID == val){
								Array.push(city[i]);
							}
						}
						for(var i=0;i<Array.length;i++){
							$("<option/>").val(Array[i].ProID).text(Array[i].name).appendTo("#city");
						}
					})
				}
			})*/
		}
	})
	$("#sheng").change(function(){
		var val = $(this).val();
		$.getScript("js/city.js",function(responsd,status,xhr){
			$("#city >option:gt(0)").remove();
			if(status == "success"){
				var Array = [];
				for(var i=0;i<city.length;i++){
					if(city[i].ProID == val){
						Array.push(city[i]);
					}
				}
				for(var i=0;i<Array.length;i++){
					$("<option/>").val(Array[i].CityID).text(Array[i].name).appendTo("#city");
				}
			}
		})
	})
	$("#city").change(function(){
		var val = $(this).val();
		console.log(val)
		$.getScript("js/xian.js",function(responsd,status,xhr){
			$("#xian >option:gt(0)").remove();
			if(status == "success"){
				var Array = [];
				for(var i=0;i<xian.length;i++){
					if(xian[i].CityID == val){
						Array.push(xian[i]);
					}
				}
				for(var i=0;i<Array.length;i++){
					$("<option/>").val(Array[i].Id).text(Array[i].DisName).appendTo("#xian");
				}
			}
		})
	})

})