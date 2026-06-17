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
    let saved = 'en';
    try {
      saved = localStorage.getItem('selectedLanguage') || this.detectBrowserLanguage();
    } catch (e) {
      saved = this.detectBrowserLanguage();
    }
    this.switchLanguage(saved);
    this.setupLanguageSwitcher();
  };
  
  this.applyLanguage = function(lang) {
    if (!this.strings[lang]) return;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = this.getString(key, lang);
      if (value) {
        if (value.includes('<') && value.includes('>')) {
          el.innerHTML = value;
        } else {
          el.textContent = value;
        }
      }
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
    document.documentElement.dir = this.isRTL() ? 'rtl' : 'ltr';
    this.updateHrefLang();
  };
  
  this.switchLanguage = function(lang) {
    if (!this.supportedLanguages.includes(lang)) lang = 'en';
    this.currentLang = lang;
    try {
      localStorage.setItem('selectedLanguage', lang);
    } catch(e) {}
    this.applyLanguage(lang);
    if (typeof gtag !== 'undefined') {
      gtag('event', 'language_switch', {
        'language': lang,
        'page_location': window.location.href
      });
    }
    this.setupLanguageSwitcher();
  };
  
  this.getString = function(key, lang) {
    lang = lang || this.currentLang;
    const keys = key.split('.');
    let value = this.strings[lang] || {};
    let fallbackValue = this.strings['en'] || {};
    for (let k of keys) {
      value = value ? value[k] : undefined;
      fallbackValue = fallbackValue ? fallbackValue[k] : undefined;
    }
    if (value) return value;
    if (fallbackValue) return fallbackValue;
    return '[' + key + ']';
  };
  
      this.setupLanguageSwitcher = function() {
      const nav = document.querySelector('nav.nav');
      if (!nav) return;
      
      let existing = nav.querySelector('.language-switcher');
      if (existing) existing.remove();
      
      const switcher = document.createElement('div');
      switcher.className = 'language-switcher custom-select';
      
      const currentFlag = this.getFlagUrl(this.currentLang);
      
      const selectedDisplay = document.createElement('div');
      selectedDisplay.className = 'select-selected';
      selectedDisplay.innerHTML = '<img src="' + currentFlag + '" class="flag-icon" alt="flag"> <span class="lang-text">' + this.currentLang.toUpperCase() + '</span>';
      
      const optionsContainer = document.createElement('div');
      optionsContainer.className = 'select-items select-hide';
      
      this.supportedLanguages.forEach(lang => {
        const option = document.createElement('div');
        option.className = 'lang-option';
        if (lang === this.currentLang) option.classList.add('active');
        option.innerHTML = '<img src="' + this.getFlagUrl(lang) + '" class="flag-icon" alt="flag"> <span>' + this.languageNames[lang] + '</span>';
        option.addEventListener('click', () => {
          this.switchLanguage(lang);
        });
        optionsContainer.appendChild(option);
      });
      
      selectedDisplay.addEventListener('click', function(e) {
        e.stopPropagation();
        optionsContainer.classList.toggle('select-hide');
        this.classList.toggle('select-arrow-active');
      });
      
      document.addEventListener('click', function(e) {
        if (!switcher.contains(e.target)) {
          optionsContainer.classList.add('select-hide');
          selectedDisplay.classList.remove('select-arrow-active');
        }
      });
      
      switcher.appendChild(selectedDisplay);
      switcher.appendChild(optionsContainer);
      nav.appendChild(switcher);
    };

    this.getFlagUrl = function(lang) {
      const map = {
        'en': 'gb',
        'tr': 'tr',
        'de': 'de',
        'fr': 'fr',
        'it': 'it'
      };
      return 'https://flagcdn.com/w20/' + map[lang] + '.png';
    };

    this.updateHrefLang = function() {
    let existing = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existing.forEach(el => el.remove());
    
    const pathname = window.location.pathname;
    this.supportedLanguages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = pathname + '?lang=' + lang;
      document.head.appendChild(link);
    });
    
    let existingCanonical = document.querySelector('link[rel="canonical"]');
    if (!existingCanonical) {
      existingCanonical = document.createElement('link');
      existingCanonical.rel = 'canonical';
      document.head.appendChild(existingCanonical);
    }
    const cleanUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
    existingCanonical.href = cleanUrl;
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





