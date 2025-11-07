// js/app.js
// CSC global JS
document.addEventListener('DOMContentLoaded', function () {
  // mobile nav
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('show');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (lnk) {
      lnk.addEventListener('click', function () {
        nav.classList.remove('show');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // hero slideshow
  const heroImg = document.getElementById('heroImage');
  const heroCap = document.getElementById('heroCaption');
  const slides = Array.isArray(window.heroSlides) ? window.heroSlides : [];

  function showSlide(i) {
    const item = slides[i];
    if (!item) return;

    // light fade
    heroImg.classList.add('is-fading');

    setTimeout(function () {
      heroImg.src = item.src;
      heroImg.alt = item.caption || 'CSC project photo';
      if (heroCap) {
        heroCap.textContent = item.caption || '';
      }
      heroImg.classList.remove('is-fading');
    }, 280);
  }

  if (heroImg && heroCap && slides.length > 0) {
    let idx = 0;
    showSlide(idx);
    setInterval(function () {
      idx = (idx + 1) % slides.length;
      showSlide(idx);
    }, 7000);
  }
});
