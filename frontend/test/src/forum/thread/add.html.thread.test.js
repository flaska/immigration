var main = require('../../shared/main');

const threadTitle = 'I-485 taking forever';
const threadContent = 'Hello guys, my I-485 application is taking soo long. Where can I get some updates or help?';
const userName = 'Filip';

describe('Add New Thread', function() {
  it('Should view current threads', function () {
    browser.get('/forum');
    texts([
      'Forum > Topics',
      'Is my lawyer bad?',
    ]);
  });

  it('Should have create Thread form', function(){
    click('#test_newThread');
    typeText('#test_threadTitleInput', threadTitle);
    typeText('.ngx-editor-textarea', threadContent);

  });



});
