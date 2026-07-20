
// =================================================
//  IPTV GLOBAL HD - v2.0 App Completa
// =================================================
const STORAGE_KEY = 'iptv_global_hd_v2';
const $ = id => document.getElementById(id);

const S = {
  mode:'xtream', server:'', user:'', pass:'', m3uUrl:'', token:'',
  cats:[], channels:{}, history:[], favorites:[],
  currentCat:null, currentChannels:[], infoOpen:false,
};

// Usa el proxy para llamadas genéricas a la API, y /stream para streams de video
const proxyUrl = url => `/proxy?url=${encodeURIComponent(url)}`;
const getStreamUrl = url => `/stream?url=${encodeURIComponent(url)}`;

// ---------- DOM ----------
const vLogin=$('v-login'), vHome=$('v-home'), vChannels=$('v-channels'), vPlayer=$('v-player');
const topbar=$('topbar');

// Escapa caracteres especiales de HTML para evitar atributos rotos
function esc(str) {
  return String(str||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// Construye la URL del stream
function resolveStreamUrl(ch) {
  if(S.mode==='m3u') {
    return getStreamUrl(ch.stream_url||'');
  }
  return getStreamUrl(`${S.server}/live/${encodeURIComponent(S.user)}/${encodeURIComponent(S.pass)}/${ch.stream_id}.ts`);
}

// Carga la imagen del logo en un elemento img existente con SVG de respaldo
function setLogo(imgEl, src, name) {
  const fallback = svgFallback(name);
  imgEl.onerror = () => { imgEl.onerror=null; imgEl.src = fallback; };
  imgEl.src = src || fallback;
}

function showView(name) {
  [vLogin,vHome,vChannels,vPlayer].forEach(v=>v.classList.remove('show'));
  topbar.style.display = (name!=='login'&&name!=='player') ? 'flex' : 'none';
  if(name==='login')    vLogin.classList.add('show');
  if(name==='home')     vHome.classList.add('show');
  if(name==='channels') vChannels.classList.add('show');
  if(name==='player')   vPlayer.classList.add('show');
}

function cleanCatName(raw) {
  if(!raw) return 'Sin nombre';
  return raw.replace(/^\d{1,2}\/\d{1,2}\s*\|?\s*/,'').trim() || raw;
}

function catMeta(name) {
  const n = name.toLowerCase();
  const rules=[
    {kw:['fifa','copa mundial','world cup','mundial'],icon:'⚽',color:'#16a34a'},
    {kw:['nba','basketball','baloncesto'],icon:'🏀',color:'#ea580c'},
    {kw:['nfl','american football'],icon:'🏈',color:'#92400e'},
    {kw:['mlb','baseball'],icon:'⚾',color:'#0369a1'},
    {kw:['ufc','mma','combate','lucha','wrestling','wwe'],icon:'🥊',color:'#dc2626'},
    {kw:['formula','f1','nascar','motogp'],icon:'🏎️',color:'#7c3aed'},
    {kw:['tenis','tennis'],icon:'🎾',color:'#ca8a04'},
    {kw:['golf'],icon:'⛳',color:'#15803d'},
    {kw:['peliculas','películas','movies','cine'],icon:'🎬',color:'#7c3aed'},
    {kw:['series','shows'],icon:'📺',color:'#0891b2'},
    {kw:['news','noticias','noticiero'],icon:'📰',color:'#dc2626'},
    {kw:['music','musica','música'],icon:'🎵',color:'#7c3aed'},
    {kw:['disney','infantil','kids','niños'],icon:'🏰',color:'#db2777'},
    {kw:['natgeo','nat geo','discovery','documental'],icon:'🌍',color:'#059669'},
    {kw:['fox','espn','deportes','sports','sport','deporte'],icon:'🏆',color:'#d97706'},
    {kw:['dazn'],icon:'🎯',color:'#9333ea'},
    {kw:['premium','vip'],icon:'👑',color:'#b45309'},
    {kw:['eventos','events','exclusivos'],icon:'🎉',color:'#e11d48'},
    {kw:['variedades','variety','general'],icon:'📡',color:'#0284c7'},
    {kw:['amazon','prime'],icon:'📦',color:'#0ea5e9'},
    {kw:['hbo','max'],icon:'🎭',color:'#6d28d9'},
    {kw:['paramount'],icon:'⭐',color:'#4338ca'},
    {kw:['globo'],icon:'🌐',color:'#065f46'},
    {kw:['latam','latinoamerica'],icon:'🌎',color:'#0f766e'},
    {kw:['4k','uhd'],icon:'📽️',color:'#4f46e5'},
    {kw:['mlb del día'],icon:'⚾',color:'#0369a1'},
    {kw:['disney+','disney-'],icon:'🏰',color:'#db2777'},
    {kw:['semana','heroes','guerra'],icon:'🎯',color:'#991b1b'},
  ];
  for(const rule of rules) if(rule.kw.some(k=>n.includes(k))) return {icon:rule.icon,color:rule.color};
  return {icon:'📡',color:'#374151'};
}

function svgFallback(name) {
  const initials=name.replace(/\s*\(.*?\)\s*/g,'').split(/[\s\-_|]+/).filter(Boolean).slice(0,2).map(w=>w[0]?.toUpperCase()||'').join('');
  const colors=['#dc2626','#2563eb','#059669','#d97706','#7c3aed','#db2777','#0891b2','#ea580c'];
  const color=colors[name.charCodeAt(0)%colors.length];
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="90" viewBox="0 0 160 90"><rect width="160" height="90" fill="${color}22"/><text x="80" y="58" font-family="Arial,sans-serif" font-size="28" font-weight="900" text-anchor="middle" fill="${color}">${initials||'TV'}</text></svg>`)}`;
}

// ---------- ALMACENAMIENTO ----------
function saveStorage() {
  try { localStorage.setItem(STORAGE_KEY,JSON.stringify({mode:S.mode,server:S.server,user:S.user,pass:S.pass,m3uUrl:S.m3uUrl,token:S.token,history:S.history.slice(0,30),favorites:S.favorites.slice(0,50)})); } catch(e){}
}
function loadStorage() {
  try { const d=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}'); Object.assign(S,d); } catch(e){}
}
function clearStorage() { localStorage.removeItem(STORAGE_KEY); }

// ---------- PARSER M3U ----------
function parseM3U(text) {
  const lines = text.split('\n').map(l=>l.trim()).filter(Boolean);
  const cats = {};
  for(let i=0; i<lines.length; i++) {
    if(!lines[i].startsWith('#EXTINF')) continue;
    
    let line = lines[i];
    let nextLine = lines[i+1] || '';
    let extGrp = '';
    
    // Verifica si la siguiente línea es #EXTGRP (algunos proveedores lo usan en vez de group-title)
    if(nextLine.startsWith('#EXTGRP:')) {
      extGrp = nextLine.substring(8).trim();
      nextLine = lines[i+2] || '';
    }
    
    // Omitir si no se encontró URL de stream
    if(!nextLine || nextLine.startsWith('#')) continue;
    
    // Parsear atributos
    const attr = s => (line.match(new RegExp(s+'=["\']([^"\']*)["\']'))||[])[1]||'';
    const name = line.includes(',') ? line.split(',').slice(1).join(',').trim() : 'Sin nombre';
    const tvgName = attr('tvg-name') || name;
    const logo = attr('tvg-logo') || '';
    let group = attr('group-title') || extGrp || 'General';
    
    // Limpiar el nombre del grupo
    group = group.replace(/^[0-9]+\s*[-|/]\s*/, '').trim() || 'General';

    // Convertir URLs de stream .ts a .m3u8 (Xtream Codes soporta ambos formatos)
    const streamUrl = nextLine.replace(/\.ts(\?[^\s]*)?$/, '.m3u8$1');
    
    if(!cats[group]) cats[group] = { category_id: group, category_name: group, channels: [] };
    cats[group].channels.push({ stream_id: `m3u_${i}`, name: tvgName, stream_icon: logo, stream_url: streamUrl, category_id: group });
  }
  return Object.values(cats);
}

// ---------- INICIO DE SESIÓN ----------
$('btn-login').onclick=async()=>{
  const err=$('login-err'); err.textContent='';
  const token = $('inp-token').value.trim();
  
  if(!token){err.textContent='Ingresa tu Token de acceso.';return;}
  setLoginLoading(true);

  if (token === 'ADMIN123') {
     try {
       const ra = await fetch('/admin/login', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({password: token}) });
       if (!ra.ok) throw new Error('Error admin');
       showView('admin');
       loadAdminTokens();
     } catch (e) {
       err.textContent = 'Credenciales maestras inválidas';
     }
     setLoginLoading(false);
     return;
  }

  try {
      const req = await fetch('/api/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({token}) });
      const data = await req.json();
      if(!data.success) throw new Error(data.error || 'Token inválido');
      
      const { server, user, pass } = data.config;
      let r=await fetch(proxyUrl(`${server}/player_api.php?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}&action=get_live_categories`));
      
      let cats = await r.json();
      if(!Array.isArray(cats)) throw new Error('Respuesta inválida de Xtream API.');
      
      S.server=server; S.user=user; S.pass=pass; S.mode='xtream'; S.token=token;
      saveStorage();
      showView('home'); topbar.style.display='flex';
      $('tb-user').textContent = `Token: ${token}`;
      renderHistory();
      renderCats(cats);
    } catch(e) {
      err.textContent=e.message;
    } finally {
      setLoginLoading(false);
    }
};

function setLoginLoading(on) {
  $('btn-login').disabled=on;
  $('login-spin').style.display=on?'inline-block':'none';
  $('login-txt').textContent=on?'Conectando...':'Conectar';
}

// ---------- CATEGORÍAS ----------
const catObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ catObserver.unobserve(entry.target); enqueueLogoLoad(entry.target, entry.target.dataset.catId); }
  });
},{rootMargin:'120px'});

