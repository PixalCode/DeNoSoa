/* passcode.js — หน้า 1: ใส่รหัส 4 หลักด้วยคีย์บอร์ด */

/* 1 passcode */
const dots=[...$('dots').children],pin=$('pin');
let busy=false,previousPinValue='';
const render=()=>dots.forEach((d,i)=>d.classList.toggle('f',i<pin.value.length));
pin.addEventListener('input',e=>{
  pin.value=pin.value.replace(/\D/g,'').slice(0,4);render();
  if(pin.value!==previousPinValue&&(pin.value.length>previousPinValue.length||e.inputType&&e.inputType.startsWith('insert')))sfxKey();
  previousPinValue=pin.value;
  if(pin.value.length===4&&!busy){
    busy=true;
    if(pin.value===CONFIG.code){
      setTimeout(()=>{
        pin.blur();startPhone()
      },300)
    }
    else{
      $('dots').classList.add('shake');$('pcTitle').textContent='รหัสไม่ถูกต้อง ลองอีกครั้ง';
      setTimeout(()=>{
        $('dots').classList.remove('shake');pin.value='';previousPinValue='';render();busy=false
      },450)
    }
  }
});
$('dots').onclick=()=>pin.focus();
document.addEventListener('keydown',()=>{
  if($('s1').classList.contains('on')&&document.activeElement!==pin)pin.focus()
});
pin.focus();
