// JavaScript Document
$(function(){	
	var widthW = Math.ceil($("body").width()*0.85-14);
	$(".maxW").width(widthW);
	$("#content_right").width(widthW-$("#content_left").width()-26);
	//左侧二级菜单收缩
	$("#contract").click(function(){
		//$(".content_left").animate({width:'300px'},"slow");
			$("#content_left").hide();
			$("#open").show();
			$("#content_right").width($("#content_right").width()+200);
	})
	//左侧二级菜单展开	
	$("#open").click(function(){
		$("#open").hide();
		$("#content_left").show();
		$("#content_right").width(widthW-$("#content_left").width()-26);	
	})
	window.onresize= function(){
		$(".maxW").width(widthW);
		if($("#content_left").is(":hidden")){
			$("#content_right").width(widthW-10);			
		}else{
			$("#content_right").width(widthW-$("#content_left").width()-26);
		}
		
	}
	/*
	//字体变小
	$("#size_small").click(function(){
		$("#size_big").css("backgroundPosition","-274px 5px");
		var head_right_size = parseFloat($(".head_right").css("fontSize"));
		var menu_size = parseFloat($(".menu").css("fontSize"));
		var content_left_size = parseFloat($(".content_left").css("fontSize"));
		var selectMenu_size = parseFloat($(".selectMenu").css("fontSize"));
		var i_foot_size = parseFloat($(".i_foot").css("fontSize"));
		if(menu_size <= 12){
			$(this).css("backgroundPosition","-242px 5px");
			head_right_size = 10;
			menu_size = 12;
			content_left_size = 12;
			selectMenu_size = 14;
			i_foot_size = 10;
		}else{
			$(this).css("backgroundPosition","-208px 5px");	
			head_right_size -= 2;
			menu_size -= 2 ;
			content_left_size -= 2;
			selectMenu_size -= 2;
			i_foot_size -= 2;	
		}		
		$(".head_right").css("fontSize",head_right_size);
		$(".menu").css("fontSize",menu_size);
		$(".content_left").css("fontSize",content_left_size);
		$(".selectMenu").css("fontSize",selectMenu_size);
		$(".i_foot").css("fontSize",i_foot_size);
		
	})
	//字体变大
	$("#size_big").click(function(){
		$("#size_small").css("backgroundPosition","-208px 5px");	
		var head_right_size = parseFloat($(".head_right").css("fontSize"));
		var menu_size = parseFloat($(".menu").css("fontSize"));
		var content_left_size = parseFloat($(".content_left").css("fontSize"));
		var selectMenu_size = parseFloat($(".selectMenu").css("fontSize"));
		var i_foot_size = parseFloat($(".i_foot").css("fontSize"));
		
		if(head_right_size >= 14){
			alert(222);
			$(this).css("backgroundPosition","-305px 5px");
			head_right_size = 14;
			menu_size = 16;
			content_left_size = 16;
			selectMenu_size = 18;
			i_foot_size = 14;
			
		}else{
			$(this).css("backgroundPosition","-274px 5px");
			head_right_size += 2;
			menu_size += 2 ;
			content_left_size += 2;
			selectMenu_size += 2;
			i_foot_size += 2;
		}	
		$(".head_right").css("fontSize",head_right_size);
		$(".menu").css("fontSize",menu_size);
		$(".content_left").css("fontSize",content_left_size);
		$(".selectMenu").css("fontSize",selectMenu_size);
		$(".i_foot").css("fontSize",i_foot_size);
		
	})*/
	//换肤
	//alert(window.screen.avaiHeight)
	$("#body_bg").height($(window).height());
	$("#background").click(function(){
		$("#skin_container").show();
		$("#body_bg").show();
	})
	$("#body_bg").click(function(){
		$("#skin_container").hide();
		$("#body_bg").hide();	
	})
	$("#skin_container").find("li").click(function(){
		var n = $(this).index()
		if(n == 0){
			$(".index_box").css("background","#dbdbdb");
		}else{
			var str = "images/index_img/skins/"+n+".jpg";
			$(".index_box").css("background","url("+str+")");
		}
		$("#skin_container").find("li").removeClass("skinOn");
		$(this).addClass("skinOn");
		$("#skin_container").hide();
		$("#body_bg").hide();	
	})
})

//获取待协同作业数量
function getSupplyChainCount(){
	
	var weburl="jyrz/supply-chain-waiting/1/edit.json";
	var weburl1="jyrz/supply-chain-waiting/new.json";
	var count = 0;
	$.ajax({
		type: "GET",
		url: weburl1,
		dataType: "json",
		cache: false,
		success: function(data){
			
		},
		error: function(){
			// layer.alert("数据同步失败", 0); 
		}
	});
	$.ajax({
		type: "GET",
		url: weburl,
		dataType: "json",
		cache: false,
		async : false,
		success: function(data){
			if(data!=null&&data.count!=null&&data.count!=""){
				count = data.count;
			}
		},
		error: function(){
			// layer.alert("数据同步失败", 0); 
		}
	});
	
	return count;
}
//获取待处理作业数量
function getWaitCount(){
	
	var weburl="workflow/workflowengine.json";
	var count = 0;
	$.ajax({
		type:"GET",
		url:weburl,
		data:"tag=12",
		dataType:"json",
		async : false,
		cache : false,
		success:function(data){
			if(data!=null&&data.cout!=null&&data.cout!=undefined){
				count = Number(data.cout);
			}
		},
		error:function(){
			//layer.alert("数据加载失败,请及时联系管理员！",0);
		}
	});
	
	return count;
}

//获取供应链邀请作业数
function getChainInviteRecordCount(){
	var count = 0;
	$.ajax({
		type: "GET",
		url: "jyrz/supply-chain-invite/0/edit.json?tag=1",
		dataType: "json",
		cache: false,
		success: function(data){
			
		},
		error: function(){
			
		}
	});
	
	$.ajax({
		type: "GET",
		url: "jyrz/supply-chain-invite/0/edit.json?tag=2",
		dataType: "json",
		cache: false,
		success: function(data){
			if(data!=null&&data.count!=null&&data.count!=undefined){
				count = data.count;
			}
		},
		error: function(){
			
		}
	});
	
	return count;
}

//获取流动性预警数量
function getAlertLogNum(){
	var countYJ = 0;
	$.ajax({
		type : "get",
		dataType : "json",
		cache : false,
		async : false,
		dataType : "json",
		url : "dbalert/dbalert/new.json", // 提交到一般处理程序请求数据
		error : function() {
			//layer.alert("数据加载失败,请及时联系管理员！",0);
		},
		success : function(data) {
			countYJ = data.length;
		}
		
	});
	return countYJ;
	
}


function setCookie(key,value){
	var oDate = new Date();
	//oDate.setDate( oDate.getDate() + times);
	if(timeLength==""||timeLength == null||timeLength==undefined){
		document.cookie = key +'=' + value;
	}else{
		oDate.setDate( timeLength);
		document.cookie = key +'=' + value +';expires=' + oDate.toUTCString();
	}
	
}
function getCookie(key){
	var a = document.cookie.split('; ');
	for(var i=0;i<a.length;i++){
		var b = a[i].split('=');
		if( b[0] == key ){
			return b[1];
		}
	}
}
function delCookie(key){
	setCookie(key,'',-1);
} 