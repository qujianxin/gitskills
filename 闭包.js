�հ���ָ��Ȩ������һ�������������еı����ĺ����������հ��ĳ����ķ�ʽ�������� һ�������ڲ�������һ��������ͨ����һ������������������ľֲ�������
ʹ�ñհ���һ���ŵ㣬Ҳ������ȱ�㣺���ǿ��԰Ѿֲ�����פ�����ڴ��У����Ա���ʹ ��ȫ�ֱ�����(ȫ�ֱ�����Ⱦ����Ӧ�ó��򲻿�Ԥ���ԣ�ÿ��ģ�鶼�ɵ��ñؽ��������ѣ� �����Ƽ�ʹ��˽�еģ���װ�ľֲ�����)
PS�����ڱհ��������򷵻صľֲ�������Դ���ᱻ�������ٻ��գ����Կ��ܻ�ռ�ø� ����ڴ档����ʹ�ñհ��ᵼ�������½��������ڷǳ��б�Ҫ��ʱ���ʹ�ñհ�

//�հ�
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