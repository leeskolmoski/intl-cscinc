# Project Overview for LLMs

## Repository Layout
- Static marketing site located at repo root with top-level HTML entry points: `index.html`, `services.html`, `projects.html`, `about.html`, `contact.html`, and `404.html`.
- Shared assets live under `assets/` (docs, `images/main`, `images/projects`, `images/stock`, etc.).
- Global styling and scripts are under `css/` (notably `styles.css`) and `js/` (`config.js`, `app.js`).
- Project detail pages reside in `projects/`, including `amarillo-food-facility.html` and `project-template.html`.

## Styling System
- `css/styles.css` defines typography, color palette, layout utilities, and responsive behavior (breakpoints at 960px, 840px, 720px).
- Common utility classes: `.topbar`, `.main-nav`, `.container`, `.intro`, `.page-section`, `.card`, `.cards-grid`, `.primary-btn`.
- Some pages (e.g., `services.html`, project pages) include inline `<style>` blocks for custom responsive tweaks.

## JavaScript Behavior
- `js/config.js` exposes `window.heroSlides`, an array of hero image/caption pairs consumed by the homepage slideshow.
- `js/app.js` initializes:
  - Mobile navigation toggling (`#menuToggle`, `#mainNav`, `.show`, `aria-expanded`).
  - Homepage hero slideshow that preloads slides, fades image/caption, and rotates every 7 seconds.
- Project detail pages contain inline scripts that lazy-load Google Maps when the "Show embedded map" button is clicked.

## Page-Specific Notes
- **Homepage (`index.html`)**: Hero slideshow (`#heroImage`, `#heroCaption`), intro block, six service cards, CTA button.
- **Services (`services.html`)**: Alternating text/image rows using `.card` styling; inline flexbox styles with mobile stacking below 768px.
- **Projects (`projects.html`)**: Grid of `.thumb-card` links to individual project pages (many placeholders).
- **About (`about.html`)**: Narrative cards highlighting company history, process, safety, partnerships.
- **Contact (`contact.html`)**: Primary contact card with email CTA plus support cards detailing scope and next steps.
- **404 (`404.html`)**: Reuses global layout to direct visitors back to the homepage.
- **Project detail template (`projects/amarillo-food-facility.html`, `projects/project-template.html`)**: Structure for case studies with hero, overview, gallery, fact list, and lazy-loaded map. Update image paths to `../assets/images/...` when cloning the template.

## Known Gaps / Tips
- Most project thumbnails reference missing detail pages—create matching HTML files to avoid dead links.
- `projects/project-template.html` currently points to `../assets/img/...`; adjust paths before publishing.
- Consider expanding `README.md` with setup/deployment info; it currently only contains the repo name.

Use this summary to orient new LLM agents quickly so they can focus on targeted fixes without re-deriving repository structure.
