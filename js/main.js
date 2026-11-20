// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

menu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  })
);

// Capabilities carousel arrows
const carousel = document.querySelector('.carousel');
document.querySelectorAll('.carousel-btn').forEach(btn =>
  btn.addEventListener('click', () => {
    const card = carousel.querySelector('.cap-card');
    const step = card.offsetWidth + 20;
    carousel.scrollBy({ left: step * Number(btn.dataset.dir), behavior: 'smooth' });
  })
);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (placeholder — wire up to a backend or form service)
const form = document.getElementById('contact-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please fill in all required fields.';
    return;
  }
  // TODO: send form data, e.g. fetch('/api/contact', { method: 'POST', body: new FormData(form) })
  status.textContent = "Thanks — we'll be in touch shortly.";
  form.reset();
});
