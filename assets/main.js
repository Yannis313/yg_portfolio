// DROPDOWN BUTTON 

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownBtn = document.querySelector('.dropdown-button-desktop');

  const openMenu = () => dropdown.classList.add('active');
  const closeMenu = () => dropdown.classList.remove('active');
  const toggleMenu = (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  };

  dropdownBtn.addEventListener('click', toggleMenu);

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) closeMenu();
  });

  const toggleButton = document.getElementById("toggle-navbar");
  const navMobile = document.getElementById("liens-navbar-mobile");

  toggleButton.addEventListener("click", () => {
    navMobile.classList.toggle("active");
});
});