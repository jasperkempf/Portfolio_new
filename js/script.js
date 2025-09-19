const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active'); // animate X
});

// Dropdown toggle on mobile
const dropdowns = document.querySelectorAll('#navbar .dropdown');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle('active');
    }
  });
});
