// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter Effect for Hero Section
const typewriter = document.querySelector('.typewriter');
const typeText = "Web Designer & Developer";
let index = 0;

function type() {
    if (index < typeText.length) {
        typewriter.textContent += typeText.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
type();

// Portfolio Grid Hover Effect
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = 'none';
    });
});

// Form Validation for Hire Me Section
const hireForm = document.querySelector('.hire-form');
hireForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const project = document.getElementById('project').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all required fields!');
        return;
    }

    // Simulate sending form data
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    hireForm.reset();
});

// Scroll-To-Top Button
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = "↑";
scrollTopButton.classList.add('scroll-top');
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animated Counters in About Section
const counters = document.querySelectorAll('.stats h3');
let counterStarted = false;

function startCounters() {
    if (counterStarted) return;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;

        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });

    counterStarted = true;
}

window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats');
    const statsTop = statsSection.getBoundingClientRect().top;

    if (statsTop < window.innerHeight - 100) {
        startCounters();
    }
});

// Contact Button Animation
const contactButtons = document.querySelectorAll('.contact-btn');
contactButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
    });
});


// Services Section Animation
const services = document.querySelectorAll('.service');
window.addEventListener('scroll', () => {
    services.forEach(service => {
        const serviceTop = service.getBoundingClientRect().top;
        if (serviceTop < window.innerHeight - 50) {
            service.style.opacity = '1';
            service.style.transform = 'translateY(0)';
        } else {
            service.style.opacity = '0';
            service.style.transform = 'translateY(20px)';
        }
    });
});

// Initial State for Animation
services.forEach(service => {
    service.style.opacity = '0';
    service.style.transform = 'translateY(20px)';
    service.style.transition = 'all 0.5s ease-out';
});

