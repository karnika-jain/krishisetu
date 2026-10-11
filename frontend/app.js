// KrishiSetu guided flow. The browser only talks to OUR backend (/api/...). No API key is here.
const LANGS = [
  ['hi-IN','हिन्दी','Hindi'], ['en-IN','English','English'], ['kn-IN','ಕನ್ನಡ','Kannada'],
  ['te-IN','తెలుగు','Telugu'], ['ta-IN','தமிழ்','Tamil'], ['ml-IN','മലയാളം','Malayalam'],
  ['mr-IN','मराठी','Marathi'], ['bn-IN','বাংলা','Bengali'], ['gu-IN','ગુજરાતી','Gujarati'],
  ['pa-IN','ਪੰਜਾਬੀ','Punjabi'], ['od-IN','ଓଡ଼ିଆ','Odia']
];
const NEEDS = ['Financial assistance','Crop insurance','Irrigation & water','Seeds & fertilisers','Soil health',
  'Farming equipment','Crop disease & pests','Market access & selling','General government schemes','Other farming needs'];
const STATES = ['Andhra Pradesh','Assam','Bihar','Chhattisgarh','Gujarat','Haryana','Himachal Pradesh','Jharkhand',
  'Karnataka','Kerala','Madhya Pradesh','Maharashtra','Odisha','Punjab','Rajasthan','Tamil Nadu','Telangana',
  'Uttar Pradesh','Uttarakhand','West Bengal','Other'];
const TOTAL = 6;
const S = { mode:null, lang:['en-IN','English','English'], needs:[], photos:0 };
let step = 1, recorder = null, urls = [];
const $ = id => document.getElementById(id);
const esc = t => { const d = document.createElement('div'); d.textContent = t; return d.innerHTML; };

function show(n) {
  step = n;
  document.querySelectorAll('[data-step]').forEach(s => s.hidden = Number(s.dataset.step) !== n);
  $('prog').innerHTML = Array.from({length:TOTAL}, (_, i) => '<i class="' + (i < n ? 'on' : '') + '"></i>').join('');
  $('stepno').textContent = 'Step ' + n + ' of ' + TOTAL;
  window.scrollTo(0, 0);
}
function setMode(m) { S.mode = m; document.body.classList.toggle('voice', m === 'voice'); show(2); }

// Step 1 and 2
document.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => setMode(b.dataset.mode));
LANGS.forEach(l => {
  const b = document.createElement('button');
  b.className = 'opt'; b.innerHTML = '<b>' + esc(l[1]) + '</b><small>' + esc(l[2]) + '</small>';
  b.onclick = () => { S.lang = l; show(3); };
  $('langs').appendChild(b);
});

// Step 3
NEEDS.forEach(n => {
  const b = document.createElement('button');
  b.className = 'chip'; b.textContent = n;
  b.onclick = () => { b.classList.toggle('on'); S.needs = Array.from(document.querySelectorAll('.chip.on')).map(c => c.textContent); };
  $('needs').appendChild(b);
});
$('next3').onclick = () => {
  if (!S.needs.length && !$('words').value.trim()) { $('msg3').textContent = 'Please tap at least one option, or describe it in your own words.'; return; }
  $('msg3').textContent = ''; show(4);
};

// Step 4
$('state').innerHTML = '<option value="">Choose your state</option>' + STATES.map(s => '<option>' + s + '</option>').join('');
$('next4').onclick = () => {
  if (!$('state').value || !$('crop').value.trim()) { $('msg4').textContent = 'Please choose your state and enter your main crop.'; return; }
  $('msg4').textContent = '';
  const rows = [['Name', $('name').value], ['State', $('state').value], ['District', $('district').value],
    ['Main crop', $('crop').value], ['Land', $('land').value ? $('land').value + ' acres' : ''],
    ['Support', S.needs.join(', ')], ['In your words', $('words').value], ['Problem', $('problem').value],
    ['Language', S.lang[1]], ['Photos', String(S.photos)]];
  $('review').innerHTML = rows.filter(r => r[1].trim()).map(r => '<dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd>').join('');
  show(5);
};

