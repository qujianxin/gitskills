var format = "zhel         广          告，电    话   ";
var elems = format.match(/y+|M+|d+|H+|m+|s+|S+|[^yMdHmsS]/g);//[y+M+d+]就匹配一个字符，[]就匹配一个字符，[yMd]+匹配的是yyyyyMMMd整个字符

var adver =["广告","电话"] ;
for(var k = 0; k<adver.length; k++){
	var adver1 = adver[k];
	console.log(adver1);
	var advers = adver1.split('');
	for (var i = 0; i < advers.length; i++){
		advers[i] += "\\s*";
	}
	console.log(advers);
	var ad = advers.join('');
	console.log(ad);
	var reg = "/" + ad + "/";
	console.log(reg);
	var elems = format.match(eval(reg));
	alert(elems);
}
