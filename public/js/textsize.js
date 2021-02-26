'use strict';
let i = 1;
var sizes = [10, 20, 30, 40, 50];
function changeSize() {
    var el = document.getElementById("TextSize");
	var content = document.getElementById("readText");
	el.classList.toggle("active");
    content.style.fontSize = sizes[i%5];
    
    i++;

}