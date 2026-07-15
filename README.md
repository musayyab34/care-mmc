# Compassionate Care Management, LLC — Website

A 7-page, responsive, static marketing website for Compassionate Care Management, LLC (Brick, NJ), built to the client-approved content document. Plain HTML + CSS + vanilla JavaScript — no build step, no framework, hostable anywhere static files can be served.

**Primary goal of the site:** get visitors to call **732-200-2898**. Every phone number is a click-to-call `tel:` link.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Us |
| `services.html` | Services (all 7 services, in the approved order) |
| `team.html` | Our Team |
| `gallery.html` | Gallery |
| `contact.html` | Contact (details, privacy-safe form, map) |
| `privacy.html` | Privacy Policy (placeholder — footer-linked) |

## Running locally

No build step. Either:

- **Simplest:** double-click `index.html` — it opens and works in any browser.
- **Recommended:** serve the folder so paths behave exactly like production:
  ```
  npx serve .
  ```
  (or `python -m http.server 8000`), then open the printed URL.

## Deploying

Upload the whole folder to any static host. All three of these have free tiers:

- **Netlify:** drag-and-drop the folder at app.netlify.com, or connect the git repo. 
- **Vercel:** `npx vercel` in this folder, or connect the repo.
- **GitHub Pages:** push the repo, then Settings → Pages → deploy from branch.
- Classic shared hosting (cPanel etc.): upload the folder contents to `public_html`.

After deploying with the final domain, update the `og:image` meta tag on each page to the absolute URL (e.g. `https://yourdomain.com/assets/images/og-image.jpg`).

## Connecting the contact form

The form is wired for [Formspree](https://formspree.io) (free tier is fine):

1. Create a Formspree account **using the client's inbox** (`compassionatecaremgmnt@gmail.com`) so submissions go only to the client — this is a privacy requirement.
2. Create a new form; Formspree gives you an ID like `xabcdefg`.
3. In `contact.html`, find `action="https://formspree.io/f/YOUR_FORM_ID"` and replace `YOUR_FORM_ID` with the real ID.

Until connected, submitting the form shows a clear "not connected yet — please call" message instead of silently failing.

**Privacy rule (critical, healthcare):** the form collects **only** name, phone, email, and a general message. Do **not** add fields for medical, health, diagnosis, or insurance information, and do not route submissions anywhere other than the client's own inbox/form service. A visible note near the form asks visitors not to include health details.

## Client-input placeholders

Every item awaiting client content is rendered as a clean, visibly-labeled placeholder (dashed border + "Client input needed" tag) and marked in the source with a `<!-- CLIENT-INPUT: ... -->` comment. Search the project for `CLIENT-INPUT` to find them all.

| # | Item | Where | How to swap |
|---|---|---|---|
| 1 | **Logo** | Header + footer of every page (currently a text wordmark) | See [IMAGE_GUIDE.md](IMAGE_GUIDE.md) item 1 |
| 2 | **Business hours** | Footer of every page + Contact page details | Replace the `footer-placeholder` block / Contact hours placeholder with the confirmed hours |
| 3 | **Team members** | `team.html` — 3 repeatable placeholder cards | Fill in name, role, bio per card; duplicate/delete cards as needed; photos per IMAGE_GUIDE items 5–7. If the client prefers not to list individuals, replace the grid with a single "Our Approach" statement |
| 4 | **Gallery photos** | `gallery.html` — 6 labeled placeholder tiles | Drop real photos in per IMAGE_GUIDE items 8–13; add/remove tiles as needed |
| 5 | **Hero image** | `index.html` hero | IMAGE_GUIDE item 3 |
| 6 | **About intro image** | `about.html` intro | IMAGE_GUIDE item 4 |
| 7 | **Home Care wording** | `services.html`, service 3 | Description is our draft (service wasn't on the original card); client may reword |
| 8 | **Founder's note (optional)** | `about.html`, end of Values section | Replace the placeholder block with the note, or delete the block |
| 9 | **Privacy Policy final copy** | `privacy.html` | Replace the standard placeholder statement with client-approved legal copy before launch; then remove the `noindex` meta tag |
| 10 | **OG share image** | `<meta property="og:image">` on every page | IMAGE_GUIDE item 14 |
| 11 | **WhatsApp button (open question)** | Not built | The content doc says to confirm with the client first. If wanted, add a second button beside the header call button |
| 12 | **Favicon** | `assets/favicon.svg` (placeholder leaf mark) | IMAGE_GUIDE item 2 |

## Image replacement

See **[IMAGE_GUIDE.md](IMAGE_GUIDE.md)** — it lists every image the site uses with exact drop-in paths, pixel dimensions, formats, size budgets, and framing notes. Almost all photos are **drop-in**: save the file at the listed path with the listed name and it appears automatically, with zero HTML edits (placeholders only show while the real file is missing). Every frame has a locked aspect ratio, so correctly-sized photos cannot break the layout.

## Accessibility & compliance notes

- WCAG 2.1 AA: semantic landmarks, skip link, one `h1` per page, labeled form fields with inline errors, visible keyboard focus, alt text everywhere, `prefers-reduced-motion` respected, AA-checked color contrast (sage/brass are decorative-only on cream).
- Responsive, mobile-first; verified at 360 px, 768 px, and 1280 px.
- SEO: unique titles/descriptions, Open Graph tags, `LocalBusiness` structured data on the home page, favicon.
- No health data is collected anywhere on the site.

## Project structure

```
├── index.html · about.html · services.html · team.html
├── gallery.html · contact.html · privacy.html
├── css/styles.css        design tokens + all components
├── js/main.js            mobile nav, form, reveals, lightbox
├── assets/favicon.svg
├── assets/images/        placeholder images (replace per IMAGE_GUIDE.md)
├── README.md
└── IMAGE_GUIDE.md
```
