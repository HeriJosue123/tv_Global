const express = require('express');
const cors = require('cors');
const http = require('http');
const https = require('https');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const c = {
    rst: "\x1b[0m", b: "\x1b[1m",
    red: "\x1b[31m", grn: "\x1b[32m",
    ylw: "\x1b[33m", blu: "\x1b[34m",
    cyn: "\x1b[36m", wht: "\x1b[37m",
    bgRed: "\x1b[41m", bgBlk: "\x1b[40m"
};

const logo = `
${c.red}${c.b}██╗██████╗ ████████╗██╗   ██╗     ██████╗ ██╗      ██████╗ ██████╗  █████╗ ██╗     
██║██╔══██╗╚══██╔══╝██║   ██║    ██╔════╝ ██║     ██╔═══██╗██╔══██╗██╔══██╗██║     
██║██████╔╝   ██║   ██║   ██║    ██║  ███╗██║     ██║   ██║██████╔╝███████║██║     
██║██╔═══╝    ██║   ╚██╗ ██╔╝    ██║   ██║██║     ██║   ██║██╔══██╗██╔══██║██║     
██║██║        ██║    ╚████╔╝     ╚██████╔╝███████╗╚██████╔╝██████╔╝██║  ██║███████╗
╚═╝╚═╝        ╚═╝     ╚═══╝       ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝${c.rst}`;

function ts() { return new Date().toLocaleTimeString(); }

app.use(cors());
app.use(express.static(path.join(__dirname)));

let activeStreamReq = null;
let streamTimeout = null;
let requestCounter = 0;

// Helper: reenvía la solicitud usando http/https de node, siguiendo redirecciones internamente
const MAX_REDIRECTS = 5;

