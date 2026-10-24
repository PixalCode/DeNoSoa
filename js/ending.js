/* ending.js — หน้า 5-6: นับถอยหลัง (กล่องข้อความ) → หัวใจเด้งขึ้นจากใต้กองกล่อง → กล่องปลิวหาย → ระเบิดหัวใจ */

const cv = $('fx'), cx = cv.getContext('2d');
const hearts = [];                        // อนุภาคหัวใจทั้งหมดที่กำลังลอยอยู่
const HEART_EMOJI = ['💖', '💗', '💕', '❤️', '💘'];
let looping = false;

/* 5 นับถอยหลัง: กล่องคำเตือนวางทับกองกล่องข้อความ */
async function selfDestruct() {
  $('phone').classList.add('vib');
  musicStop();
  const buzz = setInterval(() => navigator.vibrate && navigator.vibrate(150), 300);
  $('alert').classList.add('on');
  for (let i = CONFIG.countdown; i > 0; i--) {
    $('cd').textContent = i;
    sfxTick(i === 1);
    await wait(1000);
  }
  clearInterval(buzz);
  $('alert').classList.remove('on');
  await heartsFromUnderBoxes();
  explode();
}

/* 6a หัวใจเด้งขึ้นมาจากใต้กองกล่องข้อความ (canvas อยู่ใต้ชั้นกล่อง) */
async function heartsFromUnderBoxes() {
  cv.width = innerWidth;
  cv.height = innerHeight;
  cv.style.zIndex = 12;                   // กล่องข้อความอยู่ชั้น 15 จึงบังหัวใจไว้
  document.querySelectorAll('#popLayer .mbox').forEach(b => b.classList.add('bump'));
  sfxSparkle();
  for (let wave = 0; wave < 5; wave++) {  // 5 รอบ รอบละหลายดวง
    for (let k = 0; k < 7; k++) {
      burst(Math.random() * innerWidth, innerHeight * 0.8, 1, { up: true });
    }
    await wait(170);
  }
  await wait(350);
}

/* 6b กล่องข้อความปลิวออก + ระเบิดหัวใจเต็มจอ */
function explode() {
  cv.style.zIndex = 30;                   // กลับมาอยู่บนสุด
  $('flash').classList.add('go');
  sfxBoom();
  if (navigator.vibrate) navigator.vibrate([300, 100, 300]);
  blowBoxesAway();
  $('phone').style.visibility = 'hidden';
  burst(innerWidth / 2, innerHeight / 2, 110, {});
  setTimeout(() => {
    $('popLayer').classList.remove('on');
    $('popLayer').innerHTML = '';
    show('s3');
    sfxSparkle();
    musicStart(.2);
  }, 700);
}

function blowBoxesAway() {
  const mx = innerWidth / 2, my = innerHeight / 2;
  document.querySelectorAll('#popLayer .mbox').forEach(b => {
    const r = b.getBoundingClientRect();
    const dx = r.left + r.width / 2 - mx, dy = r.top + r.height / 2 - my;
    const k = 1000 / (Math.hypot(dx, dy) || 1);
    b.classList.remove('bump');
    b.style.animation = 'none';
    void b.offsetWidth;                   // ให้เบราว์เซอร์เริ่มนับ transition ใหม่
    b.style.transition = 'transform .7s cubic-bezier(.3,0,.9,.6), opacity .7s';
    b.style.transform = 'translate(' + dx * k + 'px,' + dy * k + 'px) rotate(' + (Math.random() - .5) * 720 + 'deg) scale(.4)';
    b.style.opacity = 0;
  });
}

/* สร้างอนุภาคหัวใจ: up = พุ่งขึ้นจากด้านล่าง / ไม่ใส่ = ระเบิดกระจายรอบทิศ */
function burst(x, y, n, o) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * 6.283, s = 3 + Math.random() * 11;
    hearts.push(o.up
      ? { x, y, vx: (Math.random() - .5) * 6, vy: -(7 + Math.random() * 9), sz: 30 + Math.random() * 28, l: 1.2, d: .007, h: HEART_EMOJI[i % 5] }
      : { x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 2, sz: 14 + Math.random() * 30, l: 1, d: .009, h: HEART_EMOJI[i % 5] });
  }
  if (!looping) {
    looping = true;
    requestAnimationFrame(loop);
  }
}

function loop() {
  cx.clearRect(0, 0, cv.width, cv.height);
  hearts.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.vy += .18; p.vx *= .985; p.l -= p.d;
    if (p.l > 0) {
      cx.globalAlpha = Math.min(1, p.l);
      cx.font = p.sz + 'px serif';
      cx.fillText(p.h, p.x, p.y);
    }
  });
  for (let i = hearts.length - 1; i >= 0; i--) if (hearts[i].l <= 0) hearts.splice(i, 1);
  if (hearts.length) requestAnimationFrame(loop);
  else looping = false;
}
