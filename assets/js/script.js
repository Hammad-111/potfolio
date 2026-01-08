// --- Global Selectors ---
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');

// --- Initialize Lenis (Smooth Scrolling) - Desktop Only ---
// Disable on mobile for better native scroll performance
const isMobile = window.innerWidth < 768;
let lenis = null;

if (!isMobile) {
    lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        infinite: false,
    });

    // Sync Lenis with GSAP & ScrollTrigger
    lenis.on('scroll', (e) => {
        ScrollTrigger.update();

        // Header Glass Effect
        if (header) {
            if (e.scroll > 50) {
                header.classList.add('glass-effect');
            } else {
                header.classList.remove('glass-effect');
            }
        }

        // Scroll Progress Bar
        const scrollBar = document.getElementById('scroll-progress');
        if (scrollBar) {
            const scrolled = (e.progress * 100);
            scrollBar.style.width = scrolled + "%";
        }
    });

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
} else {
    // Mobile: Use native scroll with manual header and progress updates
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Header Glass Effect
        if (header) {
            if (scrollY > 50) {
                header.classList.add('glass-effect');
            } else {
                header.classList.remove('glass-effect');
            }
        }

        // Scroll Progress Bar
        const scrollBar = document.getElementById('scroll-progress');
        if (scrollBar) {
            const scrolled = (scrollY / docHeight) * 100;
            scrollBar.style.width = scrolled + "%";
        }

        ScrollTrigger.update();
    });
}

// GSAP ScrollTrigger Configuration for Chrome Stabilization
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);
ScrollTrigger.config({ limitCallbacks: true });

