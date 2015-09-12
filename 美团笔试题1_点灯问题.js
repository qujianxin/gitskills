/*
在4*4的围棋盘上摆满了棋子，黑白两色位置和数目随机。左上角的坐标为（1，1），右下是（4，4）
现给定三个支点坐标，对其的上下左右棋子颜色进行翻转，若超出棋盘范围则无需翻转。
求翻转后的棋盘分布。

参数：
colors：二维数组，给定4行4列16个数字表示棋盘的初始状态，0表示黑色，1表示白色
pivots：二维数组，给定3行两列，每行两个数表示反转中心坐标，第一个数表示第几行，第二个数表示第几列

返回值：
一维数组，16个数字表示棋盘翻转后状态，原colors的i行j列元素放在该数组的i*4+j位置(0 <= i <= 3, 0 <= j <= 3)

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

