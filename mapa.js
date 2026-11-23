const vallcarca = [41.4114, 2.1447];
const elisava = [41.3787, 2.1761];
const routes = [
  {id:'elisava',title:'Vallcarca → Elisava',mode:'metro',badge:'METRO · CADA DIA',meta:'L3 directa fins a Drassanes · després, un passeig curt fins a La Rambla.',line:'L3',color:'#2E7D5B',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3857,2.1699],[41.3801,2.1738],[41.3768,2.1774],elisava]},
  {id:'joventut-metro',title:'Vallcarca → Joventut',mode:'metro',badge:'METRO',meta:'L3 fins a Passeig de Gràcia · transbord a L2 fins a Gorg.',line:'L3 + L2',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3952,2.1702],[41.4037,2.1744],[41.4065,2.1818],[41.4117,2.1877],[41.4165,2.1943],[41.4214,2.2017],[41.4241,2.2104],[41.4284,2.2191],[41.4331,2.2271],[41.4345,2.2394],[41.4424,2.2321]]},
  {id:'joventut-car',title:'Vallcarca → Joventut',mode:'car',badge:'COTXE · PUNTUAL',meta:'Travessa la ciutat cap a Badalona i l’Olímpic.',line:'C-31',color:'#C27A4A',points:[vallcarca,[41.4075,2.1532],[41.4034,2.1612],[41.4007,2.1708],[41.3995,2.1848],[41.402,2.199],[41.4105,2.211],[41.4193,2.22],[41.4284,2.229],[41.4355,2.235],[41.4424,2.2321]]},
  {id:'vallvidrera-car',title:'Vallcarca → Vallvidrera',mode:'car',badge:'COTXE · DIVENDRES',meta:'Pujada cap a la muntanya per la carretera de Vallvidrera.',line:'Ronda de Dalt',color:'#C27A4A',points:[vallcarca,[41.414,2.137],[41.411,2.125],[41.407,2.112],[41.405,2.1],[41.402,2.092],[41.399,2.097],[41.396,2.103],[41.394,2.108]]},
  {id:'parc-guell',title:'Vallcarca → Parc Güell',mode:'walk',badge:'A PEU',meta:'Un passeig de barri fins a una de les grans portes del parc.',line:'A peu',color:'#80A86F',points:[vallcarca,[41.411,2.149],[41.4118,2.154],[41.4132,2.159],[41.4145,2.162],[41.4145,2.1635]]},
  {id:'casa-vicens',title:'Vallcarca → Casa Vicens',mode:'walk',badge:'A PEU',meta:'Baixant pels carrers de Gràcia fins a la primera casa de Gaudí.',line:'A peu',color:'#80A86F',points:[vallcarca,[41.4099,2.148],[41.4077,2.151],[41.405,2.153],[41.402,2.151],[41.4031,2.1512]]},
  {id:'elisava-barceloneta',title:'Elisava → Barceloneta',mode:'walk',badge:'A PEU',meta:'Des de La Rambla, travessant el Gòtic fins al mar.',line:'A peu',color:'#80A86F',points:[elisava,[41.3772,2.176],[41.3756,2.1778],[41.377,2.181],[41.379,2.184],[41.381,2.187],[41.384,2.19],[41.3853,2.1922]]},
  {id:'vallcarca-camp-nou',title:'Vallcarca → Spotify Camp Nou',mode:'metro',badge:'TRANSPORT PÚBLIC',meta:'L3 fins a Les Corts i tram final a peu.',line:'L3',color:'#4A79B7',points:[vallcarca,[41.4097,2.1497],[41.4037,2.1538],[41.3954,2.1596],[41.3925,2.1649],[41.3874,2.1574],[41.3847,2.1494],[41.3805,2.1348],[41.3808,2.1225]]}
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
let fallbackView = {x:0,y:0,w:900,h:700};
if (mapLibreAvailable) {
  map = new maplibregl.Map({container:mapElement,style:'https://tiles.openfreemap.org/styles/positron',center:[2.17,41.398],zoom:11,attributionControl:true});
  map.addControl(new maplibregl.NavigationControl({showCompass:false}),'top-right');
  map.on('load', () => {
    map.addSource('selected-route',{type:'geojson',data:{type:'Feature',geometry:{type:'LineString',coordinates:[]},properties:{}}});
    map.addLayer({id:'selected-route-casing',type:'line',source:'selected-route',paint:{'line-color':'#fffdf8','line-width':15,'line-opacity':.98,'line-cap':'round','line-join':'round'}});
    map.addLayer({id:'selected-route-line',type:'line',source:'selected-route',paint:{'line-color':'#2E7D5B','line-width':8,'line-opacity':1,'line-cap':'round','line-join':'round'}});
    showRoute(activeRoute);
  });
} else {
  mapElement.innerHTML = `<svg class="fallback-map" viewBox="0 0 900 700" role="img" aria-label="Mapa esquemàtic de Barcelona amb carrers i rutes"><rect width="900" height="700" fill="#f3f3eb"/><path d="M570 700H900V418L832 431 782 455 730 476 683 500 650 540Z" fill="#dcebe8"/><path d="M0 0H900V180L790 190 700 180 610 198 500 170 390 188 280 160 170 175 0 145Z" fill="#e1eadc"/><path d="M45 110C180 164 220 228 325 270S520 347 660 402 812 451 900 462M0 250C125 246 210 294 340 333S580 400 705 445 830 520 900 536M0 435C135 410 235 438 367 478S600 546 720 570 820 628 900 652M105 0C126 100 158 220 183 330S227 540 254 700M300 0C312 116 335 208 366 312S420 530 448 700M500 0C488 126 502 228 537 342S601 558 633 700M705 0C666 111 666 237 698 344S774 556 808 700" fill="none" stroke="#fffefa" stroke-width="14"/><path d="M45 110C180 164 220 228 325 270S520 347 660 402 812 451 900 462M0 250C125 246 210 294 340 333S580 400 705 445 830 520 900 536M0 435C135 410 235 438 367 478S600 546 720 570 820 628 900 652M105 0C126 100 158 220 183 330S227 540 254 700M300 0C312 116 335 208 366 312S420 530 448 700M500 0C488 126 502 228 537 342S601 558 633 700M705 0C666 111 666 237 698 344S774 556 808 700" fill="none" stroke="#e4dfd3" stroke-width="1.5"/><g fill="#829087" font-family="Arial,sans-serif" font-size="13" letter-spacing="2"><text x="250" y="78">COLLSEROLA</text><text x="140" y="285">VALLCARCA</text><text x="350" y="385">GRÀCIA</text><text x="520" y="500">CIUTAT VELLA</text><text x="755" y="493">BADALONA</text><text x="400" y="665" fill="#71958c">MEDITERRÀNIA</text></g><g id="fallback-route"></g></svg><div class="fallback-controls"><button type="button" data-zoom="in" aria-label="Apropar">+</button><button type="button" data-zoom="out" aria-label="Allunyar">−</button></div>`;
  fallbackSvg = mapElement.querySelector('svg');
  fallbackRoute = mapElement.querySelector('#fallback-route');
}
let activeRoute = routes[0];
let routeEndMarkers = [];

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

