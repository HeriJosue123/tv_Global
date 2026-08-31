const express = require('express');
const cors = require('cors');
const http = require('http');
const https = require('https');
const crypto = require('crypto');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Almacén en memoria de sesiones aisladas
const sessions = new Map();
const ts = () => new Date().toLocaleTimeString();
const mask = (str) => str ? str.substring(0, 3) + '***' : '';

// 1. Crear Sesión BYOC
app.post('/api/session', (req, res) => {
    const { server, user, pass } = req.body;
    if(!server || !user || !pass) return res.status(400).json({error: 'Faltan credenciales BYOC'});
    
    let parsedServer;
    try { 
        parsedServer = new URL(server); 
    } catch(e) { 
        return res.status(400).json({error: 'URL de servidor inválida'}); 
    }
    
    const sessionId = crypto.randomUUID();
    sessions.set(sessionId, {
        server: parsedServer.origin,
        user,
        pass,
        activeSockets: [],
        streamTimeout: null,
        lastActive: Date.now()
    });
    
    console.log(`[${ts()}] 🟢 Nueva Sesión BYOC aislada: ${sessionId.split('-')[0]}... -> ${parsedServer.origin}`);
    res.json({ success: true, sessionId });
});

// Middleware de sesión
function getSession(req, res) {
    const sid = req.query.sid || req.headers['x-session-id'];
    if(!sid) { res.status(401).json({error: 'Falta Session ID'}); return null; }
    const session = sessions.get(sid);
    if(!session) { res.status(401).json({error: 'Sesión inválida o expirada'}); return null; }
    session.lastActive = Date.now();
    return session;
}

// 2. API Proxy Seguro (Previene SSRF, oculta credenciales)
app.get('/proxy/api', (req, res) => {
    const session = getSession(req, res);
    if(!session) return;
    
    const action = req.query.action || '';
    const category_id = req.query.category_id || '';
    const series_id = req.query.series_id || '';
    
    // Construcción de la URL real en el backend. Imposible consultar otra IP.
    let target = `${session.server}/player_api.php?username=${encodeURIComponent(session.user)}&password=${encodeURIComponent(session.pass)}`;
    if(action) target += `&action=${action}`;
    if(category_id) target += `&category_id=${category_id}`;
    if(series_id) target += `&series_id=${series_id}`;
    
    proxySimple(target, res);
});


// 4. API Image Proxy (Evita Mixed Content de posters y logos)
app.get('/proxy/image', (req, res) => {
    const session = getSession(req, res);
    if (!session) return;
    
    const imageUrl = req.query.url;
    if (!imageUrl) return res.status(400).send('Missing url');

    // Validación de seguridad SSRF:
    // Solo permitir URLs que comiencen con el servidor del proveedor de esta sesión,
    // o fuentes confiables de metadatos públicas (tmdb, wikipedia).
    let safeToProxy = false;
    if (imageUrl.startsWith(session.server)) safeToProxy = true;
    if (imageUrl.includes('tmdb.org') || imageUrl.includes('wikipedia.org')) safeToProxy = true;
    
    if (!safeToProxy) return res.status(403).send('URL not allowed');

    try {
        const parsedUrl = new URL(imageUrl);
        if (parsedUrl.hostname === 'localhost' || parsedUrl.hostname.startsWith('127.') || parsedUrl.hostname.startsWith('192.168.') || parsedUrl.hostname.startsWith('10.')) {
            return res.status(403).send('Forbidden IP');
        }
    } catch(e) {
        return res.status(400).send('Invalid url');
    }

    const parsed = new URL(imageUrl);
    const lib = parsed.protocol === 'https:' ? https : http;
    const imgReq = lib.request(imageUrl, { method: 'GET', timeout: 10000 }, (apiRes) => {
        res.status(apiRes.statusCode);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache 1 day for images
        if (apiRes.headers['content-type']) res.setHeader('Content-Type', apiRes.headers['content-type']);
        apiRes.pipe(res);
    });
    imgReq.on('error', err => { if(!res.headersSent) res.status(502).end(); });
    imgReq.end();
});

