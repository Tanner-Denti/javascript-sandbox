import "../../styles/todoCard.css";
import { controller } from "../controller.js";

function _handleTodoBtnClick(event) {
    const todoCard = event.target.parentElement;
    const titleDOM = todoCard.querySelector(".todo-title");

    controller.removeTodoFromCurrentProject(titleDOM.innerText);
}

export const todoCard = function(title, dueDate, description, priority) {
    const todoCardDOM = document.createElement("div");
    todoCardDOM.classList.add("todo-card-div");
    todoCardDOM.classList.add(priority);

    const _titleDOM = document.createElement("h2");
    _titleDOM.innerText = title;
    _titleDOM.classList.add("todo-title");

    const _dueDateDOM = document.createElement("p");
    _dueDateDOM.innerText = dueDate;
    _dueDateDOM.classList.add("todo-due-date");

    const _descriptionDOM = document.createElement("p");
    _descriptionDOM.innerText = description;
    _descriptionDOM.classList.add("todo-description");

    const _button = document.createElement("button");
    _button.innerText = "complete";
    _button.classList.add("todo-button");
    _button.addEventListener("click", _handleTodoBtnClick);

    todoCardDOM.appendChild(_titleDOM);
    todoCardDOM.appendChild(_dueDateDOM);
    todoCardDOM.appendChild(_descriptionDOM);
    todoCardDOM.appendChild(_button);

    return todoCardDOM;
}
