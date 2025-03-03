import { projectFactory } from "./model/projectFactory";


export const controller = (function() {
    const _projects = {};

    _projects["Today"] = projectFactory("Today");
    _projects["School"] = projectFactory("School");
    _projects["Grocery"] = projectFactory("Grocery");
    _projects["Career"] = projectFactory("Career");

    let _currentProject = "Today";

    const _eventSubscriptions = {};

    function subscribe(event, callback) {
        if (!_eventSubscriptions[event]) {
            _eventSubscriptions[event] = [];
        } 
        _eventSubscriptions[event].push(callback);
    }

    function publish(event, data) {
        if (!_eventSubscriptions[event]) { return; }
        _eventSubscriptions[event].forEach(callback => callback(data));
    }

    function updateCurrentProject(projName) {
        _currentProject = projName;
        publish("currentProjectUpdated", _currentProject);
    }

    function getCurrentProject() {
        return _currentProject;
    }

    function getProjects() {
        return Object.values(_projects);
    }

    function getCurrentProjectTodos() {
        return _projects[_currentProject].getTodos();
    }

    function addProject(projName) {
        _projects[projName] = projectFactory(projName);
    }

    function addTodoToCurrentProject(title, description, dueDate, priority) {
        _projects[_currentProject].createTodo(title, description, dueDate, priority);
        publish("currentProjectUpdated", _currentProject);
    }

    function projectExists(projName) {
        if (projName in _projects) {
            return true;
        }
        return false;
    }

    function removeTodoFromCurrentProject(todoTitle) {
        _projects[_currentProject].removeTodo(todoTitle);
        publish("currentProjectUpdated", _currentProject);
    }

    return { 
        subscribe,
        publish,
        updateCurrentProject,
        getCurrentProject,
        getProjects, 
        getCurrentProjectTodos,
        addProject, 
        addTodoToCurrentProject,
        projectExists,
        removeTodoFromCurrentProject
    };
})();

