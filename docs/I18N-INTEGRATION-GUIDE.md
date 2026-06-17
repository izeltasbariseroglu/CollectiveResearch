# i18n Integration Guide — Multi-Language Support

## Overview

This guide explains how to add `data-i18n` attributes to any HTML page for multi-language support.

## Quick Start

### 1. Include Scripts in `<head>`
```html
<script src="i18n.js"></script>
```

### 2. Add Language Switcher
The `nav.js` automatically injects a language switcher in the navigation. No extra code needed.

### 3. Mark Text for Translation
Use `data-i18n` attributes on any element containing text:

```html
<!-- Text content -->
<h1 data-i18n="homepage.heroTitle">How does your company's digital maturity compare?</h1>
<p data-i18n="homepage.heroSubtitle">Collective Research is running...</p>

<!-- Form placeholders -->
<input type="email" placeholder="you@company.com" data-i18n-placeholder="homepage.ctaPlaceholder">

<!-- Button labels -->
<button data-i18n="modal.submitButton">Notify me</button>

<!-- Link titles & aria-labels -->
<a data-i18n-title="nav.home" title="Go home">Home</a>
<button data-i18n-aria-label="common.appName" aria-label="Collective Research logo">Logo</button>
```

## Attribute Types

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `data-i18n` | Element text content | `<h1 data-i18n="key">Text</h1>` |
| `data-i18n-placeholder` | Input placeholder | `<input data-i18n-placeholder="key">` |
| `data-i18n-title` | Element title attribute | `<a data-i18n-title="key">Link</a>` |
| `data-i18n-aria-label` | ARIA label | `<button data-i18n-aria-label="key">` |

## Translation Keys

Keys follow the structure: `section.key`

### Homepage Keys
```
homepage.heroTitle
homepage.heroSubtitle
homepage.step1Desc
homepage.step2Desc
homepage.step3Desc
homepage.whyJoin
homepage.ctaPlaceholder
```

### Modal Keys
```
modal.title
modal.subtitle
modal.roleLabel
modal.roleParticipant
modal.orgNameLabel
modal.submitButton
modal.successTitle
modal.successMessage
```

### Navigation Keys
```
nav.home
nav.howItWorks
nav.pricing
nav.privacy
```

See `en.json` and `tr.json` for complete key list.

## Adding a New Language

1. Create `xx.json` (e.g., `de.json` for German)
2. Copy structure from `en.json` or `tr.json`
3. Translate all strings
4. Test with language switcher (it will auto-detect)

## JavaScript API

```javascript
// Get current language
window.i18n.getLang(); // returns 'en' or 'tr'

// Switch language programmatically
window.i18n.switchLanguage('tr');

// Get translated string
window.i18n.getString('homepage.heroTitle');

// Check if RTL language
window.i18n.isRTL();
```

## For Dynamic Content

If you add new elements via JavaScript, re-apply translations:

```javascript
// After inserting new HTML:
fetch('en.json').then(r => r.json()).then(en => {
  window.i18n.strings.en = en;
  window.i18n.applyLanguage(window.i18n.currentLang);
});
```

## URL Structure (Optional)

For SEO, implement language-specific URLs:

```
/en/index.html
/en/pricing.html
/tr/index.html
/tr/pricing.html
```

This is handled automatically by `i18n.js` hreflang generation.

## Meta Tags

Language switcher automatically updates:
- `<html lang="en">` or `<html lang="tr">`
- `<meta property="og:locale">`
- `<link rel="alternate" hreflang="en">`
- `<link rel="alternate" hreflang="tr">`

## Analytics

Language preference is tracked in GA4:
- Page view events include language
- `language_switch` event fired on language change

```javascript
// Auto-tracked in GA4:
gtag('event', 'language_switch', {
  'language': 'tr'
});
```

## Browser Detection

i18n automatically detects browser language:
- Turkish user → defaults to Turkish
- English user → defaults to English
- Preference saved in localStorage

## Status by Page

| Page | Status | Coverage |
|------|--------|----------|
| index.html | ✅ Complete | 60+ strings |
| how-it-works.html | ⏳ Pending | Needs attributes |
| pricing.html | ⏳ Pending | Needs attributes |
| privacy.html | ⏳ Pending | Needs attributes |
| support.html | ⏳ Pending | Needs attributes |
| 404.html | ⏳ Pending | Needs attributes |

## Quick Integration for Other Pages

Use this bash command to add `data-i18n` to matching text:

```bash
# Example: Add i18n to pricing page
sed -i 's|Standard<|Standard</strong> <span data-i18n="pricing.standardName"><|g' pricing.html
```

Or manually review section keys in JSON and add attributes.

## Testing

1. Open any page
2. Look for language switcher (top-right nav)
3. Click "TR" button
4. Verify all text switches to Turkish
5. Refresh page — language preference persists (localStorage)
6. Check GA4 for language_switch events

## Support

If a key is missing from translations, i18n shows `[key.name]` placeholder:
```
[homepage.unknownKey]
```

Add the missing key to `en.json` and `tr.json` to fix.

---

**Next:** Apply these attributes to remaining pages using this guide.
