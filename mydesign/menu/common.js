var rowindex=-1;
var page_common_init_flag=0;
//判断参数输入行是否为可见的
var isOpen_search=false;
function getStatus(state, isCB){
	var stateStr = "";
	var reg = new RegExp("^[0-9]*$");
	if(reg.test(state)){
		switch(parseInt(state)){
		case 0:
			stateStr = "发起";
			break;
		case 1:
			stateStr = "内部审批中";
			break;
		case 2:
			stateStr = "待银行预处理";
			break;
		case 3:
			stateStr = "送达银行失败";
			break;
		case 4:
			stateStr = "送达银行主机失败";
			break;
		case 5:
			stateStr = "待银行主机处理";
			break;
		case 6:
			stateStr = "本地处理失败";
			break;
		case 7:
			stateStr = "完成";
			break;
		case 8:
			stateStr = " 执行中";
			break;
		}
		if(isCB == 1 && (parseInt(state)==2 || parseInt(state)==5)){
			stateStr = "已发往收款银行";
		}
	} else{
		if("ok" == state){
			stateStr = "完成";
		} else{
			stateStr = state;
		}
	}
	
	return stateStr;
}

function getShoppingCartStatus(settleStatus,status){
	var statusDescription="";
	switch(parseFloat(settleStatus)){
	case 1:
		switch(parseFloat(status)){
		case 0:
			statusDescription = "结算中，发起";break;
		case 1:
			statusDescription = "结算中，内部审批中";break;
		case 2:
			statusDescription = "结算中，银行处理中";break;
		case 3:
			statusDescription = "结算失败";break;
		case 4:
			statusDescription = "结算失败";break;
		case 5:
			statusDescription = "结算中，待银行主机处理";break;
		case 6:
			statusDescription = "结算失败";break;
		case 7:
			statusDescription = "已结算";break;
			
		}
		break;
	case 0:		
		statusDescription = "未结算";
		break;
	
	}
	return statusDescription;
	
}

function getfolwName(flowCode,status){
	var folwName="";
		switch(parseFloat(flowCode)){
		case 1:
			if(parseFloat(status)==7){
				folwName = "已购买";
			}else {
				folwName = "结算中";
			}
			break;	
		case 2:
			if(parseFloat(status)==7){
				folwName = "已赎回";
			}
			else {
				folwName = "赎回中";
			}
			break;
		case 3:
			if(parseFloat(status)==7){
				folwName = "已续约";
			}else {
				folwName = "续约中";
			}
			break;
		case 4:
			if(parseFloat(status)==7){
				folwName = "已销户";
			}
			else {
				folwName = "销户中";
			}
			break;
			
		}
	return folwName;
	
}
function getDepositStatus(status,buckup2){
var	status = parseFloat(status);
var statusDescription = "";
if(buckup2==""){
	if(status==0){
		statusDescription ="开户中,发起";
	}else if(status==1){
		statusDescription ="开户,内部审批中";
	}else if(status==2){
		statusDescription ="开户,银行处理中";
	}else if(status==3){
		statusDescription ="开户失败";
	}else if(status==4){
		statusDescription ="开户失败";
	}else if(status==5){
		statusDescription ="开户,待银行主机处理";
	}else if(status==6){
		statusDescription ="开户失败";
	}else if(status==7){
		statusDescription ="完成";
	}
}else if(buckup2=="正常"){
	if(status==0){
		statusDescription ="部提/关户发起";
	}else if(status==1){
		statusDescription ="部提/关户内部审批中";
	}else if(status==2){
		statusDescription ="开户银行处理中";
	}else if(status==3){
		statusDescription ="正常";
	}else if(status==4){
		statusDescription ="正常";
	}else if(status==5){
		statusDescription ="开户银行受理成功";
	}else if(status==6){
		statusDescription ="正常";
	}else if(status==7){
		statusDescription ="正常";
	}
}else if(buckup2=="正常,已部提"){
	if(status==0){
		statusDescription ="部提/关户发起";
	}else if(status==1){
		statusDescription ="部提/关户内部审批中";
	}else if(status==2){
		statusDescription ="部提中,银行处理中";
	}else if(status==3){
		statusDescription ="正常,已部提";
	}else if(status==4){
		statusDescription ="正常,已部提";
	}else if(status==5){
		statusDescription ="部提中,银行受理成功";
	}else if(status==6){
		statusDescription ="正常,已部提";
	}else if(status==7){
		statusDescription ="正常,已部提";
	}
}else if(buckup2=="已销户"){
	if(status==0){
		statusDescription ="已销户";
	}else if(status==1){
		statusDescription ="已销户";
	}else if(status==2){
		statusDescription ="销户中,银行处理中";
	}else if(status==3){
		statusDescription ="已销户";
	}else if(status==4){
		statusDescription ="已销户";
	}else if(status==5){
		statusDescription ="销户中,银行受理成功";
	}else if(status==6){
		statusDescription ="已销户";
	}else if(status==7){
		statusDescription ="已销户";
	}
}
return statusDescription;
}

function getYkdfBuyerStatus(state,orderSta){
	var stateStr = "";
	var reg = new RegExp("^[0-9]*$");
		switch(parseInt(orderSta)){
		case 0:
				switch(parseInt(state)){
				case 0:
					stateStr = "发起保全支付";
					break;
				case 1:
					stateStr = "保全支付审批中";
					break;
				case 2:
					stateStr = "保全支付银行已受理";
					break;
				case 3:
					stateStr = "发起保全支付失败";
					break;
				case 4:
					stateStr = "发起保全支付失败";
					break;
				case 5:
					stateStr = "保全支付银行已受理";
					break;
				case 6:
					stateStr = "发起保全支付失败";
					break;
				case 7:
					stateStr = "发起保全支付";
					break;
				case 8:
					stateStr = "保全支付处理中";
					break;
				}
			break;
		case 1:
				switch(parseInt(state)){
				case 0:
					stateStr = "待收货";
					break;
				case 1:
					stateStr = "收货/申请拒付审批中";
					break;
				case 2:
					stateStr = "银行受理成功";
					break;
				case 3:
					stateStr = "待收货";
					break;
				case 4:
					stateStr = "待收货";
					break;
				case 5:
					stateStr = "银行受理成功";
					break;
				case 6:
					stateStr = "待收货";
					break;
				case 7:
					stateStr = "待收货";
					break;
				case 8:
					stateStr = "收货/申请拒付处理中";
					break;
				}
			break;
		case 2:
				stateStr = "收货中,等待银行处理";
			break;
		case 3:
				switch(parseInt(state)){
				case 0:
					stateStr = "收货成功，交易完成";
					break;
				case 1:
					stateStr = "收货成功，交易完成";
					break;
				case 2:
					stateStr = "收货中,银行已受理";
					break;
				case 3:
					stateStr = "收货成功，交易完成";
					break;
				case 4:
					stateStr = "收货成功，交易完成";
					break;
				case 5:
					stateStr = "收货中,银行已受理";
					break;
				case 6:
					stateStr = "收货成功，交易完成";
					break;
				case 7:
					stateStr = "收货成功，交易完成";
					break;
				case 8:
					stateStr = "收货处理中";
					break;
				}
			break;
		case 4:
				switch(parseInt(state)){
				case 0:
					stateStr = "待收货";
					break;
				case 1:
					stateStr = "收货审批中";
					break;
				case 2:
					stateStr = "收货中,银行已受理";
					break;
				case 3:
					stateStr = "待收货";
					break;
				case 4:
					stateStr = "待收货";
					break;
				case 5:
					stateStr = "收货中,银行已受理";
					break;
				case 6:
					stateStr = "待收货";
					break;
				case 7:
					stateStr = "支付失败，余额不足";
					break;
				case 8:
					stateStr = "收货处理中";
					break;
				}
			break;
		case 5:
				switch(parseInt(state)){
				case 0:
					stateStr = "待收货";
					break;
				case 1:
					stateStr = "收货审批中";
					break;
				case 2:
					stateStr = "收货中,银行已受理";
					break;
				case 3:
					stateStr = "待收货";
					break;
				case 4:
					stateStr = "待收货";
					break;
				case 5:
					stateStr = "收货中,银行已受理";
					break;
				case 6:
					stateStr = "待收货";
					break;
				case 7:
					stateStr = "支付失败，系统错误";
					break;
				case 8:
					stateStr = "收货处理中";
					break;
				}
			break;
		case 6:
				switch(parseInt(state)){
				case 0:
					stateStr = "待收货";
					break;
				case 1:
					stateStr = "申请拒付审批中";
					break;
				case 2:
					stateStr = "申请拒付中,银行已受理";
					break;
				case 3:
					stateStr = "待收货";
					break;
				case 4:
					stateStr = "待收货";
					break;
				case 5:
					stateStr = "申请拒付中,银行已受理";
					break;
				case 6:
					stateStr = "待收货";
					break;
				case 7:
					stateStr = "申请拒付成功,等待商家确认";
					break;
				case 8:
					stateStr = "收货处理中";
					break;
				}
			break;
		case 7:
				switch(parseInt(state)){
				case 0:
					stateStr = "已拒付,交易关闭"; 
					break;
				case 1:
					stateStr = "已拒付,交易关闭"; 
					break;
				case 2:
					stateStr = "商家确认拒付中,银行已受理"; 
					break;
				case 3:
					stateStr = "已拒付,交易关闭"; 
					break;
				case 4:
					stateStr = "已拒付,交易关闭"; 
					break;
				case 5:
					stateStr = "买家申请拒付,等待确认";
					break;
				case 6:
					stateStr = "已拒付,交易关闭"; 
					break;
				case 7:
					stateStr = "已拒付,交易关闭"; 
					break;
				case 8:
					stateStr = "处理中";
					break;
				}
			break;
		case 8:
			stateStr = " 执行中";
			break;
	} 
	
	return stateStr;
}
function getYkdfSellerStatus(state,orderSta){
	var stateStr = "";
	var reg = new RegExp("^[0-9]*$");
		switch(parseInt(orderSta)){
		case 0:
			stateStr = "待发货";
			break;
		case 1:
			stateStr = "待发货";
			break;
		case 2:
			stateStr = "已发货，待买家确认";
			break;
		case 3:
			stateStr = "已收款,交易成功";
			break;
		case 4:
			stateStr = "已发货，待买家确认"; 
			break;
		case 5:
			stateStr = "已发货，待买家确认"; 
			break;
		case 6:
			switch(parseInt(state)){
			case 0:
				stateStr = "买家申请拒付，待确认"; 
				break;
			case 1:
				stateStr = "确认拒付审批中"; 
				break;
			case 2:
				stateStr = "买家申请拒付，待确认"; 
				break;
			case 3:
				stateStr = "买家申请拒付，待确认"; 
				break;
			case 4:
				stateStr = "买家申请拒付，待确认"; 
				break;
			case 5:
				stateStr = "买家申请拒付，待确认";
				break;
			case 6:
				stateStr = "买家申请拒付，待确认"; 
				break;
			case 7:
				stateStr = "买家申请拒付，待确认"; 
				break;
			case 8:
				stateStr = "处理中";
				break;
			}
			//stateStr = "商家确认拒付中,银行已受理"; 
			break;
		case 7:
			switch(parseInt(state)){
			case 0:
				stateStr = "已拒付,交易关闭"; 
				break;
			case 1:
				stateStr = "已拒付,交易关闭"; 
				break;
			case 2:
				stateStr = "确认拒付中,银行已受理"; 
				break;
			case 3:
				stateStr = "已拒付,交易关闭"; 
				break;
			case 4:
				stateStr = "已拒付,交易关闭"; 
				break;
			case 5:
				stateStr = "确认拒付中,银行已受理";
				break;
			case 6:
				stateStr = "已拒付,交易关闭"; 
				break;
			case 7:
				stateStr = "已拒付,交易关闭"; 
				break;
			case 8:
				stateStr = "处理中";
				break;
			}
			//stateStr = "已拒付,交易关闭"; 
			break;
		case 8:
			stateStr = " 执行中";
			break;
		}
	
	return stateStr;
}

