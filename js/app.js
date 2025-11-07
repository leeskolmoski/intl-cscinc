// =====================================
// CSC GLOBAL JS
// =====================================
document.addEventListener('DOMContentLoaded', function () {
  // --------- MOBILE MENU TOGGLE ----------
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('show');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // close when clicking a link (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('show');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --------- OPTIONAL HERO ROTATION ----------
  // if config.js defined window.CSC_HEROES = [{src, caption}, ...]
  const heroImg = document.getElementById('heroImage');
  const heroCap = document.getElementById('heroCaption');
  const heroData = (window.CSC_HEROES && Array.isArray(window.CSC_HEROES)) ? window.CSC_HEROES : [];

  if (heroImg && heroCap && heroData.length > 0) {
    let idx = 0;
    const swapHero = function () {
      idx = (idx + 1) % heroData.length;
      const item = heroData[idx];
      heroImg.src = item.src;
      heroImg.alt = item.caption || 'CSC project photo';
      heroCap.textContent = item.caption || '';
    };
    // rotate every 7 seconds
    setInterval(swapHero, 7000);
  }
});
