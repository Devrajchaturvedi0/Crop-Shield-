// Get the form element and listen for submit event
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const name = document.querySelector('#name').value;
  const crop = document.querySelector('#crop').value;
  const location = document.querySelector('#location').value;
  const damage = document.querySelector('#damage').value;
  const description = document.querySelector('#description').value;

  // Validate form data
  if (!name || !crop || !location || !damage || !description) {
    alert('Please fill out all fields.');
    return;
  }

  // Send claim data to server (you'll need to implement this)
  sendClaimData(name, crop, location, damage, description);

  // Clear form inputs
  form.reset();

  // Show success message to user
  alert('Your claim has been submitted successfully!');
}

// Function to send claim data to server
function sendClaimData(name, crop, location, damage, description) {
  // Replace this with your own implementation to send data to server
  console.log(`Submitting claim for ${name} (${crop}) in ${location} with ${damage} damage: ${description}`);
}
