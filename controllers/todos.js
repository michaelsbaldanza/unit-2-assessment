const Todo = require('../models/todo');

function index(req, res, next) {
    let todos = Todo.getAll();
    res.render('index', { todos: todos });
    console.log(todos.length);
};

function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/');
};

module.exports = {
    create: create,
    index: index
};