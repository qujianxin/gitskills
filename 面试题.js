/*
1��������ѡ�������յ���ͬ����������6�㷢�����������ʱ��intervaltime=[2,3,5,4,...]��ͣ����վ����Ϊn=[6,5,8,3,...]��
վ��ͣ��ʱ��Ϊstaytime=[5,4,2,5,...]����С����ĳʱ������������ʳ���������ʱ����̣�

*/
var d=new Date();
var setuptime=(d.getHours()-5)*60+d.getMinutes();
var intervaltime=[4,3];
var n=[6,5];
var staytime=[5,4];
/*
���ֹ�������bustype
�����ĳ���ʱ�䣺starttime=setuptime/intervaltime[i]+1;
��վ��ͣ������ʱ�䣺staytimesum
С������ʱ�䣺setuptime
����ÿ������ʱ�䣺starttime-setuptime+staytimesum
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