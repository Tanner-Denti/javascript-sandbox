import "../../styles/sidebar.css";
import careerImg from "../../images/career.png";
import genericImg from "../../images/generic.png";
import groceryImg from "../../images/grocery.png";
import schoolImg from "../../images/school.png";
import todayImg from "../../images/today.png";
import plusImg from "../../images/plus.png";
import { controller } from "../controller.js";


export const sidebar = (function() {

    const _imageMap = {
        career: careerImg,
        grocery: groceryImg,
        school: schoolImg,
        today: todayImg
    }

    const projects = controller.getProjects();

    const sidebarDOM = document.createElement("div");
    sidebarDOM.classList.add("sidebar");

    const nav = document.createElement("nav");

    const addProjectDiv = document.createElement("div");
    addProjectDiv.classList.add("add-project-div");

    const plusImgUI = document.createElement("img");
    plusImgUI.src = plusImg;
    plusImgUI.alt = "New Project Image";
    plusImgUI.classList.add("project-icon")

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("project-btn");
    addProjectBtn.innerText = "Add Project";
    addProjectBtn.addEventListener("mouseover", handleMouseOverBtn);
    addProjectBtn.addEventListener("click", handleAddProjectBtnClick);

    addProjectDiv.appendChild(plusImgUI);
    addProjectDiv.appendChild(addProjectBtn);

    loadProjectsNav(nav, projects);
    sidebarDOM.appendChild(nav);
    sidebarDOM.appendChild(addProjectDiv);

    function loadProjectsNav(nav, projects) {
        projects.forEach(proj => {
            const linkDiv = document.createElement("div");
            linkDiv.classList.add("project-link-div");

            const projName = proj.getName();

            const img = document.createElement("img");
            img.src = _imageMap[projName.toLowerCase()] || genericImg;
            img.alt = `${projName} icon`;
            img.classList.add("project-icon")

            const link = document.createElement("a");
            link.textContent = projName;

            link.addEventListener("mouseover", handleMouseOverLink);
            link.addEventListener("click", handleClickLink);

            linkDiv.appendChild(img);
            linkDiv.appendChild(link);

            nav.appendChild(linkDiv);
        });
    }

    function handleMouseOverLink(event) { console.log(event.target); }
    function handleClickLink(event) { console.log(event.target); }
    function handleMouseOverBtn(event) { console.log(event.target); }
    function handleAddProjectBtnClick(event) { console.log(event.target); };

    return sidebarDOM;
})();
