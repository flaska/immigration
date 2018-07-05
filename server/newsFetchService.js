var request = require('request'),
  parseString = require('xml2js').parseString;

exports.searchByTerm = function(term, cb){
  request
    .get('https://news.google.com/news?output=rss&q=' + term, function(err, resp, body){
      parseString(body, function (err, result) {
        var feeds = result.rss.channel[0].item.map(r=>{
          return {title: r.title[0], url: r.link[0], date: r.pubDate[0]};
        });
        feeds.shift();
        feeds = feeds.map(f=>{
          var re = /\&url\=.+$/;
          var found = f.url.match(re)[0].substr(5,1000);

          f.url = found;
          return f;
        });
        cb(err, feeds);
      });
    });
};

exports.searchByTermSrc = function(term, cb){
  request
    .get('https://news.google.com/news?output=rss&q=' + term, function(err, resp, body){
      parseString(body, function (err, result) {
        cb(err, result);
      });
    });
};
