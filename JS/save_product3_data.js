
if(localStorage.p3q==0){
    localStorage.p3q = 1;
}
localStorage.p3q=1;
document.getElementById("quantity_number").innerHTML = localStorage.p3q;
function P1() {
  if (localStorage.p3q) {
    localStorage.p3q = Number(localStorage.p3q)+1;
  } 
  else {
    localStorage.p3q = 1;
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p3q;
}
function M1() {
  if (localStorage.p3q) {
    localStorage.p3q = Number(localStorage.p3q)-1;
  } 
  else {
    localStorage.p3q = 1;
  }
  if(localStorage.p3q==0){
    alert("Cannot Less Than 1");
    localStorage.p3q = 1;
  }
  document.getElementById("quantity_number").innerHTML = localStorage.p3q;
}

localStorage.p3size=" ";
function select_M(){
  document.getElementById("size_btnm").style.backgroundColor = "black";
  document.getElementById("size_btnm").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  localStorage.p3size = "M";
}
function select_L(){
  document.getElementById("size_btnl").style.backgroundColor = "black";
  document.getElementById("size_btnl").style.color = "white";
  document.getElementById("size_btnxl").style.backgroundColor = "white";
  document.getElementById("size_btnxl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p3size="L";
}
function select_XL(){
  document.getElementById("size_btnxl").style.backgroundColor = "black";
  document.getElementById("size_btnxl").style.color = "white";
  document.getElementById("size_btnl").style.backgroundColor = "white";
  document.getElementById("size_btnl").style.color = "black";
  document.getElementById("size_btnm").style.backgroundColor = "white";
  document.getElementById("size_btnm").style.color = "black";
  localStorage.p3size="XL";
}

function clicksubmit(){
    if(localStorage.p3size==" "){
      alert("Please select a size");
    }
    else{
     alert("Add Successful");
     localStorage.setItem("q3", localStorage.p3q);
     localStorage.setItem("s3", localStorage.p3size);
    }
}