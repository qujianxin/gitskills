var blood = function(f,m){
	if(bloodtype(f,m,"A","B")){
		return "������A��B��AB��O\n��������-"
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