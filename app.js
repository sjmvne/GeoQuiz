// ============= DATA =============
const URL_WORLD = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
// Moved dictAmericas to data.js

// ============= STATE =============
let geoData=null, svg=null, mapGroup=null, pathGenerator=null, zoomBehavior=null, cachedTopo=null;
let currentMode=null, gameActive=false, totalStates=0, currentZone=null;
let quizQueue=[], currentTarget=null, clickAnswers=[];
let activeTypeFeature=null, typedAnswers={};
let timerInterval=null, timeLeft=0;
const isTouchDevice=()=>window.matchMedia("(pointer:coarse)").matches;

// ============= DOM =============
const $=id=>document.getElementById(id);

// ============= NAVIGATION =============
function navigateTo(id){
  document.querySelectorAll('.screen').forEach(s=>{s.classList.remove('active');s.classList.remove('screen-enter')});
  const el=$('screen-'+id);
  el.classList.add('active','screen-enter');
  if(id!=='game') clearTimer();
}

function selectZone(zoneId){
  if(currentZone!==zoneId){
    currentZone=zoneId;
    mapLoaded=false;
  }
  document.querySelectorAll('.zone-card').forEach(c=>c.classList.remove('active'));
  $('card-'+zoneId).classList.add('active');
  const titles = {americas:'America', europe:'Europa', asia:'Asia', africa:'Africa'};
  $('mode-title').innerText = titles[zoneId] || 'GeoQuiz';
  navigateTo('mode');
}

function exitGame(){
  clearTimer();
  gameActive=false;
  navigateTo('mode');
}

// ============= MAP =============
let mapLoaded=false;
async function loadMap(){
  if(mapLoaded) return;
  try{
    let topo = cachedTopo;
    if(!topo){
      const r=await fetch(URL_WORLD);
      topo=await r.json();
      cachedTopo=topo;
    }
    const all=topojson.feature(topo,topo.objects.countries).features;
    let dict = {};
    if(currentZone==='americas') dict = dictAmericas;
    else if(currentZone==='europe') dict = dictEurope;
    else if(currentZone==='asia') dict = dictAsia;
    else if(currentZone==='africa') dict = dictAfrica;

    let feats=all.filter(f=>dict.hasOwnProperty(f.properties.name));
    feats.forEach(f=>{
      const d=dict[f.properties.name];
      Object.assign(f.properties,{itName:d.name,cap:d.cap,code:d.code,pop:d.pop,area:d.area,type:'land'});
    });
    geoData={type:"FeatureCollection",features:feats};
    mapLoaded=true;
  }catch(e){
    console.error(e);
    alert("Errore nel caricamento della mappa.");
  }
}

function renderMap(){
  const container=$('map-area');
  const w=container.clientWidth, h=container.clientHeight;
  const old=container.querySelector('svg');
  if(old) old.remove();
  svg=d3.select(container).insert('svg',':first-child').attr('width','100%').attr('height','100%')
    .attr('viewBox',`0 0 ${w} ${h}`).attr('preserveAspectRatio','xMidYMid meet');
  mapGroup=svg.append('g');
  const proj=d3.geoMercator().fitExtent([[w*.05,h*.05],[w*.95,h*.95]],geoData);
  pathGenerator=d3.geoPath().projection(proj);
  mapGroup.selectAll('path').data(geoData.features).enter().append('path')
    .attr('d',pathGenerator).attr('class','map-path')
    .on('click',handleMapClick)
    .on('mouseenter',showTooltip).on('mousemove',moveTooltip).on('mouseleave',hideTooltip);
  zoomBehavior=d3.zoom().scaleExtent([1,8]).translateExtent([[0,0],[w,h]])
    .on('zoom',e=>mapGroup.attr('transform',e.transform));
  svg.call(zoomBehavior);
}

function resetMapClasses(){
  if(!mapGroup) return;
  mapGroup.selectAll('.map-path').attr('class','map-path');
  if(svg&&zoomBehavior) svg.transition().duration(300).call(zoomBehavior.transform,d3.zoomIdentity);
}

