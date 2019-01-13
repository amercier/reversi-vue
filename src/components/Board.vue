<template>
  <div class="board">
    <div class="board-grid">
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>

      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell">
        <Move class="board-move" color="black" :onClick="() => {}" />
      </div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>

      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"><Stone class="board-stone" color="black" /></div>
      <div class="board-cell board-cell--alternate">
        <Stone class="board-stone" color="white" />
      </div>
      <div class="board-cell"><Stone class="board-stone" color="black" /></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>

      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate">
        <Stone class="board-stone" color="black" />
      </div>
      <div class="board-cell"><Stone class="board-stone" color="white" /></div>
      <div class="board-cell board-cell--alternate">
        <Stone class="board-stone" color="white" />
      </div>
      <div class="board-cell"><Stone class="board-stone" color="white" /></div>
      <div class="board-cell board-cell--alternate">
        <Move class="board-move" color="black" :onClick="() => {}" />
      </div>
      <div class="board-cell"></div>

      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"><Stone class="board-stone" color="black" /></div>
      <div class="board-cell board-cell--alternate">
        <Stone class="board-stone" color="white" />
      </div>
      <div class="board-cell"><Stone class="board-stone" color="black" /></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>

      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"><Stone class="board-stone" color="white" /></div>
      <div class="board-cell board-cell--alternate">
        <Stone class="board-stone" color="black" />
      </div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>

      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell">
        <Move class="board-move" color="black" :onClick="() => {}" />
      </div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell">
        <Move class="board-move" color="black" :onClick="() => {}" />
      </div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>

      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
      <div class="board-cell board-cell--alternate"></div>
      <div class="board-cell"></div>
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
};
</script>

<style lang="scss">
$board-padding: 1em;
$grid-color: #1b881b;
$cell-padding: 10%;
$cell-border-thickness: 0.1em;

.board {
  background: #c58e57 url(../assets/wooden-board.jpg) repeat 0 0;
  background-attachment: fixed;
  padding: $board-padding;
  border-radius: $board-padding;
  box-shadow: 0 0 2em 0.5em #000;

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
</style>