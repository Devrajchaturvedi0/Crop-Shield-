// Get the policy cards
const policyCards = document.querySelectorAll('.policy-card');

// Loop through each card and add a click event listener
policyCards.forEach(card => {
  card.addEventListener('click', () => {
    // Toggle the active class to highlight the selected card
    policyCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});
