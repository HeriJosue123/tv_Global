<?php
/**
 * IPTV Proxy for Web Players
 * Bypasses CORS, Mixed Content (HTTP on HTTPS), and spoofing User-Agent
 */

// Enable CORS for HLS.js
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if (!isset($_GET['url']) || empty($_GET['url'])) {
    http_response_code(400);
    die("Error: Faltan parametros (url).");
}

$targetUrl = urldecode($_GET['url']);

// Ensure it's an HTTP/HTTPS URL
if (!preg_match('#^https?://#i', $targetUrl)) {
    http_response_code(400);
    die("Error: URL Invalida.");
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $targetUrl);
// Spoof VLC to bypass blockages
curl_setopt($ch, CURLOPT_USERAGENT, "VLC/3.0.16 LibVLC/3.0.16");
// Spoof ExoPlayer (sometimes required by panels)
// curl_setopt($ch, CURLOPT_USERAGENT, "ExoPlayerDemo/2.15.0 (Linux;Android 11) ExoPlayerLib/2.15.0");

curl_setopt($ch, CURLOPT_RETURNTRANSFER, false); 
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

// Important to pass chunks immediately for video streams (HLS/TS/MP4)
curl_setopt($ch, CURLOPT_BUFFERSIZE, 128 * 1024); // 128KB buffer

// Pass Content-Type from source to client
curl_setopt($ch, CURLOPT_HEADERFUNCTION, function($curl, $header) {
    $len = strlen($header);
    $header = explode(':', $header, 2);
    if (count($header) < 2) // ignore invalid headers
      return $len;

    $name = strtolower(trim($header[0]));
    if (in_array($name, ['content-type', 'content-length', 'content-disposition'])) {
        header(trim($header[0]) . ': ' . trim($header[1]));
    }
    return $len;
});

// Execute the request
curl_exec($ch);

if (curl_errno($ch)) {
    http_response_code(502);
    echo "Error de proxy: " . curl_error($ch);
}

curl_close($ch);
?>
