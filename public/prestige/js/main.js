/* =====================================================
   NovaBanque — Prestige · main.js
   Curseur natif + Lenis + GSAP ScrollTrigger pinning + parallax
   ===================================================== */
(() => {
  'use strict';
  gsap.registerPlugin(ScrollTrigger);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  // ============================================
  // 1. PRELOADER — géométrie sacrée + rideau
  // ============================================
  function runPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) { onPreloaderDone(); return; }
    const counter = document.getElementById('preloader-counter');
    const progress = { val: 0 };
    if (counter) gsap.to(progress, { val: 100, duration: 2.4, ease: 'power2.out', onUpdate: () => { counter.textContent = Math.floor(progress.val); } });

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        document.body.classList.add('preloader-done', 'site-ready');
        gsap.set(preloader, { display: 'none' });
        onPreloaderDone();
      }
    });
    tl.to('.ring', { opacity: 1, duration: 0.4, stagger: 0.08 }, 0)
      .to('.ring', { strokeDashoffset: 0, duration: 1.4, stagger: 0.12, ease: 'power2.inOut' }, 0.1)
      .to('.r1', { rotation: 90, duration: 1.6, transformOrigin: 'center' }, 0.3)
      .to('.r2', { rotation: -60, duration: 1.6, transformOrigin: 'center' }, 0.4)
      .to('.r3', { rotation: 45, duration: 1.6, transformOrigin: 'center' }, 0.5)
      .to('.star', { opacity: 1, scale: 1, rotation: 360, duration: 1.2, transformOrigin: 'center' }, 0.8)
      .to('.preloader-logo', { opacity: 1, y: 0, duration: 0.8 }, 1.6)
      .to('.ring', { scale: 0, opacity: 0, duration: 0.6, transformOrigin: 'center', stagger: 0.03 }, 2.2)
      .to('.star', { scale: 1.4, opacity: 0, duration: 0.6, transformOrigin: 'center' }, 2.2)
      .to('.preloader-logo', { opacity: 0, scale: 0.95, duration: 0.4 }, 2.6)
      .to('.preloader', { yPercent: -100, duration: 1.0, ease: 'expo.inOut' }, 2.8);
  }

  function onPreloaderDone() {
    revealHero();
    initScrollAnimations();
  }

  // ============================================
  // 2. LENIS — smooth scroll synchronisé GSAP
  // ============================================
  let lenis;
  function initLenis() {
    if (prefersReducedMotion) return;
    lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical', smoothWheel: true,
      touchMultiplier: 2, wheelMultiplier: 1.1,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);
  }

  // ============================================
  // 3. REVEAL HERO
  // ============================================
  function revealHero() {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to('.hero .line-inner', { y: 0, duration: 1.0, stagger: 0.12 }, 0)
      .fromTo('.split-fade', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 }, 0.3)
      .fromTo('.balance-card', { opacity: 0, y: 40, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 1.2 }, 0.5)
      .to('.graph-line', { strokeDashoffset: 0, duration: 1.8, ease: 'power3.inOut' }, 0.9)
      .to('.scroll-hint', { opacity: 1, duration: 0.6 }, 1.4);
    startCounters();
  }

  // ============================================
  // 4. COUNTERS
  // ============================================
  function startCounters() {
    document.querySelectorAll('.counter').forEach((el) => {
      const target = parseFloat(el.dataset.counter);
      const decimal = el.dataset.decimal ? parseInt(el.dataset.decimal) : 0;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 2.0, ease: 'power3.out', delay: 0.4,
        onUpdate: () => {
          el.textContent = decimal > 0
            ? obj.v.toFixed(decimal).replace('.', ',')
            : Math.floor(obj.v).toLocaleString('fr-FR');
        }
      });
    });
  }

  // ============================================
  // 5. SCROLL ANIMATIONS — pinning, parallax, reveals, card assembly
  // ============================================
  function initScrollAnimations() {
    if (prefersReducedMotion) return;

    // --- A. Generic reveal on scroll ---
    document.querySelectorAll('.reveal').forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', delay: (i % 4) * 0.05 })
      });
    });

    // --- B. Section titles : letter-by-letter mask reveal ---
    document.querySelectorAll('.section-title').forEach((title) => {
      const inners = title.querySelectorAll('.line-inner-stagger');
      gsap.set(inners, { y: '110%' });
      ScrollTrigger.create({
        trigger: title,
        start: 'top 80%',
        once: true,
        onEnter: () => gsap.to(inners, { y: '0%', duration: 1.0, stagger: 0.12, ease: 'expo.out' })
      });
    });

    // --- C. Parallax sur les éléments [data-parallax] ---
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      gsap.to(el, {
        yPercent: -speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    });

    // --- D. Section pinning : [data-pin] reste fixe pendant la durée définie ---
    document.querySelectorAll('[data-pin]').forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: section.dataset.pinEnd || '+=100%',
        pin: true,
        pinSpacing: true,
      });
    });

    // --- E. CARTE BANCAIRE qui s'assemble au scroll ---
    const cardSection = document.querySelector('[data-card-assembly]');
    if (cardSection) {
      const parts = cardSection.querySelectorAll('.card-part');
      gsap.set(parts, (i) => ({
        x: (i % 2 === 0 ? -1 : 1) * 200,
        y: ((i % 3) - 1) * 120,
        rotation: (i % 2 === 0 ? -1 : 1) * 25,
        opacity: 0,
      }));
      gsap.to(parts, {
        x: 0, y: 0, rotation: 0, opacity: 1,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: cardSection,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 1,
        }
      });
    }

    // --- F. STACKED SECTIONS : sections qui s'empilent ---
    document.querySelectorAll('[data-stack]').forEach((section) => {
      gsap.to(section, {
        scale: 0.92,
        opacity: 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: true,
          pinSpacing: false,
        }
      });
    });

    // Recalcul après tout chargé
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }

  // ============================================
  // 6. MAGNETIC BUTTONS (curseur natif gardé)
  // ============================================
  function initMagnetic() {
    if (isTouch || prefersReducedMotion) return;
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      const pos = { x: 0, y: 0 }; const target = { x: 0, y: 0 }; const strength = 0.35;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        target.x = (e.clientX - (r.left + r.width / 2)) * strength;
        target.y = (e.clientY - (r.top + r.height / 2)) * strength;
      });
      el.addEventListener('mouseleave', () => { target.x = 0; target.y = 0; });
      function tick() {
        pos.x += (target.x - pos.x) * 0.18;
        pos.y += (target.y - pos.y) * 0.18;
        el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        requestAnimationFrame(tick);
      }
      tick();
    });
  }

  // ============================================
  // 7. BACKGROUND GLOWS suivent souris
  // ============================================
  function initGlows() {
    if (isTouch || prefersReducedMotion) return;
    const g1 = document.querySelector('.bg-glow-1');
    const g2 = document.querySelector('.bg-glow-2');
    const g3 = document.querySelector('.bg-glow-3');
    if (!g1 || !g2) return;
    const mouse = { x: innerWidth / 2, y: innerHeight / 2 };
    const p1 = { x: 0, y: 0 }, p2 = { x: 0, y: 0 }, p3 = { x: 0, y: 0 };
    const cx = innerWidth / 2, cy = innerHeight / 2;
    addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    function tick() {
      const dx = (mouse.x - cx) * 0.06; const dy = (mouse.y - cy) * 0.06;
      p1.x += (dx - p1.x) * 0.04; p1.y += (dy - p1.y) * 0.04;
      p2.x += (-dx - p2.x) * 0.04; p2.y += (-dy - p2.y) * 0.04;
      p3.x += (dx * 0.5 - p3.x) * 0.05; p3.y += (dy * 0.5 - p3.y) * 0.05;
      g1.style.transform = `translate3d(${p1.x}px, ${p1.y}px, 0)`;
      g2.style.transform = `translate3d(${p2.x}px, ${p2.y}px, 0)`;
      if (g3) g3.style.transform = `translate3d(${p3.x}px, ${p3.y}px, 0)`;
      requestAnimationFrame(tick);
    }
    tick();
  }

  // ============================================
  // 8. HEADER scroll detection
  // ============================================
  function initHeader() {
    const header = document.querySelector('[data-header]');
    if (!header) return;
    const update = () => header.setAttribute('data-scrolled', String(scrollY > 40));
    addEventListener('scroll', update, { passive: true });
    update();
  }

  // ============================================
  // 9. SMOOTH SCROLL TO ANCHORS (Lenis ou natif)
  // ============================================
  function initScrollTo() {
    document.querySelectorAll('[data-scroll-to]').forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = el.dataset.scrollTo;
        const node = document.querySelector(target);
        if (!node) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(node, { duration: 1.2 });
        else node.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // ============================================
  // BOOT
  // ============================================
  document.addEventListener('DOMContentLoaded', () => {
    initMagnetic();
    initGlows();
    initHeader();
    initLenis();
    initScrollTo();

    if (prefersReducedMotion) {
      document.body.classList.add('preloader-done', 'site-ready');
      const preloader = document.getElementById('preloader');
      if (preloader) preloader.style.display = 'none';
      onPreloaderDone();
    } else {
      runPreloader();
    }

    console.log('%cNovaBanque · Prestige loaded', 'color:#4F46FF; font-weight:600; padding:4px 10px; border:1px solid #4F46FF; border-radius:4px;');
  });
})();
