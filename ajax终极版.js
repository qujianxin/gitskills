//1、创建createXHR()函数对XHR对象跨浏览器支持。
//在IE7一下，用可用的MSXML库中的一个ActiveX对象创建最新版本的XHR对象
//在其他浏览器中，用XMLHttpRequest()构造函数创建XHR对象。
function createXHR(){
	if(typeof XMLHttpRequest != "undefined"){
		return new XMLHttpRequest();
	}else if(typeof ActiveXObject != "undefined"){
		if(typeof arguments.callee.activeXString != "string"){
			var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
						i,len;
			for(i=0, len=versions.length; i < len; i++){
				try{
					new ActiveXObject(versions[i]);
					arguments.callee.activeXString = versions[i];
					break;
				}catch(ex){
					//跳过
				}
			}
		}
	}
	return new ActiveXObject(arguments.callee.activeXString);
	else{
		throw new Error("No XHR object available.")
	}
}

//使用GET发送数据
var xhr = createXHR();
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4){
		if((xhr.status >= 200 && xhr.status <= 300 || xhr.stetus==304)){
			alert(xhr.responseText);
		}else{
			alert("Request was unsuccessful" + xhr.status);
		}
	}
}
//格式化url
function addURLParam(url, name, value){
	url += (url.indexOf("?") == -1 ? "?" : "&");
	url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
	return url;
}
var url = "example.php";
url = addURLParam(url, "name", "Nicholas");
xhr.open("get", url, true);
xhr.setRequestHeader("MyHeader", "MyValue");//设置自定义头部请求信息
xhr.send(null);

//使用POST请求
function submitData(){
	var xhr = createXHR();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if((xhr.status >= 200 && xhr.status <= 300 || xhr.stetus==304)){
				alert(xhr.responseText);
			}else{
				alert("Request was unsuccessful" + xhr.status);
			}
		}
	} 
	xhr.open("post", "postexample.php", true);
	//将数据放在$_POST超级全局变量中
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	var form = document.getElementById("user-inpd");
	xhr.send(serialize(form));//将表单中的数据序列化发送给服务器
}