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

Items awaiting client content are rendered as clean, visibly-labeled placeholders (dashed border + "Client input needed" tag) and marked in the source with a `<!-- CLIENT-INPUT: ... -->` comment. Search the project for `CLIENT-INPUT` to find the remaining ones.

**Updated 21 Jul 2026** with the client's first feedback round — team bios + photos, the founder's story, and real care photos are now live. The `✅` rows below are done; the rest are still open.

| # | Item | Status | Where / how to finish |
|---|---|---|---|
| 1 | **Logo** | ✅ Done | Client's transparent logo icon is now in every header, paired with the text wordmark. Full lockup kept in `logo/`. Site keeps the green scheme for now per the client's note — see [IMAGE_GUIDE.md](IMAGE_GUIDE.md) "Current status" |
| 2 | **Business hours** | ❌ Open | Footer of every page + Contact page — replace the hours placeholder with confirmed hours |
| 3 | **Team members** | ✅ Done | `team.html` now shows Lisa Annamaria Fuentes, the FNP partner, and Chinasa Chudi-Attah with real bios + photos. **One gap:** the FNP partner's name is a "Name to confirm" placeholder (see #13) |
| 4 | **Gallery photos** | ✅ Done | `gallery.html` shows 4 real photos (team, chronic, palliative, home care) |
| 5 | **Hero image** | ✅ Done | `index.html` uses the client's home-care photo |
| 6 | **About intro image** | ✅ Done | `about.html` uses the team group photo |
| 7 | **Home Care wording** | ❌ Open | `services.html`, service 3 — our draft; client may reword |
| 8 | **Founder's story** | ✅ Done | Added as the "Our Story" section on `about.html` from the client's text |
| 9 | **Privacy Policy final copy** | ❌ Open | `privacy.html` — replace placeholder legal copy before launch, then remove the `noindex` meta tag |
| 10 | **OG share image** | ❌ Open | `<meta property="og:image">` on every page — IMAGE_GUIDE item 14 |
| 11 | **WhatsApp button** | ❔ Open question | Not built; the content doc says to confirm with the client first |
| 12 | **Favicon** | ❌ Open | `assets/favicon.svg` (placeholder leaf mark) — IMAGE_GUIDE item 2 |
| 13 | **Team member 2 name** | ⚠️ Confirm | `team.html` — coat appears to read "Rajai Rex, MSN/FNP"; shown as "Name to confirm" until the client verifies exact spelling |

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
├── assets/images/        live + placeholder images (see IMAGE_GUIDE.md)
├── logo/                 master logo lockup from the client
├── source-photos/        client's original full-res photos (git-ignored; kept for re-cropping)
├── .gitignore
├── README.md
└── IMAGE_GUIDE.md
```

> **Note:** site images in `assets/images/` were cropped to their exact slot sizes from the originals in `source-photos/`. That folder is git-ignored so the large originals don't deploy; keep it locally if you may need to re-crop.
