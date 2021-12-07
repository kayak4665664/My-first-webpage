var msg="欢迎光临我的博客！";//声明一个变量。
var interval=300;//声明一个变量，设置一个时间间隔为300毫秒。
seq=0;//赋给seq初值为0。
function Scroll(){//定义一个函数。
	len=msg.length;
	window.status=msg.substring(0, seq+1);
	++seq;
	/*len的值为字符串msg的长度，在状态栏上显示msg的第一到第seq+个字符，seq每次递加。*/
	if(seq>=len) seq=0;/*当seq的长度大于等于msg的字符长度时，seq=0。*/
	window.setTimeout("Scroll();",interval);
	//每300毫秒调用一次Scroll函数，即每300毫秒出一个字。
}