# Image Replacement Guide — Compassionate Care Management, LLC

Every image, logo, and headshot the site uses, and exactly how to replace it.

**How replacement works:** every photo slot on the site tries to load the real file first (e.g. `hero-home.jpg`) and only shows the labeled placeholder while that file doesn't exist. So for items 3–13 below, **just save the real photo at the listed path with the listed filename — no HTML edits needed.** Every slot has a locked aspect ratio, so a correctly-proportioned photo can never break the layout. Items 1, 2, and 14 (logo, favicon, share image) each need the one small edit described.

General rules for all photos:

- Export JPGs at ~80% quality; run them through a compressor (e.g. squoosh.app) to stay under the size budgets.
- Supply images at exactly the listed pixel size (or the same aspect ratio at 2× for sharper high-DPI rendering).
- Warm, natural light suits the brand; avoid clinical blue-tinted stock looks.
- Any photo showing a patient requires their permission before publishing.

---

## 1. Logo (header + footer wordmark)

| | |
|---|---|
| **What / where** | Company logo, top-left header and footer of **every page** (currently a text wordmark with a small leaf mark) |
| **Drop-in path** | `assets/images/logo.svg` (preferred) or `logo.png` |
| **Dimensions** | SVG any size; PNG ≥ 640 × 160 px (2×), roughly **4:1 landscape** |
| **Format / max size** | SVG ≤ 50 KB, or transparent PNG ≤ 50 KB |
| **Framing notes** | Horizontal lockup on a transparent background; must stay legible at 40 px tall. Dark-green/full-color version (headers are cream). If a cream/white version exists, it can also replace the footer wordmark. |

**To swap:** in each of the 7 HTML files, find the `<!-- CLIENT-INPUT: logo -->` comment and replace the `<a class="brand">…</a>` element's contents with:

```html
<img src="assets/images/logo.svg" alt="Compassionate Care Management, LLC — home" width="320" height="80" style="height:3rem;width:auto;">
```

## 2. Favicon (browser-tab icon)

| | |
|---|---|
| **What / where** | Tab/bookmark icon, every page (currently a placeholder leaf mark) |
| **Drop-in path** | `assets/favicon.svg` — overwrite the existing file |
| **Dimensions** | 512 × 512 px, **1:1 square** |
| **Format / max size** | SVG ≤ 20 KB (or 512×512 PNG ≤ 20 KB — then update the `<link rel="icon">` tag on each page to point at `.png`) |
| **Framing notes** | A simple mark (the logo's leaf), not the full wordmark — must read at 16 × 16 px. Keep the forest-green/cream palette. |

## 3. Home hero image

| | |
|---|---|
| **What / where** | Large hero photo, right side of the **Home** page top banner |
| **Drop-in path** | `assets/images/hero-home.jpg` |
| **Dimensions** | 1600 × 1000 px, **16:10 landscape** |
| **Format / max size** | JPG ≤ 250 KB |
| **Framing notes** | Warm caregiver-with-patient moment or a calm care setting. Landscape, main subject centered-to-right, soft natural light. Edges get slightly cropped at some screen sizes (`object-fit: cover`), so keep faces and hands well inside the frame — no critical detail in the outer ~10%. |

## 4. About page intro image

| | |
|---|---|
| **What / where** | Photo beside the intro text at the top of **About Us** |
| **Drop-in path** | `assets/images/about-intro.jpg` |
| **Dimensions** | 1200 × 900 px, **4:3 landscape** |
| **Format / max size** | JPG ≤ 200 KB |
| **Framing notes** | The team together, or a welcoming care setting. Subject centered; keep the outer edges non-critical (slight crop possible). |

## 5–7. Team headshots (×3, one per team card)

| | |
|---|---|
| **What / where** | Team member photos on **Our Team** — one per card |
| **Drop-in paths** | `assets/images/team-1.jpg`, `team-2.jpg`, `team-3.jpg` (duplicate the card + add `team-4.jpg` etc. for more people) |
| **Dimensions** | 800 × 800 px, **1:1 square** each |
| **Format / max size** | JPG ≤ 120 KB each |
| **Framing notes** | Head-and-shoulders, face centered, eyes in the upper third, small headroom. Shoot everyone against the same or similar background with the same crop so the grid looks consistent. Warm, friendly expressions. |

## 8–13. Gallery photos (×6 tiles)

| | |
|---|---|
| **What / where** | Photo grid on **Gallery** — tiles are labeled by suggested category |
| **Drop-in paths** | `assets/images/gallery-1.jpg` … `gallery-6.jpg` |
| **Dimensions** | 1200 × 900 px, **4:3 landscape** each |
| **Format / max size** | JPG ≤ 200 KB each |
| **Framing notes** | Suggested categories per tile: 1 — the team; 2 — care in action (with the patient's permission); 3 — office/workspace or calm setting; 4 — community involvement or partner facilities; 5 — brand/logo graphic with taglines; 6 — any additional photo. Center the subject; each tile also opens enlarged in a lightbox, so use sharp, full-resolution files. Update each tile's caption text and `alt` attribute in `gallery.html` to describe the real photo. |

## 14. Social share image (Open Graph)

| | |
|---|---|
| **What / where** | The preview image shown when any page is shared on Facebook, WhatsApp, iMessage, LinkedIn, etc. (`og:image` meta tag on every page) |
| **Drop-in path** | `assets/images/og-image.jpg` |
| **Dimensions** | 1200 × 630 px, **1.91:1 landscape** |
| **Format / max size** | JPG ≤ 300 KB |
| **Framing notes** | Logo and/or a warm care photo on the cream background; keep any text large and centered (edges get cropped on some platforms). No placeholder ships for this — nothing shows until supplied, which is harmless. After launch, change the `og:image` value on each page to the **absolute** URL (e.g. `https://yourdomain.com/assets/images/og-image.jpg`) — relative paths don't work for social scrapers. |

---

## Checklist when all real images are in

- [ ] Placeholder SVGs (`assets/images/*.svg` except none remain referenced) can be deleted once every matching `.jpg` exists — optional; they're harmless to keep.
- [ ] All `alt` texts updated to describe the real photos (hero in `index.html`, about in `about.html`, team cards in `team.html`, gallery tiles in `gallery.html`).
- [ ] Gallery captions updated in `gallery.html`.
- [ ] Any photo showing a patient has documented permission.
- [ ] Total page weight stays reasonable (hero page under ~500 KB of images).
