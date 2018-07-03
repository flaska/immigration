describe('Google News Scrape', function() {


  it('should get posts', function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://news.google.com/search?for=green%20card&hl=en-US&gl=US&ceid=US%3Aen');

    var articles = element.all(by.css('article h3 a span'));
    articles.each(function(a){
      console.log(a.getText());
    });
  });
});
