var quantity = [
    12,3,51,0,1,
    01,02,03,04,05
]
var size = [
    "X","L","XL","X","L",
    "XL","X","L","XL","X"
]

var price = [
    605,
    570,
    265,
    350,
    1260,
    660,
    1030,
    735,
    1270,
    410
]

var productName = [
    "#FR2 Reflector Logo Pigment Hoodie",
    "#FR2 Reflector Logo Pigment Sweat Pants",
    "#FR2 VR T-shirt",
    "#FR2 EPIC Duel Longsleeve T-shirt",
    "Supreme Dash Snow S/S TOP",
    "Palace Baggies Shell BOTTOM",
    "Palace x Detroit Tigers New Era Coach Jacket",
    "Supreme Curve Track Pant",
    "Supreme Team Chenille Ash Grey Small Hoodie",
    "OBEY - MOTORHEAD TEST PRINT PREMIUM CREW FLEECE",
]


//generate/refresh product that were added
function generatecart() {


    var i = 0
    var item = true
    
    quantity[i]=localStorage.getItem("q1")
    if (quantity[i] >= 1) {
        document.getElementById("product1").style.display = "block";
        document.getElementById("quantity1").value = quantity[i];
        document.getElementById("productName1").innerHTML = productName[i];
        item = false;

        document.getElementById("size1").value = localStorage.getItem("s1")
        
        document.getElementById("price1").innerHTML = "RM " + price[i].toFixed(2);
    }
    i++

    quantity[i]=localStorage.getItem("q2")
    if (quantity[i] >= 1) {
        document.getElementById("product2").style.display = "block";
        document.getElementById("quantity2").value = quantity[i];
        document.getElementById("productName2").innerHTML = productName[i];
        item = false;

        document.getElementById("size2").value = localStorage.getItem("s2")
        
        document.getElementById("price2").innerHTML = "RM " + price[i].toFixed(2);
    }
    i++

    quantity[i]=localStorage.getItem("q3")
    if (quantity[i] >= 1) {
        document.getElementById("product3").style.display = "block";
        document.getElementById("quantity3").value = quantity[i];
        document.getElementById("productName3").innerHTML = productName[i];
        item = false;

        document.getElementById("size3").value = localStorage.getItem("s3")
        
        document.getElementById("price3").innerHTML = "RM " + price[i].toFixed(2);
    }
    i++

    quantity[i]=localStorage.getItem("q4")
    if (quantity[i] >= 1) {
        document.getElementById("product4").style.display = "block";
        document.getElementById("quantity4").value = quantity[i];
        document.getElementById("productName4").innerHTML = productName[i];
        item = false;

        document.getElementById("size4").value = localStorage.getItem("s4")
        
        document.getElementById("price4").innerHTML = "RM " + price[i].toFixed(2);
    }
    i++

    quantity[i]=localStorage.getItem("q5")
    if (quantity[i] >= 1) {
        document.getElementById("product5").style.display = "block";
        document.getElementById("quantity5").value = quantity[i];
        document.getElementById("productName5").innerHTML = productName[i];
        item = false;

        document.getElementById("size5").value = localStorage.getItem("s5")
        
        document.getElementById("price5").innerHTML = "RM " + price[i].toFixed(2);
    }
    i++
    quantity[i]=localStorage.getItem("q6")
    if (quantity[i] >= 1) {
        document.getElementById("product6").style.display = "block";
        document.getElementById("quantity6").value = quantity[i];
        document.getElementById("productName6").innerHTML = productName[i];
        item = false;

        document.getElementById("size6").value = localStorage.getItem("s6")
        
        document.getElementById("price6").innerHTML = "RM " + price[i].toFixed(2);
    }
    i++

    quantity[i]=localStorage.getItem("q7")
    if (quantity[i] >= 1) {
        document.getElementById("product7").style.display = "block";
        document.getElementById("quantity7").value = quantity[i];
        document.getElementById("productName7").innerHTML = productName[i];
        item = false;

        document.getElementById("size7").value = localStorage.getItem("s7")
        
        document.getElementById("price7").innerHTML = "RM " + price[i].toFixed(2);
    }
    i++

    quantity[i]=localStorage.getItem("q8")
    if (quantity[i] >= 1) {
        document.getElementById("product8").style.display = "block";
        document.getElementById("quantity8").value = quantity[i];
        document.getElementById("productName8").innerHTML = productName[i];
        item = false;

        document.getElementById("size8").value = localStorage.getItem("s8")
        
        document.getElementById("price8").innerHTML = "RM " + price[i].toFixed(2);
    }
    i++

    quantity[i]=localStorage.getItem("q9")
    if (quantity[i] >= 1) {
        document.getElementById("product9").style.display = "block";
        document.getElementById("quantity9").value = quantity[i];
        document.getElementById("productName9").innerHTML = productName[i];
        item = false;

        document.getElementById("size9").value = localStorage.getItem("s9")
        
        document.getElementById("price9").innerHTML = "RM " + price[i].toFixed(2);
    }
    i++

    quantity[i]=localStorage.getItem("q10")
    if (quantity[i] >= 1) {
        document.getElementById("product10").style.display = "block";
        document.getElementById("quantity10").value = quantity[i];
        document.getElementById("productName10").innerHTML = productName[i];
        item = false;

        document.getElementById("size10").value = localStorage.getItem("s10")
        
        document.getElementById("price10").innerHTML = "RM " + price[i].toFixed(2);
    }
    i++
    document.getElementById("priceBox").style.display = "block"
    
    if (item) {
        document.getElementById("product0").style.display = "block";
        document.getElementById("priceBox").style.display = "none"
    }

    totalCal()
    
}

