import displayHome from './home.js';
import displayMenu from './menu.js';

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
    console.log(selectedBtn);
    switch (selectedBtn) {
        case "menu":
            switchToMenu();
            break;
        case "about":
            switchToHome();
            break;
    }
}

export {switchTab as switchTab, switchToHome as switchToHome};