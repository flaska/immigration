const commentDb = require('../db/commentDb'),
  async = require('async');
;

exports.getComments = function(articleId, cb){
  commentDb.getCommentsByArticleId(articleId, cb);
};



var getInidivdualCommentsCount = function(articleId, cb){
  commentDb.getIndividualCommentsCountByArticleId(articleId, cb);
};

exports.getCommentsCount = function(articles, cb){
  async.map(articles, function iteration(articleId, icb){
    getInidivdualCommentsCount(articleId, function(err, count){
      icb(err, {articleId: articleId, commentsCount: count});
    })
  }, cb);
};

exports.postComment = function(comment, cb){
  commentDb.postComment(comment, cb);
};
