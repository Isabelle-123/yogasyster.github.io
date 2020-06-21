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

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.use(function (req, res, next) {
  next(createError(404))
})

//error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.send('error')
})

app.listen(PORT)
console.log(`App listening on ${PORT}`)

module.exports = app
