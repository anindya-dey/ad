describe('blog home page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display "Blog"', () => {
    cy.getBySelector("page-title").contains("Blog");
  });
});
