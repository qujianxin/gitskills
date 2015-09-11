/*
1、公交车选择：起点和终点相同，都是早上6点发车，发车间隔时间intervaltime=[2,3,5,4,...]，停靠的站点数为n=[6,5,8,3,...]，
站点停靠时间为staytime=[5,4,2,5,...]，当小明在某时间出发坐车，问乘坐哪辆车时间最短？

*/
var d=new Date();
var setuptime=(d.getHours()-5)*60+d.getMinutes();
var intervaltime=[4,3];
var n=[6,5];
var staytime=[5,4];
/*
几种公交车：bustype
买辆的出发时间：starttime=setuptime/intervaltime[i]+1;
在站点停留的总时间：staytimesum
小明出发时间：setuptime
乘坐每辆车的时间：starttime-setuptime+staytimesum
*/
function first(intervaltime,n,staytime,setuptime){
	var bustype=intervaltime.length;
	var staytimesum=[];
	var starttime=[];
	var time=[];
	for(var i=0; i<bustype;i++){
		var inter=intervaltime[i];
		staytimesum[i]=staytime[i]*n[i];
		if(setuptime%inter != 0){
			starttime[i]=(setuptime/inter+1)*inter;
		}else{
			starttime[i]=(setuptime/inter)*inter;
		}
		time[i]=starttime[i]-setuptime+staytimesum[i];
	}
	alert(time.sort(compare)[0]);
}
function compare(param1,param2){
	if(param1>param2) return 1;
	if(param1==param2) return 0;
	if(param1<param2) return -1;
}
first(intervaltime,n,staytime,setuptime);