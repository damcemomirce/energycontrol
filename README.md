# ⚡ EnergyControl — Heavy Machinery Parts Website

Premium aftermarket parts for Caterpillar, Komatsu, Volvo, Hitachi, John Deere, SKF, and more.

**Live preview:** Open `index.html` in any browser — no build step required.

---

## 📁 Folder Structure

```
energycontrol/
├── index.html          ← Homepage (main file)
├── about.html          ← About Us (coming — see "Next Pages")
├── products.html       ← Full product catalog (coming)
├── brands.html         ← All supported brands (coming)
├── gallery.html        ← Photo gallery page (coming)
├── contact.html        ← Standalone contact page (coming)
├── css/
│   └── style.css       ← Custom styles (extends Tailwind)
├── js/
│   └── main.js         ← All interactivity + product data
├── img/                ← Drop your real photos here
└── README.md           ← This file
```

---

## 🚀 Quick Start

1. **Open the site** — double-click `index.html` or serve it locally:

   ```bash
   cd energycontrol
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

2. **No build tools needed.** Tailwind loads from CDN. Font Awesome and Google Fonts load from CDN.

3. **It's a single static site.** Upload the entire `energycontrol/` folder to any web host (Netlify, Vercel, shared hosting, S3, etc.).

---

## 📝 How to Customize

### 1. Replace Text Content

Open `index.html` and search for these strings — replace them with your real content:

| What | Where (search for) |
|------|-----|
| Company address | `Industrijska 42, 1000 Ljubljana` |
| Phone number | `+386 40 123 456` |
| Email | `sales@energycontrol.com` |
| WhatsApp | `38640123456` (in the wa.me link) |
| GPS coordinates | `46.0569° N, 14.5058° E` |
| Hero tagline text | `Parts That Keep The World Moving` |
| Stats numbers | `15,000+`, `3,200+`, `12` years, `24h` |
| Testimonials | Names and quotes in the testimonials section |
| Footer social links | `#` placeholders for Facebook, LinkedIn, etc. |

### 2. Replace Images

**Hero background:**
```html
<img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80" ...>
```
→ Replace the `src` with your own high-res image. For best results, use **1920×1080** or wider, dark machinery photos.

**Gallery preview images (4 thumbnails):**
Search `#gallery-preview` in the HTML — replace each `<img src="...">` with your own photos.

**Product images:**
Each product in `js/main.js` has an `image` property. Replace the Unsplash URLs with paths to your own images:
```js
image: 'img/engine-kit.jpg',
```

**Brand logos:**
Currently using styled text badges. To use real logos:
1. Drop logo PNG/SVG files into `img/brands/`
2. Replace the `<span>` text badges with `<img>` tags. Example:
   ```html
   <div class="brand-card ...">
     <img src="img/brands/caterpillar.png" alt="Caterpillar" class="h-10 mx-auto">
   </div>
   ```

### 3. Add / Edit Products

All products live in the `products` array in `js/main.js` (around line 12). Each product looks like this:

```js
{
  id: 13,                                          // Unique number
  name: 'CAT 336D Radiator Assembly',              // Product name
  oem: 'CAT 352-0211',                             // OEM / part number
  category: 'engine',                              // One of: engine, hydraulic, undercarriage, bearings, electrical, filters, buckets
  brands: ['caterpillar'],                         // Array: caterpillar, komatsu, volvo, hitachi, johndeere, skf
  image: 'img/radiator.jpg',                       // Image path
  description: 'Heavy-duty aluminum radiator...',  // Short description (1-2 sentences)
  price: 'Request Quote',                          // Keep as-is or set actual price
},
```

**Supported categories** (matches the filter dropdown):
`engine`, `hydraulic`, `undercarriage`, `bearings`, `electrical`, `filters`, `buckets`

**Supported brands** (for filtering):
`caterpillar`, `komatsu`, `volvo`, `hitachi`, `johndeere`, `skf`

Add new products by appending objects to the array. No other changes needed — filters and search work automatically.

### 4. Contact Form (Formspree Setup)

The contact form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month).

1. Go to https://formspree.io and create a free account
2. Create a new form → copy your form ID (looks like `xabcdeyz`)
3. In `index.html`, search for `REPLACE_WITH_YOUR_FORM_ID` and replace it with your real ID:
   ```html
   <form id="quote-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Test by submitting a quote request — it'll land in your email.

> 💡 Alternative: Replace the `action` URL with any form backend (Netlify Forms, Getform, custom PHP, etc.).

### 5. Change Colors

The color palette is defined in the Tailwind config at the top of `index.html`:

```js
colors: {
  ec: {
    yellow: '#FFCC00',   // Primary accent
    orange: '#F97316',   // Secondary accent
    dark:   '#0A0A0A',   // Page background
    card:   '#141414',   // Card backgrounds
    border: '#1F1F1F',   // Borders
    muted:  '#A0A0A0',   // Muted text
    light:  '#E5E5E5',   // Body text
  }
}
```

Change the hex values and the entire site updates. Keep contrast in mind — the dark theme needs bright accents.

### 6. SEO / Meta Tags

Update the `<meta name="description">` and `<title>` in the `<head>` of each page with your real company info.

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (<640px) | Single column, hamburger menu, stacked hero |
| Tablet (640–1024px) | 2-column product grid, inline nav |
| Desktop (>1024px) | Full layout, 4-column product grid |

---

## 🧩 Tech Stack

- **HTML5** — semantic, accessible markup
- **Tailwind CSS** (CDN) — utility-first styling
- **Vanilla JavaScript** — zero dependencies, no frameworks
- **Font Awesome 6** (CDN) — icons
- **Google Fonts** — Barlow Condensed (headings) + Inter (body)
- **Formspree** — contact form backend (or your own)

---

## 📋 Next Pages (Coming)

- `about.html` — Full company story, team, certifications
- `products.html` — Expanded catalog with detailed filtering
- `brands.html` — Per-brand detail pages with supported models
- `gallery.html` — Full photo gallery with masonry layout
- `contact.html` — Standalone contact page with map

---

## 🛠 Tips

- **Images:** Run your photos through [TinyPNG](https://tinypng.com) or `squoosh.app` before adding them. Keep images under 300KB for fast loading.
- **Favicon:** Drop a `favicon.ico` or `favicon.png` in the root folder and add `<link rel="icon" href="favicon.png">` inside `<head>`.
- **Google Maps:** Replace the map placeholder with an actual `<iframe>` embed from Google Maps.
- **Analytics:** Add your Google Analytics or Plausible snippet before `</head>`.