function renderCats(cats) {
  const grid=$('cat-grid'); grid.innerHTML='';
  if(!cats.length){grid.innerHTML='<div class="state-box"><div class="icon">😔</div><p>No hay categorías</p></div>';return;}
  cats.forEach((cat,idx)=>{
    const cleanName=cleanCatName(cat.category_name);
    const meta=catMeta(cleanName);
    const card=document.createElement('div');
    card.className='cat-card fade-in'; card.style.animationDelay=`${Math.min(idx*0.03,0.5)}s`;
    card.dataset.catId=cat.category_id; card.dataset.name=cleanName;
    const safeName = esc(cleanName);
    card.innerHTML=`
      <div class="cat-logos">
        <div class="cat-logo-slot">${meta.icon}</div>
        <div class="cat-logo-slot">${meta.icon}</div>
        <div class="cat-logo-slot">${meta.icon}</div>
        <div class="cat-logo-slot">${meta.icon}</div>
      </div>
      <div class="cat-overlay"></div>
      <div class="cat-color-bar" style="background:linear-gradient(90deg,${meta.color},${meta.color}55)"></div>
      <div class="cat-info">
        <div class="cat-name">${safeName}</div>
        <div class="cat-bottom">
          <span class="cat-badge">${cat.channel_count?cat.channel_count+' canales':'Ver canales'}</span>
          <span class="cat-icon-label">${meta.icon}</span>
        </div>
      </div>`;
    // Si es categoría adulta, agregar overlay de candado
    if (isAdultCategory(cleanName)) {
      const lockOv = document.createElement('div'); lockOv.className='cat-lock-overlay';
      lockOv.innerHTML='<div class="cat-lock-icon">🔒</div>';
      card.appendChild(lockOv);
    }
    card.onclick=()=>openCategory(cat,cleanName);
    grid.appendChild(card);
    catObserver.observe(card);
  });
}

