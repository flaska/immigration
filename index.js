const express = require('express'),
  compression = require('compression'),
  app = express(),
  routes = require('./server/routes')
;

app.use(express.static('public'));
app.use(compression());
app.use('/api', routes);

app.listen(process.env.PORT || 3001, () => console.log('Example app listening on port 3000!'));
