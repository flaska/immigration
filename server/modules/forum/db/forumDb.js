const mongoose = require('mongoose')
;
var db = mongoose.createConnection('mongodb://forum:30recycled@ds121345.mlab.com:21345/immigration-forum');
db.on('error', console.error.bind(console, 'MongoDB connection error. '))
db.once('open', function() {
  console.log('Connected to MongoDB');
});
var Thread = db.model('Thread', mongoose.Schema({
  id: String,
  userName: String,
  dateCreated: Date,
  title: String,
  lastPostDate: Date,
  postsCount: Number,
  views: Number,
  votes: Number
}, { collection: 'threads' }));

var Post = db.model('Post', mongoose.Schema({
  threadId: String,
  userName: String,
  datePosted: Date,
  content: String,
  votes: Number
}, { collection: 'posts' }));

exports.getThread = function(query, cb){
  Thread.find(query).exec(cb);
};

exports.getPost = function(query, cb){
  Post.find(query).exec(cb);
};
