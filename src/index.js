import displayMenu from './modules/menu.js';
import displayHeader from './modules/header.js';
import displayHome from './modules/home.js';

displayHeader();

function home() {
    const homeContent = document.querySelector(".welcome");
    const menuContent = document.querySelector(".menu");
    const contactContent = document.querySelector(".contact");
    if (homeContent) return;
    if (menuContent) menuContent.remove();
    if (contactContent) contactContent.remove();
    displayHome();
}

function menu() {
    const homeContent = document.querySelector(".welcome");
    const menuContent = document.querySelector(".menu");
    const contactContent = document.querySelector(".contact");
    if (menuContent) return;
    if (homeContent) homeContent.remove();
    if (contactContent) contactContent.remove();
    displayMenu();
}

home();
//menu();

function switchTab(e) {
    const selectedBtn = e.target.id;
    console.log(selectedBtn);
    switch (selectedBtn) {
        case "menu":
            menu();
            break;
        case "about":
            home();
            break;
    }
}

const tabs = Array.from(document.getElementsByClassName("headerItem"));
tabs.forEach(btn => btn.addEventListener("click", switchTab))