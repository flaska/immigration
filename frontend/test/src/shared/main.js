var EC = protractor.ExpectedConditions;

global.text = function(text) {
  expect(element(by.css('body')).getText()).toContain(text);
};

global.noText = function(text, where){
  browser.sleep(200);
  expect(element(by.css(where?where:'body')).getText()).not.toContain(text);
};

global.textIn = function(css, text) {
  expect(element(by.css(css)).getText()).toContain(text);
};

global.textNotIn = function(css, text) {
  expect(element(by.css(css)).getText()).not.toContain(text);
};

global.click = function(css){
  browser.sleep(200);
  element(by.css(css)).click();
};

global.typeText = function(css, text){
  element(by.css(css)).sendKeys(text);
};

global.clearText = function (css, length) {
  for (var i=0; i++; i<length){
    element(by.css(css)).sendKeys(protractor.Key.BACK_SPACE);
  }
};

global.clicks = function(clicks){
  clicks.forEach((c)=>{
    click(c);
    browser.sleep(700);
  });
};

global.texts = function(texts){
  browser.sleep(200);
  texts.forEach((c)=>{
    text(c);
  });
};

global.noTexts  = function(texts, where){
  texts.forEach(t=>{
    noText(t, where);
  });
};
