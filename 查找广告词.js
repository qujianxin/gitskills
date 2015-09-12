var format = "zhel         广          告，电    话   ";
var adver =["广告","电话"] ;

for(var k = 0; k<adver.length; k++){
	var adver1 = adver[k];
	console.log(adver1);
	var advers = adver1.split('');
	for (var i = 0; i < advers.length; i++){
		advers[i] += "\\s*";                                //注意\\s*, 第一个/为转义字符
	}
	console.log(advers);
	var ad = advers.join('');
	console.log(ad);
	var reg = "/" + ad + "/";
	console.log(reg);
	var elems = format.match(eval(reg));                //注意eval(reg)
	alert(elems);
}