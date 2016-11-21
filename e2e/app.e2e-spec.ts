import { Ng2X3domPage } from './app.po';

describe('ng2-x3dom App', function() {
  let page: Ng2X3domPage;

  beforeEach(() => {
    page = new Ng2X3domPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
