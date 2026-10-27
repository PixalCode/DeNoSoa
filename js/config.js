/* =====================================================================
   config.js — ตั้งค่าทุกอย่างของเว็บที่ไฟล์นี้ไฟล์เดียว
   แก้แล้วรีเฟรชหน้าเว็บ ไม่ต้องไปแก้ไฟล์อื่น
   ===================================================================== */
const CONFIG = {

  /* ---------- ทั่วไป ---------- */
  code: "2707",                  // รหัสผ่าน 4 หลัก (ตัวเลขเท่านั้น)
  chatTitle: "ทีมงานด้อมเดโนซอ",   // ชื่อที่แสดงบนหัวแอปข้อความ
  countdown: 5,                  // วินาทีนับถอยหลังก่อน "ทำลายตัวเอง"

  /* ---------- รูปและเพลง ---------- */
  music: "assets/music/music.mp3",                         // เช่น "assets/music/song.mp3" (ว่าง = ใช้เพลงกล่องดนตรี)

  /* ---------- กระดานดำ (พร้อมหัวใจโปรย) ---------- */
  board: {
    title: "จงตอบคำถามต่อไปนี้",
    questions: [                         // ขึ้นทีละข้อ กด "ถัดไป" เพื่อไปข้อต่อไป (เพิ่ม/ลดข้อได้)
      "3 เดือนที่ผ่านมาเป็นยังไงบ้าง ?",
      "ถ้าเปรียบความสัมพันธ์ของทั้งคู่เป็นเพลงหนึ่งเพลง คุณจะเลือกเพลงอะไร เพราะอะไร ?",
      "มีอะไรที่เขาทำให้แล้วคิดว่า มัน 'น่ารักจัง' บ้างไหม ?",
      "โมเมนต์ไหนที่ทำให้รู้สึก 'ตกหลุมรัก' แบบเต็ม ๆ ?",
      "ทั้งคู่มีอะไรที่อยากบอกกัน และสิ่งที่เป็นห่วงกันไหม ?"
    ],
    nextLabel: "ข้อถัดไป ▶"
  },

  /* ---------- โพลารอยด์ (หน้าสุดท้าย แตะรูปเพื่อดูใหญ่) ---------- */
  // src = ไฟล์รูป (สี่เหลี่ยมจัตุรัสสวยสุด เช่น 480×480) | caption = ข้อความใต้รูปตอนดูใหญ่
  // ตอนนี้เป็นรูปตัวอย่าง แทนที่ด้วยรูปจริงโดยวางไฟล์ทับใน assets/photos/ หรือแก้ชื่อไฟล์ตรงนี้ (เพิ่ม/ลดจำนวนได้)
  photos: [
    { src: "assets/photos/01.png", caption: "RD <3" },
    { src: "assets/photos/02.png", caption: "เดโนซอ" },
    { src: "assets/photos/03.png", caption: "#RD DI WA" },
    { src: "assets/photos/04.png", caption: "คู่นี้น่ารัก" },
    { src: "assets/photos/05.png", caption: "อยู่ด้วยกันนานๆนะ" },
    { src: "assets/photos/06.png", caption: "สู้ๆ นะ" },
    { src: "assets/photos/07.png", caption: "อยู่ตรงนี้เสมอนะ" },
    { src: "assets/photos/08.png", caption: "เพียงแค่เราสองคน" },
    { src: "assets/photos/09.webp", caption: "ขอบคุณนะ" },
    { src: "assets/photos/10.png", caption: "#ANS3MONTHS" },
    { src: "assets/photos/11.jpg", caption: "#DENOSOA" },
    { src: "assets/photos/12.png", caption: "#ท้ายเดโนซอ" },
    { src: "assets/photos/13.jpg", caption: "ยิ้มกว้างๆ" },
    { src: "assets/photos/14.jpg", caption: "ดีใจที่ได้รู้จัก" },
    { src: "assets/photos/15.png", caption: "#ด้อมเดโนซอรัก" },
    { src: "assets/photos/16.png", caption: "ชอบที่สุด" },
    { src: "assets/photos/17.png", caption: "หัวใจฟู" },
    { src: "assets/photos/18.png", caption: "เป็นกำลังใจให้" },
    { src: "assets/photos/20.png", caption: "ยิ้มเยอะๆ นะ" },
    { src: "assets/photos/21.webp", caption: "ขอบคุณที่วันนี้มีเธอ" },
    { src: "assets/photos/22.webp", caption: "Thanks a million." },
    { src: "assets/photos/23.webp", caption: "Two are better than one." },
    { src: "assets/photos/24.jpg", caption: "You had me at hello." },
    { src: "assets/photos/25.jpg", caption: "I love you 3000" },
    { src: "assets/photos/26.jpg", caption: "#ILYSB" },
    { src: "assets/photos/27.png", caption: "LOVE RD:>" },
    { src: "assets/photos/28.webp", caption: "Better together. #RD ❤️" },
    { src: "assets/photos/29.png", caption: "My All-time Partner." },
    { src: "assets/photos/30.png", caption: "You Complete Me." },
    { src: "assets/photos/31.jpg", caption: "อยู่กับเธอแล้วมีความสุขมากนะ" },
    { src: "assets/photos/32.png", caption: "I’m forever yours." },
    { src: "assets/photos/33.png", caption: "เก็บเธอไว้ในรูป" },
    { src: "assets/photos/34.jpg", caption: "I'm so lucky to have you." },
    { src: "assets/photos/35.png", caption: "You're My Home." },
    { src: "assets/photos/36.png", caption: "ฉันชอบทุกๆ อย่างที่เป็นคุณ" },
    { src: "assets/photos/37.png", caption: "คุณคือความสุขของฉัน" },
    { src: "assets/photos/38.png", caption: "รักเธอ <3" },
    { src: "assets/photos/39.png", caption: "365 days of us." },
    { src: "assets/photos/40.webp", caption: "รักเดซี่ลีซอ" },
    { src: "assets/photos/41.png", caption: "#GenZ" },
    { src: "assets/photos/42.png", caption: "#ท้ายคุณย่า" }
  ],

  /* ---------- หน้ากล่องข้อความเด้ง (ต่อจากแชท) ---------- */
  popupCount: 52,                // จำนวนกล่องที่เด้งขึ้น (ตั้ง 0 = ข้ามหน้านี้ / ไม่เกินจำนวนในรายการ popups)
  // แต่ละกล่องมีชื่อ รูป และข้อความของตัวเอง: n = ชื่อ | img = รูปโปรไฟล์ | c = สีพื้นหลังรูป | t = ข้อความ
  // ผู้ชมกดดูกล่องได้ ลากย้ายได้ และมีปุ่ม "กดตรงนี้สิ" ขึ้นหลังกล่องเด้งครบ กดแล้วถึงจะนับถอยหลัง
  popups: [
    { n: "NØNox", img: "assets/avatars/รูปคำอวยพร/01.png", c: "#e3f7c8", t: "ขอบคุณสำหรับรอยยิ้มและช่วงเวลาดี ๆ ที่ทำให้มีความสุขเสมอ" },
    { n: "dream_zy", img: "assets/avatars/รูปคำอวยพร/02.png", c: "#fff0b8", t: "ขอบคุณที่ทนยอมเหนื่อยกันมาตลอดน้าา รักทั้งคู่งับ#RD" },
    { n: "EMe Zero", img: "assets/avatars/รูปคำอวยพร/03.png", c: "#c9e1ff", t: "ขอบคุณทั้งคู่ที่มอบร้อยยิ้ม และความสุขให้พวกเรานะครับ" },
    { n: "PThappaK", img: "assets/avatars/รูปคำอวยพร/04.png", c: "#ffdcc2", t: "ขอบคุณทั้งคู่ที่หากันจนเจอ อยู่ support กันไปนานๆ นะคับ มีความสุขในทุกๆ วัน" },
    { n: "NO", img: "", c: "#ffd0d0", t: "ขอให้ทั้งคู่เล่นเกมแบบสนุกๆน้า ไม่เครียดจนเกินไปจนทำให้เล่นไม่ได้น่ะ ขอบคุณที่มอบรอยยิ้มให้เสมอๆ ถึงจะเป็นใบโพล่าก็ตาม 😍" },
    { n: "Chchwaiqq", img: "assets/avatars/รูปคำอวยพร/05.png", c: "#e4ecff", t: "ขอบคุณทั้งคู่ ที่ทำให้ชีวิตมีสีสัน และมีสตอรี่ที่น่ารักดูในแต่ละวัน support กันไปนานๆคับ" },
    { n: "คือไร", img: "assets/avatars/รูปคำอวยพร/06.png", c: "#ffd6ea", t: "ขอบคุณทั้งคู่ที่ทำให้ผมมีความสุขในทุกๆวัน" },
    { n: "four", img: "assets/avatars/รูปคำอวยพร/07.png", c: "#e6d9ff", t: "ขอบคุณที่เป็นรอยยิ้มให้ช่องแชททุกวันนะอ้วนๆ" },
    { n: "satangg", img: "assets/avatars/รูปคำอวยพร/08.png", c: "#e3f7c8", t: "ขอบคุณทั้งคู่ที่คอยมอบรอยยิ้มและความสุขให้พวกเราเสมอ อยู่คอย support และหวานกันไปนาน ๆ น้าอ้วนน" },
    { n: "khodiwanthim", img: "assets/avatars/รูปคำอวยพร/09.png", c: "#fff0b8", t: "kor hai me tae rueang didi khao ma nai thuk day ending you lots of love & support🍀" },
    { n: "🔮🎧 𝘔𝘠 𝘋𝘌𝘈𝘙 💜🦄", img: "assets/avatars/รูปคำอวยพร/10.png", c: "#c9e1ff", t: "เพราะทั้งคู่คือความสุขของพวกเรา รักมากๆ" },
    { n: "BaitoeyBoeytai", img: "assets/avatars/รูปคำอวยพร/11.png", c: "#ffdcc2", t: "ขอบคุณทั้งคู่ที่คอยsupport กันและกัน ขอบคุณที่ทำให้มีทั้งรอยยิ้มและน้ำตา ขอให้ทั้งคู่เล่นให้สนุกไม่ต้องคิดอะไรเยอะ จะคอยเป็นแฟนคลับsupport เสมอนะคะ รักน้าาา" },
    { n: "NATTHAPHON", img: "assets/avatars/รูปคำอวยพร/12.png", c: "#ffd0d0", t: "ขอบคุณที่คอยสร้างรอยยิ้มและเสียงหัวเราะให้พวกเราขอให้มีความสุขกับเส้นทางที่เลือกเดินไม่ว่าจะทำอะไรพวกเราจะคอยซัพพอร์ทเสอม รักนะครับ🩵🧡 RD DIWA !" },
    { n: "Mojiiii", img: "assets/avatars/รูปคำอวยพร/13.png", c: "#e4ecff", t: "ขอบคุณที่อยู่เป็นความสุขและสร้างรอยยิ้มให้พวกเรานะ รักอ้วนๆทั้งสอง 💙🧡🤏" },
    { n: "Jirat67", img: "assets/avatars/รูปคำอวยพร/14.png", c: "#ffd6ea", t: "ขอบคุณที่มาเป็นความสุขให้พวกเรานะ รักมากๆ" },
    { n: "᧔ෆ᧓", img: "assets/avatars/รูปคำอวยพร/15.png", c: "#e6d9ff", t: "ขอบคุณที่มอบความสุขให้พวกเราตลอด 3 เดือน ดีใจที่พวกแกได้เจอกัน รักอ้วน" },
    { n: "Pipepip🥝", img: "assets/avatars/รูปคำอวยพร/16.png", c: "#e3f7c8", t: "ขอบคุณทั้งคู่ ที่ฮีลใจชาวด้อมมาตลอดเลย support เดโนซอ เสมอ รักน้า 💙🧡 🦖 ☀️" },
    { n: "Tar", img: "assets/avatars/รูปคำอวยพร/17.png", c: "#fff0b8", t: "ขอบคุณทั้งคู่ที่สร้างรอยยิ้มให้ในวันที่รู้สึกแย่น้า อยู่ด้วยกันไปนานๆน้า🩵🧡" },
    { n: "mtyme", img: "assets/avatars/รูปคำอวยพร/18.png", c: "#c9e1ff", t: "ขอบคุณน้องที่น่ารักทั้ง2คน ที่มอบความสุข รอยยิ้มให้ชาวเดโนซอ ขอให้ทั้งคู่อยู่supportกันไปนานๆนะ 💙🧡" },
    { n: "Penkhwyri", img: "assets/avatars/รูปคำอวยพร/19.png", c: "#ffdcc2", t: "ข้างหลังทั้งคู่จะมีพวกเราอยู่เสมอ #RDdiwa" },
    { n: "กร เวฟปีศาจ", img: "assets/avatars/รูปคำอวยพร/20.png", c: "#ffd0d0", t: "ขอบคุณทั้งคู่ ที่ฮีลใจมาตลอดเลย support เดโนซอ รักเสมอ 💙🧡" },
    { n: "Maybe", img: "assets/avatars/รูปคำอวยพร/21.png", c: "#e4ecff", t: "ขอบคุณที่อ้วนทั้งสองคนหากันจนเจอ และคอยsupportกันและกัน ขอบคุณที่เป็นความสุขให้พวกเราชาวเดโนซอ รักเสมอ จะคอยsupportอยู่ข้างๆ หันมาเมื่อไหร่ก็จะเจอพวกเราเสมอ 💙🧡" },
    { n: "pp", img: "assets/avatars/รูปคำอวยพร/22.png", c: "#ffd6ea", t: "Thanks for making my days for the past 3 months. we’ll always be by your side naa 💙🧡" },
    { n: "𝖂𝖆𝖘𝖎𝖓", img: "assets/avatars/รูปคำอวยพร/23.png", c: "#e6d9ff", t: "ขอบคุณสำหรับร้อยยิ้มและความสุขให้พวกเรานะค้าบบ" },
    { n: "riku", img: "assets/avatars/รูปคำอวยพร/24.png", c: "#e3f7c8", t: "Denosoa rank ☝🏼 in my 💟 ขอบคุณอะไรก็ตามที่ทำให้เรามาเจอกัน เล่นเกมให้มีความสุขคั้บ รักสองอ้วน" },
    { n: "Bugcat Capoo", img: "assets/avatars/รูปคำอวยพร/25.png", c: "#fff0b8", t: "ขอบคุณอ้วนทั้งสองที่อยู่สร้างสีสรรค์ความสุขให้พวกเรานะอยู่เล่นด้วยกันไปนานๆละ" },
    { n: "Lookpeach", img: "assets/avatars/รูปคำอวยพร/26.png", c: "#fff0b8", t: "Wishing you endless moments of joy and a love that grows deeper every day." },
    { n: "refill", img: "assets/avatars/รูปคำอวยพร/27.png", c: "#fff0b8", t: "ถึงแม้จะยังไม่ลืมคนเก่า แต่แค่ซอเดหวานกันก็ทำให้ยิ้มตามได้#ท้ายRD#พาร์ทเนอร์ดิวะ 💙🧡" },
    { n: "Wannaplay", img: "assets/avatars/รูปคำอวยพร/28.png", c: "#fff0b8", t: "ขอบคุณที่ยอมเหนื่อยเพื่อให้คนอีกพันๆคนมีความสุข มาเติมเต็มความสุขให้แชทก็อย่าลืมเติมเต็มความสุขให้ตัวเองกันด้วยนะ รักครับ" },
    { n: "Bxbyl3ooM 🤍🐼", img: "assets/avatars/รูปคำอวยพร/29.png", c: "#fff0b8", t: "ก้าวเดินมาเดือนที่ 3 แล้ว ขอบคุณที่มอบความสุขและเสียงหัวเราะให้นะ ไปกันต่ออีกนานๆเลย RD Diwa" },
    { n: "m0sS", img: "assets/avatars/รูปคำอวยพร/30.png", c: "#fff0b8", t: "ขอบคุณที่มอบรอยยิ้มและความสุขให้นะคับRD Diwa" },
    { n: "JiRaYu", img: "assets/avatars/รูปคำอวยพร/31.png", c: "#fff0b8", t: "ขอบคุณที่มอบความสุขให้กันในทุกๆวัน ขอให้ทั้งคู่อยู่ด้วยกันไปนานๆนะค้าบบบ #RD DIWA🧡💙" },
    { n: "🐰HaNiBa🐰", img: "assets/avatars/รูปคำอวยพร/32.png", c: "#fff0b8", t: "ขอบคุณทั้งซอและเด ในช่วงเวลา3เดือนนี้ มีความสุขมาก เป็นพื้นที่เข้ามาดูแล้วHAPPY มากๆ LOVEทั่งคู่ และก้าวเดินด้วยกันต่อไปเรื่อยๆนะ  RD Diwa" },
    { n: "Shibalver💙🧡", img: "assets/avatars/รูปคำอวยพร/33.png", c: "#fff0b8", t: "เดือนที่3แย้วว ขอบคุณอ้วนๆทั้งสองที่ทำให้มีความสุขในทุกๆวัน ขอให้ทั้งสองอยู่เป็นรอยยิ้มให้หมีๆและออกี้ ไปนานๆเลยน้าา #RD Diwaa🧡💙🦖" },
    { n: "กรรชัย หนุ่ม", img: "assets/avatars/รูปคำอวยพร/34.png", c: "#fff0b8", t: "3เดือนแล้วรักกันไปนานๆเจ้าชายสงบสุขพระคุ้มครองขี้ลืมกับเจ้าหญิงน้ำไม่อาบจูงเยอะๆสาธุ" },
    { n: "KING", img: "assets/avatars/รูปคำอวยพร/35.png", c: "#fff0b8", t: "3เดือนแล้วเนาะก็อยากไห้ทั้งสองรักกันไห้มากๆคอยไห้กำลังใจกันเยอะๆน้าขอบคุณน้าที่คอยสร้างความสุจและรอยยิ้มไห้คนดู#เลิฟน้าเดโนซอ" },
    { n: "Poon IMT", img: "assets/avatars/รูปคำอวยพร/36.png", c: "#fff0b8", t: "ขอให้น้องๆทั้ง2คน support ซึ่งกันและกัน ไปนานๆ ครับ ขอให้ทั้งคู่พบเจอแต่ความสำเร็จในการงานนะครับ🧡💙" },
    { n: "nirucha.21", img: "assets/avatars/รูปคำอวยพร/37.png", c: "#fff0b8", t: "สุขสันต์ครบรอบ 3 เดือนนะตี๋ขี้ลืมกับหมวยตื่นสาย 💗 ขอให้รักกันนาน ๆ งอนกันน้อย ๆ อยู่ด้วยกันไปทุกเดือนเลยนะ" },
    { n: "N4N1AQR", img: "assets/avatars/รูปคำอวยพร/38.png", c: "#fff0b8", t: "ยิ้มเยอะๆนะพวกอ้วน รักพวกอ้วนน้า" },
    { n: "Win", img: "assets/avatars/รูปคำอวยพร/39.png", c: "#fff0b8", t: "ขอบคุณทั้งคู่ที่มอบความสุขให้พวกเรา#RDdiwa" },
    { n: "Farafang", img: "assets/avatars/รูปคำอวยพร/40.png", c: "#fff0b8", t: "พวกอ้วนมีความสุข พวกเราก็มีความสุข ❤️ #RDDIWA" },
    { n: "Objective|  โจโจ้", img: "assets/avatars/รูปคำอวยพร/41.png", c: "#fff0b8", t: "❤️ ขอให้สามเดือนนี้เป็นเพียงบทนำของตำนานรักอันไร้จุดจบของซอกับเด #Objective" },
    { n: "SN", img: "assets/avatars/รูปคำอวยพร/42.png", c: "#fff0b8", t: "ขอบคุณทั้งสองคนที่สร้างรอยยิ้มให้ในวันที่รู้สึกไม่ดีนะ อยู่ด้วยกันไปนานๆนะ#RD Diwa" },
    { n: "jeongminseoo", img: "assets/avatars/รูปคำอวยพร/43.png", c: "#c9e1ff", t: "ขอบคุณทั้งคู่ที่คอย support กัน พากันโตขึ้นไปในทางที่ดี ขอให้ทั้งสองคนได้เป็นพาร์ทเนอร์ที่ดีต่อกันแบบนี้ตลอดไปน้า รักเสมอคับ" },
    { n: "Imty", img: "assets/avatars/รูปคำอวยพร/44.png", c: "#c9e1ff", t: "สุขสันต์ครบรอบ 3 เดือนนะเดโนชอ 🤍 ทั้งคู่เป็นคนที่น่ารักและดีมาก ๆ ขอบคุณที่เลือกกันและกันนะ ดีใจมาก ๆ ที่ได้รู้จักทั้งสองคน ขอให้เป็นความสุขของกันและกันแบบนี้ไปนาน ๆ ขอให้ได้ดูแลและเติบโตไปด้วยกันในทุก ๆ วันเลยนะ 🥹💗 #RD diwaaa" },
    { n: "Kannn_TK—(🐻)", img: "assets/avatars/รูปคำอวยพร/45.png", c: "#c9e1ff", t: "3เดือนแล้วววว ขอบคุณที่เป็นความสุขหลังเลิกงานให้พี่ในทุก ๆ วัน ขอให้ทั้งคู่มีความสุขมาก ๆ ยิ้มเยอะ ๆ อยู่สร้างรอยยิ้มให้พวกเราไปนาน ๆ น้าา #RDdiwa" },
    { n: "ทนายศาลไพ", img: "assets/avatars/รูปคำอวยพร/46.png", c: "#c9e1ff", t: "Happy 3 Monthsary! คบกันมา 90 วัน ไม่มีวันไหนไม่ปวดหัว เดน้ำไม่อาบDiwa" },
    { n: "First Parawat", img: "assets/avatars/รูปคำอวยพร/47.png", c: "#c9e1ff", t: "ขอให้ทั้งคู่เล่นเกมแบบสนุกๆน้า ไม่เครียดจนเกินไปจนทำให้เล่นไม่ได้น่ะ ขอบคุณที่มอบรอยยิ้มให้เสมอๆ #RD Di Wa" },
    { n: "Cartoonkkk", img: "assets/avatars/รูปคำอวยพร/48.png", c: "#c9e1ff", t: "#RD diwaa! อยู่เป็นคู่รักเฮฮาให้ทุกคนตลอดไปนะคั้บ" },
    { n: "Max verstappen", img: "assets/avatars/รูปคำอวยพร/49.png", c: "#c9e1ff", t: "ขอบคุณสำหรับรอยยิ้มในทุกๆวันนะคับอยากให้เรือนี้อยู่ไปนานๆทั้งคู่เข้ากันได้มากเลย#RD DiWaa" },
    { n: "Malli💙🧡🦖", img: "assets/avatars/ann.jpg", c: "#ffcbc9", t: "Happy Anniversary 3 months อยู่ด้วยกันไปนานๆนะ อยู่กับด้อมเดโนซอรัก ไปเรื่อยๆเลยนะ รักนะ RDDIWA 💙🧡🦖" },
    { n: "Dxar", img: "assets/avatars/dear.jpg", c: "#ffdcc2", t: "สุขสันต์ครบรอบ 3 เดือนนะขอให้รักกันนาน ๆอยู่ด้วยกันไปทุกเดือนเลยนะ" }
  ],

  /* ---------- ข้อความอวยพร (ขึ้นทีละข้อความ ตามลำดับ) ---------- */
  // n = ชื่อคนส่ง | img = รูปโปรไฟล์ | c = สีพื้นหลังรูป | t = ข้อความ
  // เพิ่มข้อความ: คัดลอกบรรทัด { ... }, ไปต่อท้าย แล้วแก้ชื่อ/รูป/ข้อความ (คนเดียวส่งหลายข้อความได้)
  messages: [
    { n: "มี๊แอน",    img: "assets/avatars/ann.jpg",  c: "#f3a6d9", t: "วันครบรอบ ลีซอกับเดซี่เราทำอะไรดี" },
    { n: "ลูกพีช",    img: "assets/avatars/peach.jpg",  c: "#9bf327", t: "ส่งข้อความอวยพร ดีไหมมี๊" },
    { n: "มายเดียร์",    img: "assets/avatars/mydear.jpg",  c: "#e199f7", t: "#RD DIWA แล้วโดเนทไหม" },
    { n: "บูม",    img: "assets/avatars/boom.jpg",  c: "#3a3a39", t: "ทำรูปแฟนอาร์ทกันก็ดีนะ" },
    { n: "บิว",    img: "assets/avatars/biew.jpg",  c: "#8ee5f5", t: "ผมเห็นมี คนในดิสเสนอทำเว็บเซอร์ไพร์ นะครับ" },
    { n: "นนท์",    img: "assets/avatars/non.jpg",  c: "#f75858", t: "เราเอามารวมกันได้ไหมอ่ะ" },
    { n: "เวย์",    img: "assets/avatars/way.jpg",  c: "#fa9552", t: "ผมว่าดีนะ รวมกันเลย" },
    { n: "มายเดียร์",    img: "assets/avatars/mydear.jpg",  c: "#e199f7", t: "แล้วใครทำเป็นอ่ะ" },
    { n: "มี๊แอน",    img: "assets/avatars/ann.jpg",  c: "#f3a6d9", t: "เดียร์ทำได้ไหม" },
    { n: "เดียร์",    img: "assets/avatars/dear.jpg",  c: "#ffd446", t: "ได้ครับ เดี๋ยวจัดให้" },
    { n: "เดียร์",    img: "assets/avatars/dear.jpg",  c: "#ffd446", t: "3" },
    { n: "เดียร์",    img: "assets/avatars/dear.jpg",  c: "#ffd446", t: "2" },
    { n: "เดียร์",  img: "assets/avatars/dear.jpg", c: "#ffd446", t: "1" }
  ]
};
