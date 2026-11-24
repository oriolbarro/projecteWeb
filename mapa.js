const vallcarca = [41.4114, 2.1447];
const elisava = [41.3787, 2.1761];
const routes = [
  {id:'elisava',title:'Vallcarca → Elisava',mode:'metro',badge:'METRO · CADA DIA',meta:'L3 directa fins a Drassanes · després, un passeig curt fins a La Rambla.',line:'L3',color:'#2E7D5B',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699],[41.3801,2.1738],[41.3768,2.1774],elisava]},
  {id:'joventut-metro',title:'Vallcarca → Joventut',mode:'metro',badge:'METRO',meta:'L3 fins a Passeig de Gràcia · transbord a L2 fins a Gorg.',line:'L3 + L2',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3952,2.1702],[41.4037,2.1744],[41.4065,2.1818],[41.4117,2.1877],[41.4165,2.1943],[41.4214,2.2017],[41.4241,2.2104],[41.4284,2.2191],[41.4331,2.2271],[41.4345,2.2394],[41.4424,2.2321]]},
  {id:'joventut-car',title:'Vallcarca → Joventut',mode:'car',badge:'COTXE · PUNTUAL',meta:'Accés per la Ronda de Dalt (B-20) i sortida cap a l’Olímpic.',line:'Ronda de Dalt · B-20',color:'#C27A4A',via:[[41.421,2.145],[41.426,2.159],[41.432,2.178],[41.438,2.198],[41.442,2.216]],points:[vallcarca,[41.421,2.145],[41.426,2.159],[41.432,2.178],[41.438,2.198],[41.442,2.216],[41.4424,2.2321]]},
  {id:'airport-car',title:'Vallcarca → Aeroport del Prat · T1',mode:'car',badge:'COTXE',meta:'Ruta viària fins a la Terminal 1, recalculada amb alternatives.',line:'Rondes · C-31',color:'#C27A4A',points:[vallcarca,[41.2974,2.0833]]},
  {id:'sitges-car',title:'Vallcarca → Sitges',mode:'car',badge:'COTXE · COSTA',meta:'Per la C-31 i les Costes del Garraf, amb vistes al mar.',line:'C-31 · Costes del Garraf',color:'#C27A4A',via:[[41.265,1.947],[41.252,1.91]],points:[vallcarca,[41.265,1.947],[41.252,1.91],[41.237,1.811]]},
  {id:'vallvidrera-car',title:'Vallcarca → Vallvidrera',mode:'car',badge:'COTXE · DIVENDRES',meta:'Pujada cap a Vallvidrera pels carrers del vessant de Collserola.',line:'Cotxe',color:'#C27A4A',points:[vallcarca,[41.407,2.137],[41.402,2.126],[41.3985,2.1256],[41.404,2.118],[41.4092,2.1112],[41.4141,2.1058],[41.416,2.097]]},
  {id:'parc-guell',title:'Vallcarca → Parc Güell',mode:'walk',badge:'A PEU',meta:'Un passeig de barri fins a l’entrada del parc.',line:'A peu',color:'#80A86F',points:[vallcarca,[41.411,2.149],[41.4118,2.154],[41.4132,2.159],[41.4145,2.152]]},
  {id:'casa-vicens',title:'Vallcarca → Casa Vicens',mode:'walk',badge:'A PEU',meta:'Baixant pels carrers de Gràcia fins a la primera casa de Gaudí.',line:'A peu',color:'#80A86F',points:[vallcarca,[41.4099,2.148],[41.4077,2.151],[41.405,2.153],[41.402,2.151],[41.4031,2.1512]]},
  {id:'elisava-barceloneta',title:'Elisava → Barceloneta',mode:'walk',badge:'A PEU',meta:'Des de La Rambla, travessant el Gòtic fins a la platja.',line:'A peu',color:'#80A86F',points:[elisava,[41.3772,2.176],[41.3756,2.1778],[41.377,2.181],[41.379,2.184],[41.3809,2.1886],[41.379,2.1925]]},
  {id:'vallcarca-camp-nou',title:'Vallcarca → Spotify Camp Nou',mode:'metro',badge:'TRANSPORT PÚBLIC',meta:'L3 fins a Les Corts i tram final a peu.',line:'L3 + a peu',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699],[41.3822,2.1735],[41.3768,2.1774],[41.3755,2.1667],[41.3756,2.1618],[41.3755,2.1495],[41.3794,2.14],[41.382,2.133],[41.385,2.128],[41.3808,2.1225]]},
  {id:'sagrada-familia-metro',title:'Vallcarca → Sagrada Família',mode:'metro',badge:'METRO',meta:'L3 fins a Diagonal i transbord a L5.',line:'L3 + L5',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.403,2.171],[41.4037,2.1744]]},
  {id:'passeig-gracia-metro',title:'Vallcarca → Passeig de Gràcia',mode:'metro',badge:'METRO',meta:'Un trajecte directe per la L3.',line:'L3',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649]]},
  {id:'pl-catalunya-metro',title:'Vallcarca → Plaça Catalunya',mode:'metro',badge:'METRO',meta:'La L3 connecta el barri amb el centre.',line:'L3',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699]]},
  {id:'sants-metro',title:'Vallcarca → Sants Estació',mode:'metro',badge:'METRO',meta:'L3 directa fins a l’estació de Sants.',line:'L3',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699],[41.3822,2.1735],[41.3768,2.1774],[41.3755,2.1667],[41.3756,2.1618],[41.3755,2.1495],[41.3794,2.14]]},
  {id:'pl-espanya-metro',title:'Vallcarca → Plaça Espanya',mode:'metro',badge:'METRO',meta:'L3 directa fins a Plaça Espanya.',line:'L3',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699],[41.3822,2.1735],[41.3768,2.1774],[41.3755,2.1667],[41.3756,2.1618],[41.3755,2.1495]]},
  {id:'poble-sec-metro',title:'Vallcarca → Poble-sec',mode:'metro',badge:'METRO',meta:'L3 directa fins a l’estació de Poble-sec.',line:'L3',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699],[41.3822,2.1735],[41.3768,2.1774],[41.3755,2.1667],[41.3756,2.1618]]},
  {id:'sarria-transit',title:'Vallcarca → Sarrià',mode:'metro',badge:'TRANSPORT PÚBLIC',meta:'L3 fins a Catalunya i transbord a FGC fins a Sarrià.',line:'L3 + FGC',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3856,2.1687],[41.3928,2.158],[41.402,2.152],[41.4011,2.1471],[41.3985,2.1423],[41.3978,2.1364],[41.3978,2.1308],[41.3985,2.1256]]},
  {id:'sarria-bus',title:'Vallcarca → Sarrià',mode:'bus',badge:'BUS · DIRECTE',meta:'H4 des de Pg Vall d’Hebron–Av. Vallcarca fins a la plaça de Sarrià.',line:'Bus H4',color:'#8865A6',points:[vallcarca,[41.420,2.151],[41.415,2.134],[41.4015,2.136],[41.399,2.127],[41.397,2.123]]},
  {id:'campana-transit',title:'Vallcarca → Magòria-La Campana',mode:'metro',badge:'TRANSPORT PÚBLIC',meta:'L3 fins a Espanya i FGC L8 fins a Magòria-La Campana.',line:'L3 + FGC L8',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699],[41.3822,2.1735],[41.3768,2.1774],[41.3755,2.1667],[41.3755,2.1495],[41.370,2.145],[41.36749,2.13888]]},
  {id:'ciutadella-metro',title:'Vallcarca → Parc de la Ciutadella',mode:'metro',badge:'TRANSPORT PÚBLIC',meta:'L3 fins a Catalunya, L1 fins a Arc de Triomf i passeig.',line:'L3 + L1 + a peu',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699],[41.389,2.174],[41.3938,2.181],[41.3882,2.187]]},
  {id:'barceloneta-metro',title:'Vallcarca → Barceloneta',mode:'metro',badge:'TRANSPORT PÚBLIC',meta:'L3 fins a Catalunya, L4 fins a Barceloneta i passeig curt.',line:'L3 + L4 + a peu',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699],[41.3915,2.175],[41.3838,2.1802],[41.3809,2.1886],[41.379,2.1925]]},
  {id:'badalona-beach-metro',title:'Vallcarca → Platja de Badalona',mode:'metro',badge:'TRANSPORT PÚBLIC',meta:'L3 fins a Passeig de Gràcia, L2 fins a Badalona Pompeu Fabra i passeig fins a la platja.',line:'L3 + L2 + a peu',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.394,2.1757],[41.4,2.18],[41.4037,2.1744],[41.405,2.185],[41.410,2.1877],[41.414,2.194],[41.418,2.2],[41.422,2.21],[41.425,2.218],[41.429,2.225],[41.4345,2.2394],[41.438,2.236],[41.4491,2.2442],[41.448,2.25]]},
  {id:'forum-metro',title:'Vallcarca → Parc del Fòrum',mode:'metro',badge:'TRANSPORT PÚBLIC',meta:'L3 fins a Catalunya, L1 fins a Glòries i tramvia fins al Fòrum.',line:'L3 + L1 + tram',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699],[41.3915,2.175],[41.3856,2.1808],[41.400,2.187],[41.4037,2.19],[41.407,2.208],[41.411,2.222]]},
  {id:'gracia-walk',title:'Vallcarca → Vila de Gràcia',mode:'walk',badge:'A PEU',meta:'Carrers de barri fins a les places de Gràcia.',line:'A peu',color:'#80A86F',points:[vallcarca,[41.4099,2.148],[41.4077,2.151],[41.405,2.153],[41.402,2.155],[41.401,2.158]]},
  {id:'lesseps-walk',title:'Vallcarca → Plaça Lesseps',mode:'walk',badge:'A PEU',meta:'Un trajecte curt pel barri fins a Lesseps.',line:'A peu',color:'#80A86F',points:[vallcarca,[41.4108,2.146],[41.4097,2.1497]]},
  {id:'putxet-walk',title:'Vallcarca → Turó del Putxet',mode:'walk',badge:'A PEU',meta:'Passeig verd per un dels turons de Barcelona.',line:'A peu',color:'#80A86F',points:[vallcarca,[41.4122,2.14],[41.408,2.135],[41.405,2.137],[41.403,2.14]]},
  {id:'carmel-walk',title:'Vallcarca → El Carmel',mode:'walk',badge:'A PEU',meta:'Ruta de pujada pels carrers del nord de Gràcia.',line:'A peu',color:'#80A86F',points:[vallcarca,[41.414,2.15],[41.416,2.158],[41.418,2.16],[41.418,2.165]]},
  {id:'elisava-born-walk',title:'Elisava → El Born',mode:'walk',badge:'A PEU',meta:'Travessa el centre històric fins al Born.',line:'A peu',color:'#80A86F',points:[elisava,[41.379,2.178],[41.381,2.181],[41.383,2.184],[41.385,2.187]]},
  {id:'horta-car',title:'Vallcarca → Horta',mode:'car',badge:'COTXE',meta:'Trajecte pels carrers fins a Horta, calculat sobre la xarxa viària.',line:'Carrers urbans',color:'#C27A4A',points:[vallcarca,[41.428,2.159]]},
  {id:'sant-andreu-metro',title:'Vallcarca → Sant Andreu',mode:'metro',badge:'TRANSPORT PÚBLIC',meta:'L3 fins a Catalunya i connexió amb L1 fins a Sant Andreu.',line:'L3 + L1',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699],[41.3915,2.175],[41.393,2.181],[41.401,2.187],[41.41,2.187],[41.414,2.186],[41.419,2.186],[41.422,2.186],[41.43,2.19],[41.436,2.19]]},
  {id:'sants-car',title:'Vallcarca → Sants',mode:'car',badge:'COTXE',meta:'Travessa la ciutat cap a l’estació de Sants.',line:'Carrers urbans',color:'#C27A4A',points:[vallcarca,[41.4075,2.1532],[41.401,2.16],[41.395,2.165],[41.39,2.16],[41.385,2.15],[41.3792,2.1403]]},
  {id:'montjuic-car',title:'Vallcarca → Montjuïc',mode:'car',badge:'COTXE',meta:'Cap a la muntanya i els equipaments de Montjuïc.',line:'Ronda de Dalt + ciutat',color:'#C27A4A',points:[vallcarca,[41.4075,2.1532],[41.4,2.16],[41.39,2.17],[41.38,2.17],[41.37,2.16],[41.365,2.15]]},
  {id:'tibidabo-car',title:'Vallcarca → Tibidabo',mode:'car',badge:'COTXE',meta:'Pujada per la carretera de l’Arrabassada.',line:'Carretera de l’Arrabassada',color:'#C27A4A',points:[vallcarca,[41.414,2.137],[41.417,2.128],[41.42,2.12],[41.421,2.12]]},
  {id:'poblenou-car',title:'Vallcarca → Poblenou',mode:'car',badge:'COTXE',meta:'Travessa cap al litoral i el districte tecnològic.',line:'Rondes urbanes',color:'#C27A4A',points:[vallcarca,[41.4075,2.1532],[41.4,2.165],[41.395,2.18],[41.4,2.195],[41.405,2.205]]}
];

