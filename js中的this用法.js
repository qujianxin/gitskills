���壺this�ǰ������ĺ�����Ϊ����������ʱ�����Ķ���
1���������ĺ�����2����Ϊ����������ʱ��3�������Ķ���
function to_green(){
	this.style.color="green";
}
to_green();
����������this�ĺ����ǣ�to_green
�ú�����Ϊ������������
�ú��������Ķ����ǡ���������֪��Ĭ������£�����window����
window.load=function(){
	var example=document.getElementById("example");
	example.onclick=to_green;
}
����֪��ͨ����ֵ������example�����onclick�õ�to_green�ķ�������ô����this�ĺ�������onclickඣ�
��ôthis����example���õ�html����ඡ�
this�Ļ����������ź�������ֵ����ͬ�Ķ�����ı䣡

�⣺
var a = {
	x:1,
	b:console.log(this.x),
	c:console.log(this)
}
a.b();                 //1              
a.c();                 //object  Object
�������thisָ������

�������this��ʾ���ø÷����Ķ���
function a(){
	console.log(this);
}
a();               // object  Window


http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html
�����÷���
1������ĺ�������
���Ǻ�������ͨ���÷�������ȫ���Ե��ã����this�ʹ���ȫ�ֶ���Global��
function a(){
	this.x = 1;
}
a();
x;            //1    function a �޸���ȫ�ֶ��������
�����this����ȫ�ֶ���Global

2����Ϊ���󷽷��ĵ���
������������Ϊĳ������ķ������ã���ʱthis��ָ����ϼ�����
function a(){
	return this.x;
}
var o={};
o.x = 1;
o.m = a;
o.m();              //1   this��ʾo����

3����Ϊ���캯������
��ν���캯��������ͨ�������������һ���¶���object������ʱ��this��ָ����¶���
var x=2;
function a(){
	this.x=1;
}
var o=new a();
o.x;           //1

4��apply����
apply()�Ǻ��������һ�����������������Ǹı亯���ĵ��ö������ĵ�һ�������ͱ�ʾ�ı��ĵ�����������Ķ�����ˣ�thisָ�ľ������һ��������
var x=0;
function a(){
	return this.x;
}
var o={};
o.x=1;
o.m=a;
o.m.apply();        //0  ���������Ķ�����o������ͨ��apply�ı��˷����Ķ���
                            //apply()�Ĳ���Ϊ��ʱ��Ĭ�ϵ���ȫ�ֶ�����ˣ���ʱ�����н��Ϊ0��֤��thisָ����ȫ�ֶ���
o.m.apply(o);       //1    �Ѷ���Ϊa

















