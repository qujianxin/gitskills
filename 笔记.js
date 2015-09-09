/* 
* @Author: anchen
* @Date:   2015-09-07 22:04:56
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-07 22:59:45
*/

$(document).ready(function(){
  /*
  第13章--基本包装类型
  为了便于操作基本类型的值，ECMA提供了三种特殊的引用类型-Boolean，Number，String，每当读取一个基本类型时，后台会自动创建对应的基本包装类型的对象，从而能够调用一些自带的方法和属性来操作数据
  方法：var fn=box.indexOf(参数)；属性：var attr=box.length
  */
  //找出全部的L
  var box = 'Mr.Lee is Lee';
  var boxarr = [];
  var pos = box.indexOf('L'); //box.search('L');也是返回第一个L的位置
  while(pos > -1){
    boxarr.push(pos);
    pos = box.indexOf('L', pos + 1);
  }
  alert(boxarr);
  
  //为字符串，数字，中文排序
  var testArray = [1,"a",2,"是","back","值"];  //1,2,是,值,a,back
  document.write(testArray.sort(compareFunc));
  
  function compareFunc(param1,param2){
    //如果两个参数均为字符串类型
    if(typeof param1 == "string" && typeof param2 == "string"){
      return param1.localeCompare(param2);
    }
    //如果参数1为数字，参数2为字符串
    if(typeof param1 == "number" && typeof param2 == "string"){
      return -1;
    }
    //如果参数1为字符串，参数2为数字
    if(typeof param1 == "string" && typeof param2 == "number"){
      return 1;
    }
    //如果两个参数均为数字
    if(typeof param1 == "number" && typeof param2 == "number"){
      if(param1 > param2) return 1;
      if(param1 == param2) return 0;
      if(param1 < param2) return -1;
    }
  }

  //localeCompare() //比较两个文字大小
  var testArray = ["脚","本","之","家"];
  document.write(testArray.sort(
    function compareFunction(param1,param2){
        return param1.localeCompare(param2);  //output:之,家,本,脚
    }
  ));
});