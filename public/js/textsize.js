'use strict';
let s = 1;
var sizes = [15, 20, 30, 40];
function changeSize() {
    s++;
    var el = document.getElementById("TextSize");
	var content = document.getElementById("readText");
	el.classList.toggle("active");
    content.style.fontSize = sizes[s%4];
    console.log("changing to size"+s%4);
}