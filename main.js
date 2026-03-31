document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply scroll animations to sections and cards
    const animElements = document.querySelectorAll('.service-card, .project-item, .founder-card, .contact-grid');
    animElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });

    // Smooth header scale on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '1rem 10%';
            header.style.background = 'rgba(10, 14, 26, 0.95)';
        } else {
            header.style.padding = '1.5rem 10%';
            header.style.background = 'rgba(10, 14, 26, 0.8)';
        }
    });

    // Add a simple hover effect for the logo
    const logoArea = document.querySelector('.logo');
    logoArea.addEventListener('mouseenter', () => {
        logoArea.style.transform = 'scale(1.05)';
        logoArea.style.transition = 'transform 0.3s ease';
    });
    logoArea.addEventListener('mouseleave', () => {
        logoArea.style.transform = 'scale(1)';
    });

    // Handle form submission with Formspree (Removed - form no longer present)
});
