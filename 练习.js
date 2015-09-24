//查找是否有此数
function findNum(arr, a){
	var m = arr.length-1;   //列
	var n = arr[0].length-1;   //行
	var result = false;
	if(a>=arr[0][0]&&a<=arr[m][n]){
		var min = m>=n?n:m;
		var i,j;
		if(a<=arr[min][min]){
			if(a=arr[0][0]){
				result = true;
			}else{
				for(i=0; i<min; i++){
					if(a>arr[i-1][i-1]&&a<=arr[i][i]){
						for(j=0; j<i; j++){
							if(a==arr[i][j] || a==arr[j][i]){
								result = true;	
							}
						}
					}
				}
			}
		}else{
			if(m>n){
				for(var k=0; k<m+1; k++){
					if(a==arr[k][n]) result = true;
				}
			}else if(m<n){
				for(var l=0; l<n+1; l++){
					if(a==arr[m][l]) result = true;
				}
			}
		}
	}
	return result;
}
var arr=[[1,2,3,4],[2,3,4,5],[3,4,5,6]];
alert(findNum(arr, 0))





















