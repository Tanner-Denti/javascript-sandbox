import { sidebar } from "./sidebar.js";
import { todoForm } from "./todoForm";


export const mainContent = (function() {
    const mainContentDOM = document.createElement("main");

    mainContentDOM.appendChild(sidebar);
    mainContentDOM.appendChild(todoForm);

    return mainContentDOM;
})();
