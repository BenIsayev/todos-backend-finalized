const express = require('express');
const cors = require('cors')

const app = express()

const todoRoutes = require('./api/todo/todo.routes')

app.use(express.json())


app.use(cors('http://localhost:3030'))

app.use('/api/todo/', todoRoutes)

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})