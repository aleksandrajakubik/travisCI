const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send({message: 'Hello from server!'})
})

app.post('/', (req, res) => {
    res.send({message: 'POST completed'})
})

app.put('/', (req, res) => {
    res.send({message: 'PUT done'})
})

app.delete('/', (req, res) => {
    res.send({message: 'DELETE'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
module.exports = app