// ============= GAME START =============
async function startGame(mode){
  currentMode=mode;
  gameActive=true;
  await loadMap();
  navigateTo('game');
  // Wait for screen to be visible, then render map
  requestAnimationFrame(()=>{requestAnimationFrame(()=>{
    renderMap();
    // Hide all sheets
    $('sheet-click').style.display='none';
    $('sheet-type').style.display='none';
    $('sheet-explore').style.display='none';
    $('time-badge').style.display='none';
    clearTimer();

    if(mode==='explore'){
      $('sheet-explore').style.display='block';
      $('explore-prompt').classList.remove('hidden');
      $('explore-info').classList.add('hidden');
      gameActive=false;
      return;
    }
    if(mode==='type'){
      $('sheet-type').style.display='block';
      totalStates=geoData.features.length;
      activeTypeFeature=null; typedAnswers={};
      clearTypeUI();
      updateTypeProgress();
      return;
    }
    // Click-based modes
    $('sheet-click').style.display='block';
    if(mode==='capital'||mode==='flag'){
      quizQueue=[...geoData.features.filter(f=>f.properties.type==='land')];
    }else{
      quizQueue=[...geoData.features];
    }
    totalStates=quizQueue.length;
    shuffleArray(quizQueue);
    clickAnswers=[];
    if(mode==='click') $('click-label').innerText='Trova lo stato:';
    if(mode==='time'){$('click-label').innerText='Trova in fretta:';$('time-badge').style.display='inline';startTimer(60);}
    if(mode==='capital') $('click-label').innerText="Dov'è la capitale:";
    if(mode==='flag') $('click-label').innerText='Di chi è la bandiera:';
    nextTarget();
  })});
}

// ============= CLICK MODE LOGIC =============
function nextTarget(){
  if(quizQueue.length===0){finishGame();return;}
  currentTarget=quizQueue.shift();
  const done=totalStates-quizQueue.length;
  $('click-progress').innerText=`${done}/${totalStates}`;
  $('click-bar').style.width=`${(done-1)/totalStates*100}%`;
  const box=$('target-box');
  box.style.opacity='0';
  setTimeout(()=>{
    $('target-name').classList.add('hidden');
    $('target-flag').classList.add('hidden');
    if(currentMode==='click'||currentMode==='time'){
      $('target-name').innerText=currentTarget.properties.itName;
      $('target-name').classList.remove('hidden');
    }else if(currentMode==='capital'){
      $('target-name').innerText=currentTarget.properties.cap;
      $('target-name').classList.remove('hidden');
    }else if(currentMode==='flag'){
      $('target-flag').src=`https://flagcdn.com/h80/${currentTarget.properties.code}.png`;
      $('target-flag').classList.remove('hidden');
    }
    box.style.opacity='1';
  },120);
}

// ============= TIMER =============
function startTimer(s){
  timeLeft=s; updateTimerUI();
  timerInterval=setInterval(()=>{
    timeLeft--;updateTimerUI();
    if(timeLeft<=0){clearTimer();finishGame("Tempo Scaduto!");}
  },1000);
}
function clearTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimerUI(){$('time-badge').innerText=`⏱️ ${timeLeft}s`;}

function showTimeFloat(amt,x,y){
  const el=document.createElement('div');
  el.className='time-float';el.style.color=amt>0?'#16a34a':'#dc2626';
  el.innerText=(amt>0?'+':'')+amt+'s';el.style.left=x+'px';el.style.top=y+'px';
  document.body.appendChild(el);setTimeout(()=>el.remove(),800);
}

