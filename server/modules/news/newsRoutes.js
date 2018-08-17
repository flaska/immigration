const router = require('express').Router(),
  newsFetchService = require('./api/newsFetchService')
;

router.get('/getNews', function(req, res){
  var newsItems = newsFetchService.getNewsItems(req.query.q, req.query.scoring, req.query.from);
  if (newsItems) res.send(newsItems);
  else res.status(404).send();
});

module.exports = router;
