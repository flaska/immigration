var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://forum:30recycled@ds121345.mlab.com:21345/immigration-forum');
db.on('error', console.error.bind(console, 'MongoDB connection error. '))
db.once('open', function() {
  console.log('Connected to MongoDB');
});
var Thread = db.model('Thread', mongoose.Schema({
  userName: String,
  dateCreated: Date,
  name: String
}, { collection: 'threads' }));

var Post = db.model('Post', mongoose.Schema({
  userName: String,
  datePosted: Date,
  content: String,
  votes: Number
}, { collection: 'posts' }));

exports.getThreadList = function(cb){
  Thread.find({}).exec(cb);
};
