/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    getBySelector(selector: string): Cypress.Chainable<JQuery<HTMLElement>>;
  }
}

// -- This is a parent command --
Cypress.Commands.add('getBySelector', (selector: string) => {
  return cy.get(`[data-cy="${selector}"]`);
});
