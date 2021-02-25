let toggle = true;

function test() {

	if(toggle == true){
		document.getElementById("light").className = "reader-nav LightMode unselectable";
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
		//document.getElementsByClassName('ReadingText').style.color = "white";
		//document.getElementsById('readText').style.color = "white";
		toggle = false;
	} else {
		document.getElementById("dark").className = "reader-nav DarkMode unselectable";
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
		//document.getElementsByClassName('ReadingText').style.color = "black";
		//document.getElementsById('readText').style.color = "black";
		toggle = true;
	}
}