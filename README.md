# AshaJyothi · Modernized Web Application

The modernized official web application of **AshaJyothi Handicapped Welfare Society**, Hanuman Junction, Andhra Pradesh — a permanent home for abandoned children with severe disabilities, since 1998.

Live URL: <https://ashajyothiindia.org>

---

## 🌟 What's New (Migration to Next.js)

The website has been completely modernized from static HTML/CSS to **Next.js (App Router)** and **React 19** while preserving the custom-designed **Option 1: Story-First Cinematic** visual layout.

### Highlights
- **Immersive Narrative UI**: Deep warm backgrounds, saffron accents (`#d97524`), glassmorphic layouts, and parallax elements.
- **Unified Style & Typography**: Inter/Plus Jakarta Sans Google Fonts, vanilla CSS, and high-contrast styling.
- **Firebase & Cloudinary News Feed**: Live subscription to Firestore `'news'` collection rendering a swipeable photo/video stream on the Home page.
- **Modernized Admin Dashboard (`/admin`)**: PWA-enabled page featuring Google login authentication, dynamic file drag-and-drop, direct Cloudinary unsigned upload handling (via XMLHttpRequests for real-time progress bar trackers), and Firestore collection uploads.
- **Interactive State Mechanics**: Stateful donation estimation, contact topic filters, geolocation map, and FAQ drawers.

---

## 📂 Project Architecture

```
ashajyothi-website/
├── public/                 # Static assets, logos, and PWA manifest/workers
│   ├── logo-full.png
│   ├── logo-mark.png
│   ├── admin-manifest.json # Admin PWA Manifest
│   └── admin-sw.js         # PWA Service Worker caching /admin
├── src/
│   ├── app/                # Next.js App Router folders
│   │   ├── about/          # About Organization Page
│   │   ├── admin/          # Admin Dashboard Portal
│   │   ├── chairman/       # Chairman Profile Page
│   │   ├── contact/        # Contact Form & FAQs Page
│   │   ├── donate/         # Sponsor Monthly / One-Time Page
│   │   ├── programs/       # Campus Programs & Timetable Page
│   │   ├── globals.css     # Production CSS system (includes scoped .admin-page rules)
│   │   ├── layout.js       # App Root Layout with SEO metadata, Navbar & Footer
│   │   └── page.js         # Homepage with video loop, stats & news feed
│   ├── components/         # Reusable react components
│   │   ├── Navbar.js       # Client navigation bar (hidden on /admin)
│   │   ├── Footer.js       # Client footer bar (hidden on /admin)
│   │   ├── NewsFeed.js     # Live Firestore news stream carousel
│   │   └── RevealListener.js # IntersectionObserver scroll-fade animator
│   └── lib/
│       └── firebase.js     # Unified Firebase client SDK & Cloudinary config exports
├── package.json            # Scripts & dependencies (Next.js, React, Firebase)
└── next.config.js          # Next.js bundler config with image hosts allowed
```

---

## 🛠️ Stack & Configurations

- **Core**: Next.js 15.1.0 (App Router), React 19.0.0, and Firebase 10.14.1 client SDKs.
- **Media Uploads**: Direct POSTs to `https://api.cloudinary.com/v1_1/dshrpij9a/` via preset `aj_news_unsigned`.
- **Database**: Firestore under collection `'news'`.
- **Serverless Deployments**: Deploys automatically on push to Vercel.

---

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Verify Production Build**:
   ```bash
   npm run build
   ```

4. **Start Production Mode**:
   ```bash
   npm run start
   ```

---

## 🎨 Design System & Animation
- **Scroll Reveals**: Elements with class `.reveal` automatically slide up and fade in once they cross the viewport. This is controlled dynamically by the global `RevealListener` component.
- **Diya Beacon**: The active menu highlight indicator in the navbar smoothly tracks and aligns with the hover/click state.
