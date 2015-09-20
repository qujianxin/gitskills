//1������createXHR()������XHR����������֧�֡�
//��IE7һ�£��ÿ��õ�MSXML���е�һ��ActiveX���󴴽����°汾��XHR����
//������������У���XMLHttpRequest()���캯������XHR����
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
					//����
				}
			}
		}
	}
	return new ActiveXObject(arguments.callee.activeXString);
	else{
		throw new Error("No XHR object available.")
	}
}

//ʹ��GET��������
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
//��ʽ��url
function addURLParam(url, name, value){
	url += (url.indexOf("?") == -1 ? "?" : "&");
	url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
	return url;
}
var url = "example.php";
url = addURLParam(url, "name", "Nicholas");
xhr.open("get", url, true);
xhr.setRequestHeader("MyHeader", "MyValue");//�����Զ���ͷ��������Ϣ
xhr.send(null);

//ʹ��POST����
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
	//�����ݷ���$_POST����ȫ�ֱ�����
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	var form = document.getElementById("user-inpd");
	xhr.send(serialize(form));//�����е��������л����͸�������
}