function enterUser(){
    var username = document.getElementById("username").value;
    if(username.length == 0){
        username = "guest";
    }
    console.log("entering with this username" + username);
    window.location.href = "home/"+username;
}