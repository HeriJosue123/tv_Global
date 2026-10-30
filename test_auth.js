const assert = require('node:assert/strict');
const http = require('node:http');
const { spawn } = require('node:child_process');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function listen(server) {
    return new Promise(resolve => server.listen(0, '127.0.0.1', () => {
        resolve(server.address().port);
    }));
}

async function run() {
    let appProcess;
    let provider;

    try {
        provider = http.createServer((req, res) => {
            const url = new URL(req.url, 'http://localhost');
            const user = url.searchParams.get('username');

            res.setHeader('Content-Type', 'application/json');

            if (user === 'correcto') {
                return res.end(JSON.stringify({
                    user_info: { auth: 1, status: 'Active' },
                    server_info: {}
                }));
            }

            if (user === 'invalido') {
                return res.end(JSON.stringify({
                    user_info: { auth: 0 }
                }));
            }

            res.end('respuesta no valida');
        });

        const providerPort = await listen(provider);

        const probe = http.createServer();
        const appPort = await listen(probe);
        await new Promise(resolve => probe.close(resolve));

        appProcess = spawn(process.execPath, ['server.js'], {
            cwd: __dirname,
            env: { ...process.env, PORT: String(appPort) },
            stdio: 'ignore'
        });

        const base = `http://127.0.0.1:${appPort}`;
        const providerUrl = `http://127.0.0.1:${providerPort}`;

        let ready = false;

        for (let i = 0; i < 50; i++) {
            try {
                await fetch(base);
                ready = true;
                break;
            } catch {
                await delay(200);
            }
        }

        assert.ok(ready, 'El servidor principal no arrancó');

        async function login(server, user, pass = 'test') {
            return fetch(`${base}/api/session`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ server, user, pass })
            });
        }

        let passed = 0;

        const valid = await login(providerUrl, 'correcto');
        const validData = await valid.json();

        assert.equal(valid.status, 200);
        assert.equal(validData.success, true);
        assert.ok(validData.sessionId);
        console.log('[OK] Credenciales válidas crean sesión');
        passed++;

        const invalid = await login(providerUrl, 'invalido');
        assert.equal(invalid.status, 401);
        console.log('[OK] Credenciales incorrectas rechazadas');
        passed++;

        const malformed = await login(providerUrl, 'malformado');
        assert.equal(malformed.status, 502);
        console.log('[OK] Respuesta IPTV inválida rechazada');
        passed++;

        const unreachable = await login('http://127.0.0.1:1', 'correcto');
        assert.equal(unreachable.status, 502);
        console.log('[OK] Proveedor inaccesible no crea sesión');
        passed++;

        const missing = await fetch(`${base}/api/session`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        });

        assert.equal(missing.status, 400);
        console.log('[OK] Credenciales incompletas rechazadas');
        passed++;

        console.log(`\nRESULTADO: ${passed}/5 pruebas correctas`);

    } finally {
        if (appProcess) appProcess.kill();
        if (provider) provider.close();
    }
}

run().catch(error => {
    console.error('ERROR:', error);
    process.exitCode = 1;
});