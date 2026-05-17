'use strict';

/* ===== Progress Bar ===== */
const progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}

/* ===== Scroll-To-Top Button ===== */
const scrollTopBtn = document.getElementById('scroll-top');

function updateScrollTopBtn() {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
}

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== Active Nav Link Highlighting ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollMid = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollMid >= top && scrollMid < bottom) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${section.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}

/* ===== Mobile Nav Toggle ===== */
const navToggle = document.querySelector('.nav-toggle');
const navLinksList = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinksList.classList.toggle('open');
});

navLinksList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinksList.classList.remove('open'));
});

/* ===== Read-Time Estimator ===== */
const WORDS_PER_MINUTE = 220;

document.querySelectorAll('.card-read-time').forEach(el => {
  const words = parseInt(el.dataset.words, 10);
  if (!words) return;
  const minutes = Math.ceil(words / WORDS_PER_MINUTE);
  el.textContent = `${minutes} min read`;
});

/* ===== Scroll Event (batched via rAF) ===== */
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateProgressBar();
      updateScrollTopBtn();
      updateActiveNav();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

/* ===== Smooth Scroll for all anchor links ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72; // navbar height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ===== Init ===== */
updateProgressBar();
updateScrollTopBtn();
updateActiveNav();
