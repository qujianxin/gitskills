/* 
* @Author: anchen
* @Date:   2015-09-15 18:48:11
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-19 21:06:15
*/

var graduate=function(N,str){
  var pattern = /.*/mg;
  var elems = str.match(pattern);
  var string = [];
  for(var i=0; i<elems.length; i++){
    if(elems[i]){
      var e = elems[i].split(' ');
      string.push(e);
    }
  }

  var result=[];
  for(var i=0; i<N; i++){
    for(var j=0; j<string[i].length; j++){
      var charCode = (string[i][j]).charCodeAt();
      var eight = parseInt(charCode,8);
      result.push(eight);
    }
  result.toString();
  var array=[];
  for(var k=0;k<result.length;k+=6){
    var a=result.split(k,k+6);
    array.push(a);
  }

      
  
};
alert(graduate(2,"50 100 100 100\r\n100 100 100 100"));

var sc;
var sra=[];
while(sc = readline()){
  sra.push(sc);
}
var arr = sca[0].split(' ');
n=parseInt(arr[0]);
m=parseInt(arr[1]);
if(m<=100&&1<=n){
  var sr1 = sra[1];
  var arr1 = sc1.split(' ');
  var array=[];
  var j=1;
  var sum=0;
  for(var q=0;q<n;q++){
    var n1=parseInt(arr1[q]);
    array.push(n1);
  }
  for(var i=0;i<n;i++)
  {
    sum = sum+array[i];
    if(sum>m){
      sum = array[i];
      j++;
    }
  }
  print(j);
}
