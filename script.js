// Scroll reveal
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Staggered reveal for card children
document.querySelectorAll('.cards-grid .card').forEach((card, i) => {
  card.classList.add('reveal', `reveal-delay-${Math.min(i + 1, 4)}`);
  observer.observe(card);
});
document.querySelectorAll('.rq-grid .rq-card').forEach((card, i) => {
  card.classList.add('reveal', `reveal-delay-${i + 1}`);
  observer.observe(card);
});

// Mobile nav toggle
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Navbar scroll state
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });
