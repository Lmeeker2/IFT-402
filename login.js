function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if((username=="admin" && password=="user") || (username=="blake" && password=="blake") || (username=="lauren" && password=="lauren") 
    || (username=="jake" && password=="jake") || (username=="daniel" && password=="daniel"))
    {
        //alert("login succesfully");
        window.location.replace("home.html");
        return false;
    }
    else
    {
        alert("login failed");
    }
}