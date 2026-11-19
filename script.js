const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#booking-form');
const status = document.querySelector('.form-status');

form?.addEventListener('submit', event => {
  event.preventDefault();
  const name = new FormData(form).get('name');
  status.textContent = `Thank you, ${name}. Your appointment request has been received.`;
  form.reset();
});
