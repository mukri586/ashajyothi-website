// ─── AshaJyothi nav · diya beacon + scroll shrink ─────────
(function(){
  const nav = document.querySelector('nav.top');
  if(!nav) return;

  const line = nav.querySelector('.navline');
  const beacon = line && line.querySelector('.beacon');
  const links = line ? line.querySelectorAll('.nl') : [];
  const active = line && line.querySelector('.nl.is-active');

  function place(el){
    if(!beacon || !el) return;
    const r = el.getBoundingClientRect();
    const pr = line.getBoundingClientRect();
    beacon.style.width = r.width + 'px';
    beacon.style.transform = 'translateX(' + (r.left - pr.left) + 'px)';
  }

  // initial position — wait for fonts so widths settle
  function init(){
    if(active){ place(active); }
    else if(links[0]){ place(links[0]); }
  }
  if(document.fonts && document.fonts.ready){
    document.fonts.ready.then(init);
  }
  setTimeout(init, 60);
  window.addEventListener('load', init);
  window.addEventListener('resize', init);

  links.forEach(l => {
    l.addEventListener('mouseenter', () => place(l));
    l.addEventListener('focus', () => place(l));
  });
  if(line) line.addEventListener('mouseleave', () => { if(active) place(active); });

  // Scroll-shrink
  let last = -1;
  function onScroll(){
    const y = window.scrollY;
    const shrunk = y > 80;
    if((last > 80) !== shrunk){
      nav.classList.toggle('shrunk', shrunk);
      // Beacon width may shift when paddings change
      requestAnimationFrame(() => { if(active) place(active); });
    }
    last = y;
  }
  window.addEventListener('scroll', onScroll, {passive:true});
})();
