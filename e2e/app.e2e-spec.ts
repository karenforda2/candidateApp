import { MediacomAppPage } from './app.po';

describe('mediacom-app App', () => {
  let page: MediacomAppPage;

  beforeEach(() => {
    page = new MediacomAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
