var blood = function(f,m){
	var bloodtype = function(a,b){
		if((f==a&&m==b)||(f==b&&m==a)){
			return true;
		}else{
			return false;
		}
	}
	if(bloodtype("A","B")){
		return "������A��B��AB��O\n��������-"
	}else if(bloodtype("A","A")){
		return "can:A,O\ncan't:B,AB"
	}
}
alert(blood("A","A"))