// ---------- SISTEMA DE COLA THROTTLED PARA LOGOS DE CATEGORÍAS ----------
// Carga los logos de forma controlada: 1 categoría a la vez, con pausa entre peticiones.
// Esto evita el rate-limiting del proveedor mientras permite que todas las tarjetas tengan logos.
const logoQueue = [];
let logoQueueRunning = false;
const LOGO_FETCH_DELAY = 600; // ms entre cada petición a la API (seguro para la mayoría de paneles)

function enqueueLogoLoad(cardEl, catId) {
  // No encolar si ya tenemos los canales en caché
  if (S.channels[catId] && S.channels[catId].length) {
    applyLogosToCard(cardEl, catId);
    return;
  }
  // Solo encolar en modo Xtream (M3U ya tiene todo en memoria)
  if (S.mode !== 'xtream') return;
  // Evitar duplicados en la cola
  if (logoQueue.some(item => item.catId === catId)) return;
  logoQueue.push({ cardEl, catId });
  drainLogoQueue();
}

async function drainLogoQueue() {
  if (logoQueueRunning || logoQueue.length === 0) return;
  logoQueueRunning = true;

  while (logoQueue.length > 0) {
    const { cardEl, catId } = logoQueue.shift();
    // Si la tarjeta ya no está en el DOM (usuario cambió de vista), saltar
    if (!cardEl.isConnected) continue;
    // Si ya se cargaron los canales mientras esperaba en cola, solo aplicar
    if (S.channels[catId] && S.channels[catId].length) {
      applyLogosToCard(cardEl, catId);
      continue;
    }
    try {
      const r = await fetch(proxyUrl(`${S.server}/player_api.php?username=${encodeURIComponent(S.user)}&password=${encodeURIComponent(S.pass)}&action=get_live_streams&category_id=${catId}`));
      if (r.ok) {
        const channels = await r.json();
        if (Array.isArray(channels)) {
          S.channels[catId] = channels;
          applyLogosToCard(cardEl, catId);
          // Actualizar el badge de conteo si existe
          const badge = cardEl.querySelector('.cat-badge');
          if (badge) badge.textContent = channels.length + ' canales';
        }
      }
    } catch (e) { /* Silenciar errores de red — el logo simplemente no se carga */ }
    // Throttle: esperar antes de la siguiente petición para no saturar la API
    if (logoQueue.length > 0) {
      await new Promise(resolve => setTimeout(resolve, LOGO_FETCH_DELAY));
    }
  }
  logoQueueRunning = false;
}

