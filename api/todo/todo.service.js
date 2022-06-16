const utilService = require('../../services/util')

const TODOS = [
    {
        _id: 't1',
        title: 'Laundry',
        isDone: true,
        createdAt: Date.now()
    },
    {
        _id: 't2',
        title: 'Clean closet',
        isDone: false,
        createdAt: Date.now()
    },
    {
        _id: 't3',
        title: 'Dishes',
        isDone: false,
        createdAt: Date.now()
    },
    {
        _id: 't4',
        title: 'AAAA',
        isDone: true,
        createdAt: Date.now()
    },
    {
        _id: 't5',
        title: 'aegr',
        isDone: true,
        createdAt: Date.now()
    },
]

const query = async () => {
    try {
        return TODOS
    } catch (err) {
        throw new Error(err)
    }
}

const addTodo = async (todo) => {
    try {
        todo._id = utilService.makeId()
        TODOS.unshift(todo)
        return todo
    } catch (err) {
        throw new Error(err)
    }
}

const deleteTodo = async (todoId) => {
    try {
        const todoIdx = TODOS.findIndex(todo => todo._id === todoId)
        if (todoIdx === -1) {
            throw new Error('Todo not found')
        } else {
            TODOS.splice(todoIdx, 1)
            return 'Todo deleted successfully'
        }
    } catch (err) {
        throw new Error(err)
    }
}

const editTodo = async (editedTodo) => {
    try {
        const todoIdx = TODOS.findIndex(todo => todo._id === editedTodo._id)
        if (todoIdx === -1) {
            throw new Error('Todo not found')
        } else {
            TODOS.splice(todoIdx, 1, editedTodo)
            return 'Todo edited successfully'
        }
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