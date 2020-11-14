import displayMenu from './modules/menu.js';
import displayHeader from './modules/header.js';
import displayHome from './modules/home.js';

// Intialize page on page load
document.addEventListener("DOMContentLoaded", function () {
    displayHeader();
    switchToHome();
    checkForPress();
});

// Create listeners for the header buttons
function checkForPress() {
    const tabs = Array.from(document.getElementsByClassName("headerItem"));
    tabs.forEach(btn => btn.addEventListener("click", switchTab));
}

function switchToHome() {
    //check which tab is currently displayed - remove it and display home
    const homeContent = document.querySelector(".welcome");
    const menuContent = document.querySelector(".menu");
    const contactContent = document.querySelector(".contact");
    if (homeContent) return;
    if (menuContent) menuContent.remove();
    if (contactContent) contactContent.remove();
    displayHome();
}

function switchToMenu() {
    //check which tab is currently displayed - remove it and display menu
    const homeContent = document.querySelector(".welcome");
    const menuContent = document.querySelector(".menu");
    const contactContent = document.querySelector(".contact");
    if (menuContent) return;
    if (homeContent) homeContent.remove();
    if (contactContent) contactContent.remove();
    displayMenu();
}

function switchTab(e) {
    const selectedBtn = e.target.id; //id of the button pressed
    switch (selectedBtn) {
        case "menu":
            switchToMenu();
            break;
        case "about":
            switchToHome();
            break;
    }
}