// ============= MAP CLICK =============
function handleMapClick(event,d){
  if(!gameActive&&currentMode!=='explore') return;
  const el=d3.select(this);

  if(currentMode==='explore'){
    mapGroup.selectAll('.map-path').classed('active-explore',false);
    el.classed('active-explore',true);
    $('explore-prompt').classList.add('hidden');
    $('explore-info').classList.remove('hidden');
    $('exp-name').innerText=d.properties.itName;
    $('exp-flag').src=`https://flagcdn.com/h80/${d.properties.code}.png`;
    $('exp-cap').innerHTML=`Capitale: <b>${d.properties.cap}</b>`;
    $('exp-pop').innerText=d.properties.pop;
    $('exp-area').innerText=d.properties.area;
    return;
  }

  if(currentMode==='type'){
    activeTypeFeature=d;
    mapGroup.selectAll('.map-path').classed('active-typing',false);
    el.classed('active-typing',true);
    $('type-prompt').classList.add('hidden');
    $('type-input-area').classList.remove('hidden');
    if(typedAnswers[d.id]){
      $('type-input').value=typedAnswers[d.id];
      $('btn-delete-answer').classList.remove('hidden');
    }else{
      $('type-input').value='';
      $('btn-delete-answer').classList.add('hidden');
    }
    $('type-input').focus();
    return;
  }

  // Click/Time/Capital/Flag
  if(el.classed('selected')||el.classed('correct')) return;
  if(currentMode==='time'){
    if(d.id===currentTarget.id){
      el.classed('correct',true);timeLeft+=2;
      showTimeFloat(2,event.clientX,event.clientY);
      clickAnswers.push({targetId:currentTarget.id,clickedId:d.id});
      nextTarget();
    }else{
      el.classed('wrong',true);setTimeout(()=>el.classed('wrong',false),350);
      timeLeft=Math.max(0,timeLeft-2);
      showTimeFloat(-2,event.clientX,event.clientY);updateTimerUI();
    }
  }else{
    el.classed('selected',true);
    clickAnswers.push({targetId:currentTarget.id,clickedId:d.id});
    nextTarget();
  }
}

// ============= TYPE MODE =============
function handleTypeSubmit(){
  if(!activeTypeFeature) return;
  const val=$('type-input').value.trim();
  if(val.length>0){
    typedAnswers[activeTypeFeature.id]=val;
    mapGroup.selectAll('.map-path').filter(dd=>dd.id===activeTypeFeature.id).classed('answered',true).classed('active-typing',false);
  }else{
    deleteTypedAnswer();return;
  }
  clearTypeUI();updateTypeProgress();
}

function deleteTypedAnswer(){
  if(!activeTypeFeature) return;
  delete typedAnswers[activeTypeFeature.id];
  mapGroup.selectAll('.map-path').filter(dd=>dd.id===activeTypeFeature.id).classed('answered',false);
  clearTypeUI();updateTypeProgress();
}

function clearTypeUI(){
  activeTypeFeature=null;
  if(mapGroup) mapGroup.selectAll('.map-path').classed('active-typing',false);
  $('type-input-area').classList.add('hidden');
  $('type-prompt').classList.remove('hidden');
}

function updateTypeProgress(){
  const c=Object.keys(typedAnswers).length;
  $('type-progress').innerText=`${c}/${totalStates}`;
  $('type-bar').style.width=`${c/totalStates*100}%`;
}

