const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
const menuLabel = menuButton.querySelector('.sr-only');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuLabel.textContent = open ? 'Cerrar menú' : 'Abrir menú';
});

menu.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuLabel.textContent = 'Abrir menú';
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();
