// Multi-language support for Collective Research
window.I18n = function() {
  this.currentLang = 'en';
  this.strings = {};
  this.supportedLanguages = ['en', 'tr', 'de', 'fr', 'it'];
  this.languageNames = {
    'en': 'English',
    'tr': 'Türkçe',
    'de': 'Deutsch',
    'fr': 'Français',
    'it': 'Italiano'
  };
  this.rtlLanguages = ['ar', 'he', 'fa'];
  
  this.init = function(translations) {
    this.strings = translations;
    const saved = localStorage.getItem('selectedLanguage') || this.detectBrowserLanguage();
    this.switchLanguage(saved);
    this.setupLanguageSwitcher();
  };
  
  this.applyLanguage = function(lang) {
    if (!this.strings[lang]) return;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = this.getString(key, lang);
      if (value) el.textContent = value;
    });
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = this.getString(key, lang);
      if (value) el.placeholder = value;
    });
    const titles = document.querySelectorAll('[data-i18n-title]');
    titles.forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const value = this.getString(key, lang);
      if (value) el.title = value;
    });
    const ariaLabels = document.querySelectorAll('[data-i18n-aria-label]');
    ariaLabels.forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      const value = this.getString(key, lang);
      if (value) el.setAttribute('aria-label', value);
    });
    document.documentElement.lang = lang;
    this.updateHrefLang();
  };
  
  this.switchLanguage = function(lang) {
    if (!this.supportedLanguages.includes(lang)) lang = 'en';
    this.currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    this.applyLanguage(lang);
    if (typeof gtag !== 'undefined') {
      gtag('event', 'language_switch', {
        'language': lang,
        'page_location': window.location.href
      });
    }
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      }
    });
  };
  
  this.getString = function(key, lang) {
    lang = lang || this.currentLang;
    const keys = key.split('.');
    let value = this.strings[lang] || {};
    for (let k of keys) {
      value = value[k];
      if (!value) return '[' + key + ']';
    }
    return value;
  };
  
  this.setupLanguageSwitcher = function() {
    const nav = document.querySelector('nav.nav');
    if (!nav) return;
    
    let existing = nav.querySelector('.language-switcher');
    if (existing) existing.remove();
    
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    
    this.supportedLanguages.forEach(lang => {
      const btn = document.createElement('button');
      btn.className = 'lang-btn';
      if (lang === this.currentLang) btn.classList.add('active');
      btn.setAttribute('data-lang', lang);
      btn.textContent = lang.toUpperCase();
      btn.setAttribute('aria-label', 'Switch to ' + this.languageNames[lang]);
      btn.addEventListener('click', () => this.switchLanguage(lang));
      switcher.appendChild(btn);
    });
    
    nav.appendChild(switcher);
  };
  
  this.updateHrefLang = function() {
    let existing = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existing.forEach(el => el.remove());
    
    const pathname = window.location.pathname;
    this.supportedLanguages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = pathname + (pathname.includes('?') ? '&' : '?') + 'lang=' + lang;
      document.head.appendChild(link);
    });
    
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = window.location.href;
    document.head.appendChild(canonical);
  };
  
  this.detectBrowserLanguage = function() {
    const browserLang = navigator.language.split('-')[0];
    if (this.supportedLanguages.includes(browserLang)) return browserLang;
    return 'en';
  };
  
  this.getLang = function() {
    return this.currentLang;
  };
  
  this.isRTL = function() {
    return this.rtlLanguages.includes(this.currentLang);
  };
};

// Initialize global instance
window.i18n = new window.I18n();
