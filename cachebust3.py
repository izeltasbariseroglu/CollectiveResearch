import os, glob, re

cwd = r'C:\Users\baris.eroglu\Desktop\CollectiveResearch Project\CollectiveResearch'
html_files = glob.glob(os.path.join(cwd, '*.html'))

for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    new_content = re.sub(r'src="assets/js/nav\.js\?v=\d+"', 'src="assets/js/nav.js?v=3"', content)
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)

nav_path = os.path.join(cwd, 'assets', 'js', 'nav.js')
with open(nav_path, 'r', encoding='utf-8') as file:
    nav_content = file.read()

# Update i18n
nav_content = re.sub(r"src = 'assets/js/i18n\.js\?v=\d+'", "src = 'assets/js/i18n.js?v=3'", nav_content)

# Update locales fetch
nav_content = re.sub(r"fetch\('locales/' \+ (\w+) \+ '\.json'\)", r"fetch('locales/' + \1 + '.json?v=3')", nav_content)
nav_content = re.sub(r"fetch\('locales/([a-z]+)\.json'\)", r"fetch('locales/\1.json?v=3')", nav_content)
nav_content = re.sub(r"\.json\?v=\d+", ".json?v=3", nav_content)

with open(nav_path, 'w', encoding='utf-8') as file:
    file.write(nav_content)

print('Added cache busting ?v=3 to HTML, nav.js, and fetch calls')
