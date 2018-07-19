var request = require('request'),
  parseString = require('xml2js').parseString,
  mongo = require('../db/mongo')
;

var fetchedNews = {top: {}, new: {}};
const keywords = ['all topics', 'green card', 'h1b', 'uscis'];


function fetchNewsChannel(keyword, scoring){
  var q, s;
  if (keyword === 'all topics') {
    q = '"green card" OR "h1b" OR "uscis"';
  } else {
    q = keyword;
  }
  if (scoring=='new') s = 'n';
  if (scoring=='top') s = 'r';
  if (!s) s = 'n';
  request.get('https://news.google.com/news?output=rss&gl=US&num=70&scoring=' + s + '&q=' + q, function(err, resp, body){
    parseString(body, function (err, result) {
      var feeds = result.rss.channel[0].item.map(r=>{
        return {title: r.title[0], url: r.link[0], date: r.pubDate[0], img: r.description[0]};
      });
      feeds.shift();

      stripUrl(feeds);
      getImg(feeds);
      stripSource(feeds);

      fetchedNews[scoring][keyword] = feeds;
      filterBlockedUrls(fetchedNews);
    });
  });
}

function fetchAllNews(){
  keywords.forEach(function(keyword){
    fetchNewsChannel(keyword, 'new');
    fetchNewsChannel(keyword, 'top');
  });
};

setInterval(function(){
  fetchAllNews();
}, 1000 * 60 * 15);
fetchAllNews();

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

exports.getNewsItems = function(q, scoring, from){
  if (['new', 'top'].indexOf(scoring)===-1) scoring = 'new';
  if (!fetchedNews[scoring][q]) return [];
  var f;
  if (from) f = parseInt(from);
  else f = 0;
  return fetchedNews[scoring][q].slice(f, f + 10);
};

function filterBlockedUrls(){
  getBlockedFeeds(function(err, urls){
    urls.forEach((url)=>{
      removeUrl(url.url);
    });
  });
}

function removeUrl(url){
  ['new', 'top'].forEach(function(scoring){
    Object.keys(fetchedNews[scoring]).forEach((channelFeeds)=>{
      var indexToDelete = null;
      fetchedNews[scoring][channelFeeds].forEach((feed, i)=>{
        if (feed.url.indexOf(url)>-1) indexToDelete = i;
      });
      if (indexToDelete!=undefined) {
        fetchedNews[scoring][channelFeeds].splice(indexToDelete,1);
      }
    });
  })
};

exports.blockUrl = function(url, cb){
  removeUrl(url);
  mongo.storeBlockedUrl(url, cb);
};

exports.getBlockedFeeds = getBlockedFeeds = function(cb){
  mongo.getBlockedUrls(cb);
};
