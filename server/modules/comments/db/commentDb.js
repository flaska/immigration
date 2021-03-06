var mongoose = require('mongoose'),
  config = require('config');
var db = mongoose.createConnection(config.database.comments.uri, config.database.comments.opts);
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


exports.getIndividualCommentsCountByArticleId = function(articleId, cb){
  Comment.count({articleId: articleId}).exec(cb);
};


exports.postComment = function(comment, cb){
  var c = new Comment(comment);
  c.save(cb);
};
