document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const navbar = document.querySelector('.navbar');
    const homeNav = document.querySelector('.home-nav');
    const heroSection = document.querySelector('.hero');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // Hide standard navbar if it exists
            if (navbar) {
                navbar.classList.add('hidden');
            }
            
            // Fade out hero content
            heroSection.style.transition = 'opacity 0.5s ease';
            heroSection.style.opacity = '0';

            // Show home nav overlay
            setTimeout(() => {
                heroSection.style.display = 'none';
                homeNav.classList.add('active');
            }, 500);
        });
    }
    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});
