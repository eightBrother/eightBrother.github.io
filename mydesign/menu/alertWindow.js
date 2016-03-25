/*各函数调用说明:
 * 登录超时:showMessageBox(sig);
 * Error:connectionError(dsig,msg);
 * 正确提示：rightMsg(rsig,msg);
 * 操作有误的警告:alarmMsg(asig,msg);
 * */
//登录超时调用:showMessageBox
/*
 * sig传入参数说明
 * 0：主页 登陆页
 * 1：主页iframe里包的list页面
 * 2：iframe里包的list中弹出的showModalDialog页面，如： add,modi
 * 3：showModalDialog页面弹出的showModalDialog页面，如：add中的选择按钮
 * 
 * */
//一些全局变量
var locate;
var gflag;

//登录超时
function showMessageBox(sig){
	var num = fun_timedown(5);
	if(num == undefined){
		num = 5;
	}
	
	gflag = sig;
	mark = $("<div id='outte'></div>");
	connErr = $("<div class='all' id='all'>"
				+"<div class='top'>"
				 +"<div class='word'>"
				 +"温馨提示:系统将在"
				 +"&nbsp;<b id='countdown'>" 
				 + num
				 +"</b>&nbsp;"
				 +"秒后重新登录"
				 +"</div>"
				 +"<div class='close' id='close' title='关闭'>"
				 +"</div>"
				+"</div>"
				+"<div class='mid'>"
					+"<div class='naozhong'>"
					+"</div>"
					+"<div class='error'>"
					+"系统超时,请稍后重新登陆"
					+"</div>"
				+"</div>"
				+"<div class='bottom'>"
					+"<button type='button' id='help'>"
					+"确  定"
					+"</button>"
				+"</div>"
			    +"</div>");
	//$(""+findBody(a)+"").prepend(connErr);
	locate= window.parent.document;
	if(sig==1){
		locate = window.parent.document;
	}else{
		locate = window.document;
	}
	$('body',locate).prepend(mark);
	$('body',locate).prepend(connErr);
	$("#outte",locate).css('width',$(locate).width());
	$("#outte",locate).css('height',$(locate).height());
	$("#all",locate).css('left', ($(locate).width() - $("#all",locate).outerWidth())/2 );
	$("#all",locate).css('top', ($(locate).height() -  $("#all",locate).outerHeight())/2-100 );
	
	$(window).on('scroll resize',function(){
		if(connErr){
			$("#outte").css('width',$(window).width());
			$("#outte").css('height',$(window).height());
			$("#all").css('left' , ($(window).width() -  $("#all",locate).outerWidth())/2 );
			$("#all").css('top' , ($(window).height() -  $("#all",locate).outerHeight())/2 + $(window).scrollTop()-100 );
		}
	});

	$("#close",locate).click(function(){
			$.ajax({
				type: "GET",
				global: false,
				url: "/JMCC/authority/userlogin_out/0.json?_method=delete",
				success: function(){
					closeToLogin(gflag);
				}
				
			});
		
	});
	$("#close",locate).mouseover(function(){
		$(this).addClass('closeover');
	});
	$("#close",locate).mouseout(function(){
		$("#close",locate).removeClass('closeover');
	});
	
	$("#help",locate).click(function(){
			$.ajax({
				type: "GET",
				global: false,
				url: "/JMCC/authority/userlogin_out/0.json?_method=delete",
				success: function(){
					closeToLogin(gflag);
				}
				
			});
		
	});
	
}

//正确信息rightMsg()
function rightMsg(rsig,msg){
	mark = $("<div id='outte'></div>");
	connErr = $("<div class='all' id='all'>"
				+"<div class='top'>"
				 +"<div class='word'>"
				 +"温馨提示"
				 +"</div>"
				 +"<div class='close' id='close' title='关闭'>"
				 +"</div>"
				+"</div>"
				+"<div class='mid'>"
					+"<div class='rightphoto'>"
					+"</div>"
					+"<div class='rightmsg'><i>"
					+"系统提示: "+msg
					+"</i></div>"
				+"</div>"
				+"<div class='bottom'>"
					+"<button type='button' id='help'>"
					+"确  定"
					+"</button>"
				+"</div>"
			    +"</div>");
	//$(""+findBody(a)+"").prepend(connErr);
	locate= window.document;
	if(rsig==1){
		locate = window.parent.document;
	}else{
		locate = window.document;
	}
	$('body',locate).prepend(mark);
	$('body',locate).prepend(connErr);
	$("#outte",locate).css('width',$(locate).width());
	$("#outte",locate).css('height',$(locate).height());
	$("#all",locate).css('left', ($(locate).width() - $("#all",locate).outerWidth())/2 );
	$("#all",locate).css('top', ($(locate).height() -  $("#all",locate).outerHeight())/2-100 );
	
	$(window).on('scroll resize',function(){
		if(connErr){
			$("#outte",locate).css('width',$(window).width());
			$("#outte",locate).css('height',$(window).height());
			$("#all",locate).css('left' , ($(window).width() -  $("#all",locate).outerWidth())/2 );
			$("#all",locate).css('top' , ($(window).height() -  $("#all",locate).outerHeight())/2 + $(window).scrollTop()-100 );
		}
	});
	
	$("#close",locate).mouseover(function(){
		$(this).addClass('closeover');
	});
	$("#close",locate).mouseout(function(){
		$("#close",locate).removeClass('closeover');
	});
	
	$("#close",locate).click(function(){
		$('#outte',locate).remove();
		$('#all',locate).remove();
	});
	
	$("#help",locate).click(function(){
		$('#outte',locate).remove();
		$('#all',locate).remove();
	});
}


