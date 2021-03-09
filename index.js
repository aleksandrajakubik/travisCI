const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello from my node app!')
})

app.post('/', (req, res) => {
    res.send('Wow! You did a POST!')
})

app.put('/', (req, res) => {
    res.send('PUT')
})

app.delete('/', (req, res) => {
    res.send('Deleting ...')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;