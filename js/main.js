/**
 * Created by Administrator on 2017/3/27.
 */
$(document).ready(function(){
    var accordionColorNameArr = [""];
    //加载目录
    $.getJSON("data/catalog.json",function(data){
        // 初始化
        var content = data.content;
        var $accordion = $("#accordion");
        var slideSpeed = 300;
        $accordion.empty();

        $.each(content,function(i,val){
            var $item = $("<li></li>");
            $item.appendTo($accordion).addClass("item");
            $item.append("<div>"+val[0].name + "</div>");

            var $submenu = $("<ul></ul>");
            $submenu.appendTo($item).addClass("submenu");
            for(var j = 1;j<val.length;j++){
                $submenu.append("<li><a href='javascript:void(0);' data-src="+  val[j].url+ ">" +
                   val[j].name +"</a></li>");
                $submenu.eq()
            }
            $submenu.hide();
        //
        })
    });


    $("#accordion").on("click",".item > div",function(slideSpeed){
       var self = $(this);
        var $selfparent = self.parent();
        $selfparent.children(".submenu").slideToggle(slideSpeed);
        $selfparent.siblings(".active").children("ul").slideToggle(slideSpeed);
        $selfparent.siblings(".active").toggleClass("active");
        $selfparent.toggleClass("active");
    });

    function showexam(obj){
        var href = $(obj).data("src");
        var html = "<iframe id='frames' src='"+href+"'  style='position:bolo;width:100%;height:100%;top:0;left:0'/>";
        document.getElementById("contentbox").innerHTML = html;
    }


    $("#accordion").on("click",".item  .submenu li a",function(slideSpeed){
        showexam(this);
    })

    var isToolbarHidden = false
    $("#fullscreenbtn").click(function(){
        if(!isToolbarHidden){
            isToolbarHidden = !isToolbarHidden;
            var toolbarWidth = parseInt($(".toolbar").css("width"))
            var sliderWidth = parseInt($(".slider").css("width"))
            $(".toolbar").animate({"marginLeft":-(350)+ "px"},"slow");
        }else{
            isToolbarHidden = !isToolbarHidden;
            var toolbarWidth = parseInt($(".toolbar").css("width"))
            var sliderWidth = parseInt($(".slider").css("width"))
            $(".toolbar").animate({"marginLeft":0+ "px"},"slow");
        }


    })
});