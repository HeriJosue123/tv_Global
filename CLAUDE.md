# CLAUDE.md

Este archivo brinda guía a Claude Code (claude.ai/code) al trabajar con código en este repositorio.

## Qué es esto

IPTV GLOBAL HD — un cliente web autoalojado para cuentas IPTV de Xtream Codes / M3U. Inicia sesión en
un panel IPTV provisto por el usuario, lista categorías/canales en vivo y reproduce los streams en el
navegador. No tiene paso de build ni base de datos backend: todo el frontend es un único archivo HTML
estático, y el único componente de servidor es un proxy local liviano necesario para sortear CORS y
los límites de conexiones simultáneas del proveedor.

## Comandos

```bash
npm install     # instala express, cors (http-proxy-middleware está listado como dependencia pero no se usa)
node server.js  # inicia la app en http://localhost:3000
start.bat       # lanzador de conveniencia para Windows: npm install + node server.js
```

No hay herramientas de build/lint/test. `test_proxy.js` no es una prueba automatizada — es un script
manual que llama al endpoint local `/proxy` contra un servidor/credenciales IPTV reales hardcodeados
para verificar el proxy (`node test_proxy.js`, después de editar la URL/credenciales objetivo en el
archivo).

## Arquitectura

**`index.html`** es todo el frontend: CSS, markup y JS vanilla en un solo archivo, sin framework ni
bundler. Es una app de una sola página con cuatro vistas alternadas mediante `showView()`: login,
inicio (grilla de categorías), canales (grilla de canales dentro de una categoría) y reproductor. Todo
el estado vive en un único objeto `S` y se persiste en `localStorage` (clave `iptv_global_hd_v2`) entre
sesiones, incluyendo auto-login al cargar.

El login soporta tres modos de origen, seleccionados mediante pestañas:
- **Xtream Codes** — servidor/usuario/contraseña consultan `player_api.php` (`get_live_categories`, y
  luego `get_live_streams` por categoría bajo demanda — las categorías nunca traen sus canales de forma
  anticipada, para evitar saturar al proveedor). Si la llamada a la API Xtream falla, el login recae
  silenciosamente en obtener ese mismo servidor como playlist M3U (`get.php?...&type=m3u_plus`) antes de
  rendirse.
- **M3U** — una playlist pegada o una URL para descargarla; se parsea del lado del cliente con
  `parseM3U()`.
- **Bóveda ("Vault")** — una lista de credenciales Xtream guardada localmente, separada de `S`,
  almacenada bajo la clave `iptv_gift_vault` de localStorage. Los usuarios suben un archivo `.txt` y una
  expresión regular extrae cualquier tripleta `host + username= + password=` hacia la bóveda para
  login con un solo clic.

La reproducción de video (`playChannel`) elige un reproductor según la URL/soporte del stream: hls.js
para `.m3u8`, mpegts.js para reproducción `.ts` cruda/MSE, o si no, el soporte HLS nativo de `<video>`.
El texto de descripción del canal en la barra lateral de información del reproductor se obtiene
directamente de la API REST de Wikipedia (sin pasar por el proxy).

**`server.js`** es una app Express mínima que sirve `index.html`/archivos estáticos más dos rutas de
proxy, ambas reenvían solicitudes GET a una URL upstream arbitraria pasada como `?url=` (usando los
módulos nativos `http`/`https` de Node, no `http-proxy-middleware` a pesar de figurar como
dependencia):
- `GET /proxy?url=` — reenvío genérico para llamadas a la API Xtream y descargas de playlist M3U.
- `GET /stream?url=` — ruta dedicada de streaming de video con aplicación de conexión única (lógica
  "bouncer"/portero): la mayoría de las cuentas IPTV permiten solo un stream concurrente, así que antes
  de abrir una nueva conexión upstream destruye cualquier conexión de stream activa anterior y espera
  2000ms a que el proveedor la libere. También cierra la conexión upstream inmediatamente si el
  navegador se desconecta, para evitar dejar un slot de conexión ocupado. Esta lógica es lo principal
  que hay que preservar con cuidado al tocar `server.js` — romperla causa bloqueos de cuenta ("no
  available connections") en paneles IPTV reales.

El servidor registra en consola los eventos del ciclo de vida de las conexiones de forma detallada
(salida coloreada) ya que las caídas/redirecciones de stream son la clase de bug más común — revisar
esta salida primero al depurar problemas de reproducción.

## Notas

- Todavía no existe `.gitignore`; `node_modules/`, `package-lock.json` están actualmente sin trackear /
  de forma improvisada.
- Todo con lo que la app se comunica (credenciales del panel IPTV, URLs de stream) es provisto por el
  usuario en tiempo de ejecución y se guarda solo del lado del cliente (`localStorage`) — el servidor en
  sí es un proxy sin estado y sin persistencia.
