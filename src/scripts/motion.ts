/** Provisional raster: whole-object movement only, never independent lamellae. */
export function initPresenceMotion(): () => void {
  const field = document.querySelector<HTMLElement>('.sculpture');
  const image = field?.querySelector('img');
  const hero = document.querySelector<HTMLElement>('.presence');
  const seam = document.querySelector<HTMLElement>('.open-space');
  if (!field || !image || !hero || !seam || !('animate' in image) || !('IntersectionObserver' in window)) return () => {};
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new Set<Animation>();
  let frame = 0;
  let visible = false;
  let heroHeight = hero.offsetHeight;
  let played = false;
  const animate = (element: HTMLElement, keyframes: Keyframe[], duration: number, delay = 0) => {
    const animation = element.animate(keyframes, { duration, delay, fill: delay > 0 ? 'backwards' : 'none', easing: 'cubic-bezier(.16,1,.3,1)' });
    animations.add(animation);
    animation.onfinish = () => animations.delete(animation);
  };
  const cancel = () => { animations.forEach((a) => a.cancel()); animations.clear(); cancelAnimationFrame(frame); frame = 0; field.style.removeProperty('transform'); };
  const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('.practice h2, .about h2, .repertoire h2, .situations-lines, .repertoire blockquote, .next-step h3'));
  const revealed = new Set<HTMLElement>();
  const reveal = (element: HTMLElement, delay: number) => {
    revealed.add(element);
    element.style.removeProperty('opacity');
    revealObserver.unobserve(element);
    animate(element, [{ opacity: 0, transform: 'translateY(32px)' }, { opacity: 1, transform: 'translateY(0)' }], 600, delay);
    if (revealed.size === revealTargets.length) revealObserver.disconnect();
  };
  const revealObserver = new IntersectionObserver((entries) => {
    const pending: HTMLElement[] = [];
    for (const entry of entries) {
      const element = entry.target as HTMLElement;
      if (entry.isIntersecting && !revealed.has(element) && !preference.matches && !document.hidden) pending.push(element);
    }
    pending.forEach((element, i) => reveal(element, i * 80));
  }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
  const watchReveals = () => {
    for (const element of revealTargets) {
      if (revealed.has(element)) element.style.removeProperty('opacity');
      else { element.style.setProperty('opacity', '0'); revealObserver.observe(element); }
    }
  };
  const stopReveals = () => {
    revealObserver.disconnect();
    for (const element of revealTargets) element.style.removeProperty('opacity');
  };
  const update = () => {
    frame = 0;
    if (preference.matches || document.hidden || !visible) return;
    const amplitude = window.innerWidth < 600 ? 20 : 40;
    const progress = Math.min(1, Math.max(0, window.scrollY / heroHeight));
    field.style.transform = `translateY(${progress * amplitude}px)`;
  };
  const scroll = () => { if (!frame && visible && !preference.matches && !document.hidden) frame = requestAnimationFrame(update); };
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === hero) { visible = entry.isIntersecting; if (visible) scroll(); else cancel(); }
      if (entry.target === seam && entry.isIntersecting && !played && !preference.matches && !document.hidden) {
        played = true;
        const marks = seam.querySelectorAll<HTMLElement>('span');
        marks.forEach((mark, i) => animate(mark, [{ transform: `translateX(${i ? -16 : 16}px) rotate(24deg)` }, { transform: 'translateX(0) rotate(24deg)' }], 480));
      }
    }
  });
  const change = () => {
    cancel(); observer.disconnect();
    if (!preference.matches && !document.hidden) { observer.observe(hero); observer.observe(seam); scroll(); watchReveals(); }
    else stopReveals();
  };
  const resize = () => { heroHeight = hero.offsetHeight; scroll(); };
  const hide = () => change();
  window.addEventListener('scroll', scroll, { passive: true });
  window.addEventListener('resize', resize);
  preference.addEventListener('change', change);
  document.addEventListener('visibilitychange', hide);
  window.addEventListener('blur', cancel);
  change();
  const settleOpacity = getComputedStyle(image).opacity || '1';
  if (!preference.matches && !document.hidden) animate(image, [{ opacity: 0, transform: 'translateY(64px) rotate(-2deg)' }, { opacity: settleOpacity, transform: 'translateY(0) rotate(0)' }], 900);
  void document.fonts.ready.then(resize);
  const cleanup = () => {
    cancel(); observer.disconnect(); stopReveals();
    window.removeEventListener('scroll', scroll); window.removeEventListener('resize', resize);
    preference.removeEventListener('change', change); document.removeEventListener('visibilitychange', hide);
    window.removeEventListener('blur', cancel); window.removeEventListener('pagehide', cleanup);
  };
  window.addEventListener('pagehide', cleanup, { once: true });
  return cleanup;
}
