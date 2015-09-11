var blood = function(f,m){
	if(bloodtype(f,m,"A","B")){
		return "可能是A、B、AB、O\n不可能是-"
	}else if(bloodtype(f,m,"A","A")){
		return "can:A,O\ncan't:B,AB"
	}
}
var bloodtype = function(f,m,a,b){
	if((f==a&&m==b)||(f==b&&m==a)){
		return true;
	}else{
		return false;
	}
}
alert(blood("A","A"))