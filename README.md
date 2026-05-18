# AshaJyothi · Website

The official site of **AshaJyothi Handicapped Welfare Society**, Hanuman Junction, Andhra Pradesh — a permanent home for abandoned children with severe disabilities, since 1998.

Live: <https://ashajyothiindia.org>

---

## About the Organisation

AshaJyothi was founded in 1998 by **Madhavi Latha Mareedu**, who turned her family's grief into a lifelong mission. Today the campus is home to **70+ children** with cerebral palsy, autism, Down syndrome, intellectual disability, and physical impairments — all of whom were abandoned or orphaned at a young age.

AshaJyothi is a registered voluntary organisation with **80G & 12A** tax-exempt status.

---

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — YouTube video hero, impact ticker, stats, story snapshots, chairman bio, ways to give, newsletter |
| `about.html` | Founder's letter, mission statement, 1998→2005→2016 timeline, conditions we work with |
| `chairman.html` | Full profile of Chairman Madhavi Latha Mareedu — tabbed work history, career timeline, awards, future vision |
| `programs.html` | Rehabilitation · PARI unit · inclusive education · a day on campus |
| `donate.html` | Interactive amount picker, specific-item giving ladder, bank details, transparency section |
| `contact.html` | Visit info, contact form, social links, partners, FAQ |
| `admin.html` | PWA admin panel — post campus news via Firebase Firestore + Cloudinary image upload |

## Shared Assets

| File | Purpose |
|---|---|
| `styles.css` | Shared design system — Plus Jakarta Sans + warm saffron accent + espresso headings |
| `nav.js` | Shared nav behaviour — diya beacon indicator + scroll-shrink |
| `logo-mark.png` | Sun-rays + diya emblem — used in nav and favicon |
| `logo-full.png` | Full lockup (emblem + "ASHA JYOTHI" wordmark) |
| `firebase-config.js` | Firebase project config for Firestore (campus news) |
| `admin-sw.js` | Service worker for admin PWA |
| `admin-manifest.json` | Web app manifest for admin PWA |

---

## Stack

Plain static HTML / CSS / JS — no build step, no framework.

- **Media hosting** — Cloudinary (`dshrpij9a`) for images and video
- **Hero video** — YouTube embed (autoplay, muted, loop)
- **Campus news** — Firebase Firestore + Cloudinary upload via admin panel
- **Fonts** — Plus Jakarta Sans + DM Mono (Google Fonts)
- **Deploy** — Vercel, auto-deploys on push to `main`

---

## Local Preview

Any static server works:

```bash
python3 -m http.server 8000
# or
npx serve .
```

---

## Key Design Decisions

- **No framework** — vanilla HTML/CSS keeps the site fast and easy to hand off
- **Reveal animations** — IntersectionObserver-based `.reveal` / `.in` pattern throughout
- **Nav dropdown** — CSS-only hover + `focus-within` dropdown for the About sub-pages
- **Admin panel** — separate PWA at `admin.html` so non-technical staff can post news without touching code

---

## Credits

Photography from the AshaJyothi archive and Cloudinary media library.
Logo provided by AshaJyothi. Redesign: 2025.
