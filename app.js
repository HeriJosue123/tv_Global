// =================================================
//  IPTV GLOBAL HD - v2.0 App Completa
//  -> Base de Datos Firebase Inyectada
// =================================================


// ========== ESTADO ==========
const STORAGE_KEY = 'iptv_global_hd_v2';
const $ = id => document.getElementById(id);

const S = {
  mode:'xtream', server:'', user:'', pass:'', m3uUrl:'', clientUser:'', clientPass:'',
  cats:[], vodCats:[], seriesCats:[], channels:{}, history:[], favorites:[],
  currentCat:null, currentChannels:[], infoOpen:false,
};

// Usa el proxy para llamadas genéricas a la API, y /stream para streams de video
const proxyUrl = url => {
    if (!url) return '';
    if (url.startsWith('/')) return url; // local assets
    return '/proxy/image?url=' + encodeURIComponent(url) + '&sid=' + S.sessionId;
};
const getStreamUrl = url => url;

// ---------- DOM ----------
const vLogin=$('v-login'), vHome=$('v-home'), vChannels=$('v-channels'), vSeriesInfo=$('v-series-info'), vPlayer=$('v-player'), vAdmin=$('v-admin'), vMovies=$('v-movies'), vSeries=$('v-series');
const topbar=$('topbar');

// Escapa caracteres especiales de HTML para evitar atributos rotos
function esc(str) {
  return String(str||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// Construye la URL del stream

function resolveStreamUrl(ch) {
    if (!ch) return '';
    if (ch.stream_type === 'movie' || ch.container_extension === 'mp4' || ch.container_extension === 'mkv') {
        return `/proxy/stream/movie/${ch.stream_id}?ext=${ch.container_extension || 'mp4'}&sid=${S.sessionId}`;
    }
    if (ch.stream_type === 'series' || ch.episode_num) {
        return `/proxy/stream/series/${ch.id || ch.stream_id}?ext=${ch.container_extension || 'mp4'}&sid=${S.sessionId}`;
    }
    return `/proxy/stream/live/${ch.stream_id}?sid=${S.sessionId}`;
}


// Carga la imagen del logo en un elemento img existente con SVG de respaldo
function setLogo(imgEl, src, name) {
  const fallback = svgFallback(name);
  imgEl.onerror = () => { imgEl.onerror=null; imgEl.src = fallback; };
  if (src && src.startsWith('http')) {
    imgEl.src = proxyUrl(src);
  } else {
    imgEl.src = src || fallback;
  }
}

function showView(name) {
    const vByoc=$("v-login"); if(vByoc) vByoc.classList.remove("show");
  [vLogin,vHome,vChannels,vPlayer,vAdmin,vMovies,vSeries,vSeriesInfo].forEach(v=>v?.classList.remove('show'));
  topbar.style.display = (name!=='login' && name!=='player' && name!=='admin') ? 'flex' : 'none';
  if(name==='login')    vLogin?.classList.add('show');
  if(name==="byoc") vByoc?.classList.add("show");
    if(name==="home")     vHome?.classList.add('show');
  if(name==='channels') vChannels?.classList.add('show');
  if(name==='player')   vPlayer?.classList.add('show');
  if(name==='movies')   vMovies?.classList.add('show');
  if(name==='series')   vSeries?.classList.add('show');
  if(name==='admin')    vAdmin?.classList.add('show');
  if(name==='series-info') vSeriesInfo?.classList.add('show');
  
    ['btn-nav-tv','btn-nav-movies','btn-nav-series'].forEach(id=>{if($(id)) $(id).classList.remove('active-nav')});
  document.querySelectorAll('.sb-btn[data-view]').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.view === name);
  });
  if(name==='home' && $('btn-nav-tv')) $('btn-nav-tv').classList.add('active-nav');
  if(name==='movies' && $('btn-nav-movies')) $('btn-nav-movies').classList.add('active-nav');
  if(name==='series' && $('btn-nav-series')) $('btn-nav-series').classList.add('active-nav');
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
  try { localStorage.setItem(STORAGE_KEY,JSON.stringify({mode:S.mode,server:S.server,sessionId:S.sessionId,m3uUrl:S.m3uUrl,history:S.history.slice(0,30),favorites:S.favorites.slice(0,50)})); } catch(e){}
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


















































