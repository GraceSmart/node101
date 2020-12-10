const fs = require('fs')

const data = fs.readFileSync('todo.json', 'utf8')
const todoList = JSON.parse(data)

app.get('/', (req, res) => {
    res.json(readTodoList) 
})

app.listen(port, () => {
  console.log(`Web server listening at http://localhost:${port}`)
})