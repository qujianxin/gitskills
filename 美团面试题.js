/*
1�������λ�������룬����������ֺ���ĸ

//�ַ���
var pattern = /^(?![^a-zA-Z]+$)(?!\D+$).{8,}/g;
var str = "12342a42423";
var elems = str.match(pattern);
console.log(elems);

//(?!\D+$)��ʾƥ�䵽��β���ܺ��з����֣������뺬�����֣����ַ�

//���ʲ���th��β
var pattern = /\w+/g;
var str = "math is hard";
var elems = str.match(pattern);
var array=[];
console.log(elems.length);
for(var i=0; i<elems.length; i++){
	//var elem=elems[i].match(/^(?!.*?th$)/g);
	//console.log(elem);
	if((/^(?!.*?th$)/g).test(elems[i])){
		array.push(elems[i]);
	}
}
console.log(array);

//js
var str = "123441323";
function reg(str){
		if(str.length>=8){
		var pattern1 = /\d+/g;
		var pattern2 = /[a-zA-Z]+/g;
		if(pattern1.test(str)&&pattern2.test(str)){
				return true;
			}else{
				return false;
			}
	}
}
console.log(reg(str));

2���������ַ�����ƥ����Ӵ�
*/
var str1 = "asd";
var str2 = "fvdfagnjkasd";
function subStr(str1,str2){
	var bigStr = str1.length>str2.length?str1:str2;
	var smaStr = str1.length>str2.length?str2:str1;
	var maxStr;
	for(var i=0;i<smaStr.length;i++){
		var temp = smaStr.substring(i,i+1);
		if(bigStr.indexOf(temp) != -1){
			console.log(bigStr.indexOf(temp))
		}
	}
}
subStr(str1,str2)















