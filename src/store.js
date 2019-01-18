import Vue from 'vue';
import Vuex from 'vuex';
import { Game, PIECE_TYPES } from 'reversi';
import { BOARD_SIZE } from './config';

Vue.use(Vuex);

/**
 * Core logics for the Reversi.
 * @namespace reversi
 * @see NPM package documentation: https://www.npmjs.com/package/reversi
 *
 * @typedef {Object} Game
 * @memberof reversi
 *
 * @typedef {Object} Board
 * @memberof reversi
 *
 * @typedef {Object} Square
 * @memberof reversi
 *
 * @var PIECE_TYPES
 * @property {string} BLANK Empty cell.
 * @property {string} WHITE White stone.
 * @property {string} BLACK Black stone.
 * @memberof reversi
 */

/**
 * @typedef {Object} Cell
 * @property {number} row Row index.
 * @property {number} col Column index.
 * @property {number} isStone Row index.
 * @property {boolean} isStone Whether the cell contains a stone.
 * @property {boolean} isMove Whether the cell contains a potential move.
 * @property {string} color Color for the stone or move.
 */

/**
 * Get a square-to-cell converter.
 *
 * @example
 *   const { board } = new Game();
 *   const squares = board.squares[0]; // First row
 *   const cells = squares.map(getSquareToCell(board, PIECE_TYPES.BLACK);
 *
 * @param {Board} board - A game board.
 * @param {string} nextPieceType - Next color to play: either PIECE_TYPES.WHITE or PIECE_TYPES.BLACK.
 * @returns {squareToCell} The square-to-cell converter.
 *
 * @see Reversi package: https://www.npmjs.com/package/reversi
 */
export function getSquareToCell(board, nextPieceType) {
  /**
   * @typedef {Function} squareToCell
   * @example
   *   squareToCell({ rowIndex: 0, colIndex: 0, pieceType: 'BLACK' })
   * @param {Square} square - A reversi square.
   * @returns {Cell} The cell corresponding to `square`.
   */
  return function squareToCell({ rowIndex: row, colIndex: col, pieceType }) {
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
}

/**
 * Create a new store.
 *
 * @example
 *   createStore();
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
      /* eslint-disable jsdoc/require-param, jsdoc/require-example */

      /**
       * The game instance.
       *
       * @returns {Game} The game instance.
       */
      game({ game }) {
        return game;
      },

      /**
       * Current cells, as a flattened array.
       *
       * @returns {Cell[]} A list containing all cells of the board.
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

      /**
       * Whether the game is in its "start" state.
       *
       * @returns {boolean} `true` if the game is in its "start" state, `false` if a move has been
       * played.
       */
      isAtStart({ game }) {
        return (
          game.board.countByPieceType()[PIECE_TYPES.BLANK] ===
          BOARD_SIZE * BOARD_SIZE - 4
        );
      },

      /* eslint-enable jsdoc/require-param, jsdoc/require-example */
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
       * @example
       *   // Play on first row, last column
       *   $store.commit('play', { row: 0, col: 7 });
       *
       * @param {Object} state - Previous state.
       * @param {Object} move - Move.
       * @param {number} move.row - Index of row to play.
       * @param {number} move.col - Index of column to play.
       * @returns {undefined} Nothing.
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
       * @example
       *   // Reatart the game
       *   $store.commit('restart');
       *
       * @param {Object} state - Previous state.
       * @returns {undefined} Nothing.
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
