import "../../styles/mainContent.css";
import { sidebar } from "./sidebar.js";
import { todoForm } from "./todoForm";


export const mainContent = (function() {
    const mainContentDOM = document.createElement("main");
    const _todoColumnDOM = document.createElement("div")

    _todoColumnDOM.classList.add("todo-column-container");
    _todoColumnDOM.appendChild(todoForm);

    mainContentDOM.appendChild(sidebar);
    mainContentDOM.appendChild(_todoColumnDOM);

    return mainContentDOM;
})();
