

let money = JSON.parse(localStorage.getItem("finalAmout"))
document.querySelector("#rupya").innerText = money;

document.querySelector("form").addEventListener("submit", cardData);

function cardData() {
    event.preventDefault();
    let card = document.querySelector("#cardnumber").value;
    let date = document.querySelector("#date").value;
    let cvv = document.querySelector("#cvv").value;
    let name = document.querySelector("#name").value;

    if(card.length <= 0 )
        alert("Enter Card Number in Proper Format");
    else if(date.length <= 0)
        alert("Enter Expiry Date");
    else if(cvv.length <= 0)
        alert("Enter Correct CVV Number");
    else if(name.length <= 0)
        alert("Enter Name of Card Owner");
    else
    {
        document.querySelector("#cardnumber").value="";
        document.querySelector("#date").value="";
        document.querySelector("#cvv").value="";
        document.querySelector("#name").value="";
        
        window.location.href='../Otp_page/otp.html' 
    }
}