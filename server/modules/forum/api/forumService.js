var forumDb = require('../db/forumDb')
;

exports.getThread = function(query, cb){
  forumDb.getThread(query, cb);
};

exports.saveThread = function(thread, cb){
  forumDb.saveThread(thread, cb);
};

exports.getPost = function(query, cb){
  forumDb.getPost(query, cb);
};

exports.savePost = function(post, cb){
  forumDb.savePost(post, cb);
};
