/* ═══════════════════════════════════════════════
   Collective Research — Shared Nav & Footer
   Injects header and footer into every page.
   To update nav/footer: edit only this file.
   ═══════════════════════════════════════════════ */

(function () {

  var PAGES = [
    { href: 'index.html',        label: 'Home',         i18n: 'nav.home' },
    { href: 'how-it-works.html', label: 'How it works', i18n: 'nav.howItWorks' },
    { href: 'pricing.html',      label: 'Pricing',      i18n: 'nav.pricing' },
    { href: 'privacy.html',      label: 'Privacy',      i18n: 'nav.privacy' },
    { href: 'support.html',      label: 'Support' },
  ];

  var LOGO = '<svg class="nav-logo" viewBox="0 0 56 56" aria-hidden="true" focusable="false">'
    + '<polygon points="24,11 36.4,19.98 31.64,34.52 16.36,34.52 11.64,19.98" fill="none" stroke="#1D9E75" stroke-width="2" stroke-linejoin="round" opacity="0.45"/>'
    + '<line x1="24" y1="11" x2="24" y2="24" stroke="#AFA9EC" stroke-width="2" opacity="0.7"/>'
    + '<line x1="36.4" y1="19.98" x2="24" y2="24" stroke="#AFA9EC" stroke-width="2" opacity="0.7"/>'
    + '<line x1="31.64" y1="34.52" x2="24" y2="24" stroke="#AFA9EC" stroke-width="2" opacity="0.7"/>'
    + '<line x1="16.36" y1="34.52" x2="24" y2="24" stroke="#AFA9EC" stroke-width="2" opacity="0.7"/>'
    + '<line x1="11.64" y1="19.98" x2="24" y2="24" stroke="#AFA9EC" stroke-width="2" opacity="0.7"/>'
    + '<line x1="31.64" y1="34.52" x2="43" y2="46" stroke="#2C2C2A" stroke-width="5" stroke-linecap="round"/>'
    + '<circle cx="24" cy="11" r="4" fill="#1D9E75"/>'
    + '<circle cx="36.4" cy="19.98" r="4" fill="#5DCAA5"/>'
    + '<circle cx="31.64" cy="34.52" r="4" fill="#1D9E75"/>'
    + '<circle cx="16.36" cy="34.52" r="4" fill="#9FE1CB"/>'
    + '<circle cx="11.64" cy="19.98" r="4" fill="#9FE1CB"/>'
    + '<circle cx="24" cy="24" r="3.5" fill="#7F77DD"/>'
    + '</svg>';

  // Detect current page
  var current = window.location.pathname.split('/').pop() || 'index.html';
  if (current === '' || current === '/') current = 'index.html';

  // Build nav links
  var links = PAGES.map(function (p) {
    var active = (p.href === current) ? ' aria-current="page"' : '';
    var i18nAttr = p.i18n ? ' data-i18n="' + p.i18n + '"' : '';
    return '<a href="' + p.href + '"' + active + i18nAttr + '>' + p.label + '</a>';
  }).join('');

  // Header HTML
  // Language switcher
  var langSwitcher = '<div class="language-switcher">';
  ['en', 'tr', 'de', 'fr', 'it'].forEach(function(lang) {
    langSwitcher += '<button class="lang-btn" data-lang="' + lang + '" aria-label="Switch to ' + lang + '">'
      + lang.toUpperCase() + '</button>';
  });
  langSwitcher += '</div>';

  var header = '<header class="site-header" id="site-header">'
    + '<nav class="nav" aria-label="Main navigation">'
    + '<a class="nav-brand-link" href="index.html">'
    + LOGO
    + '<div class="nav-brand-text">'
    + '<span class="nav-brand-name">Collective Research</span>'
    + '<span class="nav-tagline" data-i18n="common.tagline">Shared strength. Sharper insight. Smarter strategy.</span>'
    + '</div></a>'
    + '<div class="nav-links">' + links + '</div>'
    + langSwitcher
    + '</nav></header>';

  // Footer HTML
  var footer = '<footer class="site-footer">'
    + '<div class="footer-inner">'
    + '<p><span data-i18n="common.privacyFooter">Collective Research is an independent research initiative. '
    + 'Your data is never shared individually, only used in aggregate, anonymized form for benchmarking.</span>'
    + ' &nbsp;&middot;&nbsp; <a href="privacy.html" data-i18n="nav.privacy">Privacy policy</a></p>'
    + '</div></footer>';

  // Inject into .page
  var page = document.querySelector('.page');
  if (page) {
    page.insertAdjacentHTML('afterbegin', header);
    page.insertAdjacentHTML('beforeend', footer);
  }


  function initializeI18n() {
    if (typeof window.i18n === 'undefined') return;
    Promise.all([
      fetch('locales/en.json').then(function(r){ return r.json(); }).catch(function(){ return {}; }),
      fetch('locales/tr.json').then(function(r){ return r.json(); }).catch(function(){ return {}; }),
      fetch('locales/de.json').then(function(r){ return r.json(); }).catch(function(){ return {}; }),
      fetch('locales/fr.json').then(function(r){ return r.json(); }).catch(function(){ return {}; }),
      fetch('locales/it.json').then(function(r){ return r.json(); }).catch(function(){ return {}; })
    ]).then(function(results) {
      window.i18n.init({
        en: results[0],
        tr: results[1],
        de: results[2],
        fr: results[3],
        it: results[4]
      });

      var languageButtons = document.querySelectorAll('.lang-btn');
      languageButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          var lang = btn.getAttribute('data-lang');
          window.i18n.switchLanguage(lang);
        });
      });
    }).catch(function(err) {
      console.warn('i18n loading error:', err);
    });
  }

  if (typeof window.i18n !== 'undefined') {
    initializeI18n();
  } else {
    var i18nScript = document.createElement('script');
    i18nScript.src = 'assets/js/i18n.js';
    i18nScript.onload = initializeI18n;
    document.head.appendChild(i18nScript);
  }

  // Sticky scroll behaviour
  window.addEventListener('scroll', function () {
    var h = document.getElementById('site-header');
    if (h) h.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });

})();
