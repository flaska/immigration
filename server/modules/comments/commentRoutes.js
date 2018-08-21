const router = require('express').Router(),
  commentApi = require('./api/commentApi'),
  genericResponseFactory = require('../../shared/shared').genericResponseFactory,
  email = require('./api/email');
;


router.get('/getComments', function(req, res){
  commentApi.getComments(req.query.articleId, genericResponseFactory(req, res));
});

// router.get('/commentsCount', function(req, res){
//   commentApi.getCommentsCount(req.query.articleId, genericResponseFactory(req, res));
// });

router.post('/commentsCount', function(req, res){
  commentApi.getCommentsCount(req.body.articles, genericResponseFactory(req, res));
});

router.post('/postComment', function(req, res){
  commentApi.postComment(req.body, genericResponseFactory(req, res));
  email.forwardMessage(req.body, (err)=>{console.log(err)});
});

module.exports = router;
