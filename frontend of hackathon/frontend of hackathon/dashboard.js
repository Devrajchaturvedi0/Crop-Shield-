// Get the hamburger menu and nav links
const hamburger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle the nav links when hamburger is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Close the nav links when a link is clicked
navLinks.addEventListener('click', () => {
  navLinks.classList.remove('nav-active');
});
