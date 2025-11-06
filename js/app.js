// js/app.js
// ==========================================
// CSC Website — hero slideshow + mobile menu
// ==========================================

// current slide index
let currentSlide = 0;

// show a particular slide
function showSlide(index){
  const img = document.getElementById('heroImage');
  const caption = document.getElementById('heroCaption');

  if (!window.heroSlides || window.heroSlides.length === 0 || !img) return;

  const slide = window.heroSlides[index];

  // simple fade
  img.classList.add('fade');
  setTimeout(() => {
    img.src = slide.src;
    img.alt = slide.caption;
    if (caption) caption.textContent = slide.caption;
    img.classList.remove('fade');
  }, 300);
}

function nextSlide(){
  if (!window.heroSlides || window.heroSlides.length === 0) return;
  currentSlide = (currentSlide + 1) % window.heroSlides.length;
  showSlide(currentSlide);
}

// run when page is ready
document.addEventListener('DOMContentLoaded', () => {
  if (window.heroSlides && window.heroSlides.length > 0){
    showSlide(currentSlide);
    if (window.heroSlides.length > 1){
      setInterval(nextSlide, 6000);
    }
  }

  // mobile nav toggle
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav){
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('show');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
