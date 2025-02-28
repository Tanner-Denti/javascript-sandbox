import "../../styles/mainContent.css";
import { sidebar } from "./sidebar.js";
import { todoForm } from "./todoForm";


export const mainContent = (function() {
    const mainContentDOM = document.createElement("main");
    const todoColumnDOM = document.createElement("div")

    todoColumnDOM.classList.add("todo-column-container");
    todoColumnDOM.appendChild(todoForm);

    mainContentDOM.appendChild(sidebar);
    mainContentDOM.appendChild(todoColumnDOM);

    return mainContentDOM;
})();
