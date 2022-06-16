const express = require('express');
const router = express.Router();

const {
    query,
    addTodo,
    deleteTodo,
    editTodo
} = require('./todo.controller')

router.get('/', query)
router.post('/', addTodo)
router.delete('/:todoId', deleteTodo)
router.put('/:todoId', editTodo)

module.exports = router