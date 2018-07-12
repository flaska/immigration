var request = require('request'),
  parseString = require('xml2js').parseString,
  mongo = require('./db/mongo')
;

var news = {};
const keywords = ['all topics', 'green card', 'h1b', 'uscis'];


function fetchNews(){
  keywords.forEach(function(keyword){
    var q;
    if (keyword === 'all topics') {
      q = '"green card" OR "h1b" OR "uscis"';
    } else {
      q = keyword;
    }
    request.get('https://news.google.com/news?output=rss&scoring=n&gl=US&num=70&q=' + q, function(err, resp, body){
      parseString(body, function (err, result) {
        var feeds = result.rss.channel[0].item.map(r=>{
          return {title: r.title[0], url: r.link[0], date: r.pubDate[0], img: r.description[0]};
        });
        feeds.shift();

        stripUrl(feeds);
        getImg(feeds);
        stripSource(feeds);

        news[keyword] = feeds;
        filterBlockedUrls(news);
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
      f.img = null;
    }
    return f?f:'';
  });
}

exports.getNewsItems = function(q, from){
  if (!news[q]) return [];
  var f;
  if (from) f = parseInt(from);
  else f = 0;
  return news[q].slice(f, f + 10);
};

function filterBlockedUrls(){
  getBlockedFeeds(function(err, urls){
    urls.forEach((url)=>{
      removeUrl(url.url);
    });
  });
}

function removeUrl(url){
  Object.keys(news).forEach((channelFeeds)=>{
    var indexToDelete = null;
    news[channelFeeds].forEach((feed, i)=>{
      if (feed.url == url) indexToDelete = i;
    });
    if (indexToDelete!=undefined) {
      news[channelFeeds].splice(indexToDelete,1);
    }
  });
};

exports.blockUrl = function(url, cb){
  removeUrl(url);
  mongo.storeBlockedUrl(url, cb);
};

exports.getBlockedFeeds = getBlockedFeeds = function(cb){
  mongo.getBlockedUrls(cb);
};
