const todoService = require('./todo.service')

const query = async (req, res) => {
    try {
        const todos = await todoService.query()
        res.send(todos)
    } catch (err) {
        throw new Error(err)

    }
}

const addTodo = async (req, res) => {
    try {
        const todo = req.body
        const addedTodo = await todoService.addTodo(todo)
        res.send(addedTodo)
    } catch (err) {
        throw new Error(err)
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.params
        const successMessage = await todoService.deleteTodo(todoId)
        res.send(successMessage)
    } catch (err) {
        throw new Error(err)
    }
}

const editTodo = async (req, res) => {
    try {
        const todo = req.body;
        const editedTodo = await todoService.editTodo(todo)
        res.send(editedTodo)
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = {
    query,
    addTodo,
    deleteTodo,
    editTodo
}