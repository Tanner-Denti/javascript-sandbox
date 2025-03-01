import { projectFactory } from "./model/projectFactory";


export const controller = (function() {
    const _projects = [];

    //const _projects = {};
    //_projects["Today"] = "today.png";
    //_projects["School"] = "school.png";
    //_projects["Grocery"] = "grocery.png";
    //_projects["Career"] = "career.png";

    _projects.push(projectFactory("Today"));
    _projects.push(projectFactory("School"));
    _projects.push(projectFactory("Grocery"));
    _projects.push(projectFactory("Career"));

    function getProjects() {
        return [..._projects]; 
    }



    return { getProjects };
})();
