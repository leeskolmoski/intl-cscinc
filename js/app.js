// CSC GLOBAL JS
document.addEventListener('DOMContentLoaded', function () {
  // mobile menu
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('show');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // close on link click
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('show');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // hero rotator
  const heroImg = document.getElementById('heroImage');
  const heroCap = document.getElementById('heroCaption');
  const slides = Array.isArray(window.heroSlides) ? window.heroSlides : [];

  if (heroImg && heroCap && slides.length > 0) {
    // make sure we start from slide 0 in config.js
    heroImg.src = slides[0].src;
    heroCap.textContent = slides[0].caption || "";

    let idx = 0;
    setInterval(function () {
      idx = (idx + 1) % slides.length;
      const item = slides[idx];

      const img = new Image();
      img.src = item.src;

      img.onload = function () {
        heroImg.src = img.src;
        heroImg.alt = item.caption || "CSC project photo";
        heroCap.textContent = item.caption || "";
      };
    }, 7000);
  }
});
