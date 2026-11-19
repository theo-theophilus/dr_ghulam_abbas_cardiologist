# Dr. Ghulam Abbas Sheikh — Cardiology & Angiography

A responsive, single-page website for a cardiologist, built with plain HTML, CSS and JavaScript. It is published with GitHub Pages.

**Live site:** https://theo-theophilus.github.io/dr_ghulam_abbas_cardiologist/

## What is included

- Patient-first homepage with hero, about, services, conditions, visit guidance, FAQ and appointment enquiry sections
- Responsive layout for desktop, tablet and mobile
- Accessible navigation (keyboard support, skip link, visible focus states, reduced-motion support)
- SEO metadata, Open Graph/Twitter previews, Physician and FAQ structured data
- `robots.txt`, `sitemap.xml`, SVG favicon and a branded 404 page
- Lightweight scroll-reveal animations and active-section navigation

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page content and structured data |
| `styles.css` | All site styles |
| `script.js` | Mobile menu, active navigation, reveal animations and form behaviour |
| `404.html` | Branded page-not-found page |
| `favicon.svg` | Browser icon |
| `robots.txt`, `sitemap.xml` | Search-engine files |

## Local preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Before launch: replace the placeholders

The site is intentionally honest about information that has not been supplied yet. Update these before promoting it publicly:

1. **Contact details** — replace the placeholder text in the footer (`index.html`, search for `footer-contact`) with the clinic phone number, address and appointment hours.
2. **Doctor photo** — replace the Unsplash portrait in the hero with a verified photo of Dr. Ghulam Abbas Sheikh, and update the `alt` text.
3. **Credentials** — add verified qualifications, registration details and hospital affiliations to the About section. Do not publish unverified credentials.
4. **Appointment form** — the form is currently a demo and does not send anything. Connect it to a booking service or form backend (for example Formspree, Netlify Forms, or the clinic's own system), then remove the demo note.
5. **Social preview image** — the Open Graph/Twitter image currently points to the illustrative Unsplash photo. Replace it with a real clinic or doctor image.
6. **Structured data** — once contact details are confirmed, add `telephone`, `address` and `openingHours` to the `Physician` schema in `index.html`.
7. **Legal and medical review** — have the clinic review all text, disclaimers and claims before launch. Information on the site is general and does not replace medical advice.

## Deployment

GitHub Pages is configured to publish from the `main` branch (root folder). Any push to `main` rebuilds the site automatically. Check the latest build at:

https://github.com/theo-theophilus/dr_ghulam_abbas_cardiologist/deployments

## Notes

- Fonts are loaded from Google Fonts; images are currently loaded from Unsplash.
- The site has no build step or dependencies. Edit the files and push.
