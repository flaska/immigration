var main = require('../../shared/main');

const threadTitle = 'EAD not approved for 7 months';

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
  });

  it('Should be able to format HTML', function() {
    typeText('.ngx-editor-textarea', 'Hey guys,' + protractor.Key.ENTER + protractor.Key.ENTER);
    typeText('.ngx-editor-textarea', 'I still have not received my ');
    click('.fa-bold');
    typeText('.ngx-editor-textarea', 'I-485 for seven months!!!');
    click('.fa-bold');
    typeText('.ngx-editor-textarea', protractor.Key.ENTER + protractor.Key.ENTER + 'Am I crazy or is USCIS crazy? What can I do?');
  });

  it('Should be able to save', function() {
    click('#sendPost');
    text('Thread saved.');
  });

  it('Should hide form and show new post', function() {
    noTexts(['Posting as', 'Send']);
    texts([threadTitle]);
  });

  it('Should be able to go to new thread and view HTML format', function(){
    clickByLinkText(threadTitle);
    texts([
      'Forum > Topics > ' + threadTitle,
      'Hey guys,',
      'I still have not received my ',
      'I-485 for seven months!!!',
      'Am I crazy or is USCIS crazy? What can I do?'
    ]);
    textIn('b', 'I-485 for seven months!!!');
  });

});
