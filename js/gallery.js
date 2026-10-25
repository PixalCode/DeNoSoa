/* gallery.js — หน้า 7: โพลารอยด์กระจายเต็มจอ แตะรูปเพื่อดูใหญ่กลางจอ (รูปตั้งใน CONFIG.photos) */

let viewIdx = 0;
let highestGalleryZ = 0;

function buildGallery() {
  const wrap = $('gwrap');
  wrap.innerHTML = '';
  const list = CONFIG.photos;
  highestGalleryZ = 0;
  const top = 90, bottom = 24;
  const cols = Math.max(1, Math.ceil(Math.sqrt(list.length * innerWidth / Math.max(1, innerHeight - top - bottom))));
  const rows = Math.ceil(list.length / cols);
  const cw = innerWidth / cols, ch = (innerHeight - top - bottom) / rows;
  const w = Math.min(cw * .88, Math.max(48, ch - 16), 140);
  const cells = list.map((_, i) => i).sort(() => Math.random() - .5);   // สุ่มตำแหน่งให้กระจาย

  list.forEach((ph, i) => {
    const col = cells[i] % cols, row = Math.floor(cells[i] / cols);
    let x = col * cw + (cw - w) / 2 + (Math.random() - .5) * cw * .8;
    let y = top + row * ch + (ch - w - 16) / 2 + (Math.random() - .5) * ch * .8;
    x = Math.max(4, Math.min(innerWidth - w - 4, x));
    y = Math.max(top - 20, Math.min(innerHeight - w - 24, y));

    const el = document.createElement('div');
    el.className = 'gp';
    el.style.width = w + 'px';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.zIndex = ++highestGalleryZ;
    el.style.setProperty('--r', (Math.random() * 28 - 14) + 'deg');
    el.style.animationDelay = i * 110 + 'ms';   // ทยอยเด้งขึ้นมาทีละรูป
    const img = document.createElement('img');
    img.src = ph.src;
    img.alt = ph.caption || '';
    img.draggable = false;
    el.appendChild(img);

    let startX = 0, startY = 0, startLeft = 0, startTop = 0;
    let dragged = false;
    el.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      startX = e.clientX;
      startY = e.clientY;
      startLeft = el.offsetLeft;
      startTop = el.offsetTop;
      dragged = false;
      el.style.zIndex = ++highestGalleryZ;
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', e => {
      if (!el.hasPointerCapture(e.pointerId)) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (!dragged && Math.hypot(dx, dy) < 5) return;
      dragged = true;
      e.preventDefault();
      el.style.left = Math.max(0, Math.min(innerWidth - el.offsetWidth, startLeft + dx)) + 'px';
      el.style.top = Math.max(0, Math.min(innerHeight - el.offsetHeight, startTop + dy)) + 'px';
    });
    el.addEventListener('pointerup', e => {
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    });
    el.addEventListener('pointercancel', () => { dragged = false; });
    el.addEventListener('click', e => {
      if (dragged) {
        e.preventDefault();
        e.stopPropagation();
        dragged = false;
        return;
      }
      openPhoto(i);
    });
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
