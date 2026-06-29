const http = require('http');
const https = require('https');

export default function handler(req, res) {
    const targetUrl = req.query.url;

    if (!targetUrl) {
        return res.status(400).send("No URL provided");
    }

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const isHttps = targetUrl.startsWith('https://');
    const client = isHttps ? https : http;

    const options = {
        headers: {
            'User-Agent': 'VLC/3.0.16 LibVLC/3.0.16'
        }
    };

    const proxyReq = client.get(targetUrl, options, (proxyRes) => {
        // Forward content type and length
        if (proxyRes.headers['content-type']) {
            res.setHeader('Content-Type', proxyRes.headers['content-type']);
        }
        if (proxyRes.headers['content-length']) {
            res.setHeader('Content-Length', proxyRes.headers['content-length']);
        }
        
        // Pipe the incoming stream directly to the response
        proxyRes.pipe(res);
    });

    proxyReq.on('error', (e) => {
        console.error("Proxy error:", e);
        res.status(502).send('Error proxying request: ' + e.message);
    });
}
