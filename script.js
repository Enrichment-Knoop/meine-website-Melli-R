/* --------------------------------------------------------------
   script.js – Interaktive Elemente für die Seite
   -------------------------------------------------------------- */

/* 1. Banner‑Slider (nur mit Platzhalter‑Bildern) */
const banner = document.querySelector('.banner-image');

const bannerImages = [
    'https://via.placeholder.com/1200x400?text=Banner+1',
    'https://via.placeholder.com/1200x400?text=Banner+2',
    'https://via.placeholder.com/1200x400?text=Banner+3'
];

let currentIndex = 0;

banner.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % bannerImages.length;
    banner.src = bannerImages[currentIndex];
});

/* 2. Titel‑Farbwechsel bei Mouse‑Over */
const title = document.querySelector('.site-title');

title.addEventListener('mouseenter', () => {
    title.style.color = '#ffb703';   // Akzent‑Gelb
});

title.addEventListener('mouseleave', () => {
    title.style.color = 'white';
});
