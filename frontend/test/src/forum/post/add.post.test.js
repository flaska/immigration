var main = require('../../shared/main');

const postContent = 'Well, my case was a little bit faster!';
const userName = 'Rashid';

describe('Add Post to Thread', function() {
  it('Should view current Posts', function () {
    browser.get('/forum/thread/view/ismylaw');
    texts([
      'Forum > Topics > Is my lawyer bad?',
      'My case is taking so long ... is it lawyers fault?',
      'No, it is usual these days to wait for a year or two.',
    ]);
    textIn('.test_infoPropertyValue_Posts', 2);
    textIn('.test_infoPropertyValue_Last_Post', 'Jan 3, 2018');


  });

  it('Should be able submit post', function(){
    click('#test_addPost');
    typeText('.ngx-editor-textarea', postContent);

    let cachedUserName = element(by.css('#test_userName')).getAttribute('value');
    expect(cachedUserName).toContain('Anonymous');
    expect(cachedUserName).not.toContain('Rashid');

    clearText('#test_userName');
    typeText('#test_userName', userName);
    click('#sendPost');
    text('Post saved.');
    textIn('.test_infoPropertyValue_Posts', 3);
    textIn('.test_infoPropertyValue_Last_Post', getCurrentDate());
  });

  it('Should hide add post form', function(){
    noTexts(['Posting as', 'Send']);
    texts([postContent, userName]);
  });

  it('Should remember username', function(){
    click('#test_addPost');
    let cachedUserName = element(by.css('#test_userName')).getAttribute('value');
    expect(cachedUserName).toEqual('Rashid');
  });

  it('Should keep data after refresh', function(){
    browser.get('/forum/thread/view/ismylaw');
    texts([postContent, userName]);
    textIn('.test_infoPropertyValue_Posts', 3);
    textIn('.test_infoPropertyValue_Last_Post', getCurrentDate());
  });

});
