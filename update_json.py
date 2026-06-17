import json

file_path = 'C:/Users/baris.eroglu/Desktop/CollectiveResearch Project/CollectiveResearch/locales/en.json'
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

if 'homepage' not in data: data['homepage'] = {}
data['homepage']['emailPlaceholder'] = 'you@company.com'

if 'modal' not in data: data['modal'] = {}
data['modal']['roleLegend'] = "I'm signing up as a..."
data['modal']['roleCompany'] = 'A company interested in taking part'
data['modal']['roleConsultant'] = 'A consultant / advisor'
data['modal']['roleAcademic'] = 'An academic / researcher'
data['modal']['orgName'] = 'Organization name'
data['modal']['sector'] = 'Sector / industry'
data['modal']['cancelButton'] = 'Cancel'
data['modal']['submitButton'] = 'Join the list'
data['modal']['successTitle'] = "You're on the list"
data['modal']['successText'] = "Thanks, we'll email you as soon as the survey launches."
data['modal']['doneButton'] = 'Done'

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4)
