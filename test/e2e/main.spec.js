'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./main.po');
  });

  it('should include the right text', function() {
    expect(page.text.getText()).toBe('Oh hey!lo world');
  });

});
