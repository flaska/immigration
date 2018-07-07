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
  newsFetchService.getNewsByKeyword(req.query.q, genericResponseFactory(req, res));
});

router.get('/getNews/src', function(req, res){
  newsFetchService.getNewsByKeywordSrc(req.query.q, genericResponseFactory(req, res));
});

module.exports = router;
