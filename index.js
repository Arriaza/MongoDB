// imports
const mongoose = require('mongoose')

// connecting to database
// ! put url
mongoose.connect('')

// creating a model
const User = mongoose.model('User', {
  username: String,
  age: Number,
})

// creating user
const crear = async () => {
  const user = new User({ username: 'User', edad: 12 })
  const savedUser = await user.save()
}

// crear()

const buscarTodo = async () => {
  const users = await User.find()
  console.log(users)
}

// buscarTodo()

const buscar = async () => {
  const user = await User.find({ username: 'User' })
  console.log(user)
}

// buscar()

const buscarUno = async () => {
  const user = await User.findOne({ username: 'User' })
  console.log(user)
}

// buscarUno()

const actualizar = async () => {
  const user = await User.findOne({ username: 'User' })
  console.log(user)
  user.edad = 30
  await user.save()
}

// actualizar()

const eliminar = async () => {
  const user = await User.findOne({ username: 'User' })
  console.log(user)
  if (user) {
    await user.deleteOne()
  }
}

// eliminar()
