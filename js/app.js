document.addEventListener('DOMContentLoaded', () => {
  // final hero slides (your list)
  const slides = [
    { src: "assets/images/projects/ama-cacique-NW-drone-concept-to-completion-4.jpg", caption: "Amarillo, Texas, USA" },
    { src: "assets/images/projects/albuquerque-high-security-hero.jpg", caption: "Albuquerque, New Mexico, USA" },
    { src: "assets/images/projects/ng-1.JPG", caption: "San Bernardino, California, USA" },
    { src: "assets/images/projects/ama-cacique-overview-daylight.JPG", caption: "Amarillo, Texas, USA" },
    { src: "assets/images/projects/nm-2.JPG", caption: "Albuquerque, New Mexico, USA" },
    { src: "assets/images/projects/ogden-assisted.jpg", caption: "Ogden, Utah, USA" },
    { src: "assets/images/projects/wells-fargo-ps-3a.png", caption: "San Bernardino, California, USA" },
    { src: "assets/images/projects/Stockton Distribution Temperature Controlled Warehouse-1.jpg", caption: "Stockton, California, USA" }
  ];

  const heroImg = document.getElementById('heroImage');
  const heroCap = document.getElementById('heroCaption');

  let i = 0;

  // immediately show the real first slide so we replace the placeholder
  function setSlide(idx) {
    const slide = slides[idx];
    heroImg.src = slide.src;
    heroImg.alt = `Project photo, ${slide.caption}`;
    heroCap.textContent = slide.caption;
  }
  setSlide(0);

  function showSlide(idx){
    const slide = slides[idx];
    heroImg.classList.add('fade');
    setTimeout(() => {
      heroImg.src = slide.src;
      heroImg.alt = `Project photo, ${slide.caption}`;
      heroCap.textContent = slide.caption;
      heroImg.classList.remove('fade');
    }, 250);
  }

  setInterval(() => {
    i = (i + 1) % slides.length;
    showSlide(i);
  }, 6000);
});
