const express = require('express')
const app = express()
const path = require('path')
const PORT = 3001
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
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.send('error')
})

app.listen(PORT, () => console.log('Server is starting on PORT', 3001))

module.exports = app
