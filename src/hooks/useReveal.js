import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => {
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'));
        const idx = siblings.indexOf(el);
        if (idx > -1 && siblings.length > 2) {
          el.style.transitionDelay = `${idx * 0.08}s`;
        }
      }
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);
}
