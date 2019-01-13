import Vue from 'vue';
import Vuex from 'vuex';
import { Game, PIECE_TYPES } from 'reversi';
import { BOARD_SIZE } from './config';

Vue.use(Vuex);

/**
 * Get a square-to-cell converter.
 *
 * @typedef {Object} Cell
 * @property {number} row Row index.
 * @property {number} col Column index.
 * @property {number} isStone Row index.
 * @property {boolean} isStone Whether the cell contains a stone.
 * @property {boolean} isMove Whether the cell contains a potential move.
 * @property {string} color Color for the stone or move.
 *
 * @typedef {Function} SquareToCell
 * @param {Reversi.Square} square A reversi square.
 * @return {Cell} The cell corresponding to `square`.
 *
 * @param {reversi.Game} game A game
 * @param {string} nextPieceType Next color to play: either PIECE_TYPES.WHITE or PIECE_TYPES.BLACK.
 * @returns {SquareToCell} The square-to-cell converter.
 *
 * @see Reversi package: https://www.npmjs.com/package/reversi
 */
export const getSquareToCell = (board, nextPieceType) => ({
  rowIndex: row,
  colIndex: col,
  pieceType,
}) => {
  const isMove =
    pieceType === PIECE_TYPES.BLANK &&
    board.isPlaceableSquare(row, col, nextPieceType);
  return {
    row,
    col,
    isStone: pieceType !== PIECE_TYPES.BLANK,
    isMove,
    color: isMove
      ? board.isPlaceableSquare(row, col, nextPieceType)
        ? nextPieceType.toLowerCase()
        : null
      : pieceType.toLowerCase(),
  };
};

/**
 * Create a new store.
 *
 * @returns {Vuex.Store} A new store.
 */
export const createStore = () =>
  new Vuex.Store({
    /**
     * Store state
     *
     * @type {Object}
     * @see https://vuex.vuejs.org/guide/state.html
     */
    state: {
      /**
       * The `reversi` game instance.
       *
       * @type {Game}
       */
      game: new Game(),

      /**
       * Next color to play: either PIECE_TYPES.WHITE or PIECE_TYPES.BLACK.
       *
       * @type {String}
       */
      nextPieceType: PIECE_TYPES.BLACK,
    },

    /**
     * Store getters
     *
     * @type {Object}
     * @see https://vuex.vuejs.org/guide/getters.html
     */
    getters: {
      /**
       * The game instance.
       *
       * @type {reversi.Game}
       */
      game({ game }) {
        return game;
      },

      /**
       * Current cells, as a flattened array.
       *
       * @param {Cell[]}
       */
      cells({ game, nextPieceType }) {
        return game.board.squares.reduce(
          (cells, row) => [
            ...cells,
            ...row.map(getSquareToCell(game.board, nextPieceType)),
          ],
          [],
        );
      },

      /**
       * Current scores.
       *
       * @param {reversi.Game} game The game instance.
       * @returns {Object} An object containing current `white` and `black` scores (numbers).
       */
      scores({ game }) {
        const {
          [PIECE_TYPES.WHITE]: white,
          [PIECE_TYPES.BLACK]: black,
        } = game.board.countByPieceType();
        return { white, black };
      },

      /**
       * Current scores.
       *
       * @param {reversi.Game} game The game instance.
       * @returns {Object} An object containing current `white` and `black` statuses:
       * - "idle": do nothing,
       * - "play": player is playing,
       * - "won": player has won.
       */
      statuses({ game, nextPieceType }) {
        if (game.isEnded) {
          const whiteWon = game.getHighScorer() === PIECE_TYPES.WHITE;
          return {
            white: whiteWon ? 'won' : 'idle',
            black: whiteWon ? 'idle' : 'won',
          };
        }

        const nextIsWhite = nextPieceType === PIECE_TYPES.WHITE;
        return {
          white: nextIsWhite ? 'play' : 'idle',
          black: nextIsWhite ? 'idle' : 'play',
        };
      },

      isAtStart({ game }) {
        return (
          game.board.countByPieceType()[PIECE_TYPES.BLANK] ===
          BOARD_SIZE * BOARD_SIZE - 4
        );
      },
    },

    /**
     * Store mutations.
     *
     * @type {Object}
     */
    mutations: {
      /**
       * Proceed with a game play.
       *
       * @param {Object} state Previous state.
       * @param {Object} move Move.
       * @param {number} move.row Index of row to play.
       * @param {number} move.col Index of column to play.
       * @returns {void} Nothing.
       */
      play(state, { row, col }) {
        const {
          isNextActorPassed,
          pieceType,
          rivalPieceType,
        } = state.game.proceed(row, col);
        state.nextPieceType = isNextActorPassed ? pieceType : rivalPieceType;
      },

      /**
       * Restart the game.
       *
       * @returns {void} Nothing.
       */
      restart(state) {
        state.game = new Game();
        state.nextPieceType = PIECE_TYPES.BLACK;
      },
    },
  });

/**
 * The store singleton.
 */
export default createStore();
