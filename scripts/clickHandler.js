// Получаем элементы DOM
var clickButton = document.getElementById('click-button');
var clickCountDisplay = document.getElementById('click-count');
var container = document.querySelector('.container');

var clickCount = 0;
var clickTimes = [];
var checkInterval = 5000; // Интервал в миллисекундах для проверки частоты кликов
var clickLimit = 5; // Лимит кликов для смены цвета

/// Обработчик клика на кнопке
clickButton.addEventListener('click', function(event) {
    // Обновляем количество кликов
    clickCount++;
    clickCountDisplay.textContent = clickCount;

    // Добавляем текущее время в массив времени кликов
    var currentTime = new Date().getTime();
    clickTimes.push(currentTime);

    // Удаляем клики старше checkInterval
    clickTimes = clickTimes.filter(function(time) {
        return currentTime - time < checkInterval;
    });

    // Проверяем частоту кликов
    if (clickTimes.length > clickLimit) {
        // Если кликов больше лимита, меняем цвет на фиолетовый
        container.style.borderColor = '#BE00ED';
        container.style.boxShadow = '0 0 64px #BE00ED30';
    } else {
        // Иначе меняем цвет на зеленый
        container.style.borderColor = '#28FF58';
        container.style.boxShadow = '0 0 64px #28FF5830';
    }

    // Очищаем массив времени кликов
    clickTimes = [];
});
