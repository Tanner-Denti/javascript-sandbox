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
        }
    }

    return {
        getName,
        setName,
        getTodos,
        createTodo,
        removeTodo,
    };
};
