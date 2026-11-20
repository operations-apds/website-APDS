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

// Contact form — submits to Netlify Forms (works once deployed on Netlify)
const form = document.getElementById('contact-form');
const status = form.querySelector('.form-status');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please fill in all required fields.';
    return;
  }
  submitBtn.disabled = true;
  status.textContent = 'Sending…';
  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    });
    if (!res.ok) throw new Error(res.status);
    status.textContent = "Thanks — we'll be in touch shortly.";
    form.reset();
  } catch (err) {
    status.textContent = 'Sorry, something went wrong. Please email us directly.';
  } finally {
    submitBtn.disabled = false;
  }
});