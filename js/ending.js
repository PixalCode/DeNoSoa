/* ending.js — หน้านับถอยหลัง ก่อนเข้าสู่กระดานคำถามพร้อมหัวใจโปรย */

const cv = $('fx'), cx = cv.getContext('2d');
const hearts = [];
const HEART_EMOJI = ['💖', '💗', '💕', '❤️', '💘'];
let rainingHearts = false;

async function startQuestionStage() {
  musicStop();
  $('alert').classList.add('on');
  for (let i = CONFIG.countdown; i > 0; i--) {
    $('cd').textContent = i;
    sfxTick(i === 1);
    await wait(1000);
  }
  $('alert').classList.remove('on');
  $('phone').style.visibility = 'hidden';
  $('popLayer').classList.remove('on');
  $('popLayer').innerHTML = '';
  show('s3');
  startBoard();
  startHeartRain();
  sfxSparkle();
  musicStart(.2);
}

function startHeartRain() {
  cv.width = innerWidth;
  cv.height = innerHeight;
  cv.classList.add('rain');
  if (rainingHearts) return;
  rainingHearts = true;
  requestAnimationFrame(heartRainFrame);
}

function heartRainFrame() {
  if (!$('s3').classList.contains('on')) {
    hearts.length = 0;
    cx.clearRect(0, 0, cv.width, cv.height);
    cv.classList.remove('rain');
    rainingHearts = false;
    return;
  }

  if (cv.width !== innerWidth || cv.height !== innerHeight) {
    cv.width = innerWidth;
    cv.height = innerHeight;
  }

  if (Math.random() < .16) {
    hearts.push({
      x: Math.random() * cv.width,
      y: -32,
      vx: (Math.random() - .5) * 1.2,
      vy: 1.2 + Math.random() * 2.2,
      sz: 16 + Math.random() * 20,
      h: HEART_EMOJI[Math.floor(Math.random() * HEART_EMOJI.length)]
    });
  }

  cx.clearRect(0, 0, cv.width, cv.height);
  cx.textAlign = 'center';
  hearts.forEach(heart => {
    heart.x += heart.vx;
    heart.y += heart.vy;
    cx.font = heart.sz + 'px serif';
    cx.fillText(heart.h, heart.x, heart.y);
  });
  for (let i = hearts.length - 1; i >= 0; i--) {
    if (hearts[i].y > cv.height + 32) hearts.splice(i, 1);
  }
  requestAnimationFrame(heartRainFrame);
}
