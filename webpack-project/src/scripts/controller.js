import { projectFactory } from "./model/projectFactory";


export const controller = (function() {
    const _projects = [];

    _projects.push(projectFactory("Today"));
    _projects.push(projectFactory("School"));
    _projects.push(projectFactory("Grocery"));
    _projects.push(projectFactory("career"));

    function getProjects() {
        return [..._projects]; 
    }



    return { getProjects };
})();