const routeList = document.querySelector('#route-list');
const caption = document.querySelector('#map-caption-text');
const openMap = document.querySelector('#open-osm');
const mapElement = document.querySelector('#route-map');
const mapLibreAvailable = typeof window.maplibregl !== 'undefined';
let map = null;
let activeLayer = null;
let fallbackSvg = null;
let fallbackRoute = null;
let routeOverlay = null;
let activeGeometry = null;
let routeLookupTimer = null;
let routeLookupSequence = 0;
let lastRoutingRequestAt = 0;
const routeGeometryCache = new Map();
let fallbackView = {x:0,y:0,w:900,h:700};
if (mapLibreAvailable) {
  map = new maplibregl.Map({container:mapElement,style:'https://tiles.openfreemap.org/styles/positron',center:[2.17,41.398],zoom:11,attributionControl:true});
  map.addControl(new maplibregl.NavigationControl({showCompass:false}),'top-right');
  map.on('load', () => {
    createRouteOverlay();
    showRoute(activeRoute);
  });
} else {
  mapElement.innerHTML = `<svg class="fallback-map" viewBox="0 0 900 700" role="img" aria-label="Mapa esquemàtic de Barcelona amb carrers i rutes"><rect width="900" height="700" fill="#f3f3eb"/><path d="M570 700H900V418L832 431 782 455 730 476 683 500 650 540Z" fill="#dcebe8"/><path d="M0 0H900V180L790 190 700 180 610 198 500 170 390 188 280 160 170 175 0 145Z" fill="#e1eadc"/><path d="M45 110C180 164 220 228 325 270S520 347 660 402 812 451 900 462M0 250C125 246 210 294 340 333S580 400 705 445 830 520 900 536M0 435C135 410 235 438 367 478S600 546 720 570 820 628 900 652M105 0C126 100 158 220 183 330S227 540 254 700M300 0C312 116 335 208 366 312S420 530 448 700M500 0C488 126 502 228 537 342S601 558 633 700M705 0C666 111 666 237 698 344S774 556 808 700" fill="none" stroke="#fffefa" stroke-width="14"/><path d="M45 110C180 164 220 228 325 270S520 347 660 402 812 451 900 462M0 250C125 246 210 294 340 333S580 400 705 445 830 520 900 536M0 435C135 410 235 438 367 478S600 546 720 570 820 628 900 652M105 0C126 100 158 220 183 330S227 540 254 700M300 0C312 116 335 208 366 312S420 530 448 700M500 0C488 126 502 228 537 342S601 558 633 700M705 0C666 111 666 237 698 344S774 556 808 700" fill="none" stroke="#e4dfd3" stroke-width="1.5"/><g fill="#829087" font-family="Arial,sans-serif" font-size="13" letter-spacing="2"><text x="250" y="78">COLLSEROLA</text><text x="140" y="285">VALLCARCA</text><text x="350" y="385">GRÀCIA</text><text x="520" y="500">CIUTAT VELLA</text><text x="755" y="493">BADALONA</text><text x="400" y="665" fill="#71958c">MEDITERRÀNIA</text></g><g id="fallback-route"></g></svg><div class="fallback-controls"><button type="button" data-zoom="in" aria-label="Apropar">+</button><button type="button" data-zoom="out" aria-label="Allunyar">−</button></div>`;
  fallbackSvg = mapElement.querySelector('svg');
  fallbackRoute = mapElement.querySelector('#fallback-route');
}
let activeRoute = routes[0];