// --- Heavy Library Initialization (Deferred for Smooth Splash) ---
const initHeavyLibraries = () => {
    // Initialize Typed.js
    if (document.getElementById('typed-output')) {
        new Typed('#typed-output', {
            strings: ['Hammad Javed', 'Full-Stack Developer', 'Mobile App Developer', 'MERN Stack Expert'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 1500
        });
    }

    // Initialize VanillaTilt
    VanillaTilt.init(document.querySelectorAll(".hero-card, .project-card, .certificate-card, .experience-card, .contact-card-3d"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02
    });

    // Initialize Particles.js - Optimized
    if (window.particlesJS && document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 40, "density": { "enable": true, "value_area": 800 } }, // Reduced from 80
                "color": { "value": "#3b82f6" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#3b82f6", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }
};

// Start background initializations after splash is already running
setTimeout(initHeavyLibraries, 200);

// --- All Skills Data ---
const iconMappings = {
    'react': `<svg viewBox="0 0 113.3 102.3" fill="#61DAFB"><g><path d="M111.7,46.3c-2.1-3.6-5.8-5.8-9.9-5.8c-1.4,0-2.8,0.3-4.1,0.8c-5.7-8.3-15.3-13.3-25.9-13.3c-5.1,0-10,1.2-14.4,3.3c-1.3-3.4-4.5-5.8-8.3-5.8c-2.3,0-4.5,0.9-6.2,2.4c-6.2-6.5-15.1-10.4-24.9-10.4C8.9,17.9,0,26.8,0,38.9c0,2.9,0.6,5.8,1.6,8.4c-3.1,1.8-5,5.1-5,8.8c0,5.5,4.5,10,10,10c3.9,0,7.3-2.2,8.9-5.5c4.1,4.1,9.4,6.7,15.1,7.2c-0.2,1.3-0.3,2.6-0.3,3.9c0,8.8,3.9,16.9,10.4,22.4c1.8,1.5,4,2.4,6.2,2.4c3.9,0,7.2-2.4,8.4-5.8c4.4,2.2,9.3,3.3,14.4,3.3c10.6,0,20.2-5,25.9-13.3c1.3,0.5,2.7,0.8,4.1,0.8c4.1,0,7.8-2.2,9.9-5.8c3.6,2.1,7.8,3.3,12.3,3.3c6.9,0,12.4-5.6,12.4-12.4C124.1,51.8,118.6,46.3,111.7,46.3z M56.6,17.9c12.2,0,22.1,9.9,22.1,22.1c0,12.2-9.9,22.1-22.1,22.1s-22.1-9.9-22.1-22.1C34.6,27.8,44.5,17.9,56.6,17.9z M12.4,51.1c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4s2.4,1.1,2.4,2.4C14.8,50,13.7,51.1,12.4,51.1z M34,81.8c-4.6,0-8.4-3.8-8.4-8.4c0-4.6,3.8-8.4,8.4-8.4s8.4,3.8,8.4,8.4C42.4,78,38.6,81.8,34,81.8z M56.6,90.3c-10.6,0-19.1-8.6-19.1-19.1c0-10.6,8.6-19.1,19.1-19.1s19.1,8.6,19.1,19.1C75.8,81.7,67.2,90.3,56.6,90.3z M100.1,64.4c-4.6,0-8.4-3.8-8.4-8.4c0-4.6,3.8-8.4,8.4-8.4s8.4,3.8,8.4,8.4C108.5,60.6,104.7,64.4,100.1,64.4z M111.7,60.6c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4s2.4,1.1,2.4,2.4C114.1,59.5,113,60.6,111.7,60.6z"></path></g></svg>`,
    'nextjs': `<svg viewBox="0 0 128 128" fill="currentColor" class="text-white"><path d="M64 128C99.346 128 128 99.346 128 64C128 28.654 99.346 0 64 0C28.654 0 0 28.654 0 64C0 99.346 28.654 128 64 128Z"></path><path fill="#000" d="M101.42 36.42L64 94.84L26.58 36.42H44.75V31.5H83.25V36.42H101.42Z"></path></svg>`,
    'nodejs': `<svg viewBox="0 0 24 24" fill="currentColor" class="text-green-500"><path d="M20.2,14.5l-2.2-1.3l-1.3-0.7v-2.3c0-0.7,0-1.3,0-1.3c0-0.7-0.1-1.3-0.4-1.8c-0.3-0.5-0.8-0.9-1.4-1.1c-0.6-0.2-1.3-0.2-2,0.1c-0.7,0.3-1.3,0.8-1.7,1.4c-0.5,0.6-0.8,1.3-0.8,2.2c0,0.1,0,0.3,0,0.6l0,0.2v1.1l-1.2,0.7l-5.6,3.2c-0.4,0.2-0.6,0.5-0.6,0.9c0,0.4,0.2,0.7,0.6,0.9l2.2,1.3l1.2,0.7v2.3c0,0.7,0,1.3,0.1,1.3c0,0.7,0.1,1.3,0.4,1.8s0.8,0.9,1.4,1.1c0.6,0.2,1.3,0.2,2-0.1c0.7-0.3,1.3-0.8,1.7-1.4c0.5-0.6,0.8,1.3-0.8,2.2c0-0.1,0-0.3,0-0.6v-1.3l1.3-0.7l5.6-3.2c0.4-0.2,0.6,0.5-0.6,0.9C20.8,15,20.6,14.7,20.2,14.5z M12,12.4c-0.4,0.7-1.1,1-1.9,1s-1.5-0.3-1.9-1c-0.4-0.7-0.4-1.6,0-2.3c0.4-0.7,1.1-1,1.9-1s1.5,0.3,1.9,1C12.4,10.8,12.4,11.7,12,12.4z"></path></svg>`,
    'database': `<svg viewBox="0 0 128 128"><path d="M64 128c11.9 0 23.3-3.1 33-8.8 9.3-5.5 17.1-13.3 22.6-22.6C125.1 87.2 128 75.8 128 64c0-35.4-28.6-64-64-64S0 28.6 0 64c0 11.9 3.1 23.3 8.8 33 5.5 9.3 13.3 17.1 22.6 22.6 9.7 5.7 21.1 8.4 32.6 8.4z" fill="#00758f"></path><path d="M64 117.3c-29.5 0-53.3-23.9-53.3-53.3S34.5 10.7 64 10.7c29.5 0 53.3 23.9 53.3 53.3 0 13.2-4.8 25.5-12.8 35-1.1 1.3-2.3 2.6-3.6 3.8-9 8.3-20.7 13.5-33.6 13.5-1.2 0-2.3 0-3.3-.1z" fill="#f29111"></path><path d="M66.6 22.1c-13 0-24 4.7-29.2 8.4-4.8 3.4-6 5.8-6 8.9 0 1.9.5 4.3 2.1 6.5 2.6 3.6 8.6 7.4 17.5 7.4 6.8 0 12.3-2.3 15.6-5.8 4.2-4.5 4.5-11.4 4.5-13.8v-2.3c-1.3-4-8-9.3-14.5-9.3zm-1.8 10.5c-3.1 0-5.7 2.3-5.7 5.5 0 3.1 2.5 5.7 5.7 5.7s5.7-2.5 5.7-5.7c-.1-3.2-2.6-5.5-5.7-5.5zM66.3 64.9c-14.1 0-25.2 5.1-30.1 9.1-4.2 3.4-5.3 5.9-5.3 9.1 0 2.1.6 4.3 2.3 6.3 2.7 3.2 8.8 6.9 17.6 6.9s13.1-2.7 16.4-6.3c3.9-4.3 4.2-10.7 4.2-13.1v-2.6c-.9-4.2-8.3-9.4-15.1-9.4zm-1.4 10.1c-2.9 0-5.5 2.5-5.5 5.5 0 3.1 2.5 5.7 5.5 5.7s5.5-2.5 5.5-5.7c-.1-3-2.5-5.5-5.5-5.5z" fill="#fff"></path></svg>`,
    'python': `<svg viewBox="0 0 24 24" fill="currentColor" class="text-yellow-400"><path d="M14.2,19.3c-0.1,0-0.2,0-0.3,0c-1,0-1.9-0.5-2.4-1.3L9.9,15c0,0,0-0.1,0-0.1c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.5,0.3-1-0.8-1.2c0.5-0.2,1-0.1,1.4,0.3l1.6,1.6c0.6,0.6,1.6,0.6,2.3,0c0.6-0.6,0.6-1.6,0-2.3l-1.6-1.6c-0.4-0.4-0.5-0.9-0.3-1.4c0.2-0.5,0.7-0.8,1.2-0.8c0.2,0,0.4,0.1,0.6,0.2c0,0,0.1,0,0.1,0l3,1.6c0.8,0.4,1.3,1.3,1.3,2.3c0,0.1,0,0.2,0,0.3c0,1-0.5,1.9-1.3,2.4l-3,1.6C14.6,19.3,14.4,19.3,14.2,19.3z M9.8,4.7c0.1,0,0.2,0,0.3,0c1,0,1.9,0.5,2.4,1.3l1.6,3c0,0,0.1,0.1,0.1,0.1c0.1,0.2,0.2,0.4,0.2,0.6c0,0.5-0.3,1-0.8,1.2c-0.5,0.2-1,0.1-1.4-0.3L10.7,9.1c-0.6-0.6-1.6-0.6-2.3,0c-0.6,0.6-0.6,1.6,0,2.3l1.6,1.6c0.4,0.4,0.5,0.9,0.3,1.4c-0.2,0.5-0.7,0.8-1.2,0.8c-0.2,0-0.4-0.1-0.6-0.2c0,0-0.1,0-0.1-0.1l-3-1.6C4.5,12.9,4,12,4,11.1c0-0.1,0-0.2,0-0.3c0-1,0.5-1.9,1.3-2.4l3-1.6C8.8,4.7,9,4.7,9.2,4.7C9.4,4.7,9.6,4.7,9.8,4.7z"></path></svg>`,
    'figma': `<svg viewBox="0 0 24 24" fill="currentColor"><path class="text-red-500" d="M12 12.3c-1 0-1.8.8-1.8 1.8 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-1-.8-1.8-1.8-1.8z"></path><path class="text-orange-500" d="M10.2 8.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.8v-1.8c0-1-.8-1.8-1.8-1.8z"></path><path class="text-purple-500" d="M10.2 15.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8v-3.5z"></path><path class="text-blue-500" d="M13.8 8.8c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8h-1.8v-1.8c0-1 .8-1.8 1.8-1.8z"></path><path class="text-green-400" d="M13.8 15.8c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8v-3.5z"></path></svg>`,
    'mongodb': `<svg viewBox="0 0 24 24" fill="currentColor" class="text-green-500"><path d="M12.1,2.3C12,2.3,12,2.3,12,2.3C7,2.3,4,6.2,4,12.4c0,3.3,1.3,5.9,4.3,7.6c0.2,0.1,0.4,0.2,0.7,0.2c0.3,0,0.7-0.1,0.9-0.4c0.2-0.2,0.4-0.5,0.4-0.8c0-0.2-0.1-0.5-0.2-0.7c-0.1-0.2-0.3-0.4-0.5-0.5c-0.8-0.5-1.4-1.2-1.8-2.1c-0.4-0.9-0.6-2-0.6-3.2c0-3.2,1.5-5.9,4.6-5.9c0.7,0,1.3,0.1,2,0.4c0.6,0.3,1.2,0.7,1.6,1.2c0.5,0.6,0.7,1.2,0.7,2c0,0.8-0.3,1.5-0.8,2.1c-0.5,0.6-1.2,0.9-2,0.9c-0.5,0-0.9-0.1-1.3-0.4c-0.4-0.3-0.6-0.7-0.6-1.2c0-0.4,0.2-0.7,0.5-0.9c0.3-0.2,0.7-0.4,1.1-0.4c0.2,0,0.3,0,0.5,0.1l-0.8,2.4c-0.8,0.2-1.5,0.5-2.1,1c-0.6,0.5-1,1.1-1.3,1.8c-0.3,0.7-0.4,1.5-0.4,2.3c0,0.6,0.1,1.2,0.4,1.8c0.3,0.6,0.7,1,1.2,1.3c0.5,0.3,1.1,0.5,1.8,0.5c1.4,0,2.6-0.5,3.6-1.4c1-0.9,1.5-2.2,1.5-3.6c0-1.6-0.5-3-1.6-4.1c-1.1-1.1-2.4-1.7-4-1.7C12.3,7.2,12.2,7.2,12.1,2.3z"></path></svg>`,
    'firebase': `<svg viewBox="0 0 24 24" fill="currentColor" class="text-yellow-500"><path d="M3.7,18.4l7.9-15.3c0.2-0.4,0.7-0.4,0.9,0l7.9,15.3c0.2,0.4,0,0.8-0.4,1l-7.4,4.3c-0.3,0.2-0.7,0.2-1,0l-7.4-4.3C3.7,19.2,3.5,18.8,3.7,18.4z M12,18.1L12,18.1L12,18.1L12,18.1l0,0l0-12.5l-5.6,10.8L12,18.1z"></path></svg>`,
    'server': `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M5 12h14" class="stroke-blue-500"></path><path d="M12 5v14" class="stroke-blue-500"></path><path d="M19 19l-3-3" class="stroke-green-400"></path><path d="M5 19l3-3" class="stroke-green-400"></path><path d="M19 5l-3 3" class="stroke-green-400"></path><path d="M5 5l3 3" class="stroke-green-400"></path></svg>`,
    'credit-card': `<svg viewBox="0 0 24 24" fill="none"><path d="M22 10H2" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round"></path><path d="M21 5H3a2 2 0 00-2 2v10a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2z" fill="#4A90E2"></path><path d="M6 15h4" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path></svg>`,
    'git-branch': `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15" class="stroke-orange-500"></line><circle cx="18" cy="6" r="3" class="stroke-orange-500"></circle><circle cx="6" cy="18" r="3" class="stroke-orange-500"></circle><path d="M18 9a9 9 0 0 1-9 9" class="stroke-orange-500"></path></svg>`,
    'vuejs': `<svg viewBox="0 0 256 221" fill="currentColor" class="text-green-500"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"></path><path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"></path></svg>`,
    'dot-net': `<svg viewBox="0 0 24 24" fill="currentColor" class="text-purple-500"><path d="M21.9 16.5c0-.4 0-.8-.1-1.2h-3.3v2.3h1.9c.4.1.7.3.9.6.2.3.4.7.4 1.1 0 .5-.1.9-.4 1.2-.2.3-.6.5-1 .6h-1.8v2.3h2.1c.9 0 1.7-.2 2.3-.5.6-.4 1.1-.9 1.4-1.5.3-.6.5-1.4.5-2.2 0-.8-.1-1.6-.4-2.2zm-6.2-1.2c-.3-.2-.7-.3-1.1-.3s-.8.1-1.1.3c-.3.2-.6.5-.8.8-.2.3-.3.7-.3 1.1s.1.8.3 1.1c.2.3.5.6.8.8.3.2.7.3 1.1.3s.8-.1 1.1-.3c.3-.2.6-.5.8-.8.2-.3.3-.7.3-1.1s-.1-.8-.3-1.1c-.2-.4-.5-.6-.8-.8zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.8 17.4h-2.3v-2.3h2.3V13c0-1.4-.4-2.5-1.1-3.3-.8-.8-1.8-1.2-3.1-1.2-1 0-1.8.2-2.5.6V7.3c.8-.3 1.7-.5 2.6-.5 1.7 0 3.1.5 4.1 1.4 1.1 1 1.6 2.4 1.6 4.2v4.9z"></path></svg>`,
    'oop': `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="2" y="14" width="8" height="8" rx="2" class="stroke-red-500"></rect><rect x="14" y="14" width="8" height="8" rx="2" class="stroke-green-500"></rect><rect x="8" y="2" width="8" height="8" rx="2" class="stroke-yellow-500"></rect><line x1="12" y1="10" x2="12" y2="14" class="stroke-gray-400"></line><line x1="6" y1="14" x2="6" y2="11" class="stroke-gray-400"/><line x1="18" y1="14" x2="18" y2="11" class="stroke-gray-400"/></svg>`,
    'binary': `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="18" cy="18" r="3" class="stroke-purple-500"></circle><circle cx="6" cy="6" r="3" class="stroke-blue-500"></circle><path d="M13 6h3a2 2 0 012 2v7" class="stroke-gray-400"></path><path d="M11 18H8a2 2 0 01-2-2V9" class="stroke-gray-400"></path></svg>`,
    'layers-3': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2" class="text-blue-500"></polygon><polyline points="2 17 12 22 22 17" class="text-blue-400"></polyline><polyline points="2 12 12 17 22 12" class="text-blue-300"></polyline></svg>`,
    'rocket': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 11.5L3 22l10.5-1.5L21 21l-1.5-10.5L11.5 3z" class="text-red-500"></path><path d="M13 11l4 4" class="text-orange-400"></path><path d="M11 2l-1.5 1.5" class="text-yellow-400"></path><path d="M3 21l6-6" class="text-yellow-400"></path></svg>`,
};

const allSkills = [
    { name: 'React/Native', iconClass: 'devicon-react-original colored', category: 'frontend' },
    { name: 'Next.js', iconClass: 'devicon-nextjs-original-wordmark white', category: 'frontend' }, // Next.js is usually black/white. 'white' or invert needed if dark bg.
    { name: 'Vue.js', iconClass: 'devicon-vuejs-plain colored', category: 'frontend' },
    { name: 'Node.js', iconClass: 'devicon-nodejs-plain-wordmark colored', category: 'backend' },
    { name: 'Django', iconClass: 'devicon-django-plain colored', category: 'backend' },
    { name: '.NET', iconClass: 'devicon-dotnetcore-plain colored', category: 'backend' }, // using dotnetcore
    { name: 'MySQL', iconClass: 'devicon-mysql-plain-wordmark colored', category: 'backend' },
    { name: 'MongoDB', iconClass: 'devicon-mongodb-plain-wordmark colored', category: 'backend' },
    { name: 'Firebase', iconClass: 'devicon-firebase-plain colored', category: 'backend' },
    { name: 'RESTful APIs', iconClass: 'devicon-nodejs-plain colored', category: 'core' }, // Proxy icon
    { name: 'Payment APIs', iconClass: 'devicon-amazonwebservices-plain-wordmark colored', category: 'core' }, // Proxy icon
    { name: 'Figma', iconClass: 'devicon-figma-plain colored', category: 'frontend' },
    { name: 'Git/GitHub', iconClass: 'devicon-git-plain colored', category: 'core' },
    { name: 'OOP', iconClass: 'devicon-cplusplus-plain colored', category: 'core' }, // C++ is classic OOP rep
    { name: 'DSA', iconClass: 'devicon-java-plain colored', category: 'core' }, // Java often used for DSA
    { name: 'MVC', iconClass: 'devicon-rails-plain-wordmark colored', category: 'core' }, // Rails made MVC famous
    { name: 'Deployment', iconClass: 'devicon-docker-plain colored', category: 'core' }
];

// Note: Removed outdated iconMappings.

// --- All Projects Data ---
// --- All Projects Data ---
const contactForm = document.getElementById('contact-form');
const projectModal = document.getElementById('project-modal');
const closeProjectModalBtn = document.getElementById('close-project-modal');
const modalTitle = document.getElementById('modal-title');
const modalTech = document.getElementById('modal-tech');
const modalDesc = document.getElementById('modal-desc');
const modalImg = document.getElementById('modal-img');

function openProjectModal(project) {
    if (!projectModal) return;

    modalTitle.textContent = project.title;
    modalTech.textContent = project.tech;
    modalDesc.textContent = project.description + " This project demonstrates high-level engineering and attention to detail. Built to be modular and scalable, it addresses specific user needs with a modern interface and robust backend logic.";
    modalImg.src = `https://placehold.co/800x600/1F2937/4F46E5?text=${project.imgPlaceholder}`;

    projectModal.classList.remove('hidden');
    // Force reflow for animation
    projectModal.offsetHeight;
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    setTimeout(() => {
        projectModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 400);
}

// Update project cards to be clickable
function updateProjectCardListeners() {
    document.querySelectorAll('.project-card').forEach((card, index) => {
        // Only the main card click opens the modal, not the AI button
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.generate-desc-btn')) {
                openProjectModal(allProjects[index]);
            }
        });
    });
}

