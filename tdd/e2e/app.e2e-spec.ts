import { TddPage, CommentPage } from './app.po';
import { RouterTestingMoc\ } from '@angular/router';


describe('Comment App', () => {
  let page: CommentPage;

  beforeEach(() => {
    page = new CommentPage();
  });

  it('should display heading Comment App', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Comment App');
  });
});
/*
describe('If I post a new comment', () => {
  describe('When I push the submit button', () => {
    beforeEach(() => {

    });
    it('Should then add the comment', () => {

    });
  });
});
*/