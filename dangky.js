const email = document.getElementById("email")
const pw = document.getElementById("password")
const re_pw = document.getElementById("repassword")
const phone = document.getElementById("numberPhone")
const btn_SignUp = document.getElementById("btn-signup")

btn_SignUp.addEventListener('click', function(){
    if(email.value == ""){
        alert("Khong duoc de trong email")
    } else if(pw.value == ""){
        alert("Khong duoc de trong password")
    } else if(re_pw.value == ""){
        alert("Khong duoc de trong phan nhap lai password")
    } else if(phone.value == ""){
        alert("Khong duoc de trong sdt")
    }
})