const express = require('express');
const router = express.Router();

const {
    query,
    getById,
    addTodo,
    deleteTodo,
    editTodo
} = require('./todo.controller')

router.get('/', query)
router.get('/:todoId', getById)
router.post('/', addTodo)
router.delete('/:todoId', deleteTodo)
router.put('/:todoId', editTodo)

module.exports = router