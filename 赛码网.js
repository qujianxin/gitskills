//水仙数
var sc;
while(sc = readline()){
    var arr = sc.split(' ');
    n=parseInt(arr[1]);
    m=parseInt(arr[0]);
    if(100<=m&&m<=n&&n<=999){
        var out = [];
        var j=0;
        for(var i=m;i<=n;i++)
        {
            var geWei,shiWei,baiWei;
            baiWei=parseInt(i/100);
            shiWei=parseInt((i-baiWei*100)/10);
            geWei=i-baiWei*100-shiWei*10;
            if(i==geWei*geWei*geWei+shiWei*shiWei*shiWei+baiWei*baiWei*baiWei)
            {
                j=j+1;
                if(j>1){
                    out.push(" "+i);
                }
                else{
                    out.push(i);
                }
            }
        }
        if(j==0){
            out.push("no");
        }
        print(out.join(''));
    }
}


//求数列的平方根和
var m;
var sum,n;
var sc

while(sc = readline()){
	var arr = sc.split(' ');
  n=parseInt(arr[0]);
  m=parseInt(arr[1]);
  sum=0;
  for(var i=0;i<m;i++){
      sum=sum+n;
      n=Math.sqrt(n);
  }
  print(sum.toFixed(2));
}

