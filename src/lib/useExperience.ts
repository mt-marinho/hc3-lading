import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
gsap.registerPlugin(ScrollTrigger);
export { ScrollTrigger };
let smooth: Lenis | null = null;
export function lockScroll(locked: boolean) {
  document.documentElement.classList.toggle('dialog-open', locked);
  if (locked) smooth?.stop(); else smooth?.start();
}
export function useExperience() {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    let alive = true;
    // Explicit preview opt-in; the normal URL always respects system preferences.
    const forceMotion = new URLSearchParams(location.search).get('movimento') === '1';
    const motionQuery = forceMotion ? '(min-width: 0px)' : '(prefers-reduced-motion: no-preference)';
    media.add(motionQuery, () => {
      smooth = new Lenis({ lerp: .085, anchors: true, smoothWheel: true });
      const instance = smooth;
      instance.on('scroll', ScrollTrigger.update);
      const tick = (time: number) => instance.raf(time * 1000);
      gsap.ticker.add(tick);
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.from('.hero-photo', { scale: 1.12, opacity: .25, duration: 1.8 })
        .from('.headline-line>span', { yPercent: 110, stagger: .13, duration: 1.15 }, .2)
        .from('.hero-kicker, .hero-bottom', { y: 18, opacity: 0, duration: .8, stagger: .15 }, .85);
      gsap.to('.reading-progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });
      gsap.utils.toArray<HTMLElement>('.reveal').forEach(el => gsap.from(el, { y: 34, opacity: 0, duration: .9, scrollTrigger: { trigger: el, start: 'top 91%', once: true } }));
      gsap.utils.toArray<HTMLElement>('.image-reveal').forEach(el => gsap.from(el, { clipPath: 'inset(12% 0 12% 0)', duration: 1.3, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }));
      return () => { gsap.ticker.remove(tick); instance.destroy(); if (smooth === instance) smooth = null; };
    });
    media.add({ desktop: '(min-width: 900px)', motion: motionQuery }, context => {
      if (!context.conditions?.motion) return;
      const desktop = Boolean(context.conditions.desktop);
      gsap.to('.hero-backdrop', { yPercent: desktop ? 34 : 22, scale: 1.06, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .45, invalidateOnRefresh: true } });
      gsap.to('.hero-heading', { y: desktop ? 150 : 65, opacity: .55, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .35 } });
      gsap.utils.toArray<HTMLElement>('.parallax-photo').forEach(el => gsap.fromTo(el, { yPercent: desktop ? -7 : -4, scale: desktop ? 1.18 : 1.1 }, { yPercent: desktop ? 7 : 4, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: .45, invalidateOnRefresh: true } }));
      if (!desktop) return;
      const scene = gsap.timeline({ scrollTrigger: { trigger: '.manifesto', start: 'top top', end: '+=65%', pin: true, scrub: .7, anticipatePin: 1 } });
      scene.from('.manifesto-word', { opacity: .14, y: 35, stagger: .45, ease: 'none' }).fromTo('.manifesto-rule', { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0);
    });
    document.fonts.ready.then(() => { if (alive) ScrollTrigger.refresh(); });
    const resize = new ResizeObserver(() => ScrollTrigger.refresh());
    document.querySelectorAll('.service-list').forEach(el => resize.observe(el));
    return () => { alive = false; resize.disconnect(); media.revert(); document.documentElement.classList.remove('dialog-open'); };
  }, []);
}
