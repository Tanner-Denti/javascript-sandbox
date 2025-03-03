

export const todoFactory = function(title, description, dueDate, priority) {
    let _title;
    let _description;
    let _dueDate;
    let _priority;

    setTitle(title);
    setDescription(description);
    setDueDate(dueDate);
    setPriority(priority);

    function getTitle() { return _title; }
    function setTitle(title) { 
        if (title.length > 15) { 
            throw new Error("Cannot assign length > 15 to title.");
        }

        _title = title; 
    }

    function getDescription() { return _description; }
    function setDescription(description) {
        if (description.length > 300) { 
            throw new Error("Cannot assign length > 300 to description.");
        }

        _description = description; 
    }

    function getDueDate() { return _dueDate; }
    function setDueDate(dueDate) {
        _dueDate = dueDate;
    }

    function getPriority() { return _priority; }
    function setPriority(priority) {
        if (!priority.toLowerCase() in ["low", "medium", "high"]) { 
            throw new Error(`Invalid priority ${priority}`);
        }

        _priority = priority;
    }

    return {
        getTitle,
        setTitle,
        getDescription,
        setDescription,
        getDueDate,
        setDueDate,
        getPriority,
        setPriority,
    };
};
