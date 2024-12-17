// ============================
// 1. Navbar Toggle for Mobile
// ============================
const navToggle = document.querySelector('.nav-toggle'); // Mobile menu button
const navLinks = document.querySelector('.nav-links');  // Navigation links container
const scrollLinks = document.querySelectorAll('.nav-links a'); // Individual navbar links

// Toggle the mobile menu
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Show or hide the menu
});

// Close mobile menu after clicking a link (for mobile view)
scrollLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Close menu
    });
});

// ============================
// 2. Smooth Scroll for Links
// ============================
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const targetId = e.target.getAttribute('href').slice(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed navbar
            behavior: 'smooth',
        });
    });
});

// ============================
// 3. Typing Effect in Hero Section
// ============================
const typewriterText = ["Hi, I'm John Mbusyo (Duke)", "A Creative Web Designer & Developer"]; // Text to type
let typeIndex = 0; // Index for the current sentence
let charIndex = 0; // Index for the current character
const heroElement = document.querySelector('.typewriter'); // Typing target

function typewriterEffect() {
    if (typeIndex < typewriterText.length) {
        if (charIndex < typewriterText[typeIndex].length) {
            heroElement.textContent += typewriterText[typeIndex].charAt(charIndex); // Add character
            charIndex++;
            setTimeout(typewriterEffect, 100); // Typing speed
        } else {
            charIndex = 0;
            typeIndex++;
            setTimeout(() => {
                heroElement.textContent = ""; // Clear text before typing the next sentence
                typewriterEffect();
            }, 2000); // Pause before the next sentence
        }
    } else {
        typeIndex = 0; // Restart typing effect
        setTimeout(typewriterEffect, 1000); // Pause before restarting
    }
}

// Start the typing effect
typewriterEffect();

// ============================
// 4. Portfolio Hover Effects
// ============================
const portfolioItems = document.querySelectorAll('.portfolio-item'); // Portfolio cards

portfolioItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        overlay.style.opacity = 1; // Show overlay on hover
    });

    item.addEventListener('mouseout', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        overlay.style.opacity = 0; // Hide overlay when not hovered
    });
});

// ============================
// 5. Dynamic Year in Footer
// ============================
const yearElement = document.getElementById('year'); // Footer year span
if (yearElement) {
    yearElement.textContent = new Date().getFullYear(); // Update year dynamically
}

// DOM Elements
const chatMessage = document.getElementById('chat-message');
const sendWhatsApp = document.getElementById('send-whatsapp');
const sendEmail = document.getElementById('send-email');

// Send Message via WhatsApp
sendWhatsApp.addEventListener('click', () => {
    const message = chatMessage.value.trim(); // Get the message content
    if (message) {
        const whatsappURL = `https://wa.me/254768537010?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank'); // Open WhatsApp in a new tab
        chatMessage.value = ''; // Clear the input field
    } else {
        alert('Please type a message before sending.');
    }
});

// Send Message via Email
sendEmail.addEventListener('click', () => {
    const message = chatMessage.value.trim(); // Get the message content
    if (message) {
        const emailAddress = 'dukembusyo@gmail.com';
        const subject = 'New Message from Website Chat';
        const mailtoURL = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoURL; // Open email client
        chatMessage.value = ''; // Clear the input field
    } else {
        alert('Please type a message before sending.');
    }
});


