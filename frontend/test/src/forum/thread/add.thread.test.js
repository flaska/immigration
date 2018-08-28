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

    let cachedUserName = element(by.css('#test_userName')).getAttribute('value');
    expect(cachedUserName).toContain('Anonymous');
    expect(cachedUserName).not.toContain(userName);

    clearText('#test_userName');
    typeText('#test_userName', userName);
    click('#sendPost');
    text('Thread saved.');
  });

  it('Should hide add post form', function(){
    noTexts(['Posting as', 'Send']);
    texts([threadTitle]);
  });

  it('Should remember username', function(){
    click('#test_newThread');
    let cachedUserName = element(by.css('#test_userName')).getAttribute('value');
    expect(cachedUserName).toEqual(userName);
  });

  it('Should be able to view the thread', function(){
    clickByLinkText(threadTitle);
    texts([
      'Forum > Topics > ' + threadTitle,
      threadContent,
    ]);
  });


});