function applyLogosToCard(cardEl, catId) {
  try {
    const channels = S.channels[catId];
    if (!Array.isArray(channels) || !channels.length) return;
    const slots = cardEl.querySelectorAll('.cat-logo-slot');
    const logos = channels.filter(c => c.stream_icon).slice(0, 4);
    slots.forEach((slot, i) => {
      if (!logos[i]) return;
      const img = document.createElement('img'); img.alt = '';
      img.onload = () => { img.classList.add('loaded'); };
      setLogo(img, logos[i].stream_icon, logos[i].name);
      slot.innerHTML = ''; slot.appendChild(img);
    });
  } catch (e) {}
}

$('cat-search').oninput=function(){
  const q=this.value.toLowerCase();
  document.querySelectorAll('.cat-card').forEach(card=>{
    card.style.display=card.dataset.name.toLowerCase().includes(q)?'':'none';
  });
};

// ---------- SISTEMA DE CONTROL PARENTAL ----------
const ADULT_KEYWORDS = ['adult','adulto','adultos','xxx','18+','+18','porn','porno','hot','erotic','erótico','sexy','naked','desnudo','playboy','penthouse','hustler','brazzers','nsfw'];
let adultUnlocked = false; // Se resetea al cerrar la pestaña (sesión)
let pendingAdultCat = null;
let pendingAdultName = null;