//remove product
function removeproduct1() {
    quantity[0] = 0;
    document.getElementById("product1").style.display = "none";

    var getInput = quantity[0]
    localStorage.setItem("q1", getInput)
    generatecart();
 }
function removeproduct2() {
    quantity[1] = 0;
    document.getElementById("product2").style.display = "none";

    var getInput = quantity[1]
    localStorage.setItem("q2", getInput)
    generatecart()  
}
function removeproduct3() {
    quantity[2] = 0;
    document.getElementById("product3").style.display = "none";

    var getInput = quantity[2]
    localStorage.setItem("q3", getInput)
    generatecart()  
}
function removeproduct4() {
    quantity[3] = 0;
    document.getElementById("product4").style.display = "none";

    var getInput = quantity[3]
    localStorage.setItem("q4", getInput)
    generatecart()  
}
function removeproduct5() {
    quantity[4] = 0;
    document.getElementById("product5").style.display = "none";

    var getInput = quantity[4]
    localStorage.setItem("q5", getInput)
    generatecart()  
}
function removeproduct6() {
    quantity[5] = 0;
    document.getElementById("product6").style.display = "none";

    var getInput = quantity[5]
    localStorage.setItem("q6", getInput)
    generatecart();
 }
function removeproduct7() {
    quantity[6] = 0;
    document.getElementById("product7").style.display = "none";

    var getInput = quantity[6]
    localStorage.setItem("q7", getInput)
    generatecart()  
}
function removeproduct8() {
    quantity[7] = 0;
    document.getElementById("product8").style.display = "none";

    var getInput = quantity[7]
    localStorage.setItem("q8", getInput)
    generatecart()  
}
function removeproduct9() {
    quantity[8] = 0;
    document.getElementById("product9").style.display = "none";

    var getInput = quantity[8]
    localStorage.setItem("q9", getInput)
    generatecart()  
}
function removeproduct10() {
    quantity[9] = 0;
    document.getElementById("product10").style.display = "none";

    var getInput = quantity[9]
    localStorage.setItem("q10", getInput)
    generatecart()  
}


