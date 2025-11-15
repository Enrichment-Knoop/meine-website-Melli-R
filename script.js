/* --------------------------------------------------------------
   script.js – Navigation, Mobile‑Menu, Scroll‑Highlight,
               Hero‑Fade‑Out & Content‑Einblenden
   -------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    /* ---- Elemente ---- */
    const navbar          = document.getElementById('navbar');
    const mobileBtn       = document.getElementById('mobile-menu-button');
    const mobileMenu      = document.getElementById('mobile-menu');
    const navLinks        = document.querySelectorAll('.nav-link');
    const dropdownLinks   = document.querySelectorAll('.dropdown-link');
    const mobileNavLinks  = document.querySelectorAll('.mobile-link');
    const sections        = document.querySelectorAll('section');
    const heroSection     = document.querySelector('.hero');
    const heroVideo       = document.getElementById('hero-video');

    /* ---- Mobile‑Menu öffnen / schließen ---- */
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.classList.remove('active');
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });

    /* ---- Scroll‑Behaviours ---- */
    window.addEventListener('scroll', () => {
        /* Navbar‑Hintergrund */
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        /* Hero‑Fade‑Out & Content‑Einblenden */
        if (heroSection && heroVideo) {
            const triggerPoint = window.innerHeight * 0.6; // 60 % der Viewport‑Höhe
            if (window.scrollY > triggerPoint) {
                heroSection.classList.add('show-content');
            } else {
                heroSection.classList.remove('show-content');
            }
        }

        /* Aktiven Abschnitt im Menü markieren */
        highlightCurrentSection();
    });

    /* ---- Smooth‑Scroll für alle Links ---- */
    const allLinks = [...navLinks, ...dropdownLinks, ...mobileNavLinks];
    allLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target   = document.querySelector(targetId);
            if (target) {
                const offset = target.offsetTop - 70; // Navbar‑Höhe
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    /* ---- Aktiven Abschnitt im Menü markieren ---- */
    function highlightCurrentSection() {
        let currentId = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 80;
            if (window.scrollY >= top) currentId = sec.id;
        });

        navLinks.forEach(l =>
            l.classList.toggle('active', l.getAttribute('href') === `#${currentId}`)
        );
        dropdownLinks.forEach(l =>
            l.classList.toggle('active', l.getAttribute('href') === `#${currentId}`)
        );
        mobileNavLinks.forEach(l =>
            l.classList.toggle('active', l.getAttribute('href') === `#${currentId}`)
        );
    }

    // Initiales Highlight beim Laden
    highlightCurrentSection();
});
