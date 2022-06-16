const express = require('express');

const app = express()

const todoRoutes = require('./api/todo/todo.routes')

app.use(express.json())

app.use('/api/todo/', todoRoutes)

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})