function createRouteOverlay() {
  const ns = 'http://www.w3.org/2000/svg';
  routeOverlay = document.createElementNS(ns,'svg');
  routeOverlay.classList.add('route-overlay');
  routeOverlay.setAttribute('aria-hidden','true');
  routeOverlay.innerHTML = '<path class="route-overlay-halo"/><path class="route-overlay-line"/><circle class="route-overlay-start" r="9"/><circle class="route-overlay-end" r="9"/>';
  mapElement.append(routeOverlay);
  map.on('move',drawRouteOverlay);
  map.on('resize',drawRouteOverlay);
}

function drawRouteOverlay() {
  if (!map || !routeOverlay || !activeRoute) return;
  const width = mapElement.clientWidth;
  const height = mapElement.clientHeight;
  routeOverlay.setAttribute('viewBox',`0 0 ${width} ${height}`);
  const points = (activeGeometry || activeRoute.points).map(([lat,lon])=>map.project([lon,lat]));
  const path = points.map((point,index)=>`${index?'L':'M'}${point.x} ${point.y}`).join(' ');
  const halo = routeOverlay.querySelector('.route-overlay-halo');
  const line = routeOverlay.querySelector('.route-overlay-line');
  halo.setAttribute('d',path);
  line.setAttribute('d',path);
  line.style.stroke = activeRoute.color;
  const [start,end] = [points[0],points.at(-1)];
  routeOverlay.querySelector('.route-overlay-start').setAttribute('cx',start.x);
  routeOverlay.querySelector('.route-overlay-start').setAttribute('cy',start.y);
  routeOverlay.querySelector('.route-overlay-end').setAttribute('cx',end.x);
  routeOverlay.querySelector('.route-overlay-end').setAttribute('cy',end.y);
}

