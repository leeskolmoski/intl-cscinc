// CSC GLOBAL JS
document.addEventListener('DOMContentLoaded', function () {
  // ----- MOBILE MENU -----
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('show');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('show');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ----- HERO ROTATOR -----
  // your config.js uses window.heroSlides
  const slides = Array.isArray(window.heroSlides) ? window.heroSlides : [];
  const heroImg = document.getElementById('heroImage');
  const heroCap = document.getElementById('heroCaption');

  if (heroImg && heroCap && slides.length > 0) {
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
