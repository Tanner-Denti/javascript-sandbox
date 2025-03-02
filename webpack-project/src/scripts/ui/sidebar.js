import "../../styles/sidebar.css";
import careerImg from "../../images/career.png";
import genericImg from "../../images/generic.png";
import groceryImg from "../../images/grocery.png";
import schoolImg from "../../images/school.png";
import todayImg from "../../images/today.png";
import plusImg from "../../images/plus.png";
import { controller } from "../controller.js";
import { newProjectFormObj } from "./newProjectForm.js";


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

const _imageMap = {
    career: careerImg,
    grocery: groceryImg,
    school: schoolImg,
    today: todayImg
};

const _handleAddProjectIconClick = function() {
    _newProjectBtnState.flip();
    
    const addProjectDiv = document.querySelector(".add-project-div");
    const showNewProjectInput = _newProjectBtnState.get();
    const pTag = document.querySelector(".new-p");

    if (showNewProjectInput) {
        pTag.style.display = "none";

        addProjectDiv.appendChild(newProjectFormObj.getForm());
    } else {
        newProjectFormObj.clearInput();
        addProjectDiv.removeChild(newProjectFormObj.getForm());

        pTag.style.display = "block";
    }
};

const _handleClickNavLink = function(event) {
    console.log(event.target);
};

const _navLinkProjectFactory = function(projName) {
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
};

const _loadProjectsNav = function(nav, projects) {
    projects.forEach(proj => {
        const projName = proj.getName();
        
        const linkDiv = _navLinkProjectFactory(projName);

        nav.appendChild(linkDiv);
    });
};

export const sidebar = (function() {

    const _projects = controller.getProjects();

    const sidebarDOM = document.createElement("div");
    sidebarDOM.classList.add("sidebar");

    const _nav = document.createElement("nav");

    // Add project Section
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

    _loadProjectsNav(_nav, _projects);
    sidebarDOM.appendChild(_nav);
    sidebarDOM.appendChild(_addProjectDiv);

    return sidebarDOM;
})();

