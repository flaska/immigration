const router = require('express').Router(),
  forumService = require('./api/forumService'),
  genericResponseFactory = require('../../shared/shared').genericResponseFactory
;

router.get('/thread', function(req, res){
  forumService.getThread(req.query, genericResponseFactory(req, res));
});

router.get('/post', function(req, res){
  forumService.getPost(req.query, genericResponseFactory(req, res));
});

module.exports = router;