//update
 function updatequantity1() {
    var x = document.getElementById("quantity1").value;
    quantity[0] = x;
    var getInput = quantity[0]
    localStorage.setItem("q1", getInput)
    if (x==0) {removeproduct1()}
    generatecart()
}
 function updatequantity2() {
    var x = document.getElementById("quantity2").value;
    quantity[1] = x;
    var getInput = quantity[1]
    localStorage.setItem("q2", getInput)
    if (x==0) {removeproduct2()}
    generatecart()
 }
 function updatequantity3() {
    var x = document.getElementById("quantity3").value;
    quantity[2] = x;
    var getInput = quantity[2]
    localStorage.setItem("q3", getInput)
    if (x==0) {removeproduct3()}
    generatecart()
}
function updatequantity4() {
    var x = document.getElementById("quantity4").value;
    quantity[3] = x;
    var getInput = quantity[3]
    localStorage.setItem("q4", getInput)
    if (x==0) {removeproduct4()}
    generatecart()
}
function updatequantity5() {
    var x = document.getElementById("quantity5").value;
    quantity[4] = x;
    var getInput = quantity[4]
    localStorage.setItem("q5", getInput)
    if (x==0) {removeproduct5()}
    generatecart()
}
function updatequantity6() {
    var x = document.getElementById("quantity6").value;
    quantity[5] = x;
    var getInput = quantity[5]
    localStorage.setItem("q6", getInput)
    if (x==0) {removeproduct6()}
    generatecart()
}
 function updatequantity7() {
    var x = document.getElementById("quantity7").value;
    quantity[6] = x;
    var getInput = quantity[6]
    localStorage.setItem("q7", getInput)
    if (x==0) {removeproduct7()}
    generatecart()
 }
 function updatequantity8() {
    var x = document.getElementById("quantity8").value;
    quantity[27] = x;
    var getInput = quantity[7]
    localStorage.setItem("q8", getInput)
    if (x==0) {removeproduct8()}
    generatecart()
}
function updatequantity9() {
    var x = document.getElementById("quantity9").value;
    quantity[8] = x;
    var getInput = quantity[8]
    localStorage.setItem("q9", getInput)
    if (x==0) {removeproduct9()}
    generatecart()
}
function updatequantity10() {
    var x = document.getElementById("quantity10").value;
    quantity[9] = x;
    var getInput = quantity[9]
    localStorage.setItem("q10", getInput)
    if (x==0) {removeproduct10()}
    generatecart()
}

//undate size
function updateSize1() {
    var x = document.getElementById("size1").value;
    var getInput = x
    localStorage.setItem("s1", getInput)

}
function updateSize2() {
    var x = document.getElementById("size2").value;
    var getInput = x
    localStorage.setItem("s2", getInput)

}
function updateSize3() {
    var x = document.getElementById("size3").value;
    var getInput = x
    localStorage.setItem("s3", getInput)

}
function updateSize4() {
    var x = document.getElementById("size4").value;
    var getInput = x
    localStorage.setItem("s4", getInput)

}
function updateSize5() {
    var x = document.getElementById("size5").value;
    var getInput = x
    localStorage.setItem("s5", getInput)

}
function updateSize6() {
    var x = document.getElementById("size6").value;
    var getInput = x
    localStorage.setItem("s6", getInput)

}
function updateSize7() {
    var x = document.getElementById("size7").value;
    var getInput = x
    localStorage.setItem("s7", getInput)

}
function updateSize8() {
    var x = document.getElementById("size8").value;
    var getInput = x
    localStorage.setItem("s8", getInput)

}
function updateSize9() {
    var x = document.getElementById("size9").value;
    var getInput = x
    localStorage.setItem("s9", getInput)

}
function updateSize10() {
    var x = document.getElementById("size10").value;
    var getInput = x
    localStorage.setItem("s10", getInput)

}

// Get shipping fee value
var productTotal = 0;
var total = 0;
var shippingfee = 0;

function standardPrice() {
    shippingfee = 3.99;
    var getInput = "Standard Delivery 3-7 Days"
    localStorage.setItem("deliveryType", getInput)
    document.getElementById("checkoutButton").style.display = "inline-block";
    document.getElementById("priceBox").style.height = "150px"
    document.getElementById("priceBox").style.transition = "0.3s"
    totalCal()
}
function expressPrice() {
    shippingfee = 5.99;
    var getInput = "Express Delivery 1-5 Days"
    localStorage.setItem("deliveryType", getInput)
    document.getElementById("checkoutButton").style.display = "inline-block"
    document.getElementById("priceBox").style.height = "150px"
    document.getElementById("priceBox").style.transition = "0.3s"
    totalCal()
}
 ///

