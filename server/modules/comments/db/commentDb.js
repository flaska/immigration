var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://immigrationInMedia:heslo86@ds133601.mlab.com:33601/immigrationinmedia');
db.on('error', console.error.bind(console, 'MongoDB connection error. '))
db.once('open', function() {
  console.log('Connected to MongoDB');
});
var Comment = db.model('Comment', mongoose.Schema({
  articleId: String,
  userName: String,
  date: String,
  commentBody: String
}, { collection: 'comments' }));

exports.getCommentsByArticleId = function(articleId, cb){
  Comment.find({articleId: articleId}).sort({date: 1}).exec(cb);
};


exports.getCommentsCountByArticleId = function(articleId, cb){
  Comment.count({articleId: articleId}).exec((err, count)=>{
    cb(err, {count: count});
  });
};


exports.postComment = function(comment, cb){
  var c = new Comment(comment);
  c.save(cb);
};