function getAuditeState(state){
	var stateStr = "";
	switch(state){
	case 0:
		stateStr = "启动";
		break;
	case 1:
		stateStr = "通过";
		break;
	case 2:
		stateStr = "驳回";
		break;
	case 3:
		stateStr = "撤消";
		break;
	case 4:
		stateStr = "结束";
		break;
	}
	return stateStr;
}

//获取支付策略内容
/*function getPayStrategy(strategeCode){
	var description = "";
	switch(strategeCode){
	case 0:
		description = "仅用账面余额";
		break;
	case 1:
		description = "不联动下拨,直接使用该账户的银行透支额度";
		break;
	case 2:
		description = "联动下拨,依次使用贡献金额";
		break;
	case 3:
		description = "联动下拨,依次使用贡献金额、组内透支";
		break;
	case 4:
		description = "仅使用账面余额和银行透支";
		break;
	case 5:
		description = "联动下拨,依次使用贡献金额、组内透支、银行透支";
		break;
	}
	return description;
}*/


//获取支付策略内容--3.0版本
function getPayStrategy(strategeCode){
	var description = "";
	switch(strategeCode){
	case 1:
		description = "仅使用账面余额";
		break;
	case 2:
		description = "使用银行透支";
		break;
	case 3:
		description = "依次使用贡献金额";
		break;
	case 4:
		description = "依次使用贡献金额、银行透支";
		break;
	case 5:
		description = "依次使用贡献金额、组内透支";
		break;
	case 6:
		description = "依次使用贡献金额、组内透支、银行透支";
		break;
	}
	return description;
}


//订单状态描述 0全部状态   10待卖家确认   20待买家支付    30待卖家发货  40待买家收货    50尾款支付    60待卖家确认取消  70待资金返还    90已取消    99已完成
function getOrderStatus(status){
	var description = "";
	switch(status){
	case "10":
		description = "待卖家确认";
		break;
	case "20":
		description = "待买家支付";
		break;
	case "21":
		description = "支付中";
		break;
	case "30":
		description = "待卖家发货";
		break;
	case "40":
		description = "待买家收货";
		break;
	case "50":
		description = "尾款支付";
		break;
	case "60":
		description = "待卖家确认取消";
		break;
	case "70":
		description = "待资金返还";
		break;
	case "80":
		description = "";
		break;
	case "90":
		description = "已取消";
		break;
	case "99":
		description = "已完成";
		break;
		
	}
	return description;
}

//获得订单支付方式描述
function getPayTypeDesc(payType){
	var description = "";
	switch(payType){
	case "0":
		description = "全额支付,先款后货";
		break;
	case "1":
		description = "货到付款";
		break;
	}
	return description;
}

//获得货币名称
function getCurrency(currencyCode){
	var currency = "";
	switch(currencyCode){
	case "1":currency = "人民币";
			break;
	case "2":currency = "港币";
			break;
	case "3":currency = "卢布";
			break;
	case "4":currency = "欧元";
			break;
	default:currency="";
	}
	return currency;
}
//iframe的自动延伸
function SetWinHeight(obj, subH) {
	var win = obj;
	if (document.getElementById) {
		if (win && !window.opera) {
			if (win.contentdocument
					&& win.contentdocument.body.offsetHeight)
				win.height = win.contentdocument.body.offsetHeight;
			else if (win.document && win.document.body.scrollHeight)
				win.height = subH;
		}
	}
}

//将字符串转换成xml文档
function getXmlDocByString(xmlstr){
	try
	{
		var sourceDoc ;
		if (window.DOMParser)
		{
			var parser=new DOMParser();
			sourceDoc=parser.parseFromString(xmlstr,"text/xml");
		}
		else // Internet Explorer
		{
			sourceDoc=new ActiveXObject("Microsoft.XMLDOM");
			sourceDoc.async="false";
			sourceDoc.loadXML(xmlstr);
		}
		return sourceDoc;
	}catch(err){
		return null;
	}
}
//根据xml对象转换成字符串
function getStringByXmlDoc(xmldoc){
	if (window.DOMParser)
	{
		var xmls=new XMLSerializer(); 
		return  xmls.serializeToString(xmldoc); 
		
	}else{
		return xmldoc.xml;
	}
}


//查找路径
function getElementsByPath(doc, path){
	var eleArr = new Array();
	if(path.indexOf('/') == 0)
		path = path.substring(1);

	var paths = path.split('/');
	if(paths.length == 0)
		return eleArr;
	var eleTagName =  paths[0];
	var eles = doc.getElementsByTagName(eleTagName);
	if(eles.length == 0)
		return eleArr;
	
	for(var i = 0 ; i < eles.length ; i++){
		var pathIndex = 0;
		getElementsByPathEach(pathIndex,eles[i], paths, eleArr);
	}
	
	return eleArr;
}

function getElementsByPathEach(pathIndex,ele, paths, eleArr){
	
	var nodeList = ele.childNodes;
	if(nodeList.length == 0 )
	return eleArr;
	
	pathIndex++;
	var eleTagName =  paths[pathIndex];
	for(var i = 0 ; i < nodeList.length ; i ++){
		if(nodeList[i].tagName == eleTagName){
			if(pathIndex +1 == paths.length){
				eleArr.push(nodeList[i]);
			}else{
				getElementsByPathEach(pathIndex,nodeList[i], paths, eleArr)
			}
		}
	}
	
	return eleArr;
}

  
function autoWinHeight(window) {
	for ( var i = 0; i < window.parent.frames.length; i++) {
		if (window.parent.frames[i].window.document == window.document) {
			var iframeID = window.parent.frames[i].frameElement;
			var Subheight = window.document.body.offsetHeight;
			SetWinHeight(iframeID, Subheight);
			break;
		}
	}
}

//table超出div,加滚动条  操作有编辑和删除
function scroll(obj){
	$(".caozuo").css("width","62px");
	if(obj.width()<obj.find("table").width()){
		obj.css("overflow-x","scroll");
	}else{
		obj.css("overflow-x","auto");
	}
}
//table超出div,加滚动条  操作有编辑
function scroll2(obj){
	if(obj.width()<obj.find("table").width()){
		obj.css("overflow-x","scroll");
		$(".caozuo").css("width","");
	}else{
		obj.css("overflow-x","auto");
		$(".caozuo").css("width","26px");
	}
}
//table超出div,加滚动条 
function scrollTable(obj,num){
	if(obj[0].clientWidth<obj.find("table")[0].clientWidth){
		obj.css("overflow-x","scroll");
	}else{
		obj.css("overflow-x","auto");
	}
	if(num==1){
		$(".caozuo").css("width","26px");
	}else if(num==2){
		$(".caozuo").css("width","62px");
	}else if(num==3){
		$(".caozuo").css("width","84px");
	}
}
//展开收缩时，页面高度适应加滚动条
function autoHeight(id){
	if($("#"+id).height()<$("#"+id).find("table").height()){
		$("#"+id).css("overflow-y","scroll");
	}else{
		$("#"+id).css("overflow-y","hidden");
	}
	if($("#"+id)[0].clientWidth<$("#"+id).find("table")[0].clientWidth){
		$("#"+id).css("overflow-x","scroll");
	}else{
		$("#"+id).css("overflow-x","hidden");
	}
}
//将数字金额进行千位分隔
function formatNumber(number) {
	if(number == ""||number == null|| number == undefined){
		number = 0;
	}
	var number = ""+number;
	number= number.replace(/,/g, "");
    var str = "";
    var fuHao = "";
    var i;
    var mag = new Array();
    var word;
   if(number.indexOf("-") != -1){
    	fuHao = "-";
    	number= number.substr(1);
    }
    var digit = number.indexOf(".");
    var int = number.substr(0, digit); 
    if(number.indexOf(".")== -1) { 
    	str = "00";
        i = number.length; 
        while(i > 0) {
            word= number.substring(i, i - 3); 
            i-= 3;
            mag.unshift(word);
        }
        
        number= fuHao + mag + "." + str;
    }else { 
        i= int.length; 
        var re = number.substring(digit);
        
        if(re.length==2){
        	str = re+"0";
        }else{
        	str = re;
        }
        while(i > 0) {
            word= int.substring(i, i - 3); 
            i-= 3;
            mag.unshift(word);
        }
        number= fuHao + mag + str;
    }
    return number;
}


