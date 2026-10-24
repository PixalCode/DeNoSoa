/* utils.js — ฟังก์ชันช่วยเล็กๆ ที่ทุกไฟล์ใช้ร่วมกัน */

const $=id=>document.getElementById(id);
const show=id=>{
  document.querySelectorAll('.stage').forEach(s=>s.classList.remove('on'));
  $(id).classList.add('on')
};
const wait=ms=>new Promise(r=>setTimeout(r,ms));
