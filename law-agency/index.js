let btn = document.getElementById("close");
let submitBtn = document.getElementById("submit");
let firstName = document.querySelector("form input:first-child");
let lastName = document.querySelector("form input:nth-child(2)");
let email = document.querySelector("form input:nth-child(3)");
let phone = document.querySelector("form input:nth-child(4)");





btn.addEventListener("click",function() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
)


function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhone(phone){
  var re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  return re.test(phone)
}



submitBtn.addEventListener("click",()=>{
  let testEmail = validateEmail(email.value);
  let testPhone = validatePhone(phone.value);
  if(!testEmail){
    alert("Email adress is wrong!")
  }
  if(!testPhone){
    alert("Phone Number is wrong!")
  }
  if(firstName.value.length == 0 || lastName.value.length == 0 || email.value.length == 0  || phone.value.length == 0 || testEmail == 0 || testPhone==0){
    alert("Please fill all the fields!");
  }
  else{
    alert("Thank you for submitting form Dear " + firstName.value + " We will get back to you soon");
    window.location.href = "index.html";

  }
})


