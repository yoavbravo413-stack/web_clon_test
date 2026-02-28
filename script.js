// Basic interactions for the landing page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Midday clone initialized');

    // Smooth scroll for nav links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Tab switching for How it works
    const tabItems = document.querySelectorAll('.tab-item');

    tabItems.forEach((tab, index) => {
        tab.addEventListener('mouseenter', () => {
            tabItems.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Simple interaction for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Button clicked:', btn.textContent);
        });
    });

    // Reveal animations on scroll
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Optional: if you want it to stay visible
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));
});