if (!mapLibreAvailable) {
  mapElement.classList.add('fallback-map-active');
  mapElement.querySelectorAll('[data-zoom]').forEach((button) => button.addEventListener('click', () => {
    const scale = button.dataset.zoom === 'in' ? .8 : 1.25;
    fallbackView.w = Math.min(900,fallbackView.w*scale); fallbackView.h = Math.min(700,fallbackView.h*scale);
    fallbackSvg.setAttribute('viewBox',`${fallbackView.x} ${fallbackView.y} ${fallbackView.w} ${fallbackView.h}`);
  }));
}

function buildCard(route) {
  const card = document.createElement('button');
  card.type = 'button'; card.className = 'route-card'; card.dataset.id = route.id;
  card.innerHTML = `<span class="route-card-top"><span class="route-title">${route.title}</span><span class="route-mode">${route.badge}</span></span><span class="route-card-meta">${route.meta}</span><span class="route-line" style="--route-color:${route.color}"><i></i><strong>${route.line}</strong></span>`;
  card.addEventListener('click', () => showRoute(route));
  return card;
}

function renderCards(filter='all') {
  routeList.replaceChildren(...routes.filter((route) => filter === 'all' || route.mode === filter).map(buildCard));
  const selected = routeList.querySelector(`[data-id="${activeRoute.id}"]`);
  if (selected) selected.classList.add('selected');
}

function showRoute(route) {
  activeRoute = route;
  if (mapLibreAvailable) {
    const source = map.getSource('selected-route');
    if (source) {
      routeEndMarkers.forEach((marker) => marker.remove());
      routeEndMarkers = [];
      source.setData({type:'Feature',properties:{},geometry:{type:'LineString',coordinates:route.points.map(([lat,lon])=>[lon,lat])}});
      map.setPaintProperty('selected-route-line','line-color',route.color);
      const bounds = new maplibregl.LngLatBounds();
      route.points.forEach(([lat,lon])=>bounds.extend([lon,lat]));
      map.fitBounds(bounds,{padding:{top:90,bottom:100,left:80,right:80},maxZoom:14,duration:500});
      [
        {point:route.points[0],color:'#2E7D5B',name:route.title.split(' → ')[0]},
        {point:route.points.at(-1),color:'#C27A4A',name:route.title.split(' → ')[1]}
      ].forEach(({point,color,name})=>{
        const element=document.createElement('div');
        element.className='route-end-marker';
        element.setAttribute('aria-label',name);
        element.style.setProperty('--route-color',color);
        routeEndMarkers.push(new maplibregl.Marker({element,anchor:'center'}).setLngLat([point[1],point[0]]).setPopup(new maplibregl.Popup({offset:16}).setText(name)).addTo(map));
      });
    }
  } else showFallbackRoute(route);
  caption.textContent = `${route.title} · ${route.badge.toLowerCase()} · ${route.line}`;
  openMap.href = `https://www.openstreetmap.org/?mlat=${route.points[0][0]}&mlon=${route.points[0][1]}#map=13/${route.points[0][0]}/${route.points[0][1]}`;
  routeList.querySelectorAll('.route-card').forEach((card) => card.classList.toggle('selected',card.dataset.id===route.id));
}

document.querySelectorAll('.filter-chip').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.filter-chip').forEach((chip) => chip.classList.toggle('active',chip===button));
  renderCards(button.dataset.filter);
}));

renderCards();
showRoute(activeRoute);
showRoute(activeRoute);
showRoute(activeRoute);

