/* =====================================================
   NovaBanque — Prestige · main.js
   Preloader sacred geometry + Lenis + Text Mask + Pinning + Magnetic
   Curseur natif gardé (pas de cursor custom)
   ===================================================== */

(() => {
  'use strict';

  gsap.registerPlugin(ScrollTrigger);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  // ====================================================
  // 1. LENIS — Smooth Scrolling synchronisé GSAP
  // ====================================================
  let lenis;

  function initLenis() {
    if (prefersReducedMotion) return;
    lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
      wheelMultiplier: 1.05,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);
  }

  // ====================================================
  // 2. PRELOADER — sacred geometry + curtain raise
  // ====================================================
  function runPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) { onPreloaderDone(); return; }

    const counter = document.getElementById('preloader-counter');
    const progress = { val: 0 };

    if (counter) {
      gsap.to(progress, {
        val: 100,
        duration: 2.4,
        ease: 'power2.out',
        onUpdate: () => { counter.textContent = Math.floor(progress.val); }
      });
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        document.body.classList.add('preloader-done', 'site-ready');
        gsap.set(preloader, { display: 'none' });
        onPreloaderDone();
      }
    });

    // Étape A : rings apparaissent en fade-in + stroke draw stagger
    tl.to('.ring', { opacity: 1, duration: 0.4, stagger: 0.08 }, 0)
      .to('.ring', { strokeDashoffset: 0, duration: 1.4, stagger: 0.12, ease: 'power2.inOut' }, 0.1)

      // Étape B : rotation des rings (effet entrelaçage)
      .to('.r1', { rotation: 90, duration: 1.6, transformOrigin: 'center' }, 0.3)
      .to('.r2', { rotation: -60, duration: 1.6, transformOrigin: 'center' }, 0.4)
      .to('.r3', { rotation: 45, duration: 1.6, transformOrigin: 'center' }, 0.5)

      // Étape C : étoile centrale apparaît + rotation
      .to('.star', { opacity: 1, scale: 1, rotation: 360, duration: 1.2, transformOrigin: 'center' }, 0.8)

      // Étape D : logo "NovaBanque" fade-in
      .to('.preloader-logo', { opacity: 1, y: 0, duration: 0.8 }, 1.6)

      // Étape E : tout converge vers le centre et disparaît
      .to('.ring', { scale: 0, opacity: 0, duration: 0.6, transformOrigin: 'center', stagger: 0.03 }, 2.2)
      .to('.star', { scale: 1.4, opacity: 0, duration: 0.6, transformOrigin: 'center' }, 2.2)
      .to('.preloader-logo', { opacity: 0, scale: 0.95, duration: 0.4 }, 2.6)

      // Étape F : rideau noir se lève (translateY -100%)
      .to('.preloader', { yPercent: -100, duration: 1.0, ease: 'expo.inOut' }, 2.8);
  }

  function onPreloaderDone() {
    revealHero();
    initScrollAnimations();
  }

  // ====================================================
  // 3. HERO — Reveal lettre par lettre du wordmark
  // ====================================================
  function revealHero() {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    // Chaque .char span s'élève depuis 110%
    tl.to('.hero-wordmark .char span', {
      y: '0%',
      duration: 1.0,
      stagger: 0.04,
      ease: 'expo.out',
    }, 0);

    // Eyebrow + tagline fade up
    tl.fromTo('[data-anim="fade"]',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
      0.4
    );

    // Scroll cue
    tl.to('.hero-scroll-cue', { opacity: 1, duration: 0.6 }, 1.4);
  }

  // ====================================================
  // 4. SCROLL ANIMATIONS — Text mask + Pinning piliers
  // ====================================================
  function initScrollAnimations() {
    if (prefersReducedMotion) return;

    // --- A. TEXT MASK : titres .huge-mask et .line-inner ---
    document.querySelectorAll('.huge-mask').forEach((heading) => {
      const inners = heading.querySelectorAll('.line-inner');
      gsap.set(inners, { y: '110%' });
      ScrollTrigger.create({
        trigger: heading,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.to(inners, {
            y: '0%',
            duration: 1.1,
            stagger: 0.13,
            ease: 'expo.out',
          });
        }
      });
    });

    // --- B. PILIERS PINNED : 4 piliers qui s'enchaînent sur 400vh ---
    const pillarsSection = document.querySelector('.pillars-pinned');
    if (pillarsSection) {
      const pillars = pillarsSection.querySelectorAll('.pillar');
      const count = pillars.length;

      // Pour chaque pillar (sauf le premier), on l'anime de fade-in / fade-out
      // pendant que la section est pinnée
      gsap.set(pillars, { opacity: 0, y: 60 });
      gsap.set(pillars[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pillarsSection,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });

      // Cross-fade entre chaque pillar
      for (let i = 0; i < count - 1; i++) {
        const t = i / (count - 1);
        tl.to(pillars[i], { opacity: 0, y: -60, duration: 0.5, ease: 'power2.in' }, t)
          .fromTo(pillars[i + 1],
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            t + 0.1
          );
      }
    }

    // --- C. Teaser cards — apparition au scroll ---
    document.querySelectorAll('.teaser-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: i * 0.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: card, start: 'top 80%', once: true }
        }
      );
    });

    // --- D. Footer wordmark : fade-up massif ---
    const fw = document.querySelector('.footer-wordmark');
    if (fw) {
      gsap.fromTo(fw,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'expo.out',
          scrollTrigger: { trigger: fw, start: 'top 90%', once: true }
        }
      );
    }

    // Refresh ScrollTrigger après que tout soit calé
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }

  // ====================================================
  // 5. MAGNETIC BUTTONS (curseur natif gardé)
  //    Math : calcul distance curseur ↔ centre élément
  //    Lerp : interpolation fluide vers la position cible
  // ====================================================
  function initMagnetic() {
    if (isTouch || prefersReducedMotion) return;

    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      const pos = { x: 0, y: 0 };
      const target = { x: 0, y: 0 };
      const strength = 0.35;
      let rafId = null;

      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        target.x = (e.clientX - cx) * strength;
        target.y = (e.clientY - cy) * strength;
      });

      el.addEventListener('mouseleave', () => {
        target.x = 0;
        target.y = 0;
      });

      function tick() {
        pos.x += (target.x - pos.x) * 0.18;
        pos.y += (target.y - pos.y) * 0.18;
        // translate3d → force GPU
        el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        rafId = requestAnimationFrame(tick);
      }
      tick();
    });
  }

  // ====================================================
  // 6. HEADER scroll detection
  // ====================================================
  function initHeader() {
    const header = document.querySelector('[data-header]');
    if (!header) return;
    const update = () => header.setAttribute('data-scrolled', String(scrollY > 40));
    addEventListener('scroll', update, { passive: true });
    update();
  }

  // ====================================================
  // 7. SMOOTH SCROLL TO ANCHORS via Lenis
  // ====================================================
  function initScrollTo() {
    document.querySelectorAll('[data-scroll-to]').forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = el.dataset.scrollTo;
        const node = document.querySelector(target);
        if (!node) return;
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(node, { duration: 1.2 });
        } else {
          node.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ====================================================
  // BOOT
  // ====================================================
  document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initMagnetic();
    initHeader();
    initScrollTo();

    if (prefersReducedMotion) {
      document.body.classList.add('preloader-done', 'site-ready');
      const preloader = document.getElementById('preloader');
      if (preloader) preloader.style.display = 'none';
      // Force visibilité immédiate
      gsap.set('.hero-wordmark .char span', { y: '0%' });
      gsap.set('[data-anim="fade"]', { opacity: 1, y: 0 });
      gsap.set('.huge-mask .line-inner', { y: '0%' });
      gsap.set('.pillar', { opacity: 1 });
      gsap.set('.teaser-card', { opacity: 1, y: 0 });
      gsap.set('.footer-wordmark', { opacity: 1, y: 0 });
    } else {
      runPreloader();
    }

    console.log(
      '%cNovaBanque · Prestige loaded',
      'color:#4F46FF; font-weight:600; padding:4px 10px; border:1px solid #4F46FF; border-radius:4px;'
    );
  });
})();
