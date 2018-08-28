const mongoose = require('mongoose'),
  config = require('config');
var db = mongoose.createConnection(config.database.forum.uri, config.database.forum.opts);
db.on('error', console.error.bind(console, 'MongoDB connection error. '))
db.once('open', function() {
  console.log('Connected to MongoDB');
});
var Thread = db.model('Thread', mongoose.Schema({
  id: String,
  userName: String,
  dateCreated: Date,
  title: String,
  content: String,
  lastPostDate: Date,
  postsCount: Number,
  views: Number,
  likes: Number
}, { collection: 'threads' }));

var Post = db.model('Post', mongoose.Schema({
  threadId: String,
  userName: String,
  datePosted: Date,
  content: String,
  likes: Number
}, { collection: 'posts' }));

exports.getThread = function(query, cb){
  Thread.find(query).sort({lastPostDate: -1}).exec(cb);
};

exports.saveThread = function(thread, cb){
  const t = new Thread(thread);
  t.save(cb);
};

exports.getPost = function(query, cb){
  Post.find(query).sort({lastPostDate: 1}).exec(cb);
};

exports.savePost = function(post, cb){
  const p = new Post(post);
  p.save(cb);
};

