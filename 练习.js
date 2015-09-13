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