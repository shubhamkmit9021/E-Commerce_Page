
var allUsers = JSON.parse(localStorage.getItem("users")) || [];
console.log(allUsers)
document.querySelector("form").addEventListener("submit",loginFun);

function loginFun() {

    event.preventDefault();
    var email = document.querySelector("#email").value;

    var pass1 = document.querySelector("#pass");
    var pass = pass1.value;
    pass1.value = '';

    for(var i = 0; i<allUsers.length; i++)
    {
        if(email === allUsers[i].Myemail && pass === allUsers[i].Mypassword ) {

            var login = true;
            var userName = allUsers[i].Myname;
            localStorage.setItem("userName", JSON.stringify(userName));
            break;
        }
    }

    if(login)
    {
        alert("Login Successfully & email is "+email+" & password is "+pass);
        window.location.href='../Pages/Mens_page/mens.html';
    }
    else
    {
        alert("Invalid Credentials");
    }

}

function btnFun() {
    event.preventDefault();
    alert("Google Authentication not applied yet")
}