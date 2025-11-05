document.addEventListener('DOMContentLoaded', () => {
  // hero slides - only filenames we actually want
  const slides = [
    // 1) working Amarillo
    { src: "assets/images/projects/ama-cacique-NW-drone-concept-to-completion-4.jpg", caption: "Amarillo, Texas, USA" },
    // 2) Amarillo overview (repo shows ...day.JPG, not ...daylight.JPG)
    { src: "assets/images/projects/ama-cacique-overview-day.JPG", caption: "Amarillo, Texas, USA" },
    // 3) Albuquerque secured
    { src: "assets/images/projects/albuquerque-high-security-hero.jpg", caption: "Albuquerque, New Mexico, USA" },
    // 4) San Bernardino
    { src: "assets/images/projects/ng-1.JPG", caption: "San Bernardino, California, USA" },
    // 5) Ogden
    { src: "assets/images/projects/ogden-assisted.jpg", caption: "Ogden, Utah, USA" },
    // 6) Wells Fargo PS
    { src: "assets/images/projects/wells-fargo-ps-3a.png", caption: "San Bernardino, California, USA" },
    // 7) Albuquerque alt (if present)
    { src: "assets/images/projects/nm-2.JPG", caption: "Albuquerque, New Mexico, USA" },
    // 8) Stockton (if this one 404s, we fall back below)
    { src: "assets/images/projects/Stockton Distribution Temperature Controlled Warehouse-1.jpg", caption: "Stockton, California, USA" }
  ];

  const heroImg = document.getElementById('heroImage');
  const heroCap = document.getElementById('heroCaption');

  const safeFallback = "assets/images/main/placeholder.jpg";

  function loadSlide(idx) {
    const slide = slides[idx];
    // set first
    heroImg.src = slide.src;
    heroImg.alt = `Project photo, ${slide.caption}`;
    heroCap.textContent = slide.caption;

    // if this specific image can't be loaded (bad file name),
    // replace just this one with the placeholder
    heroImg.onerror = () => {
      heroImg.onerror = null;
      heroImg.src = safeFallback;
    };
  }

  // show first slide
  let i = 0;
  loadSlide(i);

  // slideshow loop
  setInterval(() => {
    i = (i + 1) % slides.length;
    heroImg.classList.add('fade');
    setTimeout(() => {
      loadSlide(i);
      heroImg.classList.remove('fade');
    }, 250);
  }, 6000);
});
