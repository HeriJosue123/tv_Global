const assert = require('node:assert/strict');

const BASE_URL = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';

const tests = [
    {
        name: 'API proxy rechaza peticiones sin sesión',
        path: '/proxy/api?action=get_live_streams',
        expected: 401
    },
    {
        name: 'Image proxy rechaza peticiones sin sesión',
        path: '/proxy/image?url=https%3A%2F%2Fexample.com%2Fimage.jpg',
        expected: 401
    },
    {
        name: 'Stream proxy rechaza peticiones sin sesión',
        path: '/proxy/stream/live/123',
        expected: 401
    },
    {
        name: 'Endpoint de sesión de pruebas eliminado',
        path: '/api/test_session',
        expected: 404
    },
    {
        name: 'Ruta proxy antigua inexistente',
        path: '/proxy',
        expected: 404
    }
];

async function runTests() {
    let passed = 0;
    let failed = 0;

    console.log('\n=== PRUEBAS DE SEGURIDAD DEL PROXY ===\n');

    for (const test of tests) {
        try {
            const response = await fetch(BASE_URL + test.path);

            assert.equal(
                response.status,
                test.expected,
                `HTTP esperado ${test.expected}, recibido ${response.status}`
            );

            console.log(`[OK] ${test.name} -> HTTP ${response.status}`);
            passed++;
        } catch (error) {
            console.error(`[ERROR] ${test.name}: ${error.message}`);
            failed++;
        }
    }

    console.log('\n=== RESULTADO ===');
    console.log(`Correctas: ${passed}/${tests.length}`);
    console.log(`Fallidas: ${failed}/${tests.length}`);

    if (failed > 0) process.exitCode = 1;
}

runTests().catch(error => {
    console.error('Error ejecutando pruebas:', error);
    process.exitCode = 1;
});