console.log("Скрипт theme_toggle.js загружен!");

const themeToggle = document.querySelector('#toggle');

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        // Включаем тёмную тему
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        // Включаем светлую тему
        document.documentElement.removeAttribute('data-theme');
    }
});