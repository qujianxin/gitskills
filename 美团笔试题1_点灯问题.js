/*
��4*4��Χ�����ϰ��������ӣ��ڰ���ɫλ�ú���Ŀ��������Ͻǵ�����Ϊ��1��1���������ǣ�4��4��
�ָ�������֧�����꣬�������������������ɫ���з�ת�����������̷�Χ�����跭ת��
��ת������̷ֲ���

������
colors����ά���飬����4��4��16�����ֱ�ʾ���̵ĳ�ʼ״̬��0��ʾ��ɫ��1��ʾ��ɫ
pivots����ά���飬����3�����У�ÿ����������ʾ��ת�������꣬��һ������ʾ�ڼ��У��ڶ�������ʾ�ڼ���

����ֵ��
һά���飬16�����ֱ�ʾ���̷�ת��״̬��ԭcolors��i��j��Ԫ�ط��ڸ������i*4+jλ��(0 <= i <= 3, 0 <= j <= 3)

*/

var colors=
[
	[0,0,1,1],
	[1,0,1,0],
	[0,1,1,0],
	[0,0,1,0]
]
var pivots=
[
	[1,1],
	[2,2],
	[3,3],
	[4,4]
]

function chess(colors,pivots){
	var x,y,up,down,left,right;
	function remainder(num){
		return num = (num+1)%2;
	}
	for(var i=0; i <pivots.length; i++){
		x = pivots[i][0]-1;
		y = pivots[i][1]-1;
		
		if(colors[x-1]){
			colors[x-1][y] = remainder(colors[x-1][y]);
		}
		if(colors[x+1]){
			colors[x+1][y] = remainder(colors[x+1][y]);
		}
		if(colors[x][y-1]){
			colors[x][y-1] = remainder(colors[x][y-1]);
		}
		if(colors[x][y+1]){
			colors[x][y+1] = remainder(colors[x][y+1]);
		}
	}
	alert(colors.join(","));
}

chess(colors,pivots);

