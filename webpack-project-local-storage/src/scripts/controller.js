import { projectFactory, createProjectFromJSON } from "./model/projectFactory";


export const controller = (function() {
    const TODO_APP_PROJECTS_KEY = "todoAppProjects";
    let _currentProject = "Today";
    const _projects = {};
    const _eventSubscriptions = {};

    _init();

    function _init() {
        _loadProjectsFromStorage();

        if (Object.keys(_projects).length === 0) {
            _projects["Today"] = projectFactory("Today");
            _projects["School"] = projectFactory("School");
            _projects["Grocery"] = projectFactory("Grocery");
            _projects["Career"] = projectFactory("Career");
            
            _saveProjectsToStorage();
        }
    }

    function subscribe(event, callback) {
        if (!_eventSubscriptions[event]) {
            _eventSubscriptions[event] = [];
        } 
        _eventSubscriptions[event].push(callback);
    }

    function publish(event, data) {
        if (!_eventSubscriptions[event]) { 
            return; 
        } 
        _eventSubscriptions[event].forEach(callback => callback(data)); 
    } 

    function updateCurrentProject(projName) { 
        _currentProject = projName; 
        _saveProjectsToStorage();
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
        _saveProjectsToStorage();
    }

    function addTodoToCurrentProject(title, description, dueDate, priority) {
        _projects[_currentProject].createTodo(title, description, dueDate, priority);
        _saveProjectsToStorage();
        publish("currentProjectUpdated", _currentProject);
    }

    function projectExists(projName) {
        if (projName in _projects) {
            return true;
        }
        return false;
    }

    function removeTodoFromCurrentProject(todoTitle) {
        const removed = _projects[_currentProject].removeTodo(todoTitle);
        if (removed) {
            _saveProjectsToStorage();
            publish("currentProjectUpdated", _currentProject);
        }
    }

    function _saveProjectsToStorage() {
        const data = {
            currentProject: _currentProject,
            projects: {}
        };

        Object.keys(_projects).forEach(projectName => {
            data.projects[projectName] = _projects[projectName].toJSON();
        });

        localStorage.setItem(TODO_APP_PROJECTS_KEY, JSON.stringify(data));
    }

    function _loadProjectsFromStorage() {
        const storedData = localStorage.getItem(TODO_APP_PROJECTS_KEY);

        if (storedData) {
            try {
                const data = JSON.parse(storedData);

                if (data.currentProject) {
                    _currentProject = data.currentProject;
                }

                if (data.projects) {
                    Object.values(data.projects).forEach(projectData => {
                        _projects[projectData.name] = createProjectFromJSON(projectData);
                    });
                }
            } catch (e) {
                alert("Error loading data from local storage");
                console.error(e);
            }
        }
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

