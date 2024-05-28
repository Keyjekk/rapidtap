document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const clickCountSpan = document.getElementById('click-count');
    const clickButton = document.getElementById('click-button');

    clickButton.addEventListener('click', () => {
        clickCount++;
        clickCountSpan.textContent = clickCount;
    });
});
