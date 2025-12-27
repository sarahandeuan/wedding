// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// FAQ Toggle - using setTimeout to ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const faqQuestions = document.querySelectorAll('.faq-question');
        console.log('FAQ questions found:', faqQuestions.length);

        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const isActive = faqItem.classList.contains('active');

                console.log('FAQ clicked, is active:', isActive);

                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });

                // Open clicked item if it wasn't active
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });
    }, 100);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Show/hide navigation based on scroll position and highlight active section
function updateNavigation() {
    const desktopNav = document.querySelector('.desktop-nav');
    const hero = document.querySelector('.hero');
    const heroHeight = hero ? hero.offsetHeight : 0;

    // Show nav after scrolling past hero
    if (window.pageYOffset > heroHeight) {
        desktopNav.classList.add('visible');
    } else {
        desktopNav.classList.remove('visible');
    }

    // Update active section
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.desktop-nav a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateNavigation);
window.addEventListener('load', updateNavigation);