function totalCal() {
    tempProductTotal = 0  //calculation
    for (i=0; i<10; i++) {
        var temp= 0
        temp = quantity[i]*price[i]
        tempProductTotal +=  temp;
    }

    productTotal = tempProductTotal


    document.getElementById("productTotalPrice").innerHTML = "Price : RM " + productTotal.toFixed(2);
    if (shippingfee == 0) {document.getElementById("shippingFee").innerHTML = "Shipping fee: -"}
    else {
        total = productTotal + shippingfee;
        document.getElementById("shippingFee").innerHTML = "Shipping fee: RM " + shippingfee;
        document.getElementById("totalPrice").innerHTML = "Total: RM " + total.toFixed(2);
        var getInput = total //store data
        localStorage.setItem("total", getInput)
    }
    
}

/////funtion for checkout.html/////////
var date =new Date();
var tdyDate = date.getDate()
var tdyMonth = date.getMonth()
var tdyYear = date.getFullYear()

var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var formatted = tdyDate + " " + monthName[tdyMonth] + " " + tdyYear
 

function loadCheckout() {
    document.getElementById("purchaseDate").innerHTML = "Purchasing Date: " + formatted;
    document.getElementById("name").innerHTML = "Name: " //+ localStorage.getItem("name");
    document.getElementById("temp1").innerHTML = "Total Price : RM" + localStorage.getItem("total");
    document.getElementById("temp2").innerHTML = "Delivery Type: " + localStorage.getItem("deliveryType");

    //load previous data if possible 
    document.getElementById("phoneBox").value = localStorage.getItem("phoneNumber")
    document.getElementById("addressBox").value = localStorage.getItem("address")
    document.getElementById("PostcodeBox").value = localStorage.getItem("postcode")
    document.getElementById("countryBox").value = localStorage.getItem("country")
}

function displaycheckoutprice(){
    document.getElementById("price1").innerHTML = total.toFixed(2);
    
}

function showTnc() {
    document.getElementById("tncOverlay").style.display = "block";
  }
  
  // Close the full screen search box
  function closeTnc() {
    document.getElementById("tncOverlay").style.display = "none";
  }

function checkoutSubmit() {
    if(document.getElementById(tnc).checked){
        return true;
    }
    else{
        alert("Please read the term and condition.");
        return false;
    }

}

function proceed() {
    if (document.getElementById("tnc").checked) {
        document.getElementById("submitDiv").style.display = "block";
        //window.location.href = "payment.html";
    }
    else {
        document.getElementById("tncSentence").style.textDecoration = "underline"
        document.getElementById("tncSentence").style.textDecorationStyle = "wavy"
        document.getElementById("tncSentence").style.textDecorationColor = "red"
        document.getElementById("tncSentence").style.textDecorationThickness = "0.5px"
    }
}


function saveForm() {
    var getInput = document.getElementById("phoneBox").value
    localStorage.setItem("phoneNumber", getInput)

    var getInput = document.getElementById("addressBox").value
    localStorage.setItem("address", getInput)

    var getInput = document.getElementById("PostcodeBox").value
    localStorage.setItem("postcode", getInput)

    var getInput = document.getElementById("countryBox").value
    localStorage.setItem("country", getInput)

}


//Payment.html
function loadPayment() {
    var ping = 0

    //document.getElementById("temp1").innerHTML = "Name : " + localStorage.getItem("name");
    document.getElementById("temp1").innerHTML = "Total Price : RM " + localStorage.getItem("total");
    ping = localStorage.getItem("purchase")
    document.getElementById("temp2").innerHTML = "Please select your payment method:"
    if (ping == 1) {
        showLoad()
        //document.getElementById("success").style.show
    }
}


