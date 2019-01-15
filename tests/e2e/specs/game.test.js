describe('Game page', () => {
  it('Displays the initial board', () => {
    cy.visit('/');
    cy.get('.game-player--white .player-score').should('have.text', '2');
    cy.get('.game-player--black .player-score').should('have.text', '2');
    cy.get('.game-player--white .player-status').should('have.text', '');
    cy.get('.game-player--black .player-status').should('contain', 'Your turn');
    cy.get(`.board-cell:nth-child(${1 + 8 * 3 + 3}) > :first-child`).should(
      'match',
      '.board-stone.stone--white',
    );
    cy.get(`.board-cell:nth-child(${1 + 8 * 3 + 4}) > :first-child`).should(
      'match',
      '.board-stone.stone--black',
    );
    cy.get(`.board-cell:nth-child(${1 + 8 * 4 + 3}) > :first-child`).should(
      'match',
      '.board-stone.stone--black',
    );
    cy.get(`.board-cell:nth-child(${1 + 8 * 4 + 4}) > :first-child`).should(
      'match',
      '.board-stone.stone--white',
    );
  });

  it('Can complete a game', () => {
    cy.visit('/');

    [
      [2, 3, 1, 4],
      [2, 2, 3, 3],
      [4, 5, 2, 5],
      [5, 5, 4, 4],
      [3, 2, 3, 6],
      [4, 2, 6, 4],
      [5, 3, 5, 6],
      [5, 4, 7, 5],
      [3, 5, 6, 7],
      [2, 4, 11, 3], // Nice move, white xD
      [4, 1, 8, 7],
      [5, 0, 10, 6],
      [2, 5, 9, 8],
      [5, 2, 12, 6],
      [3, 1, 10, 9],
      [4, 0, 12, 8],
      [5, 1, 11, 10],
      [3, 6, 17, 5],
      [4, 7, 16, 7],
      [2, 7, 18, 6],
      [2, 0, 17, 8],
      [2, 1, 19, 7],
      [2, 6, 18, 9],
      [4, 6, 20, 8],
      [5, 6, 14, 15],
      [5, 7, 22, 8],
      [1, 3, 20, 11],
      [0, 3, 25, 7],
      [3, 0, 20, 13],
      [3, 7, 22, 12],
      [0, 2, 20, 15],
      [1, 4, 26, 10],
      [0, 5, 24, 13],
      [0, 4, 27, 11],
      [1, 2, 25, 14],
      [1, 5, 27, 13],
      [6, 3, 23, 18],
      [7, 3, 29, 13],
      [7, 4, 28, 15],
      [7, 2, 30, 14],
      [6, 2, 28, 17],
      [7, 5, 30, 16],
      [6, 4, 28, 19],
      [6, 5, 30, 18],
      [0, 6, 27, 22],
      [6, 1, 32, 18],
      [7, 6, 29, 22],
      [7, 7, 31, 21],
      [7, 0, 29, 24],
      [1, 0, 37, 17],
      [6, 0, 36, 19],
      [7, 1, 41, 15],
      [0, 0, 36, 21],
      [0, 7, 39, 19],
      [6, 7, 35, 24],
      [6, 6, 37, 23],
      [1, 7, 32, 29],
      [0, 1, 38, 24],
      [1, 1, 35, 28],
      [1, 6, 37, 27],
    ].forEach(([row, col, white, black]) => {
      cy.get(`.board-cell:nth-child(${1 + 8 * row + col}) .board-move`).click();
      cy.get('.game-player--white .player-score').should(
        'have.text',
        `${white}`,
      );
      cy.get('.game-player--black .player-score').should(
        'have.text',
        `${black}`,
      );
    });

    cy.get('.game-player--white .player-status').should(
      'have.text',
      'You win!',
    );
  });
});