// --- Counter Animation ---
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const duration = 2000; // 2 seconds animation for all

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        if (counter.innerText.includes('+')) return;

        const updateCount = () => {
            const count = +counter.innerText.replace('+', '');
            let timePerStep = duration / target;
            if (timePerStep < 10) timePerStep = 10;
            let inc = 1;
            if (target > 200) inc = Math.ceil(target / (duration / 10));

            if (count < target) {
                counter.innerText = Math.min(count + inc, target);
                setTimeout(updateCount, timePerStep);
            } else {
                counter.innerText = target + "+";
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if (!counter.innerText.includes('+') && counter.innerText != '0') counter.innerText = '0';
                updateCount();
                observer.unobserve(counter);
            }
        }, { threshold: 0.5 });
        observer.observe(counter);
    });
}

// Set up listeners once defined
document.addEventListener('DOMContentLoaded', () => {
    if (closeProjectModalBtn) closeProjectModalBtn.addEventListener('click', closeProjectModal);
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) closeProjectModal();
        });
    }
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('span');
            const originalText = btnText.textContent;
            btnText.textContent = "Sending...";
            submitBtn.disabled = true;

            setTimeout(() => {
                btnText.textContent = "Message Sent! ✓";
                submitBtn.classList.remove('bg-blue-600');
                submitBtn.classList.add('bg-green-600');
                contactForm.reset();

                setTimeout(() => {
                    btnText.textContent = originalText;
                    submitBtn.classList.remove('bg-green-600');
                    submitBtn.classList.add('bg-blue-600');
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});

const allProjects = [
    {
        title: "ProHotel System",
        category: "web",
        description: "Where Logic Meets Premium Design. A complete hotel reservation engine featuring custom-coded Radar/Cube animations, smart room pricing polymorphism, and a simulated SMS API notification system—all built with zero external dependencies.",
        tech: "Vanilla JS, CSS Animations, Polymorphism",
        image: "assets/img/HostelManagementsystem.png"
    },
    {
        title: "SAVIOT - Energy AI",
        category: "ai",
        description: "AI-powered MERN web app for real-time electricity monitoring and industrial energy optimization.",
        tech: "MERN Stack, Next.js, AI",
        image: "assets/img/modern_saas_dashboard.png"
    },
    {
        title: "SignSpeak",
        category: "ai",
        description: "Assistive AI tool converting hand gestures into real-time speech using computer vision.",
        tech: "Python, OpenCV, TensorFlow",
        image: "assets/img/ai_analytics_platform.png"
    },
    {
        title: "Medication App",
        category: "mobile",
        description: "React Native + Firebase mobile app for elderly users with real-time health reminders.",
        tech: "React Native, Firebase",
        image: "assets/img/ecommerce_mobile_app.png"
    },
    {
        title: "Recipe Manager",
        category: "web",
        description: "Scalable platform with advanced search and real-time monitoring for food enthusiasts.",
        tech: "Django, Python",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Train Booking System",
        category: "ai",
        description: "High-performance desktop system for train scheduling and secure payment processing.",
        tech: ".NET, C#",
        image: "assets/img/train_booking_system.png"
    },
    {
        title: "Custom Linux Shell",
        category: "ai",
        description: "Efficient C-based shell supporting process management and file system operations.",
        tech: "C Language",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Health Tracker",
        category: "web",
        description: "Medical record system with table normalization and ultra-fast SQL query optimization.",
        tech: "MS SQL Server",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Campus Networking",
        category: "ai",
        description: "Designed VLAN, DHCP, and secure routing architectures for seamless campus connectivity.",
        tech: "Networking, Cisco",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Medical Inventory",
        category: "ai",
        description: "Inventory system using advanced Data Structures for efficient medical stock tracking.",
        tech: "Data Structures, C++",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Parking System",
        category: "ai",
        description: "Optimized Assembly-based system for real-time vehicle tracking using register-level flags.",
        tech: "Assembly Language",
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Price Scraper",
        category: "web",
        description: "Python-based scraper for real-time e-commerce data extraction and price trend analysis.",
        tech: "Python, Web Scraping",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Data Analysis",
        category: "ai",
        description: "Statistical modeling and insight extraction using NumPy, Pandas, and Matplotlib.",
        tech: "Pandas, NumPy, Python",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
];

// --- Existing JS code ---
// --- AOS Initialization ---
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

// --- Mobile Menu Toggle ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// --- Smooth Scroll & Mobile Menu Logic (Lenis Powered) ---
document.querySelectorAll('#mobile-menu a, header a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
            e.preventDefault();

            // Close mobile menu if it's open
            if (mobileMenu) mobileMenu.classList.add('hidden');

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                lenis.scrollTo(targetElement, {
                    offset: - (document.getElementById('header')?.offsetHeight || 0),
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            }
        }
    });
});


