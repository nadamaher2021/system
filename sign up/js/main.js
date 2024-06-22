let userName=document.getElementById('userName');
let userEmail=document.getElementById('userEmail');
let userPassword=document.getElementById('userPassword');
let nameAlert=document.getElementById('nameAlert');
let emailAlert=document.getElementById('emailAlert');
let passwordAlert=document.getElementById('passwordAlert');
let registration=document.getElementById('registration');
let existUser=document.getElementById('existUser');
let successUser=document.getElementById('successUser')
let users=[];
if(localStorage.getItem("users")!==null){
    users=JSON.parse(localStorage.getItem("users"))
}
registration.addEventListener("submit",function(e){
    e.preventDefault();
    if(checkIfAllInputsAreValid()){
       console.log("user ia added")
        ,addUser()
    }
})

function addUser(){
    let newUser={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value

    };
    if(isExist(newUser)==true){
        console.log("email is already existed!")
        existUser.classList.replace("d-none","d-block")
        successUser.classList.replace("d-block","d-none")
    }else{
        console.log(newUser)
        users.push(newUser)
        localStorage.setItem("users",JSON.stringify(users));
        existUser.classList.replace("d-block","d-none")
        successUser.classList.replace("d-none","d-block")
  
        setTimeout(function(){
        window.location.href="../sign in/login.html"
      
    
    },2000);
    console.log(users)}

}

function isExist(newUser){
for (let i = 0; i < users.length; i++) {
   
    if(users[i].email.toLowerCase()==newUser.email.toLowerCase())
        console.log("email is already existed!")

}
}
function validation(regex,element,msgOfAlert) {
    let pattern=regex;
if (pattern.test(element.value)==true) {

    msgOfAlert.classList.replace("d-block","d-none")
return true;
}else{
    msgOfAlert.classList.replace("d-none","d-block")
 return false;
}
}

function checkIfAllInputsAreValid() {
    if(
        validation(/^[a-zA-Z]+ [a-zA-Z]+$/,userName,nameAlert)&&
        validation(/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/,userEmail,emailAlert)
        &&
        validation( /^[a-zA-Z]+ [a-zA-Z]+$/,userPassword,passwordAlert)
    ){
      
        return true;
    }else{
       
        return false;
    }
}