//是否按钮
function conform(rsig,msg,callback1,callback2){
	mark = $("<div id='outte'></div>");
	connErr = $("<div class='all' id='all'>"
				+"<div class='top'>"
				 +"<div class='word'>"
				 +"温馨提示"
				 +"</div>"
				 +"<div class='close' id='close' title='关闭'>"
				 +"</div>"
				+"</div>"
				+"<div class='mid'>"
					+"<div class='rightphoto'>"
					+"</div>"
					+"<div class='rightmsg'><i>"
					+msg
					+"</i></div>"
				+"</div>"
				+"<div class='bottom'>"
					+"<button type='button' id='sure'>"
					+"确  定"
					+"</button>"
					+"<button type='button' id='cancel'>"
					+"取  消"
					+"</button>"
				+"</div>"
			    +"</div>");
	//$(""+findBody(a)+"").prepend(connErr);
	locate= window.document;
	if(rsig==1){
		locate = window.parent.document;
	}else{
		locate = window.document;
	}
	$('body',locate).prepend(mark);
	$('body',locate).prepend(connErr);
	$("#outte",locate).css('width',$(locate).width());
	$("#outte",locate).css('height',$(locate).height());
	$("#all",locate).css('left', ($(locate).width() - $("#all",locate).outerWidth())/2 );
	$("#all",locate).css('top', ($(locate).height() -  $("#all",locate).outerHeight())/2-100 );
	
	$(window).on('scroll resize',function(){
		if(connErr){
			$("#outte",locate).css('width',$(window).width());
			$("#outte",locate).css('height',$(window).height());
			$("#all",locate).css('left' , ($(window).width() -  $("#all",locate).outerWidth())/2 );
			$("#all",locate).css('top' , ($(window).height() -  $("#all",locate).outerHeight())/2 + $(window).scrollTop()-100 );
		}
	});
	
	$("#close",locate).mouseover(function(){
		$(this).addClass('closeover');
	});
	$("#close",locate).mouseout(function(){
		$("#close",locate).removeClass('closeover');
	});
	
	$("#close",locate).click(function(){
		$('#outte',locate).remove();
		$('#all',locate).remove();
	
	});
	
	$("#sure",locate).click(function(){
		$('#outte',locate).remove();
		$('#all',locate).remove();
		if(callback1){
			callback1();
		}
	});
	$("#cancel",locate).click(function(){
		$('#outte',locate).remove();
		$('#all',locate).remove();
		if(callback2){
			callback2();
		}
	});	
}


