const express = require('express'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  newsRoutes = require('./server/modules/news/newsRoutes'),
  commentRoutes = require('./server/modules/comments/commentRoutes'),
  forumRoutes = require('./server/modules/forum/forumRoutes'),
  newsFetchService = require('./server/modules/news/api/newsFetchService')
;

const webServerPort = 3001;

const app = express();

app.use(compression());
app.use(bodyParser.json());

app.use('/api/news', newsRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/forum', forumRoutes);

// API compatibility
app.get('/api/getNews', function(req, res){
  let newsItems = newsFetchService.getNewsItems(req.query.q, req.query.scoring, req.query.from);
  if (newsItems) res.send(newsItems);
  else res.status(404).send();
});

app.listen(webServerPort, () => console.log('API listening on port ' + webServerPort));

