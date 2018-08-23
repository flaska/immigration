var forumDb = require('../db/forumDb')
;

exports.getThread = function(query, cb){
  forumDb.getThread(query, cb);
};
