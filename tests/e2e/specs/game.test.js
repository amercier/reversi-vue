// https://docs.cypress.io/api/introduction/api.html

describe('Game page', () => {
  it('Open the game page', () => {
    cy.visit('/');
    cy.contains('.game-player--black', 'Your turn');
  });
});
