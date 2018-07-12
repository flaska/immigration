var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://immigrationInMedia:heslo86@ds133601.mlab.com:33601/immigrationinmedia');
db.on('error', console.error.bind(console, 'MongoDB connection error. '))
db.once('open', function() {
  console.log('Connected to MongoDB');
});
var BlockedUrl = db.model('blockedUrl', mongoose.Schema({
  url: String,
  date: Date
}));

exports.storeBlockedUrl = function(url, cb){
  var mongoUrl = new BlockedUrl({url: url, date: new Date()});
  mongoUrl.save(cb);
};
