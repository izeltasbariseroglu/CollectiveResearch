# Collective Research — Hızlı Referans Kartı

## 🎨 Renk Paleti (16 Renk)

| Adı | Kod | RGB | Kullanım | Mobil |
|-----|-----|-----|----------|-------|
| **Turkuaz** | #1D9E75 | 29, 158, 117 | CTA, vurgu | ✅ |
| **Turkuaz-A1** | #5DCAA5 | 93, 202, 165 | Hover, ikincil | ✅ |
| **Turkuaz-A2** | #9FE1CB | 159, 225, 203 | BG, alt uyarı | ✅ |
| **Mor** | #7F77DD | 127, 119, 221 | Veri, ağ | ⚠️ |
| **Mor-A** | #AFA9EC | 175, 169, 236 | Çizgiler, alt | ✅ |
| **Kömür** | #2C2C2A | 44, 44, 42 | H1-H3, metin | ✅ |
| **Gri-Metin** | #6B6A65 | 107, 106, 101 | Body, alt metin | ✅ |
| **Gri-Soluk** | #9C9A92 | 156, 154, 146 | Placeholder, disabled | ⚠️ |
| **Sınır** | #E7E5DE | 231, 229, 222 | Input, kart | ✅ |
| **Beyaz** | #FFFFFF | 255, 255, 255 | Sayfa, modal | ✅ |
| **Yumuşak** | #FAF9F6 | 250, 249, 246 | Footer, section | ✅ |
| **Başarı** | #E1F5EE | 225, 245, 238 | Success msg | ✅ |
| **İkincil-BG** | #F3F1FF | 243, 241, 255 | Mor themed | ✅ |
| **Açık-BG** | #F1EFE8 | 241, 239, 232 | Alt section | ✅ |
| **Hata** | #FFEBEE | 255, 235, 238 | Error state | ✅ |
| **Hata-Metin** | #E53935 | 229, 57, 53 | Error text | ✅ |

**Kısa Tip:** Turkuaz (#1D9E75) = CTA, Mor (#7F77DD) = veri noktaları, Kömür (#2C2C2A) = metin

---

## 📐 Tipografi (Tek Font: Inter)

### Ölçek
```
H1: 32px | 500 | 1.35 lh | -0.01em ls
H2: 24px | 500 | 1.4 lh  | -0.005em ls
H3: 17px | 500 | 1.5 lh  | 0
Body: 15px | 400 | 1.7 lh | 0
Small: 13px | 400 | 1.6 lh | 0
Label: 12px | 500 | 1.5 lh | 0
Button: 14px | 500 | 1.4 lh | 0
```

**Kurallar:**
- Sadece 400 (Regular) + 500 (Medium) ağırlık
- Max satır uzunluğu: 680px
- Min text: 12px
- H1 + p = margin-bottom 16px

---

## 📏 Boşluk & Padding (8px Grid)

### Margin
```
Section: 48px
H1: 16px-bottom
H1+p: 32px-bottom
Card: 20px internal
Form: 16px between fields
Button: 11px (v) × 22px (h)
Input: 10px (v) × 12px (h)
```

### Responsive
```
Desktop:  880px page width, 32px padding
Tablet:   (max 768px) 20px padding
Mobile:   (max 640px) 16px padding
```

---

## 🔘 Bileşen Hızlı Stil

### Buton (CTA)
```css
bg: #1D9E75 | fg: #fff | padding: 12px 22px
radius: 10px | border: none | weight: 500
Hover: bg #178a64 + translateY(-1px)
Focus: outline 3px rgba(29,158,117,0.3)
```

### Input
```css
padding: 10px 12px | border: 1px #E7E5DE
radius: 10px | bg: #fff | font-size: 14px
Focus: border #1D9E75 + box-shadow rgba(29,158,117,0.12)
Placeholder: #9C9A92
```

### Kart
```css
border: 1px #E7E5DE | padding: 20px | radius: 10px
bg: #fff | box-shadow: 0 6px 20px rgba(0,0,0,0.05)
Hover: translateY(-2px)
```

### Modal
```css
max-width: 420px | padding: 32px | border-radius: 10px
box-shadow: 0 20px 60px rgba(0,0,0,0.15)
Overlay: rgba(44,44,42,0.4) | z-index: 200
```

---

## 🌍 5 Dil Kodu

| Kod | Dil | Dosya | Durum |
|-----|-----|-------|-------|
| en | English | en.json | ✅ |
| tr | Türkçe | tr.json | ✅ |
| de | Deutsch | de.json | ✅ |
| fr | Français | fr.json | ✅ |
| it | Italiano | it.json | ✅ |

**Dil Değiştir:** `window.i18n.switchLanguage('tr')`

---

## ♿ Erişilebilirlik Çeklist

- [ ] Metin kontrastı ≥ 4.5:1 (14px+)
- [ ] Tüm butonlar Tab/Enter ile
- [ ] Odak ring görünür (3px)
- [ ] Form labelleri `<label for="id">`
- [ ] SVG: `aria-hidden="true"`
- [ ] Min tıklama: 44×44 px
- [ ] Zoom 200% çalışıyor
- [ ] prefers-reduced-motion respected

---

## 📱 Responsive Breakpoints

```css
Desktop (880px):  3-4 column grid
Tablet  (768px):  2 column grid
Mobile  (640px):  1 column grid
```

---

## 🚀 Deploy Checklist

- [ ] GA4 ID güncelle (index.html ~37)
- [ ] n8n webhooks ekle (form handlers)
- [ ] JSON dosyaları yüklü (5 dil)
- [ ] Logo/SVG: absolute URL
- [ ] CSS: min.css veya inline
- [ ] i18n.js: minified
- [ ] hreflang tags aktif
- [ ] favicon.ico + apple-touch-icon

---

## 🎬 Animasyon Süreler

```
Fast:  0.15s (hover, focus)
Normal: 0.2s (transitions)
Slow:  0.3s (modal open)
Slowest: 0.7s (hero fade stagger)
```

**Easing:** `ease` (standart), `ease-out` (giriş)

---

## 📄 Dosya Yapısı

```
7 HTML  | index, how-it-works, pricing, privacy, support, 404, sample
1 CSS   | styles.css (13.6 KB, tüm mobile breakpoints)
1 JS    | i18n.js (2.4 KB, 5 dil yöneticisi)
5 JSON  | en/tr/de/fr/it.json (~17 KB her biri)
2 SVG   | favicon.svg, og-image.svg
```

---

## 📧 İletişim & Domain Kuralları

- **Ana Domain:** `collectiveresearch.net` (Web sitesi yayını)
- **Email Domain:** `collectiveresearchs.com` (İletişim ve mailler)
> **Not:** Sonunda 's' harfi olan `collectiveresearchs.com` domaini kasıtlı olarak alınmış olup, güvenlik ve izolasyon sağlamak adına tüm email trafiği bu domaine bağlanmıştır. Denetimlerde bunun bir "yazım hatası" (typo) olarak işaretlenmemesi gerekir.

---

## 🌍 Dil ve Çeviri Kuralları (Localization)

- **Temel Dil (Base Language):** Sitenin ve projenin her zaman temel/ana dili **İngilizce'dir (EN)**.
- Tüm çeviriler (TR, DE, FR, IT vb.) İngilizce referans alınarak ve İngilizce baz dosyasına sadık kalınarak üretilecektir. Herhangi bir tutarsızlık durumunda İngilizce metin geçerlidir.

---

**Version:** 2.2 | **Updated:** 17 Jun 2026 | **Status:** Active