//*** 树表的选择    ***//
function inputChecked(){
	$("input[type='checkbox']").click(function(){
		var flag;
		if($(this).attr("checked") == "checked"){
			flag = true;
		}else{
			flag = false;
		}
		var ThisChildId = $(this).attr("childId");
		var ThisParentId = $(this).attr("parentId");
		
		parentChecked(ThisChildId,flag);
		
		childChecked(ThisParentId,flag);
	});
}
//选中父子全选中节点
function parentChecked(ThisChildId,flag){
	$("input[parentId='"+ThisChildId+"']").attr("checked",flag);
	$("input[parentId='"+ThisChildId+"']").each(function(){
		//alert($(this).find("td").eq(1).html());
		parentChecked($(this).attr("childId"),flag);
	})
	
}	
//子级取消，父级不选中,子级全部选中，则父级要选中
function childChecked(ThisParentId){
	$("input[parentId='"+ThisParentId+"']").each(function(){
		if(!$(this).attr("checked")){
			$("input[childId='"+ThisParentId+"']").attr("checked",false);
			return false;
		}
		$("input[childId='"+ThisParentId+"']").attr("checked",true);
		return true;	
	})
}
/************************《树 start》*****************************************/
function isTopGroup(groupId, acctId) {
	for ( var i = 0; i < acctInGroupArr.length; i++) {
		if (acctInGroupArr[i][0] != groupId
				&& acctInGroupArr[i][1] == acctId
				&& acctInGroupArr[i][2] == "子") {
					// 在其他组做子账户，则疑似顶级组，再进一步确认
					var pGroupId = acctInGroupArr[i][0] ;
					for ( var j = 0;  j< acctInGroupArr.length ;j++) {
						// 疑似父组有母账户，则当期组不是顶级组
						if(acctInGroupArr[j][0] == pGroupId && acctInGroupArr[j][2] == "母"){
							return false;
						}
				  } 
		}
	}
	return true;
}

function getMainAcct(groupId) {
	for ( var i = 0; i < acctInGroupArr.length; i++) {
		if (acctInGroupArr[i][0] == groupId && acctInGroupArr[i][2] == "母") {
			return acctInGroupArr[i][1];
		}
	}
	return null;
}

function getGroupById(groupId) {
	for ( var i = 0; i < groupArr.length; i++) {
		if (groupArr[i][0] == groupId) {
			return groupArr[i];
		}
	}
	return null;
}

function getAccountById(accountId) {
	for ( var i = 0; i < acctArr.length; i++) {
		if (acctArr[i][0] == accountId) {
			return acctArr[i];
		}
	}
	return null;
}
/************************《树 END》*****************************************/


function getDateDiff(startDate,endDate)  
{  
    var startTime = new Date(Date.parse(startDate.replace(/-/g,   "/"))).getTime();     
    var endTime = new Date(Date.parse(endDate.replace(/-/g,   "/"))).getTime();     
    var dates = Math.abs((startTime - endTime))/(1000*60*60*24);     
    return  dates;    
}
//获取 当前 系统时间  年月日  时分秒
function nowTime(){
	var myTime = new Date();		// 获取 当前 系统时间
	var iYear = myTime.getFullYear();
	var iMon = myTime.getMonth()+1;
	var iDate = myTime.getDate();
	var iHours = myTime.getHours();
	var iMin = myTime.getMinutes();
	var iSec = myTime.getSeconds();

	var str = iYear+'-'+toTwo(iMon)+'-'+toTwo(iDate)+' '+toTwo(iHours)+':'+toTwo(iMin)+':'+toTwo(iSec);
	return str;
}
//获取 当前 系统时间  年月日  时分
function nowTimenoSec(){
	var myTime = new Date();		// 获取 当前 系统时间
	var iYear = myTime.getFullYear();
	var iMon = myTime.getMonth()+1;
	var iDate = myTime.getDate();
	var iHours = myTime.getHours();
	var iMin = myTime.getMinutes();
	var iSec = myTime.getSeconds();

	var str = iYear+'-'+toTwo(iMon)+'-'+toTwo(iDate)+' '+toTwo(iHours)+':'+toTwo(iMin);
	return str;
}
//获取 当前 系统时间  年月日
function nowDay(){
	var myTime = new Date();		// 获取 当前 系统时间
	var iYear = myTime.getFullYear();
	var iMon = myTime.getMonth()+1;
	var iDate = myTime.getDate();
	var iHours = myTime.getHours();
	var iMin = myTime.getMinutes();
	var iSec = myTime.getSeconds();

	var str = iYear+'-'+toTwo(iMon)+'-'+toTwo(iDate);
	return str;
}
//获取 当前 系统时间  月日
function nowDaynoyear(){
	var myTime = new Date();		// 获取 当前 系统时间
	var iYear = myTime.getFullYear();
	var iMon = myTime.getMonth()+1;
	var iDate = myTime.getDate();
	var iHours = myTime.getHours();
	var iMin = myTime.getMinutes();
	var iSec = myTime.getSeconds();

	var str = toTwo(iMon)+'-'+toTwo(iDate);
	return str;
}
function toTwo(n){
	/*
	if(n<10){
		return '0'+n;	// 字符串
	}else{
		return ''+n;			// 数字
	}
	*/
	return n<10?'0'+n:''+n;
}
//年月日  时分秒
function getNextdayTime(startDate, num){    
	   var date = new Date(Date.parse(startDate.replace(/-/g,   "/")));
	   
	    var next_milliseconds=date.getTime() + num * 1000*60*60*24;        
	    var nextday = new Date();        
	    nextday.setTime(next_milliseconds);        
	    var strYear = nextday.getFullYear();     
	    var strDay = nextday.getDate();     
	    var strMonth = nextday.getMonth()+1;
	    
	    var iHours = nextday.getHours();
		var iMin = nextday.getMinutes();
		var iSec = nextday.getSeconds();	    
	    datastr = strYear+"-"+toTwo(strMonth)+"-"+toTwo(strDay)+' '+toTwo(iHours)+':'+toTwo(iMin)+':'+toTwo(iSec);  
	    return datastr;   
}
//年月日  
function getNextday(startDate, num){    
   var date = new Date(Date.parse(startDate.replace(/-/g,   "/")));
   
    var next_milliseconds=date.getTime() + num * 1000*60*60*24;        
    var nextday = new Date();        
    nextday.setTime(next_milliseconds);        
    var strYear = nextday.getFullYear();     
    var strDay = nextday.getDate();     
    var strMonth = nextday.getMonth()+1;
    
    if(strMonth<10)     
    {     
        strMonth="0"+strMonth;     
    } 
    if(strDay < 10){
    	strDay = "0" + strDay;
    }
    datastr = strYear+"-"+strMonth+"-"+strDay;  
    return datastr;   
  } 

function getNextShortDay(startDate, num){    
	   var date = new Date(Date.parse(startDate.replace(/-/g,   "/"))); 
	    var next_milliseconds=date.getTime() + num * 1000*60*60*24;        
	    var nextday = new Date();        
	    nextday.setTime(next_milliseconds);        
	         
	   // var strYear = nextday.getFullYear();     
	    var strDay = nextday.getDate();     
	    var strMonth = nextday.getMonth()+1;   
	    if(strMonth<10)     
	    {     
	        strMonth="0"+strMonth;     
	    } 
	    if(strDay < 10){
	    	strDay = "0" + strDay;
	    }
	    datastr = strMonth+"-"+strDay;   
	    return datastr;   
 }

