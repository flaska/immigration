const router = require('express').Router(),
  forumService = require('./api/forumService'),
  genericResponseFactory = require('../../shared/shared').genericResponseFactory
;

router.get('/getThreadList', function(req, res){
  forumService.getThreadList(genericResponseFactory(req, res));
});

module.exports = router;
