// imports
const mongoose = require('mongoose')
const express = require('express')
const user = require('./User.controller')

// run the app
const app = express()
const port = 3000

// takes all requests from a JSON format and transforms them to a Js object, assigns them to the body property, (req.body)
app.use(express.json())

// ! put url
mongoose.connect('')

// endPoint, controller o handler
app.get('/', user.list)
app.post('/', user.create)
app.get('/:id', user.get)
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/:id', user.delete)

// handling of undefined routes
app.get('*', (req, res) => {
  res.status(404).send('The page does not exist')
})

app.post('*', (req, res) => {
  res.status(404).send('The page does not exist')
})

// listening to requests
app.listen(port, () => {
  console.log('Running the application')
})