function projectPoint([lat, lon]) {
  return [(lon - 2.08) * 5000, (41.46 - lat) * 6000];
}

function showFallbackRoute(route) {
  const points = route.points.map(projectPoint);
  const minX = Math.min(...points.map((point) => point[0]));
  const maxX = Math.max(...points.map((point) => point[0]));
  const minY = Math.min(...points.map((point) => point[1]));
  const maxY = Math.max(...points.map((point) => point[1]));
  const padding = 120;
  fallbackView = {x:Math.max(0,minX-padding),y:Math.max(0,minY-padding),w:Math.min(900,Math.max(300,maxX-minX+padding*2)),h:Math.min(700,Math.max(260,maxY-minY+padding*2))};
  fallbackSvg.setAttribute('viewBox',`${fallbackView.x} ${fallbackView.y} ${fallbackView.w} ${fallbackView.h}`);
  const line = points.map((point,index) => `${index?'L':'M'}${point[0]} ${point[1]}`).join(' ');
  const start = points[0], end = points.at(-1);
  fallbackRoute.innerHTML = `<path d="${line}" fill="none" stroke="#fffdf8" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/><path d="${line}" fill="none" stroke="${route.color}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${start[0]}" cy="${start[1]}" r="13" fill="#2E7D5B" stroke="#fffdf8" stroke-width="3"/><circle cx="${start[0]}" cy="${start[1]}" r="4" fill="#fffdf8"/><circle cx="${end[0]}" cy="${end[1]}" r="13" fill="#C27A4A" stroke="#fffdf8" stroke-width="3"/><circle cx="${end[0]}" cy="${end[1]}" r="4" fill="#fffdf8"/>`;
}

