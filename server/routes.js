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



// router.post('/blockUrl', function(req, res){
//   if (req.body.password!=='heslo') return res.status(401).send();
//   newsFetchService.blockUrl(req.body.url);
//   res.send(true);
// });
//
// router.get('/getBlockedFeeds', function(req, res){
//   var blockedFeeds = newsFetchService.getBlockedFeeds();
//   if (blockedFeeds) res.send(blockedFeeds);
//   else res.status(404).send();
// });


router.post('/blockUrl', function(req, res){
  if (req.body.password!=='heslo') return res.status(401).send();
  newsFetchService.blockUrl(req.body.url, genericResponseFactory(req, res));
});

// router.get('/getBlockedFeeds', function(req, res){
//   var blockedFeeds = newsFetchService.getBlockedFeeds();
//   if (blockedFeeds) res.send(blockedFeeds);
//   else res.status(404).send();
// });




module.exports = router;
