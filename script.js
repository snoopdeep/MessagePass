var userIPmessage=document.getElementById("inputBox");
document.querySelector(".submit-btn").addEventListener("click",fun1);
function fun1(){
    document.querySelector("#output-message").innerHTML=userIPmessage.value;
    // .value is important oherwise it will not show 
    // and after this make message in input field empty
    userIPmessage.value="";
}
