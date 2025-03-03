import "../../styles/sidebar.css";
import "../../styles/newProjectForm.css";
import careerImg from "../../images/career.png";
import genericImg from "../../images/generic.png";
import groceryImg from "../../images/grocery.png";
import schoolImg from "../../images/school.png";
import todayImg from "../../images/today.png";
import plusImg from "../../images/plus.png";
import { controller } from "../controller.js";


const _sidebarNavObj = (function() {
    const _nav = document.createElement("nav");
    _nav.classList.add("sidebar-nav");

    const _imageMap = {
        career: careerImg,
        grocery: groceryImg,
        school: schoolImg,
        today: todayImg
    };

    function _handleClickNavLink(event) {
        const parent = event.target.parentElement;
        const projectLink = parent.querySelector("a");

        const links = _nav.querySelectorAll(".project-link-div");
        links.forEach(link => link.classList.remove("active"));

        parent.classList.add("active");
        controller.updateCurrentProject(projectLink.textContent);

        // Trigger a reload of the task list UI
    };

    function _navLinkProjectFactory(projName) {
        const linkDiv = document.createElement("div");
        linkDiv.classList.add("project-link-div");

        const _img = document.createElement("img");
        _img.src = _imageMap[projName.toLowerCase()] || genericImg;
        _img.alt = `${projName} icon`;
        _img.classList.add("project-icon")

        const _link = document.createElement("a");
        _link.textContent = projName;

        _img.addEventListener("click", _handleClickNavLink);
        _link.addEventListener("click", _handleClickNavLink);

        linkDiv.appendChild(_img);
        linkDiv.appendChild(_link);

        return linkDiv;
    }

    function getNav() {
        return _nav;
    }

    function reLoadProjectsNav() {
        const projects = controller.getProjects();
        const currentProject = controller.getCurrentProject();

        _nav.innerHTML = "";

        projects.forEach(proj => {
            const projName = proj.getName();
            
            const linkDiv = _navLinkProjectFactory(projName);

            if (projName === currentProject) {
                linkDiv.classList.add("active");
            }

            _nav.appendChild(linkDiv);
        });
    }

    return { getNav, reLoadProjectsNav }
})()

const _newProjectFormObj = (function() {
    const _newProjectForm = document.createElement("form");
    _newProjectForm.classList.add("new-project-form");

    const _newProjectDiv = document.createElement("div");
    _newProjectDiv.classList.add("new-project-div");

    const _newProjectLabel = document.createElement("label");
    _newProjectLabel.setAttribute("for", "new-project-input");

    const _newProjectInput = document.createElement("input");
    _newProjectInput.setAttribute("id", "new-project-input");
    _newProjectInput.classList.add("new-project-input");
    _newProjectInput.setAttribute("name", "new-project-input");
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

    _newProjectForm.addEventListener("submit", _handleAddProjectFormSubmit);

    function _handleAddProjectFormSubmit(event) {
        event.preventDefault();

        const input = document.querySelector(".new-project-input");
        const projectName = input.value;
        if (projectName === "") {
            return;
        } else if (controller.projectExists(projectName)) {
            alert("No duplicate projects");
            return;
        }
         
        controller.addProject(projectName);
        input.value = "";

        _sidebarNavObj.reLoadProjectsNav();
    }

    function getForm() { return _newProjectForm }
    function clearInput() {
        _newProjectInput.innerText = "";
    }

    return { getForm, clearInput };
})();

export const sidebar = (function() {

    const _newProjectBtnState = (function() {
        let _showNewProjectInput = false;

        const flip = function() {
            _showNewProjectInput = !_showNewProjectInput;
        }
        const get = function() {
            return _showNewProjectInput;
        }
        return { flip, get }
    })();

    const sidebarDOM = document.createElement("div");
    sidebarDOM.classList.add("sidebar");

    const _addProjectDiv = document.createElement("div");
    _addProjectDiv.classList.add("add-project-div");

    const _addProjectIcon = document.createElement("img");
    _addProjectIcon.src = plusImg;
    _addProjectIcon.alt = "Add Project Image";
    _addProjectIcon.classList.add("project-icon");
    _addProjectIcon.classList.add("add-project-icon");
    _addProjectIcon.addEventListener("click", _handleAddProjectIconClick);

    const _newP = document.createElement("p");
    _newP.classList.add("new-p");
    _newP.textContent = "New Project";
    _newP.addEventListener("click", _handleAddProjectIconClick);

    _addProjectDiv.appendChild(_addProjectIcon);
    _addProjectDiv.appendChild(_newP);

    _sidebarNavObj.reLoadProjectsNav();
    sidebarDOM.appendChild(_sidebarNavObj.getNav());
    sidebarDOM.appendChild(_addProjectDiv);

    function _handleAddProjectIconClick() {
        _newProjectBtnState.flip();
        
        const addProjectDiv = document.querySelector(".add-project-div");
        const showNewProjectInput = _newProjectBtnState.get();
        const pTag = document.querySelector(".new-p");

        if (showNewProjectInput) {
            pTag.style.display = "none";

            addProjectDiv.appendChild(_newProjectFormObj.getForm());
        } else {
            _newProjectFormObj.clearInput();
            addProjectDiv.removeChild(_newProjectFormObj.getForm());

            pTag.style.display = "block";
        }
    };

    return sidebarDOM;
})();

