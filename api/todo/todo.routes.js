const express = require('express');
const router = express.Router();

const {
    query,
    addTodo
} = require('./todo.controller')

router.get('/', query)
router.post('/', addTodo)

module.exports = router