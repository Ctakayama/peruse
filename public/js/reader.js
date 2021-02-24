'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
    console.log("Javascript Initialized");
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#Focus").click(FocusMode);
    $("#High").click(HighlightMode);
    let el = document.getElementById("High");
    addContent();
}

function addContent(){
    let myContent = document.getElementById("readText");
    myContent.innerHTML = localStorage.getItem("textContent");
}

function HighlightMode(e){
	
	e.preventDefault();
    let el = document.getElementById("High");
    if(el.value == "On"){
        console.log("Highlight offline")
        el.value = "Off"
    }else{
        console.log(el.value)
        el.value = "On"
    }
    
    el.classList.toggle("active");

    let data = document.getElementById("readText");
    data.classList.toggle("auto-highlight");
}

function FocusMode(e){
	
	e.preventDefault();
    let el = document.getElementById("Focus");
    if(el.value == "On"){
        console.log("FocusMode offline")
        alert("notifications renabled")
        el.value = "Off"
    }else{
        console.log("FocusMode online")
        alert("notifications silenced")
        el.value = "On"
    }
    
    el.classList.toggle("active");
}
