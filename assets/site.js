const header = document.querySelector('[data-header]');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

document.querySelector('[data-year]').textContent = new Date().getFullYear();
