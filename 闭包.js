闭包是指有权访问另一个函数作用域中的变量的函数，创建闭包的常见的方式，就是在 一个函数内部创建另一个函数，通过另一个函数访问这个函数的局部变量。
使用闭包有一个优点，也是它的缺点：就是可以把局部变量驻留在内存中，可以避免使 用全局变量。(全局变量污染导致应用程序不可预测性，每个模块都可调用必将引来灾难， 所以推荐使用私有的，封装的局部变量)
PS：由于闭包里作用域返回的局部变量资源不会被立刻销毁回收，所以可能会占用更 多的内存。过度使用闭包会导致性能下降，建议在非常有必要的时候才使用闭包

//闭包
function box(){
	var age = 100;
	return function(){
		age++;
		return age;
	}
}
var b = box();
alert(b())           //101
alert(b())           //101







<!DOCTYPE html>
<html>
<head>
    <title>神马JS闭包</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script>
        function wenyi(){
            var i=1;
            return function(){alert(++i);}
        }
        function putong(){
            var i=0;
            alert(i++);
        }
        var bibao=wenyi();
        
    </script>
</head>
<body>
<a href="javascript:;" onclick="bibao();">这个是闭包操作</a>
<br>
<a href="javascript:;" onclick="putong();">这个不是是闭包操作</a>
</body>
</html>