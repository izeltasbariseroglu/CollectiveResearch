// Inject header and footer HTML
document.addEventListener('DOMContentLoaded', function() {
  const navHTML = `<header class="site-header">
    <nav class="nav">
      <a href="index.html" class="nav-brand-link">
        <svg class="nav-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
          <polygon points="24,11 36.4,19.98 31.64,34.52 16.36,34.52 11.64,19.98" fill="none" stroke="#1D9E75" stroke-width="2" stroke-linejoin="round" opacity="0.45"/>
          <line x1="24" y1="11" x2="24" y2="24" stroke="#AFA9EC" stroke-width="2" opacity="0.7"/>
          <line x1="36.4" y1="19.98" x2="24" y2="24" stroke="#AFA9EC" stroke-width="2" opacity="0.7"/>
          <line x1="31.64" y1="34.52" x2="24" y2="24" stroke="#AFA9EC" stroke-width="2" opacity="0.7"/>
          <line x1="16.36" y1="34.52" x2="24" y2="24" stroke="#AFA9EC" stroke-width="2" opacity="0.7"/>
          <line x1="11.64" y1="19.98" x2="24" y2="24" stroke="#AFA9EC" stroke-width="2" opacity="0.7"/>
          <line x1="31.64" y1="34.52" x2="43" y2="46" stroke="#2C2C2A" stroke-width="5" stroke-linecap="round"/>
          <circle cx="24" cy="11" r="4" fill="#1D9E75"/>
          <circle cx="36.4" cy="19.98" r="4" fill="#5DCAA5"/>
          <circle cx="31.64" cy="34.52" r="4" fill="#1D9E75"/>
          <circle cx="16.36" cy="34.52" r="4" fill="#9FE1CB"/>
          <circle cx="11.64" cy="19.98" r="4" fill="#9FE1CB"/>
          <circle cx="24" cy="24" r="3.5" fill="#7F77DD"/>
        </svg>
        <div class="nav-brand-text">
          <div class="nav-brand-name">Collective Research</div>
          <div class="nav-tagline" data-i18n="common.tagline">From today to tomorrow, together.</div>
        </div>
      </a>
      <div class="nav-links">
        <a href="index.html" data-i18n="nav.home">Home</a>
        <a href="how-it-works.html" data-i18n="nav.howItWorks">How it works</a>
        <a href="pricing.html" data-i18n="nav.pricing">Pricing</a>
        <a href="privacy.html" data-i18n="nav.privacy">Privacy</a>
      </div>
    </nav>
  </header>`;

  const footerHTML = `<footer class="site-footer">
    <div class="footer-inner">
      <p><strong>Collective Research</strong> is an independent research initiative.</p>
      <p data-i18n="common.privacyFooter">Your data is never shared individually, only in aggregated, anonymized form for benchmarking purposes.</p>
      <p style="margin-top:16px;">
        <a href="privacy.html" data-i18n="nav.privacy">Privacy</a> · 
        <a href="support.html">Support</a> · 
        <a href="mailto:hello@collectiveresearch.net">Contact</a>
      </p>
    </div>
  </footer>`;

  if (!document.querySelector('header')) {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }
  if (!document.querySelector('footer')) {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // Detect active page and highlight nav
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // Sticky nav on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // Organization Schema.org
  if (document.querySelector('script[type="application/ld+json"]') === null) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Collective Research",
      "url": "https://collectiveresearch.net",
      "logo": "https://collectiveresearch.net/favicon.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "hello@collectiveresearch.net"
      },
      "sameAs": []
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  // GA4 nav tracking
  if (typeof gtag !== 'undefined') {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        gtag('event', 'page_link_click', {
          'link_text': link.textContent.trim(),
          'link_url': link.href,
          'link_location': 'main_navigation'
        });
      });
    });
  }

  // Load all translations and initialize i18n
  if (typeof window.i18n !== 'undefined') {
    Promise.all([
      fetch('en.json').then(r => r.json()).catch(() => ({})),
      fetch('tr.json').then(r => r.json()).catch(() => ({})),
      fetch('de.json').then(r => r.json()).catch(() => ({})),
      fetch('fr.json').then(r => r.json()).catch(() => ({})),
      fetch('it.json').then(r => r.json()).catch(() => ({}))
    ]).then(([en, tr, de, fr, it]) => {
      window.i18n.init({ en, tr, de, fr, it });
    }).catch(err => console.warn('i18n loading error:', err));
  }
});

// Smooth scroll behavior
document.addEventListener('click', function(e) {
  if (e.target.getAttribute('href')?.startsWith('#')) {
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
