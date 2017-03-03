import { browser, element, by } from 'protractor';
/*
export class TddPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
*/
export class CommentPage {
  navigateTo() {
    return browser.get('/component');
  }
  getParagraphText() {
    return element(by.css('h2')).getText();
  }
}
