var main = require('../../shared/main');

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
    typeText('#test_postContentInput', 'Well, my case was a little bit faster!');
    clearText('#test_userName', 30);
    typeText('#test_userName', "Rashid");
    click('#sendPost');
    text('Post saved.');
  });


});
