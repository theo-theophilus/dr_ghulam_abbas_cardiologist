document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
  nav?.classList.remove('is-open');
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav?.classList.toggle('is-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
    closeMenu();
    menuButton?.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!nav?.classList.contains('is-open')) return;
  if (nav.contains(event.target) || menuButton?.contains(event.target)) return;
  closeMenu();
});

// Highlight the navigation link for the section currently in view.
const navLinks = new Map();
document.querySelectorAll('.primary-nav a[href^="#"]').forEach((link) => {
  navLinks.set(link.getAttribute('href').slice(1), link);
});
const pageSections = [...document.querySelectorAll('main section[id], footer[id]')];

function updateActiveNav() {
  if (!pageSections.length) return;

  const marker = window.scrollY + 150;
  let current = null;

  pageSections.forEach((section) => {
    const top = section.getBoundingClientRect().top + window.scrollY;
    if (top <= marker) current = section.id;
  });

  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24) {
    current = 'contact';
  }

  navLinks.forEach((link, id) => {
    const isActive = id === current;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

let scrollTicking = false;
function handleScroll() {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    updateActiveNav();
    scrollTicking = false;
  });
}

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('resize', handleScroll);
updateActiveNav();

// Gently reveal content as it enters the viewport.
const revealElements = document.querySelectorAll(
  '.intro-content, .care-heading, .care-card, .conditions, .visit-image, .visit-copy, .quote-inner, .faq-intro, .faq-list, .appointment-copy, .form-panel'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });

  document.querySelectorAll('.care-card').forEach((card, index) => {
    if (index < 3) card.classList.add(`reveal-delay-${index + 1}`);
  });
}

const form = document.querySelector('#enquiry-form');
const status = document.querySelector('.form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (status) {
    status.textContent =
      'This demo does not send your enquiry. Please contact the clinic directly once verified contact details are added.';
  }
});

form?.addEventListener('input', () => {
  if (status) status.textContent = '';
});

const year = document.querySelector('#current-year');
if (year) year.textContent = new Date().getFullYear();
