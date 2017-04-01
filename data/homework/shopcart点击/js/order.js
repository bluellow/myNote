$(function(){
	$('.order-list .delete').click(function(){
		var en = confirm('你确认删除此订单吗')
		if(en){
			$(this).parent().parent().remove()
		}else{
			return false;
		}

	})
})
