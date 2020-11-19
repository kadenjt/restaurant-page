import displayHeader from './modules/header.js';
import { switchToHome, checkForPress } from './modules/tab_logic.js';

// Intialize page on page load
document.addEventListener("DOMContentLoaded", function () {
    displayHeader();
    switchToHome();
    checkForPress();
});
