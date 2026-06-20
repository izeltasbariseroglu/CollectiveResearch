# Collective Research — Kurumsal Marka Rehberi

**Versiyon:** 2.0  
**Son Güncelleme:** 17 Haziran 2026  
**Durum:** Aktif (5 Dilli Sistem)

---

## İçindekiler

1. [Marka Kimliği](#marka-kimliği)
2. [Logo ve Görsel Kimlik](#logo-ve-görsel-kimlik)
3. [Renk Paleti](#renk-paleti)
4. [Tipografi](#tipografi)
5. [Boşluk ve Grid Sistemi](#boşluk-ve-grid-sistemi)
6. [Bileşen Stili](#bileşen-stili)
7. [Animasyon ve Hareket](#animasyon-ve-hareket)
8. [Kullanım Kılavuzları](#kullanım-kılavuzları)
9. [5 Dilli Sistem](#5-dilli-sistem)
10. [Erişilebilirlik Standartları](#erişilebilirlik-standartları)

---

## Marka Kimliği

### Misyon
Collective Research, bağımsız ve tarafsız bir araştırma girişimidir. Şirketlere dijital dönüşüm yolculuklarında kendilerini nereye konumladıklarını ve endüstrilerine kıyasla nasıl durduklarını anlamaları için açık, samimi ve uygulanabilir bir görünüm sunar.

### Marka Değerleri
- **Bağımsızlık:** Satış pitiçi, danışman lobi veya akademik çıkar yok
- **Şeffaflık:** Soruların hangileri olduğunu, verilerin nasıl işlendiğini ve karşılaştırmaların nasıl hesaplandığını saçık bir şekilde yayınlayın
- **Ağlık:** Her yapılan araştırmaya katılmak özgür, hiçbir taahhüt yok
- **Praktiklik:** Paraflaştırılmamış raporlar değil, doğrudan eylem alınabilir karşılaştırmalar

### Hedef Kitle
- **Birincil:** 50-1000 kişi arasında şirketler (orta ölçekli)
- **İkincil:** Danışmanlar, akademisyenler, teknoloji liderler
- **Tercih Dilleri:** İngilizce, Türkçe, Almanca, Fransızca, İtalyanca

### Ton ve Dil
- **Matematiksel:** Jargon yok, basit İngilizce
- **Tanıyıcı:** Kullanıcı endişelerini tanır (hiçbir satış sınırı, hiçbir veri paylaşımı)
- **Deneyimli:** Araştırma kütüphanesi, metodoloji tamamen ortaya konan
- **Ilerici:** Web-only, modern tasarım, mobil-first

---

## Logo ve Görsel Kimlik

### Logo Açıklaması

**Sembol:** Geometrik bir "ağ düğümü" tasarımı
- **Temel Şekil:** Beşgen (5 noktası = 6 dil/konu/paydaş)
- **İç Yapı:** Merkezi bir düğüm (mor, #7F77DD) 5 çevre düğümüne (turkuaz tonları) bağlı
- **Bağlantılar:** İnce çizgiler (mor #AFA9EC), veri akışı/bağlantı görselleştirir

### Logo Kullanımı

#### Yatay (Standart)
```
[Logo] Collective Research
```
**En küçük boyut:** 20×20 px (favicon)  
**Tavsiye edilen boyut:** 24×24 px (nav), 56×56 px (hero)  
**Maksimum boyut:** Web'de sınırsız (vektör)

#### Dikey (Stacked)
```
[Logo]
Collective Research
```
Dar açılı bağlamlarda kullanılır (kartlar, footer).

#### İkonik (Logo Sadece)
Favicon, uygulama ikonu, sosyal medya profil.  
**Boyut:** 24×24 px ila 512×512 px

### Logo Renkler

| Kullanım | Palet |
|----------|-------|
| **Açık Arka Plan** (varsayılan) | Merkez: Mor (#7F77DD), Çevre: Turkuaz (#1D9E75), Bağlantılar: Mor-açık (#AFA9EC) |
| **Koyu Arka Plan** | Beyaz (#FFFFFF) |
| **Tek Renkli** | Turkuaz (#1D9E75) |
| **Monokrom** | Charcoal (#2C2C2A) |

### Logo Alanı (Boş Alan)

Logo'nun etrafında minimum **12 px** boşluk bırakın. Diğer öğelerle çakışmaz.

---

## Renk Paleti

### Birincil Renkler

#### Turkuaz (Güven & Erişilebilirlik)
```
Adı:          Turkuaz
Kod:          #1D9E75
RGB:          29, 158, 117
HSL:          152°, 69%, 37%
CMYK:         82, 0, 26, 38%
Kullanım:     CTA düğmeleri, aktif durumlar, vurgu
Erişilebilir: WCAG AA✓ (beyaz metin)
```

**Türevleri (Ağ Şemı):**
- **Turkuaz-Açık-1:** #5DCAA5 (hover, ikincil öğeler)
- **Turkuaz-Açık-2:** #9FE1CB (arka plan tonu, alt uyarı)

#### Mor (Bilim & Netlik)
```
Adı:          Mor
Kod:          #7F77DD
RGB:          127, 119, 221
HSL:          247°, 64%, 67%
CMYK:         43, 46, 0, 13%
Kullanım:     Merkez vurgular, veriler noktaları, ağ bağlantıları
Erişilebilir: WCAG AA✗ (beyaz metin — contrast yetersiz)
```

**Türevleri:**
- **Mor-Açık:** #AFA9EC (bağlantı çizgileri, alt vurgular)

### İkincil Renkler

#### Kömür (Metin & Yapı)
```
Adı:          Kömür
Kod:          #2C2C2A
RGB:          44, 44, 42
Kullanım:     Başlıklar, metin gövdesi, navigasyon
Erişilebilir: WCAG AAA✓ (tüm arka planlar)
```

#### Gri-Metin (Yan Bilgi)
```
Adı:          Gri-Metin
Kod:          #6B6A65
RGB:          107, 106, 101
Kullanım:     Sekonder metin, açıklamalar
Erişilebilir: WCAG AA✓ (14pt+)
```

#### Gri-Soluk (İşaretler & Sınırlar)
```
Adı:          Gri-Soluk
Kod:          #9C9A92
RGB:          156, 154, 146
Kullanım:     Metin yer tutucu, devre dışı durum, açılış
Erişilebilir: WCAG AA✗ (arka plan için)
```

#### Sınır (Ayrıcı Çizgiler)
```
Adı:          Sınır
Kod:          #E7E5DE
RGB:          231, 229, 222
Kullanım:     Input sınırları, kart kenarlıkları, dividerler
Contrast:     Açık arka planda %20
```

### Arka Plan Tonları

| Ad | Kod | RGB | Kullanım |
|----|-----|-----|----------|
| **Beyaz** | #FFFFFF | 255, 255, 255 | Sayfa, modal, kart arka planı |
| **Yumuşak** | #FAF9F6 | 250, 249, 246 | Section, footer arka plan |
| **Başarı-BG** | #E1F5EE | 225, 245, 238 | Başarı mesajları, uyarılar |
| **İkincil-BG** | #F3F1FF | 243, 241, 255 | Mor-ilişkili arka plan |
| **Açık-BG** | #F1EFE8 | 241, 239, 232 | Alternatif section arka planı |

### Renk Sistemi Kuralları

1. **Kontrastı Kontrol Edin:** Metin + arka plan ≥ WCAG AA (4.5:1 normal metin)
2. **Renk Körlüğü:** Sadece renge güvenmeyin — şekil/simgeler de kullanın
3. **Maksimum 5 Ana Renk:** Paleti sınıf tutun (marka tutarlılığı)
4. **Açık/Koyu Mod:** Koyu mod desteklenmiyor — açık tema zorunlu
5. **Saturation:** Turkuaz ve Mor, sayfada her ikisi de %50 üzerinde şırıltılı olmamalıdır

---

## Tipografi

### Font Ailesi

#### Birincil Font: Inter
```
Adı:          Inter
Sağlayıcı:    Google Fonts
Stil:         Sans-serif, Humanist
Ağırlıklar:   400 (Regular), 500 (Medium)
Boyutlar:     Tüm boyutlar (ölçeklenebilir)
Yükleme:      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet">
Fallback:     -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif
```

**Neden Inter?**
- Geometrik ve açık (danışman güveni)
- Mükemmel web okunabilirliği (16px)
- Uluslararası karakterler tamamen desteklenir (6 dil)
- Değişken font (gelecek ölçekleme için hazır)

### Tipografi Ölçeği

| Bağlam | Boyut | Ağırlık | Satır Yüksekliği | Harf Aralığı | Kullanım |
|--------|-------|--------|------------------|--------------|----------|
| **H1** | 32px | 500 | 1.35 | -0.01em | Sayfa başlıkları |
| **H2** | 24px | 500 | 1.4 | -0.005em | Section başlıkları |
| **H3** | 17px | 500 | 1.5 | 0 | Kart başlıkları |
| **Body** | 15px | 400 | 1.7 | 0 | Normal metin |
| **Small** | 13px | 400 | 1.6 | 0 | İkincil metin, açıklamalar |
| **Tiny** | 12px | 400 | 1.5 | 0.05em | Etiket, footer |
| **Label** | 12px | 500 | 1.5 | 0 | Form etiketleri |
| **Button** | 14px | 500 | 1.4 | 0 | İşlem düğmeleri |
| **Code** | 13px | 400 | 1.6 | 0 | Monospace (fallback: Courier) |

### Tipografi Seçimi Kuralları

1. **Başlık Hiyerarşisi:** H1 > H2 > H3 > Body
2. **Bol Boşluk:** Başlık-alttaki `margin-bottom` = 16-24px
3. **Satır Uzunluğu:** 45-75 karakter (680px max-width)
4. **Yazı Boyutu Sıçraması:** Minimum +2px öğeler arasında
5. **Ağırlık:** Regular ve Medium sadece — Bold/Light yok
6. **Kapitallar:** Kelimelerin başında sadece (titles) — TÜMÜ CAPS yok

### Kullanım Örnekleri

```html
<!-- H1: Ana Başlık -->
<h1>How does your company's digital maturity compare?</h1>
<!-- 32px, 500 weight, -0.01em letter-spacing -->

<!-- H2: Section Başlığı -->
<h2>Built together, useful for everyone</h2>
<!-- 24px, 500 weight -->

<!-- Body Metin -->
<p>Collective Research is running a confidential benchmark study on digital transformation.</p>
<!-- 15px, 400 weight, 1.7 line-height -->

<!-- Small/Secondary -->
<p class="small">Be among the first to know when the survey launches.</p>
<!-- 13px, 400 weight, gray-text renk -->

<!-- Label -->
<label>Organization name</label>
<!-- 12px, 500 weight, charcoal renk -->
```

---

## Boşluk ve Grid Sistemi

### Boşluk Ölçeği (8px Temelinde)

| Değer | px | Kullanım |
|-------|----|---------| 
| **xs** | 4px | Simgeler arası, inline öğeler |
| **sm** | 8px | Form alanları arası |
| **md** | 16px | Kart içi padding, küçük açılış |
| **lg** | 24px | Section arasında, modal padding |
| **xl** | 32px | Sayfa padding, büyük section arasında |
| **2xl** | 48px | Hero section, üst başlık arasında |
| **3xl** | 64px | Sayfa başlangıç/bitiş padding |

### Margin Kuralları

```css
/* Section arası */
section { margin-bottom: 48px; }

/* Başlık + alt metin */
h1 { margin-bottom: 16px; }
h1 + p { margin-bottom: 32px; }

/* Kart padding */
.card { padding: 20px; } /* mobilde: 16px */

/* Form alanları */
.form-field { margin-bottom: 16px; }

/* Buton padding */
button { padding: 11px 18px; } /* 8px temelinde */
```

### Padding Sistemi

| Kontekst | Padding | Notlar |
|----------|---------|--------|
| **Nav** | 24px (desktop), 18px (tablet), 16px (mobile) | Yatay simetrik |
| **.page** | 32px (desktop), 20px (tablet), 16px (mobile) | Sayfa yanlık boşluğu |
| **Button** | 12px (v), 22px (h) | Düğme iç |
| **Card** | 20px | İç padding |
| **Input** | 10px (v), 12px (h) | Form girişi |
| **Modal** | 32px | Modal içerik |

### Grid & Layout

#### Sayfa Genişliği
```css
--page-width: 880px;   /* max-width konteyner */
--text-width: 680px;   /* h1+p maksimum width */
margin: 0 auto;        /* Ortalı */
padding: 0 32px;       /* Kenar boşluğu */
```

#### Raster Sistemi

**Desktop (880px):**
- 1 kolona (tam gen): 100%
- 2 kolonlu grid: 1fr 1fr (gap: 32px)
- 3 kolonlu grid: 1fr 1fr 1fr (gap: 28px)
- 4 kolonlu grid: 1fr 1fr 1fr 1fr (gap: 20px)

**Tablet (768px):**
- Tüm 2-kolon ızgarası → 1 kolona
- Gap: 24px

**Mobil (640px):**
- Tüm ızgaralar → tek kolona
- Gap: 16px
- Padding: 16px

```css
/* Responsive Grid Örneği */
.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* desktop */
  gap: 28px;
}

@media (max-width: 768px) {
  .steps { grid-template-columns: 1fr; gap: 24px; }
}
```

---

## Bileşen Stili

### Butonlar

#### CTA Düğmesi (Birincil)
```css
background: var(--teal);          /* #1D9E75 */
color: #FFFFFF;
border: 1px solid var(--teal);
padding: 12px 22px;
border-radius: 10px;
font-weight: 500;
font-size: 14px;
cursor: pointer;
transition: all 0.15s ease;
```

**Durumlar:**
- **Normal:** Turkuaz arka plan
- **Hover:** Koyu turkuaz (#178a64) + translateY(-1px)
- **Odak:** Turkuaz sınır + 3px outer ring (rgba(29,158,117,0.12))
- **Aktif:** Koyu turkuaz, translateY(0px)
- **Devre dışı:** Gri-soluk (#9C9A92), cursor: not-allowed

#### İkincil Düğme
```css
background: #FFFFFF;
color: var(--gray-text);
border: 1px solid var(--border);
padding: 11px 18px;
border-radius: 10px;
transition: all 0.15s ease;
```

**Hover:** Turkuaz sınır, turkuaz metin

### Form Kontrolleri

#### Text Input / Textarea
```css
font-family: inherit;
font-size: 14px;
padding: 10px 12px;
border: 1px solid var(--border);
border-radius: 10px;
background: #FFFFFF;
color: var(--charcoal);
transition: border-color 0.2s, box-shadow 0.2s;
```

**Durumlar:**
- **Normal:** Gri sınır
- **Odak:** Turkuaz sınır + 3px hakka (rgba(29,158,117,0.12))
- **Hata:** Kırmızı sınır (#E53935)
- **Devre dışı:** Gri arka plan (#F9F9F9), cursor: not-allowed
- **Placeholder:** Gri-soluk metin (#9C9A92)

#### Select / Dropdown
```css
width: 100%;
padding: 10px 12px;
border: 1px solid var(--border);
border-radius: 10px;
background: #FFFFFF;
color: var(--charcoal);
font-family: inherit;
font-size: 14px;
```

**Custom Oku:** SVG aşağı oku (sağ tarafta, 12px)

#### Checkbox / Radio
```css
appearance: none;
width: 20px;
height: 20px;
border: 2px solid var(--border);
border-radius: 4px (checkbox) / 50% (radio);
cursor: pointer;
transition: all 0.15s ease;
```

**Seçildiğinde:** Turkuaz arka plan, beyaz tik/daire

#### Label
```css
display: block;
font-size: 12px;
font-weight: 500;
color: var(--charcoal);
margin-bottom: 6px;
```

### Kartlar

```css
border: 1px solid var(--border);
border-radius: 10px;
padding: 20px;
background: #FFFFFF;
transition: transform 0.2s ease, box-shadow 0.2s ease;
```

**Hover:** translateY(-2px) + 0 6px 20px rgba(0,0,0,0.05)

### Modallar

```css
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: #FFFFFF;
border-radius: 10px;
max-width: 420px;
width: 100%;
padding: 32px;
box-shadow: 0 20px 60px rgba(0,0,0,0.15);
z-index: 201;
animation: fadeInUp 0.3s ease-out;
```

**Arka plan (Overlay):**
```css
position: fixed;
inset: 0;
background: rgba(44,44,42,0.4);     /* charcoal 40% opaklık */
z-index: 200;
```

### Sınırlar & Dividerler

```css
border: 1px solid var(--border);    /* #E7E5DE */
border-top: 1px solid var(--border);
border-bottom: 1px solid var(--border);
```

**Yatay Divider:**
```css
hr {
  border: none;
  border-top: 1px solid var(--border);
  margin: 24px 0;
}
```

### Alert / Mesajlar

#### Başarı
```css
background: var(--bg-success);      /* #E1F5EE */
color: #1D9E75;
padding: 12px 16px;
border-radius: 10px;
border-left: 4px solid #1D9E75;
```

#### Hata
```css
background: #FFEBEE;
color: #E53935;
padding: 12px 16px;
border-radius: 10px;
border-left: 4px solid #E53935;
```

#### Bilgi
```css
background: var(--bg-secondary);    /* #F3F1FF */
color: #7F77DD;
padding: 12px 16px;
border-radius: 10px;
border-left: 4px solid #7F77DD;
```

---

## Animasyon ve Hareket

### Geçiş Süresi

| Tür | Süre | Easing | Kullanım |
|-----|------|--------|----------|
| **Hızlı** | 0.15s | ease | Button hover, input focus |
| **Normal** | 0.2s | ease | Form state, modal overlay |
| **Yavaş** | 0.3s | ease-out | Modal giriş, page fade |
| **Çok Yavaş** | 0.7s | ease-out | Hero fade-in dizileri |

### Ana Animasyonlar

#### Fade-In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
animation: fadeIn 0.3s ease-out forwards;
```

#### Fade-In-Up
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
animation: fadeInUp 0.7s ease-out forwards;
```

**Kullanım:** Hero başlığı, kart staggered (delay: 0.1s, 0.2s, 0.3s…)

#### Smooth Scroll
```css
html { scroll-behavior: smooth; }
```

#### Focus Ring
```css
outline: 3px solid rgba(29,158,117,0.3);
outline-offset: 2px;
```

### Hareket İlkeleri

1. **Kademeli:** Animasyonlar yukarıdan aşağıya, soldan sağa (doğal okuma sırası)
2. **Kasıtlı:** Sadece anlam katma animasyonu (dekoratif değil)
3. **Saygılı:** `prefers-reduced-motion` madde ise animasyonları devre dışı bırakın

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## Kullanım Kılavuzları

### Logo Kullanma

✅ **Yapılacak:**
- Logo solo veya marka adıyla
- Minimum boşluk (12px) etrafında
- Açık arka planlar
- Vektör formatı (SVG)

❌ **Yapılmayacak:**
- Logo çevirme/çarpıtma
- Rengi değiştirme (dışında monokrom)
- Komponent içine sıkıştırma
- Raster (PNG/JPG) kullanma
- Ön planda diğer öğelerle karıştırma

### Renk Kullanma

✅ **Yapılacak:**
- Turkuaz CTA düğmeleri için
- Mor veri noktaları/vurgular için
- Şeffaf arka planlar (rgba) derir

❌ **Yapılmayacak:**
- Mor metni beyaz arka plan üzerinde (kontrastı kötü)
- 5'ten fazla rengi aynı anda
- Renge yalnız güvenme (şekil+renk)
- Gradyan (dışında hover durumunda)

### Tipografi Kullanma

✅ **Yapılacak:**
- Inter Regular + Medium sadece
- H1 başlık hiyerarşisinden
- Maksimum 680px metin genişliği
- 15px+ metin boyutu (erişilebilirlik)

❌ **Yapılmayacak:**
- Diğer fontlar (varsa: fallback)
- H5/H6 başlıklar
- 45+ karakterden uzun satırlar
- Tümü CAPS veya tümü küçük

### Boşluk Kullanma

✅ **Yapılacak:**
- 8px temelinde boşluk
- Section'lar arasında 48px+
- Kart içi padding 20px

❌ **Yapılmayacak:**
- Rasgele pixel (13px, 27px)
- Sıkışık layout (< 16px padding)
- Geniş boşluk (> 80px) hususunda justifikasyon olmadan

---

## 5 Dilli Sistem

### Desteklenen Diller

| Kod | Dil | Bölge | Durum |
|-----|-----|-------|-------|
| **en** | English | Global | ✅ Temel |
| **tr** | Türkçe | Türkiye | ✅ Tam |
| **de** | Deutsch | Almanya/Avusturya | ✅ Tam |
| **fr** | Français | Fransa/Belçika | ✅ Tam |
| **it** | Italiano | İtalya | ✅ Tam |

### Dil Seçim Düğmesi (Switcher)

**Konum:** Nav sağ üst  
**Stil:** 5 mini buton ([EN] [TR] [DE] [FR] [IT])  
**Aktif Durum:** Turkuaz arka plan + beyaz metin  
**Hover:** Turkuaz sınır (aktif değilse)  
**Mobil:** Kompakt (< 768px), Ultra-kompakt (< 640px)

```css
.language-switcher {
  display: flex;
  gap: 4px;
  align-items: center;
  margin-left: auto;
}

.lang-btn {
  padding: 6px 10px;           /* desktop */
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray-text);
  border: 1px solid var(--border);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.lang-btn.active {
  background: var(--teal);
  color: #fff;
  border-color: var(--teal);
}

@media (max-width: 768px) {
  .lang-btn { padding: 4px 6px; font-size: 9px; }
}

@media (max-width: 640px) {
  .lang-btn { padding: 3px 5px; font-size: 8px; }
}
```

### i18n Mimarisi

**JSON Yapısı:** Burada /en.json örneği:

```json
{
  "common": {
    "appName": "Collective Research",
    "tagline": "Independent digital maturity benchmarking",
    "privacyFooter": "..."
  },
  "nav": {
    "home": "Home",
    "howItWorks": "How it works",
    "pricing": "Pricing",
    "privacy": "Privacy",
    "languageLabel": "Language"
  },
  "homepage": {
    "heroTitle": "How does your company's digital maturity compare...",
    "step1Desc": "...",
    "ctaButton": "Notify me",
    "modal": { ... }
  }
}
```

**Çeviri Yönergeleri:**

1. **Anahtarları çevirmeyin** — Sadece değerleri
2. **Yer tutucuları koru** — {0001} vb. değişmesin
3. **Tonla uy** — Bağımsız, açık, uygulanabilir
4. **Karakter sayımını kontrol et** — Uzun tercümeler layout kıracak

**Dil Değiştirme (JS):**
```javascript
window.i18n.switchLanguage('tr');  // Türkçeye geç
window.i18n.get('nav.home');        // "Ev" döndürür
```

---

## Erişilebilirlik Standartları

### WCAG 2.1 AA Uyumluluğu

✅ **Renk Kontrastı**
- Normal metin (14px): 4.5:1 minimum
- Büyük metin (18px+): 3:1 minimum
- Etkili metin: Turkuaz + beyaz ✓, Mor + beyaz ✗

✅ **Klavye Erişimi**
- Tüm etkileşimlere Tab/Enter erişimi
- Focus ring görünür (3px halo)
- Modalda odak tuzağı (Esc kapanır)

✅ **Görüntü Metni**
- SVG logolar: `aria-hidden="true"`
- Simgeler: `role="img"` + `aria-label="..."`
- Dekoratif: `aria-hidden="true"`

✅ **Form Etiketleri**
- Tüm inputlara `<label for="id">`
- Hata mesajları `aria-live="polite"`
- Gerekli alanlar `required` + `aria-required="true"`

✅ **Linked Metin**
- "Tıkla buraya" yerine "Fiyatlandırmayı görüntüle"
- Bağlantı rengi ≠ tek renk (alt çizgi, bold)

✅ **Sesli Okuyucu**
- Sayfa başlıkları `<h1>`
- Landmark'lar: `<nav>`, `<main>`, `<footer>`
- Tablo başlıkları `<th scope="col">`

### Mobil Erişilebilirliği

- **Min tıklama boyutu:** 44×44 px (VE ÜST + 12px padding)
- **Min yazı boyutu:** 12px (mobilde 14px idealdir)
- **Yatay scroll yok:** 100% responsive
- **Zoom destekleniyor:** Tüm tarayıcılarda maksimum 200%

### Test Talimatları

1. **Otomatik:** axe DevTools, WAVE, Lighthouse
2. **Manuel:** Tamamen klavye ile gezin (hiç mouse yok)
3. **Screen Reader:** NVDA (Windows), JAWS (test)
4. **Zoom:** Sayfayı %200'e yaklaştır
5. **Kontrastı:** Renk körlüğü simülatörü (Coblis)

---

## Dosya Yapısı & Kaynaklar

```
collective-research/
├── index.html              (Ana sayfa)
├── how-it-works.html       (Nasıl Çalışır)
├── pricing.html            (Fiyatlandırma)
├── privacy.html            (Gizlilik)
├── support.html            (Destek/SSS)
├── 404.html                (Hata sayfası)
├── sample-report.html      (Örnek rapor)
├── styles.css              (Tüm stilleri içerir)
├── i18n.js                 (6 dil yöneticisi)
├── favicon.svg             (24×24 logo)
├── og-image.svg            (1200×630 sosyal paylaş)
├── en.json                 (İngilizce çeviriler)
├── tr.json                 (Türkçe çeviriler)
├── de.json                 (Almanca çeviriler)
├── fr.json                 (Fransızca çeviriler)
├── it.json                 (İtalyanca çeviriler)
└── BRAND-GUIDE.md          (Bu dosya)
```

---

## Sürüm Geçmişi

| Versiyon | Tarih | Değişiklikler |
|----------|-------|----------------|
| **2.0** | 17 Haz 2026 | Tam 6 dilli sistem, CSS revizyonu, erişilebilirlik AA |
| **1.0** | 1 Nis 2026 | İlk marka rehberi, İngilizce + Türkçe |

---

## İletişim & Sorular

**Marka Soruları:** brand@collectiveresearch.net  
**Tasarım Sorunu:** design@collectiveresearch.net  
**Teknik Sorun:** tech@collectiveresearch.net

---

## Lisans

Bu marka rehberi, Collective Research'ün mülkiyetidir. Kullananlar, telif hakkı doğrultusunda bu malzemeleri kullanmalıdır.

**Sürüm:** 2.0 | Son Güncelleme: 17 Haziran 2026
