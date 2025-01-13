

export const todoForm = (function() {
    const todoFormDOM = document.createElement("form");
    todoFormDOM.setAttribute("method", "post");
    todoFormDOM.setAttribute("action", "");

    const leftFields = document.createElement("div");
    leftFields.classList.add("left-form-fields");
    const rightFields = document.createElement("div");
    rightFields.classList.add("right-form-fields");

    const titleDiv = document.createElement("div");
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title-input");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "title-input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("value", "Title");
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);
    leftFields.appendChild(titleDiv);

    const descriptionDiv = document.createElement("div");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description-input");
    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("id", "description-input");
    descriptionInput.setAttribute("type", "textarea");
    descriptionInput.setAttribute("value", "Title");
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionInput);
    leftFields.appendChild(descriptionDiv);

    const dueDateDiv = document.createElement("div");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "due-date-input");
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("id", "due-date-input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.valueAsDate = new Date();
    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDateInput);
    rightFields.appendChild(dueDateDiv);

    const priorityDiv = document.createElement("div");
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority-input");
    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "priority-input");
    
    const priorities = ["Low", "Medium", "High"];
    priorities.forEach(priority => {
        const option = document.createElement("option");
        option.value = priority;
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);
    rightFields.appendChild(priorityDiv);

    const createBtn = document.createElement("button");
    createBtn.setAttribute("type", "submit");
    createBtn.textContent = "Create Todo";
    rightFields.appendChild(createBtn);

    todoFormDOM.appendChild(leftFields);
    todoFormDOM.appendChild(rightFields);
    
    todoFormDOM.addEventListener("submit", handleTodoFormSubmit);

    function handleTodoFormSubmit(event) {
        event.preventDefault();
        console.log("todoFormSubmit");
    }

    return todoFormDOM;
})();
