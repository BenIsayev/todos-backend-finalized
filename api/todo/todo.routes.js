const express = require('express');
const router = express.Router();

const { query } = require('./todo.controller')

router.get('/', query)

module.exports = router