
$(function(){
	$(".lkinput .text").each(function(){
		var $thisValue = $(this).val();
		var $this = $(this);
		if($thisValue==""){
			$this.siblings("i").show();
		}
		else{
			$this.siblings("i").hide();
		}
	})
	$(".lkinput .text").focus(function(){
		$(this).siblings("i").hide();
	})
	$(".lkinput .text").blur(function(){		
		var $thisValue = $(this).val();//获取input里面的value值(用户填写的值)
		var $this = $(this);
		if($thisValue==""){
			$this.siblings("i").show();	//input里面所填值为空则显示i的默认文字
		}
		
	})
	//下拉菜单
	$(".navul .navli01").hover(function(){
		$(this).addClass("cur");
	},function(){
		$(this).removeClass("cur");
	})
	//下拉菜单里面选项卡切换
	$(".xlnavbox .tab .tab01").hover(function(){
		var i = $(this).index();
		$(this).addClass("dis").siblings("div").removeClass("dis");
		$(".xlnavbox .tabNr01").eq(i).show().siblings(".tabNr01").hide();
	})
	//banner
	//新闻资讯
	$(".newBox .nr li").hover(function(){
		$(this).addClass("gre");
	},function(){
		$(this).removeClass("gre");
	})
	$(".footnav li.noNavi").hover(function(){
	  	$(".footnav li").removeClass("cur");
		$(".footBox .nr").stop(false,true).slideUp();
	})
	$(".footnav .botnav").hover(function(){
		var i = $(this).index(".footnav .botnav");
		$(this).addClass("cur").siblings("li").removeClass("cur");
		$(".footBox .nr").eq(i).stop(false,true).slideDown().siblings(".nr").stop(false,true).slideUp();
	})
	//首页产品切换
	$(".icase .tab a").hover(function(){
		var i = $(this).index();
		$(this).addClass("on").siblings("a").removeClass("on");
		$(".icase .pro").eq(i).show().siblings(".pro").hide();
	})
	
})

//选项卡切换
$(function(){
	$(".cpzxBox .tab li").click(function(){
		var i = $(this).index();
		$(this).addClass("on").siblings("li").removeClass("on");
		$(".tabNrbox .tabnr").eq(i).show().siblings(".tabnr").hide();
	})

	
})

