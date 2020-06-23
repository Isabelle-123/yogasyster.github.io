const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3001
const usersRouter = require('./routes/contact')
const createError = require('http-errors')

// var cookieParser = require('cookie-parser')
// app.use(cookieParser())
// var logger = require('morgan')
// app.use(logger('dev'))

// app.use((req, res, next) => {
//   console.log('*****INSIDE SERVER****')
//   next()
// })

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/contact', usersRouter)

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(PORT)
console.log(`App listening on ${PORT}`)

module.exports = app
