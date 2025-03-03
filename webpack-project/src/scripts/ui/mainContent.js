import "../../styles/mainContent.css";
import { sidebar } from "./sidebar.js";
import { todoForm } from "./todoForm";
import { todoCardList } from "./todoCardList";


export const mainContent = (function() {
    const mainContentDOM = document.createElement("main");
    const _todoColumnDOM = document.createElement("div");
    _todoColumnDOM.classList.add("todo-column-container");

    const _dividerDOM = document.createElement("div");
    _dividerDOM.classList.add("divider-div");

    _todoColumnDOM.appendChild(todoForm);
    _todoColumnDOM.appendChild(_dividerDOM);
    _todoColumnDOM.appendChild(todoCardList);

    mainContentDOM.appendChild(sidebar);
    mainContentDOM.appendChild(_todoColumnDOM);

    return mainContentDOM;
})();
