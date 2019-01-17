<template>
  <div class="board">
    <div class="board-grid">
      <div
        v-for="{ row, col, isStone, isMove, color } in cells"
        :key="`${row}-${col}`"
        :class="
          `board-cell ${(row + col) % 2 === 1 ? 'board-cell--alternate' : ''}`
        "
      >
        <Stone class="board-stone" v-if="isStone" :color="color" />
        <Move
          v-if="isMove"
          class="board-move"
          :color="color"
          @clicked="$emit('moved', row, col)"
          :title="position(row, col)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Stone from './Stone.vue';
import Move from './Move.vue';

/**
 * Reversi board component.
 */
export default {
  name: 'Board',
  components: {
    Stone,
    Move,
  },
  props: {
    /**
     * Array of cells.
     *
     * @type {Cell[]}
     * @see @/store For `Cell` documentation.
     */
    cells: {
      type: Array,
      required: true,
    },
  },
  methods: {
    /**
     * Get a string representation of a [row, col] set.
     *
     * @example
     *     position(0, 0); // "A1"
     *     position(7, 0); // "H2"
     *     position(0, 7); // "A8"
     *     position(7, 7); // "H8"
     *
     * @param {number} row Row index.
     * @param {number} col Column index.
     * @returns {string} A string representation of the position.
     */
    position(row, col) {
      return `${String.fromCharCode(97 + col).toUpperCase()}${row + 1}`;
    },
  },
};
</script>

<style lang="scss">
$board-padding: 1rem;
$grid-color: #1b881b;
$cell-padding: 10%;
$cell-border-thickness: 0.1rem;

.board {
  background: #a56538 url(../assets/wooden-board.jpg) repeat 0 0;
  background-attachment: fixed;
  padding: $board-padding;
  border-radius: $board-padding;
  box-shadow: 0 0 2rem 0.5rem #000;

  &-grid {
    display: grid;
    grid-template-columns: repeat($BOARD_SIZE, 1fr);
    grid-gap: 2 * $cell-border-thickness;

    background: $grid-color url(../assets/wooden-board.jpg) repeat 0 0;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-clip: padding-box;
    overflow: hidden; // Hide cells edge borders
    border: ($cell-border-thickness) solid rgba(0, 0, 0, 0.3);
  }

  &-cell {
    // Inset effect
    margin: -$cell-border-thickness;
    border-left: $cell-border-thickness solid rgba(255, 255, 255, 0.1);
    border-top: $cell-border-thickness solid rgba(255, 255, 255, 0.1);
    border-right: $cell-border-thickness solid rgba(0, 0, 0, 0.1);
    border-bottom: $cell-border-thickness solid rgba(0, 0, 0, 0.1);

    // Maintain 1:1 ratio
    height: 0;
    padding-top: 100%;
    position: relative;

    &--alternate {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }

  &-stone,
  &-move {
    position: absolute;
  }

  &-stone {
    top: $cell-padding;
    bottom: $cell-padding;
    right: $cell-padding;
    left: $cell-padding;
  }

  &-move {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
}

// High-DPI devices
// TODO automate resolution
$wooden-board-size: 430px, 556px;
@each $scale in (1.5, 2, 3) {
  @media (-webkit-min-device-pixel-ratio: $scale),
    (min-resolution: ($scale * 96)dpi) {
    .board,
    .board-grid {
      background-size: (nth($wooden-board-size, 1) / $scale)
        (nth($wooden-board-size, 2) / $scale);
    }
  }
}
</style>
