/* ============================================================
   CSC Website – app.js
   Handles: Hero slideshow + mobile nav toggle
   ============================================================ */

/* ---------------------------
   HERO SLIDESHOW
   --------------------------- */

// Array of slides loaded from config.js
// (config.js should define window.heroSlides = [{src:'...', caption:'...'}, ...])
let currentSlide = 0;

function showSlide(index) {
  const img = document.getElementById('heroImage');
  const caption = document.getElementById('heroCaption');

  if (!window.heroSlides || window.heroSlides.length === 0 || !img) return;

  const slide = window.heroSlides[index];

  // Smooth fade transition
  img.classList.add('fade');
  setTimeout(() => {
    img.src = slide.src;
    caption.textContent = slide.caption;
    img.classList.remove('fade');
  }, 400);
}

function nextSlide() {
  if (!window.heroSlides || window.heroSlides.length === 0) return;
  currentSlide = (currentSlide + 1) % window.heroSlides.length;
  showSlide(currentSlide);
}

// Auto-play every 6 seconds
document.addEventListener('DOMContentLoaded', () => {
  if (window.heroSlides && window.heroSlides.length > 1) {
    showSlide(currentSlide);
    setInterval(nextSlide, 6000);
  }
});


/* ---------------------------
   MOBILE NAV TOGGLE
   --------------------------- */

document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function(){
      const isOpen = nav.classList.toggle('show');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
