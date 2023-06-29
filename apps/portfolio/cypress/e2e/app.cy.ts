describe('portfolio home page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display "Portfolio"', () => {
    cy.getBySelector('page-title').contains('Portfolio');
  });
});
