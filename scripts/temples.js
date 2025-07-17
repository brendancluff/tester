// Show current year
document.getElementById("year").textContent = new Date().getFullYear();

// Show last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuButton.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});
