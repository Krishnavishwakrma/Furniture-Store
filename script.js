// Toggle the navbar links on mobile view
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
