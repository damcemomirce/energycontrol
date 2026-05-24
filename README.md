# Earth Mining and Construction Equipment

Premium OEM & aftermarket spare parts for heavy mining and construction machinery.

**Live site:** Bilingual EN | МК — dark industrial theme with cinematic mining photography.

---

## Quick Local Preview

No build tools, no dependencies — pure HTML/CSS/JS.

```bash
git clone git@github.com:damcemomirce/energycontrol.git
cd energycontrol
python3 -m http.server 8080
# Open http://localhost:8080
```

---

## Ubuntu VPS Deployment (Step by Step)

Assumes a fresh **Ubuntu 22.04 or 24.04** VPS. Run all commands as root or with `sudo`.

### 1. Update the system

```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Install nginx

```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

Verify: visit `http://YOUR_VPS_IP` — you should see the nginx welcome page.

### 3. Configure firewall (if using ufw)

```bash
sudo ufw allow 22/tcp        # SSH
sudo ufw allow 80/tcp        # HTTP
sudo ufw allow 443/tcp       # HTTPS (for later)
sudo ufw enable
```

### 4. Install git and clone the repo

```bash
sudo apt install git -y
cd /var/www
sudo git clone https://github.com/damcemomirce/energycontrol.git
```

If the repo is private, generate an SSH key and add it to GitHub first:

```bash
ssh-keygen -t ed25519 -C "server@yourdomain.com" -f ~/.ssh/github
cat ~/.ssh/github.pub   # Add this to GitHub → Settings → Deploy Keys
```

Then clone via SSH:

```bash
sudo GIT_SSH_COMMAND="ssh -i ~/.ssh/github" git clone git@github.com:damcemomirce/energycontrol.git /var/www/energycontrol
```

### 5. Set permissions

```bash
sudo chown -R www-data:www-data /var/www/energycontrol
sudo chmod -R 755 /var/www/energycontrol
```

### 6. Configure nginx

Create a site config:

```bash
sudo nano /etc/nginx/sites-available/energycontrol
```

Paste this (replace `yourdomain.com` with your actual domain or VPS IP):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/energycontrol;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Cache static assets for 30 days
    location ~* \.(jpg|jpeg|png|gif|svg|css|js|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/html text/css application/javascript image/svg+xml;
    gzip_min_length 256;
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/energycontrol /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default   # Remove default site
sudo nginx -t                               # Test config
sudo systemctl reload nginx
```

### 7. (Optional) Set up HTTPS with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts. Certbot auto-renews certificates.

### 8. Verify

Visit `http://yourdomain.com` (or `http://YOUR_VPS_IP`). You should see the full bilingual website.

---

## Updating the Site Later

```bash
cd /var/www/energycontrol
sudo git pull origin main
sudo chown -R www-data:www-data .
```

No restart needed — it's static HTML.

---

## File Structure

```
energycontrol/
├── index.html              ← Main bilingual homepage (EN | МК)
├── gallery.html            ← Photo gallery page
├── logos.html              ← Logo concept page
├── README.md               ← This file
├── .gitignore
├── css/
│   └── style.css           ← Additional styles
├── js/
│   └── main.js             ← JavaScript (gallery, interactions)
└── img/
    ├── logo/               ← SVG logos (EN + MK versions)
    │   ├── logo-main-horizontal.svg
    │   ├── logo-mk.svg
    │   ├── logo-icon-square.svg
    │   └── logo-white-version.svg
    ├── mining/             ← Background photos (optimized JPEG)
    │   ├── cat-wheel-loader-hero.jpg
    │   ├── cat-mining-demo.jpg
    │   ├── mining-excavator-belaz.jpg
    │   ├── open-pit-mine.jpg
    │   ├── gold-mine.jpg
    │   └── bauma-excavator.jpg
    └── gallery/            ← Product gallery photos
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| HTML | Semantic HTML5 |
| CSS | Custom CSS (no framework — embedded in index.html) |
| JS | Vanilla JavaScript (no frameworks) |
| Fonts | Google Fonts — Barlow Condensed + Inter |
| Icons | Font Awesome 6 (CDN) |
| Server | Nginx (any static file server works) |
| Languages | English + Macedonian (JS-based i18n) |

---

## Features

- 🌐 **Bilingual** — English / Macedonian with persistent language switcher
- 🎬 **Cinematic backgrounds** — 4 sections with premium mining photography
- 🌙 **Dark industrial theme** — Caterpillar yellow (#FFB800) accents
- ⚡ **Zero dependencies** — pure HTML/CSS/JS, no npm/build step
- 📱 **Fully responsive** — mobile, tablet, desktop
- ✨ **Animated dust particles** on hero section
- 🫧 **Frosted glass** card effects (backdrop-filter)
- 🔍 **SEO-friendly** — semantic markup, meta tags
- 🚀 **Fast** — static files, gzip-ready, cacheable assets

---

## Customization

### Change contact info
Edit `index.html` and search for:
- `+389 71 229 026` — phone number
- `sales@energycontrol.com.mk` — email
- `Kairska 6, 1000 Skopje, Macedonia` — address

### Change background photos
Replace files in `img/mining/` with your own 16:9 JPEG images (2560×1440px recommended).

### Add/update translations
Edit the `i18n` object in the `<script>` tag at the bottom of `index.html`. The `mk` object contains all Macedonian translations.

### Change brand colors
Search `#FFB800` and `#E69500` in `index.html` — these are the primary yellow and darker yellow. The background is `#080808`.

---

## License

Private — Earth Mining and Construction Equipment. All rights reserved.
