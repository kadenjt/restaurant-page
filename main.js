(()=>{"use strict";function e(){const e=document.querySelector(".welcome"),t=document.querySelector(".menu"),n=document.querySelector(".contact");e||(t&&t.remove(),n&&n.remove(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.className="welcome";const n=document.createElement("img");n.id="backgroundImg",n.src="./img/restaurant.jpg",n.alt="Picture of restaurant";const c=document.createElement("h1");c.id="displayName",c.textContent="Kaden's Restaurant",t.appendChild(n),t.appendChild(c),e.appendChild(t)})())}function t(t){const n=t.target.id;switch(console.log(n),n){case"menu":!function(){const e=document.querySelector(".welcome"),t=document.querySelector(".menu"),n=document.querySelector(".contact");t||(e&&e.remove(),n&&n.remove(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.className="menu";const n=document.createElement("h4");n.className="menuItem",n.textContent="Burger",t.appendChild(n),e.appendChild(t)})())}();break;case"about":e()}}document.addEventListener("DOMContentLoaded",(function(){(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.className="header";const n=document.createElement("div");n.className="headerItem",n.id="menu",n.textContent="Menu";const c=document.createElement("div");c.className="headerItem",c.id="about",c.textContent="About";const o=document.createElement("div");o.className="headerItem",o.id="contact",o.textContent="Contact",t.appendChild(o),t.insertBefore(c,o),t.insertBefore(n,c),e.appendChild(t)})(),e(),Array.from(document.getElementsByClassName("headerItem")).forEach((e=>e.addEventListener("click",t)))}))})();