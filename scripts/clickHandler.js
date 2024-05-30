// Получаем элементы DOM
var clickButton = document.getElementById('click-button');
var clickCountElement = document.getElementById('click-count');

const AllProgressBar = 150; //150px bar

var needToRecieve = 0;

const SILVER_LIMIT = 50000;
const GOLD_LIMIT = 250000;
const RUBY_LIMIT = 1000000;
const EMERALD_LIMIT = 17000000;
const DIAMOND_LIMIT = 50000000;
const PLATINUM_LIMIT = 250000000;
const LORD_LIMIT = 2000000000;

const BRONZE_COLOR_FIRST = "#C04D1C";
const BRONZE_COLOR_SECOND = "#FF964A";
const BRONZE_BORDER_IMG = "#FF964A";
const BRONZE_BORDER_CONTENT = "#C04D1C";
const BRONZE_SHADOW = "#FF964A50";
const BRONZE_NAME = "BRONZE";
const BRONZE_LIMIT_TEXT = "0";

const SILVER_COLOR_FIRST = "#BDBDBD";
const SILVER_COLOR_SECOND = "#FFFFFF";
const SILVER_BORDER_IMG = "#BDBDBD";
const SILVER_BORDER_CONTENT = "#FF964A";
const SILVER_SHADOW = "#BDBDBD50";
const SILVER_NAME = "SILVER";
const SILVER_LIMIT_TEXT = "50K";

const GOLD_COLOR_FIRST = "#FFB800";
const GOLD_COLOR_SECOND = "#FFC062";
const GOLD_BORDER_IMG = "#FFB800";
const GOLD_BORDER_CONTENT = "#FFB800";
const GOLD_SHADOW = "#FFC06250";
const GOLD_NAME = "GOLD";
const GOLD_LIMIT_TEXT = "250K";

const RUBY_COLOR_FIRST = "#D10B3B";
const RUBY_COLOR_SECOND = "#FF6A85";
const RUBY_BORDER_IMG = "#D10B3B";
const RUBY_BORDER_CONTENT = "#D10B3B";
const RUBY_SHADOW = "#FF6A8560";
const RUBY_NAME = "RUBY";
const RUBY_LIMIT_TEXT = "1M";

const EMERALD_COLOR_FIRST = "#0BD113";
const EMERALD_COLOR_SECOND = "#8fff84";
const EMERALD_BORDER_IMG = "#0BD113";
const EMERALD_BORDER_CONTENT = "#0BD113";
const EMERALD_SHADOW = "#8fff8450";
const EMERALD_NAME = "EMERALD";
const EMERALD_LIMIT_TEXT = "17M";

const DIAMOND_COLOR_FIRST = "#0B96D1";
const DIAMOND_COLOR_SECOND = "#6AFFF6";
const DIAMOND_BORDER_IMG = "#0B96D1";
const DIAMOND_BORDER_CONTENT = "#0B96D1";
const DIAMOND_SHADOW = "#6AFFF650";
const DIAMOND_NAME = "DIAMOND";
const DIAMOND_LIMIT_TEXT = "50M";

const PLATINUM_COLOR_FIRST = "#470080";
const PLATINUM_COLOR_SECOND = "#844AFF";
const PLATINUM_BORDER_IMG = "#470080";
const PLATINUM_BORDER_CONTENT = "#470080";
const PLATINUM_SHADOW = "#844AFF50";
const PLATINUM_NAME = "PLATINUM";
const PLATINUM_LIMIT_TEXT = "250M";

const LORD_COLOR_FIRST = "#470080";
const LORD_COLOR_SECOND = "#844AFF";
const LORD_BORDER_IMG = "#470080";
const LORD_BORDER_CONTENT = "#470080";
const LORD_SHADOW = "#844AFF50";
const LORD_NAME = "LORD";
const LORD_LIMIT_TEXT = "2B";

var container = document.getElementById('container');
var leagueName = document.getElementById('league-name');
var leagueLimit = document.getElementById('limit');
var profileImage = document.getElementById('profile-image');

var currentBar = document.getElementById('current-bar');

var currentLeague = SILVER_NAME;
var CountForClick = 1;

document.addEventListener("DOMContentLoaded", function(){

    var progress = loadProgress();
    clickCount = progress.clickCount;
    currentLeague = progress.currentLeague;
    clickCountElement.textContent = clickCount.toLocaleString();
    initializeLeague(currentLeague);
    updateBar(clickCount);

    console.log(clickCount);
    console.log(currentLeague);

  });

