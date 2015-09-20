/*
1��ԭ�ͺ�ԭ����
���캯����ԭ�ͺ�ʵ���Ĺ�ϵ��ÿ�����캯������һ��ԭ�Ͷ���ԭ�Ͷ��󶼰���һ��ָ���캯����ָ�룬
                                                        ��ʵ��������һ��ָ��ԭ�Ͷ����ָ�롣
ԭ�����Ļ��������ԭ�Ͷ��������һ�����͵�ʵ������ʱ��ԭ�Ͷ��󽫰���ָ����һ��ԭ�͵�ָ�롣
                                    ��Ӧ�ģ���һԭ�Ͷ���Ҳ������ָ����һ���캯����ָ�롣
									ʵ��(_proto_)-->(prototype)ԭ�Ͷ���(constructor)-->���캯��
									                            =��һʵ��-->��һԭ�Ͷ���-->��һ���캯��
�ص㣺javascript��Ҫͨ��ԭ����ʵ�ּ̳С�ԭ�����Ĺ�����ͨ����һ�����͵�ʵ������ֵ����һ���캯����ԭ��ʵ�ֵġ�
			�����������;��ܹ����ʳ����͵��������Ժͷ�������һ��ͻ�����ļ̳к���
			ԭ�����������Ƕ���ʵ�����������м̳е����Ժͷ����������ڴ���������ʵ��ʱ�����������͵Ĺ��캯���д��Σ����Բ��˵���ʹ�á�
			����������ļ����ǽ��ù��캯�������������͹��캯�����ڲ����ó����͵Ĺ��췽����
			�����Ϳ�������ÿ��ʵ���������Լ������ԣ�ͬʱ���ܱ�ֻ֤���ù��캯��ģ�����������͡�
			ʹ�����ļ̳�ģʽ����ϼ̳У�����ģʽʹ��ԭ�����̳й�������Ժͷ�������ͨ�����ù��캯���̳�ʵ�����ԡ�
			����Ч�ķ�ʽ�Ǽ������ʽ�̳У�������ʽ�̳к����ʽ�̳��ŵ���һ��
*/
//���ʽ�̳�
function SuperType(){
	this.name = name;
	this.color = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
	alert(this.name);
}
function SubType(name, age){
	SuperType.call(this, name);
	this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;            //ԭ����SuperType
SubType.prototype.sayAge = function(){
	alert(this.age);
}
var instance1 = new SubType("Nicholas", 29);
instance1.color.push("black");
alert(instance1.colors);             //red, blue, green, black

var instance2 = new SubType("Greg", 27);
alert(instance2.colors);             //red, blue, green

//instanceof      isPrototypeOf
instance instanceof Object;                                           //���� instanceof ����
Object.prototype.isPrototypeOf(instance);                   //����.prototype.inProtoTypeOf(����)

//�������ʽ�̳У��������ϼ̳����ε��ó����͵����⡣
//������һ��������ԭ�͵ĸ�����û�й��캯����
function object(o){
	function F(){};
	F.prototype = o;
	return new F();
}
function inheritPrototype(subType, superType){
	var f = object(superType.prototype);
	f.constructor = subType;
	subType.prototype = f;
}
function SuperType(){
	this.name = name;
	this.color = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
	alert(this.name);
}
function SubType(name, age){
	SuperType.call(this, name);
	this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function(){
	alert(this.age);
}

//����̳�
1��ԭ�����̳�
����ʵ�����������м̳е����Ժͷ����������ڴ���������ʵ��ʱ�����������͵Ĺ��캯���д���
2�����ù��캯��
�ܴ��Σ����������ں����ж��壬���������޴�̸�𡣶��ң��ڳ����͵�ԭ���ж���ķ������������Ͳ��ɼ����޷��̳�ԭ�͡�
3����ϼ̳�
��ã������ε��ó����͵Ĺ��캯����
4��ԭ��ʽ�̳�
������һ��������ԭ�͵ĸ�����û�й��캯���ļ̳С�
5������ʽ�̳�
����ʽ�̳а�ԭ��ʽ+����ģʽ��϶�����Ŀ����Ϊ�˷�װ��������Ĺ��̡� ������ʽ�̳���Ϊ������Ӻ����������ڲ��������������ö�����Ч�ʣ��͹��캯��ģʽ����
6���������ʽ�̳�
���Ч��ֻ����һ�γ����͵Ĺ��캯������˱�������SubType.prototype�ϴ�������Ҫ����������ԡ�
���ͬʱ��ԭ�������ֲ��䣬������ʹ��instanceof��isPrototypeof()


















