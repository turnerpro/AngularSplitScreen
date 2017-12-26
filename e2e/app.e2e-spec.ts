import { AngularSplitScreenPage } from './app.po';

describe('angular-split-screen App', () => {
  let page: AngularSplitScreenPage;

  beforeEach(() => {
    page = new AngularSplitScreenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
