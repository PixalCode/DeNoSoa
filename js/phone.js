/* phone.js — หน้า 2-4: หน้าจอล็อกโทรศัพท์ → เปิดแชท → ข้อความอวยพรขึ้นทีละข้อความ */

/* 2 phone lock screen */
function startPhone(){
  show('s2');
  const n=new Date();
  $('clock').textContent=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');
  $('date').textContent=n.toLocaleDateString('th-TH',{weekday:'long',day:'numeric',month:'long'});
  $('bname').textContent=CONFIG.chatTitle;
  $('notif').style.display='none';
  setTimeout(()=>{
    $('notif').style.display='flex';sfxNotif();if(navigator.vibrate)navigator.vibrate(200)
  },900);
}
/* 3-4 messages */
$('notif').onclick=async()=>{
  $('lock').classList.remove('on');
  $('msgapp').classList.add('on');
  musicStart(.16);
  const chat=$('chat');
  await wait(700);
  for(const x of CONFIG.messages){
    const row=document.createElement('div');
    row.className='row';
    const av=document.createElement('div');
    av.className='av';
    av.style.background=x.c||'#e6d9ff';
    if(x.img){
      av.style.backgroundImage='url('+x.img+')';
      av.style.backgroundSize='cover'
    } else av.textContent=x.e||'🙂';
    const col=document.createElement('div');
    col.className='col';
    const nm=document.createElement('small');
    nm.textContent=x.n;
    const ty=document.createElement('div');
    ty.className='typing';
    ty.innerHTML='<i></i><i></i><i></i>';
    col.append(nm,ty);
    row.append(av,col);
    chat.appendChild(row);
    chat.scrollTop=chat.scrollHeight;
    await wait(900+Math.min(x.t.length*25,900));
    const m=document.createElement('div');
    m.className='m';
    m.textContent=x.t;
    ty.replaceWith(m);
    sfxPop();
    chat.scrollTop=chat.scrollHeight;
    await wait(500);
  }
  await wait(1200);
  await popupFlood(); // หน้ากล่องข้อความเด้ง (js/popups.js)
  selfDestruct();
};
