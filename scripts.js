function picswitch(sw){
	var pic;
	if (sw==0){
		pic = "file:///home/cfit/Downloads/wdlogo.jpg";}
	else{
		pic = "file:///home/cfit/Downloads/sleeping-dogs-logo.png";
		}
document.getElementById('myImage').src=pic;
}


function myFunc(){
document.getElementById('p1').innerHTML=document.getElementById('usn').value;

document.getElementById('p2').innerHTML=document.getElementById('ema').value;
document.getElementById('p3').src="file///home/cfit/html/"+document.getElementById('fil').value;

}
