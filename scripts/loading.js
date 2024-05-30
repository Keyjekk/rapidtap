

    // Получаем элемент блока loading-block
    var loadingBlock = document.querySelector('.loading-block');

    // Задаем функцию для анимации ухода блока вниз
    function animateBlockDown() {
        // Добавляем класс для анимации
        

        // Ждем 4 секунды перед тем как убрать блок
        setTimeout(function() {
            // Скрываем блок
            loadingBlock.classList.add('slide-down');
        }, 4000); // 4000 миллисекунд = 4 секунды

        // Ждем 4 секунды перед тем как убрать блок
        setTimeout(function() {
            // Скрываем блок
            loadingBlock.style.display = 'none';
        }, 6000); // 6000 миллисекунд = 6 секунды
    }

    // Вызываем функцию анимации после загрузки страницы
    document.addEventListener('DOMContentLoaded', function() {
        animateBlockDown();
    });

