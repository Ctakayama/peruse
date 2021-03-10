'use strict';
var pages = [];
var currentPg = 0;
var totalPg = 0;
var wpp = 500;
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
    $("#pageR").click(NextPg);
    $("#pageL").click(PrevPg);
    let el = document.getElementById("High");
    wpp = localStorage.getItem("wpp");
    addContent();
    
}

function addContent(){
  var wc = getWordCount(localStorage.getItem("textContent"));
  // var wpp = localStorage.getItem("wpp");
  // console.log("words per page:"+ wpp);
  console.log("this many words:" + wc);
  
  splitIntoPages(localStorage.getItem("textContent"), wc, wpp);
  let firstPg = pages[currentPg].join(' ');
  setHighlightSpeed(getWordCount(firstPg));
  $("#readText").html(firstPg);
  updatePgCount();
}

function getWordCount(words){
  return words.split(' ').length;
}

function splitIntoPages(text, wc, wpp){
  const w = text.split(' ');
  
  for(let i= 1; i<=Math.ceil(wc/wpp);i++){
    var page = w.slice(wpp*(i-1), wpp*i)
    pages.push(page);
  }
  console.log(pages);
}

function updatePgCount(){
  totalPg = (pages.length-1);
  $("#pgCount").html("pg. "+(currentPg+1)+ " of " + (totalPg+1) + " ("+percentage(currentPg+1, totalPg+1)+"%)")
}

function NextPg(){
  let next = currentPg+1;
  if(next <= totalPg){
    currentPg = next;
    let nextPg = pages[currentPg].join(' ');
    $("#readText").html(nextPg);
    updatePgCount();
    setHighlightSpeed(getWordCount(nextPg));
  }
}

function PrevPg(){
  let prev = currentPg-1;
  if(prev >= 0){
    currentPg = prev;
    let prevPg = pages[currentPg].join(' ');
    $("#readText").html(prevPg);
    updatePgCount();
    setHighlightSpeed(getWordCount(prevPg));
  }
}

function percentage(partial, total) {
  return Math.ceil((100 * partial) / total);
} 

//increase animation length for each word in the sentence
function setHighlightSpeed(wc){
  let speed = 0.3 * wc;
  console.log("setting speed to: "+ speed);
  let root = document.documentElement;
  root.style.setProperty('--highlight-speed', speed+"s");
}

function HighlightMode(e){
	
	e.preventDefault();
    let el = document.getElementById("High");
    if(el.value == "On"){
        el.value = "Off"
    }else{
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
        // alert("notifications renabled")
        closeFullscreen()
        el.value = "Off"
    }else{
        console.log("FocusMode online")
        // alert("notifications silenced")
        openFullscreen()
        el.value = "On"
    }
    
    el.classList.toggle("active");
}

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}