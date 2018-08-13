const express = require('express'),
  compression = require('compression'),
  app = express(),
  routes = require('./server/routes'),
  request = require('request'),
  sslRedirect = require('heroku-ssl-redirect'),
  path = require('path'),
  bodyParser = require('body-parser')
;
app.use(sslRedirect());
app.use(compression());
app.use(bodyParser.json());
// app.use(express.static('public'));
app.use('/api', routes);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

const webServerPort = process.env.PORT || 3001;

app.listen(webServerPort, () => console.log('Webserver listening on port ' + webServerPort));

