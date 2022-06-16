const express = require('express');
const router = express.Router();

const {
    query,
    addTodo,
    deleteTodo
} = require('./todo.controller')

router.get('/', query)
router.post('/', addTodo)
router.delete('/:todoId', deleteTodo)

module.exports = router