const sections = document.querySelectorAll('.section-fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });
sections.forEach(section => { observer.observe(section); });




document.addEventListener('DOMContentLoaded', () => {
    // --- ADVANCED SKILLS SLIDER & CATEGORIZATION ---
    function populateSkills(filter = 'all') {
        const slider = document.getElementById('skills-slider-new');
        if (!slider) return;

        slider.innerHTML = '';
        const filteredSkills = filter === 'all' ? allSkills : allSkills.filter(s => s.category === filter);

        filteredSkills.forEach((skill, index) => {
            const skillCardHTML = `
                <div class="skill-item" data-category="${skill.category}">
                    <div class="card-corner top-left"></div>
                    <div class="card-corner top-right"></div>
                    <div class="card-corner bottom-left"></div>
                    <div class="card-corner bottom-right"></div>
                    <div class="glow-base"></div>
                    <i class="${skill.iconClass} text-5xl mb-3"></i>
                    <span>${skill.name}</span>
                </div>
            `;
            slider.innerHTML += skillCardHTML;
        });

        // Initialize 3D and Spotlight effects for new cards
        document.querySelectorAll('.skill-item').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -12;
                const rotateY = ((x - centerX) / centerX) * 12;

                card.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(2000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
            });
        });

        // GSAP Staggered Entry Animation - Optimized
        gsap.from("#skills-slider-new .skill-item", {
            duration: 0.6, // Reduced from 0.8
            scale: 0.7, // Less dramatic
            y: 40, // Reduced from 60
            opacity: 0,
            stagger: 0.03, // Reduced from 0.06
            ease: "power3.out", // Faster ease
            clearProps: "all"
        });
    }

    // Slider Navigation
    const skillsPrev = document.getElementById('skills-prev');
    const skillsNext = document.getElementById('skills-next');
    const skillsSliderRef = document.getElementById('skills-slider-new');

    if (skillsPrev && skillsNext && skillsSliderRef) {
        skillsNext.addEventListener('click', () => {
            skillsSliderRef.style.scrollBehavior = 'smooth';
            const cardWidth = skillsSliderRef.querySelector('.skill-item')?.offsetWidth || 280;
            skillsSliderRef.scrollBy({ left: cardWidth + 24 });
        });

        skillsPrev.addEventListener('click', () => {
            skillsSliderRef.style.scrollBehavior = 'smooth';
            const cardWidth = skillsSliderRef.querySelector('.skill-item')?.offsetWidth || 280;
            skillsSliderRef.scrollBy({ left: -(cardWidth + 24) });
        });
    }

    // Category Button Listeners
    document.querySelectorAll('.skill-category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.skill-category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            gsap.to("#skills-slider-new", {
                opacity: 0,
                x: -30,
                duration: 0.4,
                onComplete: () => {
                    populateSkills(category);
                    gsap.to("#skills-slider-new", {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            });
        });
    });

    // Initial population
    populateSkills();

    // --- AUTO-SCROLL LOGIC ---
    function initAutoScroll(containerId, speed = 0.8) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let isPaused = false;

        container.addEventListener('mouseenter', () => isPaused = true);
        container.addEventListener('mouseleave', () => isPaused = false);

        let accumulator = 0;
        function scroll() {
            if (!isPaused) {
                container.style.scrollSnapType = 'none';
                container.style.scrollBehavior = 'auto';

                accumulator += speed;
                if (accumulator >= 1) {
                    const move = Math.floor(accumulator);
                    container.scrollLeft += move;
                    accumulator -= move;

                    if (container.scrollLeft >= (container.scrollWidth - container.clientWidth - 1)) {
                        container.scrollLeft = 0;
                        accumulator = 0;
                    }
                }
            }
            requestAnimationFrame(scroll);
        }

        requestAnimationFrame(scroll);
    }

    // Initialize after a short delay - RESTORED LIVE MOVEMENT - FASTER SPEED
    setTimeout(() => {
        initAutoScroll('skills-slider-new', 1.8); // Increased from 1.0 for faster movement
        initAutoScroll('projects-slider', 2.2);   // Increased from 1.2 for faster movement
    }, 1000);


    // --- PROJECTS GRID & FILTERING LOGIC ---
    // --- PROJECTS SLIDER & FILTERING LOGIC ---
    function populateProjects(filter = 'all') {
        const slider = document.getElementById('projects-slider');
        if (!slider) return;

        slider.innerHTML = '';
        const filteredProjects = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);

        filteredProjects.forEach((project, index) => {
            const cardHTML = `
                <div class="project-card glass-effect rounded-3xl overflow-hidden group border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                    <div class="relative overflow-hidden aspect-video">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                            <button onclick="openProjectModal(${allProjects.indexOf(project)})" class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-blue-600/30">
                                <i data-lucide="maximize-2" class="w-5 h-5"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-6 text-left">
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-3 py-1 bg-gray-800 text-gray-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-gray-700">${project.category}</span>
                            <span class="project-tech px-3 py-1 bg-blue-600/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-500/20">${project.tech}</span>
                        </div>
                        <h3 class="project-title text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">${project.title}</h3>
                        <p class="project-desc text-gray-400 text-sm line-clamp-2">${project.description}</p>
                    </div>
                </div>
            `;
            slider.innerHTML += cardHTML;
        });

        lucide.createIcons();

        // Reset scroll position on filter
        slider.scrollLeft = 0;
    }

    // Slider Navigation
    const sliderPrev = document.getElementById('slider-prev');
    const sliderNext = document.getElementById('slider-next');
    const projectsSlider = document.getElementById('projects-slider');

    if (sliderPrev && sliderNext && projectsSlider) {
        sliderNext.addEventListener('click', () => {
            projectsSlider.style.scrollBehavior = 'smooth';
            const cardWidth = projectsSlider.querySelector('.project-card')?.offsetWidth || 300;
            projectsSlider.scrollBy({ left: cardWidth + 20 });
        });

        sliderPrev.addEventListener('click', () => {
            projectsSlider.style.scrollBehavior = 'smooth';
            const cardWidth = projectsSlider.querySelector('.project-card')?.offsetWidth || 300;
            projectsSlider.scrollBy({ left: -(cardWidth + 20) });
        });
    }

    // Filter Button Listeners
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-category');

            gsap.to(projectsSlider, {
                opacity: 0,
                x: -20,
                duration: 0.3,
                onComplete: () => {
                    populateProjects(filter);
                    gsap.to(projectsSlider, { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" });
                }
            });
        });
    });

    populateProjects();

    // About Card Hover Effect
    const aboutCard = document.getElementById('about-card');
    if (aboutCard) {
        aboutCard.addEventListener('mousemove', (e) => {
            const rect = aboutCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            aboutCard.style.setProperty('--x', `${x}px`);
            aboutCard.style.setProperty('--y', `${y}px`);
        });

        // V16: Holographic Depth Tracking for Stat Cards
        const statCards = document.querySelectorAll('.group\\/stat');
        statCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mouse-x', `${x}%`);
                card.style.setProperty('--mouse-y', `${y}%`);
            });
        });
    }

    // Animated border effect
    document.querySelectorAll('.animated-border-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const angle = Math.atan2(e.clientY - (rect.top + rect.height / 2), e.clientX - (rect.left + rect.width / 2)) * 180 / Math.PI;
            card.style.setProperty('--angle', `${angle}deg`);
        });
    });

    // Staggered animation for skill items on scroll is now handled after population

    // Preloader Animation
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        const progressCircle = document.querySelector('.progress-ring-circle');
        const scrambleText = document.querySelector('.scramble-text');
        const typewriterName = document.getElementById('typewriter-name');
        const pulseContainer = document.querySelector('.pulse-container');
        const systemLogs = document.getElementById('system-logs');
        const binaryRain = document.getElementById('binary-rain');
        const cube = document.querySelector('.cube');
        const grid = document.querySelector('.preloader-grid');
        const crosshair = document.getElementById('hud-crosshair');
        const scanningBeam = document.querySelector('.scanning-beam');
        const identityNode = document.querySelector('.identity-node-container');
        const identityHub = document.querySelector('.identity-system-hub');

        // Shared AudioContext setup (Singleton)
        let sharedAudioContext = null;

        const getAudioContext = () => {
            return sharedAudioContext;
        };

        // Proper AudioContext resume/init on gesture
        const resumeAudioContext = () => {
            if (!sharedAudioContext) {
                sharedAudioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (sharedAudioContext.state === 'suspended') {
                sharedAudioContext.resume();
            }
            // cleanup
            ['click', 'mousedown', 'keydown', 'touchstart'].forEach(e => document.removeEventListener(e, resumeAudioContext));
        };

        ['click', 'mousedown', 'keydown', 'touchstart'].forEach(e => document.addEventListener(e, resumeAudioContext));

        const playBeep = () => {
            const audioContext = getAudioContext();
            if (!audioContext || audioContext.state === 'suspended') return;

            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
        };

        // Particle burst effect
        const createParticleBurst = () => {
            const particleCount = 12;
            if (!pulseContainer) return;
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                pulseContainer.appendChild(particle);

                const angle = (i / particleCount) * Math.PI * 2;
                const distance = 60;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                gsap.to(particle, {
                    x: x,
                    y: y,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: () => particle.remove()
                });
            }
        };

        // Mouse Tracking for HUD Crosshair
        if (preloader) {
            preloader.addEventListener('mousemove', (e) => {
                if (crosshair) {
                    gsap.to(crosshair, {
                        x: e.clientX - 50,
                        y: e.clientY - 50,
                        duration: 0.1,
                        ease: "power2.out"
                    });
                }
            });
        }

        // --- Ultra Advanced Cyber HUD Logic ---

        // 1. Binary Rain
        const createBinaryColumn = () => {
            if (!binaryRain) return;
            const column = document.createElement('div');
            column.className = 'binary-column';
            column.style.left = Math.random() * 100 + '%';
            column.style.animationDuration = (Math.random() * 3 + 2) + 's';
            column.style.opacity = Math.random() * 0.3;

            let binaryText = '';
            for (let i = 0; i < 15; i++) {
                binaryText += Math.random() > 0.5 ? '1' : '0';
                binaryText += '<br>';
            }
            column.innerHTML = binaryText;
            binaryRain.appendChild(column);
            setTimeout(() => column.remove(), 5000);
        };
        const rainInterval = setInterval(() => {
            if (preloader && !preloader.classList.contains('hidden')) createBinaryColumn();
        }, 150);

        // 2. System Logs
        const logMessages = [
            "INIT_GRID_PROTOCOLS...",
            "CALIBRATING_DATA_RINGS...",
            "SYNCING_NEURAL_CORE...",
            "UPLOADING_CREDENTIALS...",
            "ESTABLISHING_LINK...",
            "BYPASSING_FIREWALL...",
            "DECRYPTING_IDENTITY...",
            "SYSTEM_OPTIMIZATION_SUCCESS",
            "WELCOME_HAMMAD_JAVED"
        ];
        const pushLog = (msg) => {
            if (!systemLogs) return;
            const logLine = document.createElement('div');
            logLine.className = 'log-line';
            logLine.innerText = `> ${msg}`;
            systemLogs.prepend(logLine);
            if (systemLogs.children.length > 8) systemLogs.removeChild(systemLogs.lastChild);
        };
        const logInterval = setInterval(() => {
            if (Math.random() > 0.4) pushLog(logMessages[Math.floor(Math.random() * logMessages.length)]);
        }, 400);

        // 3. Main Loader & Typewriter Reveal
        let progress = 0;
        const targetName = "HAMMAD JAVED";
        let typingIndex = 0;
        let isTyping = false;
        let typingFinished = false;
        let progressFinished = false;

        const triggerFinalExit = () => {
            if (!typingFinished || !progressFinished) return;

            if (scrambleText) scrambleText.innerText = "ACCESS_GRANTED";

            // Integrated Seamless Transition Timeline
            const tl = gsap.timeline({
                onComplete: () => {
                    clearInterval(rainInterval); // Only cleanup once fully hidden
                    preloader.classList.add('hidden');
                    if (document.querySelector('main')) document.querySelector('main').classList.add('loaded');
                }
            });

            // Phase 1: Hold State (Animations Keep Running)
            tl.to({}, { duration: 0.3 }) // Professional pause (hold)

                // Phase 2: Hub & Scanner Fade out
                .to(identityHub, { opacity: 0, scale: 0.8, filter: "blur(10px)", duration: 0.5, ease: "power2.in" })
                .to(scanningBeam, { opacity: 0, duration: 0.2 }, "-=0.4")

                // Phase 3: Final Background Reveal & Home Animation Sync
                .to(preloader, { filter: "blur(15px) contrast(150%)", duration: 0.6, ease: "power2.inOut" }, "-=0.2")
                .to(pulseContainer, { scale: 4, opacity: 0, duration: 0.7, ease: "power3.in" }, "-=0.4")
                .to(grid, { scale: 1.3, opacity: 0, duration: 0.8, ease: "power2.inOut" }, "-=0.6")
                .to(preloader, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.inOut"
                }, "-=0.8");

            // Trigger home animations to overlap with the preloader fade
            tl.add(() => {
                heroTl.play();
            }, "-=0.6");
        };

        const mainLoader = setInterval(() => {
            progress += Math.random() * 2.5;

            // Progress Ring
            if (progressCircle) {
                const offset = 282.7 - (progress / 100) * 282.7;
                gsap.to(progressCircle, { strokeDashoffset: offset, duration: 0.2 });
            }

            // Sync Cube Speed
            if (cube) {
                const speed = 12 - (progress / 100) * 10;
                cube.style.animationDuration = `${Math.max(speed, 2)}s`;
            }

            // Scramble handling
            if (scrambleText && progress > 20 && progress < 85) {
                const chars = '01#@$%&*';
                scrambleText.innerText = "LINKING_" + Array(8).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
            }

            // Start Typewriter Name Reveal at 30% for more buffer
            if (progress > 30 && !isTyping) {
                isTyping = true;

                // Identity Node Reveal
                if (identityNode) {
                    gsap.to(identityNode, {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 1,
                        ease: "back.out(1.7)"
                    });
                }

                const typeInterval = setInterval(() => {
                    if (typingIndex < targetName.length) {
                        typewriterName.textContent += targetName[typingIndex];
                        typingIndex++;
                        // Glitch effect on character add
                        if (Math.random() > 0.8) {
                            gsap.to(typewriterName, { skewX: 20, duration: 0.05, yoyo: true, repeat: 1 });
                        }
                    } else {
                        clearInterval(typeInterval);
                        typingFinished = true;
                        triggerFinalExit();
                    }
                }, 150);
            }

            if (progress >= 100) {
                clearInterval(mainLoader);
                progressFinished = true;
                triggerFinalExit();
            }
        }, 60);

        // Initial particle burst
    });

    // Hero Section Timeline (Paused initially)
    const heroTl = gsap.timeline({
        paused: true,
        defaults: { ease: "power4.out", duration: 1 }
    });

    heroTl.from(".hero-card img", { y: 50, opacity: 0, scale: 0.8, duration: 1, ease: "power4.out" }, "-=0.8")
        .from(".hero-card h1", { y: 30, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8")
        .from(".hero-card p", { y: 20, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out" }, "-=0.8")
        .from(".hero-card a", { y: 20, opacity: 0, stagger: 0.1, duration: 1, ease: "power4.out" }, "-=0.8");


    // Magnetic Cursor Effect on Profile Image & Hero Card (Desktop only)
    if (window.innerWidth > 768) {
        const profileImg = document.getElementById('hero-profile-img');
        const heroCard = document.querySelector('.hero-card');
        const heroAura = document.querySelector('.hero-aura');
        const techBadges = document.querySelectorAll('.tech-badge');

        if (heroCard) {
            heroCard.addEventListener('mousemove', (e) => {
                const rect = heroCard.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const moveX = (e.clientX - centerX) * 0.05;
                const moveY = (e.clientY - centerY) * 0.05;

                // Magnetic Hero Card
                gsap.to(heroCard, {
                    x: moveX,
                    y: moveY,
                    duration: 0.5,
                    ease: 'power2.out'
                });

                // Parallax Aura
                if (heroAura) {
                    gsap.to(heroAura, {
                        x: moveX * 2,
                        y: moveY * 2,
                        duration: 0.8,
                        ease: 'power2.out'
                    });
                }

                // Magnetic Profile Image (Subtle)
                if (profileImg) {
                    gsap.to(profileImg, {
                        x: (e.clientX - (rect.left + rect.width / 2)) * 0.08,
                        y: (e.clientY - (rect.top + rect.height / 2)) * 0.08,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });

            heroCard.addEventListener('mouseleave', () => {
                gsap.to(heroCard, { x: 0, y: 0, duration: 0.5 });
                if (heroAura) gsap.to(heroAura, { x: 0, y: 0, duration: 0.8 });
                if (profileImg) gsap.to(profileImg, { x: 0, y: 0, duration: 0.5 });
            });
        }

        // Animate Tech Badges (Floating)
        techBadges.forEach((badge, index) => {
            gsap.to(badge, {
                y: "random(-20, 20)",
                x: "random(-10, 10)",
                rotation: "random(-15, 15)",
                duration: "random(2, 4)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.2
            });
        });
    }


    // Section Headers ScrollTrigger - Improved for Visibility
    gsap.utils.toArray("section h2").forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 95%", // Trigger earlier
                toggleActions: "play none none reverse"
            },
            y: 30, // Subtle lift
            opacity: 0.5, // Start partially visible to avoid "gone" look
            duration: 1.2,
            ease: "power3.out"
        });
    });

    // Initialize AOS with optimized settings
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800, // Faster animations
            once: true,
            offset: 50, // Reduced offset for earlier trigger
            easing: 'ease-out-cubic',
            disable: false
        });
    }





    if (aboutCard) {
        const aboutTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top 70%',
            }
        });

        aboutTl.from('#about-card .lg\\:w-2\\/5', {
            x: -50,
            opacity: 0.5, // Start visible but faded
            duration: 1,
            ease: 'power3.out'
        })
            .from('#about-card .lg\\:w-3\\/5 > div', {
                y: 30,
                opacity: 0.5,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.5')
            .from('#about-card p', {
                y: 20,
                opacity: 0.5,
                duration: 0.8,
            }, '-=0.3')
            .from('#about-card .grid > div', {
                scale: 0.95, // Less dramatic
                opacity: 0.8,
                duration: 0.4, // Faster
                stagger: 0.05, // Reduced from 0.1
                ease: 'power2.out',
                onComplete: () => {
                    animateCounters();
                }
            }, '-=0.5');
    }

    // Magnetic Social Icons for About Section
    const aboutSocialIcons = document.querySelectorAll('.platforms-icons a');

    aboutSocialIcons.forEach(icon => {
        icon.addEventListener('mousemove', (e) => {
            const rect = icon.getBoundingClientRect();
            const x = (e.clientX - (rect.left + rect.width / 2)) * 0.4;
            const y = (e.clientY - (rect.top + rect.height / 2)) * 0.4;
            gsap.to(icon, { x, y, duration: 0.3 });
        });
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, { x: 0, y: 0, duration: 0.5, ease: 'back.out(2)' });
        });
    });
});


