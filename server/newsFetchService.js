var request = require('request'),
  parseString = require('xml2js').parseString;

var news = {};
const keywords = ['all topics', 'green card', 'H1B', 'USCIS', 'path to citizenship'];
const exclude = " -soccer";


function fetchNews(){
  keywords.forEach(function(keyword){
    if (keyword === 'all topics') {
      q = '"green card" OR "H1B" OR "USCIS" OR "path to citizenship"';
    } else {
      q = keyword;
    }
    q = q + exclude;
    request.get('https://news.google.com/news?output=rss&scoring=n&gl=US&num=50&q=' + q, function(err, resp, body){
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


var blockedFeeds = [];

exports.blockUrl = function(url){
  var deleted;
  Object.keys(news).forEach((channelFeeds)=>{
    var indexToDelete = null;
    news[channelFeeds].forEach((feed, i)=>{
      if (feed.url == url) indexToDelete = i;
    });
    if (indexToDelete!=undefined) {
      deleted = news[channelFeeds].splice(indexToDelete,1);
    }
  });
  if (deleted) blockedFeeds.push(deleted[0]);
};

exports.getBlockedFeeds = function(){
  return blockedFeeds;
};
