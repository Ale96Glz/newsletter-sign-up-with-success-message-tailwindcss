const form = document.getElementById("form");
const emailInput = form.querySelector('input[type="text"]');
const dismissBtn = document.getElementById("dismiss");
const mainCard = document.getElementById("main-card");
const hiddenCard = document.getElementById("hidden-card");
const errorMsg = document.getElementById("error");
const userEmail = document.getElementById("user-email");
form.addEventListener("submit", validateForm);
dismissBtn.addEventListener("click", clearForm);

function validateForm(event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  if (!isValidEmail(emailValue)) {
    emailInput.classList.add("input-error");
    errorMsg.classList.remove("hidden");
    return;
  }
  mainCard.classList.add("hidden");
  userEmail.textContent = emailValue;
  hiddenCard.classList.remove("hidden");
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function clearForm(event) {
  event.preventDefault();
  form.reset();
  emailInput.classList.remove("input-error");
  errorMsg.classList.add("hidden");
  hiddenCard.classList.add("hidden");
  mainCard.classList.remove("hidden");
}
