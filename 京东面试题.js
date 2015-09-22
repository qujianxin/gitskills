1、typeof和instanceof
typeof 返回数据类型：number,boolean,string,object,undefined,function
typeof data
我们可以使用 typeof 来获取一个变量是否存在，如 if(typeof a!="undefined"){alert("ok")}，而不要去使用 if(a) 因为如果 a 不存在（未声明）则会出错，对于 Array,Null 等特殊对象使用 typeof 一律返回 object，这正是 typeof 的局限性。
instanceof 判断一个对象是否为某一数据类型，或一个变量是否为一个对象的实例
引用类型：Object, Number, Array, Date, RegExp, Function, Boolean, Number, String, 父类，实例instanceof对象var d=new Date()
d instanceof Date
var a=[];
Object.prototype.toString.apply(a);//[object Array]
var d=new Date();  
alert(Object.prototype.toString.apply(d));//[object Date] 

var d=new Date();  
alert(d instanceof Object);//true         实例
alert(d.constructor==Object);//false  
alert(d.constructor==Date);//true        构造函数

var r = /ss/;
console.log(r.__proto__ === RegExp.prototype); //true
console.log(r instanceof RegExp); //true
var str = "123";
console.log(str.__proto__ === String.prototype); //true
console.log(str instanceof String); //false

2、<!doctype> 的作用，该标签的最简洁写法。
<!DOCTYPE>声明位于HTML文档的第一行，处于<html>标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
<!DOCTYPE html>
	HTML5不基于SGML，因此不用对DTD进行引用，但需要doctype来规范浏览器的行为（让浏览器按照他们应该的方式运行）
	而HTML4.01基于SGML，所以需要对DTD进行引用，才能告知浏览器文档所用的文档类型。
SGML标准通用标记语言
DTD文档类型定义，文档类型定义可被成行地声明于标准通用标记语言、可扩展标记语言文档中，也可作为一个外部引用。

3、浏览器的标准模式和怪异模式
所谓的标准模式是指，浏览器按W3C标准解析执行代码；
怪异模式则是使用浏览器自己的方式解析执行代码，因为不同浏览器解析执行的方式不一样，所以我们称之为怪异模式。浏览器解析时到底使用标准模式还是怪异模式，与你网页中的DTD声明直接相关，DTD声明定义了标准文档的类型（标准模式解析）文档类型，会使浏览器使用相应的方式加载网页并显示，忽略DTD声明,将使网页进入怪异模式(quirks mode)。

4、css3多了哪些新属性和功能
	1、边框为圆角框：	border-radius:10px;
										-moz-border-radius:10px; /* 为了让老的 Firefox版本支持 */
	2、边框阴影： box-shadow: 10px 10px 5px #A5A5A5;
	3、切断容器中的文本：  text-overflow 当文本溢出可以给出了一个省略号的特性
												text-overflow:ellipsis;       点点
												overflow:hidden;
												white-space:nowrap;        不换行
												cursor: pointer;                  鼠标变成手
	4、过渡效果：通过css实现动画效果
			<style>
			div
			{
				width:100px;
				height:100px;
				background:blue;
				transition:width 2s, height 2s;
				-moz-transition:width 2s, height 2s, -moz-transform 2s; /* 可以支持Firefox 4 */
				-webkit-transition:width 2s, height 2s, -webkit-transform 2s; /* 可以支持Safari and Chrome */
				-o-transition:width 2s, height 2s, -o-transform 2s; /* 可以支持Opera */
			}
			div:hover
			{
				width:200px;
				height:200px;
				transform:rotate(180deg);
				-moz-transform:rotate(180deg); /* 可以支持Firefox 4 */
				-webkit-transform:rotate(180deg); /* 可以支持Safari and Chrome */
				-o-transform:rotate(180deg); /* 可以支持Opera */
			}
			</style>
			</head>
			<body>
				<div>把鼠标放上该区域，来查看过渡效果。</div>
			</body>



