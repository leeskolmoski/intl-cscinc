/* ==========================================
   CSC Website — app.js
   Handles: Hero slideshow + mobile nav toggle
   ========================================== */

// ----------------------------
// HERO SLIDESHOW
// ----------------------------

// Array of slides loaded from config.js
let currentSlide = 0;
const slideDuration = window.heroSlideDuration || 6000; // fallback

function showSlide(index) {
  const img = document.getElementById('heroImage');
  const caption = document.getElementById('heroCaption');
  if (!window.heroSlides || window.heroSlides.length === 0 || !img) return;

  const slide = window.heroSlides[index];
  if (!slide) return;

  // Smooth fade transition
  img.classList.add('fade');
  setTimeout(() => {
    img.src = slide.src;
    caption.textContent = slide.caption || '';
    img.classList.remove('fade');
  }, 400);
}

function nextSlide() {
  if (!window.heroSlides || window.heroSlides.length === 0) return;
  currentSlide = (currentSlide + 1) % window.heroSlides.length;
  showSlide(currentSlide);
}

// Initialize slideshow
document.addEventListener('DOMContentLoaded', () => {
  if (window.heroSlides && window.heroSlides.length > 0) {
    showSlide(currentSlide);
    if (window.heroSlides.length > 1) {
      setInterval(nextSlide, slideDuration);
    }
  }
});

// ----------------------------
// MOBILE NAV TOGGLE
// ----------------------------
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
      const isOpen = nav.classList.contains('show');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
