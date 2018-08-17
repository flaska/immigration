const express = require('express'),
  compression = require('compression'),
  app = express(),
  routes = require('./server/modules/news/newsRoutes'),
  bodyParser = require('body-parser')
;
app.use(compression());
app.use(bodyParser.json());
app.use('/api', routes);

const webServerPort = 3001;

app.listen(webServerPort, () => console.log('API listening on port ' + webServerPort));