function isAdultCategory(name) {
  const n = name.toLowerCase();
  return ADULT_KEYWORDS.some(kw => n.includes(kw));
}

function showAdultModal(cat, cleanName) {
  pendingAdultCat = cat;
  pendingAdultName = cleanName;
  $('modal-adult-pass').value = '';
  $('modal-adult-err').textContent = '';
  $('modal-adult').classList.add('show');
  setTimeout(() => $('modal-adult-pass').focus(), 100);
}

$('btn-modal-cancel').onclick = () => {
  $('modal-adult').classList.remove('show');
  pendingAdultCat = null; pendingAdultName = null;
};

$('btn-modal-enter').onclick = () => {
  const pass = $('modal-adult-pass').value;
  if (pass === 'THEyosua_503') {
    adultUnlocked = true;
    $('modal-adult').classList.remove('show');
    // Quitar todos los candados visuales
    document.querySelectorAll('.cat-lock-overlay').forEach(el => el.remove());
    if (pendingAdultCat) openCategory(pendingAdultCat, pendingAdultName);
    pendingAdultCat = null; pendingAdultName = null;
  } else {
    $('modal-adult-err').textContent = '❌ Contraseña incorrecta';
    $('modal-adult-pass').value = '';
    $('modal-adult-pass').focus();
  }
};

$('modal-adult-pass').addEventListener('keydown', e => {
  if (e.key === 'Enter') $('btn-modal-enter').click();
  if (e.key === 'Escape') $('btn-modal-cancel').click();
});

// Cerrar modal al hacer clic fuera
$('modal-adult').addEventListener('click', e => {
  if (e.target === $('modal-adult')) $('btn-modal-cancel').click();
});

// ---------- ABRIR CATEGORÍA ----------
async function openCategory(cat,cleanName) {
  // GATE: Si es adulto y no está desbloqueado, pedir contraseña
  if (isAdultCategory(cleanName) && !adultUnlocked) {
    showAdultModal(cat, cleanName);
    return;
  }
  S.currentCat=cat;
  $('ch-view-title').textContent=cleanName;
  $('ch-search').value='';
  $('ch-count-label').textContent='Cargando...';
  $('ch-grid').innerHTML=`<div class="state-box"><div class="spinner" style="width:32px;height:32px;border-width:3px;"></div><p style="margin-top:16px">Cargando canales...</p></div>`;
  showView('channels');
  try {
    let channels=S.channels[cat.category_id];

    // Modo M3U: los canales ya están guardados, nunca hacer llamada a la API
    if(!channels && S.mode==='m3u') {
      throw new Error('No se encontraron canales para esta categoría.');
    }

    // Modo Xtream: obtener de la API si no está en caché
    if(!channels && S.mode==='xtream') {
      const r=await fetch(proxyUrl(`${S.server}/player_api.php?username=${encodeURIComponent(S.user)}&password=${encodeURIComponent(S.pass)}&action=get_live_streams&category_id=${cat.category_id}`));
      if(!r.ok) throw new Error('HTTP '+r.status);
      channels=await r.json();
      if(!Array.isArray(channels)) throw new Error('Respuesta inválida');
      S.channels[cat.category_id]=channels;
    }

    S.currentChannels=channels||[];
    $('ch-count-label').textContent=(channels||[]).length+' canales';
    renderChannels(channels||[]);
  } catch(e){ $('ch-grid').innerHTML=`<div class="state-box"><div class="icon">⚠️</div><p>Error: ${e.message}</p></div>`; }
}