// 日期控件的change事件
function setWdatePickerChange(id){
	var datePicker = document.getElementById(id); 
	if (window.DOMParser)
	{
		datePicker.onpropertychange = dateChage; 

	}else{ 
		datePicker.addEventListener("input",dateChage,false); 	
	} 
}
//校验时间
function DateVali(startDate,endDate,append)
{     
	$("#"+append).html(""); 
	if($("#"+startDate).val()=="")
      {
	  $("#"+append).html("<span style='color:#a40000;font-size:18;border:0px solid #ccc;height:23px; line-height:23px;'>请选择起始日期</span>");
      return false;
      }
      if($("#"+endDate).val()=="")
      {
		  $("#"+append).html("<span style='color:#a40000;font-size:18;border:0px solid #ccc;height:23px; line-height:23px;'>请选择截止日期</span>");
		  return false;
      }
	  var startDates = ($("#"+startDate).val()).split("-");
      var endDates = ($("#"+endDate).val()).split("-");
      var sDate = startDates.join("");
      var eDate = endDates.join("");      
      var date = eDate - sDate;
      if (date < 0)
      {
		  $("#"+append).html("<span style='color:#a40000;font-size:18;border:0px solid #ccc;height:23px; line-height:23px;'>截止日期须大于开始日期</span>");
			return false;
      }
      return true; 
}
/************************《双用户认证START》*****************************************/
function checkDouble(path,parentUrl){
	//是否需要弹出双用户认证
	var flag = false;
	var weburl=path+"authority/checkdoubleuser.json";
	$.ajax({
		type : "POST",
		dataType : "json",
		cache : false,
		url : weburl, // 提交到一般处理程序请求数据
		data : "url="+parentUrl,
		async : false,
		error : function() {
			
		},
		success : function(data) {
			if(data.msg=="true"||data.msg==true){
				flag = true;
			}
		}
	});
	//双用户认证是否通过
	var res = true;
	if(flag){
		res = window.showModalDialog(
				path+"page/common/double-auth.html",
				"",
				"dialogHeight=170px;dialogWidth=540px;center=yes;titlebar=no;status=no;toolbar=no;menubar=no;scrollbars=no;resizable=no;location=no; status=no;alwaysRaised=yes");
	}
	if(typeof(res)=="undefined"||res==null){
		res=false;
	}
	return res;
}
function doubleAuthentivation(path,parentUrl){
	//是否需要弹出双用户认证
	var flag = false;
	var weburl=path+"authority/checkdoubleuser.json";
	$.ajax({
		type : "POST",
		dataType : "json",
		cache : false,
		url : weburl, // 提交到一般处理程序请求数据
		data : "url="+parentUrl,
		async : false,
		error : function() {
			layer.alert("错误！",0);
		},
		success : function(data) {
			if(data.msg=="true"||data.msg==true){
				flag = true;
			}else{
				flag = false;
			}
		}
	});	
	return flag;
}
/************************《双用户认证END》*****************************************/
function contentYZB(alertcontent,obj)
{
if(obj.val()==alertcontent||obj.val()=="")
{
	//alert(obj.val());
obj.val(alertcontent);
obj.css("color","#ccc");}
else
{
obj.css("color","none");
}
}

function contentYZF(alertcontent,obj){
	//alert(alertcontent+"###")
	if(obj.val()==alertcontent||obj.val()=="")
	{
		//alert(alertcontent)
		obj.val("");
		obj.css("color","BLACK");
	}
}

function yz(obj,txt)
{
	//contentYZB(txt,obj);
	//alert(obj.val());
	obj.focus(function(){contentYZF(txt,obj)});
	obj.blur(function(){contentYZB(txt,obj)});

	
	}