function updateLeague(clickAmount) {
    if(clickAmount < SILVER_LIMIT && currentLeague == BRONZE_NAME){
        currentLeague = BRONZE_NAME;
        container.style.borderColor = BRONZE_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + BRONZE_SHADOW;
        leagueName.textContent = BRONZE_NAME;
        leagueName.classList.add("bronze");
        leagueLimit.textContent = SILVER_LIMIT_TEXT;
        profileImage.style.borderColor = BRONZE_BORDER_IMG;

        needToRecieve = SILVER_LIMIT;
        updateBar(clickAmount);
    } else if (clickAmount >= SILVER_LIMIT && currentLeague == BRONZE_NAME) {
        currentLeague = SILVER_NAME;
        container.style.borderColor = SILVER_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + SILVER_SHADOW;
        leagueName.textContent = SILVER_NAME;
        leagueName.classList.add("silver");
        profileImage.style.borderColor = SILVER_BORDER_IMG;
        leagueLimit.textContent = GOLD_LIMIT_TEXT; 

        needToRecieve = GOLD_LIMIT;
        updateBar(clickAmount);
    } else if (clickAmount >= GOLD_LIMIT && currentLeague == SILVER_NAME) {
        currentLeague = GOLD_NAME;
        container.style.borderColor = GOLD_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + GOLD_SHADOW;
        leagueName.textContent = GOLD_NAME;
        leagueName.classList.add("gold");
        profileImage.style.borderColor = GOLD_BORDER_IMG;
        leagueLimit.textContent = RUBY_LIMIT_TEXT; 

        needToRecieve = RUBY_LIMIT;
        updateBar(clickAmount);
    } else if (clickAmount >= RUBY_LIMIT && currentLeague == GOLD_NAME) {
        currentLeague = RUBY_NAME;
        container.style.borderColor = RUBY_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + RUBY_SHADOW;
        leagueName.textContent = RUBY_NAME;
        leagueName.classList.add("ruby");
        profileImage.style.borderColor = RUBY_BORDER_IMG;
        leagueLimit.textContent = EMERALD_LIMIT_TEXT; 

        needToRecieve = EMERALD_LIMIT;
        updateBar(clickAmount);
    } else if (clickAmount >= EMERALD_LIMIT && currentLeague == RUBY_NAME) {
        currentLeague = EMERALD_NAME;
        container.style.borderColor = EMERALD_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + EMERALD_SHADOW;
        leagueName.textContent = EMERALD_NAME;
        leagueName.classList.add("emerald");
        profileImage.style.borderColor = EMERALD_BORDER_IMG;
        leagueLimit.textContent = DIAMOND_LIMIT_TEXT; 

        needToRecieve = DIAMOND_LIMIT;
        updateBar(clickAmount);
    } else if (clickAmount >= DIAMOND_LIMIT && currentLeague == EMERALD_NAME) {
        currentLeague = DIAMOND_NAME;
        container.style.borderColor = DIAMOND_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + DIAMOND_SHADOW;
        leagueName.textContent = DIAMOND_NAME;
        leagueName.classList.add("diamond");
        profileImage.style.borderColor = DIAMOND_BORDER_IMG;
        leagueLimit.textContent = PLATINUM_LIMIT_TEXT; 

        needToRecieve = PLATINUM_LIMIT;
        updateBar(clickAmount);
    } else if (clickAmount >= PLATINUM_LIMIT && currentLeague == DIAMOND_NAME) {
        currentLeague = PLATINUM_NAME;
        container.style.borderColor = PLATINUM_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + PLATINUM_SHADOW;
        leagueName.textContent = PLATINUM_NAME;
        leagueName.classList.add("platinum");
        profileImage.style.borderColor = PLATINUM_BORDER_IMG;
        leagueLimit.textContent = "max"; 

        needToRecieve = 99999999999999999999999999999999999999999999;
        updateBar(clickAmount);
    } /* else if (clickAmount >= LORD_LIMIT && currentLeague == PLATINUM_NAME) {
        currentLeague = LORD_NAME;
        container.style.borderColor = LORD_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + LORD_SHADOW;
        leagueName.textContent = LORD_NAME;
        leagueName.classList.add("platinum");
        profileImage.style.borderColor = LORD_BORDER_IMG;
        leagueLimit.textContent = "max"; 

        needToRecieve = 99999999999999999999999999999999999999999999;
        updateBar(clickAmount);
    } */
}