// ---------- CANALES ----------
function renderChannels(channels) {
  const grid=$('ch-grid'); grid.innerHTML='';
  if(!channels.length){grid.innerHTML='<div class="state-box"><div class="icon">📭</div><p>No hay canales en esta categoría</p></div>';return;}
  channels.forEach((ch,idx)=>{
    const streamUrl = resolveStreamUrl(ch);
    const isFav = S.favorites.some(f=>f.stream_id===ch.stream_id);

    // Construir la tarjeta con DOM para evitar problemas de inyección HTML
    const card = document.createElement('div');
    card.className='ch-card fade-in'; card.style.animationDelay=`${Math.min(idx*0.015,0.4)}s`;

    // Contenedor del logo
    const wrap = document.createElement('div'); wrap.className='ch-logo-wrap';

    // Imagen del logo - se usa DOM para poder configurar onerror de forma segura
    const img = document.createElement('img'); img.loading='lazy'; img.alt=ch.name;
    setLogo(img, ch.stream_icon, ch.name);
    wrap.appendChild(img);

    // Insignia de EN VIVO
    const badge = document.createElement('div'); badge.className='live-badge';
    badge.innerHTML='<div class="live-dot"></div>EN VIVO';
    wrap.appendChild(badge);

    // Botón de favorito
    const favBtn = document.createElement('button');
    favBtn.className='ch-fav-btn'+(isFav?' faved':'');
    favBtn.title='Favorito'; favBtn.textContent=isFav?'★':'☆';
    favBtn.onclick=e=>{
      e.stopPropagation(); toggleFavorite(ch,streamUrl);
      favBtn.classList.toggle('faved'); favBtn.textContent=favBtn.classList.contains('faved')?'★':'☆';
    };
    wrap.appendChild(favBtn);
    card.appendChild(wrap);

    // Nombre del canal
    const nameEl = document.createElement('div'); nameEl.className='ch-name'; nameEl.title=ch.name; nameEl.textContent=ch.name;
    card.appendChild(nameEl);

    card.onclick=()=>playChannel(ch,streamUrl);
    grid.appendChild(card);
  });
}

$('ch-search').oninput=function(){
  const q=this.value.toLowerCase();
  if(!q){renderChannels(S.currentChannels);return;}
  const f=S.currentChannels.filter(ch=>ch.name.toLowerCase().includes(q));
  $('ch-count-label').textContent=f.length+' canales'; renderChannels(f);
};

// ---------- REPRODUCTOR ----------
let mainPlayer=null, uiHideTimer=null;

async function playChannel(ch,streamUrl) {
  $('player-ch-name').textContent=ch.name;
  $('info-ch-name').textContent=ch.name;
  $('info-desc').textContent='Buscando información...';
  $('info-tags').innerHTML='';
  const logoSrc=ch.stream_icon||svgFallback(ch.name);
  const infoLogo=$('info-logo'); infoLogo.src=logoSrc; infoLogo.style.display='block';
  showView('player');
  if(mainPlayer){mainPlayer.destroy();mainPlayer=null;}
  const vid=$('vid'); vid.pause(); vid.removeAttribute('src'); vid.load();
  
  if(streamUrl.includes('.m3u8') && Hls.isSupported()){
    mainPlayer=new Hls({maxLiveSyncPlaybackRate:1.5});
    mainPlayer.loadSource(streamUrl); mainPlayer.attachMedia(vid);
    mainPlayer.on(Hls.Events.MANIFEST_PARSED,()=>vid.play().catch(()=>{}));
    mainPlayer.on(Hls.Events.ERROR,(e,d)=>{
      if(d.fatal){
        if(d.type===Hls.ErrorTypes.NETWORK_ERROR) mainPlayer.startLoad();
        else if(d.type===Hls.ErrorTypes.MEDIA_ERROR) mainPlayer.recoverMediaError();
      }
    });
  } else if (mpegts.getFeatureList().mseLivePlayback) {
    mainPlayer=mpegts.createPlayer({type:streamUrl.includes('.ts')?'mpegts':'m2ts',isLive:true,url:streamUrl});
    mainPlayer.attachMediaElement(vid);
    mainPlayer.load();
    mainPlayer.play().catch(()=>{});
  } else if(vid.canPlayType('application/vnd.apple.mpegurl')){
    vid.src=streamUrl; vid.play().catch(()=>{});
  }
  addToHistory({...ch,streamUrl,ts:Date.now()});
  fetchChannelInfo(ch.name);
  setupPlayerUIHide();
}

