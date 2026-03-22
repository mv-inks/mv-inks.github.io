/* ============================================
   mv·inks — Main JavaScript
   Particles, Cursor Glow, Typing, Tilt,
   Loading Screen, Scroll Animations
   ============================================ */

(function () {
  'use strict';

  // --- Loading Screen ---
  const loadingScreen = document.querySelector('.loading-screen');
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loadingScreen) loadingScreen.classList.add('hidden');
    }, 800);
  });

  // --- Scroll Progress Bar ---
  const scrollProgress = document.querySelector('.scroll-progress');
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0 && scrollProgress) {
      scrollProgress.style.width = (scrollTop / docHeight) * 100 + '%';
    }
  }

  // --- Navigation scroll effect ---
  const nav = document.querySelector('.nav');
  function updateNav() {
    if (!nav) return;
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  // Combined scroll listener
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateNav();
  }, { passive: true });

  // --- Mobile Menu ---
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Cursor Glow ---
  const cursorGlow = document.querySelector('.cursor-glow');
  if (cursorGlow && window.matchMedia('(hover: hover)').matches) {
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
    });
    function animateCursor() {
      cx += (mx - cx) * 0.1;
      cy += (my - cy) * 0.1;
      cursorGlow.style.left = cx + 'px';
      cursorGlow.style.top = cy + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  }

  // --- Particle Canvas ---
  const heroCanvas = document.getElementById('hero-particles');
  if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 60;

    function resizeCanvas() {
      const hero = heroCanvas.closest('.hero');
      if (!hero) return;
      heroCanvas.width = hero.offsetWidth;
      heroCanvas.height = hero.offsetHeight;
    }

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * heroCanvas.width;
        this.y = Math.random() * heroCanvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > heroCanvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > heroCanvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(80, 129, 184, ${this.opacity})`;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    }

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(80, 129, 184, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      drawLines();
      requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    initParticles();
    animateParticles();
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
  }

  // --- Typing Effect ---
  const typingEl = document.querySelector('.typing-text');
  if (typingEl) {
    const words = ['Mandala', 'Geometry', 'Dotwork', 'Realistic', 'Blackwork'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const current = words[wordIndex];

      if (isDeleting) {
        charIndex--;
        typingEl.textContent = current.substring(0, charIndex);
      } else {
        charIndex++;
        typingEl.textContent = current.substring(0, charIndex);
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
      }

      setTimeout(typeLoop, speed);
    }

    setTimeout(typeLoop, 1200);
  }

  // --- IntersectionObserver Fade-In ---
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(el => observer.observe(el));
  }

  // --- 3D Tilt Effect on Cards ---
  const tiltCards = document.querySelectorAll('.portfolio-card, .glass-card[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
    });
  });

  // --- Magnetic Buttons ---
  const magneticBtns = document.querySelectorAll('.btn-primary, .btn-magnetic');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(i => {
        i.classList.remove('active');
        const a = i.querySelector('.faq-answer');
        if (a) a.style.maxHeight = null;
      });

      // Open clicked if it wasn't active
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // --- Booking Form: Conditional Month Dropdown ---
  const zeitraumRadios = document.querySelectorAll('input[name="zeitraum"]');
  const monthWrapper = document.querySelector('.month-select-wrapper');
  if (zeitraumRadios.length && monthWrapper) {
    zeitraumRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (radio.value === 'wunschmonat' && radio.checked) {
          monthWrapper.classList.add('visible');
        } else {
          monthWrapper.classList.remove('visible');
        }
      });
    });
  }

  // --- Portfolio Tabs (Meine Arbeiten / Wanna Do's) ---
  var portfolioTabs = document.querySelectorAll('.portfolio-tab');
  portfolioTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      portfolioTabs.forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var target = tab.dataset.tab;
      document.querySelectorAll('.portfolio-tab-content').forEach(function(content) {
        content.classList.remove('active');
      });
      var targetEl = document.getElementById('tab-' + target);
      if (targetEl) targetEl.classList.add('active');
      // Scroll to top of section
      var section = document.getElementById('main-content');
      if (section) window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
    });
  });

  // --- Portfolio Filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const masonryItems = document.querySelectorAll('.masonry-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      masonryItems.forEach(item => {
        const categories = item.dataset.category ? item.dataset.category.split(' ') : [];
        if (filter === 'all' || categories.includes(filter)) {
          item.style.display = '';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // --- Masonry Item Touch Toggle (Mobile) ---
  if ('ontouchstart' in window) {
    var activeItem = null;
    document.querySelectorAll('.masonry-item').forEach(function(item) {
      item.addEventListener('click', function(e) {
        if (activeItem === item) {
          // Second tap: follow the link if tapped on CTA
          if (e.target.closest('.masonry-cta')) return;
          item.classList.remove('active');
          activeItem = null;
        } else {
          if (activeItem) activeItem.classList.remove('active');
          item.classList.add('active');
          activeItem = item;
          e.preventDefault();
        }
      });
    });
    // Close overlay when tapping outside
    document.addEventListener('click', function(e) {
      if (activeItem && !e.target.closest('.masonry-item')) {
        activeItem.classList.remove('active');
        activeItem = null;
      }
    });
  }

  // --- Portfolio Slider ---
  const portfolioTrack = document.querySelector('.portfolio-track');
  const portfolioPrev = document.querySelector('.portfolio-prev');
  const portfolioNext = document.querySelector('.portfolio-next');
  const portfolioDotsContainer = document.querySelector('.portfolio-dots');

  if (portfolioTrack && portfolioPrev && portfolioNext && portfolioDotsContainer) {
    const pCards = portfolioTrack.querySelectorAll('.portfolio-card');
    let pCurrent = 0;

    function pVisibleCount() {
      return window.innerWidth <= 768 ? 1 : 2;
    }

    function pTotalSlides() {
      return Math.ceil(pCards.length / pVisibleCount());
    }

    function pBuildDots() {
      portfolioDotsContainer.innerHTML = '';
      const total = pTotalSlides();
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'portfolio-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Arbeit ' + (i + 1));
        dot.addEventListener('click', () => pGoToSlide(i));
        portfolioDotsContainer.appendChild(dot);
      }
    }

    function pUpdateDots() {
      portfolioDotsContainer.querySelectorAll('.portfolio-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === pCurrent);
      });
    }

    function pGoToSlide(index) {
      const total = pTotalSlides();
      pCurrent = Math.max(0, Math.min(index, total - 1));
      const card = pCards[pCurrent * pVisibleCount()];
      if (card) {
        portfolioTrack.scrollTo({
          left: card.offsetLeft - portfolioTrack.offsetLeft,
          behavior: 'smooth'
        });
      }
      pUpdateDots();
    }

    portfolioPrev.addEventListener('click', () => pGoToSlide(pCurrent - 1));
    portfolioNext.addEventListener('click', () => pGoToSlide(pCurrent + 1));

    let pScrollTimeout;
    portfolioTrack.addEventListener('scroll', () => {
      clearTimeout(pScrollTimeout);
      pScrollTimeout = setTimeout(() => {
        const scrollLeft = portfolioTrack.scrollLeft;
        const cardWidth = pCards[0].offsetWidth + 24;
        const visible = pVisibleCount();
        pCurrent = Math.round(scrollLeft / (cardWidth * visible));
        pUpdateDots();
      }, 100);
    }, { passive: true });

    pBuildDots();
    window.addEventListener('resize', () => {
      pBuildDots();
      pGoToSlide(0);
    });
  }

  // --- Testimonials Slider ---
  const testimonialsTrack = document.querySelector('.testimonials-track');
  const prevBtn = document.querySelector('.testimonials-prev');
  const nextBtn = document.querySelector('.testimonials-next');
  const dotsContainer = document.querySelector('.testimonials-dots');

  if (testimonialsTrack && prevBtn && nextBtn && dotsContainer) {
    const cards = testimonialsTrack.querySelectorAll('.testimonial-card');
    let currentSlide = 0;

    function getVisibleCount() {
      return window.innerWidth <= 768 ? 1 : 2;
    }

    function getTotalSlides() {
      return Math.ceil(cards.length / getVisibleCount());
    }

    function buildDots() {
      dotsContainer.innerHTML = '';
      const total = getTotalSlides();
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'testimonials-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Bewertung ' + (i + 1));
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    }

    function updateDots() {
      dotsContainer.querySelectorAll('.testimonials-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    function goToSlide(index) {
      const total = getTotalSlides();
      currentSlide = Math.max(0, Math.min(index, total - 1));
      const card = cards[currentSlide * getVisibleCount()];
      if (card) {
        testimonialsTrack.scrollTo({
          left: card.offsetLeft - testimonialsTrack.offsetLeft,
          behavior: 'smooth'
        });
      }
      updateDots();
    }

    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Sync dots on manual scroll/swipe
    let scrollTimeout;
    testimonialsTrack.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = testimonialsTrack.scrollLeft;
        const cardWidth = cards[0].offsetWidth + 24; // gap
        const visible = getVisibleCount();
        currentSlide = Math.round(scrollLeft / (cardWidth * visible));
        updateDots();
      }, 100);
    }, { passive: true });

    buildDots();
    window.addEventListener('resize', () => {
      buildDots();
      goToSlide(0);
    });
  }

  // --- Active Nav Link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });


  // Cookie consent is now handled by /js/cookie-consent.js

})();
