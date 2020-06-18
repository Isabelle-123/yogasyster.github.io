var express = require('express')
var router = express.Router()
var nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
require('dotenv').config()

//var cors = require("cors");
// const creds = require("../config");

//console.log(require('dotenv').config())

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECTED_URL
)

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
})

const accessToken = oauth2Client.getAccessToken()

const smtpTrans = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'ingafakesson@gmail.com',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: accessToken,
  },
})

smtpTrans.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take messages')
  }
})

router.post('/send', (req, res, next) => {
  console.log('***INSIDE SEND ROUTER LOGGIN BODY', req.body)
  var name = req.body.data.name
  var email = req.body.data.email
  var message = req.body.data.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `
  console.log('***LOGGING CONTENT', content)

  var mailOptions = {
    from: req.body.data.email,
    replyTo: req.body.data.email,
    to: 'ingafakesson@gmail.com',
    subject: 'Mejl från Yogasyster: ' + req.body.data.name,
    text: req.body.data.message,
  }

  smtpTrans.sendMail(mailOptions, function (error, success) {
    if (error) {
      res.send({
        status: 'fail',
      })
      res.end()
    } else {
      res.send({
        status: 'success',
      })
      res.end()
    }
  })
})

module.exports = router
