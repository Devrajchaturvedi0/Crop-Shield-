const signUpForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

signUpForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  if (!password) {
    alert("Please enter a password.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // TODO: Submit form to server for processing
});