function routeDistanceKm(route) {
  const points=route.mode==='car'&&route.via?.length?[route.points[0],...route.via,route.points.at(-1)]:route.points;
  let distance=0;
  for(let i=1;i<points.length;i++){
    const [[lat1,lon1],[lat2,lon2]]=[points[i-1],points[i]];
    const radians=value=>value*Math.PI/180;
    const dLat=radians(lat2-lat1),dLon=radians(lon2-lon1);
    const a=Math.sin(dLat/2)**2+Math.cos(radians(lat1))*Math.cos(radians(lat2))*Math.sin(dLon/2)**2;
    distance+=6371*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
  }
  return distance;
}

function estimateRouteMinutes(route) {
  const distance=routeDistanceKm(route);
  if(route.mode==='walk') return Math.max(2,Math.ceil(distance/4.5*60));
  if(route.mode==='car') return Math.max(4,Math.ceil(distance/(distance>15?42:27)*60)+3);
  if(route.mode==='bus') return Math.max(5,Math.ceil(distance/13*60)+(route.points.length-1));
  const transfers=(route.line.match(/\+/g)||[]).length;
  return Math.max(4,Math.ceil(distance/24*60)+(route.points.length-2)+transfers*5+4);
}

function formatRouteTime(minutes) {
  const total=Math.max(1,Math.round(minutes));
  return total>=60?`${Math.floor(total/60)} h ${total%60} min`:`${total} min`;
}

