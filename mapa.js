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
const map = L.map('route-map', {scrollWheelZoom:true, zoomControl:false}).setView([41.398, 2.17], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19, attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
L.control.zoom({position:'topright'}).addTo(map);
let activeLayer = L.layerGroup().addTo(map);
let activeRoute = routes[0];

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
  activeLayer.clearLayers();
  const line = L.polyline(route.points, {color:route.color,weight:5,opacity:.9,lineCap:'round',lineJoin:'round'}).addTo(activeLayer);
  const start = L.circleMarker(route.points[0], {radius:7,color:'#fffdf8',weight:3,fillColor:route.color,fillOpacity:1}).bindPopup(`<strong>Sortida</strong><br>${route.title.split(' → ')[0]}`).addTo(activeLayer);
  const end = L.circleMarker(route.points.at(-1), {radius:7,color:'#fffdf8',weight:3,fillColor:route.color,fillOpacity:1}).bindPopup(`<strong>Arribada</strong><br>${route.title.split(' → ')[1]}`).addTo(activeLayer);
  line.bindPopup(`<strong>${route.title}</strong><br>${route.badge} · ${route.line}`);
  map.fitBounds(line.getBounds(), {padding:[52,52],maxZoom:14});
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

