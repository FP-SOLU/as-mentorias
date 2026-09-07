const controllers = new WeakMap<Document, () => void>();

/** DOM-only controller. No engine, persistence, contact or network dependency. */
export function initContactInfo(doc: Document, view: Window): () => void {
  const existing = controllers.get(doc);
  if (existing) return existing;
  const region = doc.querySelector<HTMLElement>('#contact-info');
  const heading = doc.querySelector<HTMLElement>('#contact-heading');
  const back = doc.querySelector<HTMLButtonElement>('[data-contact-return]');
  const triggers = [...doc.querySelectorAll<HTMLButtonElement>('[data-contact-open]')];
  if (!region || !heading || !back || !triggers.length) return () => {};
  let context: { trigger: HTMLButtonElement; x: number; y: number } | null = null;
  const expanded = (value: boolean) => triggers.forEach((button) => button.setAttribute('aria-expanded', String(value)));
  const open = (event: Event) => {
    if (context) return;
    context = { trigger: event.currentTarget as HTMLButtonElement, x: view.scrollX, y: view.scrollY };
    region.hidden = false;
    expanded(true);
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ block: 'start', behavior: 'instant' });
  };
  const close = () => {
    if (!context) return;
    const origin = context;
    context = null;
    region.hidden = true;
    expanded(false);
    origin.trigger.focus({ preventScroll: true });
    view.scrollTo({ left: origin.x, top: origin.y, behavior: 'instant' });
  };
  triggers.forEach((button) => { button.hidden = false; button.addEventListener('click', open); });
  back.hidden = false;
  back.addEventListener('click', close);
  region.hidden = true;
  const cleanup = () => {
    close();
    triggers.forEach((button) => { button.removeEventListener('click', open); button.hidden = true; });
    back.removeEventListener('click', close);
    back.hidden = true;
    region.hidden = false;
    controllers.delete(doc);
  };
  controllers.set(doc, cleanup);
  return cleanup;
}
