const commentDb = require('../db/commentDb');

exports.getComments = function(articleId, cb){
  commentDb.getCommentsByArticleId(articleId, cb);
};

exports.getCommentsCount = function(articleId, cb){
  commentDb.getCommentsCountByArticleId(articleId, cb);
};

exports.postComment = function(comment, cb){
  commentDb.postComment(comment, cb);
};
