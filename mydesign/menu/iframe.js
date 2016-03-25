// JavaScript Document

 
function iFrameHeight() { 
	var ifm= document.getElementById("iframepage"); 
	var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument; 
	if(ifm != null && subWeb != null) { 
		ifm.height = subWeb.body.scrollHeight; 
	} 
} 

function dyniframesize(down) { 
	var pTar = null; 
	if (document.getElementById){ 
		pTar = document.getElementById(down); 
	} 
	else{ 
		eval('pTar = ' + down + ';'); 
	} 
	if (pTar && !window.opera){ 
		//begin resizing iframe 
		pTar.style.display="block"; 
		if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight){ 
			//ns6 syntax 
			pTar.height = pTar.contentDocument.body.offsetHeight +20; 
			pTar.width = pTar.contentDocument.body.scrollWidth+20; 
		} 
		else if (pTar.Document && pTar.Document.body.scrollHeight){ 
			//ie5+ syntax 
			pTar.height = pTar.Document.body.scrollHeight; 
			pTar.width = pTar.Document.body.scrollWidth; 
		} 
	} 
} 
function SetCwinHeight() { 
	var iframeid = document.getElementById("maincontent1"); //iframe id 
	iframeid.height = "10px";//先给一个够小的初值,然后再长高. 
	if (document.getElementById) { 
		if (iframeid && !window.opera) { 
			if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight) { 
				iframeid.height = iframeid.contentDocument.body.offsetHeight; 
			} else if (iframeid.Document && iframeid.Document.body.scrollHeight) { 
				iframeid.height = iframeid.Document.body.scrollHeight; 
			} 
		} 
	} 
} 
