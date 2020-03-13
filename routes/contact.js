var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
// const creds = require("../config");

var smtpTrans = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ingafakesson@gmail.com",
    pass: "epicenter"
  }
});

smtpTrans.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  //console.log("****INSIDE SEND ROUTER LOGGIN BODY", req.body);
  var name = req.body.data.name;
  var email = req.body.data.email;
  var message = req.body.data.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;
  console.log("*****LOGGING CONTENT", content);

  var mailOptions = {
    from: req.body.data.email,
    sender: req.body.data.email,
    to: "ingafakesson@gmail.com",
    subject: "Email from yogasyster.se",
    text: req.body.data.message
  };

  smtpTrans.sendMail(mailOptions, function(error, success) {
    if (error) {
      res.send({
        status: "fail"
      });
      res.end();
    } else {
      res.send({
        status: "success"
      });
      res.end();
    }
  });
});

module.exports = router;
