/* 
* @Author: anchen
* @Date:   2015-09-15 18:48:11
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-15 21:35:21
*/

var graduate=function(N,score){
  var pattern = /.*/mg;
  var str = score;
  var elems = str.match(pattern);
  var scores = [];
  for(var i=0; i<elems.length; i++){
    if(elems[i]){
      var e = elems[i].split(' ');
      scores.push(e);
    }
  }
  var result=[];
    for(var i=0; i<N; i++){
      var Zhengzhi = parseInt(scores[i][0]);
      alert(Zhengzhi)
      var Yingyu = parseInt(scores[i][1]);
      var Shuxue = parseInt(scores[i][2]);
      var Zhuanyeke = parseInt(scores[i][3]);
      var sum = Zhengzhi + Yingyu + Shuxue + Zhuanyeke;
      alert(sum)
      if(Zhengzhi<60||Yingyu<60||Shuxue<90||Zhuanyeke<90||sum<310){
        result.push("Fail");
      }
      else{
        if(sum >= 350){
          result.push("Gongfei");
        }else{
          result.push("Zifei");
        }
      }

    }

  return result;
};
alert(graduate(2,"50 100 100 100\r\n100 100 100 100"));
