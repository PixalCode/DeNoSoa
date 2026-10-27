/* popups.js — หน้ากล่องข้อความเด้งเต็มจอ (ต่อจากแชท)
   ลำดับ: Alert "เปิดอ่าน" → กล่องเด้งทีละกล่อง (กดดู/ลากย้ายได้) → ปุ่ม "กดตรงนี้สิ" → นับถอยหลัง (ending.js) */

let topZ = 100;                           // ลำดับชั้นของกล่องที่ถูกหยิบล่าสุด (อยู่บนสุด)
let openedBox = null;

/* Alert ให้กด "เปิดอ่าน" ก่อน (HTML อยู่ใน index.html id="gate") */
function popupGate() {
  return new Promise(resolve => {
    $('gate').classList.add('on');
    sfxNotif();
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    $('gateBtn').onclick = () => {
      $('gate').classList.remove('on');
      resolve();
    };
  });
}

async function popupFlood() {
  if (!CONFIG.popupCount) return;
  await popupGate();

  const layer = $('popLayer');
  layer.innerHTML = '<div id="popCount"></div><div id="popHelp">แตะกล่องเพื่ออ่านข้อความแบบเต็ม · ลากเพื่อย้ายกล่อง<br>อ่านเสร็จแล้วกด “กดตรงนี้สิ” เพื่อไปต่อ</div>';
  layer.classList.remove('locked');
  layer.classList.add('on');
  topZ = 100;

  const total = Math.min(CONFIG.popupCount, CONFIG.popups.length);
  for (let i = 0; i < total; i++) {
    layer.appendChild(makeBox(CONFIG.popups[i], i));
    $('popCount').textContent = 'ข้อความใหม่ ' + (i + 1);
    sfxPop();
    if (navigator.vibrate && i % 4 === 0) navigator.vibrate(20);
    await wait(Math.max(110, 420 - i * 14)); // เริ่มช้า แล้วเร็วขึ้นเรื่อยๆ
  }

  await wait(500);
  await waitForGo();                        // รอจนกด "กดตรงนี้สิ"
  layer.classList.add('locked');            // หลังกดแล้วกล่องลากไม่ได้อีก
}

/* ปุ่ม "กดตรงนี้สิ" — กดแล้วถึงจะเริ่มนับถอยหลัง */
function waitForGo() {
  return new Promise(resolve => {
    const btn = $('goBtn');
    btn.classList.add('on');
    sfxSnap();
    btn.onclick = () => {
      btn.classList.remove('on');
      resolve();
    };
  });
}

/* p = { n: ชื่อ, img: รูป, c: สีพื้นหลังรูป, t: ข้อความ } จาก CONFIG.popups */
function makeBox(p, i) {
  const box = document.createElement('div');
  box.className = 'mbox';
  const w = Math.min(innerWidth * 0.78, 280);
  box.style.width = w + 'px';
  box.style.left = Math.random() * (innerWidth - w) + 'px';
  box.style.top = 60 + Math.random() * Math.max(0, innerHeight - 220) + 'px';
  box.style.setProperty('--r', (Math.random() * 8 - 4) + 'deg');
  box.style.zIndex = 10 + i;

  const bar = document.createElement('div');
  bar.className = 'mbar';
  const title = document.createElement('span');
  title.textContent = p.n;
  const close = document.createElement('b');
  close.textContent = '✕';
  bar.append(title, close);

  const body = document.createElement('div');
  body.className = 'mbody';
  body.append(makeAvatar(p), makeText(p.t));

  const ok = document.createElement('div');
  ok.className = 'mok';
  ok.textContent = 'กดดูข้อความแบบเต็ม';

  box.append(bar, body, ok);
  makeDraggable(box, p);
  return box;
}

function makeAvatar(p) {
  const av = document.createElement('div');
  av.className = 'mav';
  av.style.backgroundColor = p.c;
  if (p.img) av.style.backgroundImage = 'url(' + p.img + ')';
  return av;
}

function makeText(t) {
  const el = document.createElement('p');
  el.textContent = t;
  return el;
}

/* ลากย้ายกล่องได้ / แตะเฉยๆ (ไม่ลาก) = เปิดดูใหญ่ๆ */
function makeDraggable(box, p) {
  let sx, sy, ox, oy, moved = false;
  box.addEventListener('pointerdown', e => {
    box.setPointerCapture(e.pointerId);
    sx = e.clientX; sy = e.clientY;
    ox = box.offsetLeft; oy = box.offsetTop;
    moved = false;
    box.style.zIndex = ++topZ;              // ยกกล่องที่จับขึ้นมาอยู่บนสุด
    box.classList.add('drag');
  });
  box.addEventListener('pointermove', e => {
    if (!box.hasPointerCapture(e.pointerId)) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (Math.abs(dx) + Math.abs(dy) > 6) moved = true;
    box.style.left = ox + dx + 'px';
    box.style.top = oy + dy + 'px';
  });
  box.addEventListener('pointerup', () => {
    box.classList.remove('drag');
    if (!moved) openMsg(p, box);
  });
  box.addEventListener('pointercancel', () => box.classList.remove('drag'));
}

/* ดูกล่องข้อความแบบใหญ่ๆ กลางจอ */
function openMsg(p, sourceBox) {
  const v = $('msgView');
  openedBox = sourceBox;
  v.innerHTML = '';
  const box = document.createElement('div');
  box.className = 'mbox viewbox';

  const bar = document.createElement('div');
  bar.className = 'mbar';
  const title = document.createElement('span');
  title.textContent = p.n;
  const x = document.createElement('b');
  x.textContent = '✕';
  x.onclick = closeMsg;
  bar.append(title, x);

  const body = document.createElement('div');
  body.className = 'mbody';
  body.append(makeAvatar(p), makeText(p.t));

  const ok = document.createElement('button');
  ok.className = 'mok';
  ok.textContent = 'ปิด';
  ok.onclick = closeMsg;

  box.append(bar, body, ok);
  v.append(box);
  v.onclick = e => { if (e.target === v) closeMsg(); };
  v.classList.add('on');
  sfxSnap();
}

function closeMsg() {
  $('msgView').classList.remove('on');
  if (openedBox) {
    openedBox.remove();
    openedBox = null;
  }
}
