var main = require('../../shared/main');

describe('Thread List', function() {
  it('Should see list of threads', function () {
    browser.get('/forum');
    texts([
      'Forum > Topics',
      'What to do with my case?',
      'Is my lawyer bad?',
      '2',
      'Jan 1, 2018',
    ]);
  });

  it('Should navigate to thread view', function(){
    click('.test_thread_1 .threadName a');
    texts([
      'Forum > Topics > What to do with my case?',
      'Hey I filed my I-485 really long time again what is going on?',
      'Check the USCIS processing times website.',
      'Rashid',
      'Aug 27, 2018'
    ]);
  });

});