function setupPlayerUIHide(){
  const ui=$('player-ui'); ui.classList.remove('hide');
  document.querySelector('.player-main').onmousemove=()=>{
    ui.classList.remove('hide'); clearTimeout(uiHideTimer);
    uiHideTimer=setTimeout(()=>ui.classList.add('hide'),3000);
  };
}

$('btn-info-toggle').onclick=()=>{
  S.infoOpen=!S.infoOpen;
  $('player-info').classList.toggle('open',S.infoOpen);
};

$('btn-close-player').onclick=()=>{
  if(mainPlayer){mainPlayer.destroy();mainPlayer=null;}
  const vid=$('vid'); vid.pause(); vid.removeAttribute('src'); vid.load();
  $('player-info').classList.remove('open'); S.infoOpen=false;
  showView('channels');
};

// ---------- WIKIPEDIA ----------
async function fetchChannelInfo(channelName) {
  const desc=$('info-desc'), tags=$('info-tags');
  try {
    const cleanName=channelName.replace(/\s*(HD|SD|FHD|4K|\d+)\s*/gi,' ').trim();
    // Probar primero con la Wikipedia en inglés
    const tryWiki=async(lang,name)=>{
      const r=await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`,{signal:AbortSignal.timeout(5000)});
      if(!r.ok) return null;
      const d=await r.json();
      return (d.extract&&d.type!=='disambiguation')? d : null;
    };
    let data=await tryWiki('en',cleanName)||await tryWiki('es',cleanName);
    if(!data) {
      // Probar solo con la primera palabra (marca del canal)
      const brand=cleanName.split(/[\s\-]/)[0];
      if(brand&&brand.length>2) data=await tryWiki('en',brand)||await tryWiki('es',brand);
    }
    if(data) {
      desc.textContent=data.extract.substring(0,350)+(data.extract.length>350?'...':'');
      if(data.thumbnail?.source&&$('info-logo').src.includes('svg+xml')) $('info-logo').src=data.thumbnail.source;
      tags.innerHTML='';
      if(data.description){const t=document.createElement('span');t.className='info-tag';t.textContent=data.description;tags.appendChild(t);}
    } else {
      desc.textContent='Canal de televisión en vivo. Disfruta tu contenido sin interrupciones.';
    }
  } catch(e){ desc.textContent='Canal en vivo. La transmisión está activa.'; }
}

// ---------- HISTORIAL ----------
function addToHistory(ch){
  S.history=S.history.filter(h=>h.stream_id!==ch.stream_id);
  S.history.unshift(ch); S.history=S.history.slice(0,20); saveStorage();
}
function renderHistory(){
  const section=$('history-section'), row=$('history-row');
  if(!S.history.length){section.classList.remove('show');return;}
  section.classList.add('show'); row.innerHTML='';
  S.history.forEach(ch=>{
    const card=document.createElement('div'); card.className='ch-card-sm';
    const wrap = document.createElement('div'); wrap.className='ch-logo-wrap';
    const img = document.createElement('img'); img.alt = ch.name;
    setLogo(img, ch.stream_icon, ch.name);
    wrap.appendChild(img);
    const badge = document.createElement('div'); badge.className='live-badge'; badge.innerHTML='<div class="live-dot"></div>EN VIVO';
    wrap.appendChild(badge);
    const nameEl = document.createElement('div'); nameEl.className='ch-name'; nameEl.title=ch.name; nameEl.textContent=ch.name;
    card.appendChild(wrap);
    card.appendChild(nameEl);
    card.onclick=()=>playChannel(ch,ch.streamUrl); row.appendChild(card);
  });
}

// ---------- FAVORITOS ----------
function toggleFavorite(ch,streamUrl){
  const idx=S.favorites.findIndex(f=>f.stream_id===ch.stream_id);
  if(idx>=0) S.favorites.splice(idx,1);
  else { S.favorites.unshift({...ch,streamUrl}); S.favorites=S.favorites.slice(0,50); }
  saveStorage();
}

// ---------- BOTONES DE BARRA SUPERIOR ----------
$('btn-go-home').onclick=()=>{showView('home');renderHistory();};
$('btn-favs').onclick=()=>{
  if(!S.favorites.length){alert('Aún no tienes favoritos. Dale ★ a tus canales favoritos.');return;}
  S.currentChannels=S.favorites;
  $('ch-view-title').textContent='⭐ Favoritos';
  $('ch-count-label').textContent=S.favorites.length+' canales';
  renderChannels(S.favorites); showView('channels');
};
$('btn-logout').onclick=()=>{
  $('modal-logout').classList.add('show');
};
$('btn-logout-cancel').onclick=()=>{
  $('modal-logout').classList.remove('show');
};
$('btn-logout-confirm').onclick=()=>{
  $('modal-logout').classList.remove('show');
  if(mainPlayer){mainPlayer.destroy();mainPlayer=null;}
  clearStorage();
  Object.assign(S,{mode:'xtream',server:'',user:'',pass:'',m3uUrl:'',cats:[],channels:{},history:[],favorites:[],currentCat:null,currentChannels:[],infoOpen:false,token:''});
  ['inp-token'].forEach(id=>{if($(id))$(id).value=''});
  showView('login'); topbar.style.display='none';
};
$('btn-back').onclick=()=>showView('home');

// ---------- TECLADO ----------
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(vPlayer.classList.contains('show')) $('btn-close-player').click();
    else if(vChannels.classList.contains('show')) showView('home');
  }
  if((e.key==='f'||e.key==='F')&&vPlayer.classList.contains('show')) $('vid').requestFullscreen?.();
});

// ====== FUNCIONES ADMINISTRATIVAS ======
function logoutAdmin() {
  ['inp-token'].forEach(id=>{if($(id))$(id).value=''});
  showView('login');
}
async function loadAdminTokens() {
  try {
    const r = await fetch('/admin/tokens');
    const tokens = await r.json();
    const list = $('adm-list');
    if(list) {
      list.innerHTML = tokens.map(t => `
        <div style="background:var(--surface2); padding:12px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <b style="color:var(--text); font-size:16px;">${t.token}</b>
            <div style="font-size:12px; color:var(--muted); margin-top:4px;">Expira: ${new Date(t.expiresAt).toLocaleDateString()} | User: ${t.config.user}</div>
          </div>
          <button class="tb-btn" onclick="adminDeleteToken('${t.token}')" style="background:#400; color:#f87171; border-color:#f87171;">Eliminar</button>
        </div>
      `).join('');
    }
  } catch(e) {}
}
async function adminGenerateToken() {
  const days = $('adm-days').value;
  const server = $('adm-server').value;
  const user = $('adm-user').value;
  const pass = $('adm-pass').value;
  if(!days || !server || !user || !pass) return;
  
  const r = await fetch('/admin/tokens', {
    method: 'POST', headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({days, server, user, pass})
  });
  const data = await r.json();
  const res = $('adm-res');
  if(res) {
    res.textContent = `NUEVO TOKEN: ${data.token}`;
  }
  loadAdminTokens();
}
async function adminDeleteToken(token) {
  if(!confirm('¿Eliminar este token?')) return;
  await fetch(`/admin/tokens/${token}`, { method: 'DELETE' });
  loadAdminTokens();
}

// ---------- INICIO DE SESIÓN AUTOMÁTICO ----------
loadStorage();
showView('login');
if (S.token && $('inp-token')) {
  $('inp-token').value = S.token;
  if ($('inp-remember')) $('inp-remember').checked = true;
  if ($('btn-login')) $('btn-login').click(); // Auto-trigger login logic
}
