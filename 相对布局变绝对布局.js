var pattern = /(\/)[^\/]*\/..\//g;
var pattern = /\/(.*?)\/..\//g;                 //���ֽ�ֹ̰���ķ�ʽ
var str = '/c:/ext/../jkmk/fgrv/../f';
var elems = str.replace(pattern, '/');
console.log(elems);