// Call updates on load

document.addEventListener('DOMContentLoaded', () => {
    // These functions are now defined globally or shared correctly
    updateProjectCardListeners();
    animateCounters();
    lucide.createIcons();
});

// --- EXPERIENCE TIMELINE ANIMATION ---
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const timelineProgress = document.querySelector('.timeline-progress');
    const nodes = document.querySelectorAll('.timeline-node-wrapper');
    const cards = document.querySelectorAll('.experience-card');

    if (timelineProgress) {
        gsap.to(timelineProgress, {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: '#experience',
                start: 'top center',
                end: 'bottom center',
                scrub: true
            }
        });
    }

    nodes.forEach((node, index) => {
        gsap.from(node, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: node,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    cards.forEach((card, index) => {
        gsap.from(card, {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
});


// --- Certificate Section Animations ---
document.addEventListener('DOMContentLoaded', () => {
    const certCards = document.querySelectorAll('.certificate-card-modern');

    if (certCards.length > 0) {
        // Initialize Lucide icons for certificate cards
        lucide.createIcons();

        // GSAP Scroll-Triggered Animation for each card individually
        certCards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%', // Triggers when top of card hits 90% of viewport height
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                scale: 0.95,
                duration: 0.6,
                delay: index * 0.1, // Small delay for effect but reliable
                ease: 'power3.out'
            });
        });

        // Advanced 3D Tilt & Glow Tracking
        certCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Calculate percentage position (0 to 1)
                const xPct = x / rect.width;
                const yPct = y / rect.height;

                // Calculate rotation (max +/- 10deg)
                const rotateX = (0.5 - yPct) * 20;
                const rotateY = (xPct - 0.5) * 20;

                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
                card.style.setProperty('--rotateX', `${rotateX}deg`);
                card.style.setProperty('--rotateY', `${rotateY}deg`);
            });

            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--x', '50%');
                card.style.setProperty('--y', '50%');
                card.style.setProperty('--rotateX', '0deg');
                card.style.setProperty('--rotateY', '0deg');
            });
        });
    }
});



