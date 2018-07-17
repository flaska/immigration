var express = require('express'),
  router = express.Router(),
  newsFetchService = require('./news/newsFetchService'),
  blogService = require('./blog/blogService')
;


function genericResponseFactory(req, res){
  return function genericResponse(err, result) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    if (result===null) return res.status(400).send("No result returned.");
    res.send(result);
  }
};

router.get('/getNews', function(req, res){
  var newsItems = newsFetchService.getNewsItems(req.query.q, req.query.scoring, req.query.from);
  if (newsItems) res.send(newsItems);
  else res.status(404).send();
});

router.post('/blockUrl', function(req, res){
  if (req.body.password!=='heslo') return res.status(401).send();
  newsFetchService.blockUrl(req.body.url, genericResponseFactory(req, res));
});

router.get('/getBlockedUrls', function(req, res){
  newsFetchService.getBlockedFeeds(genericResponseFactory(req, res));
});

router.get('/blog/post', function(req, res){
  blogService.getBlogPost(req.query.id, genericResponseFactory(req, res));
});

module.exports = router;
