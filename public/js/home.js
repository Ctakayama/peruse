'use strict';
$(document).ready(function() {
	initializePage();
    console.log("Javascript on Home.js");
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    
    $("#scan").hover(function(){
        $(this).append("<div id = 'hover'>(experimental)</div>");
    }, function(){
        $("#hover").remove();
    });

}