'use strict';



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    console.log("Javascript Initialized");
});


function pushToJSON() {
    console.log("Pushing to JSON");
    var textInput = document.getElementById('text').value;
    console.log(textInput);
    localStorage.setItem('textContent', textInput);
}