function updateRouteTime(route,minutes,actual=false) {
  route.durationMinutes=Math.round(minutes);
  route.durationActual=actual;
  const time=routeList.querySelector(`[data-id="${route.id}"] .route-time`);
  if(time){
    time.textContent=`${actual?'':'≈ '}${formatRouteTime(route.durationMinutes)}`;
    time.classList.toggle('is-live',actual);
    time.title=actual?'Temps calculat segons la ruta dels carrers':'Estimació orientativa';
  }
}

if (!mapLibreAvailable) {
  mapElement.classList.add('fallback-map-active');
  mapElement.querySelectorAll('[data-zoom]').forEach((button) => button.addEventListener('click', () => {
    const scale = button.dataset.zoom === 'in' ? .8 : 1.25;
    fallbackView.w = Math.min(900,fallbackView.w*scale); fallbackView.h = Math.min(700,fallbackView.h*scale);
    fallbackSvg.setAttribute('viewBox',`${fallbackView.x} ${fallbackView.y} ${fallbackView.w} ${fallbackView.h}`);
  }));
}

function buildCard(route) {
  const score = ({walk:5,metro:4,bus:3,car:1})[route.mode] ?? 1;
  const scoreLabel = ({5:'Molt alta',4:'Alta',3:'Mitjana',2:'Baixa',1:'Baixa'})[score];
  const card = document.createElement('button');
  card.type = 'button'; card.className = 'route-card'; card.dataset.id = route.id;
  const minutes=route.durationMinutes??estimateRouteMinutes(route);
  const timeLabel=`${route.durationActual?'':'≈ '}${formatRouteTime(minutes)}`;
  card.innerHTML = `<span class="route-card-top"><span class="route-title">${route.title}</span><span class="route-mode">${route.badge}</span></span><span class="route-card-meta">${route.meta}</span><span class="route-line" style="--route-color:${route.color}"><i></i><strong>${route.line}</strong><span class="route-time${route.durationActual?' is-live':''}" title="${route.durationActual?'Temps calculat segons la ruta dels carrers':'Estimació orientativa'}">${timeLabel}</span></span><span class="route-sustainability"><span class="sustainability-score score-${score}">${score}/5</span><span><strong>Sostenibilitat ${scoreLabel.toLowerCase()}</strong><span class="sustainability-meter" aria-label="${score} de 5"><i class="filled"></i><i class="filled"></i><i class="filled"></i><i class="filled"></i><i class="filled"></i></span></span></span>`;
  card.querySelectorAll('.sustainability-meter i').forEach((dot,index)=>dot.classList.toggle('filled',index<score));
  card.addEventListener('click', () => showRoute(route));
  return card;
}

function renderCards(filter='all') {
  routeList.replaceChildren(...routes.filter((route) => {
    const score = ({walk:5,metro:4,bus:3,car:1})[route.mode] ?? 1;
    return filter === 'all' || (filter === 'eco' ? score >= 4 : route.mode === filter);
  }).map(buildCard));
  const selected = routeList.querySelector(`[data-id="${activeRoute.id}"]`);
  if (selected) selected.classList.add('selected');
}

