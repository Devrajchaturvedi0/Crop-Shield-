// get form elements
const form = document.querySelector("#payment-form");
const cardNumber = document.querySelector("#card-number");
const cardExpiry = document.querySelector("#card-expiry");
const cardCvc = document.querySelector("#card-cvc");
const amount = document.querySelector("#amount");
const nameOnCard = document.querySelector("#name-on-card");
const submitBtn = document.querySelector("#submit-btn");

// create a Stripe instance with your publishable API key
const stripe = Stripe("pk_test_12345");

// add event listener to form submit
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // disable submit button to prevent multiple submissions
  submitBtn.disabled = true;

  // create token with Stripe and validate form fields
  const { error, token } = await stripe.createToken("card", {
    number: cardNumber.value,
    exp_month: cardExpiry.value.split("/")[0],
    exp_year: cardExpiry.value.split("/")[1],
    cvc: cardCvc.value,
    name: nameOnCard.value,
  });

  // re-enable submit button
  submitBtn.disabled = false;

  // if error, display error message
  if (error) {
    const errorElement = document.querySelector("#card-errors");
    errorElement.textContent = error.message;
    return;
  }

  // send token and amount to server for processing
  const response = await fetch("/charge", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token.id,
      amount: amount.value,
    }),
  });

  // if server responds with success message, show success message
  if (response.ok) {
    const successElement = document.querySelector("#success-message");
    successElement.style.display = "block";
    form.reset();
  }
});
