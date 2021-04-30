const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c6bd0d920c31e8",
      pass: "7691e29f81e59a"
    }
});