//操作有误时弹出的警告信息alarmMsg(),长出来的隐藏
function alarmMsg(asig,msg){
	//mark = $("<div id='markout'></div>");
	
	connErr = $("<div class='rightdatall' id='rightdatall'>"
				+"<div class='datatop'>"
				 +"<div class='word'>"
				 +"温馨提示"
				 +"</div>"
				 +"<div class='close' id='close' title='关闭'>"
				 +"</div>"
				+"</div>"
				+"<div class='datamid'>"
					+"<div class='gantanhao'>"
					+"</div>"
					+"<div class='alarmMsg' id='hiddenmsg'><i id='moremsg'>"
					+"系统提示: "+msg
					+"</i></div><div class='shengluehao' id='shengluehao'>......</div>"
				+"</div>"
				+"<div class='databottom'>"
					+"<div class='xiangxi' id='xiangxi'>"
					+"</div>"
					+"<div class='zhankai' id='zhankai'>"
					+"更多"
					+"</div>"
					+"<button type='button' id='more'>"
					+"确  定 "
					+"</button>"
				+"</div>"
				+"<div class='detail' id='detail'>"
				+"<p>"
				+msg
				+"</p>"
			    +"</div>"
			    +"</div>"
			    );
	
	locate= window.parent.document;
	if(asig==1){
		locate = window.parent.document;
		
	}else{
		locate = window.document;
	}
	
	//$('body',locate).prepend(mark);
	$('body',locate).prepend(connErr);
	//$("#markout",locate).css('width',$(locate).width());
	//$("#markout",locate).css('height',$(locate).height());
	$("#rightdatall",locate).css('left', ($(locate).width() - $("#rightdatall",locate).outerWidth())/2 );
	$("#rightdatall",locate).css('top', ($(locate).height() -  $("#rightdatall",locate).outerHeight())/2-100 );
	
	$(window).on('scroll resize',function(){
		if(connErr){
			$("#rightdatall",locate).css('left' , ($(window).width() -  $("#rightdatall",locate).outerWidth())/2 );
			$("#rightdatall",locate).css('top' , ($(window).height() -  $("#rightdatall",locate).outerHeight())/2 + $(window).scrollTop()-100 );
		}
	});
	
	$('#detail',locate).hide();
	$('#xiangxi',locate).hide();
	$('#zhankai',locate).hide();
	$('#shengluehao',locate).hide();
	
		
	$("#xiangxi",locate).click(function(){
		$('#detail',locate).slideToggle();
	});
	$("#zhankai",locate).click(function(){
		$('#detail',locate).slideToggle();
	});
	$("#close",locate).mouseover(function(){
		$(this).addClass('closeover');
	});
	$("#close",locate).mouseout(function(){
		$(this).removeClass('closeover');
	});
	
	$("#close",locate).click(function(){
		$('#rightdatall',locate).remove();
	});
	$("#more",locate).click(function(){
		$('#rightdatall',locate).remove();
	});
	
	var h1 = $("#hiddenmsg",locate).height();
	var h2 = $("#moremsg",locate).height();
	if (h2>h1){
		$('#xiangxi',locate).show();
		$('#zhankai',locate).show();
		$('#shengluehao',locate).show();
	}else{
		$('#xiangxi',locate).hide();
		$('#zhankai',locate).hide();
		$('#shengluehao',locate).hide();
	}

	var d1 = new Drag('rightdatall');
	d1.init();
	//alert("111");
}




//Connection_Error调用
function connectionError(dsig,msg){
	mark = $("<div id='markout'></div>");
	connErr = $("<div class='datall' id='datall'>"
				+"<div class='datatop'>"
				 +"<div class='word'>"
				 +"温馨提示"
				 +"</div>"
				 +"<div class='close' id='close' title='关闭'>"
				 +"</div>"
				+"</div>"
				+"<div class='datamid'>"
					+"<div class='gantanhao'>"
					+"</div>"
					+"<div class='error'>"
					+"数据加载失败,请及时联系管理员."
					+"</div>"
				+"</div>"
				+"<div class='databottom'>"
					+"<div class='xiangxi' id='xiangxi'>"
					+"</div>"
					+"<div class='zhankai' id='zhankai'>"
					+"详细"
					+"</div>"
					+"<button type='button' id='more'>"
					+"确  定 "
					+"</button>"
				+"</div>"
				+"<div class='detail' id='detail'>"
				+"<p>"
				+msg
				+"</p>"
			    +"</div>"
			    +"</div>"
			    );
	
	locate= window.parent.document;
	if(dsig==1){
		locate = window.parent.document;
		
	}else{
		locate = window.document;
	}
	
	$('body',locate).prepend(mark);
	$('body',locate).prepend(connErr);
	$("#markout",locate).css('width',$(locate).width());
	$("#markout",locate).css('height',$(locate).height());
	$("#datall",locate).css('left', ($(locate).width() - $("#datall",locate).outerWidth())/2 );
	$("#datall",locate).css('top', ($(locate).height() -  $("#datall",locate).outerHeight())/2-100 );
	
	$(window).on('scroll resize',function(){
		if(connErr){
			$("#markout",locate).css('width',$(window).width());
			$("#markout",locate).css('height',$(window).height());
			$("#datall",locate).css('left' , ($(window).width() -  $("#datall",locate).outerWidth())/2 );
			$("#datall",locate).css('top' , ($(window).height() -  $("#datall",locate).outerHeight())/2 + $(window).scrollTop()-100 );
		}
	});
	
	$('#detail',locate).hide();
	$("#xiangxi",locate).click(function(){
		$('#detail',locate).slideToggle();
	});
	$("#zhankai",locate).click(function(){
		$('#detail',locate).slideToggle();
	});
	$("#close",locate).mouseover(function(){
		//$("#close",locate).removeClass('close');
		$(this).addClass('closeover');
	});
	$("#close",locate).mouseout(function(){
		$(this).removeClass('closeover');
		//$("#close",locate).addClass('close');
	});
	
	$("#close",locate).click(function(){
		$('#datall',locate).remove();
		$('#markout',locate).remove();
	});
	$("#more",locate).click(function(){
		$('#datall',locate).remove();
		$('#markout',locate).remove();
	});
		
}

