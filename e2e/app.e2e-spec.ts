import { ZelazowawolaPage } from './app.po';

describe('zelazowawola App', () => {
  let page: ZelazowawolaPage;

  beforeEach(() => {
    page = new ZelazowawolaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