// Step 5
$('photos').onchange = e => {
  urls.forEach(u => URL.revokeObjectURL(u)); urls = []; $('thumbs').innerHTML = '';
  Array.from(e.target.files).slice(0, 4).forEach(f => {
    const u = URL.createObjectURL(f); urls.push(u);
    const i = document.createElement('img'); i.src = u; i.alt = 'Selected photo'; $('thumbs').appendChild(i);
  });
  S.photos = urls.length;
};
$('next5').onclick = () => { $('next4').onclick(); show(6); };
document.querySelectorAll('[data-back]').forEach(b => b.onclick = () => show(step - 1));

// Step 6: ask the backend (fixed rules choose the schemes; Sarvam translates the text)
let lastText = '';
$('go').onclick = async () => {
  $('msg6').textContent = 'Finding support...'; $('res').innerHTML = '';
  try {
    const r = await fetch('/api/match', { method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ state:$('state').value, crop:$('crop').value.trim(), needs:S.needs, language:S.lang[0] }) });
    if (!r.ok) throw new Error((await r.json()).detail || 'Server error');
    const d = await r.json(); $('msg6').textContent = ''; render(d);
  } catch (e) { $('msg6').textContent = 'Could not get results: ' + e.message; }
};
function render(d) {
  const L = d.labels;
  if (!d.results.length) { $('res').innerHTML = '<div class="notice">No matching schemes in our list yet for these details. Please check the official government websites.</div>'; return; }
  lastText = '';
  $('res').innerHTML = '<div class="notice">These are possible matches, not confirmed eligibility. Please check the official source before applying.</div>' + d.results.map((s, i) => {
    const why = s.why_t || s.why, docs = s.documents_t || s.documents, nxt = s.next_steps_t || s.next_steps;
    lastText += s.name + '. ' + why.join(' ') + ' ';
    const link = s.official_url ? '<a class="btn" href="' + esc(s.official_url) + '" target="_blank" rel="noopener">Open official source</a>' : '<p class="note">Official link: not added yet.</p>';
    return (s.sample ? '<div class="notice">SAMPLE data for design preview. Not a real scheme.</div>' : '') +
      '<div class="card" style="margin-bottom:16px"><span class="tag">' + esc(s.level) + '</span><h2>' + esc(s.name) + '</h2>' +
      '<h3>' + esc(L[0]) + '</h3><ul>' + why.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>' +
      '<h3>' + esc(L[1]) + '</h3><ul>' + docs.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>' +
      '<h3>' + esc(L[2]) + '</h3><ul>' + nxt.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>' + link + '</div>';
  }).join('') +
    '<div class="nav"><button class="btn amber" id="listen">Listen to answer</button></div><p class="note">' + esc(L[3]) + '</p>';
  $('listen').onclick = speak;
}
async function speak() {
  const b = $('listen'); b.textContent = 'Preparing audio...';
  try {
    const r = await fetch('/api/speak', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ text:lastText, language:S.lang[0] }) });
    if (!r.ok) throw new Error((await r.json()).detail || 'Server error');
    const d = await r.json(); b.textContent = 'Playing...';
    const a = new Audio('data:audio/wav;base64,' + d.audio); a.onended = () => b.textContent = 'Listen to answer'; a.play();
  } catch (e) { b.textContent = 'Listen to answer'; $('msg6').textContent = 'Audio failed: ' + e.message; }
}

// Speak buttons: record, send to /api/transcribe, put the text in the box
document.querySelectorAll('.mic').forEach(btn => btn.onclick = async () => {
  if (recorder) { recorder.stop(); return; }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio:true });
    const chunks = [], rec = new MediaRecorder(stream); recorder = rec;
    rec.ondataavailable = e => chunks.push(e.data);
    rec.onstop = async () => {
      recorder = null; stream.getTracks().forEach(t => t.stop()); btn.textContent = 'Working...';
      const fd = new FormData(); fd.append('audio', new Blob(chunks, { type: rec.mimeType }), 'speech.webm'); fd.append('language', S.lang[0]);
      try {
        const r = await fetch('/api/transcribe', { method:'POST', body:fd });
        if (!r.ok) throw new Error((await r.json()).detail || 'Server error');
        const t = (await r.json()).transcript, box = $(btn.dataset.target);
        box.value = box.value ? box.value + ' ' + t : t;
      } catch (e) { alert('We could not understand the audio: ' + e.message); }
      btn.textContent = 'Tap to speak';
    };
    rec.start(); btn.textContent = 'Stop';
  } catch (e) { alert('Please allow the microphone, or type your answer.'); }
});

if (new URLSearchParams(location.search).get('voice')) setMode('voice'); else show(1);