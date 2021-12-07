function DispTime(){
	var time=new Date();
	var temp=time.toLocaleString();
	var Clock=document.getElementById("showclock");
	Clock.innerHTML=temp;
	setTimeout("DispTime()",1000);
	var hours=time.getHours();
}