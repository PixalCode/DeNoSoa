/* audio.js — เสียงเอฟเฟกต์ + เพลง + ปุ่มปรับเสียง (สังเคราะห์ด้วย Web Audio ไม่ต้องมีไฟล์เสียง ยกเว้นถ้าใส่ CONFIG.music) */

/* ===== เสียง (สร้างด้วย Web Audio ไม่ต้องใช้ไฟล์) ===== */
let VOL=.4,lastVolume=.4,bgmBase=.2;
// ความดังรวม 0-1 (ยิ่งน้อยยิ่งเบา)
let AC=null,master,musicG,muted=false,musicOn=false,musicTimer=null;
function audio(){
  try{
    if(!AC){
      AC=new (window.AudioContext||window.webkitAudioContext)();
      master=AC.createGain();
      master.gain.value=muted?0:VOL;
      master.connect(AC.destination);
      musicG=AC.createGain();
      musicG.gain.value=0;
      musicG.connect(master)
    }
    if(AC.state==='suspended')AC.resume();
  } catch(e){}
  return AC;
}
['click','touchend','keydown'].forEach(ev=>document.addEventListener(ev,audio,{passive:true}));
function tone(f,t,d,o={}){
  if(!AC)return;
  const {type='sine',v=.2,dest=master,a=.005}=o,os=AC.createOscillator(),g=AC.createGain();
  os.type=type;
  os.frequency.setValueAtTime(f,t);
  if(o.to)os.frequency.exponentialRampToValueAtTime(o.to,t+d);
  g.gain.setValueAtTime(0,t);
  g.gain.linearRampToValueAtTime(v,t+a);
  g.gain.exponentialRampToValueAtTime(.0001,t+d);
  os.connect(g);
  g.connect(dest);
  os.start(t);
  os.stop(t+d+.05);
}
const now=()=>AC?AC.currentTime+.02:0;
function sfxNotif(){
  if(!audio())return;
  const t=now();
  [0,.32].forEach(o=>{
    tone(1175,t+o,.28,{type:'triangle',v:.25});tone(1568,t+o+.11,.4,{type:'triangle',v:.22})
  })
}
function sfxPop(){
  if(!audio())return;
  const t=now(),f=620+Math.random()*180;
  tone(f,t,.12,{v:.16,to:f*1.5});
  tone(f*2,t+.04,.1,{v:.06})
}
function sfxTick(last){
  if(!audio())return;
  const t=now();
  tone(last?1400:900,t,last?.5:.14,{type:'square',v:.07})
}
function sfxBoom(){
  if(!audio())return;
  const t=now();
  const n=AC.sampleRate,buf=AC.createBuffer(1,n,n),d=buf.getChannelData(0);
  for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,2);
  const src=AC.createBufferSource(),fl=AC.createBiquadFilter(),g=AC.createGain();
  src.buffer=buf;
  fl.type='lowpass';
  fl.frequency.setValueAtTime(2000,t);
  fl.frequency.exponentialRampToValueAtTime(80,t+.9);
  g.gain.value=.9;
  src.connect(fl);
  fl.connect(g);
  g.connect(master);
  src.start(t);
  tone(160,t,.7,{v:.5,to:35})
}
function sfxSparkle(){
  if(!audio())return;
  const t=now();
  [1047,1319,1568,2093,2637].forEach((f,i)=>tone(f,t+i*.07,.35,{v:.12}))
}
function sfxSnap(){
  if(!audio())return;
  const t=now();
  tone(880,t,.1,{v:.15});
  tone(1320,t+.06,.14,{v:.12})
}
function sfxWin(){
  if(!audio())return;
  const t=now();
  [523,659,784,1047,1319].forEach((f,i)=>tone(f,t+i*.11,.6,{type:'triangle',v:.2}))
}
/* เพลงกล่องดนตรี: ทำนองวันเกิด (สาธารณสมบัติ) วนซ้ำ */
const MEL=[[67,.75],[67,.25],[69,1],[67,1],[72,1],[71,2],[67,.75],[67,.25],[69,1],[67,1],[74,1],[72,2],
[67,.75],[67,.25],[79,1],[76,1],[72,1],[71,1],[69,1],[77,.75],[77,.25],[76,1],[72,1],[74,1],[72,2]];
const mtof=n=>440*Math.pow(2,(n-69)/12);
function musicLoop(){
  if(!musicOn||!AC)return;
  const beat=.58;
  let t=AC.currentTime+.1;
  MEL.forEach(([n,b])=>{
    const f=mtof(n);
    tone(f,t,1.3,{v:.5,dest:musicG,a:.004});tone(f*2,t,.5,{v:.14,dest:musicG,a:.004});tone(f*3,t,.25,{v:.05,dest:musicG,a:.004});
    t+=b*beat
  });
  musicTimer=setTimeout(musicLoop,(t-AC.currentTime+beat)*1000);
}
function musicStartSynth(vol){
  if(!audio()||musicOn)return;
  musicOn=true;
  musicG.gain.cancelScheduledValues(AC.currentTime);
  musicG.gain.setTargetAtTime(vol||.2,AC.currentTime,.4);
  musicLoop()
}
function musicStopSynth(){
  musicOn=false;
  clearTimeout(musicTimer);
  if(AC)musicG.gain.setTargetAtTime(0,AC.currentTime,.3)
}
let BGM=null,fadeT=null;
function bgmFade(to){
  clearInterval(fadeT);
  fadeT=setInterval(()=>{
    const d=to-BGM.volume;
    if(Math.abs(d)<.03){
      BGM.volume=to;clearInterval(fadeT);if(!to)BGM.pause();return
    }
    BGM.volume=Math.max(0,Math.min(1,BGM.volume+Math.sign(d)*.03))
  },60)
}
function musicStart(vol){
  if(!CONFIG.music)return musicStartSynth(vol);
  if(!BGM){
    BGM=new Audio(CONFIG.music);
    BGM.loop=true;
    BGM.volume=0;
    BGM.muted=muted
  }
  bgmBase=vol||.2;
  BGM.play().catch(()=>{});
  bgmFade(Math.min(1,bgmBase*3.5*VOL));
}
function musicStop(){
  if(BGM)bgmFade(0);
  else musicStopSynth()
}
function syncVolume(){
  if(master)master.gain.value=muted?0:VOL;
  if(BGM){
    BGM.muted=muted;
    if(!BGM.paused)bgmFade(Math.min(1,bgmBase*3.5*VOL))
  }
  $('vslider').value=Math.round(VOL*100);
  $('mute').textContent=(muted||!VOL)?'🔇':'🔊';
  $('mute').setAttribute('aria-label',(muted||!VOL)?'เปิดเสียง':'ปิดเสียง')
}
function setVolume(value){
  VOL=Math.max(0,Math.min(1,value));
  if(VOL>0){
    lastVolume=VOL;
    muted=false
  }
  syncVolume()
}
$('vslider').oninput=e=>{
  audio();
  setVolume(Number(e.target.value)/100)
};
$('mute').onclick=()=>{
  audio();
  if(muted||!VOL){
    if(!VOL)VOL=lastVolume;
    muted=false
  }else{
    lastVolume=VOL;
    muted=true
  }
  syncVolume()
};
$('vdown').onclick=()=>{
  audio();
  if(muted){muted=false;VOL=lastVolume}
  setVolume(VOL-.1)
};
$('vup').onclick=()=>{
  audio();
  if(muted){muted=false;VOL=lastVolume}
  setVolume(VOL+.1)
};
