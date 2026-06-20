import os, re

cwd = r'C:\Users\baris.eroglu\Desktop\CollectiveResearch Project\CollectiveResearch'

# 1. Delete cookies.html if exists
cookies_path = os.path.join(cwd, 'cookies.html')
if os.path.exists(cookies_path):
    os.remove(cookies_path)
    print('Deleted cookies.html')

# 2. Fix terms.html meta tags
terms_path = os.path.join(cwd, 'terms.html')
if os.path.exists(terms_path):
    with open(terms_path, 'r', encoding='utf-8') as f:
        terms = f.read()
    terms = terms.replace('<link rel="canonical" href="https://collectiveresearch.net/privacy.html">', '<link rel="canonical" href="https://collectiveresearch.net/terms.html">')
    terms = terms.replace('<meta property="og:title" content="Privacy Policy | Collective Research">', '<meta property="og:title" content="Terms of Service | Collective Research">')
    terms = terms.replace('<meta property="og:url" content="https://collectiveresearch.net/privacy.html">', '<meta property="og:url" content="https://collectiveresearch.net/terms.html">')
    terms = terms.replace('<meta property="twitter:title" content="Privacy Policy | Collective Research">', '<meta property="twitter:title" content="Terms of Service | Collective Research">')
    terms = re.sub(r'<meta property="og:description" content="Learn how Collective Research protects your data[^"]+">', '<meta property="og:description" content="Terms of Service for Collective Research">', terms)
    terms = re.sub(r'<meta property="twitter:description" content="Learn how Collective Research protects your data[^"]+">', '<meta property="twitter:description" content="Terms of Service for Collective Research">', terms)
    with open(terms_path, 'w', encoding='utf-8') as f:
        f.write(terms)
    print('Fixed terms.html meta tags')

# 3. Fix cookie.html meta tags
cookie_path = os.path.join(cwd, 'cookie.html')
if os.path.exists(cookie_path):
    with open(cookie_path, 'r', encoding='utf-8') as f:
        cookie = f.read()
    cookie = cookie.replace('<link rel="canonical" href="https://collectiveresearch.net/privacy.html">', '<link rel="canonical" href="https://collectiveresearch.net/cookie.html">')
    cookie = cookie.replace('<meta property="og:title" content="Privacy Policy | Collective Research">', '<meta property="og:title" content="Cookie Policy | Collective Research">')
    cookie = cookie.replace('<meta property="og:url" content="https://collectiveresearch.net/privacy.html">', '<meta property="og:url" content="https://collectiveresearch.net/cookie.html">')
    cookie = cookie.replace('<meta property="twitter:title" content="Privacy Policy | Collective Research">', '<meta property="twitter:title" content="Cookie Policy | Collective Research">')
    cookie = re.sub(r'<meta property="og:description" content="Learn how Collective Research protects your data[^"]+">', '<meta property="og:description" content="Cookie Policy for Collective Research">', cookie)
    cookie = re.sub(r'<meta property="twitter:description" content="Learn how Collective Research protects your data[^"]+">', '<meta property="twitter:description" content="Cookie Policy for Collective Research">', cookie)
    with open(cookie_path, 'w', encoding='utf-8') as f:
        f.write(cookie)
    print('Fixed cookie.html meta tags')

# 4. Fix sample-report.html Spanish language loading
sample_path = os.path.join(cwd, 'sample-report.html')
if os.path.exists(sample_path):
    with open(sample_path, 'r', encoding='utf-8') as f:
        sample = f.read()
    sample = re.sub(r"const langs = \['en', 'de', 'fr', 'it', 'tr'\];", "const langs = ['en', 'de', 'fr', 'it', 'tr', 'es'];", sample)
    with open(sample_path, 'w', encoding='utf-8') as f:
        f.write(sample)
    print('Fixed sample-report.html langs array')

# 5. Fix BRAND-QUICK-REFERENCE.md and BRAND-GUIDE.md
ref_path = os.path.join(cwd, 'docs', 'BRAND-QUICK-REFERENCE.md')
guide_path = os.path.join(cwd, 'docs', 'BRAND-GUIDE.md')

if os.path.exists(ref_path):
    with open(ref_path, 'r', encoding='utf-8') as f:
        ref = f.read()
    ref = ref.replace('5 dilli', '6 dilli')
    ref = ref.replace('5 dil', '6 dil')
    # Use re.sub with DOTALL to match across lines if needed, or just replace simple strings
    ref = re.sub(r'collectiveresearchs\.com[\s\S]*?(?=\n\n|\Z)', 'collectiveresearch.net domaini tüm frontend maillerinde kullanılır. coresearchs.com outreach içindir.', ref)
    ref = re.sub(r'privacy@collectiveresearchs\.com', 'privacy@collectiveresearch.net', ref)
    with open(ref_path, 'w', encoding='utf-8') as f:
        f.write(ref)
    print('Fixed BRAND-QUICK-REFERENCE.md')

if os.path.exists(guide_path):
    with open(guide_path, 'r', encoding='utf-8') as f:
        guide = f.read()
    guide = guide.replace('5 dilli', '6 dilli')
    guide = guide.replace('5 dil', '6 dil')
    with open(guide_path, 'w', encoding='utf-8') as f:
        f.write(guide)
    print('Fixed BRAND-GUIDE.md')
