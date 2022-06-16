const todoService = require('./todo.service')

const query = async (req, res) => {
    try {
        const todos = await todoService.query()
        res.send(todos)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    query
}