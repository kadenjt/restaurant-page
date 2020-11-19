import displayHome from './home.js';
import displayMenu from './menu.js';
import displayContact from './contact.js';

function switchToHome() {
    //check which tab is currently displayed - remove it and display home
    const homeContent = document.querySelector(".welcome");
    const menuContent = document.querySelector(".menu");
    const contactContent = document.querySelector(".contactUs");
    if (homeContent) return;
    if (menuContent) menuContent.remove();
    if (contactContent) contactContent.remove();
    displayHome();
}

function switchToMenu() {
    //check which tab is currently displayed - remove it and display menu
    const homeContent = document.querySelector(".welcome");
    const menuContent = document.querySelector(".menu");
    const contactContent = document.querySelector(".contactUs");
    if (menuContent) return;
    if (homeContent) homeContent.remove();
    if (contactContent) contactContent.remove();
    displayMenu();
}

function switchToContact() {
    //check which tab is currently displayed - remove it and display contact
    const homeContent = document.querySelector(".welcome");
    const menuContent = document.querySelector(".menu");
    const contactContent = document.querySelector(".contactUs");
    if (contactContent) return;
    if (menuContent) menuContent.remove();
    if (homeContent) homeContent.remove();
    displayContact();
}

function switchTab(e) {
    const selectedBtn = e.target.id; //id of the button pressed
    switch (selectedBtn) {
        case "menu":
            switchToMenu();
            break;
        case "home":
            switchToHome();
            break;
        case "contact":
            switchToContact();
            break;
    }
}

// Create listeners for the header buttons
function checkForPress() {
    const tabs = Array.from(document.getElementsByClassName("headerItem"));
    tabs.forEach(btn => btn.addEventListener("click", switchTab));
}

export {checkForPress as checkForPress, switchToHome as switchToHome};