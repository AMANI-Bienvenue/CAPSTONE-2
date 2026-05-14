const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

menuToggle?.addEventListener('click', () => {
    mainNav?.classList.toggle('open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mainNav?.classList.remove('open');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mainNav?.classList.remove('open');
    }
});

function showMessage() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }
    window.location.href = '#contact';
}

function buyCar(carName) {
    const message = `Thank you for your interest in ${carName}. A specialist will contact you soon to arrange a private consultation.`;
    alert(message);
}

function submitContact(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const status = document.querySelector('#formStatus');
    const name = form.name.value.trim();
    const email = form.email.value.trim();

    if (!name || !email) {
        status.textContent = 'Please enter your name and email address.';
        return;
    }

    status.textContent = `Thanks, ${name}! Your request has been received. We will follow up at ${email} shortly.`;
    form.reset();
}

window.addEventListener('DOMContentLoaded', () => {
    // Update active nav link based on current hash
    const currentHash = window.location.hash || '#home';
    
    navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentHash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Show intro overlay on first load
    const introOverlay = document.getElementById('introOverlay');
    if (introOverlay) {
        setTimeout(() => {
            introOverlay.classList.add('hidden');
        }, 2400);
        setTimeout(() => {
            introOverlay.remove();
        }, 3200);
    }
});

// Update active nav link when hash changes
window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash || '#home';
    navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentHash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking outside
window.addEventListener('click', (event) => {
    const target = event.target;
    if (mainNav?.classList.contains('open') && !target.closest('.main-nav') && !target.closest('.menu-toggle')) {
        mainNav.classList.remove('open');
    }
});
