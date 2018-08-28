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
  });

  it('Should be able submit post', function(){
    click('#test_addPost');
    typeText('#test_postContentInput', postContent);

    let cachedUserName = element(by.css('#test_userName')).getAttribute('value');
    expect(cachedUserName).toContain('Anonymous');

    console.log(cachedUserName);

    clearText('#test_userName', 30);
    typeText('#test_userName', userName);
    click('#sendPost');
    text('Post saved.');
  });

  it('Should hide add post form', function(){
    noTexts(['Posting as', 'Send']);
    texts([postContent, userName]);
  });

  it('Should remember username', function(){
    click('#test_addPost');
    text('add-post-input','Rashid');
  });


});
