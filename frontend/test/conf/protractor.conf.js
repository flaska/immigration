var HtmlBeatifulReporter = require('protractor-beautiful-reporter')
;


exports.config = {
  baseUrl: 'http://localhost:4202/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 60000,
  useAllAngular2AppRoots: true,
  framework: 'jasmine2',
  specs: [
    '../src/**/*.test.js',
  ],

  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 4,
    chromeOptions: {
      args: [
        "--headless",
        "--disable-gpu",
        "--window-size=1600,1200"
      ]
    }
  },

  beforeEach: function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  },

  onPrepare: function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    jasmine.getEnv().addReporter(new HtmlBeatifulReporter({
      baseDirectory: './test/report/beauty',
      pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
        return descriptions.join('_').replace(/ /g, '_');
      }
    }).getJasmine2Reporter());

  },
  afterEach: function() {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  }
};