function initializeLeague(currentLeague) {
    if(currentLeague == BRONZE_NAME){
        currentLeague = BRONZE_NAME;
        container.style.borderColor = BRONZE_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + BRONZE_SHADOW;
        leagueName.textContent = BRONZE_NAME;
        leagueName.classList.add("bronze");
        leagueLimit.textContent = SILVER_LIMIT_TEXT;
        profileImage.style.borderColor = BRONZE_BORDER_IMG;

    } else if (currentLeague == SILVER_NAME) {
        currentLeague = SILVER_NAME;
        container.style.borderColor = SILVER_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + SILVER_SHADOW;
        leagueName.textContent = SILVER_NAME;
        leagueName.classList.add("silver");
        profileImage.style.borderColor = SILVER_BORDER_IMG;
        leagueLimit.textContent = GOLD_LIMIT_TEXT; 

    } else if (currentLeague == GOLD_NAME) {
        currentLeague = GOLD_NAME;
        container.style.borderColor = GOLD_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + GOLD_SHADOW;
        leagueName.textContent = GOLD_NAME;
        leagueName.classList.add("gold");
        profileImage.style.borderColor = GOLD_BORDER_IMG;
        leagueLimit.textContent = RUBY_LIMIT_TEXT; 

    } else if (currentLeague == RUBY_NAME) {
        currentLeague = RUBY_NAME;
        container.style.borderColor = RUBY_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + RUBY_SHADOW;
        leagueName.textContent = RUBY_NAME;
        leagueName.classList.add("ruby");
        profileImage.style.borderColor = RUBY_BORDER_IMG;
        leagueLimit.textContent = EMERALD_LIMIT_TEXT; 

    } else if (currentLeague == EMERALD_NAME) {
        currentLeague = EMERALD_NAME;
        container.style.borderColor = EMERALD_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + EMERALD_SHADOW;
        leagueName.textContent = EMERALD_NAME;
        leagueName.classList.add("emerald");
        profileImage.style.borderColor = EMERALD_BORDER_IMG;
        leagueLimit.textContent = DIAMOND_LIMIT_TEXT; 

    } else if (currentLeague == DIAMOND_NAME) {
        currentLeague = DIAMOND_NAME;
        container.style.borderColor = DIAMOND_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + DIAMOND_SHADOW;
        leagueName.textContent = DIAMOND_NAME;
        leagueName.classList.add("diamond");
        profileImage.style.borderColor = DIAMOND_BORDER_IMG;
        leagueLimit.textContent = PLATINUM_LIMIT_TEXT; 

    } else if (currentLeague == PLATINUM_NAME) {
        currentLeague = PLATINUM_NAME;
        container.style.borderColor = PLATINUM_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + PLATINUM_SHADOW;
        leagueName.textContent = PLATINUM_NAME;
        leagueName.classList.add("platinum");
        profileImage.style.borderColor = PLATINUM_BORDER_IMG;
        leagueLimit.textContent = "max"; 

    } /* else if (currentLeague == LORD_NAME) {
        currentLeague = LORD_NAME;
        container.style.borderColor = LORD_BORDER_IMG;
        container.style.boxShadow = "0px 0px 70px " + LORD_SHADOW;
        leagueName.textContent = LORD_NAME;
        leagueName.classList.add("platinum");
        profileImage.style.borderColor = LORD_BORDER_IMG;
        leagueLimit.textContent = "max"; 

    } */
}

function updateBar(clickAmount){

    switch (currentLeague) {
        case 'BRONZE':
            needToRecieve = SILVER_LIMIT;
            break;

        case 'SILVER':
            needToRecieve = GOLD_LIMIT;
            break;

        case 'GOLD':
            needToRecieve = RUBY_LIMIT;
            break;

        case 'RUBY':
            needToRecieve = EMERALD_LIMIT;
            break;

        case 'EMERALD':
            needToRecieve = DIAMOND_LIMIT;
            break;

        case 'DIAMOND':
            needToRecieve = PLATINUM_LIMIT;
            break;

        case 'PLATINUM':
            needToRecieve = 0;
            break;
    
        default:
            needToRecieve = 0;
            break;
    }

    var percentage = (clickAmount / needToRecieve) * 100;

    var newWidth = (AllProgressBar * percentage) / 100;

    if(newWidth > 150){
        newWidth = 150;
    }

    currentBar.style.width = newWidth + "px";

}

// Обработчик клика на кнопке
clickButton.addEventListener('click', function() {
    // Увеличиваем количество кликов
    clickCount = clickCount + CountForClick;

    // Обновляем отображение количества кликов
    clickCountElement.textContent = clickCount.toLocaleString();

    // Обновляем лигу
    updateLeague(clickCount);
    updateBar(clickCount);

    saveProgress(clickCount, currentLeague);
});

// Сохранение данных в Local Storage
function saveProgress(clickCount, currentLeague) {
    localStorage.setItem('clickCount', clickCount);
    localStorage.setItem('currentLeague', currentLeague);
}

// Загрузка данных из Local Storage
function loadProgress() {
    var clickCount = localStorage.getItem('clickCount');
    var currentLeague = localStorage.getItem('currentLeague');
    return { clickCount: clickCount ? parseInt(clickCount) : 0, currentLeague: currentLeague || BRONZE_NAME };
}




