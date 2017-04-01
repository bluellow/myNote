$(function() {
	//总价  = 单价 * 数量
	$('.reduce').click(function() {
		var input = $(this).prev().prev();
		var val = input.val();
		val--;
		if(val < 1){
			return false;
		}
		input.val(val)
		get_all_money();

	});
	$('.add').click(function() {
		var input = $(this).prev();
		var val = input.val();
		var all_num = $('.stock font').html();
		val++;
		if(val > all_num){
			return false;
		}
		input.val(val)
		get_all_money();

	});
	$('.num').blur(function() {
		//Math.ceil(5/2)
		var val = $(this).val();//拿到输入数量
	
		// $(this).val(parseInt(val));
		$(this).val(Math.ceil(val));
		var all_num = $('.stock font').html();//总数量

		if(val > all_num){
			$(this).val(all_num);
		}else if(val < 1){
			$(this).val(1);
		}
		get_all_money();
	});

	function get_all_money(){
		//总价  = 单价 * 数量
		//单价
		var price = $('.price').html() * 100;
		var num = $('.num').val();
		var allprice = price * num / 100;
		$('.allprice').html(allprice.toFixed(2));
	}
	get_all_money();
})