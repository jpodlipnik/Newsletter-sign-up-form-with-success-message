var emailInput = document.querySelector("#email-input");
var formSubmit = document.querySelector("#form-submit");
var mailFormat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail() {
  if (emailInput.value.match(mailFormat)) {
    document.querySelector("#initial-form").classList.add("hidden");
    document.querySelector("#sucess").classList.remove("hidden");
    var userEmailValue = emailInput.value;
    document.querySelector("#inputed-mail").innerHTML = userEmailValue;
  } else {
    document.querySelector("#warning").classList.remove("hidden");
    emailInput.classList.add("required");
  }
}

function dismissButton() {
  document.querySelector("#initial-form").classList.remove("hidden");
  document.querySelector("#sucess").classList.add("hidden");
}
