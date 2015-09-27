定义：this是包含它的函数作为方法被调用时所属的对象。
1、包含它的函数。2、作为方法被调用时。3、所属的对象。
function to_green(){
	this.style.color="green";
}
to_green();
分析：包含this的函数是，to_green
该函数作为方法被调用了
该函数所属的对象是。。？我们知道默认情况下，都是window对象。
window.load=function(){
	var example=document.getElementById("example");
	example.onclick=to_green;
}
我们知道通过赋值操作，example对象的onclick得到to_green的方法，那么包含this的函数就是onclick喽，
那么this就是example引用的html对象喽。
this的环境可以随着函数被赋值给不同的对象而改变！

题：
var a = {
	x:1,
	b:console.log(this.x),
	c:console.log(this)
}
a.b();                 //1              
a.c();                 //object  Object
对象里的this指本对象

方法里的this表示调用该方法的对象
function a(){
	console.log(this);
}
a();               // object  Window


http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html
四种用法：
1、纯粹的函数调用
这是函数的最通常用法，属于全局性调用，因此this就代表全局对象Global。
function a(){
	this.x = 1;
}
a();
x;            //1    function a 修改了全局对象的属性
这里的this代表全局对象Global

2、作为对象方法的调用
函数还可以作为某个对象的方法调用，这时this就指这个上级对象。
function a(){
	return this.x;
}
var o={};
o.x = 1;
o.m = a;
o.m();              //1   this表示o对象

3、作为构造函数调用
所谓构造函数，就是通过这个函数生成一个新对象（object）。这时，this就指这个新对象。
var x=2;
function a(){
	this.x=1;
}
var o=new a();
o.x;           //1

4、apply调用
apply()是函数对象的一个方法，它的作用是改变函数的调用对象，它的第一个参数就表示改变后的调用这个函数的对象。因此，this指的就是这第一个参数。
var x=0;
function a(){
	return this.x;
}
var o={};
o.x=1;
o.m=a;
o.m.apply();        //0  本来方法的对象是o，但是通过apply改变了方法的对象。
                            //apply()的参数为空时，默认调用全局对象。因此，这时的运行结果为0，证明this指的是全局对象。
o.m.apply(o);       //1    把对象定为a

















