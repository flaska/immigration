const express = require('express'),
  compression = require('compression'),
  app = express(),
  routes = require('./server/routes'),
  path = require('path'),
  bodyParser = require('body-parser')
;
app.use(compression());
app.use(bodyParser.json());
// app.use(express.static('./frontend/dist/browser'));
app.use('/api', routes);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './frontend/dist/browser/index.html'));
// });

const webServerPort = 3001;

app.listen(webServerPort, () => console.log('Webserver listening on port ' + webServerPort));

