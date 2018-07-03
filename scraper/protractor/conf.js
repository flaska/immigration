exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['googleNews/googleNews.scrape.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=1024,768" ]
    }
  }
};
