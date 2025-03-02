import "../../styles/newProjectForm.css";


function _handleFormSubmit(event) {
    event.preventDefault();
    // TODO: add project to project list
    // Trigger a reload/rerender of the sidebar
}

export const newProjectFormObj = (function() {
    const _newProjectForm = document.createElement("form");
    _newProjectForm.classList.add("new-project-form");

    const _newProjectDiv = document.createElement("div");
    _newProjectDiv.classList.add("new-project-div");

    const _newProjectLabel = document.createElement("label");
    _newProjectLabel.setAttribute("for", "new-project-input");

    const _newProjectInput = document.createElement("input");
    _newProjectInput.setAttribute("id", "new-project-input");
    _newProjectInput.classList.add("new-project-input");
    _newProjectInput.setAttribute("type", "text");
    _newProjectInput.setAttribute("placeholder", "Project Name");
    _newProjectInput.maxLength = 16;

    const _createProjectBtn = document.createElement("button");
    _createProjectBtn.classList.add("create-project-btn");
    _createProjectBtn.textContent = "Create";
    _createProjectBtn.setAttribute("type", "submit");

    _newProjectDiv.appendChild(_newProjectLabel);
    _newProjectDiv.appendChild(_newProjectInput);
    _newProjectDiv.appendChild(_createProjectBtn);

    _newProjectForm.appendChild(_newProjectDiv);

    _newProjectForm.addEventListener("submit", _handleFormSubmit);

    function getForm() { return _newProjectForm }
    function clearInput() {
        _newProjectInput.innerText = "";
    }

    return { getForm, clearInput };
})();
