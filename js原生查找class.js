������<div class="box aa bb"></div>�������class��Ԫ�أ����Խ�class���ո��ֳ����飬�����ȡ��class���������е�һ��Ԫ�أ����ȡ��Ԫ��

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

�Ż����÷���ֻ����һ��������sClass����ȡ����HTML�����еı�ǩ����Դ����˷ѡ�
�����ٴ�һ��class�ĸ���ǩԪ�ء�

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

