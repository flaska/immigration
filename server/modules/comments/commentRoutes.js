const router = require('express').Router(),
  commentApi = require('./api/commentApi'),
  genericResponseFactory = require('../../shared/shared').genericResponseFactory
;


router.get('/getComments', function(req, res){
  commentApi.getComments(req.query.articleId, genericResponseFactory(req, res));
});

router.get('/commentsCount', function(req, res){
  commentApi.getCommentsCount(req.query.articleId, genericResponseFactory(req, res));
});

module.exports = router;
