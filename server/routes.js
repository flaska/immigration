var express = require('express'),
  router = express.Router(),
  newsFetchService = require('./newsFetchService')
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
  var newsItems = newsFetchService.getNewsItems(req.query.q, req.query.from);
  if (newsItems) res.send(newsItems);
  else res.status(404).send();
});

router.delete('/blockUrl', function(req, res){
  if (req.query.password!=='heslo') return res.status(401).send();
  newsFetchService.blockFeed(req.query.url);
  res.send(true);
});

module.exports = router;