function setLoginLoading(on) {
  $('btn-login').disabled=on;
  $('login-spin').style.display=on?'inline-block':'none';
  $('login-txt').textContent=on?'Conectando...':'Iniciar Sesión';
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

function bindMediaCategorySearch() {
  const vodSearch = document.getElementById('vod-search');
  const seriesSearch = document.getElementById('series-search');

  if (vodSearch && !vodSearch.dataset.filterBound) {
    vodSearch.dataset.filterBound = '1';
    vodSearch.addEventListener('input', () => {
      const query = vodSearch.value.trim().toLocaleLowerCase();
      const source = Array.isArray(S.vodCats) ? S.vodCats : [];
      renderVodCats(source.filter(cat =>
        String(cat.category_name || '').toLocaleLowerCase().includes(query)
      ));
    });
  }

  if (seriesSearch && !seriesSearch.dataset.filterBound) {
    seriesSearch.dataset.filterBound = '1';
    seriesSearch.addEventListener('input', () => {
      const query = seriesSearch.value.trim().toLocaleLowerCase();
      const source = Array.isArray(S.seriesCats) ? S.seriesCats : [];
      renderSeriesCats(source.filter(cat =>
        String(cat.category_name || '').toLocaleLowerCase().includes(query)
      ));
    });
  }
}

function renderVodCats(cats) {
  bindMediaCategorySearch();
  const grid=document.getElementById('vod-grid'); if(!grid) return;
  grid.innerHTML='';
  if(!cats.length){grid.innerHTML='<div class="state-box"><div class="icon">🎬</div><p>No hay películas</p></div>';return;}
  cats.forEach((cat,idx)=>{
    const card=document.createElement('div');
    card.className='cat-card fade-in'; card.style.animationDelay=`${Math.min(idx*0.03,0.5)}s`;
    card.dataset.catId=cat.category_id; card.dataset.name=cat.category_name;
    const safeName = esc(cat.category_name);
    card.innerHTML=`
      <div class="cat-overlay"></div>
      <div class="cat-color-bar" style="background:linear-gradient(90deg,#9c27b0,#9c27b055)"></div>
      <div class="cat-info">
        <div class="cat-name">${safeName}</div>
        <div class="cat-bottom">
          <span class="cat-badge">Películas</span>
          <span class="cat-icon-label">🎬</span>
        </div>
      </div>`;
    card.onclick=()=>openVodCategory(cat.category_id, cat.category_name);
    grid.appendChild(card);
  });
}

function renderSeriesCats(cats) {
  const grid=document.getElementById('series-grid'); if(!grid) return;
  grid.innerHTML='';
  if(!cats.length){grid.innerHTML='<div class="state-box"><div class="icon">📺</div><p>No hay series</p></div>';return;}
  cats.forEach((cat,idx)=>{
    const card=document.createElement('div');
    card.className='cat-card fade-in'; card.style.animationDelay=`${Math.min(idx*0.03,0.5)}s`;
    card.dataset.catId=cat.category_id; card.dataset.name=cat.category_name;
    const safeName = esc(cat.category_name);
    card.innerHTML=`
      <div class="cat-overlay"></div>
      <div class="cat-color-bar" style="background:linear-gradient(90deg,#2196f3,#2196f355)"></div>
      <div class="cat-info">
        <div class="cat-name">${safeName}</div>
        <div class="cat-bottom">
          <span class="cat-badge">Series</span>
          <span class="cat-icon-label">📺</span>
        </div>
      </div>`;
    card.onclick=()=>openSeriesCategory(cat.category_id, cat.category_name);
    grid.appendChild(card);
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
      const r = await fetch(`/proxy/api?sid=${S.sessionId}&action=get_live_streams&category_id=${catId}`);
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
      const r = await fetch(`/proxy/api?sid=${S.sessionId}&action=get_live_streams&category_id=${cat.category_id}`);
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

    card.onclick=()=>{
      if (ch.stream_type === 'series') fetchSeriesInfo(ch.stream_id);
      else playChannel(ch,streamUrl);
    };
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
  } else if (ch.stream_type === 'movie' || ch.stream_type === 'episode' || streamUrl.includes('ext=')) {
    vid.src = streamUrl;
    vid.play().catch(()=>{});
  } else if (typeof mpegts !== 'undefined' && mpegts.getFeatureList().mseLivePlayback) {
    mainPlayer=mpegts.createPlayer({type:streamUrl.includes('.ts')?'mpegts':'m2ts',isLive:true,url:streamUrl});
    mainPlayer.attachMediaElement(vid);
    mainPlayer.load();
    mainPlayer.play().catch(()=>{});
  } else if(vid.canPlayType('application/vnd.apple.mpegurl')){
    vid.src=streamUrl; vid.play().catch(()=>{});
  }
  
  // Anti-freeze Watchdog & Auto-Reconnect
  if(window.antiFreeze) clearInterval(window.antiFreeze);
  let lastTime = -1, freezeCount = 0;
  window.antiFreeze = setInterval(() => {
    if(!vid.paused && vid.readyState >= 2) {
      if(vid.currentTime === lastTime) {
        freezeCount++;
        if(freezeCount === 3) { // Frozen for 3 seconds
          vid.currentTime += 0.5; // Force frame skip
        } else if(freezeCount >= 8) { // Frozen for 8 seconds, stream died or looped
          console.warn('Stream permanently frozen. Auto-reconnecting...');
          clearInterval(window.antiFreeze);
          playChannel(ch, streamUrl); // Auto-reconnect seamlessly
        }
      } else {
        freezeCount = 0; lastTime = vid.currentTime;
      }
    }
  }, 1000);
  addToHistory({...ch,streamUrl,ts:Date.now()});
  fetchChannelInfo(ch.name);
  setupPlayerUIHide();
}

function setupPlayerUIHide(){
  const ui=$('player-ui'); ui.classList.remove('hide');
  const ctrl=$('player-controls'); if(ctrl) ctrl.classList.remove('hide');
  document.querySelector('.player-main').onmousemove=()=>{
    ui.classList.remove('hide'); if(ctrl) ctrl.classList.remove('hide');
    clearTimeout(uiHideTimer);
    uiHideTimer=setTimeout(()=>{
      ui.classList.add('hide'); if(ctrl) ctrl.classList.add('hide');
    },3000);
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
  
  if (S.lastView) {
    showView(S.lastView);
  } else {
    showView('channels');
  }
};

// --- CUSTOM PLAYER CONTROLS ---
const vid=$('vid');
const btnPlayPause=$('btn-play-pause'), btnRewind=$('btn-rewind'), btnForward=$('btn-forward');
const btnMute=$('btn-mute'), volSlider=$('vol-slider'), btnFullscreen=$('btn-fullscreen');
const timeDisplay=$('time-display'), progressContainer=$('progress-container');
const progressFill=$('progress-fill'), progressThumb=$('progress-thumb');

function formatTime(sec){
  if(isNaN(sec)) return "00:00";
  const h=Math.floor(sec/3600), m=Math.floor((sec%3600)/60), s=Math.floor(sec%60);
  if(h>0) return `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

vid.addEventListener('timeupdate', () => {
  if(!vid.duration) return;
  timeDisplay.textContent = `${formatTime(vid.currentTime)} / ${formatTime(vid.duration)}`;
  const pct = (vid.currentTime / vid.duration) * 100;
  progressFill.style.width = pct + '%';
  progressThumb.style.left = pct + '%';
});

vid.addEventListener('loadedmetadata', () => {
  if(vid.duration && vid.duration !== Infinity) {
    timeDisplay.textContent = `${formatTime(vid.currentTime)} / ${formatTime(vid.duration)}`;
    $('player-live-pill').style.display='none';
  } else {
    timeDisplay.textContent = "EN VIVO";
    $('player-live-pill').style.display='flex';
  }
});

btnPlayPause.onclick = () => { if(vid.paused) vid.play(); else vid.pause(); };
vid.addEventListener('play', () => btnPlayPause.textContent = '⏸');
vid.addEventListener('pause', () => btnPlayPause.textContent = '▶');

btnRewind.onclick = () => { vid.currentTime = Math.max(0, vid.currentTime - 10); };
btnForward.onclick = () => { vid.currentTime = Math.min(vid.duration || Infinity, vid.currentTime + 10); };

btnMute.onclick = () => { vid.muted = !vid.muted; btnMute.textContent = vid.muted || vid.volume===0 ? '🔇' : '🔊'; };
volSlider.oninput = (e) => { vid.volume = e.target.value; vid.muted = false; btnMute.textContent = vid.volume===0 ? '🔇' : '🔊'; };

const playerMain = document.querySelector('.player-main');

function isPlayerFullscreen() {
  return !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement ||
    vid.webkitDisplayingFullscreen
  );
}

function updateFullscreenButton() {
  btnFullscreen.textContent = isPlayerFullscreen() ? '🗗' : '⛶';
  btnFullscreen.title = isPlayerFullscreen()
    ? 'Salir de pantalla completa'
    : 'Pantalla completa';
}

btnFullscreen.onclick = async () => {
  try {
    if (isPlayerFullscreen()) {
      if (document.exitFullscreen) await document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      else if (vid.webkitExitFullscreen) vid.webkitExitFullscreen();
      return;
    }

    if (playerMain.requestFullscreen) {
      await playerMain.requestFullscreen();
    } else if (playerMain.webkitRequestFullscreen) {
      playerMain.webkitRequestFullscreen();
    } else if (playerMain.mozRequestFullScreen) {
      playerMain.mozRequestFullScreen();
    } else if (playerMain.msRequestFullscreen) {
      playerMain.msRequestFullscreen();
    } else if (vid.webkitEnterFullscreen) {
      // Safari en iPhone y iPad.
      vid.webkitEnterFullscreen();
    } else {
      console.warn('Este navegador no admite pantalla completa.');
    }
  } catch (error) {
    console.error('No se pudo activar pantalla completa:', error);
  }

  updateFullscreenButton();
}

[
  'fullscreenchange',
  'webkitfullscreenchange',
  'mozfullscreenchange',
  'MSFullscreenChange'
].forEach(eventName => {
  document.addEventListener(eventName, updateFullscreenButton);
});

vid.addEventListener('webkitbeginfullscreen', updateFullscreenButton);
vid.addEventListener('webkitendfullscreen', updateFullscreenButton);

updateFullscreenButton();

progressContainer.onclick = (e) => {
  if(!vid.duration) return;
  const rect = progressContainer.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  vid.currentTime = pos * vid.duration;
};

// Clic en el video para Pausar/Reproducir
vid.onclick = () => btnPlayPause.click();

// Sincronización de la interfaz del reproductor
const formatPlayerTime = seconds => {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return h > 0
    ? `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
    : `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
};

function updatePlayerInterface() {
  const duration = Number.isFinite(vid.duration) ? vid.duration : 0;
  const current = Number.isFinite(vid.currentTime) ? vid.currentTime : 0;
  const percentage = duration > 0 ? Math.min(100, current / duration * 100) : 0;

  $('progress-fill').style.width = percentage + '%';
  $('progress-thumb').style.left = percentage + '%';
  $('time-display').textContent =
    `${formatPlayerTime(current)} / ${formatPlayerTime(duration)}`;

  $('btn-play-pause').textContent = vid.paused ? '▶' : '⏸';
}

vid.addEventListener('timeupdate', updatePlayerInterface);
vid.addEventListener('durationchange', updatePlayerInterface);
vid.addEventListener('loadedmetadata', updatePlayerInterface);
vid.addEventListener('play', updatePlayerInterface);
vid.addEventListener('pause', updatePlayerInterface);
vid.addEventListener('ended', updatePlayerInterface);
vid.addEventListener('seeked', updatePlayerInterface);

// ------------------------------

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

let heroInterval = null;
function setRandomHero(vodCats, seriesCats) {
  const hero = $('hero-banner');
  if(!hero) return;
  
  const banners = [
    {
      img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop',
      title: 'Bienvenido a IPTV GLOBAL HD',
      desc: 'Disfruta de la mejor experiencia premium de streaming. Miles de canales, películas y series te esperan. Navega por nuestro contenido exclusivo.',
      tag: 'DESTACADO'
    },
    {
      img: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop',
      title: 'Películas de Estreno',
      desc: 'Los mejores blockbusters directamente en tu pantalla. Disfruta de la máxima calidad en imagen y sonido sin interrupciones.',
      tag: 'NUEVO'
    },
    {
      img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop',
      title: 'Vive la Pasión del Deporte',
      desc: 'No te pierdas ni un solo partido. Todos los deportes en vivo, en HD y sin cortes. La mejor programación deportiva mundial.',
      tag: 'EN VIVO'
    }
  ];

  let currentIdx = 0;
  
  function updateHero() {
    const data = banners[currentIdx];
    $('hero-bg').style.opacity = '0';
    setTimeout(() => {
      $('hero-bg').src = data.img;
      $('hero-title').textContent = data.title;
      $('hero-desc').textContent = data.desc;
      const tag = document.querySelector('.hero-tag');
      if(tag) tag.textContent = data.tag;
      $('hero-bg').style.opacity = '0.6';
    }, 300);
    
    currentIdx = (currentIdx + 1) % banners.length;
  }

  updateHero();
  
  $('hero-btn-play').onclick = () => { if($('sb-nav-movies')) $('sb-nav-movies').click(); };
  hero.style.display = 'block';

  if(heroInterval) clearInterval(heroInterval);
  heroInterval = setInterval(updateHero, 8000);
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
if ($('btn-logout')) {
  $('btn-logout').onclick=()=>{
    if(!confirm('¿Cerrar sesión?')) return;
    if(mainPlayer){mainPlayer.destroy();mainPlayer=null;}
    clearStorage();
    Object.assign(S,{mode:'xtream',server:'',user:'',pass:'',m3uUrl:'',cats:[],channels:{},history:[],favorites:[],currentCat:null,currentChannels:[],infoOpen:false});
    if($('inp-user')) $('inp-user').value='';
    if($('inp-pass')) $('inp-pass').value='';
    showView('login'); 
    topbar.style.display='none';
  };
}
if ($('btn-back')) $('btn-back').onclick=()=>showView('home');
if ($('btn-back-series')) $('btn-back-series').onclick=()=>showView('channels');

// ---------- LOGICA DE SERIES ----------
window.fetchSeriesInfo = async (series_id) => {
  $('si-title').textContent = 'Cargando Serie...';
  $('si-desc').textContent = '';
  $('si-backdrop').style.backgroundImage = 'none';
  $('si-season-list').innerHTML = '';
  $('si-episodes-grid').innerHTML = `<div class="state-box" style="width:100%"><div class="spinner" style="width:32px;height:32px;border-width:3px;"></div></div>`;
  $('si-year').style.display = 'none';
  $('si-rating').style.display = 'none';
  $('si-genres').style.display = 'none';
  $('btn-si-play').style.display = 'none';
  showView('series-info');
  
  try {
    const r = await fetch(`/proxy/api?sid=${S.sessionId}&action=get_series_info&series_id=${series_id}`);
    const data = await r.json();
    if (!data.info) throw new Error('Información no encontrada');
    
    S.currentSeries = data;
    const info = data.info;
    $('si-title').textContent = info.name || 'Serie';
    $('si-desc').textContent = info.plot || '';
    
    const coverUrl = proxyUrl(info.backdrop_path ? info.backdrop_path[0] : (info.cover || info.movie_image));
    $('si-backdrop').style.backgroundImage = `url('${coverUrl}')`;

    if(info.releaseDate || info.year){ $('si-year').textContent = new Date(info.releaseDate).getFullYear() || info.year; $('si-year').style.display = 'inline-block'; }
    if(info.rating){ $('si-rating').textContent = '★ ' + info.rating; $('si-rating').style.display = 'inline-block'; }
    if(info.genre){ $('si-genres').textContent = info.genre; $('si-genres').style.display = 'inline-block'; }

    const slist = $('si-season-list');
    slist.innerHTML = '';
    
    if (data.seasons && data.seasons.length > 0) {
      data.seasons.forEach((s, idx) => {
        const btn = document.createElement('button');
        btn.className = 'si-season-btn' + (idx === 0 ? ' active' : '');
        btn.textContent = s.name || `Temporada ${s.season_number}`;
        btn.onclick = () => {
          document.querySelectorAll('.si-season-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderEpisodes(s.season_number);
        };
        slist.appendChild(btn);
      });
      if (data.episodes) renderEpisodes(data.seasons[0].season_number);
      else $('si-episodes-grid').innerHTML = '<p>No hay episodios</p>';
    } else {
      $('si-episodes-grid').innerHTML = '<p>No hay temporadas</p>';
    }
  } catch(e) {
    $('si-episodes-grid').innerHTML = `<div class="state-box" style="width:100%"><div class="icon">❌</div><p>Error: ${e.message}</p></div>`;
  }
};

window.renderEpisodes = (seasonNumber) => {
  const grid = $('si-episodes-grid');
  grid.innerHTML = '';
  const episodes = (S.currentSeries.episodes || {})[seasonNumber] || [];
  
  if (!episodes.length) {
    grid.innerHTML = '<p>No hay episodios en esta temporada.</p>';
    return;
  }

  const btnPlay = $('btn-si-play');
  btnPlay.style.display = 'inline-flex';
  btnPlay.textContent = `▶ Reproducir T${seasonNumber} E${episodes[0].episode_num}`;
  btnPlay.onclick = () => playEpisode(episodes[0]);

  episodes.forEach((ep, idx) => {
    const card = document.createElement('div');
    card.className = 'ep-card fade-in';
    card.style.animationDelay = `${Math.min(idx*0.015, 0.4)}s`;
    
    const epCover = ep.info?.movie_image || S.currentSeries.info.cover || '';
    const safeTitle = (ep.title || '').replace(/'/g, '');
    
    card.innerHTML = `
      <div class="ep-img">
        <img src="${proxyUrl(epCover)}" onerror="this.src=svgFallback('${safeTitle}')">
        ${ep.info?.duration ? `<div class="ep-dur">${ep.info.duration}</div>` : ''}
        <div class="ep-play-icon">▶</div>
      </div>
      <div class="ep-info">
        <div class="ep-title">${ep.episode_num}. ${ep.title || 'Capítulo ' + ep.episode_num}</div>
      </div>
    `;
    card.onclick = () => playEpisode(ep);
    grid.appendChild(card);
  });
};

window.playEpisode = (ep) => {
  const url = `/proxy/stream/series/${ep.id}?ext=${ep.container_extension || 'mp4'}&sid=${S.sessionId}`;
  playChannel({
    name: `T${ep.season || ''} E${ep.episode_num}: ${ep.title || 'Capítulo ' + ep.episode_num}`,
    stream_icon: ep.info?.movie_image || S.currentSeries.info.cover || '',
    stream_type: 'episode',
    series_id: S.currentSeries.info.series_id || '',
    stream_id: ep.id,
    container_extension: ep.container_extension || 'mp4'
  }, getStreamUrl(url));
};

// ---------- FUNCIONES ADMIN ----------
window.parseAdminM3U = () => {
  try {
    const rawUrl = document.getElementById('adm-m3u-url').value.trim();
    if(!rawUrl) return;
    const url = new URL(rawUrl);
    document.getElementById('adm-server').value = url.origin;
    document.getElementById('adm-user').value = url.searchParams.get('username') || '';
    document.getElementById('adm-pass').value = url.searchParams.get('password') || '';
  } catch(e) {
    alert('URL inválida. Asegúrate de que empiece con http:// o https://');
  }
};


// ---------- ABRIR VOD Y SERIES ----------
async function openVodCategory(id, name) {
  S.currentCat={category_id:id, category_name:name};
  $('ch-view-title').textContent=name;
  $('ch-search').value='';
  $('ch-count-label').textContent='Cargando películas...';
  $('ch-grid').innerHTML='<div class="state-box"><div class="spinner" style="width:32px;height:32px;border-width:3px;"></div><p style="margin-top:16px">Cargando...</p></div>';
  showView('channels');
  try {
    const r=await fetch('/proxy/api?sid=' + S.sessionId + '&action=get_vod_streams&category_id=' + id);
    const channels=await r.json();
    if(!Array.isArray(channels)) throw new Error('Respuesta inválida');
    S.currentChannels=channels||[];
    $('ch-count-label').textContent=(channels||[]).length+' películas';
    renderChannels(channels||[]);
  } catch(e){ $('ch-grid').innerHTML='<div class="state-box"><div class="icon">⚠️</div><p>Error: ' + e.message + '</p></div>'; }
}

async function openSeriesCategory(id, name) {
  S.currentCat={category_id:id, category_name:name};
  $('ch-view-title').textContent=name;
  $('ch-search').value='';
  $('ch-count-label').textContent='Cargando series...';
  $('ch-grid').innerHTML='<div class="state-box"><div class="spinner" style="width:32px;height:32px;border-width:3px;"></div><p style="margin-top:16px">Cargando...</p></div>';
  showView('channels');
  try {
    const r=await fetch('/proxy/api?sid=' + S.sessionId + '&action=get_series&category_id=' + id);
    let channels=await r.json();
    if(!Array.isArray(channels)) throw new Error('Respuesta inválida');
    
    // Mapear series a formato similar a canales/vod
    channels = channels.map(s => ({
      stream_type: 'series',
      stream_id: s.series_id,
      series_id: s.series_id,
      name: s.name,
      stream_icon: s.cover
    }));
    
    S.currentChannels=channels||[];
    $('ch-count-label').textContent=(channels||[]).length+' series';
    renderChannels(channels||[]);
  } catch(e){ $('ch-grid').innerHTML='<div class="state-box"><div class="icon">⚠️</div><p>Error: ' + e.message + '</p></div>'; }
}

// Modificar playChannel para interceptar clics en Series
const oldPlayChannel = playChannel;
window.playChannel = async (ch, streamUrl) => {
  if (ch.stream_type === 'series' && ch.series_id) {
    // Es una serie, cargar capítulos
    $('ch-view-title').textContent = ch.name;
    $('ch-count-label').textContent = 'Cargando temporadas...';
    $('ch-grid').innerHTML = '<div class="state-box"><div class="spinner" style="width:32px;height:32px;border-width:3px;"></div><p style="margin-top:16px">Obteniendo capítulos...</p></div>';
    try {
      const r = await fetch('/proxy/api?sid=' + S.sessionId + '&action=get_series_info&series_id=' + ch.series_id);
      const data = await r.json();
      const episodes = [];
      if (data && data.episodes) {
        Object.keys(data.episodes).forEach(seasonNum => {
          data.episodes[seasonNum].forEach(ep => {
            episodes.push({
              stream_type: 'episode',
              id: ep.id,
              stream_id: ep.id,
              name: 'T' + seasonNum + ' E' + ep.episode_num + ': ' + ep.title,
              stream_icon: (ep.info && ep.info.movie_image) || ch.stream_icon,
              container_extension: ep.container_extension || 'mp4',
              episode_num: ep.episode_num
            });
          });
        });
      }
      $('ch-count-label').textContent = episodes.length + ' episodios';
      renderChannels(episodes);
    } catch (e) {
      $('ch-grid').innerHTML = '<div class="state-box"><div class="icon">⚠️</div><p>Error: ' + e.message + '</p></div>';
    }
  } else {
    oldPlayChannel(ch, streamUrl);
  }
};

// ---------- BOOT ----------
loadStorage();

// --- NAVEGACION TOPBAR ---
if($('btn-nav-tv')) $('btn-nav-tv').onclick = () => showView('home');
if($('btn-nav-movies')) $('btn-nav-movies').onclick = () => showView('movies');
if($('btn-nav-series')) $('btn-nav-series').onclick = () => showView('series');
if($('btn-favs')) $('btn-favs').onclick = () => alert('Próximamente');


// --- MENU MOVIL ---
const mNavBtn = $('mobile-nav-btn');
const mDropdown = $('mobile-dropdown');
const sidebar = $('sidebar');

if(mNavBtn && sidebar) {
    let drawerBackdrop = $('drawer-backdrop');

    if(!drawerBackdrop) {
        drawerBackdrop = document.createElement('div');
        drawerBackdrop.id = 'drawer-backdrop';
        drawerBackdrop.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.62);z-index:999;display:none;opacity:0;transition:opacity .25s ease;';
        document.body.appendChild(drawerBackdrop);
    }

    const closeMobileDrawer = () => {
        sidebar.classList.remove('mobile-open');
        drawerBackdrop.style.opacity = '0';
        drawerBackdrop.style.display = 'none';
        mNavBtn.setAttribute('aria-expanded', 'false');
    };

    const openMobileDrawer = () => {
        if(mDropdown) mDropdown.classList.remove('show');
        sidebar.classList.add('mobile-open');
        drawerBackdrop.style.display = 'block';
        requestAnimationFrame(() => drawerBackdrop.style.opacity = '1');
        mNavBtn.setAttribute('aria-expanded', 'true');
    };

    mNavBtn.setAttribute('aria-controls', 'sidebar');
    mNavBtn.setAttribute('aria-expanded', 'false');

    mNavBtn.onclick = (e) => {
        e.stopPropagation();
        if(sidebar.classList.contains('mobile-open')) {
            closeMobileDrawer();
        } else {
            openMobileDrawer();
        }
    };

    drawerBackdrop.addEventListener('click', closeMobileDrawer);

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') closeMobileDrawer();
    });

    sidebar.addEventListener('click', (e) => {
        if(e.target.closest('button, a, [role="button"]')) {
            closeMobileDrawer();
        }
    });

    window.addEventListener('resize', () => {
        if(window.innerWidth > 900) closeMobileDrawer();
    });
}

if(mDropdown) {
    document.addEventListener('click', (e) => {
        if(!mDropdown.contains(e.target) && e.target !== mNavBtn) {
            mDropdown.classList.remove('show');
        }
    });
}

if($('md-btn-tv')) $('md-btn-tv').onclick = () => { showView('home'); if(mDropdown) mDropdown.classList.remove('show'); };
if($('md-btn-movies')) $('md-btn-movies').onclick = () => { showView('movies'); if(mDropdown) mDropdown.classList.remove('show'); };
if($('md-btn-series')) $('md-btn-series').onclick = () => { showView('series'); if(mDropdown) mDropdown.classList.remove('show'); };
if($('md-btn-favs')) $('md-btn-favs').onclick = () => { alert('Próximamente'); if(mDropdown) mDropdown.classList.remove('show'); };
if($('md-btn-account')) $('md-btn-account').onclick = () => { alert('Cuenta Premium'); if(mDropdown) mDropdown.classList.remove('show'); };
if($('md-btn-logout')) $('md-btn-logout').onclick = () => {
    if(mDropdown) mDropdown.classList.remove('show');
    if($('btn-logout')) $('btn-logout').click();
};

async function boot() {
    try {
        // Modo de prueba temporal: Intentar obtener la sesión pre-creada del backend
        // El endpoint /api/test_session fue eliminado; no solicitar una sesión de prueba.
        let res = {};
        if (res.sessionId) {
            S.sessionId = res.sessionId;
            console.log('TEST MODE: Loaded auto-session', S.sessionId);
        }

        if (!S.sessionId) {
            showView("byoc");
            const btn = $('byoc-btn');
            if (btn) {
                btn.onclick = async () => {
                    const server = $('byoc-server').value.trim();
                    const user = $('byoc-user').value.trim();
                    const pass = $('byoc-pass').value.trim();
                    $('byoc-err').textContent = '';
                    if(!server || !user || !pass) { $('byoc-err').textContent = 'Faltan datos'; return; }
                    
                    try {
                        btn.textContent = 'Conectando...';
                        const loginRes = await fetch('/api/session', {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({server, user, pass})
                        }).then(r => r.json());
                        if (loginRes.error) throw new Error(loginRes.error);
                        S.sessionId = loginRes.sessionId;
                        saveStorage();
                        window.location.reload();
                    } catch(e) {
                        $('byoc-err').textContent = e.message;
                        btn.textContent = 'Conectar';
                    }
                };
            }
            return;
        }

        const fetchApi = (act) => fetch('/proxy/api?sid=' + S.sessionId + '&action=' + act).then(r=>r.json());
        const [cats, vodCats, seriesCats] = await Promise.all([
            fetchApi('get_live_categories').catch(()=>[]),
            fetchApi('get_vod_categories').catch(()=>[]),
            fetchApi('get_series_categories').catch(()=>[])
        ]);
        
        showView("home");
        renderCats(cats); 
        renderVodCats(vodCats); 
        renderSeriesCats(seriesCats);
        setRandomHero(vodCats, seriesCats);
    } catch(e) {
        console.error(e);
        showView("byoc");
    }
}
boot();

