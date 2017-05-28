import { MyTutorialPage } from './app.po';

describe('my-tutorial App', () => {
  let page: MyTutorialPage;

  beforeEach(() => {
    page = new MyTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
