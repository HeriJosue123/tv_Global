const premiumDatabase = [
  {
    "id": "83260",
    "name": " Adrenalina",
    "logo": "https://st1.uvnimg.com/79/61/506658634ddc88e13a6bd123364d/tudnxtra-logo.jpg",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/83260.m3u8",
    "type": "live",
    "rating": "",
    "added": "1689970963"
  },
  {
    "id": "141568",
    "name": " Usa Series",
    "logo": "https://www.seekpng.com/png/full/359-3595142_original-television-series-movies-and-sports-programming-usa.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/141568.m3u8",
    "type": "live",
    "rating": "",
    "added": "1761234221"
  },
  {
    "id": "21462",
    "name": " Wwb (Wwb Beisbol Latino)",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/969px-MLS_crest_logo_RGB_gradient.svg.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/21462.m3u8",
    "type": "live",
    "rating": "",
    "added": "1596393533"
  },
  {
    "id": "11742",
    "name": "\"Kids\",Babar",
    "logo": "https://cdn.mitvstatic.com/channels/cl_nickelodeon-hd_m.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11742.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559619797"
  },
  {
    "id": "12753",
    "name": "12 LA TELE HD ",
    "logo": "https://www.uypress.net/imgnoticias/201807/W260/76866.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12753.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560883706"
  },
  {
    "id": "18008",
    "name": "12 LA TELE SD",
    "logo": "http://descargas.podzone.net/logos/-tele12.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/18008.m3u8",
    "type": "live",
    "rating": "",
    "added": "1585060475"
  },
  {
    "id": "159138",
    "name": "16avos de final",
    "logo": "",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159138.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782490306"
  },
  {
    "id": "159209",
    "name": "19:00 — Argentina vs. Cabo Verde",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159209.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660695"
  },
  {
    "id": "11903",
    "name": "A 24 HD",
    "logo": "http://descargas.podzone.net/logos/-A24.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11903.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559747235"
  },
  {
    "id": "11865",
    "name": "A 24 SD",
    "logo": "http://descargas.podzone.net/logos/-A24.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11865.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559739711"
  },
  {
    "id": "19120",
    "name": "A&E FHD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/A%26E_Network_logo.svg/1280px-A%26E_Network_logo.svg.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/19120.m3u8",
    "type": "live",
    "rating": "",
    "added": "1588987372"
  },
  {
    "id": "11604",
    "name": "A&E HD",
    "logo": "data:image/png;base64,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",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11604.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559488038"
  },
  {
    "id": "88187",
    "name": "A&E HD_BR",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/A%26E_Network_logo.svg/188px-A%26E_Network_logo.svg.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88187.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693921877"
  },
  {
    "id": "11609",
    "name": "A&E SD",
    "logo": "http://blog.roku.com/wp-content/uploads/2014/02/AE-Logo1.jpg",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11609.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559505992"
  },
  {
    "id": "149599",
    "name": "AMAZON PRIME JOGO 1",
    "logo": "https://iili.io/JGsI5Ft.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149599.m3u8",
    "type": "live",
    "rating": "",
    "added": "1778802279"
  },
  {
    "id": "149600",
    "name": "AMAZON PRIME JOGO 2",
    "logo": "https://iili.io/JGsI5Ft.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149600.m3u8",
    "type": "live",
    "rating": "",
    "added": "1778802347"
  },
  {
    "id": "149601",
    "name": "AMAZON PRIME JOGO 3",
    "logo": "https://iili.io/JGsI5Ft.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149601.m3u8",
    "type": "live",
    "rating": "",
    "added": "1778802537"
  },
  {
    "id": "11885",
    "name": "AMC SERIES",
    "logo": "https://1000logos.net/wp-content/uploads/2023/05/AMC-TV-Logo-1993.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11885.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559744330"
  },
  {
    "id": "28071",
    "name": "AMERICA ",
    "logo": "https://cdn.mitvstatic.com/channels/ar_america-2-capital_m.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/28071.m3u8",
    "type": "live",
    "rating": "",
    "added": "1639316571"
  },
  {
    "id": "11904",
    "name": "AMERICA HD",
    "logo": "https://cdn.mitvstatic.com/channels/ar_america-2-capital_m.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11904.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559747381"
  },
  {
    "id": "11866",
    "name": "AMERICA SD",
    "logo": "https://cdn.mitvstatic.com/channels/ar_america-2-capital_m.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11866.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559739854"
  },
  {
    "id": "88188",
    "name": "ANIMAL PLANET HD_BR",
    "logo": "https://iili.io/BZNr6gf.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88188.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693922404"
  },
  {
    "id": "11864",
    "name": "ARGENTINISIMA",
    "logo": "http://television.com.ar/wp-content/uploads/2010/07/ARGENTINISIMA-.jpg",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11864.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559739568"
  },
  {
    "id": "18164",
    "name": "AXN FHD",
    "logo": "data:image/png;base64,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",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/18164.m3u8",
    "type": "live",
    "rating": "",
    "added": "1585606494"
  },
  {
    "id": "11606",
    "name": "AXN HD ARG",
    "logo": "http://www.brandemia.org/sites/default/files/sites/default/files/axn_nuevo_logo_negativo.jpg",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11606.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559504729"
  },
  {
    "id": "12123",
    "name": "AXN HD MEX",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/AXN_logo_%282015%29.svg/1280px-AXN_logo_%282015%29.svg.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12123.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560229601"
  },
  {
    "id": "11605",
    "name": "AXN SD",
    "logo": "http://www.brandemia.org/sites/default/files/sites/default/files/axn_nuevo_logo_negativo.jpg",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11605.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559504500"
  },
  {
    "id": "12122",
    "name": "AXN SD ARG",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/AXN_logo_%282015%29.svg/1280px-AXN_logo_%282015%29.svg.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12122.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560229351"
  },
  {
    "id": "12020",
    "name": "Azteca Deportes",
    "logo": "http://descargas.podzone.net/logos/-azteca.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12020.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559851386"
  },
  {
    "id": "11760",
    "name": "BABY FIRST SD",
    "logo": "https://i.pinimg.com/originals/1e/54/75/1e5475e63e7183eb7391444402afd010.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11760.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559657677"
  },
  {
    "id": "11753",
    "name": "BABY TV SD",
    "logo": "http://descargas.podzone.net/logos/-baby-tv.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11753.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559622019"
  },
  {
    "id": "12421",
    "name": "BAND HD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/60/Logo_da_Rede_Bandeirantes.PNG",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12421.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560482778"
  },
  {
    "id": "12431",
    "name": "BAND NEWS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Rede_Bandeirantes_logo_2011.svg/1277px-Rede_Bandeirantes_logo_2011.svg.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12431.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560519807"
  },
  {
    "id": "142099",
    "name": "BAND RS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/60/Logo_da_Rede_Bandeirantes.PNG",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/142099.m3u8",
    "type": "live",
    "rating": "",
    "added": "1761832874"
  },
  {
    "id": "96369",
    "name": "Band Sport HD",
    "logo": "https://iili.io/JM59Gvp.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/96369.m3u8",
    "type": "live",
    "rating": "",
    "added": "1706046380"
  },
  {
    "id": "11970",
    "name": "Bein Sports N HD",
    "logo": "http://descargas.podzone.net/logos/-Bein-sports-N.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11970.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559786026"
  },
  {
    "id": "21458",
    "name": "Bein Sports Us",
    "logo": "http://descargas.podzone.net/logos/-Bein-sports-N.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/21458.m3u8",
    "type": "live",
    "rating": "",
    "added": "1596392436"
  },
  {
    "id": "16965",
    "name": "Bein Sports Xtra",
    "logo": "data:image/png;base64,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",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16965.m3u8",
    "type": "live",
    "rating": "",
    "added": "1579106703"
  },
  {
    "id": "41757",
    "name": "Bellator MMA",
    "logo": "https://upload.wikimedia.org/wikipedia/en/a/a9/Bellator_MMA_Logo.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/41757.m3u8",
    "type": "live",
    "rating": "",
    "added": "1663094326"
  },
  {
    "id": "11906",
    "name": "Bitme",
    "logo": "https://vignette.wikia.nocookie.net/logosfakeped/images/e/eb/Babytv_fox_font.png/revision/latest?cb=20140203022623",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11906.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559748000"
  },
  {
    "id": "11863",
    "name": "C5N",
    "logo": "http://descargas.podzone.net/logos/-C5N.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11863.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559739451"
  },
  {
    "id": "11902",
    "name": "C5N HD",
    "logo": "http://descargas.podzone.net/logos/-C5N.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11902.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559747049"
  },
  {
    "id": "147871",
    "name": "Canal 10 ",
    "logo": "http://descargas.podzone.net/logos/-canal-10.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/147871.m3u8",
    "type": "live",
    "rating": "",
    "added": "1774475425"
  },
  {
    "id": "14184",
    "name": "CANAL 10 HD",
    "logo": "https://descargas.podzone.net/logos/-canal-10.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14184.m3u8",
    "type": "live",
    "rating": "",
    "added": "1562716847"
  },
  {
    "id": "12772",
    "name": "CANAL 10 SAETA HD",
    "logo": "https://descargas.podzone.net/logos/-canal-10.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12772.m3u8",
    "type": "live",
    "rating": "",
    "added": "1561057309"
  },
  {
    "id": "12385",
    "name": "CANAL 10 SD ",
    "logo": "https://descargas.podzone.net/logos/-canal-10.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12385.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560394589"
  },
  {
    "id": "42184",
    "name": "Canal 11 Plus",
    "logo": "http://descargas.podzone.net/logos/-canal-11-punta-del-este.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/42184.m3u8",
    "type": "live",
    "rating": "",
    "added": "1665155725"
  },
  {
    "id": "15075",
    "name": "CANAL 11 PUNTA DEL ESTE HD",
    "logo": "http://descargas.podzone.net/logos/-canal-11-punta-del-este.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/15075.m3u8",
    "type": "live",
    "rating": "",
    "added": "1565991018"
  },
  {
    "id": "18083",
    "name": "CANAL 11 PUNTA DEL ESTE SD",
    "logo": "http://descargas.podzone.net/logos/-canal-11-punta-del-este.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/18083.m3u8",
    "type": "live",
    "rating": "",
    "added": "1585240950"
  },
  {
    "id": "14183",
    "name": "CANAL 12 HD",
    "logo": "http://descargas.podzone.net/logos/-tele12.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14183.m3u8",
    "type": "live",
    "rating": "",
    "added": "1562716762"
  },
  {
    "id": "19217",
    "name": "Canal 12 Melo",
    "logo": "https://directostv.teleame.com/wp-content/uploads/2018/04/canal-12-melo-324x160.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/19217.m3u8",
    "type": "live",
    "rating": "",
    "added": "1589592155"
  },
  {
    "id": "12747",
    "name": "CANAL 12 SD",
    "logo": "http://descargas.podzone.net/logos/-tele12.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12747.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560881197"
  },
  {
    "id": "11901",
    "name": "CANAL 13 HD",
    "logo": "http://descargas.podzone.net/logos/-el-trece.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11901.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559746936"
  },
  {
    "id": "12443",
    "name": "Canal 13 Internacional ",
    "logo": "http://descargas.podzone.net/logos/-el-trece.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12443.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560544007"
  },
  {
    "id": "11862",
    "name": "CANAL 13 SD",
    "logo": "http://descargas.podzone.net/logos/-el-trece.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11862.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559739276"
  },
  {
    "id": "11900",
    "name": "CANAL 26 HD",
    "logo": "http://descargas.podzone.net/logos/-canal-26.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11900.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559746759"
  },
  {
    "id": "102292",
    "name": "CANAL 4 HD",
    "logo": "http://descargas.podzone.net/logos/-Canal-4.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/102292.m3u8",
    "type": "live",
    "rating": "",
    "added": "1718293317"
  },
  {
    "id": "14181",
    "name": "CANAL 4 SD",
    "logo": "http://descargas.podzone.net/logos/-Canal-4.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14181.m3u8",
    "type": "live",
    "rating": "",
    "added": "1562689505"
  },
  {
    "id": "12384",
    "name": "CANAL 4 SD 1",
    "logo": "http://descargas.podzone.net/logos/-Canal-4.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12384.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560394368"
  },
  {
    "id": "103306",
    "name": "CANAL 5 TNU",
    "logo": "http://descargas.podzone.net/logos/-canal-5-uruguay.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/103306.m3u8",
    "type": "live",
    "rating": "",
    "added": "1722955846"
  },
  {
    "id": "14262",
    "name": "CANAL 7 DE MALDONADO",
    "logo": "http://descargas.podzone.net/Logos3/003.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14262.m3u8",
    "type": "live",
    "rating": "",
    "added": "1562966874"
  },
  {
    "id": "11899",
    "name": "CANAL 9 HD",
    "logo": "http://descargas.podzone.net/logos/-el-nueve.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11899.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559746653"
  },
  {
    "id": "11859",
    "name": "CANAL 9 SD",
    "logo": "http://descargas.podzone.net/logos/-el-nueve.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11859.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559738733"
  },
  {
    "id": "15019",
    "name": "CANAL A+V",
    "logo": "http://descargas.podzone.net/logos/-AmasV.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/15019.m3u8",
    "type": "live",
    "rating": "",
    "added": "1565722339"
  },
  {
    "id": "12105",
    "name": "CANAL PANDA",
    "logo": "http://www.cineytele.com/wp-content/uploads/2015/02/LOGO-PANDA_VERTICAL_CANAL.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12105.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560225822"
  },
  {
    "id": "14005",
    "name": "CARDINAL TV",
    "logo": "http://descargas.podzone.net/Logos3/002.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14005.m3u8",
    "type": "live",
    "rating": "",
    "added": "1562174161"
  },
  {
    "id": "11751",
    "name": "CARTOON NETWORK HD",
    "logo": "http://assets.stickpng.com/thumbs/589a41e25aa6293a4aac48ab.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11751.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559621657"
  },
  {
    "id": "11750",
    "name": "CARTOON NETWORK SD",
    "logo": "http://assets.stickpng.com/thumbs/589a41e25aa6293a4aac48ab.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11750.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559621438"
  },
  {
    "id": "11714",
    "name": "Cartoonito HD",
    "logo": "http://descargas.podzone.net/logos/-cartoonito.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11714.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559599806"
  },
  {
    "id": "149809",
    "name": "Casa do Patrão - 01",
    "logo": "https://iili.io/Bin963G.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149809.m3u8",
    "type": "live",
    "rating": "",
    "added": "1779284076"
  },
  {
    "id": "149811",
    "name": "Casa do Patrão - 02",
    "logo": "https://iili.io/Bin963G.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149811.m3u8",
    "type": "live",
    "rating": "",
    "added": "1779286744"
  },
  {
    "id": "149812",
    "name": "Casa do Patrão - 03",
    "logo": "https://iili.io/Bin963G.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149812.m3u8",
    "type": "live",
    "rating": "",
    "added": "1779286793"
  },
  {
    "id": "149813",
    "name": "Casa do Patrão - 04",
    "logo": "https://iili.io/Bin963G.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149813.m3u8",
    "type": "live",
    "rating": "",
    "added": "1779286954"
  },
  {
    "id": "149810",
    "name": "Casa do Patrão - 05",
    "logo": "https://iili.io/Bin963G.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149810.m3u8",
    "type": "live",
    "rating": "",
    "added": "1779284149"
  },
  {
    "id": "149814",
    "name": "Casa do Patrão - 06",
    "logo": "https://iili.io/Bin963G.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149814.m3u8",
    "type": "live",
    "rating": "",
    "added": "1779287011"
  },
  {
    "id": "149815",
    "name": "Casa do Patrão - 07",
    "logo": "https://iili.io/Bin963G.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149815.m3u8",
    "type": "live",
    "rating": "",
    "added": "1779288426"
  },
  {
    "id": "12045",
    "name": "CDF PREMIUN HD",
    "logo": "http://3.bp.blogspot.com/-G2-4yYvvcEE/UhECiUQcGMI/AAAAAAAAOmo/a6UhoJrISyg/s1600/cdf+premium+NUEVO.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12045.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559862126"
  },
  {
    "id": "12001",
    "name": "CDF PREMIUN SD",
    "logo": "http://3.bp.blogspot.com/-JFht_TGbcTI/UZbtz3tpUII/AAAAAAAAAog/9ufu15mKjcA/s1600/cdf+premium+nuevo.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12001.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559838840"
  },
  {
    "id": "12011",
    "name": "CDO 2 SD CHILE",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/48/CDO_Premium.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12011.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559847345"
  },
  {
    "id": "11897",
    "name": "CINEAR HD",
    "logo": "http://pensilvaniafilms.com/wp-content/uploads/2017/10/CINEAR.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11897.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559746387"
  },
  {
    "id": "11922",
    "name": "CLARO SPORT 2 HD",
    "logo": "http://cmll.com/wp-content/uploads/2015/08/claro_sport.jpg",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11922.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559771528"
  },
  {
    "id": "11998",
    "name": "CLARO SPORT SD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/30/Claro_Sports_logo.svg",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11998.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559837650"
  },
  {
    "id": "102996",
    "name": "Claro Sports 3 HD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/2024_Summer_Olympics_text_logo.svg/800px-2024_Summer_Olympics_text_logo.svg.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/102996.m3u8",
    "type": "live",
    "rating": "",
    "added": "1721949559"
  },
  {
    "id": "12436",
    "name": "COMBATE",
    "logo": "https://www.tvmagazine.com.br/historiadatvpaga/imagens/mva_combate2008.jpg",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12436.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560522735"
  },
  {
    "id": "39643",
    "name": "COMEDY CENTRAL BR",
    "logo": "https://m.media-amazon.com/images/M/MV5BMDhkNTA3ZDYtNTcwZC00NDU5LWFmYTktYzc5YmE3ZTNlMWJmXkEyXkFqcGdeQXVyNjk1MzA2Njk@._V1_.jpg",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/39643.m3u8",
    "type": "live",
    "rating": "",
    "added": "1655583609"
  },
  {
    "id": "11894",
    "name": "CRONICA TV HD",
    "logo": "http://descargas.podzone.net/logos/-cronica.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11894.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559745829"
  },
  {
    "id": "11976",
    "name": "DAZN 1 ALEMAN",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Sky_Sport_F1_-_Logo_2018.svg/1280px-Sky_Sport_F1_-_Logo_2018.svg.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11976.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559789242"
  },
  {
    "id": "12043",
    "name": "DAZN 1 FHD",
    "logo": "https://images-na.ssl-images-amazon.com/images/I/71njwkZLLfL.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12043.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559861116"
  },
  {
    "id": "11975",
    "name": "DAZN 2 FHD",
    "logo": "https://images-na.ssl-images-amazon.com/images/I/71njwkZLLfL.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11975.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559789063"
  },
  {
    "id": "16967",
    "name": "DAZN F1",
    "logo": "https://images-na.ssl-images-amazon.com/images/I/71njwkZLLfL.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16967.m3u8",
    "type": "live",
    "rating": "",
    "added": "1579107360"
  },
  {
    "id": "42757",
    "name": "DAZN Formula 1",
    "logo": "",
    "category": "EVENTOS DEL DIA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/42757.m3u8",
    "type": "live",
    "rating": "",
    "added": "1668280838"
  },
  {
    "id": "11893",
    "name": "DeporTV HD",
    "logo": "http://descargas.podzone.net/logos/-deportv.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11893.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559745674"
  },
  {
    "id": "145616",
    "name": "DIRECTV PREMIUM 1",
    "logo": "https://tavilatam.com/wp-content/uploads/2025/12/TAVI_Torneos_AUF_Directv.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/145616.m3u8",
    "type": "live",
    "rating": "",
    "added": "1767991324"
  },
  {
    "id": "145617",
    "name": "DIRECTV PREMIUM 2",
    "logo": "https://tavilatam.com/wp-content/uploads/2025/12/TAVI_Torneos_AUF_Directv.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/145617.m3u8",
    "type": "live",
    "rating": "",
    "added": "1767991601"
  },
  {
    "id": "12738",
    "name": "Directv Sport +",
    "logo": "http://descargas.podzone.net/logos/-Directv-sports.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12738.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560827689"
  },
  {
    "id": "12042",
    "name": "Directv Sport 2 HD",
    "logo": "http://descargas.podzone.net/logos/-Directv-sports-2.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12042.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559860569"
  },
  {
    "id": "12739",
    "name": "Directv Sports 1 HD",
    "logo": "http://descargas.podzone.net/logos/-Directv-sports.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12739.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560827910"
  },
  {
    "id": "12019",
    "name": "Directv Sports 1 SD",
    "logo": "http://descargas.podzone.net/logos/-Directv-sports.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12019.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559850329"
  },
  {
    "id": "22979",
    "name": "DIRECTV SPORTS URUGUAY",
    "logo": "http://descargas.podzone.net/logos/-Directv-sports.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/22979.m3u8",
    "type": "live",
    "rating": "",
    "added": "1607076424"
  },
  {
    "id": "88191",
    "name": "DISCOVERY CHANNEL H&H HD_BR",
    "logo": "https://cdn.mitvstatic.com/channels/cl_discovery-home-and-health_m.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88191.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693923580"
  },
  {
    "id": "88190",
    "name": "DISCOVERY CIVILIZACION HD_BR",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Discovery_Civilization_logo.svg/480px-Discovery_Civilization_logo.svg.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88190.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693923351"
  },
  {
    "id": "11765",
    "name": "DISCOVERY KIDS FHD",
    "logo": "http://descargas.podzone.net/logos/-discovery-kids.png.files.wordpress.com/2008/12/6c6fe-dk.png?w=218",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11765.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559659731"
  },
  {
    "id": "11767",
    "name": "DISCOVERY KIDS HD",
    "logo": "http://descargas.podzone.net/logos/-discovery-kids.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11767.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559660037"
  },
  {
    "id": "88192",
    "name": "DISCOVERY SCIENCE HD_BR",
    "logo": "https://w7.pngwing.com/pngs/917/937/png-transparent-discovery-science-discovery-channel-television-channel-civilization-network-television-text-logo.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88192.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693923917"
  },
  {
    "id": "88193",
    "name": "DISCOVERY TURBO HD_BR",
    "logo": "https://iili.io/BZNrkbI.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88193.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693924059"
  },
  {
    "id": "88194",
    "name": "DISCOVERY WORLD HD_BR",
    "logo": "https://iili.io/BZNreON.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88194.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693924196"
  },
  {
    "id": "11719",
    "name": "DISNEY CHANNEL HD",
    "logo": "http://descargas.podzone.net/logos/-disney-channel.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11719.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559600847"
  },
  {
    "id": "86845",
    "name": "DISNEY ESPN URUGUAY",
    "logo": "http://descargas.podzone.net/logos/-ESPN-1.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/86845.m3u8",
    "type": "live",
    "rating": "",
    "added": "1692722697"
  },
  {
    "id": "11721",
    "name": "DISNEY JUNIOR HD",
    "logo": "http://descargas.podzone.net/logos/-DISNEY-JR.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11721.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559601286"
  },
  {
    "id": "16859",
    "name": "Dreamworks (Dreamworks Latino)",
    "logo": "http://descargas.podzone.net/logos2/-CINEMA-DREAMWORKS.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16859.m3u8",
    "type": "live",
    "rating": "",
    "added": "1577110949"
  },
  {
    "id": "12018",
    "name": "El reino infantil",
    "logo": "http://www.thedailytelevision.com/sites/default/files/notas/imagenes/interior/semillitas_earth_day_vbig.jpg",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12018.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559850087"
  },
  {
    "id": "11892",
    "name": "ENCUENTRO HD",
    "logo": "http://descargas.podzone.net/logos/-encuentro.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11892.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559745544"
  },
  {
    "id": "16881",
    "name": "ESPN 2",
    "logo": "https://iili.io/JMfjsBj.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16881.m3u8",
    "type": "live",
    "rating": "",
    "added": "1578005794"
  },
  {
    "id": "11966",
    "name": "ESPN 2 CHILE",
    "logo": "http://descargas.podzone.net/logos/-ESPN-2.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11966.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559784040"
  },
  {
    "id": "11905",
    "name": "ESPN 2 HD Colombia",
    "logo": "http://descargas.podzone.net/logos/-ESPN-2.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11905.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559747675"
  },
  {
    "id": "11989",
    "name": "ESPN 2 MX HD",
    "logo": "http://ik.imagekit.io/ulangotv/image/upload/70997_logo_espn_2.png",
    "category": "DEPORTES MEXICO",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11989.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559834032"
  },
  {
    "id": "11850",
    "name": "ESPN 2 SD ",
    "logo": "http://descargas.podzone.net/logos/-ESPN-2.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11850.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559736739"
  },
  {
    "id": "34856",
    "name": "Espn 3",
    "logo": "https://iili.io/JMfj6hu.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/34856.m3u8",
    "type": "live",
    "rating": "",
    "added": "1645465784"
  },
  {
    "id": "11849",
    "name": "ESPN 3  SD",
    "logo": "http://descargas.podzone.net/logos/-ESPN-3.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11849.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559736602"
  },
  {
    "id": "11917",
    "name": "ESPN 3 CHILE",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/b/bc/ESPN%2B_logo.jpg",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11917.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559770589"
  },
  {
    "id": "11990",
    "name": "ESPN 3 MX HD",
    "logo": "http://www.supercable.com/supercable/wp-content/uploads/2018/03/espn-3-logo-01.png",
    "category": "DEPORTES MEXICO",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11990.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559834116"
  },
  {
    "id": "64415",
    "name": "ESPN 4 MX HD",
    "logo": "https://forounivers.com/uploads/monthly_2021_12/large.ESPN4_logo.png.6cabec4272e924e3273d3c6219ad67fb.png",
    "category": "DEPORTES MEXICO",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/64415.m3u8",
    "type": "live",
    "rating": "",
    "added": "1682175983"
  },
  {
    "id": "21456",
    "name": "Espn 4 SD",
    "logo": "http://descargas.podzone.net/logos/-ESPN-4.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/21456.m3u8",
    "type": "live",
    "rating": "",
    "added": "1596392151"
  },
  {
    "id": "12030",
    "name": "ESPN 5 HD",
    "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAC5CAMAAABDc25uAAAAh1BMVEX////tHCT95ebvOUDtICfvMDj0cHX/+/vyX2T0eX32kpX+8PD83N7wSE7vNz7uKC/wP0X7z9H+9vb5tbjuJi3xUVjyVlz81tf5urz7x8n+8fH96+vvNDv1gYbwQUj4oqXzanD2iY33nKD5r7L4p6r2j5P0dXrzbHH6w8XzY2n3n6LxU1n1f4OBJvWDAAAD9klEQVR4nO2Y3ZaiMBCEAyKoiIriv6go46jj+z/fhnGHbpPQzroXs2dPfXdKE4qku9JBKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC/ZN4OmulWEatJOBoKQW7aSTGv7o46DQFZa7+IuBI/aTeT2MqXmdfMmw5IL1KExKjUyuKkOWB4i5mSdCiM5VB+DIT4Ur/Z6EXdlbKJnsmBEBDkbNYXkpK9rbwnDbzQS/ii6k8+VvJMeu2UlJRSYGErvwnhw1QdpIl4ih5AnEnPO5CSQggLSkt4dBHiB340e0Eve+BEnknPu5GUkxA2PFvKx1MhPlmt/yLLNcFRvckRpDzqCGGbuaXcl6TNon77FcE1wVmcSe/uXnckE/K2a0t5P2k1k6t0K1x+TjJXJzniSHNIJpRZdr4f23nuC8RqLF3+BpFaywGkiJlQt2/iW8L/IZgJ7X5ay5+xo+pYfCe+DJvp+urQcOlUHO8LmAr3h+FRzelHrWdc1P8VlC0FKT/1OOUytnXLdr7xo2bPDEaH6qkH4X7P63E7r3OA1eKUlIeNo2RJaRfoEzsffwiXg0I3HbkkXNs5NReUA3Oy2nf1DeVae2FJF3eaThTtJWHDpVLvYkCquvzHb87UfOYkRZyD7GgqF3eaUD1pW3I1FruD6Ypl46B2NtaesrZFbFq9malc7M4L9aRV7ETrrXBZN7kruj+p64xl0IQtv5S43tBULr5oVVLLRIjQ3cGm+eroGCm/xYK/HkrtacaaXJVKsxSYyskagqRjsqwi/DI0/qYEu/CNb/QYddr11UMxhl/PZBm06XMxfq+TPEJ3W3NOZZEtI5P6UQ+saFW7asJS1nUzK8b6bMD8zGykolX8ABnEyBDOvKPdV9+D2VFPXWnNJq7go2NLZwPMbJ9+kEf1b1Yo82tHH+mG7EgfVApaztQV7LLzvtPOXcRU/6FxyadL7VPXYKf83PxPc6mnMTszO98418xl50tHBik16dnkVEVvxsBz2c5Fz6wSjC2nc814Mbrs/FpHipu5Yyc6SwfzgtefiyRmy+lMWVbNZOfMz6g2xI3h8RvBJ6Vs53I75e0Vs3NnyrKzItk5+RmrjSfHxsRcUel4q0tKbCWqforZueODiNvOFfkZq40niXkzR5b6Mz0hYr/ldWKeTldz7AqnnTv9TE7MgXX0l5rYTV/scb2pnrCX7NxZG1dPoG0P3hLCt7HQAgeDvPIKtgW/YufMpItmIdnM/kykWsJ330vU+Fl4e+ndly8ffJE47byob2nVb5bSQ5lJN+VtNgonrsMcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH6SX/xnR8CAFpE7AAAAAElFTkSuQmCC",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12030.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559853025"
  },
  {
    "id": "17719",
    "name": "ESPN 5 SUR",
    "logo": "https://iili.io/BEUKlmx.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/17719.m3u8",
    "type": "live",
    "rating": "",
    "added": "1580995283"
  },
  {
    "id": "92313",
    "name": "ESPN 6",
    "logo": "data:image/png;base64,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",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/92313.m3u8",
    "type": "live",
    "rating": "",
    "added": "1698110629"
  },
  {
    "id": "17720",
    "name": "ESPN 7 SUR",
    "logo": "https://img.utdstc.com/icons/tigo-sports-android.png:l",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/17720.m3u8",
    "type": "live",
    "rating": "",
    "added": "1580995864"
  },
  {
    "id": "12509",
    "name": "ESPN BRASIL",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ESPN_Brasil_logo.svg/1200px-ESPN_Brasil_logo.svg.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12509.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560627714"
  },
  {
    "id": "20323",
    "name": "ESPN Colombia HD",
    "logo": "https://cdn.mitvstatic.com/channels/pe_espn_m.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/20323.m3u8",
    "type": "live",
    "rating": "",
    "added": "1593537821"
  },
  {
    "id": "11913",
    "name": "ESPN Deportes HD",
    "logo": "https://library.kissclipart.com/20180924/bwq/kissclipart-espn-deportes-logo-clipart-espn-deportes-sports-93892b78a6709a4f.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11913.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559769753"
  },
  {
    "id": "15217",
    "name": "ESPN EXTRA BR",
    "logo": "https://www.satlogo.com/hires/ee/espn_extra_lam.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/15217.m3u8",
    "type": "live",
    "rating": "",
    "added": "1566788708"
  },
  {
    "id": "11991",
    "name": "ESPN HD MX",
    "logo": "https://www.ecured.cu/images/thumb/2/2f/Espn_logo.jpg/260px-Espn_logo.jpg",
    "category": "DEPORTES MEXICO",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11991.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559834225"
  },
  {
    "id": "11992",
    "name": "ESPN PLUS MX HD",
    "logo": "https://alruckershow.com/wp-content/uploads/2018/04/espn-plus-logo.png",
    "category": "DEPORTES MEXICO",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11992.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559834373"
  },
  {
    "id": "11851",
    "name": "ESPN SD ",
    "logo": "https://cdn.mitvstatic.com/channels/pe_espn_m.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11851.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559736834"
  },
  {
    "id": "21813",
    "name": "ESTADIO TNT SPORTS CHILE HD",
    "logo": "https://logodownload.org/wp-content/uploads/2021/01/tnt-sports-logo-3.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/21813.m3u8",
    "type": "live",
    "rating": "",
    "added": "1596718913"
  },
  {
    "id": "12044",
    "name": "ESTADIO TNT SPORTS CHILE SD",
    "logo": "https://img.sport-tv-guide.live/images/tv-station-estadio-tnt-sports-2559.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12044.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559861381"
  },
  {
    "id": "149255",
    "name": "Euro Sports 1 (Eventos)",
    "logo": "",
    "category": "EVENTOS DEL DIA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149255.m3u8",
    "type": "live",
    "rating": "",
    "added": "1778335809"
  },
  {
    "id": "147591",
    "name": "EUROSPORTS 2 OPCION 2",
    "logo": "",
    "category": "EVENTOS DEL DIA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/147591.m3u8",
    "type": "live",
    "rating": "",
    "added": "1773333050"
  },
  {
    "id": "14259",
    "name": "EVENTOS 1",
    "logo": "https://static.gameloop.com/img/1ff627ef8a4f9b8c9e7ea6adaa12fceb.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    "category": "EVENTOS DEL DIA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14259.m3u8",
    "type": "live",
    "rating": "",
    "added": "1562955143"
  },
  {
    "id": "19219",
    "name": "EVENTOS 2",
    "logo": "https://static.gameloop.com/img/1ff627ef8a4f9b8c9e7ea6adaa12fceb.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    "category": "EVENTOS DEL DIA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/19219.m3u8",
    "type": "live",
    "rating": "",
    "added": "1589593215"
  },
  {
    "id": "17809",
    "name": "EVENTOS 3",
    "logo": "https://static.gameloop.com/img/1ff627ef8a4f9b8c9e7ea6adaa12fceb.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    "category": "EVENTOS DEL DIA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/17809.m3u8",
    "type": "live",
    "rating": "",
    "added": "1583343216"
  },
  {
    "id": "14130",
    "name": "EVENTOS 4",
    "logo": "https://static.gameloop.com/img/1ff627ef8a4f9b8c9e7ea6adaa12fceb.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    "category": "EVENTOS DEL DIA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14130.m3u8",
    "type": "live",
    "rating": "",
    "added": "1562424961"
  },
  {
    "id": "14405",
    "name": "Eventos 4 Dazn 4",
    "logo": "https://espnpressroom.com/latinamerica/files/2022/03/STAR_CampeonatoUruguayo_mz.jpg",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14405.m3u8",
    "type": "live",
    "rating": "",
    "added": "1563636681"
  },
  {
    "id": "147316",
    "name": "EVENTOS 5",
    "logo": "https://static.gameloop.com/img/1ff627ef8a4f9b8c9e7ea6adaa12fceb.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    "category": "EVENTOS DEL DIA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/147316.m3u8",
    "type": "live",
    "rating": "",
    "added": "1771530266"
  },
  {
    "id": "149598",
    "name": "EVENTOS 6",
    "logo": "",
    "category": "EVENTOS DEL DIA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/149598.m3u8",
    "type": "live",
    "rating": "",
    "added": "1778794506"
  },
  {
    "id": "20319",
    "name": "FIFA+",
    "logo": "https://www.digitaltveurope.com/files/2023/03/Screenshot-2023-03-08-at-12.33.41.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/20319.m3u8",
    "type": "live",
    "rating": "",
    "added": "1593537215"
  },
  {
    "id": "12437",
    "name": "FISH TV",
    "logo": "http://english.amazoniafishing.com.br/wp-content/uploads/2018/12/logo-grande-fish-tv.jpg",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12437.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560523680"
  },
  {
    "id": "19215",
    "name": "FIX Eventos HD",
    "logo": "https://pbs.twimg.com/profile_images/826860693303468033/WrFjQ7X5.jpg",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/19215.m3u8",
    "type": "live",
    "rating": "",
    "added": "1589589293"
  },
  {
    "id": "12041",
    "name": "Fox Deportes HD",
    "logo": "http://descargas.podzone.net/logos/-Fox-sports.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12041.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559860290"
  },
  {
    "id": "12009",
    "name": "FOX SPORT 2 HD MEX",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2015_Fox_sports_logo.svg/1200px-2015_Fox_sports_logo.svg.png",
    "category": "DEPORTES MEXICO",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12009.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559846871"
  },
  {
    "id": "12010",
    "name": "FOX SPORT 3 HD MEX",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Fox_sports_3_logo.svg/1280px-Fox_sports_3_logo.svg.png",
    "category": "DEPORTES MEXICO",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12010.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559847044"
  },
  {
    "id": "12008",
    "name": "FOX SPORT HD MEX",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/FOX_Sports_logo.svg/800px-FOX_Sports_logo.svg.png",
    "category": "DEPORTES MEXICO",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12008.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559846762"
  },
  {
    "id": "16883",
    "name": "FOX SPORTS 2",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2015_Fox_sports_logo.svg/1200px-2015_Fox_sports_logo.svg.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16883.m3u8",
    "type": "live",
    "rating": "",
    "added": "1578006235"
  },
  {
    "id": "12515",
    "name": "FOX SPORTS BR",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/FOX_Sports_logo.svg/1200px-FOX_Sports_logo.svg.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12515.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560629198"
  },
  {
    "id": "38384",
    "name": "FOX Sports Premium",
    "logo": "https://sport-tv-guide.live/images/stations/a192.png",
    "category": "DEPORTES MEXICO",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/38384.m3u8",
    "type": "live",
    "rating": "",
    "added": "1650420864"
  },
  {
    "id": "20321",
    "name": "FOX SPORTS PREMIUM SUR",
    "logo": "http://descargas.podzone.net/logos/-Fox-sports.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/20321.m3u8",
    "type": "live",
    "rating": "",
    "added": "1593537397"
  },
  {
    "id": "16963",
    "name": "FUTBOL DE ECUADOR",
    "logo": "https://image.roku.com/channels/images/74f6f40197334ad6b7fdb78439e35d5a-hd.jpg",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16963.m3u8",
    "type": "live",
    "rating": "",
    "added": "1579106393"
  },
  {
    "id": "12428",
    "name": "GLOBO NEWS",
    "logo": "data:image/png;base64,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",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12428.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560515980"
  },
  {
    "id": "23399",
    "name": "GLOBO RBS TV PORTO ALEGRE HD",
    "logo": "https://upload.wikimedia.org/wikipedia/en/d/dc/Rbs_tv_logo.jpg",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/23399.m3u8",
    "type": "live",
    "rating": "",
    "added": "1611691977"
  },
  {
    "id": "12416",
    "name": "GLOBO RJ HD",
    "logo": "https://inevent.com/es/images/clients/globo.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12416.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560481645"
  },
  {
    "id": "12413",
    "name": "GLOBO SP HD",
    "logo": "https://inevent.com/es/images/clients/globo.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12413.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560480823"
  },
  {
    "id": "16964",
    "name": "GLORY KICKBOXING",
    "logo": "https://ih1.redbubble.net/image.2247655092.2658/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16964.m3u8",
    "type": "live",
    "rating": "",
    "added": "1579106536"
  },
  {
    "id": "24793",
    "name": "GNT HD",
    "logo": "https://iili.io/dHVZYAX.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/24793.m3u8",
    "type": "live",
    "rating": "",
    "added": "1622515329"
  },
  {
    "id": "12741",
    "name": "GOL PERU",
    "logo": "http://descargas.podzone.net/logos/-gol-peru.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12741.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560828191"
  },
  {
    "id": "11971",
    "name": "GOL TV ECUADOR HD",
    "logo": "http://descargas.podzone.net/logos/-gol-peru.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11971.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559786962"
  },
  {
    "id": "11965",
    "name": "GOL TV HD",
    "logo": "http://descargas.podzone.net/logos/-gol-peru.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11965.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559783850"
  },
  {
    "id": "11889",
    "name": "GOLF CHANNEL HD",
    "logo": "http://descargas.podzone.net/logos/-NBC-GOLF-CHANNEL.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11889.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559745013"
  },
  {
    "id": "116384",
    "name": "Gran hermano generación dorada",
    "logo": "https://fotos.perfil.com/2024/12/02/trim/950/534/gran-hermano-2025-1922635.jpg",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/116384.m3u8",
    "type": "live",
    "rating": "",
    "added": "1733187625"
  },
  {
    "id": "11861",
    "name": "Gran hermano generación dorada 2",
    "logo": "http://television.com.ar/wp-content/uploads/2016/06/ORBEE.jpg",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11861.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559739151"
  },
  {
    "id": "116603",
    "name": "Gran hermano generación dorada 3",
    "logo": "https://www.canal2misiones.com.ar/img/f-ch2-2.jpg",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/116603.m3u8",
    "type": "live",
    "rating": "",
    "added": "1733344221"
  },
  {
    "id": "88196",
    "name": "HBO 2 HD_BR",
    "logo": "https://iili.io/Bmkh45J.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88196.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693925705"
  },
  {
    "id": "88197",
    "name": "HBO FAMILY HD_BR",
    "logo": "https://iili.io/BmkhUUg.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88197.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693925901"
  },
  {
    "id": "88198",
    "name": "HBO SIGNATURE HD_BR",
    "logo": "https://iili.io/BmkheWB.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88198.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693926283"
  },
  {
    "id": "16535",
    "name": "Hi Sports",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/969px-MLS_crest_logo_RGB_gradient.svg.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16535.m3u8",
    "type": "live",
    "rating": "",
    "added": "1573755428"
  },
  {
    "id": "88199",
    "name": "HISTORY 2 HD_BR",
    "logo": "https://iili.io/BZNrh0J.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88199.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693926427"
  },
  {
    "id": "88200",
    "name": "HISTORY HD_BR",
    "logo": "https://iili.io/BZNrNJR.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88200.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693926562"
  },
  {
    "id": "159206",
    "name": "HR 00:00 — Suiza vs. Argelia",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159206.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660434"
  },
  {
    "id": "159200",
    "name": "HR 13:00 — Inglaterra vs. República Democrática del Congo",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159200.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660061"
  },
  {
    "id": "159161",
    "name": "HR 14:00 Brasil vs Japón",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159161.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782570744"
  },
  {
    "id": "159165",
    "name": "HR 14:00 Costa de Marfil vs Noruega",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159165.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782571060"
  },
  {
    "id": "159208",
    "name": "HR 15:00 — Australia vs. Egipto",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159208.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660657"
  },
  {
    "id": "159140",
    "name": "HR 16:00  Sudáfrica vs Canadá",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159140.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782490518"
  },
  {
    "id": "159204",
    "name": "HR 16:00 — España vs. Austria",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159204.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660336"
  },
  {
    "id": "159201",
    "name": "HR 17:00 — Bélgica vs. Senegal",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159201.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660111"
  },
  {
    "id": "159162",
    "name": "HR 17:30 Alemania vs Paraguay",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159162.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782570794"
  },
  {
    "id": "159166",
    "name": "HR 18:00 Francia vs Suecia",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159166.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782571112"
  },
  {
    "id": "159205",
    "name": "HR 20:00 — Portugal vs. Croacia",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159205.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660385"
  },
  {
    "id": "159202",
    "name": "HR 21:00 — Estados Unidos vs. Bosnia y Herzegovina",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159202.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660157"
  },
  {
    "id": "159167",
    "name": "HR 22:00 México vs Ecuador",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159167.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782571179"
  },
  {
    "id": "159163",
    "name": "HR 22:00 Países Bajos vs Marruecos",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159163.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782570847"
  },
  {
    "id": "159210",
    "name": "HR 22:30 — Colombia vs. Ghana",
    "logo": "https://descargas.podzone.net/logos/FIFA26.png",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159210.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660765"
  },
  {
    "id": "159203",
    "name": "Jueves 2 de Julio",
    "logo": "https://static.gameloop.com/img/1ff627ef8a4f9b8c9e7ea6adaa12fceb.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159203.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660286"
  },
  {
    "id": "11744",
    "name": "Las Pistas de Blue",
    "logo": "https://ih1.redbubble.net/image.1976490102.0457/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11744.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559620198"
  },
  {
    "id": "14783",
    "name": "LIGA DE ESPAÑA",
    "logo": "https://image.winudf.com/v2/image/Y29tLmdlbmVzaXNibHVlMDEudmVyY2hhbXBpb25zZW52aXZvZ3VpZGVfc2NyZWVuXzBfMTUzNzMxNzI2NV8wNzE/screen-0.jpg?fakeurl=1&type=.jpg",
    "category": "EVENTOS DEL DIA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14783.m3u8",
    "type": "live",
    "rating": "",
    "added": "1564257879"
  },
  {
    "id": "14186",
    "name": "LN+",
    "logo": "http://descargas.podzone.net/logos/-LN+.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14186.m3u8",
    "type": "live",
    "rating": "",
    "added": "1562772914"
  },
  {
    "id": "11878",
    "name": "LN+ SD",
    "logo": "http://descargas.podzone.net/logos/-LN+.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11878.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559742477"
  },
  {
    "id": "11758",
    "name": "Lolly kids",
    "logo": "https://www.mundoplus.tv/wiki/lib/exe/fetch.php?w=144&h=108&tok=150b6c&media=https%3A%2F%2Fwww.mundoplus.tv%2Fwiki%2F_media%2Flogos%2Flollykids.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11758.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559622984"
  },
  {
    "id": "159160",
    "name": "Lunes 29 de junio",
    "logo": "https://static.gameloop.com/img/1ff627ef8a4f9b8c9e7ea6adaa12fceb.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159160.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782570672"
  },
  {
    "id": "99502",
    "name": "Maroñas",
    "logo": "https://www.maronas.com.uy/public/web/img/og-logo.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/99502.m3u8",
    "type": "live",
    "rating": "",
    "added": "1712876379"
  },
  {
    "id": "159164",
    "name": "Martes 30 de junio",
    "logo": "https://static.gameloop.com/img/1ff627ef8a4f9b8c9e7ea6adaa12fceb.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159164.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782570998"
  },
  {
    "id": "11884",
    "name": "METRO HD",
    "logo": "https://imagenes.cablevisionfibertel.com.ar:7007/servlet/cv/2263.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11884.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559743601"
  },
  {
    "id": "159199",
    "name": "Miercoles 1 de Julio",
    "logo": "https://static.gameloop.com/img/1ff627ef8a4f9b8c9e7ea6adaa12fceb.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159199.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782659934"
  },
  {
    "id": "11977",
    "name": "MLS 04:",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/969px-MLS_crest_logo_RGB_gradient.svg.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11977.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559789478"
  },
  {
    "id": "14403",
    "name": "MLS 07: Onesoccer",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/969px-MLS_crest_logo_RGB_gradient.svg.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14403.m3u8",
    "type": "live",
    "rating": "",
    "added": "1563591706"
  },
  {
    "id": "16438",
    "name": "Moonbug (Moonbug - Kids)",
    "logo": "https://clarovideocdn8.clarovideo.net/CVPERU/PELICULAS/PLIMPLIM/EXPORTACION_WEB/SS/PLIMPLIM_t-290x163.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16438.m3u8",
    "type": "live",
    "rating": "",
    "added": "1573041837"
  },
  {
    "id": "14787",
    "name": "MOTO GP RACING",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sky_Sport_-_Logo_2020.svg/1280px-Sky_Sport_-_Logo_2020.svg.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14787.m3u8",
    "type": "live",
    "rating": "",
    "added": "1564408562"
  },
  {
    "id": "22752",
    "name": "MULTISHOW ",
    "logo": "https://iili.io/dHVZcts.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/22752.m3u8",
    "type": "live",
    "rating": "",
    "added": "1604686576"
  },
  {
    "id": "41756",
    "name": "NASCAR",
    "logo": "https://pbs.twimg.com/profile_images/1374024780249239556/UieJZSab_400x400.jpg",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/41756.m3u8",
    "type": "live",
    "rating": "",
    "added": "1663094064"
  },
  {
    "id": "11736",
    "name": "NICK JR SD",
    "logo": "http://descargas.podzone.net/logos2/-NICK-JUNIOR.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11736.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559618211"
  },
  {
    "id": "11715",
    "name": "Nick Teen TV",
    "logo": "https://3.bp.blogspot.com/-QGRzMIXRj-c/V26hkzOPhjI/AAAAAAAAAwE/-tcLDf4keys-8XLvSunDIuLzfHqvftq8gCLcB/s1600/boomerang.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11715.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559600022"
  },
  {
    "id": "11755",
    "name": "NICKELODEON",
    "logo": "http://descargas.podzone.net/logos/-nickelodeon.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11755.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559622384"
  },
  {
    "id": "159211",
    "name": "Octavos de final.",
    "logo": "",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159211.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660870"
  },
  {
    "id": "12530",
    "name": "OFF HD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_Canal_OFF.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12530.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560632982"
  },
  {
    "id": "12453",
    "name": "Pluto TV Series",
    "logo": "",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12453.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560558398"
  },
  {
    "id": "12489",
    "name": "PREMIERE 2",
    "logo": "https://logodownload.org/wp-content/uploads/2018/04/premiere-fc-logo-2.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12489.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560573649"
  },
  {
    "id": "12490",
    "name": "PREMIERE 3",
    "logo": "https://logodownload.org/wp-content/uploads/2018/04/premiere-fc-logo-2.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12490.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560573715"
  },
  {
    "id": "12491",
    "name": "PREMIERE 4",
    "logo": "https://logodownload.org/wp-content/uploads/2018/04/premiere-fc-logo-2.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12491.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560573789"
  },
  {
    "id": "12492",
    "name": "PREMIERE 5",
    "logo": "https://logodownload.org/wp-content/uploads/2018/04/premiere-fc-logo-2.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12492.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560573873"
  },
  {
    "id": "14347",
    "name": "PREMIERE 6",
    "logo": "https://logodownload.org/wp-content/uploads/2018/04/premiere-fc-logo.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14347.m3u8",
    "type": "live",
    "rating": "",
    "added": "1563472425"
  },
  {
    "id": "14348",
    "name": "PREMIERE 7",
    "logo": "https://logodownload.org/wp-content/uploads/2018/04/premiere-fc-logo.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14348.m3u8",
    "type": "live",
    "rating": "",
    "added": "1563472501"
  },
  {
    "id": "12494",
    "name": "PREMIERE CLUBES 24 hr",
    "logo": "https://logodownload.org/wp-content/uploads/2018/04/premiere-fc-logo-2.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12494.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560574141"
  },
  {
    "id": "41608",
    "name": "RBTV Canal 38",
    "logo": "http://www.lagomerin.com.uy/images/rbtv-digital.jpg",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/41608.m3u8",
    "type": "live",
    "rating": "",
    "added": "1662248960"
  },
  {
    "id": "12427",
    "name": "RECORD HD RJ",
    "logo": "http://brazil.mom-gmr.org/uploads/tx_lfrogmom/media/7013-1071_import.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12427.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560483760"
  },
  {
    "id": "12432",
    "name": "RECORD HD SP",
    "logo": "http://brazil.mom-gmr.org/uploads/tx_lfrogmom/media/7013-1071_import.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12432.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560519956"
  },
  {
    "id": "41761",
    "name": "RECORD TV RS",
    "logo": "http://brazil.mom-gmr.org/uploads/tx_lfrogmom/media/7013-1071_import.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/41761.m3u8",
    "type": "live",
    "rating": "",
    "added": "1663175875"
  },
  {
    "id": "12435",
    "name": "RECORDS NEWS",
    "logo": "https://vignette.wikia.nocookie.net/logopedia/images/9/99/Record-news.jpg/revision/latest?cb=20120916104700",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12435.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560522021"
  },
  {
    "id": "14841",
    "name": "Red Bull (Red Bull Sports)",
    "logo": "http://149.104.90.177/eventos14/logo.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14841.m3u8",
    "type": "live",
    "rating": "",
    "added": "1564443263"
  },
  {
    "id": "12511",
    "name": "REDETV",
    "logo": "https://img2.freepng.es/20181122/jzv/kisspng-redetv-recife-logo-tv-cultura-5bf69ffacc3170.9778257915428894668364.jpg",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12511.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560628240"
  },
  {
    "id": "159212",
    "name": "Sábado 4 de julio",
    "logo": "https://static.gameloop.com/img/1ff627ef8a4f9b8c9e7ea6adaa12fceb.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159212.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660937"
  },
  {
    "id": "12425",
    "name": "SBT HD",
    "logo": "https://logonoid.com/images/sbt-logo.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12425.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560483348"
  },
  {
    "id": "23240",
    "name": "Sky Bundesliga",
    "logo": "http://149.104.90.177/eventos14/logo.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/23240.m3u8",
    "type": "live",
    "rating": "",
    "added": "1610917592"
  },
  {
    "id": "40365",
    "name": "SKY SPORTS F1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sky_Sport_-_Logo_2020.svg/1280px-Sky_Sport_-_Logo_2020.svg.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/40365.m3u8",
    "type": "live",
    "rating": "",
    "added": "1658018106"
  },
  {
    "id": "88201",
    "name": "SONY HD_BR",
    "logo": "https://assets.stickpng.com/images/5848242ecef1014c0b5e49c8.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88201.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693927815"
  },
  {
    "id": "147499",
    "name": "SPAIN | Formula 1 ",
    "logo": "https://immaa.xyz/FEFFFinsaaat.png",
    "category": "EVENTOS DEL DIA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/147499.m3u8",
    "type": "live",
    "rating": "",
    "added": "1772844689"
  },
  {
    "id": "14182",
    "name": "SPORT TV 3",
    "logo": "http://www.rapifutbol.tv/javax.faces.resource/dynamiccontent.properties.jsf?ln=primefaces&pfdrid=H6AojLbKHXAw5VxJc9SUY69uDesOzTvP&pfdrt=sc&id=1856&pfdrid_c=true",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14182.m3u8",
    "type": "live",
    "rating": "",
    "added": "1562711946"
  },
  {
    "id": "12774",
    "name": "SPORT TV HD",
    "logo": "https://iili.io/JjCvMsR.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12774.m3u8",
    "type": "live",
    "rating": "",
    "added": "1561088146"
  },
  {
    "id": "12434",
    "name": "SPORT TV2",
    "logo": "https://i2.wp.com/s2.glbimg.com/slg_zh7ux4bcKad0jfhoj0Ikn0o=/s3.glbimg.com/v1/AUTH_180b9dd048d9434295d27c4b6dadc248/media_kit/e2/e6/93b93c34bd95b28979fa77a2c983.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12434.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560521494"
  },
  {
    "id": "88195",
    "name": "Star Channel HD_BR",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/65/Star_Channel_2021.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88195.m3u8",
    "type": "live",
    "rating": "",
    "added": "1693924353"
  },
  {
    "id": "12447",
    "name": "Star TVE HD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/08/Star-TVE-logo.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12447.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560550942"
  },
  {
    "id": "11867",
    "name": "TeenNick HD",
    "logo": "https://sc.dish.com/shared/images/station-logos/TNCK.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11867.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559740146"
  },
  {
    "id": "12483",
    "name": "TELECINE ACTION",
    "logo": "https://vignette.wikia.nocookie.net/logopedia/images/f/f3/Logos_telecine_action_2.jpg/revision/latest?cb=20141222204644",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12483.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560572260"
  },
  {
    "id": "12484",
    "name": "TELECINE CULT",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Telecine_Cult.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12484.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560572379"
  },
  {
    "id": "12485",
    "name": "TELECINE FUN",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Telecine_Fun_2.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12485.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560572475"
  },
  {
    "id": "12488",
    "name": "TELECINE PIPOCA",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Telecine_Pipoca.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12488.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560573400"
  },
  {
    "id": "12486",
    "name": "TELECINE PREMIUM",
    "logo": "http://logowiki.net/wp-content/uploads/2018/01/Telecine-Premium-Logo-1-9853.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12486.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560572654"
  },
  {
    "id": "12487",
    "name": "TELECINE TOUCH",
    "logo": "http://www.tvmagazine.com.br/imagens/icones/600/tctouchb.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12487.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560572784"
  },
  {
    "id": "11879",
    "name": "TELEFE HD",
    "logo": "http://descargas.podzone.net/logos/-telefe.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11879.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559742624"
  },
  {
    "id": "16274",
    "name": "TELEFE HD ARG",
    "logo": "http://descargas.podzone.net/logos/-telefe.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16274.m3u8",
    "type": "live",
    "rating": "",
    "added": "1571933247"
  },
  {
    "id": "11858",
    "name": "TELEFE INTERNACIONAL SD",
    "logo": "http://descargas.podzone.net/logos/-telefe.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11858.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559738573"
  },
  {
    "id": "11840",
    "name": "TELEFE SD 1",
    "logo": "http://descargas.podzone.net/logos/-telefe.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11840.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559734399"
  },
  {
    "id": "11845",
    "name": "TENNIS CHANNEL",
    "logo": "http://descargas.podzone.net/logos/-TENNIS-CHANNEL.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11845.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559735700"
  },
  {
    "id": "16537",
    "name": "Tigo Sport HD",
    "logo": "http://descargas.podzone.net/logos/-tigo-sport.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16537.m3u8",
    "type": "live",
    "rating": "",
    "added": "1573766187"
  },
  {
    "id": "11874",
    "name": "TN HD",
    "logo": "http://descargas.podzone.net/logos/-TN-argentina.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11874.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559741769"
  },
  {
    "id": "11839",
    "name": "TN SD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TN_todo_noticias_logo.svg/2560px-TN_todo_noticias_logo.svg.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11839.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559734226"
  },
  {
    "id": "11611",
    "name": "TNT SERIES ARG HD",
    "logo": "https://cdn.mitvstatic.com/channels/cl_tnt-series_m.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11611.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559507072"
  },
  {
    "id": "11612",
    "name": "TNT SERIES ARG SD",
    "logo": "",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11612.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559507174"
  },
  {
    "id": "11613",
    "name": "TNT SERIES FHD",
    "logo": "https://cdn.mitvstatic.com/channels/cl_tnt-series_m.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11613.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559507404"
  },
  {
    "id": "11618",
    "name": "TNT SERIES HD",
    "logo": "data:image/png;base64,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",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11618.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559509438"
  },
  {
    "id": "11619",
    "name": "TNT SERIES SD",
    "logo": "data:image/png;base64,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",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11619.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559509537"
  },
  {
    "id": "12004",
    "name": "TNT SPORTS SD",
    "logo": "http://descargas.podzone.net/logos/-tigo-sport.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12004.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559839965"
  },
  {
    "id": "17783",
    "name": "Tooncast",
    "logo": "http://descargas.podzone.net/logos/-tooncast.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/17783.m3u8",
    "type": "live",
    "rating": "",
    "added": "1582238021"
  },
  {
    "id": "20318",
    "name": "TUDN",
    "logo": "http://descargas.podzone.net/logos/-univision-TUDN.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/20318.m3u8",
    "type": "live",
    "rating": "",
    "added": "1593537140"
  },
  {
    "id": "50497",
    "name": "TUDN HD",
    "logo": "https://www.roc21.com/blog/wp-content/uploads/2019/05/logo-tudn.jpg",
    "category": "DEPORTES MEXICO",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/50497.m3u8",
    "type": "live",
    "rating": "",
    "added": "1678305034"
  },
  {
    "id": "83261",
    "name": "TUDNXTRA 2",
    "logo": "http://descargas.podzone.net/logos/-univision-TUDN.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/83261.m3u8",
    "type": "live",
    "rating": "",
    "added": "1689971312"
  },
  {
    "id": "83262",
    "name": "TUDNXTRA 3",
    "logo": "http://descargas.podzone.net/logos/-univision-TUDN.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/83262.m3u8",
    "type": "live",
    "rating": "",
    "added": "1689971540"
  },
  {
    "id": "92316",
    "name": "TV CIUDAD",
    "logo": "http://descargas.podzone.net/logos/-tv-ciudad.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/92316.m3u8",
    "type": "live",
    "rating": "",
    "added": "1698110841"
  },
  {
    "id": "11752",
    "name": "TV Junior",
    "logo": "http://assets.stickpng.com/thumbs/589a41e25aa6293a4aac48ab.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11752.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559621792"
  },
  {
    "id": "17774",
    "name": "TV KIDS",
    "logo": "https://thumbs.dreamstime.com/b/horas-d%C3%ADas-la-semana-114225716.jpg",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/17774.m3u8",
    "type": "live",
    "rating": "",
    "added": "1582237282"
  },
  {
    "id": "20320",
    "name": "TV Max",
    "logo": "https://w1.pngwing.com/pngs/235/101/png-transparent-green-grass-tvmax-television-logo-television-channel-television-show-tvn-claro-tv-thumbnail.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/20320.m3u8",
    "type": "live",
    "rating": "",
    "added": "1593537298"
  },
  {
    "id": "14415",
    "name": "TV PUBLICA SD",
    "logo": "http://descargas.podzone.net/logos/-tv-publica.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14415.m3u8",
    "type": "live",
    "rating": "",
    "added": "1563741069"
  },
  {
    "id": "16536",
    "name": "Tvcd",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/969px-MLS_crest_logo_RGB_gradient.svg.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16536.m3u8",
    "type": "live",
    "rating": "",
    "added": "1573765733"
  },
  {
    "id": "20322",
    "name": "TYC SPORTS SD",
    "logo": "http://descargas.podzone.net/logos/-TYC-sports.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/20322.m3u8",
    "type": "live",
    "rating": "",
    "added": "1593537710"
  },
  {
    "id": "12003",
    "name": "Ufc (Ufc Fight Pass)",
    "logo": "http://descargas.podzone.net/logos/-UFC-FIGHT-PASS.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12003.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559839631"
  },
  {
    "id": "45143",
    "name": "UFC FIGHT PASS HD",
    "logo": "https://iili.io/JGsJ2Nn.png",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/45143.m3u8",
    "type": "live",
    "rating": "",
    "added": "1676140258"
  },
  {
    "id": "88439",
    "name": "Ultra Kidz",
    "logo": "https://assets.cdn.olympusat.com/wp-content/uploads/UltraKidz_NLogo.png",
    "category": "INFANTILES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/88439.m3u8",
    "type": "live",
    "rating": "",
    "added": "1694032023"
  },
  {
    "id": "19121",
    "name": "UNIVERSAL CHANNEL HD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Universal_Channel_Logo_2013.svg/1200px-Universal_Channel_Logo_2013.svg.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/19121.m3u8",
    "type": "live",
    "rating": "",
    "added": "1588987842"
  },
  {
    "id": "13467",
    "name": "UNIVERSAL CHANNEL HD ARG",
    "logo": "https://logostvargentina.files.wordpress.com/2008/09/d7741-universal-hd.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/13467.m3u8",
    "type": "live",
    "rating": "",
    "added": "1561917629"
  },
  {
    "id": "13463",
    "name": "UNIVERSAL CHANNEL SD",
    "logo": "data:image/jpeg;base64,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",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/13463.m3u8",
    "type": "live",
    "rating": "",
    "added": "1561915157"
  },
  {
    "id": "12449",
    "name": "Universal Premiere FHD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Universal_Premiere_2021.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12449.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560554715"
  },
  {
    "id": "16289",
    "name": "Universal Premiere SD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Universal_Premiere_2021.png",
    "category": "CANALES DE SERIE",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/16289.m3u8",
    "type": "live",
    "rating": "",
    "added": "1572234818"
  },
  {
    "id": "159207",
    "name": "Viernes 3 de Julio",
    "logo": "https://static.gameloop.com/img/1ff627ef8a4f9b8c9e7ea6adaa12fceb.png?imageMogr2/thumbnail/172.8x172.8/format/webp",
    "category": "COPA DEL MUNDO 2026",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/159207.m3u8",
    "type": "live",
    "rating": "",
    "added": "1782660570"
  },
  {
    "id": "17721",
    "name": "VIVA HD",
    "logo": "https://imagem.natelinha.uol.com.br/grande/canalviva2_59de2e17c2cd9a1f7a709d0fdafeea4b2eddb7e1.jpeg",
    "category": "BRASIL",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/17721.m3u8",
    "type": "live",
    "rating": "",
    "added": "1580996360"
  },
  {
    "id": "132850",
    "name": "VIX Premium La Liga",
    "logo": "https://cdn2.mediotiempo.com/uploads/media/2022/07/16/vix-juegos-exclusivos-futbol-mexicano-1.jpg",
    "category": "DEPORTES MEXICO",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/132850.m3u8",
    "type": "live",
    "rating": "",
    "added": "1745437883"
  },
  {
    "id": "11868",
    "name": "VOLVER",
    "logo": "http://descargas.podzone.net/logos/-volver.png",
    "category": "ARGENTINA",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/11868.m3u8",
    "type": "live",
    "rating": "",
    "added": "1559740457"
  },
  {
    "id": "19218",
    "name": "VTV FUTBOL",
    "logo": "http://descargas.podzone.net/logos/-VTV-plus.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/19218.m3u8",
    "type": "live",
    "rating": "",
    "added": "1589592436"
  },
  {
    "id": "14260",
    "name": "VTV HD",
    "logo": "http://descargas.podzone.net/logos/-VTV.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/14260.m3u8",
    "type": "live",
    "rating": "",
    "added": "1562958610"
  },
  {
    "id": "13461",
    "name": "VTV PLUS HD",
    "logo": "http://descargas.podzone.net/logos/-VTV-plus.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/13461.m3u8",
    "type": "live",
    "rating": "",
    "added": "1561914718"
  },
  {
    "id": "17808",
    "name": "VTV PLUS SD",
    "logo": "http://descargas.podzone.net/logos/-VTV-plus.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/17808.m3u8",
    "type": "live",
    "rating": "",
    "added": "1583343070"
  },
  {
    "id": "12748",
    "name": "VTV SD",
    "logo": "http://descargas.podzone.net/logos/-VTV.png",
    "category": "URUGUAY",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12748.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560881437"
  },
  {
    "id": "12445",
    "name": "WIN SPORT HD_",
    "logo": "http://descargas.podzone.net/logos/-win-sports.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/12445.m3u8",
    "type": "live",
    "rating": "",
    "added": "1560544587"
  },
  {
    "id": "38587",
    "name": "Win Sports Plus HD",
    "logo": "http://descargas.podzone.net/logos/-win-sports.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/38587.m3u8",
    "type": "live",
    "rating": "",
    "added": "1650836721"
  },
  {
    "id": "38586",
    "name": "Win Sports Plus SD",
    "logo": "http://descargas.podzone.net/logos/-win-sports.png",
    "category": "DEPORTES",
    "url": "http://kazan-tv.com:8091/live/Noah5/Noah508561/38586.m3u8",
    "type": "live",
    "rating": "",
    "added": "1650836648"
  }
];