// --- Modern Contact Cards Tilt Effect ---
document.addEventListener('DOMContentLoaded', () => {
    const contactCards = document.querySelectorAll('.contact-card-3d');

    contactCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
            const rotateY = ((x - centerX) / centerX) * 10;

            const content = card.querySelector('.card-content');
            if (content) {
                content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            const content = card.querySelector('.card-content');
            if (content) {
                content.style.transform = 'rotateX(0deg) rotateY(0deg)';
            }
        });
    });

    // --- Next-Gen HUD Telemetry Update (V13) ---
    function initHUDTelemetry() {
        const labels = document.querySelectorAll('.telemetry-label');
        labels.forEach(label => {
            setInterval(() => {
                if (Math.random() > 0.4) {
                    const x = Math.floor(Math.random() * 99).toString().padStart(2, '0');
                    const y = Math.floor(Math.random() * 99).toString().padStart(2, '0');
                    if (label.innerText.includes('X:')) {
                        label.innerText = `[X:${x} Y:${y}]`;
                    }
                }
            }, 3000 + Math.random() * 5000);
        });
    }
    initHUDTelemetry();
});

// Services Section GSAP Animation
gsap.from("#services-grid .service-card-advanced", {
    scrollTrigger: {
        trigger: "#services-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});

// Ultra-Modern 2026 Services Animation
gsap.from("#services-grid-2026 .service-card-2026", {
    scrollTrigger: {
        trigger: "#services-grid-2026",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    y: 80,
    opacity: 0,
    scale: 0.95,
    rotationX: 15,
    duration: 1,
    stagger: {
        amount: 0.6,
        from: "start",
        ease: "power2.out"
    },
    ease: "power3.out"
});

// Stat Cards Scroll Animation (About Section)
gsap.from(".stat-card", {
    scrollTrigger: {
        trigger: ".stat-card",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play reverse play reverse"
    },
    y: 60,
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});

// About Card Stats Grid Animation
gsap.from("#stats-grid > div", {
    scrollTrigger: {
        trigger: "#stats-grid",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse"
    },
    y: 80,
    opacity: 0,
    scale: 0.9,
    rotationX: 10,
    duration: 1.2,
    stagger: {
        amount: 0.5,
        from: "start",
        ease: "power2.out"
    },
    ease: "power3.out",
    immediateRender: false
});

// V34: Magnetic Cursor Effect for Service Cards
document.querySelectorAll('.service-card-2026').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        const rotateX = deltaY * 5;
        const rotateY = deltaX * 5;
        
        card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Animated Counter for Service Cards (on hover)
document.querySelectorAll('.service-card-2026').forEach((card, index) => {
    const colors = ['#3b82f6', '#a855f7', '#10b981', '#ec4899'];
    card.style.setProperty('--card-color', colors[index]);
});

// V36: Auto-Rotating Hover Effects for Service Cards (for mobile users)
let currentActiveCard = 0;
const serviceCards = document.querySelectorAll('.service-card-2026');

function rotateHoverEffect() {
    // Remove active class from all cards
    serviceCards.forEach(card => card.classList.remove('auto-hover'));
    
    // Add active class to current card
    if (serviceCards[currentActiveCard]) {
        serviceCards[currentActiveCard].classList.add('auto-hover');
    }
    
    // Move to next card
    currentActiveCard = (currentActiveCard + 1) % serviceCards.length;
}

// Start the rotation (change card every 3 seconds)
if (serviceCards.length > 0) {
    setInterval(rotateHoverEffect, 3000);
    // Initial call
    rotateHoverEffect();
}

// V39: Auto-Rotating Effects for Experience Cards (for mobile users)
let currentActiveExperience = 0;
const experienceCards = document.querySelectorAll('.experience-card');

function rotateExperienceEffect() {
    // Remove active class from all cards
    experienceCards.forEach(card => card.classList.remove('auto-hover-exp'));
    
    // Add active class to current card
    if (experienceCards[currentActiveExperience]) {
        experienceCards[currentActiveExperience].classList.add('auto-hover-exp');
    }
    
    // Move to next card
    currentActiveExperience = (currentActiveExperience + 1) % experienceCards.length;
}

// Start the rotation (change card every 4 seconds)
if (experienceCards.length > 0) {
    setInterval(rotateExperienceEffect, 4000);
    // Initial call
    rotateExperienceEffect();
}
