import glob
import re

for filepath in glob.glob('*.html'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace space + em/en dash + space with comma + space
    content = content.replace(' — ', ', ')
    content = content.replace(' – ', ', ')
    
    # Replace remaining em/en dashes with regular hyphen
    content = content.replace('—', '-')
    content = content.replace('–', '-')
    
    # Also replace &amp; with & (except inside attributes if possible, but safely we can just do text)
    # Actually wait, the user said &amp; was fixed, but let's make sure it's not hardcoded in HTML
    content = content.replace('&amp;', '&')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Dashes and ampersands removed from HTML successfully.')