// ============= FINISH & RESULTS =============
function finishGame(title){
  clearTimer();gameActive=false;
  let correct=0,typos=0,wrong=0,correctIds=[],wrongIds=[],typoDetails=[];

  if(currentMode==='type'){
    geoData.features.forEach(f=>{
      const res=checkFuzzy(f.properties.itName,typedAnswers[f.id]);
      if(res==='exact'){correct++;correctIds.push(f.id);}
      else if(res==='typo'){typos++;correctIds.push(f.id);typoDetails.push({exp:f.properties.itName,typed:typedAnswers[f.id],err:false});}
      else{wrong++;wrongIds.push(f.id);if(typedAnswers[f.id])typoDetails.push({exp:f.properties.itName,typed:typedAnswers[f.id],err:true});}
    });
  }else{
    const list=(currentMode==='capital'||currentMode==='flag')?geoData.features.filter(f=>f.properties.type==='land'):geoData.features;
    list.forEach(f=>{
      const ans=clickAnswers.find(a=>a.targetId===f.id);
      if(ans&&ans.clickedId===f.id){correct++;correctIds.push(f.id);}
      else{wrong++;wrongIds.push(f.id);}
    });
  }

  // Color the map
  mapGroup.selectAll('.map-path')
    .classed('selected',false).classed('active-typing',false).classed('answered',false)
    .attr('class',d=>`map-path ${correctIds.includes(d.id)?'correct':'wrong'}`);

  // Navigate to results
  navigateTo('results');
  $('results-title').innerText=title||'Risultati';
  $('results-emoji').innerText=wrong===0?'🏆':'📊';
  $('res-correct').innerText=correct;
  $('res-wrong').innerText=wrong;

  if(currentMode==='time'){
    $('res-wrong-row').classList.add('hidden');
    $('res-time-row').classList.remove('hidden');
    $('res-time').innerText=timeLeft+'s';
    if(correct>0){
      setTimeout(()=>{
        const name=prompt("Ottimo tempo! Inserisci il tuo nome per la classifica:");
        if(name){
          const score={name,time:timeLeft,correct,date:new Date().toISOString(),zone:currentZone};
          const scores=JSON.parse(localStorage.getItem('geoquiz_scores')||'[]');
          scores.push(score);
          localStorage.setItem('geoquiz_scores',JSON.stringify(scores));
        }
      },500);
    }
  }else{
    $('res-wrong-row').classList.remove('hidden');
    $('res-time-row').classList.add('hidden');
  }

  if(currentMode==='type'){
    $('res-typos-row').classList.remove('hidden');
    $('res-typos').innerText=typos;
  }else{
    $('res-typos-row').classList.add('hidden');
  }

  if(typoDetails.length>0){
    $('typo-details').classList.remove('hidden');
    $('typo-list').innerHTML=typoDetails.map(t=>
      t.err?`<li class="text-slate-600">Scritto <b class="text-red-500 line-through">${t.typed}</b> per <b>${t.exp}</b></li>`
      :`<li class="text-slate-600">Scritto <b class="text-orange-500">${t.typed}</b> per <b class="text-green-600">${t.exp}</b></li>`
    ).join('');
  }else{$('typo-details').classList.add('hidden');}

  if(wrong===0&&correct>0) fireConfetti();
}

// ============= STRING UTILS =============
function normalizeStr(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();}
function checkFuzzy(expected,typed){
  if(!typed) return 'wrong';
  const e=normalizeStr(expected),t=normalizeStr(typed);
  if(e===t) return 'exact';
  const max=e.length<=3?0:e.length<=6?1:e.length<=10?2:3;
  if(max>0&&editDist(e,t)<=max) return 'typo';
  return 'wrong';
}
function editDist(a,b){
  if(!a.length) return b.length;if(!b.length) return a.length;
  const m=[];
  for(let i=0;i<=b.length;i++) m[i]=[i];
  for(let j=0;j<=a.length;j++) m[0][j]=j;
  for(let i=1;i<=b.length;i++)
    for(let j=1;j<=a.length;j++)
      m[i][j]=b[i-1]===a[j-1]?m[i-1][j-1]:Math.min(m[i-1][j-1]+1,m[i][j-1]+1,m[i-1][j]+1);
  return m[b.length][a.length];
}

// ============= TOOLTIP =============
function showTooltip(event,d){
  if(isTouchDevice()) return;
  if(currentMode==='explore'||!gameActive){
    $('tooltip-text').innerText=d.properties.itName;
    $('map-tooltip').style.display='block';
  }
}
function moveTooltip(event){
  const tt=$('map-tooltip');if(tt.style.display!=='block') return;
  const r=$('map-area').getBoundingClientRect();
  tt.style.left=(event.clientX-r.left)+'px';tt.style.top=(event.clientY-r.top)+'px';
}
function hideTooltip(){$('map-tooltip').style.display='none';}

// ============= UTILS =============
function shuffleArray(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}}
function fireConfetti(){
  const end=Date.now()+3000;
  (function f(){
    confetti({particleCount:5,angle:60,spread:55,origin:{x:0},colors:['#58cc02','#1cb0f6','#ffc800']});
    confetti({particleCount:5,angle:120,spread:55,origin:{x:1},colors:['#58cc02','#1cb0f6','#ffc800']});
    if(Date.now()<end) requestAnimationFrame(f);
  })();
}

// ============= INIT =============
document.addEventListener('DOMContentLoaded',()=>{
  $('btn-skip').addEventListener('click',()=>{if(currentTarget){quizQueue.push(currentTarget);nextTarget();}});
  $('type-form').addEventListener('submit',e=>{e.preventDefault();handleTypeSubmit();});
  $('btn-clear-type').addEventListener('click',clearTypeUI);
  $('btn-delete-answer').addEventListener('click',deleteTypedAnswer);
});