// 3. Stream Proxy Seguro (Aísla sockets por sesión, respeta max_connections)
app.get('/proxy/stream/:type/:id', (req, res) => {
    const session = getSession(req, res);
    if(!session) return;
    
    const { type, id } = req.params;
    const ext = req.query.ext || '';
    
    let target = `${session.server}/`;
    if (type === 'live') {
        target += `${encodeURIComponent(session.user)}/${encodeURIComponent(session.pass)}/${id}`;
    } else if (type === 'movie') {
        target += `movie/${encodeURIComponent(session.user)}/${encodeURIComponent(session.pass)}/${id}.${ext}`;
    } else if (type === 'series') {
        target += `series/${encodeURIComponent(session.user)}/${encodeURIComponent(session.pass)}/${id}.${ext}`;
    } else {
        return res.status(400).json({error: 'Tipo de stream inválido'});
    }

    console.log(`[${ts()}] 📺 Petición de stream (${type}) para sesión ${req.query.sid.split('-')[0]}...`);
    
    // DESTRUCCIÓN AISLADA: Solo destruye los streams de ESTA sesión.
    if (session.streamTimeout) {
        clearTimeout(session.streamTimeout);
        session.streamTimeout = null;
    }
    
    if (session.activeSockets.length > 0) {
        console.log(`[${ts()}] 🔪 Destruyendo ${session.activeSockets.length} socket(s) previo(s) de esta sesión...`);
        session.activeSockets.forEach(s => { if(s && !s.destroyed) s.destroy(); });
        session.activeSockets = [];
    }
    
    // Delay protector de 2000ms
    session.streamTimeout = setTimeout(() => {
        session.streamTimeout = null;
        if (req.socket.destroyed) {
            console.log(`[${ts()}] ⚠️ El cliente canceló la petición antes del timeout.`);
            return;
        }
        console.log(`[${ts()}] 🚀 Conectando stream...`);
        forwardStream(target, req, res, session);
    }, 2000);
});

function proxySimple(targetUrl, res) {
    const parsed = new URL(targetUrl);
    const lib = parsed.protocol === 'https:' ? https : http;
    const req = lib.request(targetUrl, { method: 'GET', timeout: 15000 }, (apiRes) => {
        res.status(apiRes.statusCode);
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (apiRes.headers['content-type']) res.setHeader('Content-Type', apiRes.headers['content-type']);
        apiRes.pipe(res);
    });
    req.on('error', err => { if(!res.headersSent) res.status(502).json({error: 'Error de proveedor IPTV'}); });
    req.end();
}

function forwardStream(targetUrl, clientReq, clientRes, session) {
    const MAX_REDIRECTS = 5;
    let cookies = '';
    let destroyed = false;
    
    function start(urlStr, hopsLeft) {
        if(destroyed) return;
        const parsed = new URL(urlStr);
        const lib = parsed.protocol === 'https:' ? https : http;
        
        const options = {
            hostname: parsed.hostname, port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
            path: parsed.pathname + parsed.search,
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'Accept': '*/*' },
            timeout: 15000
        };
        if (cookies) options.headers['Cookie'] = cookies;
        
        const proxyReq = lib.request(options, (proxyRes) => {
            if ([301, 302, 303, 307, 308].includes(proxyRes.statusCode) && proxyRes.headers['location']) {
                if (proxyRes.headers['set-cookie']) {
                    const newCookies = proxyRes.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
                    cookies = cookies ? `${cookies}; ${newCookies}` : newCookies;
                }
                const loc = new URL(proxyRes.headers['location'], parsed).toString();
                proxyRes.resume();
                proxyReq.destroy(); // Destruye socket intermedio
                
                if (hopsLeft <= 0) {
                    if(!clientRes.headersSent) clientRes.status(508).end();
                    return;
                }
                start(loc, hopsLeft - 1);
                return;
            }
            
            clientRes.setHeader('Access-Control-Allow-Origin', '*');
            if (proxyRes.headers['content-type']) clientRes.setHeader('Content-Type', proxyRes.headers['content-type']);
            clientRes.status(proxyRes.statusCode);
            proxyRes.pipe(clientRes);
        });
        
        session.activeSockets.push(proxyReq);
        
        proxyReq.on('error', err => {
            if(destroyed || proxyReq.destroyed) return;
            if(!clientRes.headersSent) clientRes.status(502).end();
        });
        proxyReq.on('timeout', () => { proxyReq.destroy(); });
        proxyReq.end();
    }
    
    clientReq.on('close', () => {
        destroyed = true;
        console.log(`[${ts()}] ⏹️ El usuario cerró el reproductor. Limpiando sockets de la sesión...`);
        session.activeSockets.forEach(s => { if(s && !s.destroyed) s.destroy(); });
        session.activeSockets = [];
    });
    
    start(targetUrl, MAX_REDIRECTS);
}

// Limpieza automática de sesiones inactivas (>12h)
setInterval(() => {
    const now = Date.now();
    for (const [sid, sess] of sessions.entries()) {
        if (now - sess.lastActive > 1000 * 60 * 60 * 12) {
            sess.activeSockets.forEach(s => { if(s && !s.destroyed) s.destroy(); });
            sessions.delete(sid);
        }
    }
}, 60000 * 10);

app.listen(PORT, () => console.log(`\n🚀 IPTV Global V3 Bouncer iniciado en puerto ${PORT}\n`));
