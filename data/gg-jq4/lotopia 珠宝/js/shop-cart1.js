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

		//当我减价 判断我当前是否选中 选中 算总价
		if(parent.find('.check-box').is(':checked')){
			get_all_price();
		}
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
		}else{
			$('.check-box,.all-check').prop('checked',false);			
		}
		get_all_price();
	});
	$('.check-box').click(function() {
		if(!$(this).is(':checked')){
			$('.all-check').prop('checked',false);	
		}else{
			var pig = 0;
			//子check-box 选中 找我兄弟 判断他们是否也选中 他们也都选中 父级全选
			// 再循环外面 定义一个标记 var pig = 0;
			// 循环中 子check-box 如果有一个 没选中 父级就不用选 这时候 做一个标记 pig = 1
			// 循环后 判断标记是否改变 不改变 父级选中
			// $('.check-box').each(function(i) {
			// 	if(!$('.check-box').eq(i).is(':checked')){
			// 		pig = 1;
			// 	}
			// });
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
		get_all_price();
	});

	//删除购物车
	$('.delete').click(function() {
		// alert(13213)
		var parent = $(this).parent().parent();

		var price = parent.find('.price').html() * 100;
		var num = parent.find('.num').val();
		var count = $('.check-num').html();
		var all_price = $('.maxtotal').html() * 100;
 		
		//删除的时候 判断当前的checkbox 是否选中 选中 执行算总价
		// if(parent.find('.check-box').is(':checked')){
		//  parent.remove();
		// 	get_all_price();
		// }
		//删除的时候 判断当前的checkbox 是否选中 选中 让总价减当前列的总价
		if(parent.find('.check-box').is(':checked')){
			count = count - num;
			all_price = all_price - price;
			all_price = all_price / 100;
			$('.check-num').html(count);
			$('.maxtotal').html(all_price.toFixed(2));
		}
		parent.remove();
	});

	//deleteCheck 多选删除 购物车
	//
	$('.deleteCheck').click(function() {
		var len = $('.check-box').length;
		for (var i = len-1; i >= 0; i--) {
			// alert(i)
			var this_check = $('.check-box').eq(i);
			if(this_check.is(':checked')){
				this_check.parent().parent().parent().remove();
			}
		}
		// get_all_price();
		// 选中 都被删除了
		// 没选 不用删除 也不用计算价格
		$('.check-num').html(0);
		$('.maxtotal').html(0.00);
	});

	function get_all_price(){
		// console.log(1)
		//总价 = 选中的每一列 的 总价相加
		var len = $('.check-box').length;
		var all_price = count = 0;
		for (var i = len-1; i >= 0; i--) {
			//判断循环中的列 是否选中 选中 找当前列总价
			var this_check = $('.check-box').eq(i);
			if(this_check.is(':checked')){
				//选中
				var parent = this_check.parents('li')
				// console.log(this_check.parents('li').find('.total').html());
				all_price += parent.find('.total').html() * 100;//总价
				// count++;
				count += parent.find('.num').val() * 1;
			}
		}
		all_price /= 100;
		$('.maxtotal').html(all_price.toFixed(2));
		$('.check-num').html(count);

	}
	
})