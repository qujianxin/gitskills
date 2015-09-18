/* 
* @Author: anchen
* @Date:   2015-09-15 18:48:11
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-17 21:05:02
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
      
  
};
alert(graduate(2,"50 100 100 100\r\n100 100 100 100"));
