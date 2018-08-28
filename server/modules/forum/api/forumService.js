var forumDb = require('../db/forumDb'),
  email = require('../../../shared/email')
;

exports.getThread = function(query, cb){
  forumDb.getThread(query, cb);
};

exports.saveThread = function(thread, cb){
  forumDb.saveThread(thread, cb);
  email.forwardMessage(thread, (err)=>{console.log(err)});
};

exports.getPost = function(query, cb){
  forumDb.getPost(query, cb);
};

exports.savePost = function(post, cb){
  forumDb.savePost(post, cb);
  forumDb.increasePostCount(post.threadId);
  email.forwardMessage(post, (err)=>{console.log(err)});
};
