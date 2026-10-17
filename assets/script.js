/**
 * Medication Demand Forecasting Research Project — Client Script
 * Features: Light/Dark/System Theme Switching, Smooth Scroll, ScrollSpy, Fade-in Observer
 */

(function () {
  'use strict';

  // --- 1. DUAL LANGUAGE (EN / MS) MANAGEMENT ---
  const LANG_STORAGE_KEY = 'medforecast_lang';
  const langBtns = document.querySelectorAll('.lang-btn');

  const translations = {
    en: {
      nav_home: "Home",
      nav_research: "Research",
      nav_showcase: "Showcase",
      nav_resources: "Resources",
      nav_about: "About",

      hero_badge: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> Ongoing PhD Research • Pharmacoinformatics',
      hero_title: 'Forecasting Medication Demand <br><span class="text-gradient">During Flood Disasters</span>',
      hero_subtitle: "An ongoing PhD research project investigating forecasting approaches to support medication planning and disaster preparedness in Malaysian public healthcare facilities.",
      hero_btn_explore: "Explore Research",
      hero_btn_repo: "Public Repository",
      hero_hl_1: "Malaysian Public Healthcare",
      hero_hl_2: "Time-Series Forecasting",
      hero_hl_3: "Flood & Hydrological Information",

      res_title: "Research",
      res_subtitle: "A focused PhD study on forecasting medication utilisation during flood disasters.",
      res_prob: "<strong>The problem:</strong> Flood disasters can disrupt healthcare services and medicine supply, making medication planning more difficult.",
      res_study: "<strong>The research:</strong> This study investigates forecasting approaches for cardiovascular medication utilisation during flood disasters in Malaysian public healthcare facilities.",
      res_purpose: "<strong>The purpose:</strong> To explore how forecasting can support better medication planning and disaster preparedness.",

      ro1_tag: "Evidence",
      ro1_title: "Understanding Existing Approaches",
      ro1_desc: "Reviewing existing evidence on forecasting medication utilisation during disasters and the approaches used across healthcare settings.",

      ro2_tag: "Forecasting",
      ro2_title: "Developing Forecasting Approaches",
      ro2_desc: "Investigating machine learning and deep learning approaches for forecasting medication utilisation during flood events.",

      ro3_tag: "Validation",
      ro3_title: "Assessing Generalisability",
      ro3_desc: "Assessing how forecasting approaches perform when applied beyond the original development setting.",

      res_status: "<strong>Research status:</strong> Ongoing. Results and research materials will be released progressively as they become suitable for public dissemination.",

      showcase_title: "Showcase",
      showcase_subtitle: "Selected conferences, exhibitions and public engagement activities.",

      sc1_badge: "National Conference",
      sc1_date: "22 October 2026 • Hotel Crystal Crown, Kuala Lumpur",
      sc1_title: "Persidangan Pengurusan Bencana Kesihatan 2026",
      sc1_desc: "MOH Malaysia national disaster management conference presenting multi-horizon forecasting of cardiovascular medication utilisation during floods.",

      sc2_badge: "Scientific Conference",
      sc2_date: "13–14 August 2026 • Mercure Kuala Lumpur Glenmarie",
      sc2_title: "IPNACS-IPOPS Conference 2026",
      sc2_desc: "Presentation of research on forecasting models for medication planning during flood disasters.",

      sc3_badge: "Exhibition Showcase",
      sc3_date: "27 June 2026 • AEON Mall Shah Alam",
      sc3_title: "Planetary Health Awareness Expo 2026",
      sc3_desc: "Public engagement showcase featuring research communication materials and interactive tools related to medication preparedness during floods.",

      sc_btn: "Explore Event",

      resrc_title: "Resources",
      resrc_subtitle: "Selected materials and interactive resources released for academic and public engagement.",
      resrc1_badge: "Interactive Tool",
      resrc1_title: "Forecast Evaluation Dashboard",
      resrc1_desc: "An interactive demonstration for exploring forecasting performance and medication demand patterns.",
      resrc1_btn: "Launch Dashboard",

      resrc2_badge: "Educational Simulation",
      resrc2_title: "Disaster-Resilient Pharmacy Manager",
      resrc2_desc: "A scenario-based simulation introducing the challenges of medication inventory planning during flood disasters.",
      resrc2_btn: "Play Simulation",

      resrc3_badge: "Academic Posters",
      resrc3_title: "Research Posters Collection",
      resrc3_desc: "Browse and view research posters presented at scientific conferences and public exhibition showcases.",
      resrc3_btn: "View Posters",

      repo_badge: "Open Science Repository",
      repo_title: "Public GitHub Repository",
      repo_desc: "Selected public research materials and project artefacts are maintained in the project repository. Unpublished research, private development materials and research data are not included.",
      repo_cta_title: "Explore on GitHub",
      repo_cta_desc: "Browse public materials and project updates.",
      repo_cta_btn: "Visit Repository",

      about_title: "About the Research",
      about_subtitle: "A collaborative PhD research project involving academic and public healthcare perspectives.",
      team_role_lead: "Research Lead",
      team_affil_lead: "PhD Candidate<br>Faculty of Pharmacy<br>Universiti Teknologi MARA (UiTM)",
      team_role_sup1: "Principal Supervisor",
      team_affil_sup1: "Faculty of Pharmacy<br>Universiti Teknologi MARA (UiTM)",
      team_role_sup2: "Co-Supervisor",
      team_affil_sup2: "Faculty of Pharmacy<br>Universiti Teknologi MARA (UiTM)",
      team_role_sup3: "Co-Supervisor",
      team_affil_sup3: "Pharmacy Services Programme<br>Ministry of Health Malaysia (KKM)",

      contact_badge: "Get in Touch",
      contact_title: "Interested in the Research?",
      contact_desc: "For research enquiries, academic discussion or potential collaboration, please get in touch.",
      contact_box_title: "Contact Me",
      contact_box_desc: "For research enquiries and academic discussion.",
      contact_box_btn: "Email Me",

      footer_brand_title: "Medication Demand Forecasting",
      footer_brand_desc: "An ongoing PhD research project investigating forecasting approaches for cardiovascular medication utilisation during flood disasters in Malaysian public healthcare facilities.",
      footer_affil: "<strong>Faculty of Pharmacy</strong>, Universiti Teknologi MARA (UiTM)<br><strong>Pharmacy Services Programme</strong>, Ministry of Health Malaysia (KKM)",
      footer_nav_title: "Navigation",
      footer_copy: "&copy; 2026 Radzi Aziz. Research materials and website content are protected by copyright.<br>Code released under the MIT License.",
      footer_updated: "Last updated: October 2026",

      // Poster page & subpages
      posters_title: "Research Posters Collection",
      posters_subtitle: "Official academic and scientific posters presented at international conferences and public exhibition showcases.",
      posters_back: "← Back to Overview",
      posters_open_btn: "Open Poster (PDF) ↗"
    },
    ms: {
      nav_home: "Utama",
      nav_research: "Penyelidikan",
      nav_showcase: "Pameran",
      nav_resources: "Sumber",
      nav_about: "Perihal",

      hero_badge: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> Penyelidikan PhD Sedang Berjalan • Farmakoinformatik',
      hero_title: 'Peramalan Permintaan Ubat <br><span class="text-gradient">Semasa Bencana Banjir</span>',
      hero_subtitle: "Projek penyelidikan PhD yang mengkaji pendekatan peramalan bagi menyokong perancangan bekalan ubat dan kesiapsiagaan bencana di fasiliti kesihatan awam Malaysia.",
      hero_btn_explore: "Terokai Penyelidikan",
      hero_btn_repo: "Repositori Awam",
      hero_hl_1: "Penjagaan Kesihatan Awam Malaysia",
      hero_hl_2: "Peramalan Siri Masa",
      hero_hl_3: "Maklumat Banjir & Hidrologi",

      res_title: "Penyelidikan",
      res_subtitle: "Kajian PhD memfokuskan peramalan penggunaan ubat semasa bencana banjir.",
      res_prob: "<strong>Isu & Masalah:</strong> Bencana banjir boleh mengganggu perkhidmatan kesihatan dan rantaian bekalan ubat, merumitkan perancangan bekalan ubat.",
      res_study: "<strong>Kajian Penyelidikan:</strong> Kajian ini mengkaji pendekatan peramalan penggunaan ubat kardiovaskular semasa bencana banjir di fasiliti penjagaan kesihatan awam Malaysia.",
      res_purpose: "<strong>Tujuan:</strong> Meneroka bagaimana peramalan dapat menyokong perancangan ubat dan kesiapsiagaan bencana yang lebih berkesan.",

      ro1_tag: "Bukti",
      ro1_title: "Memahami Pendekatan Sedia Ada",
      ro1_desc: "Menilai bukti sedia ada berkaitan peramalan penggunaan ubat semasa bencana serta kaedah yang digunakan dalam pelbagai persekitaran kesihatan.",

      ro2_tag: "Peramalan",
      ro2_title: "Membangunkan Model Peramalan",
      ro2_desc: "Mengkaji model pembelajaran mesin dan pembelajaran mendalam bagi meramal penggunaan ubat semasa kejadian bencana banjir.",

      ro3_tag: "Pengesahan",
      ro3_title: "Menilai Kebolehgeneralisasian",
      ro3_desc: "Menilai prestasi pendekatan peramalan apabila diuji di luar persekitaran pembangunan asal.",

      res_status: "<strong>Status penyelidikan:</strong> Sedang berjalan. Hasil kajian dan bahan penyelidikan akan diterbitkan secara berperingkat apabila sesuai untuk penyebaran umum.",

      showcase_title: "Pameran & Acara",
      showcase_subtitle: "Persidangan terpilih, pameran dan aktiviti libat urus awam.",

      sc1_badge: "Persidangan Kebangsaan",
      sc1_date: "22 Oktober 2026 • Hotel Crystal Crown, Kuala Lumpur",
      sc1_title: "Persidangan Pengurusan Bencana Kesihatan 2026",
      sc1_desc: "Persidangan pengurusan bencana kesihatan peringkat KKM yang membentangkan peramalan multi-horizon penggunaan ubat kardiovaskular semasa banjir.",

      sc2_badge: "Persidangan Saintifik",
      sc2_date: "13–14 Ogos 2026 • Mercure Kuala Lumpur Glenmarie",
      sc2_title: "Persidangan IPNACS-IPOPS 2026",
      sc2_desc: "Pembentangan kajian berkaitan model peramalan bagi perancangan ubat semasa bencana banjir.",

      sc3_badge: "Pameran Ekspo",
      sc3_date: "27 Jun 2026 • AEON Mall Shah Alam",
      sc3_title: "Ekspo Kesedaran Kesihatan Planet 2026",
      sc3_desc: "Pameran libat urus awam yang mengetengahkan bahan komunikasi penyelidikan dan alat interaktif berkaitan kesiapsiagaan ubat semasa banjir.",

      sc_btn: "Terokai Acara",

      resrc_title: "Sumber",
      resrc_subtitle: "Bahan terpilih dan sumber interaktif yang diterbitkan untuk libat urus akademik dan awam.",
      resrc1_badge: "Alat Interaktif",
      resrc1_title: "Papan Pemuka Penilaian Ramalan",
      resrc1_desc: "Demonstrasi interaktif untuk meneroka prestasi peramalan dan pola permintaan ubat.",
      resrc1_btn: "Buka Papan Pemuka",

      resrc2_badge: "Simulasi Pendidikan",
      resrc2_title: "Pengurus Farmasi Berdaya Tahan Bencana",
      resrc2_desc: "Simulasi berasaskan senario bagi mendalami cabaran pengurusan inventori ubat semasa bencana banjir.",
      resrc2_btn: "Main Simulasi",

      resrc3_badge: "Poster Akademik",
      resrc3_title: "Koleksi Poster Penyelidikan",
      resrc3_desc: "Lihat dan semak poster penyelidikan yang dibentangkan di persidangan saintifik dan pameran awam.",
      resrc3_btn: "Lihat Poster",

      repo_badge: "Repositori Sains Terbuka",
      repo_title: "Repositori Awam GitHub",
      repo_desc: "Bahan penyelidikan awam terpilih dan artifak projek diselenggara di repositori projek. Penyelidikan belum terbit, kod pembangunan peribadi dan data penyelidikan mentah tidak disertakan.",
      repo_cta_title: "Terokai di GitHub",
      repo_cta_desc: "Semak bahan awam dan perkembangan projek terkini.",
      repo_cta_btn: "Layari Repositori",

      about_title: "Perihal Penyelidikan",
      about_subtitle: "Projek penyelidikan PhD kolaboratif yang menggabungkan perspektif akademik dan penjagaan kesihatan awam.",
      team_role_lead: "Penyelidik Utama",
      team_affil_lead: "Calon PhD<br>Fakulti Farmasi<br>Universiti Teknologi MARA (UiTM)",
      team_role_sup1: "Penyelia Utama",
      team_affil_sup1: "Fakulti Farmasi<br>Universiti Teknologi MARA (UiTM)",
      team_role_sup2: "Penyelia Bersama",
      team_affil_sup2: "Fakulti Farmasi<br>Universiti Teknologi MARA (UiTM)",
      team_role_sup3: "Penyelia Bersama",
      team_affil_sup3: "Program Perkhidmatan Farmasi<br>Kementerian Kesihatan Malaysia (KKM)",

      contact_badge: "Hubungi Kami",
      contact_title: "Berminat dengan Penyelidikan Ini?",
      contact_desc: "Untuk sebarang pertanyaan penyelidikan, perbincangan akademik atau potensi kolaborasi, sila hubungi kami.",
      contact_box_title: "Hubungi Saya",
      contact_box_desc: "Untuk pertanyaan penyelidikan dan perbincangan akademik.",
      contact_box_btn: "Emel Saya",

      footer_brand_title: "Peramalan Permintaan Ubat",
      footer_brand_desc: "Projek penyelidikan PhD yang mengkaji pendekatan peramalan bagi penggunaan ubat kardiovaskular semasa bencana banjir di fasiliti penjagaan kesihatan awam Malaysia.",
      footer_affil: "<strong>Fakulti Farmasi</strong>, Universiti Teknologi MARA (UiTM)<br><strong>Program Perkhidmatan Farmasi</strong>, Kementerian Kesihatan Malaysia (KKM)",
      footer_nav_title: "Navigasi",
      footer_copy: "&copy; 2026 Radzi Aziz. Bahan penyelidikan dan kandungan laman web dilindungi hak cipta.<br>Kod dilepaskan di bawah Lesen MIT.",
      footer_updated: "Terakhir dikemas kini: Oktober 2026",

      // Poster page & subpages
      posters_title: "Koleksi Poster Penyelidikan",
      posters_subtitle: "Poster akademik dan saintifik rasmi yang dibentangkan di persidangan antarabangsa dan pameran awam.",
      posters_back: "← Kembali ke Laman Utama",
      posters_open_btn: "Buka Poster (PDF) ↗"
    }
  };

  function getSavedLang() {
    return localStorage.getItem(LANG_STORAGE_KEY) || 'en';
  }

  function applyLanguage(lang) {
    const activeLang = (lang === 'ms') ? 'ms' : 'en';
    document.documentElement.setAttribute('lang', activeLang);

    // Update active button state
    langBtns.forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang-set');
      if (btnLang === activeLang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Translate DOM elements with data-i18n
    const transDict = translations[activeLang];
    if (transDict) {
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (transDict[key] !== undefined) {
          const val = transDict[key];
          if (val.includes('<')) {
            el.innerHTML = val;
          } else {
            el.textContent = val;
          }
        }
      });
    }
  }

  function setLanguage(lang) {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  // Initialize Language (default is en)
  applyLanguage(getSavedLang());

  // Listen for Language Switcher Clicks
  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang-set');
      if (targetLang) {
        setLanguage(targetLang);
      }
    });
  });

  // --- 2. THEME MANAGEMENT ---
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
          link.removeAttribute('aria-current');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
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
