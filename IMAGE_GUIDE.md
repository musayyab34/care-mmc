# Image Replacement Guide — Compassionate Care Management, LLC

Every image, logo, and headshot the site uses, and exactly how to replace it.

**How replacement works:** every photo slot on the site tries to load the real file first (e.g. `hero-home.jpg`) and only shows the labeled placeholder while that file doesn't exist. So for items 3–13 below, **just save the real photo at the listed path with the listed filename — no HTML edits needed.** Every slot has a locked aspect ratio, so a correctly-proportioned photo can never break the layout. Items 1, 2, and 14 (logo, favicon, share image) each need the one small edit described.

General rules for all photos:

- Export JPGs at ~80% quality; run them through a compressor (e.g. squoosh.app) to stay under the size budgets.
- Supply images at exactly the listed pixel size (or the same aspect ratio at 2× for sharper high-DPI rendering).
- Warm, natural light suits the brand; avoid clinical blue-tinted stock looks.
- Any photo showing a patient requires their permission before publishing.

---

## Current status (client photos received 21 Jul 2026)

The client sent real photos, which are now live on the site (cropped to the exact slot sizes below from the originals in the `Feedback/` folder):

| Slot | Now showing | Source in `Feedback/` |
|---|---|---|
| Home hero | Home-care scene | `9. This reflects Home Care Management.jpeg` |
| About intro | Team group photo | `4. …profession group photo…` |
| Team headshots 1–3 | Lisa, FNP partner, Chinasa | `1. Headshot`, `2. Image`, `3. Chinasa…` |
| Gallery 1–4 | Team, chronic, palliative, home | images 4, 5, 6, 9 |

**Logo — placed and recolored.** The client supplied a transparent PNG (heart-in-hands mark). Because it's a tall vertical lockup, the *icon* was cropped out (`assets/images/logo-mark.png`) and paired with the site's text wordmark in the header — legible at nav size. Per the client's second-round feedback ("light green and beige, it seems to have gone gold"), the icon was recolored from teal + gold to **light green + beige**, which now matches the site's green/cream palette. (The client keeps the original full lockup separately, outside the repo.) See item 1.

**Still needed / decisions open:**

- **Business hours**, **favicon**, and **social share image** — still placeholders (items 2, 14, and the footer hours block).

Everything below is the full reference for swapping any image later.

---

## 1. Logo (header + footer wordmark)

| | |
|---|---|
| **What / where** | Company logo icon, top-left header of **every page** (now `assets/images/logo-mark.png`, paired with the text wordmark). The footer keeps a cream text wordmark. |
| **Current file** | `assets/images/logo-mark.png` (the icon, cropped from the client's full lockup; 211 × 200, transparent). The client keeps the full lockup separately, outside the repo. |
| **To replace the icon** | Overwrite `assets/images/logo-mark.png` with a new transparent PNG/SVG of the mark, ~1:1, ≤ 60 KB, legible at ~48 px. No HTML change needed. |
| **To use the full lockup instead** | In each of the 7 HTML files, replace the `<img class="brand-logo">` and the adjacent `<span class="brand-text">…</span>` inside `<a class="brand">` with a single `<img>` of the full lockup — but note the tall lockup reads small in a horizontal nav (that's why the icon-plus-wordmark treatment is used). |
| **Footer logo** | The footer sits on dark forest green, so a dark logo won't show. To add a logo there, supply a white/mono version and swap the footer `.brand-text`. |

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
