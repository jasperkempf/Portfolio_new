// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dropdown toggle on mobile
const dropdowns = document.querySelectorAll('#navbar .dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent link click
      dropdown.classList.toggle('active');
    }
  });
});
