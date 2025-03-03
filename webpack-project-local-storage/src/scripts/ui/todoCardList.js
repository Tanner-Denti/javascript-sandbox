import "../../styles/todoCardList.css";
import { todoCard } from "./todoCard.js";
import { controller } from "../controller.js";


export const todoCardList = (function() {
    const todoListDiv = document.createElement("div");
    todoListDiv.classList.add("todo-list-div");

    controller.subscribe("currentProjectUpdated", () => renderTodos());
    renderTodos();

    function renderTodos() {
        todoListDiv.innerHTML = "";

        const _currentTodos = controller.getCurrentProjectTodos();

        _currentTodos.forEach(todo => {
            const title = todo.getTitle();
            const dueDate = todo.getDueDate();
            const description = todo.getDescription();
            const priority = todo.getPriority();
            
            const todoDOM = todoCard(title, dueDate, description, priority.toLowerCase());

            todoListDiv.appendChild(todoDOM);
        });
    }

    return todoListDiv;
})();
