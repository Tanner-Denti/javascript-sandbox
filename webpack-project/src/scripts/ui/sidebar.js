import "../../styles/sidebar.css";
import { controller } from "../controller.js";


export const sidebar = (function() {
    const projects = controller.getProjects();

    const sidebarDOM = document.createElement("div");
    sidebarDOM.classList.add("sidebar");

    const nav = document.createElement("nav");

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("project-btn");
    addProjectBtn.innerText = "Add Project";
    addProjectBtn.addEventListener("mouseover", handleMouseOverBtn);
    addProjectBtn.addEventListener("click", handleAddProjectBtnClick);

    loadProjectsNav(nav, projects);
    sidebarDOM.appendChild(nav);
    sidebarDOM.appendChild(addProjectBtn);

    function loadProjectsNav(nav, projects) {
        projects.forEach(proj => {
            const link = document.createElement("a");
            link.textContent = proj.getName();

            link.addEventListener("mouseover", handleMouseOverLink);
            link.addEventListener("click", handleClickLink);
            nav.appendChild(link);
        });
    }

    function handleMouseOverLink(event) { console.log(event.target); }
    function handleClickLink(event) { console.log(event.target); }
    function handleMouseOverBtn(event) { console.log(event.target); }
    function handleAddProjectBtnClick(event) { console.log(event.target); };

    return sidebarDOM;
})();
