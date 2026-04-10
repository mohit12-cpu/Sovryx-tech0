// Nav scroll effect
const wrapper = document.getElementById('app-wrapper');
const navbar = document.getElementById('navbar');
if (wrapper && navbar) {
  wrapper.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', wrapper.scrollTop > 40);
  });
}

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// FAQ accordion (JS-driven toggle for pages that use .faq-btn pattern)
document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const icon = btn.querySelector('.faq-icon');
    const isOpen = !answer.classList.contains('hidden');
    // Close all
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
    document.querySelectorAll('.faq-icon').forEach(i => { i.style.transform = ''; });
    // Open this one if it was closed
    if (!isOpen) {
      answer.classList.remove('hidden');
      if (icon) icon.style.transform = 'rotate(180deg)';
    }
  });
});

// Lucide icons — must be last
lucide.createIcons();
