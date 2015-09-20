// Creates a XMLHttpRequest object bases on web broswer.
function createXHR() {

    // Checks whether support XMLHttpRequest or not.
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    }

    // IE6 and elder version.
    else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = [
        "MSXML2.XMLHttp6.0",
        "MSXML2.XMLHttp3.0",
        "MSXML2.XMLHttp"];

            for (var i = 0; i < versions.length; i++) {
                try {
                    var xhr = new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    return xhr;
                }
                catch (ex) {
                    throw new Error(ex.toString());
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        }
        else {
            throw new Error("No XHR object available");
        }

    }
    return null;
}

$(document).ready(function() {
    GetDataFromServer();
});

function GetDataFromServer() {

    // Creates a XMLHttpRequest object.
    var req = new createXHR();
      
    if (req != null) {
        req.onreadystatechange = function() {
            if (req.readyState == 4) {
                if ((req.status >= 200 && req.status < 300) || req.status == 304) {
                    ////alert(req.responseText);
                    var jsonTextDiv = document.getElementById("jsonText");

                    // Deserializes JavaScript Object Notation (JSON) text to produce a JavaScript value.
                    var data = JSON.parse(req.responseText);
                    for (var i = 0; i < data.length; i++) {
                        var item = data[i];
                        var div = document.createElement("div");
                        div.setAttribute("class", "dataItem");
                        // Inserts data into the html.
                        div.innerHTML = item.Name + " sold " + item.Qty + "; Product number: " + item.SerialNumber;
                        jsonTextDiv.appendChild(div);
                    }
                }
                else {
                    alert("Request was unsuccessful: " + req.status);
                }
            }
        };
        
        // Sends a asyn request. 
        req.open("GET", "ProductInfo.ashx", true);
        req.send(null);
    }
}

JSON字符串:
var str1 = '{ "name": "cxh", "sex": "man" }'; 
JSON对象:
var str2 = { "name": "cxh", "sex": "man" };

//由JSON字符串转换为JSON对象
var obj = eval('(' + str1 + ')');
var obj = JSON.parse(str1);

Alert(obj.name);
Alert(obj.sex);

//将JSON对象转化为JSON字符串。
var last=JSON.stringify(str2); //将JSON对象转化为JSON字符
alert(last);

//json
var box=[{name:'a', age :1,height:177},{name :'b', age:2,height:188}]; 
var json= JSON.stringify(box,function(key,value) { 
	switch(key) { 
		case 'name': return 'Mr.'+value; 
		case 'age': return value +'岁'; 
		default: return value; 
	}
},4);      //4为首行缩进
alert(json);

var box='[{"name":"a","age":1},{"name":"b","age":2}]'; 
var json= JSON.parse(box,function(key,value) { 
	if(key =='name') { 
		return 'Mr.'+value; 
	}else{ 
		return value;
	} 
}); 
alert(json[0].name);          //Mr.a

