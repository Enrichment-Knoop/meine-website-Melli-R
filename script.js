/* --------------------------------------------------------------
   script.js – Interaktive Funktionen
   -------------------------------------------------------------- */

/* ------- Mobile‑Menu öffnen / schließen ------- */
const mobileBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
});

/* ------- Hero‑Slider (falls mehrere Bilder) ------- */
let current = 1;
const total = 2; // Anzahl der Bilder im Slider (hier 2)

function switchHero() {
    const img1 = document.getElementById('hero-img-1');
    const img2 = document.getElementById('hero-img-2');

    if (current === 1) {
        img1.classList.remove('visible');
        img2.classList.add('visible');
        current = 2;
    } else {
        img2.classList.remove('visible');
        img1.classList.add('visible');
        current = 1;
    }
}

/* Optional: automatischer Wechsel alle 6 Sekunden */
setInterval(switchHero, 6000);

/* ------- Scroll‑to‑Top‑Button ------- */
document.addEventListener('DOMContentLoaded', function () {
    const topBtn = document.getElementById('topBtn');

    // Sichtbarkeit steuern
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            topBtn.classList.add('show');
        } else {
            topBtn.classList.remove('show');
        }
    });

    // Klick → sanft nach oben scrollen
    topBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
