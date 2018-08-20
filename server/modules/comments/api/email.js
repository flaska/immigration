const nodemailer = require('nodemailer');

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
  const mailOptions = {
    from: '"Code House Website" <jacob.code.house@gmail.com>', // sender address
    to: 'jakub.flaska@gmail.com', // list of receivers
    subject: 'Immigration in Media | User Public Comment', // Subject line
    text: 'View HTML version', // plain text body
    html: "<b>Comment</b> " + message.commentBody + "<br><b>Article</b> " + message.articleId + "<br><b>User</b> " + message.userName + "<br><b>Date</b> " + message.date
  };
  transporter.sendMail(mailOptions, cb);
};
