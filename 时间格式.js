/*
输出的结果：
002015年九月11日

字符串.length;返回字符串长度
*/ 
var date = new Date(); 
	var str = formatDate(date, 'yyyyyy年MMM月dd日'); 
	alert(str);
	
	function formatNumber(number, fmt) { 
		number = number + '';    //把数字变成字符串
		if (fmt.length > number.length) { 
			return fmt.substring(number.length) + number;   //把日期的day前面补全0
		} 
		return number; 
	} 

	function formatDate(datetime, format) { 
		var cfg = { 
			MMM : ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'], 
			MMMM : ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'] 
		}, 
		values = { 
			y : datetime.getFullYear(), 
			M : datetime.getMonth(),     //[0，1，2，...]正常应该datetime.getMonth()+1
			d : datetime.getDate(), 
			H : datetime.getHours(), 
			m : datetime.getMinutes(), 
			s : datetime.getSeconds(), 
			S : datetime.getMilliseconds() 
		}; 
		/*用正则表达式拆分日期格式各个元素*/ 
		var elems = format.match(/y+|M+|d+|H+|m+|s+|S+|[^yMdHmsS]/g);       //elems为匹配出来的数组
		//将日期元素替换为实际的值 
		for (var i = 0; i < elems.length; i++) { 
			if (cfg[elems[i]]) { 
				elems[i] = cfg[elems[i]][values[elems[i].charAt(0)]];      //替换月份数值   values[elems[i].charAt(0)]为elems[i]的第一个字符，values搜索该字符
			} else if (values[elems[i].charAt(0)]) { 
				elems[i] = formatNumber(values[elems[i].charAt(0)], elems[i].replace(/./g, '0'));   // /./g为匹配全局，日期不够dd格式如8，则返回08
			} 
		}
		return elems.join('');      //若不加‘’，则返回数组形式2015，年，九，月，03，日
	} 