function showRoute(route) {
  activeRoute = route;
  activeGeometry = route.points;
  const requestSequence = ++routeLookupSequence;
  if (routeLookupTimer) clearTimeout(routeLookupTimer);
  if (mapLibreAvailable) {
    if (map && map.isStyleLoaded()) {
      const bounds = new maplibregl.LngLatBounds();
      const fitPoints = route.mode === 'car' || route.mode === 'walk' ? [route.points[0],...(route.via || []),route.points.at(-1)] : route.points;
      fitPoints.forEach(([lat,lon])=>bounds.extend([lon,lat]));
      map.fitBounds(bounds,{padding:{top:90,bottom:100,left:80,right:80},maxZoom:14,duration:500});
      drawRouteOverlay();
      map.once('moveend',drawRouteOverlay);
      if (route.mode === 'car' || route.mode === 'walk') calculateStreetRoute(route,requestSequence);
    }
  } else showFallbackRoute(route);
  const cachedGeometry=routeGeometryCache.get(route.id);
  const routeMinutes=cachedGeometry?.durationMinutes??route.durationMinutes??estimateRouteMinutes(route);
  const exactTime=Boolean(cachedGeometry||route.durationActual);
  caption.textContent = `${route.title} · ${exactTime?'':'≈ '}${formatRouteTime(routeMinutes)} · ${route.badge.toLowerCase()} · ${route.line}`;
  const planner = document.querySelector('#transit-planner');
  const isTransit = route.mode === 'metro' || route.mode === 'bus';
  planner.hidden = !isTransit;
  if (isTransit) {
    const [startLat,startLon]=route.points[0], [endLat,endLon]=route.points.at(-1);
    const params=new URLSearchParams({coords__ori:`${startLon},${startLat}`,name__ori:route.title.split(' → ')[0],coords__dest:`${endLon},${endLat}`,name__dest:route.title.split(' → ')[1],near:'true'});
    planner.href=`https://www.tmb.cat/en/barcelona/journey-planner?${params}`;
  }
  openMap.href = `https://www.openstreetmap.org/?mlat=${route.points[0][0]}&mlon=${route.points[0][1]}#map=13/${route.points[0][0]}/${route.points[0][1]}`;
  routeList.querySelectorAll('.route-card').forEach((card) => card.classList.toggle('selected',card.dataset.id===route.id));
}

function calculateStreetRoute(route,sequence) {
  const cached=routeGeometryCache.get(route.id);
  if (cached) {
    activeGeometry=cached.coordinates;
    updateRouteTime(route,cached.durationMinutes,true);
    caption.textContent=`${route.title} · ${cached.distance} km · ${formatRouteTime(cached.durationMinutes)} · ${route.mode==='walk'?'a peu':'cotxe'}`;
    drawRouteOverlay();
    return;
  }
  caption.textContent=`${route.title} · cercant un itinerari de carrer…`;
  routeLookupTimer=setTimeout(async()=>{
    const wait=Math.max(0,1050-(Date.now()-lastRoutingRequestAt));
    if (wait) await new Promise(resolve=>setTimeout(resolve,wait));
    if (sequence!==routeLookupSequence) return;
    const stops=[route.points[0],...(route.via || []),route.points.at(-1)];
    const coordinates=stops.map(([lat,lon])=>`${lon},${lat}`).join(';');
    const profile=route.mode==='walk'?'foot':'car';
    const url=`https://routing.openstreetmap.de/routed-${profile}/route/v1/driving/${coordinates}?overview=full&geometries=geojson&alternatives=3`;
    try {
      lastRoutingRequestAt=Date.now();
      const response=await fetch(url,{signal:AbortSignal.timeout(12000)});
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result=await response.json();
      if (result.code!=='Ok' || !result.routes?.length) throw new Error('No route found');
      const shortest=[...result.routes].sort((a,b)=>a.distance-b.distance)[0];
      const coordinates=shortest.geometry.coordinates.map(([lon,lat])=>[lat,lon]);
      const distance=(shortest.distance/1000).toFixed(1);
      const durationMinutes=Math.round(shortest.duration/60);
      routeGeometryCache.set(route.id,{coordinates,distance,durationMinutes});
      if (sequence!==routeLookupSequence) return;
      activeGeometry=coordinates;
      updateRouteTime(route,durationMinutes,true);
      drawRouteOverlay();
      const bounds=new maplibregl.LngLatBounds();
      coordinates.forEach(([lat,lon])=>bounds.extend([lon,lat]));
      map.fitBounds(bounds,{padding:{top:90,bottom:100,left:80,right:80},maxZoom:15,duration:450});
      caption.textContent=`${route.title} · ${distance} km · ${formatRouteTime(durationMinutes)} · ${route.mode==='walk'?'a peu':'cotxe'} · camí més curt trobat`;
    } catch (error) {
      if (sequence!==routeLookupSequence) return;
      caption.textContent=`${route.title} · camí orientatiu; no s’ha pogut verificar ara`;
      activeGeometry=route.points;
      drawRouteOverlay();
    }
  },350);
}

document.querySelectorAll('.filter-chip').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.filter-chip').forEach((chip) => chip.classList.toggle('active',chip===button));
  renderCards(button.dataset.filter);
}));

renderCards();
if (!mapLibreAvailable) showRoute(activeRoute);
