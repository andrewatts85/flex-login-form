var loginForm = document.getElementById("loginForm");
var userEmail = document.getElementById("userEmail");
var pass = document.getElementById("pass");

loginForm.addEventListener('submit', function (event) {
  validator.isEmailAddress(userEmail.value) ? userEmail.className = "valid" : userEmail.className = "invalid";
  validator.isBetween(pass.value.length, 6, 8) ? pass.className = "valid" : pass.className = "invalid";
  // stop the event from its default action: submitting the form (for our validation, submission is not desired)
  event.preventDefault();
});
