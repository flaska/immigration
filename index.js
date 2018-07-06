const express = require('express'),
  compression = require('compression'),
  app = express(),
  routes = require('./server/routes'),
  request = require('request')
;

app.use(express.static('public'));
app.use(compression());
app.use('/api', routes);

app.listen(process.env.PORT || 3001, () => console.log('Example app listening on port 3000!'));

setTimeout(function(){
  request('http://www.immigration.media', function (error, response, body) {});
}, 5*60*1000);
