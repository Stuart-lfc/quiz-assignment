let counter = 0;

function check(){
    let setUser ="Quiz";
    let setPassword = "Animal";
    let getUser = document.getElementById("user").value;
    let getPassword = document.getElementById("password").value;

    if(setUser == getUser && setPassword == getPassword)
    {
       document.getElementById("feedback").innerHTML = "Access: Granted &#10004,";
       document.getElementById("feedback").style.color = "green";
       window.location.href = "index.html";
    }
    else{
        counter++;
        document.getElementById("feedback").innerHTML = "Access: Denied Try Again &#10008,";
        document.getElementById("feedback").style.color = "red";
    }
    if(counter== 3){
        document.getElementById("feedback").innerHTML = "Access: Denied Contact Admin &#10071, &#10071";
        document.getElementById("feedback").style.color = "red";
        document.getElementById("user").disabled = "true";
        document.getElementById("password").disabled = "true";
        document.getElementById("butt").disabled = "true";
    }
}