import "../../styles/todoForm.css";
import { controller } from "../controller.js";


function _handleTodoFormSubmit(event) {
    event.preventDefault();
    const titleInput = document.getElementById("title-input");
    const descriptionInput = document.getElementById("description-input");
    const dueDateInput = document.getElementById("due-date-input");
    const priorityInput = document.getElementById("priority-input");

    if (titleInput.value === "" ||
        descriptionInput.value === "" ||
        dueDateInput.value === "" ||
        priorityInput.value === "Priority") {
        return;
    }

    controller.addTodoToCurrentProject(
        titleInput.value,
        descriptionInput.value,
        dueDateInput.value,
        priorityInput.value
    );

    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "";
}

export const todoForm = (function() {
    const todoFormDOM = document.createElement("form");
    todoFormDOM.classList.add("todo-form");
    todoFormDOM.setAttribute("method", "post");
    todoFormDOM.setAttribute("action", "");

    const _leftFields = document.createElement("div");
    _leftFields.classList.add("left-form-fields");

    const _rightFields = document.createElement("div");
    _rightFields.classList.add("right-form-fields");

    // Title
    const _titleDiv = document.createElement("div");
    _titleDiv.classList.add("title-div");

    const _titleLabel = document.createElement("label");
    _titleLabel.setAttribute("for", "title-input");

    const _titleInput = document.createElement("input");
    _titleInput.setAttribute("id", "title-input");
    _titleInput.setAttribute("type", "text");
    _titleInput.setAttribute("placeholder", "Title");
    _titleInput.maxLength = 40;

    _titleDiv.appendChild(_titleLabel);
    _titleDiv.appendChild(_titleInput);
    _leftFields.appendChild(_titleDiv);

    // Description
    const _descriptionDiv = document.createElement("div");
    _descriptionDiv.classList.add("description-div");

    const _descriptionLabel = document.createElement("label");
    _descriptionLabel.setAttribute("for", "description-input");

    const _descriptionInput = document.createElement("textarea");
    _descriptionInput.setAttribute("id", "description-input");
    _descriptionInput.setAttribute("placeholder", "Description");
    _descriptionInput.style.resize = "none";

    _descriptionDiv.appendChild(_descriptionLabel);
    _descriptionDiv.appendChild(_descriptionInput);
    _leftFields.appendChild(_descriptionDiv);

    // Date
    const _dueDateDiv = document.createElement("div");

    const _dueDateInput = document.createElement("input");
    _dueDateInput.classList.add("due-date");
    _dueDateInput.setAttribute("id", "due-date-input");
    _dueDateInput.setAttribute("type", "date");
    _dueDateInput.valueAsDate = new Date();

    const _dueDateLabel = document.createElement("label");
    _dueDateLabel.setAttribute("for", "due-date-input");

    _dueDateDiv.appendChild(_dueDateLabel);
    _dueDateDiv.appendChild(_dueDateInput);
    _rightFields.appendChild(_dueDateDiv);

    // Priority
    const _priorityDiv = document.createElement("div");

    const _priorityLabel = document.createElement("label");
    _priorityLabel.setAttribute("for", "priority-input");

    const _prioritySelect = document.createElement("select");
    _prioritySelect.setAttribute("id", "priority-input");

    const _placeHolderOption = document.createElement("option");
    _placeHolderOption.value = "";
    _placeHolderOption.textContent = "Priority";
    _placeHolderOption.selected = true;
    _placeHolderOption.disabled = true;
    _prioritySelect.appendChild(_placeHolderOption);

    const _priorities = ["Low", "Medium", "High"];
    _priorities.forEach((priority) => {
        const option = document.createElement("option");
        option.value = priority;
        option.textContent = priority;
        _prioritySelect.appendChild(option);
    });

    _priorityDiv.appendChild(_priorityLabel);
    _priorityDiv.appendChild(_prioritySelect);
    _rightFields.appendChild(_priorityDiv);

    // Create Button
    const _createBtn = document.createElement("button");
    _createBtn.setAttribute("type", "submit");
    _createBtn.textContent = "Create Todo";
    _rightFields.appendChild(_createBtn);

    todoFormDOM.appendChild(_leftFields);
    todoFormDOM.appendChild(_rightFields);

    todoFormDOM.addEventListener("submit", _handleTodoFormSubmit);

    return todoFormDOM;
})();
