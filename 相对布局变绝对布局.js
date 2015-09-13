var pattern = /(\/)[^\/]*\/..\//g;
var pattern = /\/(.*?)\/..\//g;                 //两种禁止贪婪的方式
var str = '/c:/ext/../jkmk/fgrv/../f';
var elems = str.replace(pattern, '/');
console.log(elems);