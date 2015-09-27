分析：<div class="box aa bb"></div>包含多个class的元素，可以将class按空格拆分成数组，如果获取的class满足数组中的一个元素，则获取此元素

function getByClass(sclass){
	var aResult=[];
	var aEle = document.getElementsByTagName('*');
	for(var i=0; i<aEle.length; i++){
		var arr = aEle[i].className.split(' ');
		for(var j=0; j<arr.lenght; j++){
			if(arr[j] == sClass){
				aResult.push(aEle[i]);
			}
		}
	}
	return aResult;
}

var aBox = getByClass("box");

优化：该方法只传递一个参数：sClass，获取的是HTML中所有的标签，资源大大浪费。
可以再传一个class的父标签元素。

function getByClass(oParent, sClass){
	var aResult=[];
	var aEle = document.getElementsByTagName(oParent);
	for(var i=0; i<aEle.length; i++){
		var arr = aEle[i].className.split(' ');
		for(var j=0; j<arr.lenght; j++){
			if(arr[j] == sClass){
				aResult.push(aEle[i]);
			}
		}
	}
	return aResult;
}
var aBox = getByClass("div","box");