//添加银行log
function addBankLog(num) {
	if (num != "") {
		//return "<img class='bankLog' src='../../images/bankLog/"+num+".png'/>";
		return "<i class=''  style='background:url(../../images/bankLog/"+num+".png) no-repeat 0 0px;padding:0 18px 4px 0;'></i>";
	} else {
		return "<i style='padding-left:19px;'></i>";
	}
}
//虚实账户
function xushi(num) {
	if (num == 0) {
		return "实";
	} else {
		return "虚";
	}
}
//判断结束日期大于开始日期
function endStart(s, e,dateFailmsg) {
	if(s==""||e==""){
    	return;
    } else {
    	//var exemplar = $("#"+p);
	  	//if (Vanadium.validators_types['empty'].test(v)) return true;
    	var startDate = s.split("-");
      	var endDate = e.split("-");
      	var sDate = startDate.join("");
      	var eDate = endDate.join("");
      	var date = eDate - sDate;
  		if (date < 0){ 
  			dateFailmsg.text("要大于开始日期");
  			return false;
  		}else{
  			dateFailmsg.text("");
  			return true;
  		}
	}
}
/******************************************************《创建列表页面START》************************************/
	function buildListBody(bodyId,initurl,commonBtn,commandBtn,callbackPage,singleCommand,show_flag){
		if(typeof(bodyId)=="undefined"||bodyId==null||$.trim(bodyId)==""){
			layer.alert("bodyId为空！",0);
			return ;
		}
		//$("#"+bodyId).html("");
		addCommand(bodyId,commonBtn,commandBtn,show_flag);
		if(typeof(singleCommand)!="undefined"&&singleCommand!=null&&$.trim(singleCommand)!=""){
			addParameter(bodyId,singleCommand);
		}
		//var strcommand_line_slide="<div class='a_line' id='slide'>点&nbsp;&nbsp;击</div>";
		//$("#"+bodyId).append(strcommand_line_slide);
		//参数div
		
		addTableBody(bodyId,initurl,dealTitle,callbackPage);
		
	}
	
	//
	function dealTitle(resultList,error,datatitle,column,tableId,listcallback){
		if(page_common_init_flag==0){
			page_common_init_flag=1
			var str_title = "<tr>";
			var flag=1;
			$.each(datatitle,function(i,item){
				if("选择"==item||"序号"==item){
					flag=2;
					if("序号"==item)
						item="编号"
					str_title+="<th>"+item+"</th>";
				}else if("单号"==item){
					item="编号"
					str_title+="<th>"+item+"</th>";
				}else{
					str_title+="<th>"+item+"</th>";
				}
				
			});
			$("#"+tableId).append(str_title+"</tr>");
			var str_column="<tr>";
			$.each(column,function(i,item){
				if(i==0&&flag==2){
					str_column+="<td>&nbsp;</td>";
				}else if(item==null||item=="NULL"){
					str_column+="<td>&nbsp;</td>";
				}else{
					str_column+="<td align='center'><input type='text' name='"+item+"' style='width:95%;height:22px;line-height:22px;border:1px solid #ccc;'/></td>";
				}
			});
			
			$("#"+tableId).append(str_column+"</tr>");
			$("#"+tableId+" tr:eq(1)").find("input").each(function(){
				$(this).keyup(function(){
					$(this).val($(this).val().replace(/[#|&|'|、]/g, ''));
					if(event.keyCode==13){
						createWhereSql(this);
						return;
					}
				});
			});
			$("#"+tableId+" tr:eq(1)").hide();
		}
		
		listcallback(resultList);
		mouseTrOver(tableId);
	}
	
	function mouseTrOver(tableId){
		$("#"+tableId+" tr:gt(1)").hover(function(){
			//$("#"+tableId+" tr:gt(1)").removeClass("mouseover");
			$(this).addClass("mouseover");
		},function(){
			$(this).removeClass("mouseover");
		});
		/*$("#"+tableId+" tr:gt(1)").mouseover(function(){
			$("#"+tableId+" tr:gt(1)").removeClass("mouseover");
			$(this).addClass("mouseover");
		});*/
		$("#"+tableId+" tr:gt(1)").click(function(){
			rowindex = $(this).index();
			$("#"+tableId+" tr:gt(1)").removeClass("trClick");
			$(this).addClass("trClick");
			if(!$(this).find("input[type='checkbox']").prop("disabled")){
				if($(this).find("input[type='checkbox']").prop("checked")){
					$(this).find("input[type='checkbox']").prop("checked",false);
				}else{
					$(this).find("input[type='checkbox']").prop("checked",true);
				}
			}
			if(!$(this).find("input[type='radio']").prop("disabled")){
				$(this).find("input[type='radio']").prop("checked",true);
			}
		});
		$("#"+tableId+" tr").find("input").click(function(event){
			event.stopPropagation();
		})
	}
	
	function afterCommon(tableId,iniUrl,dealTit,callbackPa){
		//$("#search_row_btn").unbind("click");
		$("#search_row_btn").click(function(){			
			if($("#"+tableId+" tr:eq(1)").is(":hidden")){				
				$(this).html("隐藏");				
			}else{	
				
				$(this).html("查找");				
				var searchInput = $("#"+tableId).find("tr:eq(1)").find("input");
				for(var i=0;i<searchInput.length;i++){
					if(searchInput.eq(i).val()!=''){						
						$("#"+tableId).find("tr:eq(1)").find("input").val("");
						if(iniUrl==null){
							callbackPa();
						}else{						
							createWhereSql();
						}
						break;
					}
				}
				var searchSelect = $("#"+tableId).find("tr:eq(1)").find("select");
				for(var i=0;i<searchInput.length;i++){
					if(searchSelect.eq(i).val()!=''){						
						$("#"+tableId).find("tr:eq(1)").find("select").val("");
						if(iniUrl==null){
							callbackPa();
						}else{						
							createWhereSql();
						}
					}
				}	
				/*$("#"+tableId).find("tr:eq(1)").find("input").each(function(){
					if($(this).val()!=''){
						flag = true;
						$("#"+tableId).find("tr:eq(1)").find("input").val("");
						if(iniUrl==null){
							callbackPa();
						}else{
							createWhereSql();
						}
						return false;
					}
				})	*/			
				
			}
			
			//alert($(this).html());
			$("#"+tableId+" tr:eq(1)").toggle();
		});
		
		/*$("#search_row_btn").click(function(){
			$("#"+tableId+" tr:eq(1)").toggle(function(){
				isOpen_search=true;
			},function(){
				isOpen_search=false;
			});
		});
		if(isOpen_search){
			alert(111);
		}*/
	}
	
	function createWhereSql(input_this){		
		var strWhere="";
		$(input_this).parent().parent().find("input").each(function(){
			$(this).val($(this).val().replace(/['|#|&|、]/g, ''));
			if(""!=$(this).val()){
				var name = $(this).attr("name");
				var value = $(this).val();
				if(name == "tr.payType"){
				
					switch(value){
					case "单笔":
						value = "1";
						break;
					case "多笔":
						value = "2";
						break;
					case "即时":
						value = "0";
						break;
					default:
						value = "-1";
						break;
					}
				} else if(name == "tr.status"){
					name = "tr.description";
				}else if(name=="dp.isMessage"){
					switch(value){
					case "是":
						value = "1";
						break;
					case "否":
						value = "0";
						break;
					default:
						break;
					}
				}
				if($.trim(strWhere)==""){
					//strWhere=$(this).attr("name")+" like '%"+$(this).val()+"%'";
					strWhere=name+" like '%"+value+"%'";
				}else{
					//strWhere=strWhere+" and "+$(this).attr("name")+" like '%"+$(this).val()+"%'";
					strWhere=strWhere+" and "+name+" like '%"+value+"%'";
				}
			}
		});
		if($.trim(strWhere)!=""){
			param="wherePaginStr="+encodeURI(encodeURI(strWhere));
		}else{
			param="";
		}
		InitTable(pageIndex+1,pageSize,weburl,globalTableId,mycallback,listcallback);
	}
	
	//增加命令行div及按钮
	function addCommand(bodyId,common_btn,command_btn,show_flag){
		//命令div
		//$("#"+bodyId).html("");
		$("#"+bodyId).next().find("tr:eq(1)").find("input").each(function(){
			$(this).keyup(function(){
				$(this).val($(this).val().replace(/[#|&|'|、]/g, ''));
//				if(event.keyCode==13){
//					createWhereSql(this);
//					return;
//				}
			});
		});
		
		var strcommand="<div class='clear common_button'><div class='fr common_buttonR' id='"+bodyId+"_commonBtns'></div><div class='fl common_buttonL' id='"+bodyId+"_commandBtns'></div></div>";
		$("#"+bodyId).append(strcommand);
		
		if(typeof(show_flag)!="undefined"&&show_flag==1){
			if(typeof(common_btn)!="undefined"&&common_btn!=null&&$.trim(common_btn)!=""){
				$.each(common_btn,function(i,item){
				//	if(item.btnId!="search_row_btn")return false;
					
					if(typeof(item.btnId)=="undefined"||item.btnId==null||$.trim(item.btnId)==""){
						layer.alert("按钮Id为空！",0);
						return ;
					}
					if(typeof(item.btnName)=="undefined"||item.btnName==null||$.trim(item.btnName)==""){
						layer.alert("按钮名称为空！",0);
						return ;
					}
					var btnClass="";
					var btnOnclick="";
					if(typeof(item.btnClass)!="undefined"&&item.btnClass!=null&&$.trim(item.btnClass)!=""){
						btnClass=item.btnClass;
					}
					if(typeof(item.btnOnclick)!="undefined"&&item.btnOnclick!=null&&$.trim(item.btnOnclick)!=""){
						btnOnclick=item.btnOnclick;
					}
					if(btnClass!=""&&btnOnclick!=""){
						$("#"+bodyId+"_commonBtns").append("<button type='button' id='"
								+item.btnId+"' class='"+btnClass+"' onclick='"+btnOnclick+"'>"+item.btnName+"</button>");
					}else if(btnClass!=""){
						$("#"+bodyId+"_commonBtns").append("<button type='button' id='"
								+item.btnId+"' class='"+btnClass+"'>"+item.btnName+"</button>");
					}else if(btnOnclick!=""){
						$("#"+bodyId+"_commonBtns").append("<button type='button' id='"
								+item.btnId+"' onclick='"+btnOnclick+"'>"+item.btnName+"</button>");
					}else{
						$("#"+bodyId+"_commonBtns").append("<button type='button' id='"
								+item.btnId+"'>"+item.btnName+"</button>");
					}
					$("#"+item.btnId).mouseover(function(){
						$(this).addClass("btn_hover");
					});
					
					//按钮移除图标变回
					$("#"+item.btnId).mouseout(function(){
						$(this).removeClass("btn_hover");	
					});
					//if(item.btnId!="search_row_btn")
				});
				$("#common_fullScreen_btn").click(function(){
					fullScreen();
				});
			}
		}
		
		
		if(typeof(command_btn)!="undefined"&&command_btn!=null&&$.trim(command_btn)!=""){
			$.each(command_btn,function(i,item){
				if(typeof(item.btnId)=="undefined"||item.btnId==null||$.trim(item.btnId)==""){
					layer.alert("按钮Id为空！",0);
					return ;
				}
				if(typeof(item.btnName)=="undefined"||item.btnName==null||$.trim(item.btnName)==""){
					layer.alert("按钮名称为空！",0);
					return ;
				}
				var btnClass="";
				var btnOnclick="";
				if(typeof(item.btnClass)!="undefined"&&item.btnClass!=null&&$.trim(item.btnClass)!=""){
					btnClass=item.btnClass;
				}
				if(typeof(item.btnOnclick)!="undefined"&&item.btnOnclick!=null&&$.trim(item.btnOnclick)!=""){
					btnOnclick=item.btnOnclick;
				}
				if(btnClass!=""&&btnOnclick!=""){
					$("#"+bodyId+"_commandBtns").append("<button type='button' id='"
							+item.btnId+"' class='"+btnClass+"' onclick='"+btnOnclick+"'>"+item.btnName+"</button>");
				}else if(btnClass!=""){
					$("#"+bodyId+"_commandBtns").append("<button type='button' id='"
							+item.btnId+"' class='"+btnClass+"'>"+item.btnName+"</button>");
				}else if(btnOnclick!=""){
					$("#"+bodyId+"_commandBtns").append("<button type='button' id='"
							+item.btnId+"' onclick='"+btnOnclick+"'>"+item.btnName+"</button>");
				}else{
					$("#"+bodyId+"_commandBtns").append("<button type='button' id='"
							+item.btnId+"'>"+item.btnName+"</button>");
				}
				$("#"+item.btnId).mouseover(function(){
					$(this).addClass("btn_hover");
				});
				
				//按钮移除图标变回
				$("#"+item.btnId).mouseout(function(){
					$(this).removeClass("btn_hover");	
				});
			});
		}
	}
	
	function addParameter(bodyId,parameterCommand){
		var strcommand_line="<div class=\"parameter clear\" id=\""+bodyId+"_parameter\"></div>";
		$("#"+bodyId).append(strcommand_line);
		$("#"+bodyId+"_parameter").append(parameterCommand);
	}
	
	function addTableBody(bodyId,iniUrl,dealTit,callbackPa){
		//表体div
		$("#"+bodyId).append("<div id='"+bodyId+"_list' class='table' style='overflow-x:auto;'></div>");
		$("#"+bodyId+"_list").append("<table id='"+bodyId+"_list_table'></table>");
		$("#"+bodyId).append("<div id='Pagination' class='scott' style='width:100%;-float:left;'></div>");
		
		
		InitTable(0, 10, iniUrl, bodyId+"_list_table",dealTit,callbackPa);
		afterCommon(bodyId+"_list_table",iniUrl,dealTit,callbackPa);
	}
	
	
	function mouseTrOverOnly(tableId){
		$("#"+tableId+" tr:gt(0)").hover(function(){
			$(this).addClass("mouseover");
			$(this).find("td").css("background","#f5f5f5");
		},function(){
			$(this).removeClass("mouseover");
			$(this).find("td").css("background","inherit");
		});
		$("#"+tableId+" tr:gt(0)").click(function(){
			rowindex = $(this).index();
			$("#"+tableId+" tr:gt(0)").removeClass("trClick");
			$(this).addClass("trClick");
			$("#"+tableId+" tr:gt(0) td").css("background","inherit");
			$(this).find("td").css("background","#FFE6E6");
			if($(this).find("input[type='radio']").attr("disabled")!="disabled"){
				//if($(this).find("input[type='radio']").attr("checked")=="checked"){
					//$(this).find("input[type='radio']").attr("checked",false);
				//}else{
					$(this).find("input[type='radio']").attr("checked",true);
				//}
			}
		});
		$("#"+tableId+" tr").find("input[type='radio']").click(function(event){
			$("#"+tableId+" tr:gt(0)").removeClass("trClick");
			$(this).parent().parent().addClass("trClick");
			event.stopPropagation();
		})
	}
	

	function mouseTrOverCheckboxOnly(tableId){
		$("#"+tableId+" tr:gt(0)").hover(function(){
			$(this).addClass("mouseover");			
		},function(){
			$(this).removeClass("mouseover");			
		});
		$("#"+tableId+" tr:gt(0)").click(function(){
			rowindex = $(this).index();
			$("#"+tableId+" tr:gt(0)").removeClass("trClick");
			$(this).addClass("trClick");			
			if($(this).find("input[type='checkbox']").prop("checked")){
				$(this).find("input[type='checkbox']").prop("checked",false);
			} else{
				$(this).find("input[type='checkbox']").prop("checked",true);
			}
		});
		$("#"+tableId+" tr").find("input[type='checkbox']").click(function(event){
			$("#"+tableId+" tr:gt(0)").removeClass("trClick");
			$(this).parent().parent().addClass("trClick");
			event.stopPropagation();
		})
	}
/******************************************************《创建列表页面END》************************************/
/*
	$(function(){
	$("table .editor").mouseover(function(){
		$(this).addClass("editor_hover");
	})
	$("table .delete").mouseover(function(){
		$(this).addClass("delete_hover");
	})
	$("table .editor").mouseout(function(){
		$(this).removeClass("editor_hover");
	})
	$("table .delete").mouseout(function(){
		$(this).removeClass("delete_hover");
	})
})*/

	
/***************************************************扩展Array的删除方法***************************************************/
	Array.prototype.indexOf = function(val){
		for(var i = 0; i < this.length; i++){
			if(this[i] == val){
				return i;
			}
		}
		
		return -1;
	};
	
	Array.prototype.remove = function(val){
		var index = this.indexOf(val);
		if(index > -1){
			this.splice(index, 1);
		}
	};
	
/************************************************非分页页面查找功能辅助方法------START*********************************************************/
	function createNoPaginWhereSql(){
		var strWhere="";
		$("#Result tr:eq(1)").find("input").each(function(){
			if(""!=$(this).val()){
				if($.trim(strWhere)==""){
					strWhere=$(this).attr("name")+" like '%"+$(this).val()+"%'";
				}else{
					strWhere=strWhere+" and "+$(this).attr("name")+" like '%"+$(this).val()+"%'";
				}
			}
			
		});
		if($.trim(strWhere)!=""){
			if(param!=null&&$.trim(param)!=""){
				param+="&&wherePaginStr="+encodeURI(encodeURI(strWhere));
			}else{
				param="wherePaginStr="+encodeURI(encodeURI(strWhere));
			}
			
		}
	}
/************************************************非分页页面查找功能辅助方法------END*********************************************************/
	
	function Parbusi(PStr){
	var ParbusiName = "";
	switch(PStr){
	case 'ACB-p':
		ParbusiName = "归集下拨";
		break;
	case 'MIO-p':
		ParbusiName = "交易市场";
		break;
	case 'FRZ-p':
		ParbusiName = "保全支付";
		break;
	case 'BAP-p':
		ParbusiName = "代收代付";
		break;
	case 'ERD-p':
		ParbusiName = "电子回单";
		break;
	case 'SOA-p':
		ParbusiName = "电子对账";
		break;
	case 'STA-p':
		ParbusiName = "交易明细与状态";
		break;
	case 'LCP-p':
		ParbusiName = "理财产品";
		break;
	case 'BOE-p':
		ParbusiName = "票据业务";
		break;
	case 'BDF-p':
		ParbusiName = "融资贷款";
		break;
	case 'CBA-p':
		ParbusiName = "查询余额";
		break;
	case 'ETL-p':
		ParbusiName = "委托贷款";
		break;
	case 'CNP-p':
		ParbusiName = "支付转账";
		break;
	default:
		ParbusiName = "其他业务";
		break;
	}
	return ParbusiName;
}
	
	
	function getAcctTypeDesc(acctType){
		var desc = "";
		switch(acctType){
		case 1:
			desc = "普通账户";
			break;
		case 4:
			desc = "贷款账户";
			break;
		case 2:
			desc = "单位银行结算账户";
			break;
		case 3:
			desc = "单位定期存款账户";
			break;
		case 5:
			desc = "协议账户";
			break;
		case 6:
			desc = "单位通知存款账户";
			break;
		}
		
		return desc;
	}
	
/*************************************************表单提交判断是否需要签名 BEGIN*********************************************************************/
var workflowBeginSignObj = new Object();

/*function showWorkflowBeginSign(datamsg){
	showWorkflowBeginSign(datamsg, true);
}*/
function showWorkflowBeginSign(datamsg, flag){
	
	workflowBeginSignObj.window= window;
	workflowBeginSignObj.msg= datamsg;
	//workflowBeginSignObj.isClose = isClose;
	
	if(typeof(ThisIframeId) == "undefined"){
		if(typeof(layerIndex) != "undefined"){
			ThisIframeId = "xubox_iframe"+layerIndex;
		}
	}
	
	
	var source = 'page/workflow/workflow-submitsign.html?='+ThisIframeId;
	if(flag == 1){
		source = '../workflow/workflow-submitsign.html?='+ThisIframeId
	}
	
	//alert(workflowBeginSignObj.window+"----"+workflowBeginSignObj.msg);
	
	if(check_session($(parent.window.document).find("#username").html())){	
		parent.$.layer({
			type:2,
			shade:[0.1,'#fff'],
			fix:false,
			title:["验证业务审批流程"],
			iframe:{src:source},
			area:['500px','250px'],
			close:function(index){
				parent.layer.close(index);
				closeNow();
			}
		})
	}
}

function closeNow(){
	 if(typeof(layerIndex) == "undefined"){
		if(typeof(jsyeType) != "undefined"){
			jsyeType();
		}

	 }else{
		 if(typeof(jymxType) != "undefined"){
				jymxType();
			}else if(typeof(purchaseorder)!="undefined"){
				parent.parent.layer.close(layerIndex);
			}else{
				parent.layer.close(layerIndex);
			}
	 }
}
/*************************************************表单提交判断是否需要签名 END*********************************************************************/

function getEntertypeDesc(type){
	var desc="";
	switch(type){
	case 21:
		desc = "链心企业";
		break;
	case 22:
		desc = "供应企业";
		break;
	case 23:
		desc = "渠道企业";
		break;
	}
	return desc;
}

function getSupplyFinanceDesc(type){
	var desc="";
	switch(type){
	case 0:
		desc = "申请审批中";
		break;
	case 1:
		desc = "申请通过";
		break;
	case 2:
		desc = "申请被驳回";
		break;
	case 3:
		desc = "融资审批中";
		break;
	case 4:
		desc = "融资已完成";
		break;
	case 5:
		desc = "融资取消";
		break;
	case 6:
		desc = "融资失败";
		break;
	case 7:
		desc = "融资失败[协同超期]";
		break;
	case 8:
		desc = "已还款";
		break;
	case 9:
		desc = "还款延期";
		break;
	}
	return desc;
}

//指定按钮禁用
function btnDisabled(id){
	$("#"+id).attr("disabled", "disabled");
	$("#"+id).addClass("disabled");
}

//指定按钮取消禁用
function btnEnabled(id){
	$("#"+id).removeAttr("disabled");
	$("#"+id).removeClass("disabled");
}
function printPage(id,tHeight,id1,str,printTitle){
	//id table外的div id ，为空时 table 在id为id1的div里
	//id1 命令功能按钮 div id
	//0 不存在参数div  str 参数div id	 
    var tabel_div_id;//table的父级div的id
    var tyle = "";
    if(id !=""){
    	tabel_div_id = id;    	
    }else{
    	tabel_div_id = id1+"_list";
    }
    // alert(tabel_div_id);
    if (str!=0){ //参数行隐藏
    	$("#"+str).hide();	  
    }  
    tyle =  $("#"+tabel_div_id).attr("style");
    $("#"+tabel_div_id).removeAttr("style");//移除限制表格高度的样式 word-break:break-all; 　word-wrap:break-word;
    $("#"+tabel_div_id).find("table td,th").css({"white-space":"normal","border-color":"#999999","word-break":"break-all","word-wrap":"break-word"});//消除横向滚动条
  
   // $("#"+tabel_div_id).find("table td").css("border-color","#999");//表格边框颜色改变
    //$("#"+tabel_div_id).find("table th").css("border-color","#999");//表格边框颜色改变
    //隐藏选择和操作列	    	  
    $("#"+tabel_div_id).find("th").each(function(){
    	var num = $(this).index();
    	if($(this).text()=="选择"||$(this).text()=="操作"){
    		$(this).hide();
    		$("#"+tabel_div_id).find("tr").find("td:eq("+num+")").hide();
    	}
    })
   // alert($("#"+tabel_div_id).find("table").find("tr:eq(1)").find("input[type='text']").length)
    var searchTr = $("#"+tabel_div_id).find("table").find("tr:eq(1)");
    var searchTrHide = false;
    if($("#"+tabel_div_id).find("table").find("tr:eq(1)").find("input[type='text']").length>0){//查找input行隐藏
    	if(searchTr.is(":visible")){
    		searchTrHide = true;
    		$("#"+tabel_div_id).find("table").find("tr:eq(1)").hide();
    	}
    	
    }
    $("#"+tabel_div_id).find("tr").each(function(){//隐藏表格里的单选框，复选框，按钮
    	$(this).find("input[type='radio']").hide();
    	$(this).find("input[type='checkbox']").hide();
    	//$(this).find("input[type='button']").hide();
    })
    //隐藏排序图片
    var flag = false;
    if($("#"+tabel_div_id).find("table tr:eq(0)").find("img.sortImg").is(":visible")){
    	flag = true;
    	$("#"+tabel_div_id).find("table tr:eq(0)").find("img.sortImg").hide();	  
    }
    if(printTitle!=undefined){
    	//添加打印标题
    	$("#"+tabel_div_id).before("<div id='print_title'><h2 style='line-height:30px;text-align:center;font-size:14px;'>"+printTitle+"</h2></div>");
    }
    //隐藏按钮
    $("#"+id1+"_commandBtns").find("button").hide();
    $("#"+id1+"_commonBtns").find("button").hide();
    $("#"+id1+"_commandBtns").parent().hide();
    //隐藏分页
    if($("#Pagination").parent().attr("class")=="pagination"){
    	$("#Pagination").parent().hide();
    }
    //Pagination_v1
    $("#Pagination").hide();
 
    //pagesetup_null();
    window.print();//打印  
     
   if (str!=0){
 	   $("#"+str).show();	  //参数行显示
    }
    if(flag){ //有排序图标的显示
    	 $("#"+tabel_div_id).find("table tr:eq(0)").find("img.sortImg").show();
    }
    $("#"+tabel_div_id).attr("style",tyle);//添加原有的样式
    $("#"+tabel_div_id).find("table td,th").css({"white-space":"nowrap","border-color":"#cdced0","word-break":"normal","word-wrap":"normal"});//消除横向滚动条
    $("#"+tabel_div_id).find("table td,th").css("white-space","nowrap");//还原表格强制转换
    $("#"+tabel_div_id).find("table td,th").css("border-color","#cdced0");//还原表格边框原来的颜色
    $("#"+tabel_div_id).find("th").each(function(){//显示选择和操作列
 	   var num = $(this).index();
 	   if($(this).text()=="选择"||$(this).text()=="操作"){
 		   $(this).show();
 		   $("#"+tabel_div_id).find("tr").find("td:eq("+num+")").show();
 	   }
    })
    var searchTr = $("#"+tabel_div_id).find("table").find("tr:eq(1)");
    if($("#"+tabel_div_id).find("table").find("tr:eq(1)").find("input[type='text']").length>0){
	    if(searchTrHide){//查找input行显示
	    	$("#"+tabel_div_id).find("table").find("tr:eq(1)").show();
	    }else{
	    	$("#"+tabel_div_id).find("table").find("tr:eq(1)").hide();
	    }
    }
    $("#"+tabel_div_id).find("tr").each(function(){//显示表格里的单选框，复选框，按钮
    	$(this).find("input[type='radio']").show();
    	$(this).find("input[type='checkbox']").show();
    	//$(this).find("input[type='button']").show();
    })
    $("#print_title").remove();//移除添加的标题
    $("#"+id1+"_commandBtns").find("button").show();//命令行按钮显示
    $("#"+id1+"_commonBtns").find("button").show();
    $("#"+id1+"_commandBtns").parent().show();
    if($("#Pagination").parent().attr("class")=="pagination"){
    	$("#Pagination").parent().show();
    }
    $("#Pagination").show();//分页显示
    
}
//设置网页打印的页眉页脚为空
function pagesetup_null(){

	try {
		var RegWsh = new ActiveXObject("WScript.Shell");
		hkey_key = "header";
		RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
		hkey_key = "footer";
		RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
	}catch (e) {
	}

}
//************************页面排序start*******************//
function sort(tableId,j,imagePath,dataNum){
	//imagePath 默认page下     ,1 例如：page/fk文件夹下
	//dataNum  默认时间排序（索引从0开始）
	//j  table列的个数（1开始） 移除样式
	var tableSort = function() {
		this.initialize.apply(this, arguments);
	}

	tableSort.prototype = {

		initialize : function(tableId, clickRow, startRow, endRow, classUp,
				classDown, selectClass) {
			this.Table = document.getElementById(tableId);
			this.rows = this.Table.rows;//所有行 
			this.Tags = this.rows[clickRow - 1].cells;//标签td 
			this.up = classUp;
			this.down = classDown;
			this.startRow = startRow;
			this.selectClass = selectClass;
			this.endRow = (endRow == 999 ? this.rows.length : endRow);
			this.T2Arr = this._td2Array();//所有受影响的td的二维数组 
			this.setShow();
		},
		//设置标签切换 
		setShow : function() {
			var defaultClass = this.Tags[0].className;
			for ( var Tag, i = 0; Tag = this.Tags[i]; i++) {
			
				if ("选择"!=$(Tag).text()&&""!=$(Tag).text()&&"操作"!=$(Tag).text()){
				Tag.index = i;
				//Tag.removeEventListener('click', Bind(Tag, statu), true)
				//removeEventListener(Tag, 'click', Bind(Tag, statu));
				//addEventListener(Tag, 'click', Bind(Tag, statu));
				//}
					$(Tag).unbind("click");
					$(Tag).bind("click",Bind(Tag, statu));
				}
				if (i==dataNum){
					if (imagePath==1){
						if (!($(Tag).find("img").length>0)){
							Tag.innerHTML +="<img   src='../../images/sort_asc.gif' class='sortImg'/>";	
						}
					}else if(imagePath==2){
						if (!($(Tag).find("img").length>0)){
							Tag.innerHTML +="<img   src='../../../images/sort_asc.gif' class='sortImg'/>";	
						}
					}else{
						if (!($(Tag).find("img").length>0)){
							Tag.innerHTML +="<img   src='../images/sort_asc.gif' class='sortImg'/>";
						}
					}
					 
				}else{
					 if (($(Tag).find("img").length>0)){
						$(Tag).find("img").remove();	
					}
				}
				
			}
			var _this = this;
			var turn = 0;
			function statu() {
				for ( var i = 0; i < _this.Tags.length; i++) {
					_this.Tags[i].className = defaultClass;
					
				}
				//alert("index"+this.index);
				if (turn == 0) {
					addClass(this, _this.down)
					_this.startArray(0, this.index);
					turn = 1;
				} else {
					addClass(this, _this.up)
					_this.startArray(1, this.index);
					turn = 0;
				}
			}
		},
		//设置选中列样式 
		colClassSet : function(num, cla) {
			
			//得到关联到的td 
			for ( var i = (this.startRow); i <(this.endRow); i++) {
			//	for ( var n = 0; n < this.rows[i].cells.length; n++) {
			//	alert(this.startRow+"@@"+this.rows.length);
					for ( var n = 0; n < j; n++) {
							if(n!=num){
								removeClass(this.rows[i].cells[n], cla, this.rows[0],n);
							}						
					}				
				addClass(this.rows[i].cells[num], cla);
			}
			
			if(this.startRow==this.endRow){
				for ( var n = 0; n < j; n++) {
					if(n!=num){
						removeClass(this.rows[0].cells[n], cla, this.rows[0],n);
					}
				
				}
			}
		},
		//开始排序 num 根据第几列排序 aord 逆序还是顺序 
		startArray : function(aord, num) {
			var afterSort = this.sortMethod(this.T2Arr, aord, num);//排序后的二维数组传到排序方法中去 
			this.array2Td(num, afterSort);//输出 
		},
		//将受影响的行和列转换成二维数组 
		_td2Array : function() {
	//		alert("将受影响的行和列转换成二维数组 ");
			var arr = [];
			for ( var i = (this.startRow ), l = 0; i <(this.endRow); i++, l++) {
				arr[l] = [];
				for ( var n = 0; n < this.rows[i].cells.length; n++) {
				
					arr[l].push(this.rows[i].cells[n].innerHTML);
				}
			}
			return arr;
		},
		//根据排序后的二维数组来输出相应的行和列的 innerHTML 
		array2Td : function(num, arr) {
	//		alert("根据排序后的二维数组来输出相应的行和列的 innerHTML"+this.selectClass);
		//	alert(this.rows.length+"endrows"+this.endRow);
			this.colClassSet(num, this.selectClass);
			for ( var i = (this.startRow ), l = 0; i <(this.endRow); i++, l++) {
				for ( var n = 0; n < this.Tags.length; n++) {
					this.rows[i].cells[n].innerHTML = arr[l][n];
				}
			}
		},
		//传进来一个二维数组，根据二维数组的子项中的w项排序，再返回排序后的二维数组 
		sortMethod : function(arr, aord, w) {
		//	alert("传进来一个二维数组，根据二维数组的子项中的w项排序，再返回排序后的二维数组 ");
			//var effectCol = this.getColByNum(whichCol); 
			arr.sort(function(a, b) {
				x = killHTML(a[w]);
				y = killHTML(b[w]);
				x = x.replace(/,/g, '');
				y = y.replace(/,/g, '');
				switch (isNaN(x)) {
				case false:
					return Number(x) - Number(y);
					break;
				case true:
					return x.localeCompare(y);
					break;
				}
			});
			var str = '';
			if(arr.length==0) return;
			var str = arr[0][w];
			for(var i=0;i<arr.length;i++){
				if(arr[i][w] != str){
					arr = aord == 0 ? arr : arr.reverse();
					break;
				}
			}
			//arr = aord == 0 ? arr : arr.reverse();
			return arr;
		}
	}
	/*-----------------------------------*/
	function addEventListener(o, type, fn) {
	//	o.removeEventListener(type, fn, false);
		
		if (o.attachEvent) {
	//		alert("ie");
		//	o.detachEvent('on' + type, fn);
			o.attachEvent('on' + type, fn)
		} else if (o.addEventListener) {
	//		alert("google");
	//		o.removeEventListener(type, fn, false);
			o.addEventListener(type, fn, false)
		} else {
			alert("33333333");
			o['on' + type] = fn;
		}
	}
//	function removeEventListener(o, type, fn) {
//		if (o.attachEvent) {
//			o.attachEvent('on' + type, fn)
//		} else if (o.addEventListener) {
//			o.addEventListener(type, fn, false)
//		} else {
//			o['on' + type] = fn;
//		}
//	}

	function hasClass1(element, className) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		return element.className.match(reg);
	}

	function addClass(element, className) {
	/*	if (!hasClass1(element, className)) {
			element.className += " " + className;
		}*/
		var ele=element.innerHTML;
		var strs;
		if(ele.indexOf("img")>=0){
			 strs=	ele.split("<img")[0];
		}else if(ele.indexOf("IMG")>=0){
			 strs=	ele.split("<IMG")[0];
		}
		
		else{
			strs=element.innerHTML;
		}
		if("down"==className){
		//	element.innerHTML=strs+"<img   src='../images/sort_desc.gif' class='sortImg'/>";
			if (imagePath==1){
				element.innerHTML=strs+"<img   src='../../images/sort_desc.gif' class='sortImg'/>";				
			}else if(imagePath==2){
				element.innerHTML=strs+"<img   src='../../../images/sort_desc.gif' class='sortImg'/>";	
			}else{
				element.innerHTML=strs+"<img   src='../images/sort_desc.gif' class='sortImg'/>";
			}
		}else{
		//	element.innerHTML=strs+"<img   src='../images/sort_asc.gif' class='sortImg'/>";
			if (imagePath==1){
				element.innerHTML=strs+"<img   src='../../images/sort_asc.gif' class='sortImg'/>";				
			}else if(imagePath==2){
				element.innerHTML=strs+"<img   src='../../../images/sort_asc.gif' class='sortImg'/>";	
			}
			else{
				element.innerHTML=strs+"<img   src='../images/sort_asc.gif' class='sortImg'/>";
			}
		}
	}

	function removeClass(element, className,This,len) {
		/*if (hasClass1(element, className)) {
			var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
			element.className = element.className.replace(reg, ' ');
		}*/
		var ele=This.cells[len].innerHTML;
		var strs;
		if(ele.indexOf("img")>=0){
			This.cells[len].innerHTML=ele.split("<img")[0]+"</th>";
		}else if(ele.indexOf("IMG")>=0){
			This.cells[len].innerHTML=ele.split("<IMG")[0]+"</th>";
		}
	}

	var Bind = function(object, fun) {
		return function() {
			return fun.apply(object, arguments);
		}
	}
	//去掉所有的html标记 
	function killHTML(str) {
		return str.replace(/<[^>]+>/g, "");
	}
	//------------------------------------------------ 
	//tableid 第几行是标签行，从第几行开始排序，第几行结束排序(999表示最后) 升序标签样式，降序标签样式 选中列样式 
	//注意标签行的class应该是一致的 
	var ex1 = new tableSort(tableId, 1, 2, 999, 'up', 'down', 'hov');
}
//*************************页面排序end*********************//

/*******************************************************邀请入链状态描述********************************************************/
function getSupplyChainInviteDesc(status){
	var desc = "";
	switch(status){
	case 0:
		desc = "待回复";
		break;
	case 1:
		desc = "已同意";
		break;
	case -1:
		desc = "已拒绝";
		break;
	}
	return desc;
}
/*******************全屏****************************/
function fullScreen(){	
	var screenW = top.$("body").width();
	var screenH = top.$("body").height();
	if($("#common_fullScreen_btn").text()=="全屏"){
		//alert(parent.window.$(".l-tab-links").find("ul li").length);
		top.$(".l-tab-links").find("ul li").hide();
		top.$(".l-tab-links").find("ul li.l-selected").show();
		$("#common_fullScreen_btn").text("还原");
		$("#common_fullScreen_btn").attr("class","btn returnScreen");
		
		//top.$("#content_right").width($("#head").width()-$("#content_left").width()-25);
		
		top.$("#head").hide();
		top.$("#nav").hide();
		//alert(top.$("body").width()*0.85-14);
		//alert(window.parent.document.getElementByTagName("body").innerHTML);
		top.$("#content_right").width(screenW*0.85-14);
		top.$("#content_left").hide();
		top.$("#btn_setting").hide();
		//alert(screenW+"---"+screenH);
		top.$("#content_right").find("iframe").height(screenH-150);
	}else{
		$("#common_fullScreen_btn").text("全屏");
		$("#common_fullScreen_btn").attr("class","btn fullScreen");
		top.$(".l-tab-links").find("ul li").show();
		top.$("#head").show();
		top.$("#nav").show();
		//alert(top.$("body").width()*0.85-14);
		//alert(window.parent.document.getElementByTagName("body").innerHTML);
		//top.$("#content_right").width(screenW*0.85-245);
		top.$("#content_left").show();
		top.$("#btn_setting").show();
		top.$("#content_right").width(top.$("#head").width()-top.$("#content_left").width()-25);
		
		
		top.$("#content_right").find("iframe").height(550);
	}
	
}		
function strToJson(str){ 
	var json = eval('(' + str + ')'); 
	return json; 
}
/*
 * Images 通过选择器定位到要操作的图片
 * 
 */
function imagePreview(Images){
	/* CONFIG */
		
		xOffset = 10;
		yOffset = 30;
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result
		
	/* END CONFIG */
	$(Images).hover(function(e){
		this.t = this.title;
		this.title = "";	
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<div id='preview' style='z-index:99999;'><img src='"+ this.src +"' alt='Image preview' />"+ c +"</div>");								 
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");						
    },
	function(){
		this.title = this.t;	
		$("#preview").remove();
    });
	//点击显示轮播图
	 layer.photosPage({
//         html: '这里传入自定义的html，也可以不传',
        parent: '#ImageDiv'
    });
	$(Images).mousemove(function(e){
		
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};
//shop 新增图片的排序
function orderChange(This){
	var imageArry=new Array();
	$(This).parent().parent().siblings(':gt(1)').each(function(){
		var input=$(this).find("[name=order]");
		if(input.val()=="")return;
		imageArry.push(input.val());
	})
	
	var sortArry=new Array();
	for(var i=1;i<=$(This).parents("table").find("[name=order]").length;i++){
		sortArry.push(i);
	}
	var temp = []; //临时数组1  

    var temparray = [];//临时数组2  

    for (var i = 0; i < imageArry.length; i++) {  
        temp[imageArry[i]] = true;//巧妙地方：把数组B的值当成临时数组1的键并赋值为真  
    };  
    for (var i = 0; i < sortArry.length; i++) {  
        if (!temp[sortArry[i]]) {  
            temparray.push(sortArry[i]);//巧妙地方：同时把数组A的值当成临时数组1的键并判断是否为真，如果不为真说明没重复，就合并到一个新数组里，这样就可以得到一个全新并无重复的数组  
        } ;  
    }
    var temparrayStr=temparray.join(",");
    var num=0;
    for (var i = 0; i < temparray.length; i++) {  
        if (temparray[i]==$(This).val()) {  
        	num++;return;
        } ;  
    }
    if(num==0){
	    $(This).val("");
		layer.alert("请输入以下数字："+temparrayStr,0);
    }
}
//只能输入数字
function onlyNum(This){
	This.value=This.value.replace(/[^\d]/g,'');
}

//处理备用字段  fk--view
function transPurpose(purposeCode){
	var reg = /^货款$|^采购款$|^上交款$|^保证金$|^工程款$|^拨款$|^还款$/;
	if(reg.test(purposeCode)){
		$("#purpose").append("<option value='"+purposeCode+"'>"+purposeCode+"</option>");
	}else{
		$("#purpose").append("<option value='其他'>其他</option>");
		$("#otherPurpose").show();
		$("#otherPurpose").val(purposeCode);
	}
	
}


//fk-modi
function modiPurpose(purposeCode){
	if(purposeCode==null || purposeCode=="") return;
	var reg = /^货款$|^采购款$|^上交款$|^保证金$|^工程款$|^拨款$|^还款$/;
	if(reg.test(purposeCode)){
		var purList  =  $("#purpose option");
		$.each(purList,function(i,item){
			//console.dir(purList);
			if($(this).val()==purposeCode){
				$(this).attr("selected", true);
			}
		}) ;
	}else{
		$("#purpose option").eq(7).attr("selected",true);
		$("#otherPurpose").show();
		$("#otherPurpose").val(purposeCode);
	}
	
}

function getRiskType(riskType){
	var riskTypeDescription = "";
	if(riskType==1){
		riskTypeDescription ="暂无";
	}else if(riskType=="R1"){
		riskTypeDescription ="极低风险型";
	}else if(riskType=="R2"){
		riskTypeDescription ="低风险型";
	}else if(riskType=="R3"){
		riskTypeDescription ="中等风险型";
	}else if(riskType=="R4"){
		riskTypeDescription ="较高风险型";
	}else if(riskType=="R5"){
		riskTypeDescription ="高风险型";
	}
	return riskTypeDescription;

}

function getReleaseObject(releaseObject){
	var releaseObjectDescription = "";
	if(releaseObject==0){
		releaseObjectDescription ="个人";
	}else if(releaseObject==1){
		releaseObjectDescription ="对公";
	}else if(releaseObject==2){
		releaseObjectDescription ="二者均可";
	}
	return releaseObjectDescription;

}

function transUrgent(value){
	var desc;
	if(value=="普通"){
		desc = 0;
	}else if(value=="加急"){
		desc = 1;
	}else if(value=="特急"){
		desc = 2;
	}else{
		desc = 0;
	}
	return desc;
}

function transPathType(value){
	var desc;
	if(value=="小额批付"){
		desc = 2;
	}else if(value=="大额实时"){
		desc = 1;
	}else {
		desc = 0;
	}
	return desc;
}


//周期性转换
function transPeriod(payNow,payType){
	var returnStr="无相关数据";
	if(parseInt(payNow)==1){
		returnStr="即时";
	}else{
		if(parseInt(payType)==1){
			returnStr="单次";
		}else if(parseInt(payType)==2){
			returnStr="周期";
		}
		
	}
	return returnStr;
}


function sycnEnterType(type){
	if(type == 21){
		return "链心企业";
	}else if(type == 22){
		return "供应企业";
	}else if(type == 23){
		return "渠道企业";
	}else if(type == 24){
		return "物流企业";
	}else if(type == 25){
		return "仓储企业";
	}else if(type == 26){
		return "中介机构";
	}else if(type == 27){
		return "担保机构";
	}else{
		return "其他企业";
	}
}

function sycnEnterInviteStatus(status){
	if(status == 0){
		return "邀请中";
	}else if(status == 1){
		return "已同意";
	}else if(status == -1){
		return "已拒绝";
	}
}