
var allCartItems = JSON.parse(localStorage.getItem("myItems")) || [];

if(allCartItems.length === 0) {
    emptyCart();
}
else {
    displayFun();
}


function emptyCart() {
    var mybox = document.querySelector("#box");
    mybox.style.border = 'none';
    mybox.innerHTML="";
    var imageSource = "data:image/jpeg;base64,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"
    var image = document.createElement("img");
    image.setAttribute("src",imageSource);  
    image.style.display='block';
    image.style.margin='auto';
    image.style.border='1px solid black'
    mybox.append(image);

    // localStorage.clear(); // for clear all local storage incase of promocode payment clear storage  
    localStorage.removeItem("myItems");
    localStorage.removeItem("total_Price");
}

function displayFun() {

    var mybox = document.querySelector("#box");
    mybox.innerHTML="";
    mybox.style.border = "1px solid black";

    allCartItems.map( (el,index) => {

        var div = document.createElement("div");
        div.setAttribute("id","itembox");
    
        var div1 = document.createElement("div");
        div1.setAttribute("id","itembox1");
    
        var image = document.createElement("img");
        image.setAttribute("src",el.image);
        image.setAttribute("alt",index);
    
        div1.append(image);
    
        var div2 = document.createElement("div");
        div2.setAttribute("id","itembox2");
    
        var name = document.createElement("h4");
        name.innerText = el.category;
    
        var price = document.createElement("h4");
        price.innerText = el.price;
    
        var div3 = document.createElement("div");
        div3.setAttribute("id","itembox3");
    
        var btn1 = document.createElement("button");
        btn1.setAttribute("id","btnstyle1");
        btn1.innerText="+";
        btn1.addEventListener("click",function() {
            addFun(index)
        })
    
        var h3 = document.createElement('h3');
        h3.innerText = el.quantity;
    
        var btn2 = document.createElement("button");
        btn2.setAttribute("id","btnstyle2");
        btn2.innerText="-";
        btn2.addEventListener("click",function() {
            substractFun(index);
        })
    
        div3.append(btn1,h3,btn2);
    
        div2.append(name, price, div3);
    
    
        div.append(div1, div2);
        
        mybox.append(div);
    
    })

    function addFun(ind) {

        if(allCartItems[ind].quantity === 4)

            alert("You can not buy more than 4 Items");

        else {

            allCartItems[ind].quantity++;
            
        }

        localStorage.setItem("myItems", JSON.stringify(allCartItems));
        displayFun();

    }

    function substractFun(ind) {
        if(allCartItems[ind].quantity === 1) {

           let conf = confirm("Are you sure to remove the item !!");
           if(conf) {
            
            allCartItems.splice(ind,1);

           }

        } else {

            allCartItems[ind].quantity--;
            
        }

        localStorage.setItem("myItems", JSON.stringify(allCartItems));
        displayFun();
    }

    if(allCartItems.length === 0) {
        emptyCart();
       
    }

    totalItemCount();
    numberOfItems();
    subTotal();
    

}

function totalItemCount() {
    let ans = document.querySelector(".total_item_show");
    ans.innerText = allCartItems.length;
}

function numberOfItems() {
    var count = allCartItems.reduce( (accumulator, elem) => {
        return (accumulator + elem.quantity);
    },0);  // for initialize as a zero integer

    let ans = document.querySelector(".number_item_show");
    ans.innerText = count;

}


function subTotal() {
    var totalPrice = 0;
    totalPrice = allCartItems.reduce( (accumulator, elem) => {
        return (accumulator + (elem.quantity * elem.price));
    },0);

    let ans = document.querySelector(".sub_total_show");
    ans.innerText = totalPrice.toFixed(2);
    document.querySelector(".total_amount").innerText = totalPrice.toFixed(2);
    localStorage.setItem("total_Price", JSON.stringify(totalPrice.toFixed(2)));

}

function promocode() {
    var totalPrice = JSON.parse(localStorage.getItem("total_Price")) || 0;
    var input1 = document.querySelector("input");
    var input = input1.value;

    if(input === 'shubham30')
    {
        var discountPrice = (totalPrice * 30) / 100;
        var myPrice = totalPrice - discountPrice;
        var final_amount = myPrice.toFixed(2);
        alert("Promocode Successfully Applied");
        input1.value = "";
        document.querySelector(".total_amount").innerText =final_amount;
        localStorage.setItem("discounted-price", JSON.stringify(final_amount));
    }
    else
    {
        alert("Promocode Not Applicable");
        input1.value = "";
        document.querySelector(".total_amount").innerText = totalPrice;
        localStorage.setItem("discounted-price", JSON.stringify(totalPrice));
    }
}

function payPaisha() {

    let totalPrice = JSON.parse(localStorage.getItem("total_Price"));
    let discountPrice = JSON.parse(localStorage.getItem("discounted-price"));

    let price = discountPrice || totalPrice ;

    if(price > 0)
    {
        localStorage.setItem("finalAmout", JSON.stringify(price));
        window.location.href="../Payment_page/payment.html";
    }
    else 
    {
        alert("First Add Items in Cart");
    }
}




