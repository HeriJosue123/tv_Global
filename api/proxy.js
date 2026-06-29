export default async function handler(req, res) {
    const targetUrl = req.query.url;

    if (!targetUrl) {
        return res.status(400).send("No URL provided");
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const response = await fetch(targetUrl, {
            headers: { 'User-Agent': 'VLC/3.0.16 LibVLC/3.0.16' },
            redirect: 'follow'
        });

        if (response.headers.has('content-type')) {
            res.setHeader('Content-Type', response.headers.get('content-type'));
        }

        const { Readable } = require('stream');
        const nodeStream = Readable.fromWeb(response.body);
        nodeStream.pipe(res);
    } catch (e) {
        console.error("Proxy error:", e);
        res.status(502).send('Error proxying request: ' + e.message);
    }
}
