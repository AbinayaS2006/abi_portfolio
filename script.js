// Typing Effect
const typingText = ["AI/ML Enthusiast", "Web Developer", "Problem Solver"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typingEffect() {
    currentText = typingText[index];

    if (!isDeleting) {
        document.getElementById("typing").textContent = currentText.substring(0, charIndex++);
    } else {
        document.getElementById("typing").textContent = currentText.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typingEffect, 1500);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % typingText.length;
    }

    setTimeout(typingEffect, isDeleting ? 60 : 120);
}

typingEffect();


// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Highlight Navbar on Scroll (optional)
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, 0.75)";
    } else {
        header.style.background = "rgba(0, 0, 0, 0.4)";
    }
});
