window.onload = function(){ 
console.log("Hello from JavaScript!");
let signin = document.getElementById("sign-in");
};
let form =document.getElementById("sign-in");
let first_pass = form.pass1;
let confirm_pass = form.confirm_pass;
first_pass.onchange = checkPassword;
confirm_pass.onchange = checkPassword;
function checkPassword(){
    let form = document.getElementById("sign-in");
    let first_pass = form.pass1;
    let confirm_pass = form.confirm_pass;
    let errors = '';
      if(first_pass.value === confirm_pass.value){
      first_pass.setCustomValidity('');
      } else{
        errors += "Passwords Must Match";
      }
      if(first_pass.value.length < 8)
      errors += "Too short";
      if(first_pass.value.match(/[^a-zA-Z0-9]/))
      errors += "Only alphanumeric chars allowed";
      if(!first_pass.value.match(/[a-z]/))
      errors += "Lower case letter required";
      if(!first_pass.value.match(/[A-Z]/))
      errors += "Upper case letter required";
      if(!first_pass.value.match(/[0-9]/)){
      errors += "Number required";
      }
      first_pass.setCustomValidity( errors);
      first_pass.reportValidity();
  }
  function checkEmail(){
    let email =document.getElementById("email");
    if(email.checkValidity()){
        return true;
    }else{
        alert("use a valid email")
    }
  }
  function checkDate() {
    let appointment = document.getElementById("appointment-date");
    let selectdate = new Date(appointment.value);
let day = new Date();
day.setHours(0,0,0,0);
if (selectdate < day)  {
    alert("please select a future date");
return false;
}else{
    return true;
}
}