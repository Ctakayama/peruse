'use strict';



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    console.log("Javascript Initialized");

    init();
});



function init(){
    if(document.getElementById('fileText')!=null){
        document.getElementById('fileText').addEventListener('change', handleFileSelect, false);

    }
    localStorage.setItem('textContent', "");
}
  
function handleFileSelect(event){
    const reader = new FileReader()
    var ext = getFile(event.target.files[0].name);
    console.log(ext);
    if(ext != "txt" ){
        $('#experimental-header').html("<h1>Wrong File Format</h1>")
		$('#experimental-body').html("<p>File must be of type .txt</p>")
        $('#experimental').modal('show');
        return;
    }
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
}

function handleFileLoad(event){
    console.log(event);
    var textInput = document.getElementById('fileText').textContent = event.target.result;
    localStorage.setItem('textContent', textInput);
    addContent();
}

//for preview functionality
function addContent(){
    let myContent = document.getElementById("preview");
    myContent.innerHTML = localStorage.getItem("textContent");
}

function getFile(filePath) {
    return filePath.substr(filePath.lastIndexOf('\\') + 1).split('.')[1];
}

function verify() {
    var content = localStorage.getItem("textContent");
    
    if(content.length < 1){
        $('#experimental-header').html("<h1> No File Chosen</h1>")
		$('#experimental-body').html("<p>Choose a File before pressing upload.</p>")
        $('#experimental').modal('show');
    }else{
        window.location.href = "/reader";
    }
}

function pushToJSON() {
    console.log("Pushing to JSON");
    var textInput = document.getElementById('pasteText').value;
    if(textInput.length < 1){
        $('#experimental-header').html("<h1> No Text to Upload</h1>")
		$('#experimental-body').html("<p>Pasted text must be at least 1 character.</p>")
        $('#experimental').modal('show');
    }else{
        window.location.href = "/reader";
    }
    console.log(textInput);
    localStorage.setItem('textContent', textInput);
}