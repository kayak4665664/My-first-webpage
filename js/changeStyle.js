var flag=false;
var obj=document.getElementById("css");
function changeStyle(){
	if(flag==false){
		obj.setAttribute("href","../css/format2.css");
		flag=true;
	}
	else{
		obj.setAttribute("href","../css/format.css");
		flag=false;
	}
}