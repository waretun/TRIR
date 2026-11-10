// 1. Пункт 8d: Функция приветствия (запрос имени)
function greetUser() {
    let name = prompt("Назови свое имя, Погасший:", "Безымянный");
    if (name) {
        alert("Да будет свет, " + name + "! Удачи в бою.");
    }
}

// 2. Пункт 7: Адаптивное меню (бургер)
function toggleMenu() {
    let menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
}

// 3. Пункт 7: Кнопка "Наверх" (появляется при прокрутке)
window.onscroll = function() {
    let btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}