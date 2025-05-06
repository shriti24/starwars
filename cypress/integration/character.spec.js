/// <reference types="cypress" />

describe('Character View Page', () => {
 beforeEach(() => {
  // Visit the character view page
  cy.visit('http://localhost:3000');
 });

 it('should display the list of characters', () => {
  // Check if the character list is visible
  cy.get('[data-testid="character-list"]').should('be.visible');
 });

 it('should navigate to character details when a character is clicked', () => {
  // Click on the first character in the list
  cy.get('[data-testid="character-item"]').first().click();

  // Verify that the character details page is displayed
  cy.get('[data-testid="character-details"]').should('be.visible');
 });

 it('should display a message if no characters are available', () => {
  // Mock API response for no characters
  cy.intercept('GET', '/api/characters', {
   statusCode: 200,
   body: [],
  }).as('getCharacters');

  // Reload the page
  cy.reload();

  // Check for the no characters message
  cy.get('[data-testid="no-characters"]').should('be.visible');
 });
});