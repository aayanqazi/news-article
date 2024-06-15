describe('NY Times Most Popular Articles App', () => {
  it('should display the home page', () => {
    cy.visit('/');
    cy.contains('Most Viewed Articles');
  });

  it('should navigate to article details page', () => {
    cy.visit('/');
    cy.get(`[data-testid="item"]`).should('be.visible')
    cy.get(`[data-testid="item"]`).first().click();
  });
});
