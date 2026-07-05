const target = 'http://elpapadetodos.live:8080/player_api.php?username=6user2825&password=123456&action=get_live_categories';
const encoded = encodeURIComponent(target);
const proxyUrl = `http://localhost:3000/proxy?url=${encoded}`;

console.log('Llamando al proxy:', proxyUrl.substring(0, 80));

async function test() {
    const r = await fetch(proxyUrl);
    console.log('Estado:', r.status);
    const text = await r.text();
    console.log('Primeros 200 caracteres:', text.substring(0, 200));
}
test();
