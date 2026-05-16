# AshaJyothi · Website

The official site of **AshaJyothi Handicapped Welfare Society**, Hanuman Junction, Andhra Pradesh — a home for abandoned children with special needs, since 1998.

Live: <https://ashajyothiindia.org>

## Stack

Plain static HTML / CSS / JS — no build step, no framework.

## Files

| File | Purpose |
|---|---|
| `index.html`     | Home — mission-led hero, story snapshots, Instagram slideshow, ways to help, newsletter |
| `about.html`     | Founder letter, mission, 1998→2005→2016 timeline, conditions we work with |
| `programs.html`  | Adoption · Rehabilitation · PARI in depth + a day on campus |
| `donate.html`    | Interactive amount picker, specific-item ladder, transparency, bank details |
| `contact.html`   | Visit info, contact form, social blocks, partners, FAQ |
| `styles.css`     | Shared design system — Plus Jakarta Sans + warm saffron + espresso headings |
| `nav.js`         | Shared nav behaviour — diya beacon indicator + scroll-shrink |
| `logo-mark.png`  | Sun-rays + diya emblem · used in nav and IG avatar |
| `logo-full.png`  | Full lockup (emblem + "ASHA JYOTHI" wordmark) |

## Deploy

The site is currently hosted on Vercel. Pushes to `main` deploy automatically.

For a local preview, any static server works:

```bash
python3 -m http.server 8000
# or
npx serve .
```

## Credits

Photography from the AshaJyothi archive. Logo provided by AshaJyothi.
Redesign: 2025.
