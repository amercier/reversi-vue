import { getSquareToCell, createStore } from '@/store';
import { Game, PIECE_TYPES } from 'reversi';

describe('getSquareToCell', () => {
  const { board } = new Game();
  let squareToCell;

  beforeEach(() => {
    squareToCell = getSquareToCell(board, PIECE_TYPES.BLACK);
  });

  it('returns a function', () => {
    expect(typeof squareToCell).toBe('function');
  });

  it('which returns expected empty cells', () => {
    expect(squareToCell(board.squares[0][0])).toMatchSnapshot();
    expect(squareToCell(board.squares[7][7])).toMatchSnapshot();
  });

  it('which returns expected stones', () => {
    expect(squareToCell(board.squares[3][3])).toMatchSnapshot();
    expect(squareToCell(board.squares[3][4])).toMatchSnapshot();
    expect(squareToCell(board.squares[4][3])).toMatchSnapshot();
    expect(squareToCell(board.squares[4][4])).toMatchSnapshot();
  });

  it('which returns expected moves', () => {
    expect(squareToCell(board.squares[2][3])).toMatchSnapshot();
    expect(squareToCell(board.squares[3][2])).toMatchSnapshot();
    expect(squareToCell(board.squares[4][5])).toMatchSnapshot();
    expect(squareToCell(board.squares[5][4])).toMatchSnapshot();
  });
});

describe('createStore', () => {
  let store;

  beforeEach(() => {
    store = createStore();
  });

  describe('getters', () => {
    describe('game', () => {
      it('is the game', () => {
        expect(store.getters.game).toEqual(new Game());
      });
    });

    describe('cells', () => {
      it('represents the cell squares', () => {
        expect(store.getters.cells).toMatchSnapshot();
      });
    });

    describe('scores', () => {
      it('represents the correct scores', () => {
        expect(store.getters.scores).toEqual({ white: 2, black: 2 });
      });
    });

    describe('statuses', () => {
      it('represents the correct statuses', () => {
        expect(store.getters.statuses).toEqual({
          white: 'idle',
          black: 'play',
        });
      });
    });

    describe('mutations', () => {
      it('updates the game state', () => {
        store.commit('play', { row: 2, col: 3 });
        expect(store.state.game).toMatchSnapshot();
        store.commit('play', { row: 2, col: 2 });
        expect(store.state.game).toMatchSnapshot();
      });

      it('updates the scores', () => {
        store.commit('play', { row: 2, col: 3 });
        expect(store.getters.scores).toEqual({ white: 1, black: 4 });
        store.commit('play', { row: 2, col: 2 });
        expect(store.getters.scores).toEqual({ white: 3, black: 3 });
      });

      it('updates the statuses', () => {
        store.commit('play', { row: 2, col: 3 });
        expect(store.getters.statuses).toEqual({
          white: 'play',
          black: 'idle',
        });
        store.commit('play', { row: 2, col: 2 });
        expect(store.getters.statuses).toEqual({
          white: 'idle',
          black: 'play',
        });
      });
    });
  });
});
