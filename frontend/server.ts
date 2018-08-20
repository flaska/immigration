import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
var request = require('request'),
  compression = require('compression'),
  bodyParser = require('body-parser')
;

enableProdMode();

const app = express();
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

app.use(function(req, res, next) {
  if (process.env.PORT) {
    if (req.headers['x-forwarded-proto'] != 'https') {
      res.redirect(302, 'https://' + req.hostname + req.originalUrl);
    }
    else {
      next();
    }
  } else {
    next();
  }
});

app.use(compression());
app.use(bodyParser.json());

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('/api/*', function(req, res) {
  var url = 'http://localhost:3001'+ req.url;
  var r = request(url);
  req.pipe(r).pipe(res);
});

app.post('/api/*', function(req, res) {
  var url = 'http://localhost:3001'+ req.url;
  var r = request.post({url: url, body: req.body, json: true});
  r.pipe(res);
});

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
app.get('*', (req, res) => {
  console.log('hit index');
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`WebServer server listening on http://localhost:${PORT}`);
});
