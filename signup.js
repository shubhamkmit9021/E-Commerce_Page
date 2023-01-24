
document.querySelector("form").addEventListener("submit",storeFun);

var arr = JSON.parse(localStorage.getItem("users")) || [];

function storeFun() {

    event.preventDefault();

    var name1 = document.querySelector("#name");
    var name = name1.value;
    name1.value = "";

    var email1 = document.querySelector("#email");
    var email = email1.value;
    email1.value = '';

    var phone1 = document.querySelector("#phone");
    var phone = phone1.value;
    phone1.value = '';

    var password1 = document.querySelector("#pass");
    var password = password1.value;
    password1.value = '';

    if(name.length <= 0) {
        alert("Please Enter Your Name")
    }
    else if(email.length <= 0 ) {
        alert("Please enter valid email id");
    }
    else if(phone.length <= 9) {
        alert("Please enter valid 10 digit mobile number");
    }
    else if(password.length <= 4)
    {
        alert('Please enter atleast 5 character in password');
    }    
    else {

        for(var i = 0; i < arr.length; i++)
        {
            if(email === arr[i].Myemail) {
                alert("Email id is already registered");
                return;
            }
            else if(phone === arr[i].Myphone) {
                alert("Phone is already registered");
                return;
            }
        }

        var obj = {
            Myname : name,
            Myemail : email,
            Myphone : phone,
            Mypassword : password,
        }

        arr.push(obj);
        console.log(arr);

        localStorage.setItem("users", JSON.stringify(arr));
        var flag = true;
    }

    
    if(flag)
     {
        alert("Registration Successfully Completed");
        window.location.href = './Signin/signin.html';
     }

    
}