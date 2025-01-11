

export const projectFactory = function(name) {

    let _name;
    const _todos = [];

    setName(name);

    function getName() { return _name; }
    function setName(name) {
        if (!name instanceof String) { 
            throw new Error("Cannot assign non-string data type to project name.");
        }
        if (name.length > 15) { 
            throw new Error("Cannot assign length > 15 to project name.");
        }

        _name = name;
    }

    function getTodos() { return _todos.map( todo => ({...todo})); }
    function addTodo(todo) { _todos.push(todo); } 
    function removeTodo(index) { _todos.splice(index, 1); }

    return {
        getName,
        setName,
        getTodos,
        addTodo,
        removeTodo,
    };
};
