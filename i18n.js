/**
 * i18n.js — Multi-language support for Collective Research
 * Supports: English (en), Turkish (tr)
 * Features: localStorage persistence, dynamic DOM updates, language switcher
 */

class I18n {
  constructor() {
    this.currentLang = this.getStoredLanguage() || this.detectBrowserLanguage() || 'en';
    this.strings = {};
    this.rtlLanguages = ['ar', 'he', 'fa']; // Future support
  }

  /**
   * Initialize i18n with translation data
   * @param {Object} translations - { en: {...}, tr: {...} }
   */
  async init(translations) {
    this.strings = translations;
    this.applyLanguage(this.currentLang);
    this.setupLanguageSwitcher();
    this.updateMetaTags();
    this.logToGA4();
  }

  /**
   * Get stored language from localStorage
   */
  getStoredLanguage() {
    try {
      return localStorage.getItem('cr-language');
    } catch (e) {
      return null;
    }
  }

  /**
   * Store language preference
   */
  setStoredLanguage(lang) {
    try {
      localStorage.setItem('cr-language', lang);
    } catch (e) {
      console.warn('localStorage unavailable');
    }
  }

  /**
   * Detect browser language
   */
  detectBrowserLanguage() {
    const lang = navigator.language?.toLowerCase() || '';
    if (lang.startsWith('tr')) return 'tr';
    return 'en';
  }

  /**
   * Switch to language and apply translations
   */
  switchLanguage(lang) {
    if (!this.strings[lang]) {
      console.error(`Language '${lang}' not available`);
      return;
    }
    this.currentLang = lang;
    this.setStoredLanguage(lang);
    this.applyLanguage(lang);
    this.updateMetaTags();
    this.logToGA4('language_switch', { language: lang });
  }

  /**
   * Apply language to DOM
   */
  applyLanguage(lang) {
    // Set HTML lang attribute
    document.documentElement.lang = lang;
    document.documentElement.dir = this.rtlLanguages.includes(lang) ? 'rtl' : 'ltr';

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const translation = this.getString(key);
      if (translation) {
        el.textContent = translation;
      }
    });

    // Translate all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.getString(key);
      if (translation) {
        el.placeholder = translation;
      }
    });

    // Translate all elements with data-i18n-title attribute
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      const translation = this.getString(key);
      if (translation) {
        el.title = translation;
      }
    });

    // Translate all elements with data-i18n-aria-label attribute
    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria-label');
      const translation = this.getString(key);
      if (translation) {
        el.setAttribute('aria-label', translation);
      }
    });
  }

  /**
   * Get translated string
   */
  getString(key) {
    const keys = key.split('.');
    let value = this.strings[this.currentLang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || `[${key}]`;
  }

  /**
   * Setup language switcher in nav
   */
  setupLanguageSwitcher() {
    const nav = document.querySelector('nav.nav');
    if (!nav) return;

    // Check if switcher already exists
    if (document.getElementById('language-switcher')) return;

    const switcherHTML = `
      <div id="language-switcher" class="language-switcher" role="group" aria-label="Language selection">
        <button 
          class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" 
          data-lang="en" 
          title="English"
          aria-current="${this.currentLang === 'en' ? 'true' : 'false'}"
        >
          EN
        </button>
        <button 
          class="lang-btn ${this.currentLang === 'tr' ? 'active' : ''}" 
          data-lang="tr" 
          title="Türkçe"
          aria-current="${this.currentLang === 'tr' ? 'true' : 'false'}"
        >
          TR
        </button>
      </div>
    `;

    // Insert before nav-links or at end of nav
    const navLinks = nav.querySelector('.nav-links');
    if (navLinks) {
      navLinks.insertAdjacentHTML('beforebegin', switcherHTML);
    } else {
      nav.insertAdjacentHTML('beforeend', switcherHTML);
    }

    // Attach click handlers
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        this.switchLanguage(lang);
        
        // Update active button state
        document.querySelectorAll('.lang-btn').forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-current', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-current', 'true');
      });
    });
  }

  /**
   * Update HTML meta tags for language/region
   */
  updateMetaTags() {
    const lang = this.currentLang;
    
    // Update og:locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement('meta');
      ogLocale.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocale);
    }
    ogLocale.content = lang === 'tr' ? 'tr_TR' : 'en_US';

    // Update alternate hreflang links
    this.updateHrefLang();
  }

  /**
   * Update hreflang tags for SEO
   */
  updateHrefLang() {
    const currentUrl = window.location.pathname;
    
    // Remove existing hreflang tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => {
      el.remove();
    });

    // Add hreflang for each language
    const languages = Object.keys(this.strings);
    languages.forEach((lang) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      // Build URL with language (example: /en/pricing.html or /tr/pricing.html)
      const baseUrl = 'https://collectiveresearch.net';
      const pagePath = currentUrl.split('/').pop() || 'index.html';
      link.href = `${baseUrl}/${lang}/${pagePath}`;
      document.head.appendChild(link);
    });

    // Add x-default hreflang
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = 'https://collectiveresearch.net/en/';
    document.head.appendChild(xDefault);
  }

  /**
   * Track language preference in GA4
   */
  logToGA4(event = 'page_view', data = {}) {
    if (typeof gtag === 'undefined') return;

    const payload = {
      language: this.currentLang,
      ...data,
    };

    if (event === 'page_view') {
      gtag('config', 'G-XXXXXXXXXX', { language: this.currentLang });
    } else if (event === 'language_switch') {
      gtag('event', 'language_switch', payload);
    }
  }

  /**
   * Get current language
   */
  getLang() {
    return this.currentLang;
  }

  /**
   * Check if RTL language
   */
  isRTL() {
    return this.rtlLanguages.includes(this.currentLang);
  }
}

// Export global instance
window.i18n = new I18n();
