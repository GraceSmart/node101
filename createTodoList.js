const fs = require('fs')
const moment = require('moment')

const todoList = [
    {
        field: 'Programming Assignment'
      },
      {
          field: 'CDC Project'
      },
      {
        field: 'Food Shopping'
      },
      {
          field: 'Cleaning'
      },
]

const json = JSON.stringify(todoList)
fs.writeFileSync('todo.json', json)
