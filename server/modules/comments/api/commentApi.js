const commentDb = require('../db/commentDb');

exports.getComments = function(articleId, cb){
  commentDb.getCommentsByArticleId(articleId, cb);
};
