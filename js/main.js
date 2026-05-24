/* ═══════════════════════════════════════════
   Earth Mining Construction — Main JavaScript
   Mobile menu, search, filters, lightbox, animations
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────── PRODUCT DATA ────────── */
  const products = [
    {
      id: 1,
      name: 'Caterpillar C15 Engine Overhaul Kit',
      oem: 'CAT 10R-9001',
      category: 'engine',
      brands: ['caterpillar'],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
      description: 'Complete in-frame overhaul kit for CAT C15 ACERT engines. Includes pistons, rings, liners, gaskets, and bearings.',
      price: 'Request Quote',
    },
    {
      id: 2,
      name: 'Case CX210 Hydraulic Pump',
      oem: 'CNH 87451236',
      category: 'hydraulic',
      brands: ['casecnh'],
      image: 'https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=600&q=80',
      description: 'Main hydraulic pump assembly for Case CX210/CX240 excavators. Remanufactured to OEM specs with full warranty.',
      price: 'Request Quote',
    },
    {
      id: 3,
      name: 'Volvo L120 Wheel Loader Bucket Teeth',
      oem: 'VOE 14532980',
      category: 'buckets',
      brands: ['volvo'],
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80',
      description: 'Heavy-duty bucket teeth set for Volvo L120-L180 wheel loaders. Forged alloy steel with tungsten carbide coating.',
      price: 'Request Quote',
    },
    {
      id: 4,
      name: 'Caterpillar D6 Track Chain Assembly',
      oem: 'CAT 6Y-2555',
      category: 'undercarriage',
      brands: ['caterpillar'],
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&q=80',
      description: 'Complete track chain assembly for CAT D6R/D6T dozers. Sealed and lubricated track — 42 sections.',
      price: 'Request Quote',
    },
    {
      id: 5,
      name: 'Terex TR100 Dump Truck Brake Kit',
      oem: 'TER 92834712',
      category: 'undercarriage',
      brands: ['terex'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
      description: 'Complete brake system overhaul kit for Terex TR100 rigid dump trucks. OEM-equivalent friction material.',
      price: 'Request Quote',
    },
    {
      id: 6,
      name: 'Hitachi ZX330 Swing Motor',
      oem: 'HIT 9229345',
      category: 'hydraulic',
      brands: ['hitachi'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
      description: 'Swing motor assembly for Hitachi ZX330/ZX350 excavators. Fully tested and pressure-verified.',
      price: 'Request Quote',
    },
    {
      id: 7,
      name: 'John Deere 4045 Engine Water Pump',
      oem: 'JD RE525965',
      category: 'engine',
      brands: ['johndeere'],
      image: 'https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=600&q=80',
      description: 'High-flow water pump for John Deere 4045 PowerTech engines. OEM-spec impeller and seal design.',
      price: 'Request Quote',
    },
    {
      id: 8,
      name: 'CAT 320D Fuel Filter Set',
      oem: 'CAT 1R-0751',
      category: 'filters',
      brands: ['caterpillar'],
      image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80',
      description: 'Genuine efficiency fuel filter pack. 4-micron filtration. Direct replacement for CAT 320D/336D.',
      price: 'Request Quote',
    },
    {
      id: 9,
      name: 'Volvo EC210 Alternator 24V',
      oem: 'VOE 20726298',
      category: 'electrical',
      brands: ['volvo'],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
      description: '24V/80A heavy-duty alternator for Volvo EC210/EC240 excavators. Built-in voltage regulator.',
      price: 'Request Quote',
    },
    {
      id: 10,
      name: 'O&K RH40 Excavator Swing Bearing',
      oem: 'OK 4427189',
      category: 'bearings',
      brands: ['ok'],
      image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80',
      description: 'Heavy-duty slewing ring / swing bearing for O&K RH30-RH40 mining excavators. Factory-lubricated and sealed.',
      price: 'Request Quote',
    },
    {
      id: 11,
      name: 'Case 580 Backhoe Hydraulic Cylinder',
      oem: 'CNH D142386',
      category: 'hydraulic',
      brands: ['casecnh'],
      image: 'https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=600&q=80',
      description: 'Boom cylinder assembly for Case 580 Super N backhoe loaders. Chrome-plated rod, polyurethane seals.',
      price: 'Request Quote',
    },
    {
      id: 12,
      name: 'Hitachi EX120 Hydraulic Cylinder Seal Kit',
      oem: 'HIT 4352612',
      category: 'hydraulic',
      brands: ['hitachi'],
      image: 'https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=600&q=80',
      description: 'Complete seal kit for Hitachi EX120 boom cylinder. Polyurethane U-cups with backup rings.',
      price: 'Request Quote',
    },
  ];

  /* ────────── RENDER PRODUCT CARDS ────────── */
  const grid = document.getElementById('product-grid');
  const noResults = document.getElementById('no-results');
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const brandFilter = document.getElementById('brand-filter');

  function renderProducts(filteredProducts) {
    if (!grid) return;
    const list = filteredProducts ?? products;

    if (list.length === 0) {
      grid.innerHTML = '';
      if (noResults) noResults.classList.remove('hidden');
      return;
    }

    if (noResults) noResults.classList.add('hidden');

    grid.innerHTML = list.map(p => `
      <article class="product-card bg-ec-card border border-ec-border rounded-xl overflow-hidden group card-hover" data-category="${p.category}" data-brands="${p.brands.join(',')}">
        <div class="relative overflow-hidden aspect-[4/3] bg-ec-dark">
          <img
            src="${p.image}"
            alt="${p.name}"
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          >
          <div class="absolute top-3 right-3 bg-ec-dark/80 backdrop-blur px-2.5 py-1 rounded text-xs text-ec-yellow font-heading uppercase tracking-wide">
            ${p.category}
          </div>
        </div>
        <div class="p-5">
          <p class="text-ec-muted text-xs uppercase tracking-wide mb-1">${p.oem}</p>
          <h3 class="font-heading font-bold text-white text-lg leading-tight mb-2 group-hover:text-ec-yellow transition-colors">${p.name}</h3>
          <p class="text-ec-muted text-sm leading-relaxed mb-4 line-clamp-2">${p.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-ec-yellow font-bold text-lg">${p.price}</span>
            <a href="#contact" class="inline-flex items-center gap-1.5 bg-ec-yellow text-ec-dark font-bold px-4 py-2 rounded-md text-xs uppercase tracking-wide hover:bg-ec-orange hover:text-white transition-all">
              <i class="fas fa-file-invoice-dollar"></i> Quote
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Initial render
  renderProducts();

  /* ────────── SEARCH + FILTER ────────── */
  function filterProducts() {
    const searchTerm = (searchInput?.value || '').toLowerCase().trim();
    const cat = categoryFilter?.value || 'all';
    const brand = brandFilter?.value || 'all';

    const filtered = products.filter(p => {
      const matchSearch = !searchTerm ||
        p.name.toLowerCase().includes(searchTerm) ||
        p.oem.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.brands.some(b => b.includes(searchTerm));

      const matchCat = cat === 'all' || p.category === cat;
      const matchBrand = brand === 'all' || p.brands.includes(brand);

      return matchSearch && matchCat && matchBrand;
    });

    renderProducts(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', filterProducts);
  if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);
  if (brandFilter) brandFilter.addEventListener('change', filterProducts);

  /* ────────── MOBILE MENU TOGGLE ────────── */
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  const toggleIcon = toggle?.querySelector('i');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = !menu.classList.contains('hidden');
      if (isOpen) {
        menu.classList.add('hidden');
        if (toggleIcon) { toggleIcon.className = 'fas fa-bars'; }
      } else {
        menu.classList.remove('hidden');
        if (toggleIcon) { toggleIcon.className = 'fas fa-times'; }
      }
    });

    // Close mobile menu on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        if (toggleIcon) { toggleIcon.className = 'fas fa-bars'; }
      });
    });
  }

  /* ────────── HEADER SCROLL EFFECT ────────── */
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });

  /* ────────── SCROLL REVEAL ────────── */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // Auto-add reveal class to sections that don't have it
  document.querySelectorAll('section > div > div:first-child, .grid > .card-hover').forEach((el, i) => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      el.style.transitionDelay = `${i * 0.1}s`;
      revealObserver.observe(el);
    }
  });

  /* ────────── LIGHTBOX ────────── */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  let lightboxImages = [];
  let lightboxIndex = 0;

  window.openLightbox = function(index) {
    const galleryImages = document.querySelectorAll('#gallery-preview img');
    lightboxImages = Array.from(galleryImages).map(img => ({
      src: img.src.replace('w=600', 'w=1920'),
      alt: img.alt || '',
    }));
    lightboxIndex = index;
    showLightboxImage();
    if (lightbox) lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
  };

  function showLightboxImage() {
    if (!lightboxImages.length) return;
    const img = lightboxImages[lightboxIndex];
    if (lightboxImg) { lightboxImg.src = img.src; lightboxImg.alt = img.alt; }
    if (lightboxCaption) lightboxCaption.textContent = img.alt;
  }

  window.navigateLightbox = function(dir) {
    lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
    showLightboxImage();
  };

  window.closeLightbox = function(e) {
    if (e && e.target !== lightbox) return;
    if (lightbox) lightbox.classList.remove('show');
    document.body.style.overflow = '';
  };

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('show')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  /* ────────── SMOOTH SCROLL FOR ANCHOR LINKS ────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = header?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ────────── FORM HANDLING ────────── */
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      // Check if Formspree ID is set
      const action = this.getAttribute('action');
      if (action.includes('REPLACE_WITH_YOUR_FORM_ID')) {
        e.preventDefault();
        alert('📋 Form is ready, but Formspree ID is not configured yet.\n\nSee README.md for setup instructions — it takes 2 minutes.');
        return;
      }
      // Otherwise, Formspree handles it natively
    });
  }

  /* ────────── STATS COUNTER ANIMATION ────────── */
  const statNumbers = document.querySelectorAll('.stat-number');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStat(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => statObserver.observe(el));

  function animateStat(el) {
    const text = el.textContent;
    const hasK = text.includes('K');
    const hasPlus = text.includes('+');
    const hasH = text.includes('h');
    const numStr = text.replace(/[+,Kkh]/g, '');
    const target = parseInt(numStr, 10);
    if (isNaN(target)) return;

    const suffix = hasH ? 'h' : (hasK ? 'K+' : (hasPlus ? '+' : ''));
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString() + suffix;
    }
    requestAnimationFrame(update);
  }

  /* ────────── ACTIVE NAV LINK HIGHLIGHT ────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#header a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    const offset = (header?.offsetHeight || 80) + 50;
    sections.forEach(section => {
      const top = section.offsetTop - offset;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('text-ec-yellow', 'border-b-2', 'border-ec-yellow', 'pb-1');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-ec-yellow', 'border-b-2', 'border-ec-yellow', 'pb-1');
      }
    });
  });

  console.log('⚡ Earth Mining Construction — Ready');
});
