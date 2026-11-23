const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Obre el menú' : 'Tanca el menú');
  mobileNav.hidden = isOpen;
});

mobileNav?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    mobileNav.hidden = true;
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Obre el menú');
  }
});

const progressBar = document.querySelector('#scroll-progress');
let progressFrame = 0;

function updateScrollProgress() {
  if (progressFrame || !progressBar) return;
  progressFrame = window.requestAnimationFrame(() => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    progressFrame = 0;
  });
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);
updateScrollProgress();

const globe = document.querySelector('#globe-spin');
let previousScrollY = window.scrollY;
let globeRotation = 0;
let globeFrame = 0;

const continents = [
  [[-168,70],[-145,62],[-132,52],[-124,42],[-117,32],[-108,27],[-98,18],[-91,20],[-83,9],[-78,9],[-81,25],[-97,30],[-105,48],[-123,50],[-129,61],[-150,65]],
  [[-81,12],[-70,9],[-61,-2],[-50,-2],[-49,-12],[-54,-23],[-60,-34],[-68,-55],[-74,-44],[-78,-22]],
  [[-11,36],[-9,44],[2,50],[13,55],[25,60],[33,70],[48,67],[42,55],[31,46],[22,38],[10,36],[2,42]],
  [[-17,35],[1,37],[14,33],[31,30],[42,12],[50,10],[43,-12],[34,-28],[19,-35],[11,-25],[3,-5],[-7,5],[-16,16]],
  [[35,35],[50,45],[70,53],[90,55],[110,50],[128,43],[145,48],[160,60],[177,52],[155,40],[135,35],[121,22],[108,8],[99,5],[89,22],[75,8],[58,18],[48,28]],
  [[112,-11],[133,-12],[151,-24],[145,-39],[128,-43],[115,-31]],
  [[-52,82],[-25,78],[-18,65],[-40,58],[-55,65]]
];

function drawGlobe() {
  if (!globe) return;
  const ctx = globe.getContext('2d');
  const size = globe.width;
  const center = size / 2;
  const radius = size * 0.44;
  ctx.clearRect(0, 0, size, size);
  ctx.save();
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.clip();

  const ocean = ctx.createRadialGradient(center * .72, center * .68, 2, center, center, radius * 1.3);
  ocean.addColorStop(0, '#79A98A'); ocean.addColorStop(.5, '#2E7D5B'); ocean.addColorStop(1, '#123E2D');
  ctx.fillStyle = ocean;
  ctx.fillRect(0, 0, size, size);

  const project = ([longitude, latitude]) => {
    const lat = latitude * Math.PI / 180;
    const lon = longitude * Math.PI / 180 + globeRotation;
    const depth = Math.cos(lat) * Math.cos(lon);
    return { x: center + radius * Math.cos(lat) * Math.sin(lon), y: center - radius * Math.sin(lat), depth };
  };

  continents.forEach((land) => {
    const points = land.map(project);
    ctx.beginPath();
    let drawing = false;
    points.forEach((point) => {
      if (point.depth > 0) {
        if (!drawing) { ctx.moveTo(point.x, point.y); drawing = true; }
        else ctx.lineTo(point.x, point.y);
      } else drawing = false;
    });
    if (drawing) { ctx.closePath(); ctx.fillStyle = '#DDEBDD'; ctx.fill(); }
  });

  ctx.strokeStyle = 'rgba(247,251,246,.45)';
  ctx.lineWidth = 1.2;
  for (const latitude of [-55, 0, 55]) {
    ctx.beginPath();
    for (let longitude = -90; longitude <= 90; longitude += 3) {
      const point = project([longitude, latitude]);
      if (longitude === -90) ctx.moveTo(point.x, point.y); else ctx.lineTo(point.x, point.y);
    }
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.ellipse(center, center, radius * .48, radius, 0, 0, Math.PI * 2);
  ctx.stroke();

  const shine = ctx.createRadialGradient(center * .65, center * .58, radius * .12, center, center, radius * 1.12);
  shine.addColorStop(0, 'rgba(255,253,248,.28)'); shine.addColorStop(.55, 'rgba(255,253,248,.03)'); shine.addColorStop(1, 'rgba(10,38,26,.4)');
  ctx.fillStyle = shine;
  ctx.fillRect(0, 0, size, size);
  ctx.restore();
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255,253,248,.92)'; ctx.lineWidth = 3; ctx.stroke();
}
drawGlobe();

function spinGlobeWithScroll() {
  if (!globe || globeFrame) return;
  globeFrame = window.requestAnimationFrame(() => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - previousScrollY;
    if (Math.abs(scrollDelta) > 0.25) {
      globeRotation += scrollDelta * 0.006;
      drawGlobe();
    }
    previousScrollY = currentScrollY;
    globeFrame = 0;
  });
}

window.addEventListener('scroll', spinGlobeWithScroll, { passive: true });
window.addEventListener('resize', drawGlobe);

const sectionsToReveal = [...document.querySelectorAll('main > section:not(.hero)')];
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -4% 0px' });

  sectionsToReveal.forEach((section) => {
    section.classList.add('scroll-reveal');
    revealObserver.observe(section);
  });
  document.body.classList.add('has-scroll-reveal');
}


