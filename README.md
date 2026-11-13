# SHREE GEOTECH — Official Website

> **Professional Geotechnical Engineering & Soil Testing Services**  
> Serving Dombivli, Kalyan, Thane, Navi Mumbai, Panvel, and the Mumbai Metropolitan Region (MMR).

---

## 🏗️ Overview

This is the production-grade, high-performance web platform built for **SHREE GEOTECH** using **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**.

### Key Features
- **Corporate Branding**: Incorporates official vector logo, brand emblem, and authentic Indian geotechnical commercial photography.
- **Brand Palette**:
  - Deep Navy: `#102C4E`
  - Engineering Orange: `#F47B20`
  - Pure White: `#FFFFFF`
  - Slate Grey: `#64748B`
  - Light Grey: `#F3F6F9`
- **Navigation & Pages**:
  - `Home` (`/`)
  - `Our Services` (`/services`)
  - `About Us` (`/about`)
  - `Contact Us` (`/contact`)
  - Legal: `Privacy Policy` (`/privacy-policy`) & `Terms & Conditions` (`/terms-and-conditions`)
- **Technical Services Covered**:
  1. Soil Bearing Capacity Test (Plate Load Testing / SBC as per IS 1888)
  2. Soil Boring Test (Rotary core borehole drilling as per IS 1892)
  3. Standard Penetration Test (SPT N-Value as per IS 2131)
  4. Chemical Analysis of Soil & Groundwater (pH, Sulfates, Chlorides as per IS 2720)
- **High-Conversion Integrations**:
  - **Floating WhatsApp Button**: Uses the original `apple.png` asset with subtle 2-second vibration animation and URL-encoded pre-filled enquiry message. Non-intrusive on mobile.
  - **Working Contact Form**: Features client-side validation, anti-spam honeypot, loading state, and JSON API backend (`/api/contact`).
  - **Interactive Google Maps**: Embedded map pinpointing the registered Dombivli East address.
  - **Testimonial Carousel**: 8 review slots supporting English, Hinglish, Marathi, and Hindi with auto-advance, swipe/touch support, pause on hover/focus, and client verification badges.
  - **Accessible Accordions**: Semantic, keyboard-navigable FAQ accordions with ARIA attributes across all 4 primary pages.
- **Advanced Technical & Local SEO**:
  - Dynamic `sitemap.xml` (`/sitemap.ts`)
  - Configured `robots.txt` (`/robots.ts`)
  - Valid `LocalBusiness`, `Organization`, and `Service` JSON-LD structured schema
  - Canonical URLs targeted to `https://shreegeotech.in/`
  - OpenGraph & Twitter Card metadata

---

## 📁 Project Structure

```
d:\Shree Geotech\
├── public\
│   ├── brand\
│   │   ├── shree-geotech-logo.png      # Main horizontal logo
│   │   ├── sg-emblem.png               # Brand emblem
│   │   └── apple.png                   # Official WhatsApp floating icon
│   └── images\
│       ├── hero-soil-investigation.jpg
│       ├── soil-bearing-capacity-test.jpg
│       ├── soil-boring-test.jpg
│       ├── standard-penetration-test.jpg
│       └── soil-chemical-analysis-lab.jpg
├── src\
│   ├── app\
│   │   ├── api\contact\route.ts        # Contact form submission API
│   │   ├── about\page.tsx              # About Us page
│   │   ├── contact\page.tsx            # Contact Us page
│   │   ├── services\page.tsx           # Our Services page
│   │   ├── privacy-policy\page.tsx     # Privacy Policy
│   │   ├── terms-and-conditions\page.tsx
│   │   ├── globals.css                 # Brand theme, animations, utilities
│   │   ├── layout.tsx                  # Root layout with Header, Footer, WhatsApp
│   │   ├── not-found.tsx               # Custom 404 page
│   │   ├── page.tsx                    # Home page
│   │   ├── robots.ts                   # robots.txt generator
│   │   └── sitemap.ts                  # sitemap.xml generator
│   ├── components\
│   │   ├── common\Accordion.tsx        # Accessible FAQ accordion
│   │   ├── contact\ContactForm.tsx     # Lead enquiry form
│   │   ├── contact\GoogleMap.tsx       # Embedded Google Maps
│   │   ├── home\                       # Homepage modular sections
│   │   ├── layout\                     # Header, Footer, WhatsAppButton
│   │   └── seo\JsonLd.tsx              # JSON-LD Schema markup
│   └── data\
│       └── siteConfig.ts               # Central business data, services, reviews, FAQs
└── package.json
```

