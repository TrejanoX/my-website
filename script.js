// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav gets a soft background after scrolling
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Scroll reveal (Intersection Observer). Falls back to visible if unsupported.
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('visible'));
}

// Rotating personal facts. EDIT this list with your own.
const facts = [
  'Listening to My Favorite Songs',
  'Enjoying myself alone',
  'Walking around in Ayala',
  'Cooking and giving food to my family'
];
let i = 0;
const factEl = document.getElementById('fact');
document.getElementById('nextFact').addEventListener('click', () => {
  i = (i + 1) % facts.length;
  factEl.classList.add('fade');
  setTimeout(() => { factEl.textContent = facts[i]; factEl.classList.remove('fade'); }, 300);
});
