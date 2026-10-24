/* gallery.js — หน้า 7: โพลารอยด์กระจายเต็มจอ แตะรูปเพื่อดูใหญ่กลางจอ (รูปตั้งใน CONFIG.photos) */

let viewIdx = 0;

/* ปุ่มหัวใจ: ใช้รูปจาก CONFIG.heartImage (ตัดเป็นรูปหัวใจ) ถ้าไม่ตั้งไว้ใช้อีโมจิ */
if (CONFIG.heartImage) $('heartImg').src = CONFIG.heartImage;
else $('heart').textContent = '💖';

$('heart').onclick = () => {
  show('s4');
  buildGallery();
};

function buildGallery() {
  const wrap = $('gwrap');
  wrap.innerHTML = '';
  const list = CONFIG.photos;
  const cols = innerWidth < 600 ? 4 : 7;
  const rows = Math.ceil(list.length / cols);
  const top = 90, bottom = 24;
  const cw = innerWidth / cols, ch = (innerHeight - top - bottom) / rows;
  const w = Math.min(cw * 1.3, 140), h = w * 1.2;
  const cells = list.map((_, i) => i).sort(() => Math.random() - .5);   // สุ่มตำแหน่งให้กระจาย

  list.forEach((ph, i) => {
    const col = cells[i] % cols, row = Math.floor(cells[i] / cols);
    let x = col * cw + (cw - w) / 2 + (Math.random() - .5) * cw * .35;
    let y = top + row * ch + (ch - h) / 2 + (Math.random() - .5) * ch * .3;
    x = Math.max(4, Math.min(innerWidth - w - 4, x));
    y = Math.max(top - 20, Math.min(innerHeight - h - 8, y));

    const el = document.createElement('div');
    el.className = 'gp';
    el.style.width = w + 'px';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.zIndex = i + 1;
    el.style.setProperty('--r', (Math.random() * 28 - 14) + 'deg');
    el.style.animationDelay = i * 110 + 'ms';   // ทยอยเด้งขึ้นมาทีละรูป
    const img = document.createElement('img');
    img.src = ph.src;
    img.alt = ph.caption || '';
    el.appendChild(img);
    el.onclick = () => openPhoto(i);
    wrap.appendChild(el);
    if (i % 2 === 0) setTimeout(sfxPop, i * 110);
  });
}

/* ตัวดูรูปใหญ่กลางจอ */
function openPhoto(i) {
  const n = CONFIG.photos.length;
  viewIdx = (i + n) % n;
  const ph = CONFIG.photos[viewIdx];
  $('vimg').src = ph.src;
  $('vcap').textContent = ph.caption || '';
  $('vnum').textContent = (viewIdx + 1) + ' / ' + n;
  $('viewer').classList.add('on');
  sfxSnap();
}

function closePhoto() {
  $('viewer').classList.remove('on');
}

$('viewer').onclick = e => { if (e.target === $('viewer')) closePhoto(); };   // แตะพื้นหลังเพื่อปิด
$('vclose').onclick = closePhoto;
$('vprev').onclick = () => openPhoto(viewIdx - 1);
$('vnext').onclick = () => openPhoto(viewIdx + 1);
document.addEventListener('keydown', e => {
  if (!$('viewer').classList.contains('on')) return;
  if (e.key === 'Escape') closePhoto();
  if (e.key === 'ArrowLeft') openPhoto(viewIdx - 1);
  if (e.key === 'ArrowRight') openPhoto(viewIdx + 1);
});
