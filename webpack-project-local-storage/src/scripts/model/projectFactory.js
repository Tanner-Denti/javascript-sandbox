import { todoFactory } from "./todoFactory.js";


export const projectFactory = function(name) {

    let _name;
    const _todos = {};

    setName(name);

    function getName() { return _name; }
    function setName(name) {
        if (name.length > 15) { 
            throw new Error("Cannot assign length > 15 to project name.");
        }

        _name = name;
    }

    function getTodos() { 
        return Object.values(_todos).map(todo => ({...todo}));
    }

    function createTodo(title, description, dueDate, priority) { 
        if (_todos[title]) {
            throw new Error(`Todo with title: ${title} already exists.`);
        }

        _todos[title] = todoFactory(title, description, dueDate, priority);
    } 

    function removeTodo(title) { 
        if (title in _todos) {
            delete _todos[title];
            return true;
        }
        return false;
    }

    function toJSON() {
        const _todosJSON = {};

        Object.keys(_todos).forEach(title => {
            _todosJSON[title] = _todos[title].toJSON();
        });

        return {
            name: _name,
            todos: _todosJSON
        }
    }

    return {
        getName,
        setName,
        getTodos,
        createTodo,
        removeTodo,
        toJSON
    };
};

export function createProjectFromJSON(data) {
    const project = projectFactory(data.name);
    
    if (data.todos) {
        Object.values(data.todos).forEach(todoData => {
            project.createTodo(
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority
            );
        });
    }
    
    return project;
}
