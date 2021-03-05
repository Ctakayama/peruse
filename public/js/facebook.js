'use strict';
function checkLoginState(){
    FB.getLoginStatus(function(response){
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response){
    if(response.status === 'connected'){
        console.log('Successfully logged in with Facebook');
        FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
}

function changeUser(response){
    //code to chnage name and image
    // $(".facebookLogin").hide();

    // $("h1#name").text(response.name);
    console.log("changing user");
    window.location.href = "home/"+response.name;

    // $("img#photo").attr("src",response.picture.data.url);
}