1��typeof��instanceof
typeof �����������ͣ�number,boolean,string,object,undefined,function
typeof data
���ǿ���ʹ�� typeof ����ȡһ�������Ƿ���ڣ��� if(typeof a!="undefined"){alert("ok")}������Ҫȥʹ�� if(a) ��Ϊ��� a �����ڣ�δ���������������� Array,Null ���������ʹ�� typeof һ�ɷ��� object�������� typeof �ľ����ԡ�
instanceof �ж�һ�������Ƿ�Ϊĳһ�������ͣ���һ�������Ƿ�Ϊһ�������ʵ��
�������ͣ�Object, Number, Array, Date, RegExp, Function, Boolean, Number, String, ���࣬ʵ��instanceof����var d=new Date()
d instanceof Date
var a=[];
Object.prototype.toString.apply(a);//[object Array]
var d=new Date();  
alert(Object.prototype.toString.apply(d));//[object Date] 

var d=new Date();  
alert(d instanceof Object);//true         ʵ��
alert(d.constructor==Object);//false  
alert(d.constructor==Date);//true        ���캯��

var r = /ss/;
console.log(r.__proto__ === RegExp.prototype); //true
console.log(r instanceof RegExp); //true
var str = "123";
console.log(str.__proto__ === String.prototype); //true
console.log(str instanceof String); //false

2��<!doctype> �����ã��ñ�ǩ������д����
<!DOCTYPE>����λ��HTML�ĵ��ĵ�һ�У�����<html>��ǩ֮ǰ����֪������Ľ�������ʲô�ĵ���׼��������ĵ���DOCTYPE�����ڻ��ʽ����ȷ�ᵼ���ĵ��Լ���ģʽ���֡�
<!DOCTYPE html>
	HTML5������SGML����˲��ö�DTD�������ã�����Ҫdoctype���淶���������Ϊ�����������������Ӧ�õķ�ʽ���У�
	��HTML4.01����SGML��������Ҫ��DTD�������ã����ܸ�֪������ĵ����õ��ĵ����͡�
SGML��׼ͨ�ñ������
DTD�ĵ����Ͷ��壬�ĵ����Ͷ���ɱ����е������ڱ�׼ͨ�ñ�����ԡ�����չ��������ĵ��У�Ҳ����Ϊһ���ⲿ���á�

3��������ı�׼ģʽ�͹���ģʽ
��ν�ı�׼ģʽ��ָ���������W3C��׼����ִ�д��룻
����ģʽ����ʹ��������Լ��ķ�ʽ����ִ�д��룬��Ϊ��ͬ���������ִ�еķ�ʽ��һ�����������ǳ�֮Ϊ����ģʽ�����������ʱ����ʹ�ñ�׼ģʽ���ǹ���ģʽ��������ҳ�е�DTD����ֱ����أ�DTD���������˱�׼�ĵ������ͣ���׼ģʽ�������ĵ����ͣ���ʹ�����ʹ����Ӧ�ķ�ʽ������ҳ����ʾ������DTD����,��ʹ��ҳ�������ģʽ(quirks mode)��

4��css3������Щ�����Ժ͹���
	1���߿�ΪԲ�ǿ�	border-radius:10px;
										-moz-border-radius:10px; /* Ϊ�����ϵ� Firefox�汾֧�� */
	2���߿���Ӱ�� box-shadow: 10px 10px 5px #A5A5A5;
	3���ж������е��ı���  text-overflow ���ı�������Ը�����һ��ʡ�Ժŵ�����
												text-overflow:ellipsis;       ���
												overflow:hidden;
												white-space:nowrap;        ������
												cursor: pointer;                  �������
	4������Ч����ͨ��cssʵ�ֶ���Ч��
			<style>
			div
			{
				width:100px;
				height:100px;
				background:blue;
				transition:width 2s, height 2s;
				-moz-transition:width 2s, height 2s, -moz-transform 2s; /* ����֧��Firefox 4 */
				-webkit-transition:width 2s, height 2s, -webkit-transform 2s; /* ����֧��Safari and Chrome */
				-o-transition:width 2s, height 2s, -o-transform 2s; /* ����֧��Opera */
			}
			div:hover
			{
				width:200px;
				height:200px;
				transform:rotate(180deg);
				-moz-transform:rotate(180deg); /* ����֧��Firefox 4 */
				-webkit-transform:rotate(180deg); /* ����֧��Safari and Chrome */
				-o-transform:rotate(180deg); /* ����֧��Opera */
			}
			</style>
			</head>
			<body>
				<div>�������ϸ��������鿴����Ч����</div>
			</body>



