// DROPDOWN BUTTON 

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const toggleBtn = dropdown.querySelector('.dropdown-button');

  const openMenu = () => dropdown.classList.add('active');
  const closeMenu = () => dropdown.classList.remove('active');
  const toggleMenu = (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  };

  toggleBtn.addEventListener('click', toggleMenu);

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) closeMenu();
  });
});