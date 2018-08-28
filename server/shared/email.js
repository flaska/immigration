const nodemailer = require('nodemailer'),
  config = require('config')
;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'jacob.code.house@gmail.com',
    pass: 'Green18!'
  }
});


exports.forwardMessage = function(message, cb){
  if (config.environment!=='production') return;
  const mailOptions = {
    from: '"Immigration in Media" <jacob.code.house@gmail.com>', // sender address
    to: 'jakub.flaska@gmail.com', // list of receivers
    subject: 'Immigration in Media | User Public Comment', // Subject line
    text: JSON.stringify(message),
    html: JSON.stringify(message)
  };
  transporter.sendMail(mailOptions, cb);
};