---

## 🚀 Local Development

To run the project locally on your machine:

```bash
cd "d:\Shree Geotech"

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🛠️ Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

---

## 🌐 Deployment Instructions

### Option 1: Vercel Preview Deployment (Recommended for Client Approval)

1. **Initialize & Commit Git Repository**:
   ```bash
   cd "d:\Shree Geotech"
   git add .
   git commit -m "feat: complete Shree Geotech production website"
   ```

2. **Push to GitHub**:
   - Create a private repository on GitHub (e.g. `shree-geotech`).
   - Push your local branch:
     ```bash
     git remote add origin https://github.com/<your-username>/shree-geotech.git
     git branch -M main
     git push -u origin main
     ```

3. **Deploy on Vercel**:
   - Log in to [Vercel](https://vercel.com).
   - Click **Add New... > Project** and import the `shree-geotech` repository.
   - Leave build settings as default (Framework Preset: Next.js).
   - Click **Deploy**.
   - Share the generated preview URL (`https://shree-geotech.vercel.app`) with the client.

4. **Connect Custom Domain (`shreegeotech.in`)**:
   - Once approved, go to **Settings > Domains** in Vercel.
   - Add `shreegeotech.in` and `www.shreegeotech.in`.
   - Update DNS records at your domain registrar (A record to `76.76.21.21` or CNAME `cname.vercel-dns.com`).

---

### Option 2: Hostinger Deployment & Migration

Hostinger supports two deployment modes for Next.js applications:

#### A. Hostinger VPS / Cloud Hosting with Node.js (Full Dynamic Features)
If your Hostinger plan includes VPS or Cloud hosting:
1. Connect via SSH to your Hostinger server.
2. Ensure Node.js (v18+) and PM2 are installed.
3. Clone the Git repository:
   ```bash
   git clone https://github.com/<your-username>/shree-geotech.git
   cd shree-geotech
   npm install
   npm run build
   ```
4. Start the application using PM2 process manager:
   ```bash
   pm2 start npm --name "shree-geotech" -- start -- -p 3000
   pm2 save
   pm2 startup
   ```
5. Configure Nginx reverse proxy to forward traffic from port 80/443 to `http://localhost:3000`.

#### B. Hostinger Shared Web Hosting (Static HTML Export Mode)
If hosting on standard Hostinger Shared Web Hosting (cPanel / hPanel without a persistent Node.js daemon):
1. In `next.config.ts`, add static export configuration:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     images: { unoptimized: true }
   };

   export default nextConfig;
   ```
2. Build the static site:
   ```bash
   npm run build
   ```
   This generates an `out/` folder containing static HTML, CSS, JavaScript, and assets.
3. Upload the contents of the `out/` folder to Hostinger's `public_html/` via File Manager or FTP.
4. *Note on Contact Form*: If using static export, point the contact form in `ContactForm.tsx` to an external form service such as Formspree, Web3Forms, or Hostinger's PHP mailer script.

---

## 📞 Contact Information & Business Details

- **Company**: SHREE GEOTECH
- **Contact Number**: +91 92707 12338
- **WhatsApp**: +91 92707 12338
- **Registered Address**: 101 Bambam Bole Apartment, Near Hanuman Mandir, Sagaon, Dombivli East, Mumbai – 421204, Maharashtra, India.
- **Operating Hours**: Mon – Fri: 9:00 AM – 6:00 PM | Sat: 9:00 AM – 4:00 PM | Sun: Closed
- **Production Domain**: `https://shreegeotech.in/`
- **Credit**: Designed by [Noor Web](https://NoorWeb.in/)