//倒计时
function fun_timedown(time){
    $("#countdown",locate).html(time);
    time = time-1;
    if(time>=0)
    {
        setTimeout("fun_timedown("+time+")",1000);
    }else{
    	$.ajax({
			type: "GET",
			global: false,
			url: "/JMCC/authority/userlogin_out/0.json?_method=delete",
			success: function(){
				closeToLogin(gflag);
			}
			
		});
    }

}

//跳转页面
function closeToLogin(loc){
	//alert(window.location.pathname+"    "+window.location.pathname.split("/").length);
	//var len = window.location.pathname.split("/").length;
	switch(loc){
		case 0:
		case 1:
			window.location.href=getLoginPage();
			break;
		case 2:
			window.close();
			window.dialogArguments.window.location=getLoginPage();
			break;
		case 3:
			window.close();
			window.dialogArguments.window.close();
			(window.dialogArguments.window).dialogArguments.window.location=getLoginPage();
			break;
		case 5:
			window.parent.location.href = getLoginPage();
			break;
		case 6:
			window.parent.parent.location.href = getLoginPage();
			break;
	}
}


function checkSession(){
	var temp = true;
	$.ajax({
		type:"get",
		url:"/JMCC/authority/userlogin_out/1/deleteConfirm.json",
		dataType:"json",
		cache:false,
		async : false,
		global: false,
		success:function(data){

			if(data.msg == "timeout")
				{
				temp = false;
				}
			
		},
		error:function(){
			alarmMsg(0,"出错啦！！！</br>请刷新页面再试。可能原因为:</br>系统内部出错  或  服务器已停止");
			temp = "error";
		}
	});
	return temp;
}
//拖拽
function Drag(id){   //父级
	this.oDiv = locate.getElementById(id);
	//alert(document.getElementById(id));
	//alert(this.oDiv);
	this.disX = 0;
	this.disY = 0;
}
Drag.prototype.init = function(){
	var This = this;
	this.oDiv.onmousedown = function(ev){
		var ev = ev || window.event;
		This.fnDown(ev);
		
		locate.onmousemove = function(ev){
			var ev = ev || window.event;
			This.fnMove(ev);
		};
		
		locate.onmouseup = This.fnUp;
		return false;
		
	};
};

Drag.prototype.fnDown = function(ev){
	this.disX = ev.clientX - this.oDiv.offsetLeft;
	this.disY = ev.clientY - this.oDiv.offsetTop;
	
};
Drag.prototype.fnMove = function(ev){
	
	this.oDiv.style.left = ev.clientX - this.disX + 'px';
	this.oDiv.style.top = ev.clientY - this.disY + 'px';
	
};

Drag.prototype.fnUp = function(){
	locate.onmousemove = null;
	locate.onmouseup = null;
};


function getLoginPage(){
	var windowR="page/login.html";
	/*$.ajax({
		type : "get",
		url : "/JMCC/authority/base-config.json",
		data : "flag=2",
		cache : false,
		global: false,
		async : false,
		dataType : "json",
		success : function(data) {
			if(data.msg!=null&&data.msg!=""&&data.msg=="1"){
				windowR="page/sso_login.html";
			}else if(data.msg!=null&&data.msg!=""&&data.msg=="0"){
				windowR="page/login.html";
			}else{
				windowR="page/login.html";
			}
			windowR="page/login.html";
		},
		error : function() {
			windowR="page/login.html";
		}
	});*/
	return windowR; 
}
//弹出传入的参数

/*
function showMessageBox(a,b){
	
	if( b==3 || b == "3"){
		window.open(
				"page/connection_err.html",
				'链接有误',
				'width=250px,height=140px,top='+(screen.height-140)/2+',left='+(screen.width-220)/2+',toolbar=no,menubar=no,scrollbars=no');
	}else(b==1 || b== "1"){
		window,getElementById("message").value = a;
		window.open(
				"page/warmpage.html",
				'操作成功',
				'width=250px,height=140px,top='+(screen.height-140)/2+',left='+(screen.width-220)/2+',toolbar=no,menubar=no,scrollbars=no');
	}
	
}*/



//用于基础数据的弹出提示
/*function showMessage(message){
	var result = window.showModalDialog(
			"/JMCC/page/showMessage.html",
			message,
			'width=250px,height=140px,top='+(screen.height-140)/2+',left='+(screen.width-220)/2+',toolbar=no,menubar=no,scrollbars=no'
	);
	
	if(typeof(result) == 'undefined'){
		result = false;
	}
	return result;
}*/

