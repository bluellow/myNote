
$(function(){
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
	$('.proAdd').click(function(){
		console.log(123)
		var num=1;
		for(var x = 0;x<proList.length;x++){ 
			if(proList[x].title=="吉蒂可爱水晶手链"){ 
				proList[x].number  = parseInt(proList[x].number)+parseInt(num)
				localStorage.setItem('Shop_Cart', JSON.stringify(proList));
				return false;
			}
		}
		localData("吉蒂可爱水晶手链",599,'金色',num,'images/png/pro.png')
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
})
