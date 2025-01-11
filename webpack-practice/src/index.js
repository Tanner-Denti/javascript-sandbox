import "./styles.css";
import homeLoad from "./scripts/home.js";
import menuLoad from "./scripts/menu.js";
import contactLoad from "./scripts/contact.js";

(function () {
    const content = document.getElementById("content");
    homeLoad(content);

    const contactBtn = document.querySelector(".contact-btn"); 
    const menuBtn = document.querySelector(".menu-btn"); 
    const homeBtn = document.querySelector(".home-btn"); 

    contactBtn.addEventListener("click", () => loadPage(contactLoad));
    menuBtn.addEventListener("click", () => loadPage(menuLoad));
    homeBtn.addEventListener("click", () => loadPage(homeLoad));

    function loadPage(pageLoadFunc) {
        content.innerHTML = "";
        pageLoadFunc(content);
    }
})();


