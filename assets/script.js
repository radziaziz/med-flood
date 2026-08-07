/**
 * Medication Demand Forecasting Research Project — Client Script
 * Features: Light/Dark/System Theme Switching, Smooth Scroll, ScrollSpy, Fade-in Observer
 */

(function () {
  'use strict';

  // --- 1. THEME MANAGEMENT ---
  const STORAGE_KEY = 'medforecast_theme';
  const themeBtns = document.querySelectorAll('.theme-btn');
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'system';
  }

  function applyTheme(theme) {
    let effectiveTheme = theme;
    if (theme === 'system') {
      effectiveTheme = mediaQuery.matches ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-theme', effectiveTheme);

    // Update active button state
    themeBtns.forEach((btn) => {
      const btnTheme = btn.getAttribute('data-theme-set');
      if (btnTheme === theme) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  function setTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  }

  // Initialize Theme
  applyTheme(getSavedTheme());

  // Listen for Theme Switcher Clicks
  themeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTheme = btn.getAttribute('data-theme-set');
      if (targetTheme) {
        setTheme(targetTheme);
      }
    });
  });

  // Listen for System Preference Changes
  mediaQuery.addEventListener('change', () => {
    if (getSavedTheme() === 'system') {
      applyTheme('system');
    }
  });

  // --- 2. MOBILE NAVIGATION DRAWER ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when a nav link is clicked
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 3. SCROLL SPY & NAVIGATION HIGHLIGHTING ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.scrollY;
    const headerHeight = 80;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - headerHeight - 20;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // --- 4. FADE-IN INTERSECTION OBSERVER ---
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    fadeElements.forEach((el) => fadeObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    fadeElements.forEach((el) => el.classList.add('visible'));
  }
})();
