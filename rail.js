// Highlights the active section in the sticky decision rail.
(() => {
  const links = [...document.querySelectorAll('.rail a[href^="#"]')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;
  const set = (id) => links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
  const io = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible[0]) set(visible[0].target.id);
  }, { rootMargin: '-10% 0px -70% 0px', threshold: 0 });
  sections.forEach(s => io.observe(s));
})();
