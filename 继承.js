/*
1、原型和原型链
构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，
                                                        而实例都包含一个指向原型对象的指针。
原型链的基本概念：让原型对象等于另一个类型的实例，此时该原型对象将包含指向另一个原型的指针。
                                    相应的，另一原型对象也包含着指向另一构造函数的指针。
									实例(_proto_)-->(prototype)原型对象(constructor)-->构造函数
									                            =另一实例-->另一原型对象-->另一构造函数
特点：javascript主要通过原型链实现继承。原型链的构建是通过将一个类型的实例，赋值给另一构造函数的原型实现的。
			这样，子类型就能够访问超类型的所有属性和方法，这一点和基于类的继承很像。
			原型链的问题是对象实例共享了所有继承的属性和方法，而且在创建子类型实例时，不能向超类型的构造函数中传参，所以不宜单独使用。
			解决这个问题的技术是借用构造函数，即在子类型构造函数的内部调用超类型的构造方法。
			这样就可以做到每个实例都具有自己的属性，同时还能保证只是用构造函数模型来定义类型。
			使用最多的继承模式是组合继承，这种模式使用原型链继承共享的属性和方法，而通过借用构造函数继承实例属性。
			最有效的方式是寄生组合式继承，集寄生式继承和组合式继承优点于一身。
*/
//组合式继承
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
SubType.prototype.constructor = SubType;            //原本是SuperType
SubType.prototype.sayAge = function(){
	alert(this.age);
}
var instance1 = new SubType("Nicholas", 29);
instance1.color.push("black");
alert(instance1.colors);             //red, blue, green, black

var instance2 = new SubType("Greg", 27);
alert(instance2.colors);             //red, blue, green

//instanceof      isPrototypeOf
instance instanceof Object;                                           //子类 instanceof 父类
Object.prototype.isPrototypeOf(instance);                   //父类.prototype.inProtoTypeOf(子类)

//寄生组合式继承，解决了组合继承两次调用超类型的问题。
//构造了一个超类型原型的副本，没有构造函数。
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

//几大继承
1、原型链继承
对象实例共享了所有继承的属性和方法，而且在创建子类型实例时，不能向超类型的构造函数中传参
2、借用构造函数
能传参，但方法都在函数中定义，函数复用无从谈起。而且，在超类型的原型中定义的方法，对子类型不可见，无法继承原型。
3、组合继承
最常用，但两次调用超类型的构造函数。
4、原型式继承
构造了一个超类型原型的副本，没有构造函数的继承。
5、寄生式继承
寄生式继承把原型式+工厂模式结合而来，目的是为了封装创建对象的过程。 但寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率，和构造函数模式相似
6、寄生组合式继承
最高效，只调用一次超类型的构造函数，因此避免了在SubType.prototype上创建不必要、多余的属性。
与此同时，原型链保持不变，能正常使用instanceof和isPrototypeof()


















