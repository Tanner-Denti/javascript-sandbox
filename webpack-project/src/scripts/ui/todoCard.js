import "../../styles/todoCard.css";


export const todoCard = function(title, dueDate, description) {
    const todoCardDOM = document.createElement("div");

    const _titleDOM = document.createElement("h2");
    _titleDOM.innerText = title;

    const _dueDateDOM = document.createElement("p");
    _dueDateDOM.innerText = dueDate;

    const _descriptionDOM = document.createElement("p");
    _descriptionDOM.innerText = description;

    const _button = document.createElement("button");
    _button.innerText = "-";

    todoCardDOM.appendChild(_titleDOM);
    todoCardDOM.appendChild(_dueDateDOM);
    todoCardDOM.appendChild(_descriptionDOM);
    todoCardDOM.appendChild(_button);

    return todoCardDOM;
}
