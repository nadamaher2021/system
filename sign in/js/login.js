let signin=document.getElementById('signin');
let loginEmail=document.getElementById('loginEmail');
let loginPassword=document.getElementById('loginPassword');
let loginAlert=document.getElementById('loginAlert');
let loginSuccesssAlert=document.getElementById('loginSuccesssAlert');
let users=[];
if(localStorage.getItem("users")!==null){
    users=JSON.parse(localStorage.getItem("users"))
}
signin.addEventListener("submit",function (e) {
    e.preventDefault();
    login()
});
function login(){
    let userInfo={
        email:loginEmail.value,
        password:loginPassword.value,
    }
    console.log(userInfo);
    if(loginvalid(userInfo)==true){
       
        loginSuccesssAlert.classList.replace("d-none","d-block");
        loginAlert.classList.replace("d-block","d-none");
        setTimeout(function(){
            window.location.href="../welcome/w.html";
        });
    }
    else{
     
        loginSuccesssAlert.classList.replace("d-block","d-none");
        loginAlert.classList.replace("d-none","d-block");

    }
}
function loginvalid(userInfo){
    for (let i = 0; i < users.length; i++) {
     if(users[i].email.toLowerCase()== userInfo.email.toLowerCase()&&users[i].password.toLowerCase()== userInfo.password.toLowerCase()){
        localStorage.setItem("userName",users[i].name)
       return true; 
     }
        
    }
}