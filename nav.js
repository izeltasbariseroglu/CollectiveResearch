/* ═══════════════════════════════════════════════
   Collective Research — Shared Nav & Footer
   Injects header and footer into every page.
   To update nav/footer: edit only this file.
   ═══════════════════════════════════════════════ */

(function () {

  var PAGES = [
    { href: 'index.html',        label: 'Home' },
    { href: 'how-it-works.html', label: 'How it works' },
    { href: 'pricing.html',      label: 'Pricing' },
    { href: 'privacy.html',      label: 'Privacy' },
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
    return '<a href="' + p.href + '"' + active + '>' + p.label + '</a>';
  }).join('');

  // Header HTML
  var header = '<header class="site-header" id="site-header">'
    + '<nav class="nav" aria-label="Main navigation">'
    + '<a class="nav-brand-link" href="index.html">'
    + LOGO
    + '<div class="nav-brand-text">'
    + '<span class="nav-brand-name">Collective Research</span>'
    + '<span class="nav-tagline">Shared strength. Sharper insight. Smarter strategy.</span>'
    + '</div></a>'
    + '<div class="nav-links">' + links + '</div>'
    + '</nav></header>';

  // Footer HTML
  var footer = '<footer class="site-footer">'
    + '<div class="footer-inner">'
    + '<p>Collective Research is an independent research initiative. '
    + 'Your data is never shared individually, only used in aggregate, anonymized form for benchmarking.'
    + ' &nbsp;&middot;&nbsp; <a href="privacy.html">Privacy policy</a></p>'
    + '</div></footer>';

  // Inject into .page
  var page = document.querySelector('.page');
  if (page) {
    page.insertAdjacentHTML('afterbegin', header);
    page.insertAdjacentHTML('beforeend', footer);
  }

  // Sticky scroll behaviour
  window.addEventListener('scroll', function () {
    var h = document.getElementById('site-header');
    if (h) h.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });

})();
