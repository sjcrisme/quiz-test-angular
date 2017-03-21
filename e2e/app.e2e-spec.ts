import { QuizTestPage } from './app.po';

describe('quiz-test App', function() {
  let page: QuizTestPage;

  beforeEach(() => {
    page = new QuizTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
