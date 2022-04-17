    
function save_username(){
    var getuname = document.getElementById("usrname").value
    localStorage.setItem("name", getuname)
    var getpassword = document.getElementById("psw").value
    localStorage.setItem("psw", getpassword)
}
