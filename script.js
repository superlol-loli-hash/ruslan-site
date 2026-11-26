// ============================================
// 1. СЧЁТЧИК КЛИКОВ
// ============================================
let count = 0;
let clickBtn = document.getElementById('click-btn');

clickBtn.addEventListener('click', function() {
    count = count + 1;
    alert('Ты нажал на кнопку ' + count + ' раз(а)!');
    clickBtn.textContent = 'Нажато: ' + count;
});

// ============================================
// 2. ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ
// ============================================
let themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        themeBtn.textContent = 'Вернуть тёмную тему ☀️';
    } else {
        themeBtn.textContent = 'Сменить тему 🌙';
    }
});

// ============================================
// 3. ФОРМА ПРИВЕТСТВИЯ
// ============================================
let form = document.getElementById('greeting-form');
let nameInput = document.getElementById('name-input');
let greetingMessage = document.getElementById('greeting-message');

form.addEventListener('submit', function(event) {
    // Запрещаем стандартную перезагрузку страницы
    event.preventDefault();
    
    let userName = nameInput.value.trim();
    
    if (userName !== '') {
        greetingMessage.textContent = 'Салам алейкум, ' + userName + '! Рад знакомству! 🤝';
        nameInput.value = ''; // Очищаем поле
    } else {
        greetingMessage.textContent = 'Пожалуйста, введи своё имя!';
    }
});