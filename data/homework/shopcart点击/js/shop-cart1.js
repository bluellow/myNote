$(function() {
	//总价  = 单价 * 数量
	$('.reduce').click(function() {
		var input = $(this).next();
		var val = input.val();
		val--;
		if(val < 1){
			return false;
		}
		input.val(val);

		get_this_money($(this),val);
		get_total_price();
	});
	$('.add').click(function() {
		var input = $(this).prev();
		var val = input.val();
		// var all_num = $('.stock font').html();
		val++;
		// if(val > all_num){
		// 	return false;
		// }
		input.val(val)
		get_this_money($(this),val);
		get_total_price();
	});
	$('.num').blur(function() {
		//Math.ceil(5/2)
		var val = $(this).val();//拿到输入数量
	
		// $(this).val(parseInt(val));
		
		val = Math.ceil(val);
		$(this).val(val);

		var all_num = $('.stock font').html();//总数量

		if(val > all_num){
			$(this).val(all_num);
		}else if(val < 1){
			$(this).val(1);
		}
		get_this_money($(this),val);
		get_total_price();
	});


	/**
	 * [get_this_money 得到当前对象的总价]
	 * @param  {[type]} obj [当前对象]
	 * @param  {[type]} val [数量]
	 * @return {[type]}     [得到当前对象的总价]
	 */
	function get_this_money(obj,val){
		//总价  = 单价 * 数量
		//单价
		var parent = obj.parent().parent();
		var price = parent.find('.price').html();
		var AllPrice = (price * val).toFixed(2);
		parent.find('.total').html(AllPrice);
	}
	// get_this_money();
	// 
	// 
	$('.all-check').click(function() {
		//要先知道 我当前状态是否选中
		// alert($(this).is(':checked'));
		if($(this).is(':checked')){
			// 选中
			// $('.check-box').attr('checked',true);
			$('.check-box,.all-check').prop('checked',true);//prop 改变元素属性 改变原来标签自带的属性
			// $('.check-box').attr('checked','checked');
			get_total_price();
		}else{
			$('.check-box,.all-check').prop('checked',false);
			get_total_price();
		}

	});
	$('.check-box').click(function() {
		if(!$(this).is(':checked')){
			$('.all-check').prop('checked',false);	
		}else{
			var pig = 0;
			var len = $('.check-box').length;
			for (var i = 0; i < len; i++) {
				if(!$('.check-box').eq(i).is(':checked')){
					pig = 1;
				}
			}
			if(pig == 0){
				$('.all-check').prop('checked',true);
			}
		}
		get_total_price();
	});

	//传入li对象
	//return allPriceStr字符串
	function get_li_money(liObj,val){
		//总价  = 单价 * 数量
		//单价
		var price = Number(liObj.find('.price').html());

		var allPrice = price * Number(val);

		return allPrice
	}


	//初始化每个商品项的total
	function init_unit_total(){
		var total = 0;
		var len =  $('.check-box').length;
		var num = 0;
		var unitPrice = 0;
		for (var i = 0; i < len; i++) {
			num   = Number($('.content .shop ul li').eq(i).find(".number-div input").val());
			unitPrice = Number($('.content .shop ul li ').eq(i).find("#price").text());
			if(isNaN(unitPrice) || unitPrice == 0 || isNaN(num)) {
				alert("出错")
				return;
			}
			total = (num * unitPrice).toFixed(2);
			$('.content .shop ul li ').eq(i).find(".total").html(total);
		}
	}



	//结算金额
	function get_total_price(){
		var total = 0;
		var len =  $('.check-box').length;
		var num = 0;
		var unitPrice = 0;
		var goodsNum =  0;//已选商品总量
		var isCheckChanged = false; //选项是否有边
		for (var i = 0; i < len; i++) {
			if($('.check-box').eq(i).is(':checked')){
				num = Number($('.content .shop ul li').eq(i).find(".number-div input").val());
				goodsNum += num;
				total += get_li_money($('.content .shop ul li ').eq(i),num);
				isCheckChanged = true;
			}
		}
		if(isCheckChanged){
			$('.cart-bottom').find(".check-num").html(goodsNum);
			$('.cart-bottom').find(".maxtotal").html(total.toFixed(2));
		}else{
			$('.cart-bottom').find(".check-num").html(0);
			$('.cart-bottom').find(".maxtotal").html(0);
		}
	}


	$('.content .shop ul li').find(".delete").click(function () {
		$(this).parent().parent().remove();
		get_total_price();
	});

	init_unit_total();
	get_total_price();
})