function validate1() {
    var cardnumber = ""
    x = document.getElementById("cardNumber").value
    if (x.length == 16 || x.length == 19) {
        document.getElementById("cardNumber").style.backgroundColor = "white"
        
    
    } //0-3, 4-7, 8-11, 12-15
    else {
        document.getElementById("cardNumber").style.backgroundColor = "rgb(255, 191, 191)"
    }
    if(x.length == 16) {
        var cardArray = x.split("", 16)

        for (i=0;i<4;i++){
            cardnumber +=  cardArray[i]
        }
        cardnumber += " "
        for (i=4;i<8;i++){
            cardnumber +=  cardArray[i]
        }
        cardnumber += " "
        for (i=8;i<12;i++){
            cardnumber +=  cardArray[i]
        }
        cardnumber += " "
        for (i=12;i<16;i++){ 
            cardnumber +=  cardArray[i]
        }
        document.getElementById("cardNumber").value = cardnumber
    }  
}
function validate2() {
    var mmyynumber = ""
    x = document.getElementById("mmyy").value
    if (x.length == 4|| x.length == 5) {
        var mmyyArray = x.split("", 4)
        mmyynumber = mmyyArray[0] + mmyyArray[1] + "/" + mmyyArray[2] + mmyyArray[3]
        document.getElementById("mmyy").style.backgroundColor = "white"
        document.getElementById("mmyy").value = mmyynumber
    }
    else {
        document.getElementById("mmyy").style.backgroundColor = "rgb(255, 191, 191)"
    }
}
function validate3() {
    x = document.getElementById("ccv").value
    if (x.length >= 3) {
        document.getElementById("ccv").style.backgroundColor = "white"
    }
    else {
        document.getElementById("ccv").style.backgroundColor = "rgb(255, 191, 191)"
    }
}


//some transition on showing and hiding credit form
function showform() {
    
    document.getElementById("payForm").style.opacity = "100"
    document.getElementById("payForm").style.transition = "0.5s"
    
}
function showblock() { // show the block before form
    document.getElementById("cashForm").style.display = "none"
    
    document.getElementById("formBox").style.height = "200px"
    document.getElementById("formBox").style.transition = "0.5s"
    document.getElementById("payForm").style.display = "block"
    setTimeout(showform,500)
}
function hideform() { //show the opacity after the form is loaded
    document.getElementById("formBox").style.height = "0px"
    document.getElementById("formBox").style.transition = "0.5s"
    document.getElementById("payForm").style.opacity = "0"
    document.getElementById("payForm").style.transition = "0.3s"
    setTimeout(hideblock,500)
}
function hideblock() {// hide the unneccesary block
    document.getElementById("payForm").style.display = "none"
    document.getElementById("cashForm").style.display = "block"
    setTimeout(showCashForm,700)
}
function showCashForm() { 
    document.getElementById("cashForm").style.height = "50px"
    document.getElementById("cashForm").style.transition = "0.5s"
    document.getElementById("cashButton").style.opacity = "100"
    document.getElementById("cashButton").style.transition = "0.5s"
    document.getElementById("cashButton1").style.opacity = "100"
    document.getElementById("cashButton1").style.transition = "0.5s"
}
function hideCashForm() {
    document.getElementById("cashForm").style.height = "0px"
    document.getElementById("cashForm").style.transition = "0.5s"
    document.getElementById("cashButton").style.opacity = "0"
    document.getElementById("cashButton").style.transition = "0.5s"
    document.getElementById("cashButton1").style.opacity = "0"
    document.getElementById("cashButton1").style.transition = "0.5s"
    setTimeout(showblock,800)
}


function clearLocal() { //saving the infomation on credit/debit payment
    alert("Thank you for shopping with us!")
    var getInput = 1
    localStorage.setItem("purchase", getInput)
}
function cashConfirm() { //saving the information on pay on cash
    alert("Thank you for shopping with us!")
    var getInput = 1
    localStorage.setItem("purchase", getInput)
    window.location.href = "A_payment.html";
}


function showLoad() { //show loading screen
    document.getElementById("outerprocess").style.display = "inline"
    setTimeout(closeLoad,3000)
}
function closeLoad() { //show success payment screen
    document.getElementById("outerprocess").style.display = "none"
    document.getElementById("outersuccess").style.display = "inline"
    setTimeout(redirecting,3000)
}
function redirecting() { //redirecting after a purchase
    document.getElementById("body1").style.display = "none"
    document.getElementById("topNav").style.display = "none"
    document.getElementById("body2").style.display = "block"

    ping = 0
    localStorage.setItem("purchase", ping)
    localStorage.clear();

    setTimeout(toHome, 2000)
}
function toHome() {
    window.location.href = "../../A_homepage.html";
}


//all above code is written and solved manually alone without help from any people
//
