<!DOCTYPE html>
<html>
<head>
    <title>����JS�հ�</title>
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
<a href="javascript:;" onclick="bibao();">����Ǳհ�����</a>
<br>
<a href="javascript:;" onclick="putong();">��������Ǳհ�����</a>
</body>
</html>