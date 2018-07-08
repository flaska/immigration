var request = require('request'),
  parseString = require('xml2js').parseString;

var news = {};
const keywords = ['all topics', 'green card', 'H1B', 'USCIS'];

function fetchNews(){
  keywords.forEach(function(keyword){
    if (keyword === 'all topics') {
      q = '"green card" OR "H1B" OR "USCIS"';
    } else {
      q = keyword;
    }
    request.get('https://news.google.com/news?output=rss&num=20&q=' + q, function(err, resp, body){
      parseString(body, function (err, result) {
        var feeds = result.rss.channel[0].item.map(r=>{
          return {title: r.title[0], url: r.link[0], date: r.pubDate[0], img: r.description[0]};
        });
        feeds.shift();

        stripUrl(feeds);
        getImg(feeds);
        stripSource(feeds);

        news[keyword] = feeds;
      });
    });
  });
};

setInterval(function(){
  fetchNews();
}, 1000 * 60 * 5);
fetchNews();

function stripSource(feeds){
  feeds = feeds.map(f=>{
    var dividerIndex = f.title.lastIndexOf('-');
    var title = f.title;
    f.title = title.substr(0, dividerIndex-1);
    f.source = title.substr(dividerIndex+2, 100);
    return f;
  });
}

function stripUrl(feeds){
  feeds = feeds.map(f=>{
    var re = /\&url\=.+$/;
    var found = f.url.match(re)[0].substr(5,1000);
    f.url = found;
    return f;
  });
}

function getImg(feeds){
  feeds = feeds.map(f=>{
    var re = /img src=".+?"/;
    try {
      var found = f.img.match(re)[0].substr(9, 1000);
      f.img = found.substr(0, found.length - 1);
    } catch(e) {
      console.log(e);
      f.img = null;
    }
    return f?f:'';
  });
}

exports.getNewsByKeyword = function(term, cb){
  cb(null, news[term]);
};

exports.getNewsByKeywordSrc = function(term, cb){
  if (term === 'all topics') {
    q = '"green card" OR "H1B" OR "USCIS" OR "deported" OR "ICE"';
  } else {
    q = term;
  }
  request
    .get('https://news.google.com/news?output=rss&q=' + q, function(err, resp, body){
      parseString(body, function (err, result) {
        cb(err, result);
      });
    });
};
