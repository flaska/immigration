var forumDb = require('../db/forumDb')
;

exports.getThreadList = function(cb){
  forumDb.getThreadList(cb);
};
