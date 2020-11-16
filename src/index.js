import displayHeader from './modules/header.js';
import {switchTab, switchToHome} from './modules/tab_logic.js';

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