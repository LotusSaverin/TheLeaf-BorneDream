// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Light Mode';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Font Size Control
const decreaseFont = document.getElementById('decreaseFont');
const increaseFont = document.getElementById('increaseFont');
const fontSizeDisplay = document.getElementById('fontSizeDisplay');
let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;

// Set initial font size
document.documentElement.style.fontSize = currentFontSize + 'px';
fontSizeDisplay.textContent = currentFontSize + 'px';

decreaseFont.addEventListener('click', () => {
    if (currentFontSize > 12) {
        currentFontSize -= 1;
        updateFontSize();
    }
});

increaseFont.addEventListener('click', () => {
    if (currentFontSize < 24) {
        currentFontSize += 1;
        updateFontSize();
    }
});

function updateFontSize() {
    document.documentElement.style.fontSize = currentFontSize + 'px';
    fontSizeDisplay.textContent = currentFontSize + 'px';
    localStorage.setItem('fontSize', currentFontSize);
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Reading time estimation
document.addEventListener('DOMContentLoaded', () => {
    const contentText = document.querySelector('.content').innerText;
    const wordCount = contentText.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed
    console.log(`Estimated reading time: ${readingTime} minute(s)`);
});
