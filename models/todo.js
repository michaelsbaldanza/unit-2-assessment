const todos = [];

function getAll() {
    return todos;
};

function create(task) {
    task.done = false
    task.todo = '';
    todos.push(task);
};

module.exports = {
    create: create,
    getAll: getAll}