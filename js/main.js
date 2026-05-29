/* =====================================================
   NovaBanque — main.js
   Preloader sacred geometry · Lenis · Text mask · Pinning
   · Magnetic buttons · GSAP halos drift · curseur natif
   ===================================================== */

(() => {
  'use strict';

  // Enregistre ScrollTrigger uniquement si la lib est chargée — évite que les pages
  // qui ne l'incluent pas cassent l'init du reste du JS (scroll, Lenis, etc.).
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  // ====================================================
  // 1. LENIS — Smooth Scrolling synchronisé avec GSAP
  // ====================================================
  let lenis;

  function initLenis() {
    if (prefersReducedMotion) return;

    lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2.4,
      wheelMultiplier: 1.35,
      infinite: false,
    });

    // Recalcule la hauteur connue par Lenis si le DOM change (ScrollTrigger pin spacing, etc.)
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.addEventListener('refresh', () => lenis && lenis.resize && lenis.resize());
    }

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
    }
    gsap.ticker.lagSmoothing(0);
  }

  // ====================================================
  // 2. PRELOADER — géométrie sacrée + rideau
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

    tl.to('.ring', { opacity: 1, duration: 0.4, stagger: 0.08 }, 0)
      .to('.ring', { strokeDashoffset: 0, duration: 1.4, stagger: 0.12, ease: 'power2.inOut' }, 0.1)
      .to('.r1', { rotation: 90,  duration: 1.6, transformOrigin: 'center' }, 0.3)
      .to('.r2', { rotation: -60, duration: 1.6, transformOrigin: 'center' }, 0.4)
      .to('.r3', { rotation: 45,  duration: 1.6, transformOrigin: 'center' }, 0.5)
      .to('.star', { opacity: 1, scale: 1, rotation: 360, duration: 1.2, transformOrigin: 'center' }, 0.8)
      .to('.preloader-logo', { opacity: 1, y: 0, duration: 0.8 }, 1.6)
      .to('.ring', { scale: 0, opacity: 0, duration: 0.6, transformOrigin: 'center', stagger: 0.03 }, 2.2)
      .to('.star', { scale: 1.4, opacity: 0, duration: 0.6, transformOrigin: 'center' }, 2.2)
      .to('.preloader-logo', { opacity: 0, scale: 0.95, duration: 0.4 }, 2.6)
      .to('.preloader', { yPercent: -100, duration: 1.0, ease: 'expo.inOut' }, 2.8);
  }

  function onPreloaderDone() {
    // Garantit que les styles dépendant de .site-ready (header, etc.) s'appliquent
    // même sur les sub-pages qui n'ont pas de #preloader.
    if (!document.body.classList.contains('site-ready')) {
      document.body.classList.add('preloader-done', 'site-ready');
    }
    revealHero();
    initScrollAnimations();
    initHorizontalGallery();
    initGsapHalos();
  }

  // ====================================================
  // 3. HERO — Reveal lettre par lettre
  // ====================================================
  function revealHero() {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    tl.to('.hero-wordmark .char span', {
      y: '0%',
      duration: 1.0,
      stagger: 0.04,
      ease: 'expo.out',
    }, 0);

    tl.fromTo('[data-anim="fade"]',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
      0.4
    );

    tl.to('.hero-scroll-cue', { opacity: 1, duration: 0.6 }, 1.4);
  }

  // ====================================================
  // 4. SCROLL ANIMATIONS — Text mask + Pinning
  // ====================================================
  function initScrollAnimations() {
    if (prefersReducedMotion) return;
    if (typeof ScrollTrigger === 'undefined') return;

    // A. Text mask reveal pour .huge-mask
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

    // B. Piliers pinned — cross-fade strict (1 visible à la fois)
    const pillarsSection = document.querySelector('.pillars-pinned');
    if (pillarsSection) {
      const pillars = gsap.utils.toArray('.pillars-pinned .pillar');
      const count = pillars.length;

      // État initial : tous invisibles sauf le premier
      gsap.set(pillars, { opacity: 0, y: 40 });
      gsap.set(pillars[0], { opacity: 1, y: 0 });

      // Timeline scrubbed sur toute la hauteur du pin (400vh = 4 slots de 100vh)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pillarsSection,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
        }
      });

      // Slots disjoints : chaque transition occupe une fenêtre courte au début de chaque slot
      // Slot k (k=1..count-1) commence à progress k/count
      // Transition i→i+1 : fade out i pendant [k - 0.08, k], fade in i+1 pendant [k, k + 0.08]
      for (let i = 0; i < count - 1; i++) {
        const k = (i + 1) / count;          // boundary entre slot i et slot i+1
        const w = 0.5 / count;              // demi-largeur de la zone de transition
        tl.to(pillars[i], {
          opacity: 0, y: -40,
          duration: w,
          ease: 'power2.in',
        }, k - w)
        .fromTo(pillars[i + 1],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: w, ease: 'power2.out' },
          k
        );
      }
    }

    // C. Teaser cards reveal
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

    // D. Footer wordmark reveal
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

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }

  // ====================================================
  // 4b. HORIZONTAL GALLERY — pin + translateX au scroll
  // ====================================================
  function initHorizontalGallery() {
    if (prefersReducedMotion) return;
    if (typeof ScrollTrigger === 'undefined') return;

    const section = document.querySelector('.h-gallery');
    const pin = document.querySelector('.h-gallery-pin');
    const track = document.querySelector('.h-gallery-track');
    const cards = gsap.utils.toArray('.h-card');
    const fill = document.querySelector('.h-progress-fill');
    const num = document.getElementById('h-progress-num');

    if (!section || !track || !cards.length) return;

    // Mobile : pas de scroll horizontal
    if (window.matchMedia('(max-width: 968px)').matches) return;

    // Distance à parcourir = largeur du track - largeur de la fenêtre + padding
    const getDistance = () => track.scrollWidth - window.innerWidth;

    // Animation principale : on translate le track
    // end factor 0.7 → on convertit 1px de scroll en ~1.4px de translation horizontale.
    // Résultat : le pin ne dure que 70% de la distance réelle de la track → user atteint
    // le footer plus vite, et la traversée horizontale reste fluide grâce à scrub 0.3.
    const PIN_FACTOR = 0.7;
    const tween = gsap.to(track, {
      x: () => -getDistance(),
      ease: 'none',
      scrollTrigger: {
        trigger: pin,
        start: 'top top',
        end: () => `+=${getDistance() * PIN_FACTOR}`,
        pin: true,
        scrub: 0.3,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }
    });

    // Progress bar + counter synchronisés (même end factor que le pin principal)
    ScrollTrigger.create({
      trigger: pin,
      start: 'top top',
      end: () => `+=${getDistance() * PIN_FACTOR}`,
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        if (fill) fill.style.transform = `scaleX(${p})`;
        if (num) {
          const idx = Math.min(cards.length, Math.floor(p * cards.length) + 1);
          num.textContent = String(idx).padStart(2, '0');
        }
      }
    });

    // Glow border + parallax sur chaque carte au passage
    cards.forEach((card, i) => {
      // Active la carte quand elle est centrée dans le viewport horizontal
      ScrollTrigger.create({
        trigger: card,
        containerAnimation: tween,
        start: 'left 75%',
        end: 'right 25%',
        onToggle: (self) => card.classList.toggle('is-active', self.isActive),
      });

      // Parallax interne : le titre, le num et la desc bougent à vitesses différentes
      const titleEl = card.querySelector('.h-card-title');
      const numEl   = card.querySelector('.h-card-num');
      const descEl  = card.querySelector('.h-card-desc');
      const linkEl  = card.querySelector('.h-card-link');

      // Parallax doux (amplitude réduite pour éviter le clip du texte hors card)
      const mkParallax = (el, amp) => {
        if (!el) return;
        gsap.fromTo(el,
          { xPercent: amp },
          {
            xPercent: -amp,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            }
          }
        );
      };
      mkParallax(titleEl, 8);
      mkParallax(numEl, 5);
      mkParallax(descEl, 6);
      mkParallax(linkEl, 4);
    });

    // Active la première carte au démarrage
    if (cards[0]) cards[0].classList.add('is-active');
  }

  // ====================================================
  // 5. HALOS — drift diagonal animé par GSAP
  // ====================================================
  function initGsapHalos() {
    if (prefersReducedMotion) return;

    const ha = document.querySelector('.halo-a');
    if (ha) {
      gsap.to(ha, { x: 140, y: 80,  duration: 11, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    }
    const hb = document.querySelector('.halo-b');
    if (hb) {
      gsap.to(hb, { x: -120, y: -90, duration: 14, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    }
    const hc = document.querySelector('.halo-c');
    if (hc) {
      gsap.to(hc, { x: 80, y: -60,  duration: 18, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    }
  }

  // ====================================================
  // 6. MAGNETIC BUTTONS — DÉSACTIVÉ
  // Les boutons ne doivent plus bouger au survol. On clear tout transform
  // inline qui aurait pu rester avant de partir.
  // ====================================================
  function initMagnetic() {
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      el.style.transform = '';
    });
  }

  // ====================================================
  // 7. HEADER scroll detection
  // ====================================================
  function initHeader() {
    const header = document.querySelector('[data-header]');
    if (!header) return;
    const update = () => header.setAttribute('data-scrolled', String(scrollY > 40));
    addEventListener('scroll', update, { passive: true });
    update();
  }

  // ====================================================
  // 7b. MOBILE HAMBURGER — injecte le bouton et toggle le drawer
  // ====================================================
  function initMobileMenu() {
    const nav = document.querySelector('.site-header .nav');
    const links = nav && nav.querySelector('.nav-links');
    if (!nav || !links) {
      console.warn('[NovaBanque] initMobileMenu: nav ou .nav-links introuvable', { nav, links });
      return;
    }
    console.log('[NovaBanque] initMobileMenu: nav-links contient', links.children.length, 'enfants au boot');

    // Évite la double injection si le script tourne deux fois
    if (nav.querySelector('.nav-toggle')) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-toggle';
    btn.setAttribute('aria-label', 'Ouvrir le menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'primary-nav');
    btn.innerHTML = '<span class="bar b1"></span><span class="bar b2"></span><span class="bar b3"></span>';

    // ID nécessaire pour aria-controls
    if (!links.id) links.id = 'primary-nav';

    // Insère le bouton dans les actions (entre les boutons CTA pour les pousser à droite)
    const actions = nav.querySelector('.nav-actions');
    if (actions) actions.appendChild(btn);
    else nav.appendChild(btn);

    // Clone les CTA dans le drawer uniquement en mobile. Re-évalue sur resize
    // pour éviter le bug "CTA dupliqués en desktop" si la fenêtre est passée
    // par une largeur mobile puis re-agrandie.
    const MOBILE_MQ = window.matchMedia('(max-width: 820px)');
    const syncDrawerClones = () => {
      const existing = links.querySelector('.nav-drawer-cta');
      if (MOBILE_MQ.matches) {
        if (!existing && actions) {
          const cloneWrap = document.createElement('div');
          cloneWrap.className = 'nav-drawer-cta';
          actions.querySelectorAll('.btn').forEach((b) => {
            const c = b.cloneNode(true);
            c.removeAttribute('data-magnetic');
            cloneWrap.appendChild(c);
          });
          if (cloneWrap.children.length) links.appendChild(cloneWrap);
        }
      } else {
        if (existing) existing.remove();
      }
    };
    syncDrawerClones();
    if (MOBILE_MQ.addEventListener) MOBILE_MQ.addEventListener('change', syncDrawerClones);
    else if (MOBILE_MQ.addListener) MOBILE_MQ.addListener(syncDrawerClones);

    const close = () => {
      links.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Ouvrir le menu');
    };
    const open = () => {
      links.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Fermer le menu');
    };

    btn.addEventListener('click', () => {
      const isOpen = links.classList.contains('is-open');
      console.log('[NovaBanque] hamburger click → was open?', isOpen, '· enfants drawer:', links.children.length);
      isOpen ? close() : open();
    });

    // Ferme au clic sur un lien
    links.addEventListener('click', (e) => {
      if (e.target.closest('a')) close();
    });

    // Ferme au clic en dehors
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) close();
    });

    // Ferme avec Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    // Ferme si on repasse en desktop
    const mql = window.matchMedia('(min-width: 821px)');
    const onChange = () => { if (mql.matches) close(); };
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else if (mql.addListener) mql.addListener(onChange);
  }

  // ====================================================
  // 7c. COOKIE BANNER — RGPD-friendly, mémorise le choix
  // ====================================================
  function initCookieBanner() {
    const STORAGE_KEY = 'novabanque-cookie-consent';
    try {
      if (localStorage.getItem(STORAGE_KEY)) return; // déjà choisi
    } catch (e) { /* storage indisponible — on affiche quand même la bannière */ }

    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Consentement aux cookies');
    banner.innerHTML = `
      <p>
        <strong>Cookies.</strong>
        Nous utilisons uniquement des cookies strictement nécessaires et une mesure d'audience anonymisée hébergée en Suisse.
        <a href="mentions-legales.html#cookies">En savoir plus →</a>
      </p>
      <div class="cookie-actions">
        <button type="button" class="cookie-btn cookie-btn-reject" data-cookie="reject">Refuser</button>
        <button type="button" class="cookie-btn cookie-btn-accept" data-cookie="accept">Accepter</button>
      </div>
    `;

    document.body.appendChild(banner);

    // Anime l'apparition après un beat
    requestAnimationFrame(() => {
      setTimeout(() => banner.classList.add('is-visible'), 400);
    });

    const remove = (choice) => {
      try { localStorage.setItem(STORAGE_KEY, choice + ':' + Date.now()); } catch (e) {}
      banner.classList.remove('is-visible');
      setTimeout(() => banner.remove(), 500);
    };

    banner.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-cookie]');
      if (!btn) return;
      remove(btn.getAttribute('data-cookie'));
    });
  }

  // ====================================================
  // 8. SMOOTH SCROLL TO ANCHORS
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
    initMobileMenu();
    initScrollTo();
    initCookieBanner();

    if (prefersReducedMotion) {
      document.body.classList.add('preloader-done', 'site-ready');
      const preloader = document.getElementById('preloader');
      if (preloader) preloader.style.display = 'none';
      gsap.set('.hero-wordmark .char span', { y: '0%' });
      gsap.set('[data-anim="fade"]', { opacity: 1, y: 0 });
      gsap.set('.huge-mask .line-inner', { y: '0%' });
      gsap.set('.pillar', { opacity: 1 });
      gsap.set('.teaser-card', { opacity: 1, y: 0 });
      gsap.set('.footer-wordmark', { opacity: 1, y: 0 });
    } else {
      runPreloader();
    }

    // Recalcule toutes les positions ScrollTrigger une fois que les fonts/images sont chargées —
    // sinon la hauteur totale du document peut être mal estimée et le scroll "se bloque" avant
    // d'atteindre le footer.
    window.addEventListener('load', () => {
      if (typeof ScrollTrigger !== 'undefined') {
        setTimeout(() => ScrollTrigger.refresh(), 100);
      }
    });

    console.log(
      '%cNovaBanque · Prestige loaded',
      'color:#4F46FF; font-weight:600; padding:4px 10px; border:1px solid #4F46FF; border-radius:4px;'
    );
  });
})();
