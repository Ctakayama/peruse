let toggle = false;

function test() {
	console.log("running darkmode!");
	var background = document.getElementsByClassName('ReadingText');
	var thumbnail = document.getElementById("DarkThumb");
	var label = document.getElementById("DarkLabel");
	var el = document.getElementById("dark");
	let root = document.documentElement;

	
	el.classList.toggle("active");
	console.log(label.innerHTML);

	//light mode
	if(toggle == true){
		background[0].style.background = "#fff";
		background[0].style.color = "#333";
		thumbnail.src = "../images/iconmonstr-weather-111.svg";
		//document.getElementsById('readText').style.color = "white";
		label.innerHTML = "dark mode";
		toggle = false;
		root.style.setProperty('--highlight-color', "rgb(255 227 29)");

	//dark mode
	} else {
		
		background[0].style.background = "#333";
		background[0].style.color = "#eee";
		//document.getElementsById('readText').style.color = "black";
		thumbnail.src = "../images/iconmonstr-weather-2.svg";
		label.innerHTML = "light mode";
  		root.style.setProperty('--highlight-color', "rgb(114, 116, 47)");
		toggle = true;
	}
}