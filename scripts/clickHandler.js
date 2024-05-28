// Получаем элементы DOM
var clickCountElement = document.getElementById('click-count');
var clickButton = document.getElementById('click-button');

// Устанавливаем начальное количество очков
var clickCount = 1083892; // Начальное количество очков

// Обработчик клика на кнопке
clickButton.addEventListener('click', function() {
    // Увеличиваем количество очков на 1
    clickCount++;
    // Обновляем текст на странице
    clickCountElement.textContent = clickCount.toLocaleString(); // Отображаем количество очков с разделителями
});

// Получаем элементы DOM
var clickButton = document.getElementById('click-button');

// Обработчик клика на кнопке
clickButton.addEventListener('click', function(event) {
    // Получаем координаты клика
    var x = event.clientX;
    var y = event.clientY;

    // Создаем одну частицу
    createParticle(x, y);
});

// Функция для создания одной частицы
function createParticle(x, y) {
    // Создаем элемент частицы
    var particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Определяем случайный цвет частицы
    if (Math.random() < 0.5) {
        particle.classList.add('green');
    } else {
        particle.classList.add('purple');
    }

    // Устанавливаем начальные координаты частицы
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // Добавляем частицу на страницу
    document.body.appendChild(particle);

    // Рассчитываем случайное направление и скорость движения частицы
    var angle = Math.random() * Math.PI * 2;
    var speed = Math.random() * 6 + 3; // Увеличиваем скорость частицы
    var vx = Math.cos(angle) * speed;
    var vy = Math.sin(angle) * speed;

    // Запускаем анимацию движения частицы
    requestAnimationFrame(moveParticle.bind(null, particle, vx, vy));
}

// Функция для анимации движения частицы
function moveParticle(particle, vx, vy) {
    // Обновляем координаты частицы
    var x = parseFloat(particle.style.left) + vx;
    var y = parseFloat(particle.style.top) + vy;

    // Устанавливаем новые координаты частицы
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    // Задержка для анимации
    requestAnimationFrame(moveParticle.bind(null, particle, vx, vy));

    // Постепенно затухаем и исчезаем частицу
    particle.style.opacity = Math.max(parseFloat(particle.style.opacity) - 0.01, 0);

    // Удаляем частицу после исчезновения
    if (parseFloat(particle.style.opacity) <= 0) {
        particle.parentNode.removeChild(particle);
    }
}
