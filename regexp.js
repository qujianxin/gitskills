//var elems = format.match(/y+|M+|d+|H+|m+|s+|S+|[^yMdHmsS]/g);

//[y+M+d+]��ƥ��һ���ַ���[]��ƥ��һ���ַ���[yMd]+ƥ�����yyyyyMMMd�����ַ�
//(yMd)+ƥ����Ƕ��yMd���塣
//�����������
var pattern = /[eng|ha]/ig;
var pattern1 = /(eng|ha)/ig;
var pattern2 = /eng|ha/ig;
var str = 'qwerereng ha |';                          //["e", "e", "e", "n", "g", "h", "a", "|"]
var elems = str.match(pattern);                //[]��ľ��ǵ����ַ���
var elems = str.match(pattern1);              //["eng", "ha"]
var elems = str.match(pattern2);              //["eng", "ha"]����ֻ���жϻ����㣬�޷��������ж��ַ�
console.log(elems); 

/*ʹ��match������ȡƥ������*/
var pattern = /e/ig;
var str = 'qwerer';
var elems = str.match(pattern);         //e,e
console.log(elems);  
elems.length;                                         //2

/*ʹ��replace�滻ƥ�䵽������*/
var pattern = /e/g;
var str = 'qwerer';
var elems = str.replace(pattern, 'ww');        //qwwwrwwr  ʹ����gȫ��   ��qwwwrer  ��ʹ��ȫ�֣�ֻƥ��һ��
console.log(elems);  

/*��split���ַ�����ֳ�����*/
var pattern = /e/g;
var str = 'qwerer';
var elems = str.split(pattern);
console.log(elems);                                    //["qw", "r", "r"]

/*ʹ��search�����ҵ�һ��ƥ������*/
var pattern = /e/g;
var str = 'qwerer';
var elems = str.search(pattern);               //search�������ҵ������أ��ʲ���gȫ�֡�
console.log(elems);                                    //2

/*^$*/
var pattern= /^google$/;               //ָǿ����β
var pattern1= /[^g]oogle$/;               //[^]�Ǳ��ַ�
var str = 'ghoogle';
console.log(str.match(pattern1));          //["hoogle", index: 1, input: "ghoogle"]
																 //str.match(pattern1)[0]         hoogle
																 //str.match(pattern1).input         ghoogle
																 //str.match(pattern1).index        1

/*ʹ�÷���ģʽƥ��*/
var pattern = /(oo|gl){2,8}/g;                   //ƥ�����oo��gl2-8��
var str = 'ooooglglglglglgloo';
var elems = str.match(pattern);
console.log(elems);                               //["ooooglglglglglgl", "gl", index: 0, input: "ooooglglglglglgloo"]
                                                                //��//�����g�������["ooooglglglglglgl"]������g�������["ooooglglglglglgl", "gl", index: 0, input: "ooooglglglglglgloo"]
																//�����Ժ�һ��Ҫ��//����ԹԼӸ�g������

/*$1,$2,$3����ƥ��ĵڼ�������������ַ�*/
var pattern = /8(.*)8/g;
var str = 'there are 2| 8google18 8google28|';
var ma = str.match(pattern);
console.log(RegExp.$1)                      //google8 8google                ע��Ҫ�Ƚ���ƥ������RegExp.$1  ֱ��$1�ᱨ��

var elems = str.replace(pattern, '<strong>'+ma+'</strong>')
var elems = str.replace(pattern, '<strong>$1</strong>')
document.write(elems);

var pattern= /(.*)\s(.*)/; 
var str ='google baidu'; 
var result=str.replace(pattern,'$2 $1');    //�����������ֵ�滻��� document.write(result);
console.log(result)                                    //baidu google

/*̰���Ͷ���*/                                             //����ָƥ�䵽���ϵľͷ��أ�̰��ָƥ�䵽�������˲ŷ���
var pattern = /[a-z]+?/;                                //�������ԣ����ں����g����ȫ�ֱȽϣ�����������һ���ͷ���
var str ='abcdefjhijklmnopqrstuvwxyz';
var result = str.replace(pattern, 'xxx');
console.log(result);

/***���ֽ�ֹ̰����ʽ*/                                 //$1�����һ������
var pattern = /8(.*?)8/g;
var str = 'there are 2| 8google18 8google28|';
var result=str.replace(pattern, '<strong>$1</strong>');      //there are 2| google1 google2|
document.write(result);

var pattern = /8([^8]*)8/g;


/*�����Է���ͷǲ����Է��飬���ǣ���������ݻ᲻�ᱻexec��match����*/
var pattern= /(\d+)(?:[a-z])/g //�ǲ����Է���          ["123a","123"]      
//var pattern= /(\d+)([a-z])/g; //�����Է��� 
var str ='123abc'; 

var result = str.match(pattern)
console.log(RegExp.$2);                            //��
alert(result)

var result = pattern.exec(str);                     //["123a","123"]     ���ǣ������������Ų��ᱻ����
console.log(result)                          

/*ʹ��ǰհ����*/ 
var pattern= /(goo(?=gle))/; //goo ���������� gle ���ܲ��� 
var str ='google'; 
console.log(pattern.exec(str));               //["goo", "goo"]

/*ʹ�û���ģʽ*/ 
var pattern= /^\d+/mg; //�����˻���ģʽ     ֻ��ȫ��ƥ�䲻�˻���
var str ='1.baidu\n2.google\n3.bing'; 
var result=str.replace(pattern,'#'); 
alert(result);










