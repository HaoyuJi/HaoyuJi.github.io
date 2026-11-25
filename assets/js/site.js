(() => {
  const menu = document.querySelector('.mobile-menu');
  function closeMenu() {
    menu.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }
  menu.addEventListener('click', () => {
    const opened = document.body.classList.toggle('menu-open');
    menu.setAttribute('aria-expanded', String(opened));
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      closeMenu();
      menu.focus();
    }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.topbar') || e.target.closest('nav a')) closeMenu();
  });
  const switcher = document.querySelector('[data-lang-switch]');
  const languageHref = switcher.getAttribute('href');
  function syncLanguageLink() {
    switcher.setAttribute('href', languageHref + location.search + location.hash);
  }
  syncLanguageLink();
  window.addEventListener('hashchange', syncLanguageLink);

  const featured = document.getElementById('featured');
  if (!featured) return;
  const all = document.getElementById('all');
  const toggles = document.querySelectorAll('[data-view]');
  function setView(view) {
    featured.hidden = view !== 'featured';
    all.hidden = view !== 'all';
    for (const toggle of toggles) {
      if (toggle.dataset.view === view) toggle.setAttribute('aria-current', 'true');
      else toggle.removeAttribute('aria-current');
    }
  }
  function restoreView() {
    if (location.hash === '#all') setView('all');
    else if (location.hash === '#featured' || !location.hash || location.hash === '#publications') setView('featured');
    const target = document.getElementById(location.hash.slice(1));
    if (target?.matches('details')) target.open = true;
  }
  setView(location.hash === '#all' ? 'all' : 'featured');
  restoreView();
  toggles.forEach(toggle => toggle.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setView(toggle.dataset.view);
    history.pushState(null, '', toggle.getAttribute('href'));
    syncLanguageLink();
  }));
  window.addEventListener('hashchange', restoreView);
  const nav = document.querySelectorAll('nav a');
  const sections = Array.from(nav, a => document.querySelector(a.getAttribute('href')));
  function updateNav() {
    const current = sections.filter(section => section.getBoundingClientRect().top <= 125).at(-1) || sections[0];
    for (const link of nav) {
      if (link.getAttribute('href') === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(updateNav, {rootMargin: '-80px 0px -55% 0px', threshold: 0});
    sections.forEach(section => observer.observe(section));
  }
  updateNav();
})();
