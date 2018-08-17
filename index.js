const express = require('express'),
  compression = require('compression'),
  app = express(),
  newsRoutes = require('./server/modules/news/newsRoutes'),
  commentRoutes = require('./server/modules/comments/commentRoutes'),
  bodyParser = require('body-parser')
;
app.use(compression());
app.use(bodyParser.json());
app.use('/api/news', newsRoutes);
app.use('/api/comments', commentRoutes);

const webServerPort = 3001;

app.listen(webServerPort, () => console.log('API listening on port ' + webServerPort));

