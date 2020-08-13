const createTodo = (name, details, dueDate = Date.now(), priority) => {
    return {
        name: name,
        details: details,
        dueDate: dueDate,
        priority: priority
    };
};

export {createTodo};