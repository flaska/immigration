var mongoose = require('mongoose'),
  config = require('config');
var db = mongoose.createConnection(config.database.news.uri, config.database.news.opts);
db.on('error', console.error.bind(console, 'MongoDB connection error. '))
db.once('open', function() {
  console.log('Connected to MongoDB');
});
var BlockedUrl = db.model('BlockedUrl', mongoose.Schema({
  url: String,
  date: Date
}, { collection: 'blockedUrls' }));

exports.storeBlockedUrl = function(url, cb){
  var mongoUrl = new BlockedUrl({url: url, date: new Date()});
  mongoUrl.save(cb);
};

exports.getBlockedUrls = function(cb){
  BlockedUrl.find({}).sort({date: -1}).limit(100).exec(cb);
};

var BlogPost = db.model('BlogPost', mongoose.Schema({
  id: String,
  title: String,
  date: Date,
  body: String
}, { collection: 'blogposts' }));

exports.getBlogPost = function(id, cb){
  BlogPost.findOne({id: id}).exec(cb);
};
