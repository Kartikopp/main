// ==================== NAVBAR FUNCTIONALITY ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        updateActiveLink(link);
    });
});

// ==================== ACTIVE LINK HIGHLIGHT ====================
function updateActiveLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Update active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.99)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    }
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.project-card, .service-card, .skill-card');
    elementsToObserve.forEach(el => observer.observe(el));
});

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== CONTACT FORM HANDLING ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const formInputs = contactForm.querySelectorAll('input, textarea');
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00d4ff, #0099ff);
        color: #000;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        font-weight: 600;
        z-index: 2000;
        animation: slideIn 0.5s ease;
    `;
    successMessage.textContent = '✓ Message sent successfully!';
    document.body.appendChild(successMessage);

    // Clear form
    formInputs.forEach(input => input.value = '');

    // Remove message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});

// ==================== DOWNLOAD RESUME FUNCTIONALITY ====================
const resumeBtn = document.querySelector('.resume-btn');
resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a simple PDF or document link
    // For now, showing an alert - replace with actual resume file path
    alert('Resume download will be implemented. Replace with your resume file path.');
    
    // Uncomment below to redirect to resume file
    // window.open('path/to/your/resume.pdf', '_blank');
});

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
    }
});

// ==================== PREVENT CONSOLE ERRORS ====================
console.log('%cGlitchxKartik Portfolio v1.0', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cDesigned and Built by Kartik Yadav', 'color: #b300ff; font-size: 12px;');
