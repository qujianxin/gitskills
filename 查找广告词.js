var format = "zhel         ��          �棬��    ��   ";
var adver =["���","�绰"] ;

for(var k = 0; k<adver.length; k++){
	var adver1 = adver[k];
	console.log(adver1);
	var advers = adver1.split('');
	for (var i = 0; i < advers.length; i++){
		advers[i] += "\\s*";                                //ע��\\s*, ��һ��/Ϊת���ַ�
	}
	console.log(advers);
	var ad = advers.join('');
	console.log(ad);
	var reg = "/" + ad + "/";
	console.log(reg);
	var elems = format.match(eval(reg));                //ע��eval(reg)
	alert(elems);
}