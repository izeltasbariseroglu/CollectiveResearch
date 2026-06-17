// Inject header and footer HTML
document.addEventListener('DOMContentLoaded', function() {
  const navHTML = `<header>
    <nav class="nav">
      <a href="index.html" class="logo">Collective Research</a>
      <ul>
        <li><a href="index.html" data-i18n="nav.home">Home</a></li>
        <li><a href="how-it-works.html" data-i18n="nav.howItWorks">How it works</a></li>
        <li><a href="pricing.html" data-i18n="nav.pricing">Pricing</a></li>
        <li><a href="privacy.html" data-i18n="nav.privacy">Privacy</a></li>
      </ul>
    </nav>
  </header>`;

  const footerHTML = `<footer>
    <div class="footer-content">
      <p><strong>Collective Research</strong> is an independent research initiative.</p>
      <p data-i18n="common.privacyFooter">Your data is never shared individually, only in aggregated, anonymized form for benchmarking purposes.</p>
      <ul>
        <li><a href="privacy.html" data-i18n="nav.privacy">Privacy</a></li>
        <li><a href="support.html">Support</a></li>
        <li><a href="mailto:hello@collectiveresearchs.com">Contact</a></li>
      </ul>
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
  document.querySelectorAll('nav.nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('active');
    }
  });

  // Sticky nav on scroll
  const nav = document.querySelector('header');
  if (nav) {
    let lastScrollY = 0;
    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY;
      nav.classList.toggle('scrolled', scrollY > 50);
      lastScrollY = scrollY;
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
        "email": "hello@collectiveresearchs.com"
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
    const navLinks = document.querySelectorAll('nav.nav a[href]');
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
