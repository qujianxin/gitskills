//var elems = format.match(/y+|M+|d+|H+|m+|s+|S+|[^yMdHmsS]/g);

//[y+M+d+]就匹配一个字符，[]就匹配一个字符，[yMd]+匹配的是yyyyyMMMd整个字符
//(yMd)+匹配的是多个yMd整体。
//（）代表分组
var pattern = /[eng|ha]/ig;
var pattern1 = /(eng|ha)/ig;
var pattern2 = /eng|ha/ig;
var str = 'qwerereng ha |';                          //["e", "e", "e", "n", "g", "h", "a", "|"]
var elems = str.match(pattern);                //[]里的就是单个字符串
var elems = str.match(pattern1);              //["eng", "ha"]
var elems = str.match(pattern2);              //["eng", "ha"]，但只能判断或运算，无法加入别的判断字符
console.log(elems); 

/*使用match方法获取匹配数组*/
var pattern = /e/ig;
var str = 'qwerer';
var elems = str.match(pattern);         //e,e
console.log(elems);  
elems.length;                                         //2

/*使用replace替换匹配到的数据*/
var pattern = /e/g;
var str = 'qwerer';
var elems = str.replace(pattern, 'ww');        //qwwwrwwr  使用了g全局   ；qwwwrer  不使用全局，只匹配一个
console.log(elems);  

/*用split将字符串拆分成数组*/
var pattern = /e/g;
var str = 'qwerer';
var elems = str.split(pattern);
console.log(elems);                                    //["qw", "r", "r"]

/*使用search来查找第一个匹配数据*/
var pattern = /e/g;
var str = 'qwerer';
var elems = str.search(pattern);               //search方法查找到即返回，故不用g全局。
console.log(elems);                                    //2

/*^$*/
var pattern= /^google$/;               //指强制首尾
var pattern1= /[^g]oogle$/;               //[^]非本字符
var str = 'ghoogle';
console.log(str.match(pattern1));          //["hoogle", index: 1, input: "ghoogle"]
																 //str.match(pattern1)[0]         hoogle
																 //str.match(pattern1).input         ghoogle
																 //str.match(pattern1).index        1

/*使用分组模式匹配*/
var pattern = /(oo|gl){2,8}/g;                   //匹配的是oo或gl2-8次
var str = 'ooooglglglglglgloo';
var elems = str.match(pattern);
console.log(elems);                               //["ooooglglglglglgl", "gl", index: 0, input: "ooooglglglglglgloo"]
                                                                //在//后面加g，就输出["ooooglglglglglgl"]，不加g，就输出["ooooglglglglglgl", "gl", index: 0, input: "ooooglglglglglgloo"]
																//所以以后一定要在//后面乖乖加个g！！！

/*$1,$2,$3代表匹配的第几个括号里面的字符*/
var pattern = /8(.*)8/g;
var str = 'there are 2| 8google18 8google28|';
var ma = str.match(pattern);
console.log(RegExp.$1)                      //google8 8google                注意要先进行匹配后才有RegExp.$1  直接$1会报错

var elems = str.replace(pattern, '<strong>'+ma+'</strong>')
var elems = str.replace(pattern, '<strong>$1</strong>')
document.write(elems);

var pattern= /(.*)\s(.*)/; 
var str ='google baidu'; 
var result=str.replace(pattern,'$2 $1');    //将两个分组的值替换输出 document.write(result);
console.log(result)                                    //baidu google

/*贪婪和惰性*/                                             //惰性指匹配到符合的就返回，贪婪指匹配到不符合了才返回
var pattern = /[a-z]+?/;                                //？开惰性，但在后面加g就是全局比较，不是遇到第一个就返回
var str ='abcdefjhijklmnopqrstuvwxyz';
var result = str.replace(pattern, 'xxx');
console.log(result);

/***两种禁止贪婪方式*/                                 //$1代表第一个括号
var pattern = /8(.*?)8/g;
var str = 'there are 2| 8google18 8google28|';
var result=str.replace(pattern, '<strong>$1</strong>');      //there are 2| google1 google2|
document.write(result);

var pattern = /8([^8]*)8/g;


/*捕获性分组和非捕获性分组，就是（）里的内容会不会被exec和match捕获*/
var pattern= /(\d+)(?:[a-z])/g //非捕获性分组          ["123a","123"]      
//var pattern= /(\d+)([a-z])/g; //捕获性分组 
var str ='123abc'; 

var result = str.match(pattern)
console.log(RegExp.$2);                            //空
alert(result)

var result = pattern.exec(str);                     //["123a","123"]     就是（？：）该括号不会被捕获
console.log(result)                          

/*使用前瞻捕获*/ 
var pattern= /(goo(?=gle))/; //goo 后面必须跟着 gle 才能捕获 
var str ='google'; 
console.log(pattern.exec(str));               //["goo", "goo"]

/*使用换行模式*/ 
var pattern= /^\d+/mg; //启用了换行模式     只用全局匹配不了换行
var str ='1.baidu\n2.google\n3.bing'; 
var result=str.replace(pattern,'#'); 
alert(result);










