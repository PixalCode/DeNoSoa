/* board.js — หน้ากระดานดำ: หัวข้อ + คำถามขึ้นทีละข้อ มีปุ่ม "ถัดไป" (ข้อความตั้งใน CONFIG.board)
   เรียกจาก ending.js หลังหัวใจระเบิด · จบข้อสุดท้ายแล้วไปหน้าโพลารอยด์ (gallery.js) */

let qIdx = -1;                            // ข้อที่เขียนอยู่ (เริ่มที่ 0)

async function startBoard() {
  $('bTitle').textContent = '';
  $('bQs').innerHTML = '';
  $('bNext').classList.remove('on');
  qIdx = -1;
  await wait(600);
  await writeLine($('bTitle'), CONFIG.board.title);
  await wait(300);
  await nextQuestion();
}

async function nextQuestion() {
  qIdx++;
  const line = document.createElement('p');
  line.className = 'bq';
  $('bQs').appendChild(line);
  await writeLine(line, (qIdx + 1) + '. ' + CONFIG.board.questions[qIdx]);
  $('bNext').textContent = CONFIG.board.nextLabel;
  $('bNext').classList.add('on');
}

/* เขียนทีละตัวอักษรเหมือนเขียนชอล์ก */
async function writeLine(el, text) {
  el.textContent = '';
  const chars = Array.from(text);         // กันอีโมจิถูกตัดครึ่ง
  for (let i = 0; i < chars.length; i++) {
    el.textContent += chars[i];
    if (i % 2 === 0) sfxChalk();
    await wait(60);
  }
}

$('bNext').onclick = async () => {
  $('bNext').classList.remove('on');      // กันกดซ้ำระหว่างกำลังเขียน
  sfxSnap();
  if (qIdx < CONFIG.board.questions.length - 1) {
    await nextQuestion();
  } else {
    show('s4');                           // จบคำถามแล้ว → โพลารอยด์
    buildGallery();
  }
};
