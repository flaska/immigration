const express = require('express'),
  compression = require('compression'),
  app = express(),
  newsRoutes = require('./server/modules/news/newsRoutes'),
  commentRoutes = require('./server/modules/comments/commentRoutes'),
  bodyParser = require('body-parser'),
  newsFetchService = require('./news/api/newsFetchService')
;
app.use(compression());
app.use(bodyParser.json());
app.use('/api/news', newsRoutes);
app.use('/api/comments', commentRoutes);

app.get('/api/getNews', function(req, res){
  var newsItems = newsFetchService.getNewsItems(req.query.q, req.query.scoring, req.query.from);
  if (newsItems) res.send(newsItems);
  else res.status(404).send();
});

const webServerPort = 3001;

app.listen(webServerPort, () => console.log('API listening on port ' + webServerPort));

