const form = document.querySelector('#trip-form');
const tripName = document.querySelector('#trip-name');
const tripMode = document.querySelector('#trip-mode');
const tripDistance = document.querySelector('#trip-distance');
const tripList = document.querySelector('#trip-list');
const totalKm = document.querySelector('#total-km');
const tripCount = document.querySelector('#trip-count');
const message = document.querySelector('#form-message');
const trips = [];

const modeNames = {
  walk: 'A peu',
  bike: 'En bicicleta',
  transit: 'Transport públic',
  car: 'En cotxe'
};

function formatKm(value) {
  return new Intl.NumberFormat('ca-ES', { maximumFractionDigits: 1 }).format(value);
}

function renderTrips() {
  const totals = { walk: 0, bike: 0, transit: 0, car: 0 };
  let sum = 0;

  trips.forEach((trip) => {
    totals[trip.mode] += trip.distance;
    sum += trip.distance;
  });

  totalKm.textContent = formatKm(sum);
  tripCount.textContent = `${trips.length} ${trips.length === 1 ? 'trajecte' : 'trajectes'}`;

  const highest = Math.max(...Object.values(totals), 1);
  document.querySelectorAll('.bar-row').forEach((row) => {
    const mode = row.dataset.mode;
    row.querySelector('.bar-fill').style.width = `${(totals[mode] / highest) * 100}%`;
    row.querySelector('.bar-value').textContent = `${formatKm(totals[mode])} km`;
  });

  tripList.replaceChildren();
  if (trips.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'empty-state';
    empty.textContent = 'Encara no hi ha cap trajecte. Comença amb el d’avui.';
    tripList.append(empty);
    return;
  }

  [...trips].reverse().forEach((trip) => {
    const item = document.createElement('li');
    const dot = document.createElement('span');
    dot.className = `trip-mode-dot mode-${trip.mode}`;
    dot.setAttribute('aria-hidden', 'true');
    const name = document.createElement('span');
    name.className = 'trip-name';
    name.textContent = trip.name || modeNames[trip.mode];
    const mode = document.createElement('span');
    mode.className = 'trip-name trip-mode-name';
    mode.textContent = modeNames[trip.mode];
    const distance = document.createElement('span');
    distance.className = 'trip-distance';
    distance.textContent = `${formatKm(trip.distance)} km`;
    item.append(dot, name, mode, distance);
    tripList.append(item);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const distance = Number(tripDistance.value);
  if (!Number.isFinite(distance) || distance <= 0 || distance > 500) {
    message.textContent = 'Introdueix una distància entre 0,1 i 500 km.';
    tripDistance.focus();
    return;
  }

  trips.push({
    name: tripName.value.trim().slice(0, 38),
    mode: tripMode.value,
    distance
  });

  renderTrips();
  message.textContent = 'Trajecte afegit al registre d’aquesta sessió.';
  tripName.value = '';
  tripDistance.value = '';
  tripName.focus();
});

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Obre el menú' : 'Tanca el menú');
  mobileNav.hidden = isOpen;
});

mobileNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Obre el menú');
  }
});

renderTrips();

const progressBar = document.querySelector('#scroll-progress');
let progressFrame = 0;

function updateScrollProgress() {
  if (progressFrame) return;
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

