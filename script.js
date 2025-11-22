/* --------------------------------------------------------------
   script.js – Navigation, Mobile‑Menu & Scroll‑Logik
   -------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    /* ---- Elemente ---- */
    const navbar          = document.getElementById('navbar');
    const mobileBtn       = document.getElementById('mobile-menu-button');
    const mobileMenu      = document.getElementById('mobile-menu');
    const navLinks        = document.querySelectorAll('.nav-link');
    const dropdownLinks   = document.querySelectorAll('.dropdown-link');
    const mobileNavLinks  = document.querySelectorAll('.mobile-link');
    const heroSection     = document.getElementById('hero');
    const placeholderDiv   = document.getElementById('placeholder');

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

    /* ---- Scroll‑Verhalten ---- */
    window.addEventListener('scroll', () => {
        /* 1️⃣ Navbar‑Hintergrund bei Scroll */
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        /* 2️⃣ Video ausblenden / Platzhalter‑Text einblenden */
        const trigger = window.innerHeight * 0.6; // 60 % des Viewports
        if (window.scrollY > trigger) {
            heroSection.classList.add('hidden');          // Video verschwindet
            placeholderDiv.classList.remove('hidden');    // Text erscheint
            placeholderDiv.classList.add('visible');       // Text wird sichtbar
        } else {
            heroSection.classList.remove('hidden');
            placeholderDiv.classList.remove('visible');    // Text wird unsichtbar
            placeholderDiv.classList.add('hidden');        // Text wird ausgeblendet
        }

        /* 3️⃣ Aktiven Menü‑Eintrag markieren */
        highlightCurrentSection();
    });

    /* ---- Smooth‑Scroll für interne Links ---- */
    const allLinks = [...navLinks, ...dropdownLinks, ...mobileNavLinks];
    allLinks.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = target.offsetTop - 70; // Navbar‑Höhe
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
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

    // Beim Laden gleich das korrekte Highlight setzen
    highlightCurrentSection();
});
