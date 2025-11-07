// js/app.js
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

  if (heroImg && heroCap && slides.length > 0) {
    let idx = 0;

    function showSlide(i) {
      const item = slides[i];
      if (!item) return;

      // start fade out
      heroImg.style.opacity = '0';

      // preload next image so we do not flash
      const pre = new Image();
      pre.src = item.src;
      pre.onload = function () {
        heroImg.src = item.src;
        heroImg.alt = item.caption || 'CSC project photo';
        heroCap.textContent = item.caption || '';
        // fade back in
        requestAnimationFrame(() => {
          heroImg.style.opacity = '1';
        });
      };
    }

    // initialize
    heroImg.style.opacity = '1';
    showSlide(idx);

    setInterval(function () {
      idx = (idx + 1) % slides.length;
      showSlide(idx);
    }, 7000);
  }
});