function forward(targetUrl, req, res) {
    requestCounter++;
    const reqId = `REQ-${requestCounter}`;
    // FIX Bug 1: Rastrear TODAS las peticiones de la cadena de redirecciones, no solo la última.
    // Esto permite destruir cada socket TCP intermedio al hacer cleanup.
    const activeSockets = [];
    let destroyed = false;
    let cookies = ''; // FIX Bug 3: Acumular cookies de respuestas 302

    function startRequest(urlToFetch, redirectsLeft) {
        if (destroyed) return;

        let parsed;
        try { parsed = new URL(urlToFetch); } catch (e) {
            if (!res.headersSent) res.status(400).json({ error: 'URL inválida' });
            return;
        }

        const hop = MAX_REDIRECTS - redirectsLeft + 1;
        console.log(`${c.wht}[${ts()}] [${reqId}] ➔ Hop ${hop}/${MAX_REDIRECTS} → ${c.cyn}${parsed.hostname}${parsed.pathname.substring(0, 60)}${c.rst}`);

        const lib = parsed.protocol === 'https:' ? https : http;
        const port = parsed.port || (parsed.protocol === 'https:' ? 443 : 80);
        const options = {
            hostname: parsed.hostname, port: parseInt(port), path: parsed.pathname + parsed.search,
            method: 'GET', headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': '*/*',
            },
            timeout: 15000,
        };
        // FIX Bug 3: Propagar cookies acumuladas de respuestas 302 anteriores
        if (cookies) options.headers['Cookie'] = cookies;

        const proxyReq = lib.request(options, (proxyRes) => {
            // Detección de redirección: secuestrar 301/302/303/307/308
            if ([301, 302, 303, 307, 308].includes(proxyRes.statusCode) && proxyRes.headers['location']) {
                const loc = new URL(proxyRes.headers['location'], parsed).toString();
                // Consumir el body de la respuesta 302 para liberar recursos
                proxyRes.resume();

                if (redirectsLeft <= 0) {
                    console.log(`${c.red}[${ts()}] [${reqId}] ❌ Demasiadas redirecciones (${MAX_REDIRECTS} hops), abortando.${c.rst}`);
                    if (!res.headersSent) res.status(508).json({ error: 'Demasiadas redirecciones' });
                    return;
                }

                // FIX Bug 3: Capturar cookies del 302 para enviarlas en la siguiente petición
                if (proxyRes.headers['set-cookie']) {
                    const newCookies = proxyRes.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
                    cookies = cookies ? `${cookies}; ${newCookies}` : newCookies;
                    console.log(`${c.cyn}[${ts()}] [${reqId}] 🍪 Cookies capturadas del 302: ${newCookies.substring(0, 80)}${c.rst}`);
                }

                // FIX Bug 2: Destruir EXPLÍCITAMENTE el proxyReq de la petición intermedia
                // para cerrar su socket TCP antes de seguir la redirección.
                console.log(`${c.ylw}[${ts()}] [${reqId}] ↪️ ${proxyRes.statusCode} Redirigido → ${c.wht}${loc.substring(0, 120)}${c.rst}`);
                console.log(`${c.ylw}[${ts()}] [${reqId}] 🔪 Destruyendo socket intermedio (hop ${hop}) antes de seguir...${c.rst}`);
                proxyReq.destroy();

                startRequest(loc, redirectsLeft - 1);
                return;
            }

            // Respuesta final (no es redirección): pipear el video al navegador
            console.log(`${c.grn}${c.b}[${ts()}] [${reqId}] ✔️ RESPUESTA FINAL (Status: ${proxyRes.statusCode}) desde ${parsed.hostname} — Piping al navegador${c.rst}`);

            res.setHeader('Access-Control-Allow-Origin', '*');
            const ct = proxyRes.headers['content-type'];
            if (ct) res.setHeader('Content-Type', ct);
            res.status(proxyRes.statusCode);
            proxyRes.pipe(res);

            proxyRes.on('end', () => console.log(`${c.wht}[${ts()}] [${reqId}] ⏹️ Streaming finalizado naturalmente por IPTV.${c.rst}`));
            proxyRes.on('close', () => console.log(`${c.ylw}[${ts()}] [${reqId}] ⏹️ Conexión de respuesta IPTV cerrada.${c.rst}`));
        });

        // FIX Bug 1: Registrar CADA proxyReq en el array para poder destruirlos todos
        activeSockets.push(proxyReq);
        if (destroyed) { proxyReq.destroy(); return; }

        proxyReq.on('socket', (socket) => {
            console.log(`${c.blu}[${ts()}] [${reqId}] 🔌 Socket TCP asignado (hop ${hop}) → ${parsed.hostname}${c.rst}`);
        });

        proxyReq.on('error', (err) => {
            // Ignorar errores ECONNRESET de sockets que destruimos intencionalmente
            if (destroyed || proxyReq.destroyed) return;
            console.log(`${c.red}[${ts()}] [${reqId}] ❌ Error en proxyReq (hop ${hop}): ${err.message}${c.rst}`);
            if (!res.headersSent) res.status(502).json({ error: err.message });
        });
        proxyReq.on('timeout', () => {
            console.log(`${c.red}[${ts()}] [${reqId}] ⏱️ Timeout en proxyReq (hop ${hop}). Destruyendo...${c.rst}`);
            proxyReq.destroy();
            if (!res.headersSent) res.status(504).json({ error: 'Tiempo de espera agotado' });
        });

        proxyReq.on('close', () => {
            console.log(`${c.red}[${ts()}] [${reqId}] 💀 Socket cerrado (hop ${hop}) — ${parsed.hostname}${c.rst}`);
        });

        proxyReq.end();
    }

    // DESTRUCCIÓN TOTAL: Si el cliente (navegador) se desconecta, mata TODAS las conexiones upstream.
    req.on('close', () => {
        console.log(`${c.bgRed}${c.wht}[${ts()}] [${reqId}] ⚠️ EL NAVEGADOR CORTÓ LA CONEXIÓN (req.on('close'))${c.rst}`);
        destroyed = true;
        // FIX Bug 1: Destruir TODOS los sockets de la cadena, no solo el último
        let killed = 0;
        activeSockets.forEach((s, i) => {
            if (s && !s.destroyed) {
                s.destroy();
                killed++;
            }
        });
        console.log(`${c.ylw}[${ts()}] [${reqId}] 🔪 ${killed}/${activeSockets.length} sockets destruidos instantáneamente.${c.rst}`);
    });

    startRequest(targetUrl, MAX_REDIRECTS);

    return {
        reqId,
        // FIX Bug 1: destroy() ahora mata TODOS los sockets de la cadena de redirecciones
        destroy: () => {
            destroyed = true;
            activeSockets.forEach(s => { if (s && !s.destroyed) s.destroy(); });
        }
    };
}

// Ruta: GET /proxy?url=<URL_OBJETIVO_COMPLETA>
app.get('/proxy', (req, res) => {
    const target = req.query.url;
    if (!target) return res.status(400).json({ error: 'Falta el parámetro ?url=' });
    console.log(`${c.cyn}${c.b}[${ts()}]${c.rst} ${c.grn}API${c.rst} ➔ ${c.wht}${target.substring(0, 150)}${target.length>150?'...':''}${c.rst}`);
    forward(target, req, res);
});

// Ruta: GET /stream?url=<URL_DE_STREAM_COMPLETA> (para streams de video, estrictamente 1 conexión)
app.get('/stream', (req, res) => {
    const target = req.query.url;
    if (!target) return res.status(400).json({ error: 'Falta el parámetro ?url=' });
    console.log(`\n${c.blu}${c.b}[${ts()}]${c.rst} ${c.ylw}NUEVA PETICIÓN DE VIDEO RECIBIDA${c.rst}`);
    
    // FIX Bug 4: Si hay un timer pendiente, cancelarlo Y destruir su forward huérfano si existe
    if (streamTimeout) {
        console.log(`${c.ylw}[${ts()}] BOUNCER ➔ Cancelando timer del stream anterior que nunca arrancó.${c.rst}`);
        clearTimeout(streamTimeout);
        streamTimeout = null;
    }
    
    if (activeStreamReq) {
        console.log(`${c.bgRed}${c.wht}[${ts()}] BOUNCER ➔ CHOCARON CONEXIONES! Destruyendo stream activo [${activeStreamReq.reqId}] para proteger la cuenta.${c.rst}`);
        activeStreamReq.destroy();
        activeStreamReq = null;
    } else {
        console.log(`${c.grn}[${ts()}] BOUNCER ➔ No hay streams activos cruzados. Todo limpio.${c.rst}`);
    }
    
    console.log(`${c.wht}[${ts()}] BOUNCER ➔ Esperando 2000ms antes de conectar al IPTV...${c.rst}`);
    // Espera 2000ms para asegurar que el servidor IPTV limpie por completo la conexión TCP anterior
    streamTimeout = setTimeout(() => {
        streamTimeout = null;
        if (req.socket.destroyed) {
            console.log(`${c.red}[${ts()}] BOUNCER ➔ El usuario cerró el reproductor ANTES de terminar los 2000ms. Abortando conexión.${c.rst}`);
            return; 
        }
        console.log(`${c.grn}[${ts()}] BOUNCER ➔ 2000ms cumplidos. Disparando conexión a IPTV...${c.rst}`);
        const reqObj = forward(target, req, res);
        activeStreamReq = reqObj;
        res.on('close', () => { 
            console.log(`${c.wht}[${ts()}] [${reqObj.reqId}] res.on('close') ➔ Limpiando activeStreamReq si coincide.${c.rst}`);
            if (activeStreamReq === reqObj) activeStreamReq = null; 
        });
    }, 2000);
});

app.listen(PORT, () => {
    console.clear();
    console.log(logo);
    console.log(`${c.red}${c.b}===============================================================================${c.rst}`);
    console.log(`                 ${c.wht}${c.b}IPTV GLOBAL HD - ENGINE CORE v2.0${c.rst}`);
    console.log(`${c.red}${c.b}===============================================================================${c.rst}`);
    console.log(` ${c.grn}▶${c.rst} Panel de Control: ${c.cyn}${c.b}http://localhost:${PORT}${c.rst}`);
    console.log(` ${c.grn}▶${c.rst} Estado:         ${c.grn}${c.b}ACTIVO Y EN ESCUCHA${c.rst}`);
    console.log(` ${c.grn}▶${c.rst} Proxy CORS:     ${c.ylw}Habilitado${c.rst}`);
    console.log(`${c.red}${c.b}===============================================================================${c.rst}`);
    console.log(`${c.wht}(No cierres esta ventana mientras uses la aplicación)${c.rst}\n`);
});
