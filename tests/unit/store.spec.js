import { getSquareToCell, createStore } from '@/store';
import { Game, PIECE_TYPES } from 'reversi';

describe('getSquareToCell', () => {
  const { board } = new Game();

  it('returns a function', () => {
    const squareToCell = getSquareToCell(board, PIECE_TYPES.BLACK);
    expect(typeof squareToCell).toBe('function');
  });

  it('which returns expected empty cells', () => {
    const squareToCell = getSquareToCell(board, PIECE_TYPES.BLACK);
    expect(squareToCell(board.squares[0][0])).toMatchSnapshot();
    expect(squareToCell(board.squares[7][7])).toMatchSnapshot();
  });

  it('which returns expected stones', () => {
    const squareToCell = getSquareToCell(board, PIECE_TYPES.BLACK);
    expect(squareToCell(board.squares[3][3])).toMatchSnapshot();
    expect(squareToCell(board.squares[3][4])).toMatchSnapshot();
    expect(squareToCell(board.squares[4][3])).toMatchSnapshot();
    expect(squareToCell(board.squares[4][4])).toMatchSnapshot();
  });

  it('which returns expected moves', () => {
    const squareToCell = getSquareToCell(board, PIECE_TYPES.BLACK);
    expect(squareToCell(board.squares[2][3])).toMatchSnapshot();
    expect(squareToCell(board.squares[3][2])).toMatchSnapshot();
    expect(squareToCell(board.squares[4][5])).toMatchSnapshot();
    expect(squareToCell(board.squares[5][4])).toMatchSnapshot();
  });
});

describe('createStore', () => {
  describe('getters', () => {
    describe('game', () => {
      it('is the game', () => {
        const store = createStore();
        expect(store.getters.game).toStrictEqual(new Game());
      });
    });

    describe('cells', () => {
      it('represents the cell squares', () => {
        const store = createStore();
        expect(store.getters.cells).toMatchSnapshot();
      });
    });

    describe('scores', () => {
      it('represents the correct scores', () => {
        const store = createStore();
        expect(store.getters.scores).toStrictEqual({ white: 2, black: 2 });
      });
    });

    describe('statuses', () => {
      it('represents the correct statuses', () => {
        const store = createStore();
        expect(store.getters.statuses).toStrictEqual({
          white: 'idle',
          black: 'play',
        });
      });
    });

    describe('mutations', () => {
      it('updates the game state', () => {
        const store = createStore();
        store.commit('play', { row: 2, col: 3 });
        expect(store.state.game).toMatchSnapshot();
        store.commit('play', { row: 2, col: 2 });
        expect(store.state.game).toMatchSnapshot();
      });

      it('updates the scores', () => {
        const store = createStore();
        store.commit('play', { row: 2, col: 3 });
        expect(store.getters.scores).toStrictEqual({ white: 1, black: 4 });
        store.commit('play', { row: 2, col: 2 });
        expect(store.getters.scores).toStrictEqual({ white: 3, black: 3 });
      });

      it('updates the statuses', () => {
        const store = createStore();
        store.commit('play', { row: 2, col: 3 });
        expect(store.getters.statuses).toStrictEqual({
          white: 'play',
          black: 'idle',
        });
        store.commit('play', { row: 2, col: 2 });
        expect(store.getters.statuses).toStrictEqual({
          white: 'idle',
          black: 'play',
        });
      });
    });
  });
});
