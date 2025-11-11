// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const navToggle = document.getElementById('nav-toggle');
const navPanel = document.querySelector('.nav-links');

// Check for saved theme preference, default to dark mode
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
} else {
    // Default to dark mode if no preference is saved
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navToggle.checked && 
        !navPanel.contains(e.target) && 
        !navToggle.contains(e.target) && 
        !e.target.closest('label[for="nav-toggle"]')) {
        navToggle.checked = false;
    }
}); 